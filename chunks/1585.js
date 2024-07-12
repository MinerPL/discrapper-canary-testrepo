n.d(t, {
  ps: function() {
return u;
  },
  y9: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(703656);
n(956664);
var o = n(419061),
  s = n(981631);

function l(e) {
  return 'number' != typeof e ? (0, i.getAvatarSize)(e) * o.hs : e * o.hs;
}
let u = e => {
  let {
analyticsLocations: t,
initialSelectedDecoration: o,
initialSelectedDecorationId: l,
isTryItOutFlow: u,
guild: c,
onClose: d
  } = e;
  (0, i.openModalLazy)(async () => {
(0, a.s1)().location.pathname === s.Z5c.COLLECTIBLES_SHOP_FULLSCREEN && (0, a.uL)(s.Z5c.APP);
let {
  default: e
} = await Promise.resolve().then(n.bind(n, 235400));
return n => (0, r.jsx)(e, {
  ...n,
  onCloseModal: n.onClose,
  onClose: d,
  analyticsLocations: t,
  initialSelectedDecoration: o,
  initialSelectedDecorationId: l,
  isTryItOutFlow: u,
  guild: c
});
  }, {});
};