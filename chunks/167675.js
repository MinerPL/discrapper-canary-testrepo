n.d(t, {
  Z: function() {
return h;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  l = n(740492),
  r = n(27584),
  o = n(295510),
  c = n(394059),
  u = n(65154),
  d = n(689938);

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
[n, h, p] = (0, r.Z)(e, t),
m = (0, a.e7)([l.ZP], () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, i.jsx)(s.MenuCheckboxItem, {
id: 'self-video-hide',
label: d.Z.Messages.SHOW_SELF_VIDEO,
checked: !h,
action: () => {
  if (m || h)
    return p(!h);
  (0, s.openModal)(e => (0, i.jsx)(o.Z, {
    ...e,
    type: c.K.VIDEO,
    onConfirm: () => p(!h)
  }));
}
  }) : null;
}