n.d(t, {
  Co: function() {
return Q;
  },
  bZ: function() {
return i;
  },
  gt: function() {
return H;
  }
}), n(47120);
var i, a, s = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(442837),
  d = n(481060),
  u = n(884338),
  _ = n(471445),
  E = n(986332),
  h = n(662842),
  m = n(703656),
  I = n(922482),
  g = n(565799),
  p = n(501655),
  T = n(192079),
  S = n(427679),
  f = n(448206),
  C = n(496675),
  N = n(938475),
  A = n(626135),
  v = n(823379),
  Z = n(15274),
  L = n(924301),
  O = n(504160),
  R = n(151864),
  x = n(835184),
  b = n(725436),
  P = n(497656),
  M = n(79874),
  D = n(554747),
  y = n(230900),
  j = n(854698),
  U = n(139712),
  G = n(765305),
  k = n(981631),
  w = n(689938),
  B = n(697879);
let H = r.memo(function(e) {
  let {
heading: t,
location: n,
locationIcon: i,
details: a,
detailsIcon: r,
topic: l,
onClickCloseIcon: c,
onClickTopicText: u,
children: _
  } = e, E = (0, s.jsx)(d.Text, {
color: 'header-primary',
variant: 'text-md/semibold',
className: B.eventName,
children: l
  });
  return (0, s.jsxs)('div', {
className: B.channelNotice,
children: [
  (0, s.jsxs)('div', {
    className: o()(B.textBlock, B.singleLine),
    children: [
      (0, s.jsx)('div', {
        className: B.liveIndicator
      }),
      (0, s.jsx)(d.Text, {
        color: 'text-positive',
        variant: 'text-xs/bold',
        className: B.liveNowText,
        children: t
      }),
      null != c && (0, s.jsx)(d.Clickable, {
        onClick: c,
        className: B.closeIcon,
        'aria-label': w.Z.Messages.CLOSE,
        children: (0, s.jsx)(d.XSmallIcon, {
          size: 'xs',
          color: 'currentColor'
        })
      })
    ]
  }),
  null == u ? E : (0, s.jsx)(d.Button, {
    size: d.Button.Sizes.MIN,
    look: d.Button.Looks.LINK,
    color: d.Button.Colors.PRIMARY,
    onClick: u,
    children: E
  }),
  (0, s.jsxs)('div', {
    className: o()(B.textBlock, B.singleLine),
    children: [
      i,
      (0, s.jsx)(d.Text, {
        color: 'header-secondary',
        variant: 'text-xs/normal',
        className: B.channelName,
        children: n
      }),
      null != a && null != r && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(d.Text, {
            className: B.dotDivider,
            color: 'header-secondary',
            variant: 'text-xs/normal',
            children: '\u2022'
          }),
          r,
          (0, s.jsx)(d.Text, {
            color: 'header-secondary',
            variant: 'text-xs/normal',
            children: a
          })
        ]
      })
    ]
  }),
  _
]
  });
});

function V(e) {
  let {
guildEvent: t,
channel: n
  } = e, i = (0, c.Wu)([N.ZP], () => N.ZP.getVoiceStatesForChannel(n).map(e => {
let {
  user: t
} = e;
return t;
  }), [n]), a = (0, _.KS)(n);
  return (0, s.jsx)(H, {
onClickCloseIcon: () => (0, O.ji)({
  eventId: null == t ? void 0 : t.id
}),
heading: w.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
topic: t.name,
location: n.name,
locationIcon: null != a ? (0, s.jsx)(a, {
  size: 'xs',
  color: 'currentColor',
  className: B.stageIcon
}) : null,
children: (0, s.jsx)(Q, {
  channel: n,
  speakers: i,
  voiceType: 1
})
  });
}

function F(e) {
  let {
guildEvent: t,
noticeType: n
  } = e, i = (0, j.DK)(t), a = (0, c.e7)([L.ZP], () => L.ZP.isInterestedInEventRecurrence(t.id, i), [
t.id,
i
  ]), r = (0, c.e7)([x.Z], () => x.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
  return !a && null == r && (0, O._6)(t.id), (0, s.jsxs)(d.Button, {
fullWidth: !0,
className: B.joinButton,
innerClassName: B.rsvpButton,
onClick: function() {
  (0, U.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, O.L_)(t.id), 1000)), A.default.track(k.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
    guild_id: t.guild_id,
    notice_type: n
  });
},
look: a ? d.Button.Looks.OUTLINED : d.Button.Looks.FILLED,
color: a ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
size: d.Button.Sizes.SMALL,
children: [
  a ? (0, s.jsx)(d.CheckmarkLargeIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 16,
    height: 16,
    className: B.buttonIcon
  }) : (0, s.jsx)(d.BellIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 16,
    height: 16,
    className: B.buttonIcon
  }),
  w.Z.Messages.INDICATE_RSVP
]
  });
}

function Y(e) {
  var t;
  let {
guildEvent: n,
noticeType: i
  } = e, a = (0, y.cS)(n), l = null != a ? (0, b.m)(a, !0) : null, c = (0, y.nE)(n), u = (0, _.KS)(c), {
startTime: E,
endTime: h
  } = (0, M.ZP)(n), {
startDateTimeString: m,
upcomingEvent: I,
diffMinutes: g
  } = (0, j.ub)(E.toISOString(), null == h ? void 0 : h.toISOString()), p = I ? g > 0 ? w.Z.Messages.STARTING_IN_MINUTES.format({
minutes: g
  }) : w.Z.Messages.STARTING_SOON : w.Z.Messages.STARTING_ON_DATE.format({
date: m
  });
  return r.useEffect(() => {
A.default.track(k.rMx.CHANNEL_NOTICE_VIEWED, {
  notice_type: i,
  guild_id: n.guild_id
});
  }, [
n,
i
  ]), (0, s.jsxs)('div', {
className: B.channelNotice,
children: [
  (0, s.jsxs)('div', {
    className: B.textBlock,
    children: [
      (0, s.jsx)(d.Clickable, {
        onClick: () => (0, Z.bO)({
          eventId: n.id
        }),
        className: B.eventNameClickable,
        children: (0, s.jsx)(d.Text, {
          color: 'header-primary',
          variant: 'text-md/semibold',
          className: B.eventName,
          children: n.name
        })
      }),
      (0, s.jsx)(d.Clickable, {
        onClick: () => {
          A.default.track(k.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: i,
            guild_id: n.guild_id
          }), (0, O.L_)(n.id);
        },
        className: B.closeIcon,
        'aria-label': w.Z.Messages.CLOSE,
        children: (0, s.jsx)(d.XSmallIcon, {
          size: 'xs',
          color: 'currentColor'
        })
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: o()(B.textBlock, B.singleLine),
    children: [
      (0, s.jsx)(d.CalendarIcon, {
        size: 'custom',
        color: 'currentColor',
        className: B.stageIcon,
        width: 16,
        height: 16
      }),
      (0, s.jsx)(d.Text, {
        color: 'header-secondary',
        variant: 'text-xs/normal',
        className: B.startTime,
        children: p
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: o()(B.textBlock, B.singleLine),
    children: [
      null != u ? (0, s.jsx)(u, {
        size: 'xs',
        color: 'currentColor',
        className: B.stageIcon
      }) : (0, s.jsx)(d.LocationIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 16,
        height: 16,
        className: B.stageIcon
      }),
      (0, s.jsx)(d.Text, {
        color: 'header-secondary',
        variant: 'text-xs/normal',
        className: B.channelName,
        children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : l
      })
    ]
  }),
  (0, s.jsx)(F, {
    guildEvent: n,
    noticeType: i
  })
]
  });
}

function W(e) {
  let {
guildEvent: t
  } = e, n = (0, y.cS)(t);
  return null == n ? null : (0, s.jsx)(H, {
onClickCloseIcon: () => (0, O.ji)({
  eventId: null == t ? void 0 : t.id
}),
heading: w.Z.Messages.HAPPENING_NOW,
topic: t.name,
location: (0, b.m)(n, !0),
locationIcon: (0, s.jsx)(d.LocationIcon, {
  size: 'custom',
  color: 'currentColor',
  width: 16,
  height: 16,
  className: B.stageIcon
}),
children: (0, s.jsx)(z, {
  guildEvent: t
})
  });
}

function z(e) {
  let {
guildEvent: t
  } = e, n = r.useCallback(() => {
(0, Z.bO)({
  eventId: t.id
});
  }, [t]);
  return (0, s.jsx)(d.Button, {
fullWidth: !0,
className: B.joinButton,
onClick: n,
color: d.Button.Colors.GREEN,
size: d.Button.Sizes.SMALL,
children: w.Z.Messages.SEE_DETAIL
  });
}

function K(e) {
  let {
channel: t,
label: n
  } = e;
  return (0, s.jsx)(d.Button, {
fullWidth: !0,
className: B.joinButton,
onClick: () => {
  null != t && null != t.getGuildId() && ((0, I.Cq)(t), (0, m.XU)(t.getGuildId(), t.id));
},
color: d.Button.Colors.GREEN,
size: d.Button.Sizes.SMALL,
children: n
  });
}

function q(e) {
  let {
stageInstance: t,
channel: n
  } = e, i = (0, c.Wu)([g.Z], () => [...new Set(g.Z.getMutableParticipants(n.id, p.pV.SPEAKER).map(e => e.user))], [n.id]), a = (0, c.e7)([g.Z], () => g.Z.getParticipantCount(n.id, p.pV.AUDIENCE), [n.id]), r = w.Z.Messages.LISTENING_COUNT.format({
count: ''.concat(a)
  });
  return (0, s.jsx)(H, {
onClickCloseIcon: () => (0, O.ji)({
  stageId: null == t ? void 0 : t.id
}),
heading: w.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
location: n.name,
details: r,
detailsIcon: (0, s.jsx)(d.HeadphonesIcon, {
  size: 'custom',
  color: 'currentColor',
  width: 14,
  height: 14,
  className: B.stageIcon
}),
locationIcon: (0, s.jsx)(d.StageIcon, {
  size: 'custom',
  color: 'currentColor',
  width: 16,
  height: 16,
  className: B.stageIcon
}),
topic: t.topic,
children: (0, s.jsx)(Q, {
  channel: n,
  speakers: i,
  voiceType: 2
})
  });
}

function Q(e) {
  let {
channel: t,
speakers: n,
voiceType: i
  } = e, a = t.getGuildId(), l = r.useMemo(() => n.slice(0, 3), [n]), _ = (0, c.e7)([C.Z], () => C.Z.can(k.Plq.CONNECT, t)), E = (0, f.Z)(t.id), h = w.Z.Messages.JOIN;
  switch (i) {
case 1:
  h = w.Z.Messages.JOIN;
  break;
case 2:
  h = w.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON, (null == E ? void 0 : E.speaker) ? h = w.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != E && (h = w.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON);
  break;
case 3:
  h = w.Z.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA;
  break;
default:
  (0, v.vE)(i);
  }
  return null == a ? null : (0, s.jsxs)(s.Fragment, {
children: [
  l.length > 0 ? (0, s.jsxs)('div', {
    className: o()(B.textBlock, B.singleLine),
    children: [
      (0, s.jsx)(u.Z, {
        guildId: a,
        users: l,
        showUserPopout: !0,
        size: u.u.SIZE_16
      }),
      (0, s.jsx)(d.Text, {
        color: 'header-secondary',
        variant: 'text-xs/normal',
        className: B.userNames,
        children: (0, T.ER)(a, l, null == t ? void 0 : t.id, n.length)
      })
    ]
  }) : null,
  _ && null == E && (0, s.jsx)(K, {
    channel: t,
    label: h
  })
]
  });
}
(a = i || (i = {}))[a.VOICE = 1] = 'VOICE', a[a.STAGE = 2] = 'STAGE', a[a.STUDY_ROOM = 3] = 'STUDY_ROOM', t.ZP = r.memo(function(e) {
  let {
guild: t
  } = e, {
showRedesignedLiveChannelNotice: n
  } = (0, E.o)(!0), i = (0, P.y)(t.id), a = (0, D.k5)(t.id), r = (0, D.Vm)(t.id), l = (0, c.e7)([S.Z], () => S.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]), {
isStageNoticeHidden: o,
isEventNoticeHidden: d
  } = (0, c.cj)([R.Z], () => ({
isStageNoticeHidden: R.Z.isLiveChannelNoticeHidden({
  stageId: null == l ? void 0 : l.id
}),
isEventNoticeHidden: R.Z.isLiveChannelNoticeHidden({
  eventId: null == a ? void 0 : a.id
})
  }), [
l,
a
  ]), u = null, _ = null != l && null != i && !o;
  if (n)
return (0, s.jsx)(h.Z, {
  guild: t
});
  null == a || d ? _ && (u = (0, s.jsx)(q, {
stageInstance: l,
channel: i
  })) : a.entity_type === G.WX.STAGE_INSTANCE && _ ? u = (0, s.jsx)(q, {
stageInstance: l,
channel: i
  }) : a.entity_type === G.WX.EXTERNAL ? u = (0, s.jsx)(W, {
guildEvent: a
  }) : a.entity_type === G.WX.VOICE && null != i && (u = (0, s.jsx)(V, {
guildEvent: a,
channel: i
  }));
  let m = t.hasFeature(k.oNc.COMMUNITY) || t.hasFeature(k.oNc.HUB);
  if (null == u && null != r && !m) {
let {
  upcomingEvent: e,
  noticeType: t
} = r;
u = (0, s.jsx)(Y, {
  guildEvent: e,
  noticeType: t
});
  }
  return u;
});