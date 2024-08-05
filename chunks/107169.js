n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(871499),
  l = n(689938);

function r(e) {
  let {
popoutWindowAlwaysOnTop: t,
onToggleStayOnTop: n,
...r
  } = e, o = t ? l.Z.Messages.POPOUT_REMOVE_FROM_TOP : l.Z.Messages.POPOUT_STAY_ON_TOP, c = t ? a.PinUprightSlashIcon : a.PinUprightIcon;
  return (0, i.jsx)(s.Z, {
onClick: () => n(!t),
label: o,
iconComponent: c,
...r
  });
}