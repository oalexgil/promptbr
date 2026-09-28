# AI Fidelity Workflow Pack — Launch Notes

Status: **ready except payment account activation**

## Offer
- Price hypothesis: BRL 29 one-time
- Delivery: digital ZIP, manual by buyer email during beta
- Sales surface: PromptBR
- Checkout: Stripe Payment Link (hosted)

## Stripe
A live Stripe Product and BRL 29 Price have been created.
Payment Link creation is blocked because the connected account currently has charges disabled and payment capabilities inactive.

Do not merge the public sales-page branch with an enabled-buy CTA until the Stripe account is activated and a working Payment Link has been verified end to end.

## Fulfillment
The product package is intentionally not committed to this public repository.

The customer ZIP contains:
- START-HERE.html
- WORKFLOW.md
- PROMPTS.md
- FIDELITY-CHECKLIST.md
- SCORECARD.csv
- LICENSE.txt
- README.txt

## Launch checklist
- [ ] Activate Stripe account for live charges.
- [ ] Confirm at least one valid payment method for BRL.
- [ ] Create Payment Link for the existing R$29 Price.
- [ ] Replace disabled CTAs in produto-fidelity-pack.html.
- [ ] Test a complete checkout.
- [ ] Confirm buyer email appears in Stripe.
- [ ] Define manual fulfillment response time.
- [ ] Merge this branch into main.
- [ ] Add product entry to PromptBR home/sitemap only after checkout works.
