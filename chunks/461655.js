t.d(s, {
  Z: function() {
return I;
  }
}), t(789020);
var n, a, i = t(314877),
  r = t(81825),
  o = t(630388),
  l = t(46141),
  c = t(659181),
  d = t(255078),
  _ = t(981631),
  E = t(474936);

function u(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
(a = n || (n = {}))[a.GIFT = 1] = 'GIFT', a[a.PREORDER = 8] = 'PREORDER';
class I extends r.Z {
  static createFromServer(e) {
let s = null != e.payment_source ? l.ZP.createFromServer(e.payment_source) : null,
  t = null != e.sku ? c.Z.createFromServer(e.sku) : null,
  n = null != e.subscription ? d.Z.createFromServer(e.subscription) : null;
return new I({
  id: e.id,
  createdAt: new Date(e.created_at),
  currency: e.currency,
  tax: e.tax,
  taxInclusive: e.tax_inclusive,
  amount: e.amount,
  amountRefunded: e.amount_refunded,
  status: e.status,
  metadata: e.metadata,
  description: e.description,
  paymentSource: s,
  paymentGateway: e.payment_gateway,
  paymentGatewayPaymentId: e.payment_gateway_payment_id,
  flags: e.flags,
  subscription: n,
  skuId: e.sku_id,
  skuPrice: e.sku_price,
  sku: t,
  downloadableInvoice: e.downloadable_invoice,
  downloadableRefundInvoices: e.downloadable_refund_invoices,
  premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons
});
  }
  get isPurchasedViaApple() {
return this.paymentGateway === _.gg$.APPLE;
  }
  get isPurchasedViaGoogle() {
return this.paymentGateway === _.gg$.GOOGLE;
  }
  get isPurchasedExternally() {
return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
  }
  get isSubscription() {
return null != this.subscription;
  }
  get isPremiumSubscription() {
return null != this.subscription && E.dJ.has(this.subscription.planId);
  }
  get isPremiumGuildSubscription() {
return null != this.subscription && null != this.subscription.additionalPlans.find(e => {
  let {
    planId: s
  } = e;
  return E.Z1.has(s);
});
  }
  get isGift() {
return o.yE(this.flags, 1);
  }
  get isPremiumGift() {
return this.isGift && Object.values(E.Si).includes(this.skuId);
  }
  get isGuildProductPurchase() {
return null != this.sku && (this.sku.productLine === _.POd.GUILD_PRODUCT || o.yE(this.sku.flags, i.l.GUILD_PRODUCT));
  }
  get isSoftDeletedProduct() {
var e;
return (null === (e = this.sku) || void 0 === e ? void 0 : e.deleted) === !0;
  }
  get isCollectible() {
return null != this.sku && this.sku.productLine === _.POd.COLLECTIBLES;
  }
  constructor(e) {
super(), u(this, 'id', void 0), u(this, 'createdAt', void 0), u(this, 'currency', void 0), u(this, 'tax', void 0), u(this, 'taxInclusive', void 0), u(this, 'amount', void 0), u(this, 'amountRefunded', void 0), u(this, 'status', void 0), u(this, 'description', void 0), u(this, 'downloadableInvoice', void 0), u(this, 'downloadableRefundInvoices', void 0), u(this, 'flags', void 0), u(this, 'paymentSource', void 0), u(this, 'paymentGateway', void 0), u(this, 'paymentGatewayPaymentId', void 0), u(this, 'subscription', void 0), u(this, 'skuId', void 0), u(this, 'skuPrice', void 0), u(this, 'sku', void 0), u(this, 'premiumRefundDisqualificationReasons', void 0), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.paymentGateway = e.paymentGateway, this.paymentGatewayPaymentId = e.paymentGatewayPaymentId, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons;
  }
}