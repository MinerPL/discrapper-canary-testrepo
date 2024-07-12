n.d(t, {
  Z: function() {
return u;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(740492),
  r = n(984014),
  o = n(295510),
  c = n(394059),
  d = n(689938);

function u(e, t) {
  let [n, u, h] = (0, r.Z)(e, t), p = (0, a.e7)([s.ZP], () => s.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, i.jsx)(l.MenuCheckboxItem, {
id: 'self-stream-hide',
label: d.Z.Messages.SHOW_SELF_STREAM,
checked: !u,
action: () => {
  if (p || u)
    return h(!u);
  (0, l.openModal)(e => (0, i.jsx)(o.Z, {
    ...e,
    type: c.K.STREAM,
    onConfirm: () => h(!u)
  }));
}
  }) : null;
}