import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const read = name => readFileSync(new URL('../' + name, import.meta.url), 'utf8');
const product = read('produto-ai-fidelity.html');
const newsletter = read('newsletter.html');
const inline = html => [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1];

test('Vitrine leva à amostra e ao cadastro gratuito', () => {
  assert.match(read('index.html'), /href="produto-ai-fidelity.html">Ver amostra e preço de lançamento/);
  assert.match(product, /<summary style="[^"]*">Experimentar a revisão/);
  assert.equal(product.match(/<fieldset>[\s\S]*?<\/fieldset>/)[0].match(/type="checkbox"/g).length, 3);
  assert.match(product, /id="fidelityBuy"[^>]+href="newsletter.html\?interesse=ai-fidelity"/);
  runInNewContext(inline(product), {window: {}});
});

for (const tagged of [true, false]) {
  test('Destino Beehiiv com interesse identificado: ' + tagged, () => {
    const source = newsletter.match(/<iframe[^>]+src="([^"]+)"/)[1];
    const form = { src: source };
    const link = { href: newsletter.match(/id="form-direto" href="([^"]+)"/)[1] };
    const heading = {};
    const document = {
      getElementById: id => id === 'newsletter-form' ? form : link,
      querySelector: selector => selector.endsWith('h2') ? heading : {}
    };
    runInNewContext(inline(newsletter), {location: {search: tagged ? '?interesse=ai-fidelity' : ''}, URL, URLSearchParams, document});
    assert.equal(link.href, form.src);
    assert.equal(new URL(form.src).hostname, 'subscribe-forms.beehiiv.com');
    assert.equal(new URL(form.src).searchParams.get('utm_campaign'), tagged ? 'ai-fidelity' : null);
    assert.equal(Boolean(heading.textContent), tagged);
  });
}
