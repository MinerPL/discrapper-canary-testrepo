"use strict";
s.r(t), s.d(t, {
  useShouldShowLegacyPricingNotice: function() {
    return _
  },
  default: function() {
    return m
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("627445"),
  r = s.n(i),
  o = s("423487"),
  d = s("701909"),
  u = s("35188"),
  c = s("391533"),
  S = s("296253"),
  E = s("49111"),
  T = s("782340"),
  f = s("816461");

function _() {
  let e = (0, S.default)(),
    {
      enabled: t
    } = u.default.useExperiment({
      location: "5ebfcf_1"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: s
    } = c.default.useExperiment({
      location: "5ebfcf_2"
    }, {
      autoTrackExposure: !1
    });
  return null != e && ("PL" === e ? t : "TR" === e && s)
}
var m = e => {
  var t, s;
  let {
    fromBoostCancelModal: n,
    className: i
  } = e, u = (0, S.default)(), c = _();
  if (!c) return null;
  return r(null != u, "Subscription billing country should not be null"), (0, a.jsxs)("div", {
    className: l(f.noticeRoot, i),
    children: [(0, a.jsx)("div", {
      className: f.iconContainer,
      children: (0, a.jsx)(o.default, {
        className: f.infoIcon
      })
    }), (0, a.jsx)("div", {
      className: f.text,
      children: (t = u, s = n, "PL" === t ? s ? T.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : T.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? s ? T.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : T.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : s ? T.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : T.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
        helpCenterLink: d.default.getArticleURL(E.HelpdeskArticles.LOCALIZED_PRICING)
      })
    })]
  })
}