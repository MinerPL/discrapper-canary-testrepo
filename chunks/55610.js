s.d(n, {
  U: function() {
return p;
  }
});
var l = s(735250);
s(470079);
var t = s(120356),
  i = s.n(t),
  r = s(512722),
  a = s.n(r),
  c = s(481060),
  o = s(63063),
  u = s(631818),
  d = s(987033),
  _ = s(53900),
  m = s(981631),
  E = s(689938),
  I = s(180002);

function p() {
  let e = (0, _.Z)(),
{
  enabled: n
} = u.Z.useExperiment({
  location: '5ebfcf_1'
}, {
  autoTrackExposure: !1
}),
{
  enabled: s
} = d.Z.useExperiment({
  location: '5ebfcf_2'
}, {
  autoTrackExposure: !1
});
  return null != e && ('PL' === e ? n : 'TR' === e && s);
}
n.Z = e => {
  var n, s;
  let {
fromBoostCancelModal: t,
className: r
  } = e, u = (0, _.Z)();
  if (!p())
return null;
  return a()(null != u, 'Subscription billing country should not be null'), (0, l.jsxs)('div', {
className: i()(I.noticeRoot, r),
children: [
  (0, l.jsx)('div', {
    className: I.iconContainer,
    children: (0, l.jsx)(c.CircleExclamationPointIcon, {
      size: 'custom',
      width: 20,
      height: 20,
      color: 'currentColor',
      className: I.infoIcon
    })
  }),
  (0, l.jsx)('div', {
    className: I.text,
    children: (n = u, s = t, 'PL' === n ? s ? E.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : E.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : 'TR' === n ? s ? E.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : E.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : s ? E.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : E.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
      helpCenterLink: o.Z.getArticleURL(m.BhN.LOCALIZED_PRICING)
    })
  })
]
  });
};