"use strict";
a.r(t), a.d(t, {
  default: function() {
    return P
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  d = a("106351"),
  r = a("442837"),
  u = a("481060"),
  o = a("131388"),
  c = a("471445"),
  f = a("15274"),
  m = a("924301"),
  h = a("788229"),
  E = a("230900"),
  g = a("854698"),
  _ = a("405613"),
  I = a("41776"),
  x = a("703656"),
  S = a("922482"),
  v = a("565799"),
  C = a("501655"),
  N = a("592125"),
  p = a("496675"),
  T = a("938475"),
  A = a("305878"),
  j = a("855693"),
  M = a("393112"),
  D = a("602623"),
  F = a("626135"),
  L = a("601410"),
  R = a("679184"),
  b = a("981631"),
  G = a("369701"),
  O = a("765305"),
  y = a("689938"),
  H = a("778411");

function k(e) {
  let {
    event: t
  } = e, {
    scheduled_start_time: a,
    scheduled_end_time: s
  } = t, d = (0, m.isGuildScheduledEventActive)(t), [{
    startDateTimeString: r,
    endDateTimeString: o,
    currentOrPastEvent: c,
    upcomingEvent: f,
    diffMinutes: h
  }, E] = n.useState((0, g.getEventTimeData)(a, s));
  n.useEffect(() => {
    let e = setInterval(() => E((0, g.getEventTimeData)(a, s)), 1e3);
    return () => {
      clearInterval(e)
    }
  }, []);
  let _ = r,
    I = "header-secondary";
  return d ? (_ = y.default.Messages.STAGE_CHANNEL_LIVE_NOW, I = "text-positive") : c ? (_ = y.default.Messages.STARTING_SOON, I = "text-brand") : f ? (_ = h > 0 ? y.default.Messages.STARTING_IN_MINUTES.format({
    minutes: h
  }) : y.default.Messages.STARTING_SOON, I = "text-brand") : null != o && "" !== o && (_ = y.default.Messages.START_DATE_TO_END_DATE.format({
    start: r,
    end: o
  })), (0, l.jsxs)("div", {
    className: i()(H.eventTime, {
      [H.isActive]: d,
      [H.isBrand]: c || f
    }),
    children: [(0, l.jsx)(j.default, {
      width: 12,
      height: 12
    }), (0, l.jsxs)(u.Text, {
      color: I,
      variant: "text-xs/normal",
      className: H.eventTimeLabel,
      children: [_, (0, l.jsx)("span", {
        className: H.separator,
        children: "•"
      })]
    })]
  })
}

function U(e) {
  let {
    event: t,
    channel: a,
    isCollapsedSize: s,
    onEventClick: i
  } = e, d = (0, r.useStateFromStores)([p.default], () => p.default.can(b.Permissions.CONNECT, a)), o = n.useCallback(() => {
    null != a && null != a.getGuildId() && d && ((0, S.connectAndOpen)(a), (0, x.transitionToGuild)(a.getGuildId(), a.id))
  }, [a, d]), c = (0, _.default)(t), f = t.entity_type === O.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? y.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : y.default.Messages.JOIN;
  if (null == t.image || s) return null != a && d ? (0, l.jsx)("div", {
    className: H.eventJoinContainer,
    children: (0, l.jsx)(u.Button, {
      className: H.__invalid_joinButton,
      onClick: o,
      fullWidth: !0,
      color: u.Button.Colors.GREEN,
      children: f
    })
  }) : null;
  return null != a && d ? (0, l.jsxs)(u.Clickable, {
    onClick: o,
    className: H.eventJoinContainer,
    children: [(0, l.jsx)("div", {
      className: H.eventImg,
      style: {
        backgroundImage: "url(".concat(c, ")")
      }
    }), (0, l.jsx)("div", {
      className: H.eventImgHover,
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: H.eventImgJoinButton,
        children: f
      })
    })]
  }) : (0, l.jsx)(u.Clickable, {
    onClick: i,
    className: H.eventJoinContainer,
    children: (0, l.jsx)("div", {
      className: H.eventImg,
      style: {
        backgroundImage: "url(".concat(c, ")")
      }
    })
  })
}

function w(e) {
  var t;
  let {
    event: a,
    channel: n,
    isActive: s,
    isCollapsedSize: d
  } = e, r = (0, c.getChannelIconComponent)(n);
  return (0, l.jsxs)("div", {
    className: H.eventInfo,
    children: [(!s || d) && (0, l.jsx)(k, {
      event: a
    }), (0, l.jsx)("div", {
      className: H.location,
      children: null != n && null != r ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r, {
          width: 12,
          height: 12,
          className: H.icon
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          className: H.locationLabel,
          children: n.name
        })]
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(M.default, {
          height: 12,
          width: 12,
          className: i()(H.__invalid_channelContainer, H.icon)
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          className: H.locationLabel,
          children: (0, h.guildEventDetailsParser)(null !== (t = (0, E.getLocationFromEvent)(a)) && void 0 !== t ? t : void 0, !0)
        })]
      })
    })]
  })
}

function P(e) {
  let {
    event: t,
    isInList: a
  } = e, {
    guild_id: s
  } = t, i = (0, o.default)(G.COLLAPSED_SIZE_MEDIA_QUERY), u = (0, m.isGuildScheduledEventActive)(t), c = (0, r.useStateFromStores)([N.default], () => N.default.getChannel(t.channel_id)), h = (0, r.useStateFromStores)([I.default], () => I.default.isLurking(s), [s]), E = n.useCallback(() => {
    F.default.track(b.AnalyticEvents.HOME_EVENT_CLICKED, {
      guild_id: s,
      home_session_id: L.default.getHomeSessionId(s),
      guild_scheduled_event_id: t.id,
      is_active: u
    }), (0, f.openGuildEventDetails)({
      eventId: t.id,
      parentGuildId: s
    })
  }, [t, s, u]), g = (0, r.useStateFromStoresArray)([T.default], () => null == c ? [] : T.default.getVoiceStatesForChannel(c).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [c]), _ = (0, r.useStateFromStores)([v.default], () => {
    if (null != c && c.type === d.ChannelTypes.GUILD_STAGE_VOICE) return v.default.getParticipantCount(null == c ? void 0 : c.id, C.StageChannelParticipantNamedIndex.AUDIENCE)
  }, [c]);
  return (0, l.jsx)(R.ActiveNowBase, {
    listItemId: a ? t.id : void 0,
    shouldUseCollapsedLayout: !1,
    onClick: h ? void 0 : E,
    icon: u ? (0, l.jsx)("div", {
      className: H.liveNowIcon
    }) : (0, l.jsx)(A.default, {
      width: R.ACTIVE_NOW_ICON_SIZE,
      height: R.ACTIVE_NOW_ICON_SIZE
    }),
    iconTooltipText: y.default.Messages.GUILD_HOME_EVENTS_TOOLTIP_TEXT,
    header: t.name,
    textNode: (0, l.jsx)(w, {
      event: t,
      channel: c,
      isActive: u,
      isCollapsedSize: i
    }),
    accessoryNode: u ? (0, l.jsx)(D.default, {
      guildId: s,
      users: g,
      count: _,
      size: D.Sizes.SIZE_16,
      max: R.DISPLAYED_PARTICIPANT_AVATARS
    }) : null,
    children: u && (0, l.jsx)(U, {
      event: t,
      channel: c,
      isCollapsedSize: i,
      onEventClick: E
    })
  })
}