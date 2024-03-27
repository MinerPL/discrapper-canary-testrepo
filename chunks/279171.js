"use strict";
n.r(t), n.d(t, {
  useShouldShowLegacyPricingNotice: function() {
    return E
  },
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  u = n.n(a),
  r = n("627445"),
  i = n.n(r),
  s = n("423487"),
  o = n("701909"),
  c = n("35188"),
  _ = n("391533"),
  d = n("296253"),
  I = n("49111"),
  f = n("782340"),
  N = n("816461");

function E() {
  let e = (0, d.default)(),
    {
      enabled: t
    } = c.default.useExperiment({
      location: "5ebfcf_1"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: n
    } = _.default.useExperiment({
      location: "5ebfcf_2"
    }, {
      autoTrackExposure: !1
    });
  return null != e && ("PL" === e ? t : "TR" === e && n)
}
var S = e => {
  var t, n;
  let {
    fromBoostCancelModal: a,
    className: r
  } = e, c = (0, d.default)(), _ = E();
  if (!_) return null;
  return i(null != c, "Subscription billing country should not be null"), (0, l.jsxs)("div", {
    className: u(N.noticeRoot, r),
    children: [(0, l.jsx)("div", {
      className: N.iconContainer,
      children: (0, l.jsx)(s.default, {
        className: N.infoIcon
      })
    }), (0, l.jsx)("div", {
      className: N.text,
      children: (t = c, n = a, "PL" === t ? n ? f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
        helpCenterLink: o.default.getArticleURL(I.HelpdeskArticles.LOCALIZED_PRICING)
      })
    })]
  })
}