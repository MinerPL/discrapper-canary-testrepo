"use strict";
s.r(t), s.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return p
  },
  getLocalizedPricingNotice: function() {
    return h
  },
  getLocalizedPricingBannerStrings: function() {
    return f
  }
}), s("222007"), s("424973");
var n = s("592861"),
  r = s("988415"),
  a = s("701909"),
  l = s("153160"),
  i = s("49111"),
  o = s("843455"),
  u = s("782340");
let d = new Set([o.CurrencyCodes.ARS, o.CurrencyCodes.CLP, o.CurrencyCodes.COP]),
  c = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
  p = {
    [i.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [i.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [i.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
    [i.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [i.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [i.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
    [i.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [i.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [i.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
    [i.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [i.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [i.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [i.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
    [i.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
    [i.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [i.PaymentSourceTypes.APPLE]: () => u.default.Messages.PAYMENT_SOURCE_APPLE
  },
  S = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
  h = (e, t, s, n) => {
    if (null == e) return "";
    let a = (0, r.getI18NCountryName)(e);
    if (t === o.CurrencyCodes.EUR) return s ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: a
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return n ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: a
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: a
    })
  },
  f = e => {
    let {
      localizedPricingPromo: t,
      subscription: s,
      forceSingleLine: n = !1,
      userLocale: h
    } = e, {
      countryCode: f,
      amount: _,
      currency: A,
      paymentSourceTypes: P
    } = t, I = 0 !== P.length, C = E(f), T = (0, l.formatPrice)(_, A, {
      style: "currency",
      currency: A,
      currencyDisplay: "symbol",
      localeOverride: C
    }), m = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: A.toUpperCase(),
      localizedPriceWithCurrencySymbol: T
    });
    if (c.has(A) && (m = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: T
      })), d.has(A) && (m = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase(),
        localizedPriceWithCurrencySymbol: T
      })), null != s && !s.hasPremiumNitroMonthly && (m = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase()
      })), A === o.CurrencyCodes.EUR && (m = n ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, r.getI18NCountryName)(f),
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      })), I) {
      let e = S.filter(e => P.includes(e)),
        t = P.filter(e => !S.includes(e)),
        s = [...e, ...t],
        n = s.slice(0, 2).map(e => {
          var t, s;
          return null !== (s = null === (t = p[e]) || void 0 === t ? void 0 : t.call(p)) && void 0 !== s ? s : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      P.length >= 3 && n.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let r = new Intl.ListFormat(h, {
        style: "short",
        type: "conjunction"
      });
      m = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: r.format(n)
      })
    }
    return {
      localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, r.getI18NCountryName)(f)
      }),
      localizedPricingBannerBody: m,
      localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: I ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  E = e => {
    let t = n.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }