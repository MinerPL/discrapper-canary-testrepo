n.d(t, {
  K: function() {
return Q;
  },
  Z: function() {
return X;
  }
}), n(390547), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(392711),
  l = n.n(o),
  u = n(442837),
  c = n(477690),
  d = n(481060),
  _ = n(317381),
  E = n(884338),
  f = n(666188),
  h = n(372769),
  p = n(523751),
  m = n(246364),
  I = n(746916),
  T = n(965638),
  g = n(160404),
  S = n(41776),
  A = n(777861),
  N = n(565799),
  v = n(501655),
  O = n(517334),
  R = n(344185),
  C = n(199902),
  y = n(77498),
  D = n(984933),
  L = n(607744),
  b = n(158776),
  M = n(9156),
  P = n(594174),
  U = n(938475),
  w = n(624138),
  x = n(510601),
  G = n(59688),
  k = n(456774),
  B = n(718582),
  F = n(981631),
  V = n(689938),
  H = n(452670),
  Z = n(275024);
let Y = (0, w.Mg)(c.Z.GUILD_TOOLTIP_ICON_SIZE),
  j = (0, w.Mg)(c.Z.GUILD_TOOLTIP_ICON_SIZE_V_2);

function W(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)('div', {
className: H.row,
children: [
  (0, r.jsx)(e, {
    className: H.activityIcon,
    color: 'currentColor'
  }),
  (0, r.jsx)(E.Z, {
    guildId: n,
    users: t,
    max: 6
  })
]
  });
}

function K(e) {
  let {
muteConfig: t,
className: n
  } = e;
  return (null == t ? void 0 : t.end_time) == null ? (0, r.jsx)(d.Text, {
variant: 'text-xs/normal',
color: 'text-muted',
className: n,
children: V.Z.Messages.FORM_LABEL_MUTED
  }) : (0, r.jsx)(A.Z, {
muteConfig: t,
className: n
  });
}

function z(e) {
  var t, n, a;
  let {
guild: o
  } = e, c = o.id, {
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
    D.ZP,
    R.Z
  ], () => {
    let e = D.ZP.getChannels(t)[D.Zb].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === F.d4z.GUILD_VOICE;
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id;
    });
    return [
      ...e,
      ...Object.values(R.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))
    ];
  }, [t]),
  r = (0, O.ZP)(t),
  a = i.useMemo(() => r.map(e => e.id), [r]),
  s = (0, u.e7)([U.ZP], () => U.ZP.getVoiceStates(t), [t]),
  o = l().flatMap(n, t => {
    var n;
    return t === e.afkChannelId ? [] : (null !== (n = s[t]) && void 0 !== n ? n : []).map(e => {
      let {
        user: t
      } = e;
      return t;
    });
  }),
  c = (0, u.Wu)([N.Z], () => l().flatMap(a, t => t === e.afkChannelId ? [] : N.Z.getMutableParticipants(t, v.pV.SPEAKER).filter(e => e.type === v.Ui.VOICE).map(e => {
    let {
      user: t
    } = e;
    return t;
  }))),
  d = (0, u.e7)([N.Z], () => {
    let e = 0;
    for (let t of a)
      e += N.Z.getParticipantCount(t, v.pV.AUDIENCE);
    return e;
  }),
  E = (0, u.Wu)([C.Z], () => C.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId), [t]),
  f = (0, u.Wu)([
    b.Z,
    y.Z
  ], () => o.filter(e => b.Z.getActivities(e.id, t).some(e => (null == e ? void 0 : e.application_id) != null && null != y.Z.getDetectableGame(null == e ? void 0 : e.application_id)))),
  h = (0, x.kM)('Guild Tooltip', !1),
  p = h ? f.map(e => e.id) : [],
  m = (0, u.Wu)([_.ZP], () => _.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds)), [t]),
  I = (0, u.Wu)([P.default], () => m.map(e => P.default.getUser(e)), [m]),
  T = (0, u.Wu)([P.default], () => E.map(e => P.default.getUser(e)), [E]),
  g = o.filter(e => !E.includes(e.id) && !m.includes(e.id) && !p.includes(e.id)),
  S = T.filter(e => null != e && !m.includes(e.id)),
  A = c.length > 0 || g.length > 0 || S.length > 0 || I.length > 0;
return {
  voiceUsersToShow: g,
  stageSpeakers: c,
  numStageListeners: d,
  streamUsersToShow: S,
  embeddedActivitiesUsers: I,
  gameUsers: f,
  shouldShowGameBadge: h,
  hasActivity: A
};
  }(o), S = W(d.GameControllerIcon, T, c), A = W(d.VoiceNormalIcon, f, c);
  let L = (t = c, n = h, a = p, 0 === n.length ? null : (0, r.jsxs)('div', {
  className: H.row,
  children: [
    (0, r.jsx)(d.StageIcon, {
      size: 'lg',
      color: 'currentColor',
      className: H.activityIcon
    }),
    (0, r.jsx)(E.Z, {
      guildId: t,
      users: n,
      max: 3
    }),
    (0, r.jsxs)('div', {
      className: H.stageListenerPill,
      children: [
        (0, r.jsx)(d.HeadphonesIcon, {
          size: 'xs',
          color: 'currentColor'
        }),
        (0, r.jsx)(d.Text, {
          className: H.stageListenerCount,
          color: 'text-normal',
          variant: 'text-xs/normal',
          children: a
        })
      ]
    })
  ]
})),
w = W(d.ScreenArrowIcon, m, c),
G = W(d.ActivitiesIcon, I, c),
{
  isMuted: k,
  muteConfig: B
} = (0, u.cj)([M.ZP], () => ({
  isMuted: M.ZP.isMuted(c),
  muteConfig: M.ZP.getMuteConfig(c)
}), [c]);
  return null != S && x.ZP.trackExposure({
location: 'Guild Tooltip'
  }), (0, r.jsxs)(r.Fragment, {
children: [
  L,
  A,
  w,
  g && S,
  G,
  k ? (0, r.jsx)(K, {
    muteConfig: B,
    className: s()(H.muteText, {
      [H.muteTextWithActivity]: null != A || null != w
    })
  }) : null
]
  });
}

function q(e) {
  let {
guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(d.Text, {
className: H.viewAsRolesWarning,
color: 'text-normal',
variant: 'text-xs/normal',
children: function(e) {
  switch (e) {
    case m.wB.SUBMITTED:
      return V.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
    case m.wB.REJECTED:
      return V.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
    case m.wB.APPROVED:
      return V.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
    default:
      return V.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED;
  }
}(t)
  });
}

function Q(e) {
  let {
guild: t,
includeActivity: n = !0
  } = e, i = (0, f.Z)(t), a = (0, I.E)(t.id), o = null != a ? (0, r.jsx)(q, {
guildJoinRequestStatus: a
  }) : null, l = n ? (0, r.jsx)(z, {
guild: t
  }) : null, c = (0, u.e7)([g.Z], () => g.Z.isViewingRoles(t.id)), _ = (0, T.Ij)(t);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsxs)('div', {
    className: s()(H.row, H.rowGuildName),
    children: [
      i ? (0, r.jsx)(p.Z, {
        guild: t,
        size: j,
        className: H.rowIconV2
      }) : (0, r.jsx)(h.Z, {
        guild: t,
        size: Y,
        className: H.rowIcon
      }),
      (0, r.jsx)('span', {
        className: s()(H.guildNameText, {
          [H.guildNameTextLimitedSize]: null != l
        }),
        children: t.toString()
      })
    ]
  }),
  _ ? (0, r.jsx)(d.Text, {
    className: H.invitesDisabledTooltip,
    color: 'header-secondary',
    variant: 'text-sm/medium',
    children: V.Z.Messages.INVITES_DISABLED_TOOLTIP
  }) : null,
  c ? (0, r.jsx)(d.Text, {
    className: H.viewAsRolesWarning,
    color: 'text-normal',
    variant: 'text-xs/normal',
    children: V.Z.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
  }) : null != o ? o : l
]
  });
}

function X(e) {
  let {
guild: t,
disabled: n = !1,
'aria-label': a = !1,
children: s,
includeActivity: o = !0,
isDragging: l
  } = e, c = (0, G.o)('guilds_bar', !1), [_, E] = i.useState(!1), f = (0, B.V1)(t), {
isUserLurking: h,
isUnverifiedAccount: p
  } = (0, u.cj)([
S.Z,
L.Z
  ], () => {
let e = S.Z.isLurking(t.id);
return {
  isUserLurking: e,
  isUnverifiedAccount: !L.Z.getCheck(t.id).canChat
};
  }), m = i.useMemo(() => !h && !p && o && f.length > 0, [
h,
p,
o,
f.length
  ]), I = () => {
m && G.Z.trackExposure({
  location: 'guild_tooltip'
});
  }, T = () => {
E(!0), I();
  };
  return m && c ? (0, r.jsx)('div', {
onMouseEnter: T,
onMouseLeave: () => E(!1),
onFocus: T,
onBlur: () => E(!1),
children: (0, r.jsx)(d.Popout, {
  position: 'right',
  renderPopout: e => {
    var n;
    return (0, r.jsx)(k.Z, {
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
  }) : (0, r.jsx)(d.Tooltip, {
hideOnClick: !0,
spacing: 20,
position: 'right',
text: n ? null : (0, r.jsx)(Q, {
  guild: t,
  includeActivity: o
}),
'aria-label': a,
onTooltipShow: I,
tooltipClassName: Z.listItemTooltip,
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