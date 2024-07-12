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
  g = n(702321),
  C = n(201895),
  I = n(43267),
  E = n(933557),
  N = n(979264),
  x = n(853856),
  S = n(93687),
  v = n(785232),
  Z = n(878857),
  T = n(204197),
  L = n(199902),
  A = n(158776),
  b = n(306680),
  M = n(111583),
  R = n(9156),
  O = n(594174),
  y = n(467679),
  P = n(514342),
  j = n(28718),
  D = n(733880),
  U = n(709054),
  w = n(998502),
  G = n(788307),
  k = n(981631),
  B = n(689938),
  V = n(17147);
let H = w.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  F = {
offset: {
  top: 2,
  bottom: 2,
  right: 4
}
  },
  W = e => (0, i.jsx)(p.Clickable, {
className: V.closeButton,
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
  className: V.closeIcon
})
  }),
  Y = () => (0, i.jsx)(p.StarIcon, {
size: 'xs',
color: 'currentColor',
className: V.favoriteIcon
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
  className: a()(V.channel, {
    [V.fullWidth]: d.tq
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
    className: a()(r, V.interactive, V.linkButton, {
      [V.interactiveSelected]: t
    }),
    children: (0, i.jsxs)(c.rU, {
      to: {
        pathname: e,
        state: u
      },
      className: V.link,
      ...C,
      children: [
        (0, i.jsx)(j.Z, {
          selected: t,
          muted: !1,
          avatar: (0, i.jsx)(n, {
            className: a()(V.linkButtonIcon, l),
            color: 'currentColor'
          }),
          name: s,
          innerClassName: V.avatarWithText
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
activities: S,
applicationStream: L,
isTyping: A,
status: M,
isMobile: O,
'aria-posinset': U,
'aria-setsize': w
  } = e, [z, K] = l.useState(!1), q = l.useRef(null), Q = l.useRef(null), {
avatarSrc: J,
avatarDecorationSrc: X,
eventHandlers: $
  } = (0, T.Z)({
user: d,
size: p.AvatarSizes.SIZE_32,
animateOnHover: !(s || z)
  }), ee = (0, h.e7)([R.ZP], () => R.ZP.isChannelMuted(t.getGuildId(), t.id)), et = (0, h.e7)([b.ZP], () => b.ZP.getMentionCount(t.id) > 0), en = (0, E.ZP)(t), ei = (0, h.e7)([x.Z], () => x.Z.isFavorite(t.id)), el = () => {
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
    n.e('17400'),
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
  className: V.activity,
  textClassName: V.activityText,
  emojiClassName: V.activityEmoji
};
return t.isSystemDM() ? (0, i.jsx)('div', {
  className: V.subtext,
  children: (0, g.Z)(t.id) ? B.Z.Messages.SYSTEM_DM_CHANGELOG_STATUS : B.Z.Messages.SYSTEM_DM_ACTIVITY_TEXT
}) : t.isMultiUserDM() ? (0, i.jsx)('div', {
  className: V.subtext,
  children: B.Z.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  })
}) : null != S && S.length > 0 ? (0, i.jsx)(G.Z, {
  ...e,
  activities: S,
  applicationStream: L,
  animate: z,
  hideTooltip: !0,
  user: d
}) : null;
  }, ep = () => {
let e = p.AvatarSizes.SIZE_32;
if (t.isMultiUserDM())
  return t.recipients.length >= 2 && r && null == t.icon ? (0, i.jsx)(v.Z, {
    'aria-hidden': !0,
    recipients: t.recipients,
    size: e,
    isTyping: A,
    status: M
  }) : (0, i.jsx)(H, {
    ...$,
    src: (0, I.x)(t),
    'aria-hidden': !0,
    size: e,
    status: A ? k.Skl.ONLINE : M,
    isTyping: A
  });
o()(null != d, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
let n = null;
return !d.isSystemUser() && (n = (0, m.Z)(S) ? k.Skl.STREAMING : M), (0, i.jsx)(H, {
  ...$,
  size: p.AvatarSizes.SIZE_32,
  src: J,
  avatarDecoration: X,
  status: n,
  isMobile: O,
  isTyping: A,
  'aria-label': d.username,
  statusTooltip: !0
});
  }, e_ = t.isMultiUserDM(), ef = t.isSystemDM(), em = (0, Z.Q)(), eg = e_ || ef || t.type !== k.d4z.DM || (null == d ? void 0 : d.clan) == null ? en : (0, i.jsxs)(i.Fragment, {
children: [
  en,
  (0, i.jsx)(N.ZP, {
    clan: null == d ? void 0 : d.clan,
    userId: null == d ? void 0 : d.id,
    inline: !0,
    disableGuildProfile: !0,
    className: V.clanTag
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
    className: V.channel,
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
    'aria-setsize': w,
    'aria-posinset': U,
    children: (0, i.jsxs)(p.Interactive, {
      className: a()(V.interactive, {
        [V.interactiveSystemDM]: em && ef,
        [V.interactiveSelected]: s
      }),
      as: 'div',
      onClick: ec,
      muted: ee,
      selected: s,
      children: [
        (0, i.jsx)(c.rU, {
          innerRef: q,
          to: k.Z5c.CHANNEL(k.ME, t.id),
          className: V.link,
          'aria-label': (0, C.ZP)({
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
              tooltipClassName: V.overflowTooltip,
              children: eg
            }),
            decorators: t.isSystemDM() ? (0, i.jsx)(y.Z, {
              className: V.decorator,
              type: y.Z.Types.SYSTEM_DM,
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
  } = e, r = (0, h.e7)([O.default], () => O.default.getUser(t.getRecipientId())), {
isStatusIndicatorEnabled: a,
isTypingIndicatorEnabled: s,
isFacepileEnabled: o
  } = S.Z.useExperiment({
location: 'private_channel'
  }, {
autoTrackExposure: !0
  }), c = null == r ? void 0 : r.id, u = (0, h.cj)([
A.Z,
L.Z
  ], () => {
let e;
if (t.isMultiUserDM()) {
  if (a) {
    let n = A.Z.getState().statuses;
    t.recipients.some(e => n[e] === k.Skl.ONLINE) && (e = k.Skl.ONLINE);
  }
} else
  null != c && (e = A.Z.getStatus(c));
return {
  status: e,
  activities: null != c ? A.Z.getActivities(c) : null,
  applicationStream: null != c ? L.Z.getAnyStreamForUser(c) : null,
  isMobile: null != c && A.Z.isMobileOnline(c)
};
  }, [
t,
c,
a
  ]), d = (0, h.e7)([
O.default,
M.Z
  ], () => {
if (t.isMultiUserDM())
  return !!s && U.default.keys(M.Z.getTypingUsers(t.id)).some(e => {
    var t;
    return e !== (null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
  });
if (null != r)
  return M.Z.isTyping(t.id, t.getRecipientId());
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