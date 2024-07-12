n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(901461),
  s = n(453687),
  r = n(464891),
  o = n(318713),
  c = n(507418),
  d = n(348238),
  u = n(981631);
let h = a.memo(function(e) {
let {
  message: t,
  channel: n,
  compact: l = !1,
  groupId: s,
  isGroupStart: o,
  usernameProfile: h,
  avatarProfile: p,
  setPopout: m,
  author: _,
  repliedMessage: f,
  roleIcon: E
} = e, C = (0, d.wq)(t.author.id, n.id), g = (0, d.XO)(t, n, h, m), I = (0, d.R9)(p, m), x = a.useCallback(() => m({
  usernameProfile: !1,
  avatarProfile: !1,
  referencedUsernameProfile: !1
}), [m]);
return (0, i.jsx)(r.ZP, {
  guildId: n.guild_id,
  message: t,
  channel: n,
  repliedMessage: f,
  author: _,
  compact: l,
  subscribeToGroupId: s,
  showTimestampOnHover: !o && l && t.type !== u.uaV.REPLY,
  renderPopout: c.Z,
  showAvatarPopout: p,
  showUsernamePopout: h,
  onClickAvatar: I,
  onClickUsername: g,
  onContextMenu: C,
  onPopoutRequestClose: x,
  roleIcon: E
});
  }),
  p = a.memo(o.Z);

function m(e) {
  let {
messageProps: t,
setPopout: n,
messagePopouts: a,
replyReference: r,
author: o,
repliedMessage: c,
roleIcon: d
  } = e, {
message: u,
compact: m,
channel: _,
groupId: f
  } = t, {
usernameProfile: E,
avatarProfile: C
  } = a;
  if ((0, l.Z)(u))
return null;
  let g = u.id === f;
  return g || m || null != r ? (0, i.jsx)(h, {
message: u,
channel: _,
compact: m,
subscribeToGroupId: f,
isGroupStart: g,
groupId: f,
setPopout: n,
usernameProfile: E,
avatarProfile: C,
author: o,
repliedMessage: c,
roleIcon: d
  }) : (0, i.jsx)(p, {
compact: !0,
timestamp: u.timestamp,
isInline: !1,
id: (0, s.Dv)(u),
isVisibleOnlyOnHover: !0,
cozyAlt: !0
  });
}