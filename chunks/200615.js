n.d(t, {
  F: function() {
return d;
  }
});
var r = n(735250),
  s = n(470079),
  a = n(481060),
  o = n(906732),
  i = n(963249),
  l = n(474936),
  c = n(79909);
let d = e => {
  let {
text: t
  } = e, {
analyticsLocations: n
  } = (0, o.ZP)(), d = s.useRef(null);
  return (0, r.jsx)(a.Clickable, {
className: c.subscribeNow,
innerRef: d,
onClick: () => {
  (0, i.Z)({
    subscriptionTier: l.Si.TIER_2,
    analyticsLocations: n,
    returnRef: d
  });
},
children: t
  });
};