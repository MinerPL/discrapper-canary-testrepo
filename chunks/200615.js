n.d(t, {
  F: function() {
return d;
  }
});
var s = n(735250),
  r = n(470079),
  a = n(481060),
  i = n(906732),
  o = n(963249),
  c = n(474936),
  l = n(585367);
let d = e => {
  let {
text: t
  } = e, {
analyticsLocations: n
  } = (0, i.ZP)(), d = r.useRef(null);
  return (0, s.jsx)(a.Clickable, {
className: l.subscribeNow,
innerRef: d,
onClick: () => {
  (0, o.Z)({
    subscriptionTier: c.Si.TIER_2,
    analyticsLocations: n,
    returnRef: d
  });
},
children: t
  });
};