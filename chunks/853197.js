"use strict";
n.r(t), n.d(t, {
  doesGameTitleMatchList: function() {
    return _
  },
  getDrop: function() {
    return C
  },
  getDropByQuestId: function() {
    return A
  },
  getDropExpired: function() {
    return S
  },
  getDropsExperiment: function() {
    return f
  },
  getDropsExperimentForDrop: function() {
    return E
  },
  getDropsPartnerGameNameByQuestId: function() {
    return g
  },
  getEligibilityByRunningGameDetection: function() {
    return I
  },
  getEligibleGameLastSeenStartTimeSeconds: function() {
    return T
  },
  getPlatformLabel: function() {
    return M
  },
  getShowDropsEndedIncompleteBanner: function() {
    return N
  },
  getShowDropsNoticeBanner: function() {
    return h
  },
  isDropGameDetected: function() {
    return m
  }
});
var s = n("913527"),
  a = n.n(s),
  l = n("594190"),
  i = n("695346"),
  r = n("77498"),
  o = n("70956"),
  u = n("346114"),
  d = n("702512"),
  c = n("689938");

function f(e) {
  let t = C(e);
  return null == t ? null : E(t)
}

function E(e) {
  if (e.dropsQuestId === d.FORTNITE_QUEST_ID) return u.DropsForGoLiveFortniteExperiment;
  return null
}

function _(e, t) {
  if (null == e) return !1;
  let n = r.default.getGameByName(e);
  return !!(null != n && t.some(e => {
    var t;
    return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
  })) || !1
}

function T() {
  return Math.floor(Date.now() / 1e3) - d.DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS
}

function m(e, t, n) {
  var s, a, l, i;
  if (null == C(e)) return !1;
  let r = (s = t, a = d.PartnerGameNameToSearchTermMapping[e], null !== (l = s.find(e => _(e.name, a))) && void 0 !== l ? l : null);
  if (null != r) {
    ;
    let e = null !== (i = null == r ? void 0 : r.lastLaunched) && void 0 !== i ? i : 0;
    return n <= r.lastFocused || n * o.default.Millis.SECOND <= e
  }
  return !1
}

function I(e) {
  return m(e, l.default.getGamesSeen(!1), T())
}

function p(e, t) {
  let {
    endDate: n
  } = e, s = a()(), l = a()(n, d.noticeBannerDateFormat), i = a()(s.clone().add(e.dropsNoticeBannerDurationDays, "days").format(d.noticeBannerDateFormat)), r = l.isSameOrBefore(i), o = l.isBefore(s, "minute");
  return r && (t && !o || !t && o)
}

function h(e) {
  var t;
  let n = C(e);
  if (null == n || !(null === (t = f(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    }).dropsEnabled)) return !1;
  let s = i.DropsOptedOut.getSetting(),
    a = p(n, !0);
  return !s && a
}

function N(e) {
  var t, n;
  let s = C(e);
  if (null == s || !(null === (n = f(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({
      location: "2"
    }, {
      autoTrackExposure: !1
    })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
  let a = i.DropsOptedOut.getSetting(),
    l = p(s, !1);
  return S(s) && !a && l
}

function S(e) {
  let {
    endDate: t
  } = e, n = a()(t, "YYYY-MM-DD HH:mm");
  return a()() > n
}

function C(e) {
  return d.DROPS_GAMES[e]
}

function A(e) {
  return Object.values(d.DROPS_GAMES).find(t => t.dropsQuestId === e)
}

function g(e) {
  return Object.keys(d.DROPS_GAMES).find(t => d.DROPS_GAMES[t].dropsQuestId === e)
}

function M(e) {
  switch (e) {
    case "SWITCH":
      return c.default.Messages.DROPS_PLATFORM_SWITCH;
    case "PC":
      return c.default.Messages.DROPS_PLATFORM_PC;
    case "PLAYSTATION":
      return c.default.Messages.DROPS_PLATFORM_PLAYSTATION;
    case "XBOX":
      return c.default.Messages.DROPS_PLATFORM_XBOX;
    default:
      return ""
  }
}