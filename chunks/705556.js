n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  o = n(300284),
  s = n(314897),
  l = n(430824),
  u = n(642113),
  c = n(841040),
  d = n(475413),
  _ = n(228168),
  E = n(689938);

function f(e) {
  let {
user: t,
guildId: n,
profileType: f,
fullWidth: h,
onClose: p
  } = e, m = (0, i.e7)([s.default], () => s.default.getId() === t.id), I = (0, i.e7)([l.Z], () => null != n ? l.Z.getGuild(n) : null), {
originalFriendingEnabled: T
  } = (0, u.V)({
location: 'UserProfileEditMenuButton'
  }), g = (0, o.Z)(), S = T && f === _.y0.FULL_SIZE ? void 0 : a.PencilIcon;
  return m ? null == I ? (0, r.jsx)(d.tG, {
action: 'EDIT_PROFILE',
text: E.Z.Messages.EDIT_PROFILE,
icon: S,
autoFocus: !0,
fullWidth: h,
onClick: () => {
  null == p || p(), g();
}
  }) : (0, r.jsx)(a.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(c.Z, {
    guild: I,
    onClose: () => {
      t(), null == p || p();
    }
  });
},
children: e => (0, r.jsx)(d.tG, {
  text: E.Z.Messages.EDIT_PROFILE,
  icon: S,
  autoFocus: !0,
  fullWidth: h,
  ...e
})
  }) : null;
}