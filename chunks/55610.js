"use strict";
n.r(t), n.d(t, {
  useShouldShowLegacyPricingNotice: function() {
    return _
  }
});
var i = n("735250");
n("470079");
var s = n("803997"),
  a = n.n(s),
  l = n("512722"),
  r = n.n(l),
  u = n("759231"),
  o = n("63063"),
  c = n("631818"),
  d = n("987033"),
  m = n("53900"),
  f = n("981631"),
  p = n("689938"),
  S = n("607137");

function _() {
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
    className: l
  } = e, c = (0, m.default)();
  if (!_()) return null;
  return r()(null != c, "Subscription billing country should not be null"), (0, i.jsxs)("div", {
    className: a()(S.noticeRoot, l),
    children: [(0, i.jsx)("div", {
      className: S.iconContainer,
      children: (0, i.jsx)(u.default, {
        className: S.infoIcon
      })
    }), (0, i.jsx)("div", {
      className: S.text,
      children: (t = c, n = s, "PL" === t ? n ? p.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? p.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? p.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
        helpCenterLink: o.default.getArticleURL(f.HelpdeskArticles.LOCALIZED_PRICING)
      })
    })]
  })
}