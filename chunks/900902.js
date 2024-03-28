"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("778947"),
  i = n("534761"),
  r = n("901461"),
  o = n("453687"),
  u = n("507418"),
  d = n("348238"),
  c = n("981631");
let f = l.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: i = !1,
      groupId: r,
      isGroupStart: o,
      usernameProfile: f,
      avatarProfile: h,
      setPopout: m,
      author: p,
      repliedMessage: E,
      roleIcon: C
    } = e, g = (0, d.useContextMenuUser)(t.author.id, n.id), S = (0, d.useClickMessageAuthorUsername)(t, n, f, m), _ = (0, d.useClickMessageAuthorAvatar)(h, m), T = l.useCallback(() => m({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [m]);
    return (0, a.jsx)(s.default, {
      guildId: n.guild_id,
      message: t,
      channel: n,
      repliedMessage: E,
      author: p,
      compact: i,
      subscribeToGroupId: r,
      showTimestampOnHover: !o && i && t.type !== c.MessageTypes.REPLY,
      renderPopout: u.default,
      showAvatarPopout: h,
      showUsernamePopout: f,
      onClickAvatar: _,
      onClickUsername: S,
      onContextMenu: g,
      onPopoutRequestClose: T,
      roleIcon: C
    })
  }),
  h = l.memo(i.default);

function m(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: l,
    replyReference: s,
    author: i,
    repliedMessage: u,
    roleIcon: d
  } = e, {
    message: c,
    compact: m,
    channel: p,
    groupId: E
  } = t, {
    usernameProfile: C,
    avatarProfile: g
  } = l;
  if ((0, r.default)(c)) return null;
  let S = c.id === E;
  return S || m || null != s ? (0, a.jsx)(f, {
    message: c,
    channel: p,
    compact: m,
    subscribeToGroupId: E,
    isGroupStart: S,
    groupId: E,
    setPopout: n,
    usernameProfile: C,
    avatarProfile: g,
    author: i,
    repliedMessage: u,
    roleIcon: d
  }) : (0, a.jsx)(h, {
    compact: !0,
    timestamp: c.timestamp,
    isInline: !1,
    id: (0, o.getMessageTimestampId)(c),
    isVisibleOnlyOnHover: !0,
    cozyAlt: !0
  })
}