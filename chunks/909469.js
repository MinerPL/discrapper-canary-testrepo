"use strict";
s.r(t), s.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return p
  },
  getLocalizedPricingNotice: function() {
    return S
  },
  getLocalizedPricingBannerStrings: function() {
    return f
  }
}), s("222007"), s("424973");
var r = s("592861"),
  n = s("988415"),
  a = s("701909"),
  i = s("153160"),
  l = s("49111"),
  o = s("843455"),
  u = s("782340");
let d = new Set([o.CurrencyCodes.ARS, o.CurrencyCodes.CLP, o.CurrencyCodes.COP]),
  c = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
  p = {
    [l.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [l.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [l.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
    [l.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [l.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [l.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [l.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
    [l.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [l.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [l.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
    [l.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [l.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [l.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [l.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
    [l.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
    [l.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
  },
  h = [l.PaymentSourceTypes.EPS, l.PaymentSourceTypes.BANCONTACT, l.PaymentSourceTypes.IDEAL, l.PaymentSourceTypes.SOFORT, l.PaymentSourceTypes.GIROPAY, l.PaymentSourceTypes.SEPA_DEBIT, l.PaymentSourceTypes.PAYSAFE_CARD],
  S = (e, t, s, r) => {
    if (null == e) return "";
    let a = (0, n.getI18NCountryName)(e);
    if (t === o.CurrencyCodes.EUR) return s ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: a
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return r ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: a
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: a
    })
  },
  f = e => {
    let {
      localizedPricingPromo: t,
      subscription: s,
      forceSingleLine: r = !1,
      userLocale: S
    } = e, {
      countryCode: f,
      amount: P,
      currency: A,
      paymentSourceTypes: _
    } = t, m = 0 !== _.length, C = E(f), I = (0, i.formatPrice)(P, A, {
      style: "currency",
      currency: A,
      currencyDisplay: "symbol",
      localeOverride: C
    }), T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: A.toUpperCase(),
      localizedPriceWithCurrencySymbol: I
    });
    if (c.has(A) && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: I
      })), d.has(A) && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase(),
        localizedPriceWithCurrencySymbol: I
      })), null != s && !s.hasPremiumNitroMonthly && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase()
      })), A === o.CurrencyCodes.EUR && (T = r ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, n.getI18NCountryName)(f),
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      })), m) {
      let e = h.filter(e => _.includes(e)),
        t = _.filter(e => !h.includes(e)),
        s = [...e, ...t],
        r = s.slice(0, 2).map(e => {
          var t, s;
          return null !== (s = null === (t = p[e]) || void 0 === t ? void 0 : t.call(p)) && void 0 !== s ? s : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      _.length >= 3 && r.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let n = new Intl.ListFormat(S, {
        style: "short",
        type: "conjunction"
      });
      T = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: n.format(r)
      })
    }
    return {
      localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, n.getI18NCountryName)(f)
      }),
      localizedPricingBannerBody: T,
      localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: m ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  E = e => {
    let t = r.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }