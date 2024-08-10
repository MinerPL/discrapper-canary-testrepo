n.d(t, {
  Z: function() {
return k;
  }
}), n(47120);
var i, a, s = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(442837),
  d = n(692547),
  u = n(481060),
  _ = n(232567),
  h = n(100527),
  E = n(471445),
  m = n(15274),
  I = n(924301),
  g = n(504160),
  p = n(151864),
  T = n(725436),
  S = n(497656),
  f = n(554747),
  C = n(230900),
  N = n(854698),
  A = n(703656),
  v = n(922482),
  Z = n(565799),
  L = n(501655),
  O = n(427679),
  R = n(448206),
  x = n(184301),
  b = n(103575),
  P = n(496675),
  M = n(594174),
  D = n(662868),
  y = n(981631),
  j = n(765305),
  U = n(689938),
  G = n(366846);
(a = i || (i = {}))[a.STAGE = 0] = 'STAGE', a[a.EVENT_EXTERNAL = 1] = 'EVENT_EXTERNAL', a[a.EVENT_VOICE = 2] = 'EVENT_VOICE', a[a.STUDY_ROOM = 3] = 'STUDY_ROOM';

function k(e) {
  let {
guild: t,
isStudyRoomNotice: n = !1
  } = e, i = (0, S.y)(t.id), a = (0, f.k5)(t.id), l = (0, c.e7)([O.Z], () => O.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]), {
isStageNoticeHidden: k,
isEventNoticeHidden: w
  } = (0, c.cj)([p.Z], () => ({
isStageNoticeHidden: p.Z.isLiveChannelNoticeHidden({
  stageId: null == l ? void 0 : l.id
}),
isEventNoticeHidden: p.Z.isLiveChannelNoticeHidden({
  eventId: null == a ? void 0 : a.id
})
  }), [
l,
a
  ]), B = null == i ? void 0 : i.id, H = (0, c.Wu)([Z.Z], () => [...new Set(Z.Z.getMutableParticipants(B, L.pV.SPEAKER).map(e => e.user))], [B]), V = (0, c.e7)([Z.Z], () => null != B ? Z.Z.getParticipantCount(B, L.pV.AUDIENCE) : 0, [B]), F = (0, c.e7)([P.Z], () => P.Z.can(y.Plq.CONNECT, i)), Y = (0, R.Z)(null == i ? void 0 : i.id), W = null == a ? void 0 : a.creator_id, z = (0, c.e7)([M.default], () => M.default.getUser(W), [W]);
  r.useEffect(() => {
null != W && (0, _.PR)(W);
  }, [W]);
  let {
noticeType: K,
title: q,
location: Q,
locationIcon: X,
canListenIn: J,
buttonText: $,
users: ee,
overflowUsers: et,
onClose: en
  } = r.useMemo(() => function(e) {
let {
  guildEvent: t,
  stageInstance: n,
  activeChannel: i,
  canConnect: a,
  myRole: r,
  eventCreator: l,
  speakers: o,
  listenerCount: c,
  isEventNoticeHidden: d,
  isStageNoticeHidden: _,
  isStudyRoomNotice: h
} = e, m = null != n && null != i && !_, p = null != t ? (0, N.DK)(t) : null;
if (h && null != i) {
  let e = (0, E.KS)(i);
  return {
    noticeType: 3,
    title: '\uD83D\uDCDA\u2615 '.concat(i.name),
    location: U.Z.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
    locationIcon: null != e ? (0, s.jsx)(e, {
      size: 'xs',
      color: 'currentColor',
      className: G.locationIcon
    }) : null,
    canListenIn: a,
    buttonText: U.Z.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
    users: [],
    overflowUsers: null
  };
}
if (null == t || d) {
  if (m) {
    let e = U.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON;
    return (null == r ? void 0 : r.speaker) ? e = U.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != r && (e = U.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
      noticeType: 0,
      title: n.topic,
      location: i.name,
      locationIcon: (0, s.jsx)(u.StageIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 16,
        height: 16,
        className: G.locationIcon
      }),
      canListenIn: a,
      buttonText: e,
      onClose: () => (0, g.ji)({
        stageId: null == n ? void 0 : n.id
      }),
      users: o.length > 5 ? o.slice(0, 5) : o,
      overflowUsers: c < 1 ? null : (0, s.jsxs)('div', {
        className: G.pill,
        children: [
          (0, s.jsx)(u.HeadphonesIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 12,
            height: 12,
            className: G.pillIcon
          }),
          (0, s.jsx)(u.Text, {
            variant: 'text-xs/medium',
            color: 'header-secondary',
            className: G.pillLabel,
            children: c
          })
        ]
      })
    };
  }
} else {
  if (t.entity_type === j.WX.STAGE_INSTANCE && m) {
    let e = U.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON;
    return (null == r ? void 0 : r.speaker) ? e = U.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != r && (e = U.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
      noticeType: 0,
      title: n.topic,
      location: i.name,
      locationIcon: (0, s.jsx)(u.StageIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 16,
        height: 16,
        className: G.locationIcon
      }),
      canListenIn: a,
      buttonText: e,
      onClose: () => (0, g.ji)({
        stageId: null == n ? void 0 : n.id
      }),
      users: o.length > 5 ? o.slice(0, 5) : o,
      overflowUsers: c < 1 ? null : (0, s.jsxs)('div', {
        className: G.pill,
        children: [
          (0, s.jsx)(u.HeadphonesIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 12,
            height: 12,
            className: G.pillIcon
          }),
          (0, s.jsx)(u.Text, {
            variant: 'text-xs/medium',
            color: 'header-secondary',
            className: G.pillLabel,
            children: c
          })
        ]
      })
    };
  }
  if (t.entity_type === j.WX.EXTERNAL) {
    let e = (0, C.cS)(t);
    if (null == e)
      return {
        noticeType: null
      };
    let n = I.ZP.getUserCount(t.id, p);
    return {
      noticeType: 1,
      title: t.name,
      location: (0, T.m)(e, !0),
      locationIcon: (0, s.jsx)(u.LocationIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 16,
        height: 16,
        className: G.locationIcon
      }),
      canListenIn: !1,
      buttonText: U.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
      onClose: () => (0, g.ji)({
        eventId: null == t ? void 0 : t.id
      }),
      users: null == l ? [] : [l],
      overflowUsers: n < 1 ? null : (0, s.jsxs)('div', {
        className: G.pill,
        children: [
          (0, s.jsx)(u.StarIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 12,
            height: 12,
            className: G.pillIcon
          }),
          (0, s.jsx)(u.Text, {
            variant: 'text-xs/medium',
            color: 'header-secondary',
            className: G.pillLabel,
            children: n
          })
        ]
      })
    };
  } else if (t.entity_type === j.WX.VOICE && null != i) {
    let e = (0, E.KS)(i),
      n = I.ZP.getUserCount(t.id, p);
    return {
      noticeType: 2,
      title: t.name,
      location: i.name,
      locationIcon: null != e ? (0, s.jsx)(e, {
        size: 'xs',
        color: 'currentColor',
        className: G.locationIcon
      }) : null,
      canListenIn: a,
      buttonText: U.Z.Messages.GUILD_EVENT_JOIN,
      onClose: () => (0, g.ji)({
        eventId: null == t ? void 0 : t.id
      }),
      users: null == l ? [] : [l],
      overflowUsers: n < 1 ? null : (0, s.jsxs)('div', {
        className: G.pill,
        children: [
          (0, s.jsx)(u.StarIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 12,
            height: 12,
            className: G.pillIcon
          }),
          (0, s.jsx)(u.Text, {
            variant: 'text-xs/medium',
            color: 'header-secondary',
            className: G.pillLabel,
            children: n
          })
        ]
      })
    };
  }
}
return {
  noticeType: null
};
  }({
guildEvent: a,
stageInstance: l,
activeChannel: i,
canConnect: F,
myRole: Y,
eventCreator: z,
speakers: H,
listenerCount: V,
isEventNoticeHidden: w,
isStageNoticeHidden: k,
isStudyRoomNotice: n
  }), [
a,
l,
i,
F,
Y,
z,
H,
V,
w,
k,
n
  ]);
  return null == K ? null : (0, s.jsxs)('div', {
className: G.container,
children: [
  null != en ? (0, s.jsx)(u.Clickable, {
    onClick: en,
    className: G.close,
    'aria-label': U.Z.Messages.DISMISS,
    children: (0, s.jsx)(u.XSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: G.closeIcon
    })
  }) : null,
  (0, s.jsxs)('div', {
    className: G.header,
    children: [
      (0, s.jsx)(D.Z, {
        color: d.Z.unsafe_rawColors.GREEN_230.css,
        width: 16,
        height: 16
      }),
      (0, s.jsx)(u.Text, {
        variant: 'text-xs/semibold',
        color: 'text-positive',
        children: U.Z.Messages.LIVE
      })
    ]
  }),
  (ee.length > 0 || null != et) && (0, s.jsxs)('div', {
    className: G.participants,
    children: [
      ee.map(e => (0, s.jsx)(u.Popout, {
        preload: () => (0, x.Z)(e, {
          guildId: t.id
        }),
        renderPopout: n => (0, s.jsx)(b.Z, {
          ...n,
          location: 'LiveChannelNotice',
          userId: e.id,
          guildId: t.id,
          newAnalyticsLocations: [h.Z.AVATAR]
        }),
        position: 'right',
        children: n => (0, s.jsx)(u.Avatar, {
          ...n,
          src: e.getAvatarURL(t.id, 24),
          'aria-label': e.username,
          size: u.AvatarSizes.SIZE_24,
          className: G.avatar
        })
      }, e.id)),
      et
    ]
  }),
  (0, s.jsx)(u.Text, {
    variant: 'text-md/medium',
    color: 'header-primary',
    className: o()(G.title, G.live),
    children: q
  }),
  (0, s.jsxs)('div', {
    className: G.locationContainer,
    children: [
      X,
      (0, s.jsx)(u.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        className: G.location,
        children: Q
      })
    ]
  }),
  J || 1 === K ? (0, s.jsx)(u.Button, {
    size: u.Button.Sizes.SMALL,
    color: u.Button.Colors.GREEN,
    onClick: () => {
      if (J)
        null != i && null != i.getGuildId() && ((0, v.Cq)(i), (0, A.XU)(i.getGuildId(), i.id));
      else {
        if (null == a)
          return;
        (0, m.bO)({
          eventId: a.id
        });
      }
    },
    className: G.button,
    fullWidth: !0,
    children: $
  }) : null
]
  });
}