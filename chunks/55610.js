t.d(n, {
  U: function() {
return f;
  }
});
var i = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  s = t(512722),
  l = t.n(s),
  o = t(481060),
  c = t(63063),
  u = t(631818),
  d = t(987033),
  _ = t(53900),
  p = t(981631),
  m = t(689938),
  I = t(180002);

function f() {
  let e = (0, _.Z)(),
{
  enabled: n
} = u.Z.useExperiment({
  location: '5ebfcf_1'
}, {
  autoTrackExposure: !1
}),
{
  enabled: t
} = d.Z.useExperiment({
  location: '5ebfcf_2'
}, {
  autoTrackExposure: !1
});
  return null != e && ('PL' === e ? n : 'TR' === e && t);
}
n.Z = e => {
  var n, t;
  let {
fromBoostCancelModal: a,
className: s
  } = e, u = (0, _.Z)();
  if (!f())
return null;
  return l()(null != u, 'Subscription billing country should not be null'), (0, i.jsxs)('div', {
className: r()(I.noticeRoot, s),
children: [
  (0, i.jsx)('div', {
    className: I.iconContainer,
    children: (0, i.jsx)(o.CircleExclamationPointIcon, {
      size: 'custom',
      width: 20,
      height: 20,
      color: 'currentColor',
      className: I.infoIcon
    })
  }),
  (0, i.jsx)('div', {
    className: I.text,
    children: (n = u, t = a, 'PL' === n ? t ? m.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : 'TR' === n ? t ? m.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : t ? m.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
      helpCenterLink: c.Z.getArticleURL(p.BhN.LOCALIZED_PRICING)
    })
  })
]
  });
};