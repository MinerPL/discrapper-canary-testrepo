n.d(t, {
  GB: function() {
return Z;
  },
  JI: function() {
return O;
  },
  UM: function() {
return D;
  },
  V6: function() {
return R;
  },
  WT: function() {
return x;
  },
  X7: function() {
return A;
  },
  jq: function() {
return b;
  },
  mx: function() {
return m;
  }
}), n(411104);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(481060),
  o = n(388905),
  c = n(366695),
  u = n(940627),
  d = n(154921),
  h = n(768581),
  _ = n(51144),
  E = n(245335),
  g = n(981631),
  p = n(888592),
  f = n(689938),
  I = n(348790);
let m = 100,
  N = e => {
var t, n;
let s = {
  onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
  memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
};
return 0 === s.memberCount && 0 === s.memberCount ? null : s;
  },
  T = e => e.target_type === E.Iq.STREAM && null != e.target_user,
  x = e => {
var t;
return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === g.d4z.GROUP_DM;
  },
  A = e => null == e.channel && null == e.guild && null != e.inviter,
  C = e => {
var t;
let n = N(e);
return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > m;
  },
  S = e => e.state === g.r2o.ACCEPTED,
  O = e => {
let {
  guild_scheduled_event: t
} = e;
return null != t || !1;
  },
  v = e => !O(e) && (!!A(e) || null != e.inviter && !S(e) && !C(e)),
  Z = e => {
let {
  guild: t,
  user: n,
  application: r
} = e;
if (null != r)
  return (0, s.jsx)(c.Z, {
    className: I.appIcon,
    game: r,
    size: I.appIconSize
  });
if (null != n)
  return (0, s.jsx)(o.qE, {
    src: n.getAvatarURL(void 0, 100),
    size: l.AvatarSizes.DEPRECATED_SIZE_100,
    className: I.avatar
  });
if (null != t)
  return (0, s.jsx)(o.Vj, {
    guild: t,
    size: o.Vj.Sizes.LARGER,
    className: I.guildIcon,
    animate: !0
  });
else
  return null;
  };

function R(e) {
  var t;
  let {
invite: n,
textClassName: r,
className: i
  } = e, l = N(n);
  return null == l || v(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.fQ ? null : (0, s.jsx)(o.EJ, {
className: a()(I.activityCount, i),
online: l.onlineCount,
total: l.memberCount,
textClassName: r,
flat: !0
  });
}

function b(e) {
  let {
invite: t,
showBigUserIcon: n
  } = e, i = r.useMemo(() => n ? null : T(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : v(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null, [
t,
n
  ]), a = f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
  if (x(t)) {
var c, u;
a = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
  username: t.inviter.username
}) : f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;
  } else
T(t) && null != t.target_user ? a = f.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
  username: t.target_user.username
}) : S(t) ? a = f.Z.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : v(t) && null != t.inviter && (a = f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
  username: _.ZP.getFormattedName(t.inviter)
}));
  return (0, s.jsxs)('div', {
className: I.inviteJoinContainer,
children: [
  null != i && (0, s.jsx)('div', {
    className: I.inviterIconWrapper,
    children: (0, s.jsx)(o.qE, {
      src: i,
      size: l.AvatarSizes.SIZE_24
    })
  }),
  (0, s.jsx)(o.DK, {
    className: I.__invalid_inviteJoinSubTitle,
    children: a
  })
]
  });
}

function D(e) {
  let t, n, r, {
user: i,
guild: a,
channel: c,
application: h,
showBigUserIcon: E
  } = e;
  if (null != a)
E && null == h && (t = (0, s.jsx)(o.Vj, {
  guild: a,
  size: o.Vj.Sizes.SMALL
})), n = a.name, null != h && (n = h.name, r = (0, s.jsxs)('div', {
  className: I.inviteJoinContainer,
  children: [
    (0, s.jsx)(o.DK, {
      className: I.appIn,
      children: f.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }),
    (0, s.jsxs)('div', {
      className: I.guildContainer,
      children: [
        (0, s.jsx)(o.Vj, {
          guild: a,
          size: o.Vj.Sizes.SMALL
        }),
        (0, s.jsx)(d.Z, {
          className: I.appGuildName,
          color: d.Z.Colors.CUSTOM,
          tag: 'span',
          size: d.Z.Sizes.SIZE_24,
          children: a.name
        })
      ]
    })
  ]
}));
  else if (null != c) {
if (null == i)
  throw Error('no inviter in group DM invite');
let e = _.ZP.getFormattedName(i);
null != c.name && '' !== c.name ? (n = c.name, null != c.icon && (t = (0, s.jsx)(o.MC, {
  channel: c,
  size: l.AvatarSizes.SIZE_32
}))) : n = e;
  } else if (null != i) {
let e = _.ZP.getFormattedName(i);
n = f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
  username: e
}), r = (0, s.jsx)(o.DK, {
  className: I.directInviteSubTitle,
  children: f.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
    username: e
  })
});
  }
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)(o.Dx, {
    className: I.title,
    children: [
      null != a ? (0, s.jsx)(u.Z, {
        guild: a,
        className: I.guildBadge,
        tooltipPosition: 'left'
      }) : null,
      t,
      n
    ]
  }),
  r
]
  });
}