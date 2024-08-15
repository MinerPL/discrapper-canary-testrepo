n.d(t, {
  K: function() {
return W;
  },
  Z: function() {
return K;
  }
}), n(390547), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(392711),
  l = n.n(o),
  u = n(442837),
  c = n(481060),
  d = n(317381),
  _ = n(884338),
  E = n(666188),
  f = n(372769),
  h = n(523751),
  p = n(246364),
  m = n(746916),
  I = n(965638),
  T = n(160404),
  g = n(41776),
  S = n(777861),
  A = n(565799),
  N = n(501655),
  v = n(517334),
  O = n(344185),
  R = n(199902),
  C = n(77498),
  y = n(984933),
  D = n(607744),
  L = n(158776),
  b = n(9156),
  M = n(594174),
  P = n(938475),
  U = n(510601),
  w = n(59688),
  x = n(456774),
  G = n(718582),
  k = n(981631),
  B = n(689938),
  F = n(416590),
  V = n(403614);

function H(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)('div', {
className: F.row,
children: [
  (0, r.jsx)(e, {
    className: F.activityIcon,
    color: 'currentColor'
  }),
  (0, r.jsx)(_.Z, {
    guildId: n,
    users: t,
    max: 6
  })
]
  });
}

function Z(e) {
  let {
muteConfig: t,
className: n
  } = e;
  return (null == t ? void 0 : t.end_time) == null ? (0, r.jsx)(c.Text, {
variant: 'text-xs/normal',
color: 'text-muted',
className: n,
children: B.Z.Messages.FORM_LABEL_MUTED
  }) : (0, r.jsx)(S.Z, {
muteConfig: t,
className: n
  });
}

function Y(e) {
  var t, n, a;
  let {
guild: o
  } = e, E = o.id, {
voiceUsersToShow: f,
stageSpeakers: h,
numStageListeners: p,
streamUsersToShow: m,
embeddedActivitiesUsers: I,
gameUsers: T,
shouldShowGameBadge: g
  } = function(e) {
let t = e.id,
  n = (0, u.Wu)([
    y.ZP,
    O.Z
  ], () => {
    let e = y.ZP.getChannels(t)[y.Zb].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === k.d4z.GUILD_VOICE;
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id;
    });
    return [
      ...e,
      ...Object.values(O.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))
    ];
  }, [t]),
  r = (0, v.ZP)(t),
  a = i.useMemo(() => r.map(e => e.id), [r]),
  s = (0, u.e7)([P.ZP], () => P.ZP.getVoiceStates(t), [t]),
  o = l().flatMap(n, t => {
    var n;
    return t === e.afkChannelId ? [] : (null !== (n = s[t]) && void 0 !== n ? n : []).map(e => {
      let {
        user: t
      } = e;
      return t;
    });
  }),
  c = (0, u.Wu)([A.Z], () => l().flatMap(a, t => t === e.afkChannelId ? [] : A.Z.getMutableParticipants(t, N.pV.SPEAKER).filter(e => e.type === N.Ui.VOICE).map(e => {
    let {
      user: t
    } = e;
    return t;
  }))),
  _ = (0, u.e7)([A.Z], () => {
    let e = 0;
    for (let t of a)
      e += A.Z.getParticipantCount(t, N.pV.AUDIENCE);
    return e;
  }),
  E = (0, u.Wu)([R.Z], () => R.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId), [t]),
  f = (0, u.Wu)([
    L.Z,
    C.Z
  ], () => o.filter(e => L.Z.getActivities(e.id, t).some(e => (null == e ? void 0 : e.application_id) != null && null != C.Z.getDetectableGame(null == e ? void 0 : e.application_id)))),
  h = (0, U.kM)('Guild Tooltip', !1),
  p = h ? f.map(e => e.id) : [],
  m = (0, u.Wu)([d.ZP], () => d.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds)), [t]),
  I = (0, u.Wu)([M.default], () => m.map(e => M.default.getUser(e)), [m]),
  T = (0, u.Wu)([M.default], () => E.map(e => M.default.getUser(e)), [E]),
  g = o.filter(e => !E.includes(e.id) && !m.includes(e.id) && !p.includes(e.id)),
  S = T.filter(e => null != e && !m.includes(e.id)),
  D = c.length > 0 || g.length > 0 || S.length > 0 || I.length > 0;
return {
  voiceUsersToShow: g,
  stageSpeakers: c,
  numStageListeners: _,
  streamUsersToShow: S,
  embeddedActivitiesUsers: I,
  gameUsers: f,
  shouldShowGameBadge: h,
  hasActivity: D
};
  }(o), S = H(c.GameControllerIcon, T, E), D = H(c.VoiceNormalIcon, f, E);
  let w = (t = E, n = h, a = p, 0 === n.length ? null : (0, r.jsxs)('div', {
  className: F.row,
  children: [
    (0, r.jsx)(c.StageIcon, {
      size: 'lg',
      color: 'currentColor',
      className: F.activityIcon
    }),
    (0, r.jsx)(_.Z, {
      guildId: t,
      users: n,
      max: 3
    }),
    (0, r.jsxs)('div', {
      className: F.stageListenerPill,
      children: [
        (0, r.jsx)(c.HeadphonesIcon, {
          size: 'xs',
          color: 'currentColor'
        }),
        (0, r.jsx)(c.Text, {
          className: F.stageListenerCount,
          color: 'text-normal',
          variant: 'text-xs/normal',
          children: a
        })
      ]
    })
  ]
})),
x = H(c.ScreenArrowIcon, m, E),
G = H(c.ActivitiesIcon, I, E),
{
  isMuted: B,
  muteConfig: V
} = (0, u.cj)([b.ZP], () => ({
  isMuted: b.ZP.isMuted(E),
  muteConfig: b.ZP.getMuteConfig(E)
}), [E]);
  return null != S && U.ZP.trackExposure({
location: 'Guild Tooltip'
  }), (0, r.jsxs)(r.Fragment, {
children: [
  w,
  D,
  x,
  g && S,
  G,
  B ? (0, r.jsx)(Z, {
    muteConfig: V,
    className: s()(F.muteText, {
      [F.muteTextWithActivity]: null != D || null != x
    })
  }) : null
]
  });
}

function j(e) {
  let {
guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(c.Text, {
className: F.viewAsRolesWarning,
color: 'text-normal',
variant: 'text-xs/normal',
children: function(e) {
  switch (e) {
    case p.wB.SUBMITTED:
      return B.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
    case p.wB.REJECTED:
      return B.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
    case p.wB.APPROVED:
      return B.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
    default:
      return B.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED;
  }
}(t)
  });
}

function W(e) {
  let {
guild: t,
includeActivity: n = !0
  } = e, i = (0, E.Z)(t), a = (0, m.E)(t.id), o = null != a ? (0, r.jsx)(j, {
guildJoinRequestStatus: a
  }) : null, l = n ? (0, r.jsx)(Y, {
guild: t
  }) : null, d = (0, u.e7)([T.Z], () => T.Z.isViewingRoles(t.id)), _ = (0, I.I)(t);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsxs)('div', {
    className: s()(F.row, F.rowGuildName),
    children: [
      i ? (0, r.jsx)(h.Z, {
        guild: t,
        className: F.rowIconV2
      }) : (0, r.jsx)(f.Z, {
        guild: t,
        size: 20,
        className: F.rowIcon
      }),
      (0, r.jsx)('span', {
        className: s()(F.guildNameText, {
          [F.guildNameTextLimitedSize]: null != l
        }),
        children: t.toString()
      })
    ]
  }),
  _ ? (0, r.jsx)(c.Text, {
    className: F.invitesDisabledTooltip,
    color: 'header-secondary',
    variant: 'text-sm/medium',
    children: B.Z.Messages.INVITES_DISABLED_TOOLTIP
  }) : null,
  d ? (0, r.jsx)(c.Text, {
    className: F.viewAsRolesWarning,
    color: 'text-normal',
    variant: 'text-xs/normal',
    children: B.Z.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
  }) : null != o ? o : l
]
  });
}

function K(e) {
  let {
guild: t,
disabled: n = !1,
'aria-label': a = !1,
children: s,
includeActivity: o = !0,
isDragging: l
  } = e, d = (0, w.o)('guilds_bar', !1), [_, E] = i.useState(!1), f = (0, G.V1)(t), {
isUserLurking: h,
isUnverifiedAccount: p
  } = (0, u.cj)([
g.Z,
D.Z
  ], () => {
let e = g.Z.isLurking(t.id);
return {
  isUserLurking: e,
  isUnverifiedAccount: !D.Z.getCheck(t.id).canChat
};
  }), m = i.useMemo(() => !h && !p && o && f.length > 0, [
h,
p,
o,
f.length
  ]), I = () => {
m && w.Z.trackExposure({
  location: 'guild_tooltip'
});
  }, T = () => {
E(!0), I();
  };
  return m && d ? (0, r.jsx)('div', {
onMouseEnter: T,
onMouseLeave: () => E(!1),
onFocus: T,
onBlur: () => E(!1),
children: (0, r.jsx)(c.Popout, {
  position: 'right',
  renderPopout: e => {
    var n;
    return (0, r.jsx)(x.Z, {
      guild: t,
      closePopout: () => E(!1),
      nudge: null !== (n = e.nudge) && void 0 !== n ? n : 0
    });
  },
  spacing: 0,
  onRequestClose: () => E(!1),
  shouldShow: !l && _,
  children: e => (0, r.jsx)('div', {
    ...e,
    children: s
  })
})
  }) : (0, r.jsx)(c.Tooltip, {
hideOnClick: !0,
spacing: 20,
position: 'right',
text: n ? null : (0, r.jsx)(W, {
  guild: t,
  includeActivity: o
}),
'aria-label': a,
onTooltipShow: I,
tooltipClassName: V.listItemTooltip,
children: e => {
  let {
    onFocus: t,
    onBlur: n,
    ...a
  } = e;
  return (0, r.jsx)('div', {
    onFocus: t,
    onBlur: n,
    children: i.cloneElement(i.Children.only(s), {
      ...a
    })
  });
}
  });
}