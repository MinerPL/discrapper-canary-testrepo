n.d(s, {
  R: function() {
return S;
  }
}), n(411104);
var t = n(735250),
  a = n(470079),
  l = n(442837),
  r = n(481060),
  i = n(388905),
  u = n(686546),
  o = n(925329),
  c = n(372769),
  m = n(726745),
  d = n(973616),
  I = n(131704),
  N = n(601964),
  _ = n(598077),
  E = n(594174),
  p = n(51144),
  x = n(981631),
  T = n(888592),
  g = n(245335),
  j = n(689938),
  A = n(919458);
let S = () => (0, t.jsxs)(a.Fragment, {
children: [
  (0, t.jsx)(i.qE, {
    src: null,
    size: r.AvatarSizes.DEPRECATED_SIZE_100,
    className: A.avatar
  }),
  (0, t.jsx)(i.DK, {
    children: j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
  }),
  (0, t.jsx)(i.Dx, {
    className: A.inviteResolvingGuildName,
    children: j.Z.Messages.LOADING
  })
]
  }),
  h = e => {
let {
  guild: s,
  user: n,
  application: a,
  compact: l
} = e;
if (null != a)
  return (0, t.jsx)(o.Z, {
    className: A.appIcon,
    game: a,
    size: A.appIconSize
  });
if (null != n)
  return (0, t.jsx)(i.qE, {
    src: null != n ? n.getAvatarURL(void 0, 80) : null,
    size: r.AvatarSizes.SIZE_80,
    className: l ? A.compactAvatar : A.avatar
  });
if (null != s)
  return (0, t.jsx)(u.ZP, {
    mask: u.ZP.Masks.SQUIRCLE,
    width: 64,
    height: 64,
    className: A.guildIcon,
    children: (0, t.jsx)(i.Vj, {
      guild: s,
      size: i.Vj.Sizes.LARGER,
      animate: !0
    })
  });
else
  return null;
  };
s.Z = e => {
  var s;
  let n, a, u, {
  invite: o,
  disableUser: S = !1,
  error: f,
  flatActivityCount: v = !1,
  isRegister: M = !1
} = e,
{
  currentUser: R,
  multiAccounts: O
} = (0, l.cj)([
  m.Z,
  E.default
], () => ({
  currentUser: E.default.getCurrentUser(),
  multiAccounts: m.Z.getUsers()
}));
  if (null == o)
return null;
  let D = null != o.guild ? new N.ZP(o.guild) : null,
L = null != o.channel ? (0, I.jD)(o.channel) : null,
Z = null != o.target_application ? new d.Z(o.target_application) : null,
C = S || null == o.inviter ? null : new _.Z(o.inviter),
b = !(null != o.approximate_member_count && o.approximate_member_count > 100 || null != D && D.hasFeature(x.oNc.COMMUNITY)) && null != C,
V = null,
B = !1;
  if (null != D)
V = null == C ? j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : j.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
  username: p.ZP.getFormattedName(C)
}), o.target_type === g.Iq.STREAM && null != o.target_user && (V = j.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
  username: p.ZP.getFormattedName(o.target_user)
})), o.target_type === g.Iq.EMBEDDED_APPLICATION && null != o.target_application && (V = null != C ? j.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
  username: p.ZP.getFormattedName(C)
}) : j.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), b && null == Z && (n = (0, t.jsx)(i.Vj, {
  className: A.icon,
  guild: D,
  size: i.Vj.Sizes.SMALL
})), a = D.name, null != Z && (a = Z.name, u = (0, t.jsxs)('div', {
  children: [
    (0, t.jsx)(i.DK, {
      className: A.appIn,
      children: j.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }),
    (0, t.jsxs)('div', {
      className: A.guildContainer,
      children: [
        (0, t.jsx)(i.Vj, {
          guild: D,
          size: i.Vj.Sizes.SMALL
        }),
        (0, t.jsx)(r.Text, {
          tag: 'span',
          variant: 'text-lg/normal',
          color: 'header-primary',
          className: A.appGuildName,
          children: D.name
        })
      ]
    })
  ]
}));
  else if (null != L) {
if (null == C)
  throw Error('no inviter in group DM invite');
let e = p.ZP.getFormattedName(C);
null != L.name && '' !== L.name ? (V = j.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
  username: e
}), a = L.name, null != L.icon && (n = (0, t.jsx)(i.MC, {
  channel: L,
  size: r.AvatarSizes.SIZE_32
}))) : (V = j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e);
  } else if (null != C) {
let e = p.ZP.getFormattedName(C, !0);
a = j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
  username: e
}), B = !0, u = null != f ? null : (0, t.jsx)(i.DK, {
  className: A.directInviteSubTitle,
  children: M ? j.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
    username: e
  }) : j.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
    username: e
  })
});
  }
  return (0, t.jsxs)('div', {
className: A.container,
children: [
  (0, t.jsx)(h, {
    application: Z,
    guild: D,
    user: b ? C : null,
    compact: B
  }),
  null != f ? (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)(i.DK, {
        children: j.Z.Messages.INVITE_MODAL_ERROR_TITLE
      }),
      (0, t.jsx)(i.Dx, {
        children: f
      })
    ]
  }) : (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)(i.DK, {
        children: V
      }),
      (0, t.jsxs)(i.Dx, {
        className: A.title,
        children: [
          null != D ? (0, t.jsx)(c.Z, {
            guild: D,
            className: A.guildBadge,
            tooltipPosition: 'left'
          }) : null,
          n,
          a
        ]
      })
    ]
  }),
  u,
  null != Z || B || (null == o ? void 0 : null === (s = o.guild) || void 0 === s ? void 0 : s.id) === T.fQ ? null : (0, t.jsx)(i.EJ, {
    className: A.activityCount,
    online: o.approximate_presence_count,
    total: o.approximate_member_count,
    flat: v
  }),
  O.length > 1 ? (0, t.jsx)(i.jQ, {
    user: R
  }) : null
]
  });
};