"use strict";
n.r(t), n.d(t, {
  BadgeLocation: function() {
    return l
  },
  BadgesContainer: function() {
    return Q
  },
  EpisodeBadge: function() {
    return X
  },
  GameTimestampBadge: function() {
    return k
  },
  ListenTimestampBadge: function() {
    return B
  },
  MarathonBadge: function() {
    return G
  },
  NewGameBadge: function() {
    return H
  },
  NewReleaseBadge: function() {
    return Z
  },
  ResurrectedBadge: function() {
    return V
  },
  StreakBadge: function() {
    return W
  },
  TopArtistBadge: function() {
    return z
  },
  TopGameBadge: function() {
    return Y
  },
  TrendingBadge: function() {
    return K
  },
  VoiceChannelBadge: function() {
    return w
  },
  WatchTimestampBadge: function() {
    return q
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("913527"),
  d = n.n(u),
  c = n("884439"),
  f = n("705512"),
  h = n("729878"),
  m = n("442837"),
  p = n("213602"),
  E = n("149020"),
  C = n("781511"),
  g = n("434559"),
  S = n("533883"),
  _ = n("324992"),
  T = n("137443"),
  I = n("700287"),
  A = n("71970"),
  N = n("277758"),
  v = n("690172"),
  x = n("481060"),
  M = n("70956"),
  R = n("709054"),
  y = n("719247"),
  L = n("22211"),
  O = n("561308"),
  j = n("371991"),
  P = n("689938"),
  D = n("106940");
(a = l || (l = {}))[a.CARD = 0] = "CARD", a[a.POPOUT = 1] = "POPOUT";
let b = i.createContext({});

function U() {
  return i.useContext(b)
}

function F(e) {
  let {
    Icon: t,
    text: n,
    iconColor: a,
    tooltipText: l,
    showTooltip: i
  } = e, {
    defaultTextColor: r,
    defaultIconColor: o
  } = U();
  return (0, s.jsx)(x.Tooltip, {
    text: l,
    shouldShow: i,
    children: e => (0, s.jsxs)("div", {
      className: D.badgeContainer,
      ...e,
      children: [(0, s.jsx)(t, {
        width: 12,
        height: 12,
        color: null != a ? a : o
      }), (0, s.jsx)(x.Text, {
        variant: "text-xs/normal",
        color: r,
        className: D.badgeLabel,
        children: n
      })]
    })
  })
}

function w(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, L.default)(t), {
    location: a
  } = U();
  return null == n || 1 === a ? null : (0, s.jsx)(F, {
    Icon: v.VoiceNormalIcon,
    text: n.name
  })
}

function k(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a,
    location: l
  } = U(), i = 0 === l, r = (0, O.isEntryActive)(t), o = i && r ? x.tokens.colors.STATUS_POSITIVE : a, u = i && r ? "text-positive" : n;
  return (0, s.jsxs)("div", {
    className: D.badgeContainer,
    children: [(0, s.jsx)(E.GameControllerIcon, {
      width: 12,
      height: 12,
      color: o
    }), (0, s.jsx)(j.default, {
      entry: t,
      textColor: u
    })]
  })
}

function B(e) {
  var t;
  let {
    entry: n
  } = e, {
    defaultTextColor: a,
    defaultIconColor: l,
    location: i
  } = U(), r = 0 === i, o = (0, m.useStateFromStores)([y.default], () => y.default.getMatchingActivity(n));
  if ((null == o ? void 0 : o.timestamps) == null) return null;
  let u = r ? x.tokens.colors.STATUS_POSITIVE : l,
    d = null === (t = o.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, s.jsxs)("div", {
    className: D.badgeContainer,
    children: [(0, s.jsx)(S.RecordPlayerIcon, {
      width: 12,
      height: 12,
      color: u
    }), (0, s.jsx)(j.ActiveTimestamp, {
      entry: null != d ? {
        start: d
      } : n,
      textColor: r ? "text-positive" : a
    })]
  })
}

function H(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = U(), a = 0 === n ? x.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, O.isEntryNew)(t) ? (0, s.jsx)(F, {
    Icon: g.NewUserLargeIcon,
    text: P.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: a
  }) : null
}

function G(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = U();
  if (!(0, O.isEntryMarathon)(t)) return null;
  let a = (0, O.isEntryActive)(t),
    l = 0 === n,
    i = l || a ? (0, O.getMarathonName)(t) : (0, O.getFullMarathonDescription)(t);
  return (0, s.jsx)(F, {
    Icon: T.TimerIcon,
    text: i,
    tooltipText: (0, O.getMarathonDurationStr)(t),
    showTooltip: l && !a
  })
}

function V(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = U(), a = (0, O.getResurrectedEntryLastPlayTime)(t);
  if (null == a) return null;
  let l = (0, O.getFullResurrectedBadgeText)(a);
  return (0, s.jsx)(F, {
    Icon: _.RetryIcon,
    showTooltip: 0 === n,
    tooltipText: l,
    text: 1 === n ? l : P.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function W(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = U(), a = (0, O.getStreakCount)(t);
  return (0, O.isValidStreak)(t) ? (0, s.jsx)(F, {
    Icon: p.FlashIcon,
    showTooltip: 0 === n,
    text: P.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: a
    }),
    tooltipText: P.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
      days: a
    })
  }) : null
}

function Y(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = U(), a = (0, O.getEntryDuration)(t);
  if (null == a) return null;
  let l = 1 === n,
    i = l ? P.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : P.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, s.jsx)(F, {
    Icon: A.TrophyIcon,
    text: (0, s.jsxs)(s.Fragment, {
      children: [P.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, l ? " — " : ": ", i.format({
        hours: Math.round(a / M.default.Seconds.HOUR)
      })]
    })
  })
}

function z(e) {
  var t;
  let {
    entry: n
  } = e, {
    location: a
  } = U(), l = null === (t = (0, O.getTrait)(n, c.ContentInventoryTraitType.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
  if (null == l) return null;
  let i = 1 === a ? P.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
    count: l
  }) : P.default.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
    count: l
  });
  return (0, s.jsx)(F, {
    Icon: A.TrophyIcon,
    text: i
  })
}

function K(e) {
  let {
    entry: t
  } = e, n = (0, O.getTrendingType)(t);
  return null == n || n === f.TrendingType.TRENDING_TYPE_UNSPECIFIED ? null : (0, s.jsx)(F, {
    Icon: C.GlobeEarthIcon,
    text: P.default.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
}

function Z(e) {
  let {
    entry: t
  } = e, n = R.default.extractTimestamp(t.extra.application_id);
  return d()().diff(d()(n), "days") > 7 ? null : (0, s.jsx)(F, {
    Icon: h.CircleExclamationPointIcon,
    text: "New Release"
  })
}

function q(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a
  } = U();
  return (0, s.jsxs)("div", {
    className: D.badgeContainer,
    children: [(0, s.jsx)(N.TvIcon, {
      width: 12,
      height: 12,
      color: a
    }), (0, s.jsx)(j.default, {
      entry: t,
      textColor: n
    })]
  })
}

function X(e) {
  var t;
  let {
    entry: n
  } = e, a = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : ""), l = null != a ? P.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: a[1],
    episodeNum: a[2]
  }) : null;
  return (0, s.jsx)(F, {
    Icon: I.TopicsIcon,
    text: l
  })
}

function Q(e) {
  let {
    location: t,
    children: n
  } = e, a = {};
  return a = 0 === t ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: x.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, s.jsx)(b.Provider, {
    value: {
      location: t,
      ...a
    },
    children: (0, s.jsx)("div", {
      className: o()(D.badgesContainer, {
        [D.badgesContainerCard]: 0 === t,
        [D.badgesContainerPopout]: 1 === t
      }),
      children: n
    })
  })
}