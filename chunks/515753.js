n.d(t, {
  PZ: function() {
return W;
  },
  Qj: function() {
return z;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(512722),
  o = n.n(s),
  c = n(613828),
  u = n(91192),
  d = n(873546),
  h = n(442837),
  p = n(481060),
  _ = n(493683),
  f = n(239091),
  m = n(420660),
  g = n(385499),
  C = n(702321),
  I = n(201895),
  E = n(43267),
  N = n(933557),
  x = n(979264),
  S = n(853856),
  v = n(93687),
  Z = n(785232),
  T = n(878857),
  L = n(204197),
  A = n(199902),
  b = n(158776),
  M = n(306680),
  R = n(111583),
  O = n(9156),
  y = n(594174),
  P = n(514342),
  j = n(28718),
  D = n(733880),
  U = n(709054),
  G = n(998502),
  w = n(788307),
  k = n(981631),
  B = n(689938),
  H = n(17147);
let V = G.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  F = {
offset: {
  top: 2,
  bottom: 2,
  right: 4
}
  },
  W = e => (0, i.jsx)(p.Clickable, {
className: H.closeButton,
...e,
focusProps: {
  offset: {
    top: -2,
    bottom: -2,
    left: -2,
    right: 6
  }
},
children: (0, i.jsx)(p.CloseSmallIcon, {
  size: 'md',
  color: 'currentColor',
  className: H.closeIcon
})
  }),
  Y = () => (0, i.jsx)(p.StarIcon, {
size: 'xs',
color: 'currentColor',
className: H.favoriteIcon
  });
class z extends l.Component {
  render() {
let {
  route: e,
  selected: t,
  icon: n,
  iconClassName: l,
  interactiveClassName: r,
  text: s,
  children: o,
  locationState: u,
  onClick: h,
  className: _,
  role: f,
  'aria-posinset': m,
  'aria-setsize': g,
  ...C
} = this.props;
return (0, i.jsx)(D.Z, {
  className: a()(H.channel, {
    [H.fullWidth]: d.tq
  }, _),
  onClick: h,
  role: f,
  focusProps: {
    within: !0,
    ...F
  },
  'aria-posinset': m,
  'aria-setsize': g,
  children: (0, i.jsx)(p.Interactive, {
    as: 'div',
    selected: t,
    className: a()(r, H.interactive, H.linkButton, {
      [H.interactiveSelected]: t
    }),
    children: (0, i.jsxs)(c.rU, {
      to: {
        pathname: e,
        state: u
      },
      className: H.link,
      ...C,
      children: [
        (0, i.jsx)(j.Z, {
          selected: t,
          muted: !1,
          avatar: (0, i.jsx)(n, {
            className: a()(H.linkButtonIcon, l),
            color: 'currentColor'
          }),
          name: s,
          innerClassName: H.avatarWithText
        }),
        o
      ]
    })
  })
});
  }
}

function K(e) {
  let {
channel: t,
isGDMFacepileEnabled: r,
selected: s = !1,
user: d,
activities: v,
applicationStream: A,
isTyping: b,
status: R,
isMobile: y,
'aria-posinset': U,
'aria-setsize': G
  } = e, [z, K] = l.useState(!1), q = l.useRef(null), Q = l.useRef(null), {
avatarSrc: J,
avatarDecorationSrc: X,
eventHandlers: $
  } = (0, L.Z)({
user: d,
size: p.AvatarSizes.SIZE_32,
animateOnHover: !(s || z)
  }), ee = (0, h.e7)([O.ZP], () => O.ZP.isChannelMuted(t.getGuildId(), t.id)), et = (0, h.e7)([M.ZP], () => M.ZP.getMentionCount(t.id) > 0), en = (0, N.ZP)(t), ei = (0, h.e7)([S.Z], () => S.Z.isFavorite(t.id)), el = () => {
K(!0);
  }, er = () => {
K(!1);
  }, ea = function(e) {
let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
null != e && (e.preventDefault(), e.stopPropagation()), _.Z.closePrivateChannel(t.id, s, n);
  }, es = () => {
_.Z.preload(k.ME, t.id);
  }, eo = e => {
e.stopPropagation();
  }, ec = e => {
if (e.target === e.currentTarget) {
  var t;
  null === (t = q.current) || void 0 === t || t.click();
}
  }, eu = e => {
t.isMultiUserDM() ? (0, f.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('79695'),
    n.e('25421')
  ]).then(n.bind(n, 354741));
  return n => (0, i.jsx)(e, {
    ...n,
    channel: t,
    selected: s
  });
}, {
  noBlurEvent: !0
}) : (0, f.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('79695'),
    n.e('70474'),
    n.e('56826'),
    n.e('80991')
  ]).then(n.bind(n, 131404));
  return n => (0, i.jsx)(e, {
    ...n,
    user: d,
    channel: t,
    channelSelected: s
  });
});
  }, ed = e => {
e.preventDefault(), e.stopPropagation();
let l = B.Z.Messages.LEAVE_GROUP_DM_TITLE.format({
    name: en
  }),
  r = B.Z.Messages.LEAVE_GROUP_DM_BODY.format({
    name: en
  });
t.isManaged() && (l = B.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
  name: en
}), r = B.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
  name: en
})), (0, p.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('14604').then(n.bind(n, 960670));
  return t => (0, i.jsx)(e, {
    header: l,
    body: r,
    onSubmit: ea,
    ...t
  });
});
  }, eh = () => {
let e = {
  className: H.activity,
  textClassName: H.activityText,
  emojiClassName: H.activityEmoji
};
return t.isSystemDM() ? (0, i.jsx)('div', {
  className: H.subtext,
  children: (0, C.Z)(t.id) ? B.Z.Messages.SYSTEM_DM_CHANGELOG_STATUS : B.Z.Messages.SYSTEM_DM_ACTIVITY_TEXT
}) : t.isMultiUserDM() ? (0, i.jsx)('div', {
  className: H.subtext,
  children: B.Z.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  })
}) : null != v && v.length > 0 ? (0, i.jsx)(w.Z, {
  ...e,
  activities: v,
  applicationStream: A,
  animate: z,
  hideTooltip: !0,
  user: d
}) : null;
  }, ep = () => {
let e = p.AvatarSizes.SIZE_32;
if (t.isMultiUserDM())
  return t.recipients.length >= 2 && r && null == t.icon ? (0, i.jsx)(Z.Z, {
    'aria-hidden': !0,
    recipients: t.recipients,
    size: e,
    isTyping: b,
    status: R
  }) : (0, i.jsx)(V, {
    ...$,
    src: (0, E.x)(t),
    'aria-hidden': !0,
    size: e,
    status: b ? k.Skl.ONLINE : R,
    isTyping: b
  });
o()(null != d, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
let n = null;
return !d.isSystemUser() && (n = (0, m.Z)(v) ? k.Skl.STREAMING : R), (0, i.jsx)(V, {
  ...$,
  size: p.AvatarSizes.SIZE_32,
  src: J,
  avatarDecoration: X,
  status: n,
  isMobile: y,
  isTyping: b,
  'aria-label': d.username,
  statusTooltip: !0
});
  }, e_ = t.isMultiUserDM(), ef = t.isSystemDM(), em = (0, T.Q)(), eg = e_ || ef || t.type !== k.d4z.DM || (null == d ? void 0 : d.clan) == null ? en : (0, i.jsxs)(i.Fragment, {
children: [
  en,
  (0, i.jsx)(x.ZP, {
    clan: null == d ? void 0 : d.clan,
    userId: null == d ? void 0 : d.id,
    inline: !0,
    disableGuildProfile: !0,
    className: H.clanTag
  })
]
  });
  return (0, i.jsx)(u.mh, {
id: t.id,
children: e => {
  let {
    role: n,
    ...l
  } = e;
  return (0, i.jsx)(D.Z, {
    className: H.channel,
    role: n,
    focusProps: {
      ...F,
      focusTarget: q,
      ringTarget: Q
    },
    ref: Q,
    onMouseEnter: el,
    onMouseLeave: er,
    onMouseDown: es,
    onContextMenu: eu,
    'aria-setsize': G,
    'aria-posinset': U,
    children: (0, i.jsxs)(p.Interactive, {
      className: a()(H.interactive, {
        [H.interactiveSystemDM]: em && ef,
        [H.interactiveSelected]: s
      }),
      as: 'div',
      onClick: ec,
      muted: ee,
      selected: s,
      children: [
        (0, i.jsx)(c.rU, {
          innerRef: q,
          to: k.Z5c.CHANNEL(k.ME, t.id),
          className: H.link,
          'aria-label': (0, I.ZP)({
            channel: t,
            unread: et
          }),
          ...l,
          children: (0, i.jsx)(j.Z, {
            avatar: ep(),
            selected: s,
            highlighted: et,
            muted: null != ee && ee,
            subText: eh(),
            name: (0, i.jsx)(P.Z, {
              tooltipClassName: H.overflowTooltip,
              children: eg
            }),
            decorators: t.isSystemDM() ? (0, i.jsx)(g.Z, {
              className: H.decorator,
              type: g.Z.Types.SYSTEM_DM,
              verified: !0
            }) : null
          })
        }),
        ei ? (0, i.jsx)(Y, {}) : null,
        (0, i.jsx)(W, {
          'aria-label': e_ ? B.Z.Messages.LEAVE_GROUP_DM : B.Z.Messages.CLOSE_DM,
          onClick: e_ ? ed : ea,
          onMouseDown: eo
        })
      ]
    })
  });
}
  });
}
t.ZP = e => {
  let {
channel: t,
selected: n,
...l
  } = e, r = (0, h.e7)([y.default], () => y.default.getUser(t.getRecipientId())), {
isStatusIndicatorEnabled: a,
isTypingIndicatorEnabled: s,
isFacepileEnabled: o
  } = v.Z.useExperiment({
location: 'private_channel'
  }, {
autoTrackExposure: !0
  }), c = null == r ? void 0 : r.id, u = (0, h.cj)([
b.Z,
A.Z
  ], () => {
let e;
if (t.isMultiUserDM()) {
  if (a) {
    let n = b.Z.getState().statuses;
    t.recipients.some(e => n[e] === k.Skl.ONLINE) && (e = k.Skl.ONLINE);
  }
} else
  null != c && (e = b.Z.getStatus(c));
return {
  status: e,
  activities: null != c ? b.Z.getActivities(c) : null,
  applicationStream: null != c ? A.Z.getAnyStreamForUser(c) : null,
  isMobile: null != c && b.Z.isMobileOnline(c)
};
  }, [
t,
c,
a
  ]), d = (0, h.e7)([
y.default,
R.Z
  ], () => {
if (t.isMultiUserDM())
  return !!s && U.default.keys(R.Z.getTypingUsers(t.id)).some(e => {
    var t;
    return e !== (null === (t = y.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
  });
if (null != r)
  return R.Z.isTyping(t.id, t.getRecipientId());
return !1;
  }, [
t,
r,
s
  ]);
  return t.isMultiUserDM() ? (0, i.jsx)(K, {
channel: t,
selected: n,
isTyping: d,
status: u.status === k.Skl.ONLINE ? k.Skl.ONLINE : void 0,
isGDMFacepileEnabled: o,
...l
  }) : (0, i.jsx)(K, {
channel: t,
selected: n,
user: r,
isTyping: d,
...l,
...u
  });
};