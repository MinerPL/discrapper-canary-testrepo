"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("789020");
var a, n, i = s("314877"),
  l = s("81825"),
  r = s("630388"),
  u = s("46141"),
  o = s("659181"),
  d = s("255078"),
  c = s("981631"),
  p = s("474936");

function m(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = a || (a = {}))[n.GIFT = 1] = "GIFT", n[n.PREORDER = 8] = "PREORDER";
class f extends l.default {
  static createFromServer(e) {
    let t = null != e.payment_source ? u.default.createFromServer(e.payment_source) : null,
      s = null != e.sku ? o.default.createFromServer(e.sku) : null,
      a = null != e.subscription ? d.default.createFromServer(e.subscription) : null;
    return new f({
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
      paymentSource: t,
      paymentGateway: e.payment_gateway,
      paymentGatewayPaymentId: e.payment_gateway_payment_id,
      flags: e.flags,
      subscription: a,
      skuId: e.sku_id,
      skuPrice: e.sku_price,
      sku: s,
      downloadableInvoice: e.downloadable_invoice,
      downloadableRefundInvoices: e.downloadable_refund_invoices,
      premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons
    })
  }
  get isPurchasedViaApple() {
    return this.paymentGateway === c.PaymentGateways.APPLE
  }
  get isPurchasedViaGoogle() {
    return this.paymentGateway === c.PaymentGateways.GOOGLE
  }
  get isPurchasedExternally() {
    return this.isPurchasedViaApple || this.isPurchasedViaGoogle
  }
  get isSubscription() {
    return null != this.subscription
  }
  get isPremiumSubscription() {
    return null != this.subscription && p.PREMIUM_PLANS.has(this.subscription.planId)
  }
  get isPremiumGuildSubscription() {
    return null != this.subscription && null != this.subscription.additionalPlans.find(e => {
      let {
        planId: t
      } = e;
      return p.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
    })
  }
  get isGift() {
    return r.hasFlag(this.flags, 1)
  }
  get isPremiumGift() {
    return this.isGift && Object.values(p.PremiumSubscriptionSKUs).includes(this.skuId)
  }
  get isGuildProductPurchase() {
    return null != this.sku && (this.sku.productLine === c.SKUProductLines.GUILD_PRODUCT || r.hasFlag(this.sku.flags, i.SKUFlags.GUILD_PRODUCT))
  }
  get isSoftDeletedProduct() {
    var e;
    return (null === (e = this.sku) || void 0 === e ? void 0 : e.deleted) === !0
  }
  get isCollectible() {
    return null != this.sku && this.sku.productLine === c.SKUProductLines.COLLECTIBLES
  }
  constructor(e) {
    super(), m(this, "id", void 0), m(this, "createdAt", void 0), m(this, "currency", void 0), m(this, "tax", void 0), m(this, "taxInclusive", void 0), m(this, "amount", void 0), m(this, "amountRefunded", void 0), m(this, "status", void 0), m(this, "description", void 0), m(this, "downloadableInvoice", void 0), m(this, "downloadableRefundInvoices", void 0), m(this, "flags", void 0), m(this, "paymentSource", void 0), m(this, "paymentGateway", void 0), m(this, "paymentGatewayPaymentId", void 0), m(this, "subscription", void 0), m(this, "skuId", void 0), m(this, "skuPrice", void 0), m(this, "sku", void 0), m(this, "premiumRefundDisqualificationReasons", void 0), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.paymentGateway = e.paymentGateway, this.paymentGatewayPaymentId = e.paymentGatewayPaymentId, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons
  }
}