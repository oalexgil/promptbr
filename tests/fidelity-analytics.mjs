import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import test from 'node:test';

const read = name => readFileSync(new URL('../' + name, import.meta.url), 'utf8');
const html = read('produto-ai-fidelity.html');
const script = read('fidelity-analytics.js');

test('Medição da oferta exige aceite, respeita retirada e distingue clique de inscrição', () => {
  assert.ok(html.includes('id="offerAnalytics"') && html.includes('defer src="fidelity-analytics.js"'));
  const calls = [];
  const tags = [];
  const choice = {addEventListener: (_, fn) => calls.push(fn)};
  const cta = {addEventListener: (_, fn) => calls.push(fn), getAttribute: () => 'newsletter.html?interesse=ai-fidelity'};
  let pref = '{}';
  const window = {addEventListener() {}};
  const document = {getElementById: id => id === 'offerAnalytics' ? choice : cta,
    createElement: () => ({}), head: {append: el => tags.push(el)}};
  runInNewContext(script, {document, window, location: new URL('https://brprompt.tec.br/produto-ai-fidelity.html?teste=privado'),
    localStorage: {getItem: () => pref, setItem: (_, v) => {pref = v;}}});
  const [change, click] = calls;
  click();
  assert.equal(tags.length, 0);
  assert.equal(window.dataLayer, undefined);
  choice.checked = true;
  change();
  click();
  assert.equal(tags.length, 1);
  assert.equal(window.dataLayer.filter(v => v[0] === 'config').length, 1);
  assert.equal(window.dataLayer.at(-1)[1], 'fidelity_signup_click');
  assert.ok(!JSON.stringify(window.dataLayer).includes('privado'));
  choice.checked = false;
  change();
  const count = window.dataLayer.length;
  click();
  assert.equal(window.dataLayer.length, count);
  assert.equal(window['ga-disable-G-ZK59708GWD'], true);
  assert.equal(JSON.parse(pref).ads, false);
});
