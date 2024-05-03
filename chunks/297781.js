"use strict";
n.r(t), n.d(t, {
  BadgeLocation: function() {
    return l
  },
  BadgesContainer: function() {
    return F
  },
  EpisodeBadge: function() {
    return U
  },
  GameTimestampBadge: function() {
    return L
  },
  MarathonBadge: function() {
    return O
  },
  NewGameBadge: function() {
    return y
  },
  ResurrectedBadge: function() {
    return j
  },
  StreakBadge: function() {
    return P
  },
  TopGameBadge: function() {
    return D
  },
  VoiceChannelBadge: function() {
    return R
  },
  WatchTimestampBadge: function() {
    return b
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("213602"),
  d = n("149020"),
  c = n("434559"),
  f = n("324992"),
  h = n("137443"),
  m = n("700287"),
  p = n("71970"),
  E = n("277758"),
  C = n("690172"),
  g = n("481060"),
  S = n("70956"),
  _ = n("22211"),
  T = n("561308"),
  I = n("371991"),
  A = n("689938"),
  N = n("509058");
(a = l || (l = {}))[a.CARD = 0] = "CARD", a[a.POPOUT = 1] = "POPOUT";
let v = i.createContext({});

function x() {
  return i.useContext(v)
}

function M(e) {
  let {
    Icon: t,
    text: n,
    iconColor: a,
    tooltipText: l,
    showTooltip: i
  } = e, {
    defaultTextColor: r,
    defaultIconColor: o
  } = x();
  return (0, s.jsx)(g.Tooltip, {
    text: l,
    shouldShow: i,
    children: e => (0, s.jsxs)("div", {
      className: N.badgeContainer,
      ...e,
      children: [(0, s.jsx)(t, {
        width: 12,
        height: 12,
        color: null != a ? a : o
      }), (0, s.jsx)(g.Text, {
        variant: "text-xs/normal",
        color: r,
        className: N.badgeLabel,
        children: n
      })]
    })
  })
}

function R(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, _.default)(t), {
    location: a
  } = x();
  return null == n || 1 === a ? null : (0, s.jsx)(M, {
    Icon: C.VoiceNormalIcon,
    text: n.name
  })
}

function L(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a,
    location: l
  } = x(), i = (0, T.isEntryActive)(t), r = 0 === l && i ? g.tokens.colors.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT : a;
  return (0, s.jsxs)("div", {
    className: N.badgeContainer,
    children: [(0, s.jsx)(d.GameControllerIcon, {
      width: 12,
      height: 12,
      color: r
    }), (0, s.jsx)(I.default, {
      entry: t,
      textColor: n
    })]
  })
}

function y(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), a = 0 === n ? g.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, T.isEntryNew)(t) ? (0, s.jsx)(M, {
    Icon: c.NewUserLargeIcon,
    text: A.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: a
  }) : null
}

function O(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (!(0, T.isEntryMarathon)(t)) return null;
  let a = (0, T.isEntryActive)(t),
    l = 0 === n,
    i = l || a ? (0, T.getMarathonName)(t) : (0, T.getFullMarathonDescription)(t);
  return (0, s.jsx)(M, {
    Icon: h.TimerIcon,
    text: i,
    tooltipText: (0, T.getMarathonDurationStr)(t),
    showTooltip: l && !a
  })
}

function j(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), a = (0, T.getResurrectedEntryLastPlayTime)(t);
  if (null == a) return null;
  let l = (0, T.getFullResurrectedBadgeText)(a);
  return (0, s.jsx)(M, {
    Icon: f.RetryIcon,
    showTooltip: 0 === n,
    tooltipText: l,
    text: 1 === n ? l : A.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function P(e) {
  let {
    entry: t
  } = e, n = (0, T.getStreakCount)(t);
  return null == n || n < 2 ? null : (0, s.jsx)(M, {
    Icon: u.FlashIcon,
    text: A.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: n
    })
  })
}

function D(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), a = (0, T.getEntryDuration)(t);
  if (null == a) return null;
  let l = 1 === n,
    i = l ? A.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : A.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, s.jsx)(M, {
    Icon: p.TrophyIcon,
    text: (0, s.jsxs)(s.Fragment, {
      children: [A.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, l ? " — " : ": ", i.format({
        hours: Math.round(a / S.default.Seconds.HOUR)
      })]
    })
  })
}

function b(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a
  } = x();
  return (0, s.jsxs)("div", {
    className: N.badgeContainer,
    children: [(0, s.jsx)(E.TvIcon, {
      width: 12,
      height: 12,
      color: a
    }), (0, s.jsx)(I.default, {
      entry: t,
      textColor: n
    })]
  })
}

function U(e) {
  var t;
  let {
    entry: n
  } = e, a = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : ""), l = null != a ? A.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: a[1],
    episodeNum: a[2]
  }) : null;
  return (0, s.jsx)(M, {
    Icon: m.TopicsIcon,
    text: l
  })
}

function F(e) {
  let {
    location: t,
    children: n
  } = e, a = {};
  return a = 0 === t ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "always-white",
    defaultIconColor: g.tokens.colors.TEXT_PRIMARY
  }, (0, s.jsx)(v.Provider, {
    value: {
      location: t,
      ...a
    },
    children: (0, s.jsx)("div", {
      className: o()(N.badgesContainer, {
        [N.badgesContainerCard]: 0 === t,
        [N.badgesContainerPopout]: 1 === t
      }),
      children: n
    })
  })
}