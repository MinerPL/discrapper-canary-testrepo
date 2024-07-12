t.d(n, {
  Z: function() {
return f;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  r = t(481060),
  d = t(240872),
  s = t(456269),
  o = t(346479),
  u = t(665906),
  l = t(592125),
  c = t(176505),
  Z = t(689938);

function f(e) {
  let n = (0, a.e7)([l.Z], () => l.Z.getChannel(e.parent_id)),
t = (0, u.Xb)(e),
f = (0, s.kF)(e);
  return (null == n ? void 0 : n.isForumLikeChannel()) && t ? e.hasFlag(c.zZ.PINNED) ? (0, i.jsx)(r.MenuItem, {
id: 'unpin-thread',
label: Z.Z.Messages.UNPIN_POST,
action: () => o.Z.unpin(e)
  }) : (0, i.jsx)(r.MenuItem, {
id: 'pin-thread',
label: Z.Z.Messages.PIN_POST,
action: function() {
  null != f ? d.Z.show({
    title: Z.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
    body: Z.Z.Messages.FORUM_PIN_CONFIRM_BODY,
    onConfirm: async () => {
      await o.Z.unpin(f), o.Z.pin(e);
    }
  }) : o.Z.pin(e);
}
  }) : null;
}