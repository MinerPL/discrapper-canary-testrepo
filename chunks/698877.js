n.d(t, {
  O: function() {
return o;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(864094),
  s = n(871499),
  r = n(689938);

function o(e) {
  let t, {
  hasPermission: n,
  streamActive: o,
  isSelfStream: c,
  centerButton: d,
  onMouseEnter: u,
  onMouseLeave: h,
  premiumGlow: p,
  buttonRef: m,
  ..._
} = e,
f = d ? s.d : s.Z;
  t = o ? c ? r.Z.Messages.STOP_STREAMING : r.Z.Messages.STOP_WATCHING : n ? r.Z.Messages.SHARE_YOUR_SCREEN : r.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE;
  let {
Component: E,
events: C,
play: g
  } = (0, l.P)(o ? 'disable' : 'enable');
  return a.useEffect(() => () => g(), [
o,
g
  ]), (0, i.jsx)(f, {
buttonRef: m,
label: t,
disabled: !n,
iconComponent: E,
isActive: o,
onMouseEnter: e => {
  null == u || u(e), C.onMouseEnter();
},
onMouseLeave: e => {
  null == h || h(e), C.onMouseLeave();
},
premiumGlow: p,
..._
  });
}