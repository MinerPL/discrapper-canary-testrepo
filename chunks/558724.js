"use strict";
n.r(t), n.d(t, {
  SURVEY_REFETCH_INTERVAL: function() {
    return C
  }
}), n("47120"), n("913527");
var s, a, l, i = n("149765"),
  r = n("442837");
n("433517");
var o = n("570140"),
  u = n("491428"),
  d = n("528097"),
  c = n("650774"),
  f = n("430824"),
  E = n("496675"),
  _ = n("914010"),
  T = n("594174"),
  m = n("981631");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null
  },
  h = p,
  N = {},
  S = null,
  C = 864e5;
(l = s || (s = {})).IS_OWNER = "is_owner", l.IS_ADMIN = "is_admin", l.IS_COMMUNITY = "is_community", l.GUILD_SIZE = "guild_size", l.IS_HUB = "is_hub", l.IS_VIEWING = "is_viewing", l.GUILD_PERMISSIONS = "guild_permissions", l.GUILD_SIZE_ALL = "guild_size_all";
let A = new Set(Object.values(s));

function g(e) {
  return function(e) {
    return "1213250669327286303" === e.key || "1213251044474232852" === e.key ? (0, d.daysSinceYouBarFirstSeen)() >= 7 : "1213254060338319402" !== e.key && "1213254481224015954" !== e.key || (0, d.daysSinceYouBarFirstSeen)() >= 14
  }(e) && function(e) {
    let {
      guild_requirements: t = [],
      guild_size: n = [null, null],
      guild_permissions: s = []
    } = e;
    if (0 === t.length) return !0;
    for (let e of t)
      if (!A.has(e)) return !1;
    let a = t.includes("guild_size_all"),
      l = !0;
    for (let r of Object.values(f.default.getGuilds())) {
      if (a || t.includes("guild_size")) {
        let e = c.default.getMemberCount(r.id);
        if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
          l = !1;
          continue
        }
      }
      if (t.includes("is_community") && !r.hasFeature(m.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !r.hasFeature(m.GuildFeatures.HUB)) continue;
      if (t.includes("guild_permissions")) {
        if (0 === s.length) continue;
        let e = !1;
        for (let t of s) try {
          let n = i.deserialize(t);
          if (E.default.can(n, r)) {
            e = !0;
            break
          }
        } catch (e) {}
        if (!e) continue
      }
      let o = T.default.getCurrentUser(),
        u = (null == o ? void 0 : o.id) === r.ownerId,
        d = E.default.can(m.Permissions.ADMINISTRATOR, r);
      if (t.includes("is_owner") && !u || t.includes("is_admin") && !d) continue;
      null == (N = null != N ? N : {})[e.key] && (N[e.key] = e);
      let f = _.default.getGuildId(),
        I = null != f && f === r.id;
      if ((!t.includes("is_viewing") || I) && !a) return !0
    }
    return !!a && !!l || !1
  }(e)
}

function M(e) {
  let {
    survey: t
  } = e;
  if (h.lastFetched = Date.now(), null == h.hiddenSurveys && (h.hiddenSurveys = {}), null != t && null == h.hiddenSurveys[t.key]) {
    if (!g(t)) return;
    S = t
  }
}

function R() {
  if (null != S && (g(S) || (S = null, 0))) return !1;
  ! function() {
    let e = Object.values(N = null != N ? N : {})[0];
    if (null != e && g(e)) {
      M({
        type: "SURVEY_FETCHED",
        survey: e
      });
      return
    }
    if (null == S) return;
    S = null
  }()
}
class O extends(a = r.default.PersistedStore) {
  initialize(e) {
    h = null != e ? e : p, this.syncWith([_.default], R)
  }
  getState() {
    return h
  }
  getCurrentSurvey() {
    return S
  }
  getSurveyOverride() {
    return h.surveyOverride
  }
  getLastSeenTimestamp() {
    return h.lastSeen
  }
}
I(O, "displayName", "SurveyStore"), I(O, "persistKey", "SurveyStore"), I(O, "migrations", [e => {
  let t = {
    ...e
  };
  return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}, e => {
  var t;
  return {
    ...e,
    lastSeen: null !== (t = e.lastSeen) && void 0 !== t ? t : null
  }
}, e => {
  var t;
  return {
    ...e,
    hiddenSurveys: null !== (t = e.hiddenSurveys) && void 0 !== t ? t : {}
  }
}]), t.default = new O(o.default, {
  CONNECTION_OPEN: function() {
    var e;
    if (!(null != h.lastFetched && Date.now() - (null !== (e = h.lastFetched) && void 0 !== e ? e : 0) < C) || null != h.surveyOverride)(0, u.surveyFetch)(h.surveyOverride, !0)
  },
  SURVEY_FETCHED: M,
  SURVEY_HIDE: function(e) {
    let {
      key: t
    } = e;
    h.hiddenSurveys[t] = !0, S = null, N = null != N ? N : {}, delete N[t]
  },
  SURVEY_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    h.surveyOverride = t, null != t && delete h.hiddenSurveys[t], (0, u.surveyFetch)(h.surveyOverride, !0)
  },
  PUSH_NOTIFICATION_CLICK: function() {},
  DISPLAYED_INVITE_SHOW: function() {},
  LOGOUT: function() {
    h.hiddenSurveys = {}
  },
  SURVEY_SEEN: function() {
    h.lastSeen = Date.now()
  }
})