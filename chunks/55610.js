"use strict";
n.r(t), n.d(t, {
  useShouldShowLegacyPricingNotice: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  a = n("512722"),
  r = n.n(a),
  u = n("759231"),
  o = n("63063"),
  c = n("631818"),
  d = n("987033"),
  m = n("53900"),
  f = n("981631"),
  p = n("689938"),
  _ = n("47353");

function S() {
  let e = (0, m.default)(),
    {
      enabled: t
    } = c.default.useExperiment({
      location: "5ebfcf_1"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: n
    } = d.default.useExperiment({
      location: "5ebfcf_2"
    }, {
      autoTrackExposure: !1
    });
  return null != e && ("PL" === e ? t : "TR" === e && n)
}
t.default = e => {
  var t, n;
  let {
    fromBoostCancelModal: s,
    className: a
  } = e, c = (0, m.default)();
  if (!S()) return null;
  return r()(null != c, "Subscription billing country should not be null"), (0, i.jsxs)("div", {
    className: l()(_.noticeRoot, a),
    children: [(0, i.jsx)("div", {
      className: _.iconContainer,
      children: (0, i.jsx)(u.default, {
        className: _.infoIcon
      })
    }), (0, i.jsx)("div", {
      className: _.text,
      children: (t = c, n = s, "PL" === t ? n ? p.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? p.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? p.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
        helpCenterLink: o.default.getArticleURL(f.HelpdeskArticles.LOCALIZED_PRICING)
      })
    })]
  })
}