"use strict";
n.r(t), n.d(t, {
  GuildNoticeBody: function() {
    return q
  },
  LiveVoiceOrStageChannelNotice: function() {
    return en
  },
  VoiceChannelType: function() {
    return a
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("442837"),
  o = n("481060"),
  u = n("471445"),
  d = n("986332"),
  c = n("662842"),
  f = n("703656"),
  E = n("922482"),
  h = n("565799"),
  _ = n("501655"),
  C = n("192079"),
  m = n("427679"),
  S = n("448206"),
  I = n("496675"),
  p = n("938475"),
  T = n("808602"),
  g = n("305878"),
  A = n("263704"),
  N = n("465670"),
  v = n("242315"),
  O = n("393112"),
  R = n("170039"),
  L = n("602623"),
  P = n("626135"),
  M = n("823379"),
  y = n("15274"),
  D = n("924301"),
  b = n("504160"),
  x = n("151864"),
  U = n("835184"),
  j = n("780294"),
  G = n("725436"),
  w = n("497656"),
  k = n("79874"),
  F = n("554747"),
  B = n("230900"),
  H = n("854698"),
  V = n("139712"),
  Y = n("765305"),
  W = n("981631"),
  K = n("689938"),
  z = n("391236");
let q = i.memo(function(e) {
  let {
    heading: t,
    location: n,
    locationIcon: a,
    details: s,
    detailsIcon: i,
    topic: r,
    onClickCloseIcon: u,
    onClickTopicText: d,
    children: c
  } = e, f = (0, l.jsx)(o.Text, {
    color: "header-primary",
    variant: "text-md/semibold",
    className: z.eventName,
    children: r
  });
  return (0, l.jsxs)("div", {
    className: z.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: z.textBlock,
      children: [(0, l.jsx)("div", {
        className: z.liveIndicator
      }), (0, l.jsx)(o.Text, {
        color: "text-positive",
        variant: "text-xs/bold",
        className: z.liveNowText,
        children: t
      }), null != u && (0, l.jsx)(o.Clickable, {
        onClick: u,
        className: z.closeIcon,
        "aria-label": K.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          height: 16,
          width: 16
        })
      })]
    }), null == d ? f : (0, l.jsx)(o.Button, {
      size: o.Button.Sizes.MIN,
      look: o.Button.Looks.LINK,
      color: o.Button.Colors.PRIMARY,
      onClick: d,
      children: f
    }), (0, l.jsxs)("div", {
      className: z.textBlock,
      children: [a, (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: z.channelName,
        children: n
      }), null != s && null != i && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Text, {
          className: z.dotDivider,
          color: "header-secondary",
          variant: "text-xs/normal",
          children: "•"
        }), i, (0, l.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    }), c]
  })
});

function Q(e) {
  let {
    guildEvent: t,
    channel: n
  } = e, a = (0, r.useStateFromStoresArray)([p.default], () => p.default.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), s = (0, u.getChannelIconComponent)(n);
  return (0, l.jsx)(q, {
    onClickCloseIcon: () => (0, b.hideLiveChannelNotice)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: K.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    topic: t.name,
    location: n.name,
    locationIcon: null != s ? (0, l.jsx)(s, {
      width: 16,
      height: 16,
      className: z.stageIcon
    }) : null,
    children: (0, l.jsx)(en, {
      channel: n,
      speakers: a,
      voiceType: 1
    })
  })
}

function Z(e) {
  let {
    guildEvent: t,
    noticeType: n
  } = e, a = (0, H.getNextRecurrenceIdInEvent)(t), s = (0, r.useStateFromStores)([D.default], () => D.default.isInterestedInEventRecurrence(t.id, a), [t.id, a]), i = (0, r.useStateFromStores)([U.default], () => U.default.getUpcomingNoticeSeenTime(t.id), [t.id]);
  return !s && null == i && (0, b.markUpcomingEventNoticeAsSeen)(t.id), (0, l.jsxs)(o.Button, {
    fullWidth: !0,
    className: z.joinButton,
    innerClassName: z.rsvpButton,
    onClick: function() {
      (0, V.default)(t.id, null, t.guild_id, () => setTimeout(() => (0, b.hideUpcomingEventNotice)(t.id), 1e3)), P.default.track(W.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        guild_id: t.guild_id,
        notice_type: n
      })
    },
    look: s ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
    color: s ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: [s ? (0, l.jsx)(A.default, {
      width: 16,
      height: 16,
      className: z.buttonIcon
    }) : (0, l.jsx)(T.default, {
      width: 16,
      height: 16,
      className: z.buttonIcon
    }), K.default.Messages.INDICATE_RSVP]
  })
}

function X(e) {
  var t;
  let {
    guildEvent: n,
    noticeType: a
  } = e, s = (0, B.getLocationFromEvent)(n), r = null != s ? (0, G.guildEventDetailsParser)(s, !0) : null, d = (0, B.getChannelFromEvent)(n), c = (0, u.getChannelIconComponent)(d), {
    startTime: f,
    endTime: E
  } = (0, k.default)(n.id), {
    startDateTimeString: h,
    upcomingEvent: _,
    diffMinutes: C
  } = (0, H.getEventTimeData)(f.toISOString(), null == E ? void 0 : E.toISOString()), m = _ ? C > 0 ? K.default.Messages.STARTING_IN_MINUTES.format({
    minutes: C
  }) : K.default.Messages.STARTING_SOON : K.default.Messages.STARTING_ON_DATE.format({
    date: h
  });
  return i.useEffect(() => {
    P.default.track(W.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: a,
      guild_id: n.guild_id
    })
  }, [n, a]), (0, l.jsxs)("div", {
    className: z.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: z.textBlock,
      children: [(0, l.jsx)(o.Clickable, {
        onClick: () => (0, y.openGuildEventDetails)({
          eventId: n.id
        }),
        className: z.eventNameClickable,
        children: (0, l.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: z.eventName,
          children: n.name
        })
      }), (0, l.jsx)(o.Clickable, {
        onClick: () => {
          P.default.track(W.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
            notice_type: a,
            guild_id: n.guild_id
          }), (0, b.hideUpcomingEventNotice)(n.id)
        },
        className: z.closeIcon,
        "aria-label": K.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          height: 16,
          width: 16
        })
      })]
    }), (0, l.jsxs)("div", {
      className: z.textBlock,
      children: [(0, l.jsx)(g.default, {
        className: z.stageIcon,
        width: 16,
        height: 16
      }), (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: z.startTime,
        children: m
      })]
    }), (0, l.jsxs)("div", {
      className: z.textBlock,
      children: [null != c ? (0, l.jsx)(c, {
        width: 16,
        height: 16,
        className: z.stageIcon
      }) : (0, l.jsx)(O.default, {
        width: 16,
        height: 16,
        className: z.stageIcon
      }), (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: z.channelName,
        children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : r
      })]
    }), (0, l.jsx)(Z, {
      guildEvent: n,
      noticeType: a
    })]
  })
}

function J(e) {
  let {
    guildEvent: t
  } = e, n = (0, B.getLocationFromEvent)(t);
  return null == n ? null : (0, l.jsx)(q, {
    onClickCloseIcon: () => (0, b.hideLiveChannelNotice)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: K.default.Messages.HAPPENING_NOW,
    topic: t.name,
    location: (0, G.guildEventDetailsParser)(n, !0),
    locationIcon: (0, l.jsx)(O.default, {
      width: 16,
      height: 16,
      className: z.stageIcon
    }),
    children: (0, l.jsx)($, {
      guildEvent: t
    })
  })
}

function $(e) {
  let {
    guildEvent: t
  } = e, n = i.useCallback(() => {
    (0, y.openGuildEventDetails)({
      eventId: t.id
    })
  }, [t]);
  return (0, l.jsx)(o.Button, {
    fullWidth: !0,
    className: z.joinButton,
    onClick: n,
    color: o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: K.default.Messages.SEE_DETAIL
  })
}

function ee(e) {
  let {
    channel: t,
    label: n
  } = e;
  return (0, l.jsx)(o.Button, {
    fullWidth: !0,
    className: z.joinButton,
    onClick: () => {
      null != t && null != t.getGuildId() && ((0, E.connectAndOpen)(t), (0, f.transitionToGuild)(t.getGuildId(), t.id))
    },
    color: o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: n
  })
}

function et(e) {
  let {
    stageInstance: t,
    channel: n
  } = e, a = (0, r.useStateFromStoresArray)([h.default], () => [...new Set(h.default.getMutableParticipants(n.id, _.StageChannelParticipantNamedIndex.SPEAKER).map(e => e.user))], [n.id]), s = (0, r.useStateFromStores)([h.default], () => h.default.getParticipantCount(n.id, _.StageChannelParticipantNamedIndex.AUDIENCE), [n.id]), i = K.default.Messages.LISTENING_COUNT.format({
    count: "".concat(s)
  });
  return (0, l.jsx)(q, {
    onClickCloseIcon: () => (0, b.hideLiveChannelNotice)({
      stageId: null == t ? void 0 : t.id
    }),
    heading: K.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    location: n.name,
    details: i,
    detailsIcon: (0, l.jsx)(v.default, {
      width: 14,
      height: 14,
      className: z.stageIcon
    }),
    locationIcon: (0, l.jsx)(R.default, {
      width: 16,
      height: 16,
      className: z.stageIcon
    }),
    topic: t.topic,
    children: (0, l.jsx)(en, {
      channel: n,
      speakers: a,
      voiceType: 2
    })
  })
}

function en(e) {
  let {
    channel: t,
    speakers: n,
    voiceType: a
  } = e, s = t.getGuildId(), u = i.useMemo(() => n.slice(0, 3), [n]), d = (0, r.useStateFromStores)([I.default], () => I.default.can(W.Permissions.CONNECT, t)), c = (0, S.default)(t.id), f = K.default.Messages.JOIN;
  switch (a) {
    case 1:
      f = K.default.Messages.JOIN;
      break;
    case 2:
      f = K.default.Messages.STAGE_CHANNEL_JOIN_BUTTON, (null == c ? void 0 : c.speaker) ? f = K.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != c && (f = K.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON);
      break;
    case 3:
      f = K.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA;
      break;
    default:
      (0, M.assertNever)(a)
  }
  return null == s ? null : (0, l.jsxs)(l.Fragment, {
    children: [u.length > 0 ? (0, l.jsxs)("div", {
      className: z.textBlock,
      children: [(0, l.jsx)(L.default, {
        guildId: s,
        users: u,
        showUserPopout: !0,
        size: L.Sizes.SIZE_16
      }), (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: z.userNames,
        children: (0, C.summarizeUsernamesParticipating)(s, u, null == t ? void 0 : t.id, n.length)
      })]
    }) : null, d && null == c && (0, l.jsx)(ee, {
      channel: t,
      label: f
    })]
  })
}(s = a || (a = {}))[s.VOICE = 1] = "VOICE", s[s.STAGE = 2] = "STAGE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM", t.default = i.memo(function(e) {
  let {
    guild: t
  } = e, {
    showRedesignedLiveChannelNotice: n
  } = (0, d.useChannelNoticeRedesignExperiment)(!0), a = (0, w.useActiveEventOrStageInstanceChannel)(t.id), s = (0, F.useGuildActiveEvent)(t.id), i = (0, F.useGuildUpcomingEventsNotice)(t.id), {
    canSeeUpcomingEventsNotices: o
  } = j.default.useExperiment({
    guildId: t.id,
    location: "Guild Channel Notice"
  }, {
    autoTrackExposure: !1
  }), u = (0, r.useStateFromStores)([m.default], () => m.default.getStageInstanceByChannel(null == a ? void 0 : a.id), [a]), {
    isStageNoticeHidden: f,
    isEventNoticeHidden: E
  } = (0, r.useStateFromStoresObject)([x.default], () => ({
    isStageNoticeHidden: x.default.isLiveChannelNoticeHidden({
      stageId: null == u ? void 0 : u.id
    }),
    isEventNoticeHidden: x.default.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [u, s]), h = null, _ = null != u && null != a && !f;
  if (n) return (0, l.jsx)(c.default, {
    guild: t
  });
  null == s || E ? _ && (h = (0, l.jsx)(et, {
    stageInstance: u,
    channel: a
  })) : s.entity_type === Y.GuildScheduledEventEntityTypes.STAGE_INSTANCE && _ ? h = (0, l.jsx)(et, {
    stageInstance: u,
    channel: a
  }) : s.entity_type === Y.GuildScheduledEventEntityTypes.EXTERNAL ? h = (0, l.jsx)(J, {
    guildEvent: s
  }) : s.entity_type === Y.GuildScheduledEventEntityTypes.VOICE && null != a && (h = (0, l.jsx)(Q, {
    guildEvent: s,
    channel: a
  }));
  let C = t.hasFeature(W.GuildFeatures.COMMUNITY) || t.hasFeature(W.GuildFeatures.HUB);
  if (null == h && null != i && !C) {
    let {
      upcomingEvent: e,
      noticeType: n
    } = i;
    j.default.trackExposure({
      guildId: t.id,
      location: "Guild Live Channel Notice"
    }), h = o ? (0, l.jsx)(X, {
      guildEvent: e,
      noticeType: n
    }) : null
  }
  return h
})