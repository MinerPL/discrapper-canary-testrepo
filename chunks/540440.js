n.d(t, {
  B: function() {
return _;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(278074),
  s = n(442837),
  o = n(481060),
  l = n(564990),
  u = n(26033),
  c = n(594174),
  d = n(689938);

function _(e) {
  let {
entry: t,
user: n,
isRecent: _ = !1
  } = e, E = (0, s.e7)([c.default], () => c.default.getCurrentUser()), f = n.id === (null == E ? void 0 : E.id), [h, p] = i.useState(!1);
  if (!f || !_ || null == t)
return null;
  let m = async () => {
p(!0), await (0, l.CV)(t, n.id), p(!1);
  }, I = (0, a.EQ)(t).when(u.dX, () => d.Z.Messages.USER_ACTIVITY_CLEAR_GAME_HISTORY).when(u.r5, () => d.Z.Messages.USER_ACTIVITY_CLEAR_WATCH_HISTORY).when(u.kx, () => d.Z.Messages.USER_ACTIVITY_CLEAR_LISTENING_HISTORY).otherwise(() => null);
  return (0, r.jsx)(o.MenuItem, {
disabled: h,
id: 'delete-entry-history',
label: I,
action: m,
color: 'danger'
  });
}