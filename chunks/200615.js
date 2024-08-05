n.d(t, {
  F: function() {
return d;
  }
});
var s = n(735250),
  r = n(470079),
  a = n(481060),
  o = n(906732),
  i = n(963249),
  c = n(474936),
  l = n(79909);
let d = e => {
  let {
text: t
  } = e, {
analyticsLocations: n
  } = (0, o.ZP)(), d = r.useRef(null);
  return (0, s.jsx)(a.Clickable, {
className: l.subscribeNow,
innerRef: d,
onClick: () => {
  (0, i.Z)({
    subscriptionTier: c.Si.TIER_2,
    analyticsLocations: n,
    returnRef: d
  });
},
children: t
  });
};