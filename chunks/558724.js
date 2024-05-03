"use strict";
n.r(t), n.d(t, {
  SURVEY_REFETCH_INTERVAL: function() {
    return S
  }
}), n("47120"), n("913527");
var s, a, l, i = n("149765"),
  r = n("442837");
n("433517");
var o = n("570140"),
  u = n("491428"),
  d = n("650774"),
  c = n("430824"),
  f = n("496675"),
  E = n("914010"),
  _ = n("594174"),
  m = n("981631");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null
  },
  p = I,
  h = {},
  N = null,
  S = 864e5;
(l = s || (s = {})).IS_OWNER = "is_owner", l.IS_ADMIN = "is_admin", l.IS_COMMUNITY = "is_community", l.GUILD_SIZE = "guild_size", l.IS_HUB = "is_hub", l.IS_VIEWING = "is_viewing", l.GUILD_PERMISSIONS = "guild_permissions", l.GUILD_SIZE_ALL = "guild_size_all";
let C = new Set(Object.values(s));

function A(e) {
  return function(e) {
    return !0
  }(e) && function(e) {
    let {
      guild_requirements: t = [],
      guild_size: n = [null, null],
      guild_permissions: s = []
    } = e;
    if (0 === t.length) return !0;
    for (let e of t)
      if (!C.has(e)) return !1;
    let a = t.includes("guild_size_all"),
      l = !0;
    for (let r of Object.values(c.default.getGuilds())) {
      if (a || t.includes("guild_size")) {
        let e = d.default.getMemberCount(r.id);
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
          if (f.default.can(n, r)) {
            e = !0;
            break
          }
        } catch (e) {}
        if (!e) continue
      }
      let o = _.default.getCurrentUser(),
        u = (null == o ? void 0 : o.id) === r.ownerId,
        c = f.default.can(m.Permissions.ADMINISTRATOR, r);
      if (t.includes("is_owner") && !u || t.includes("is_admin") && !c) continue;
      null == (h = null != h ? h : {})[e.key] && (h[e.key] = e);
      let T = E.default.getGuildId(),
        I = null != T && T === r.id;
      if ((!t.includes("is_viewing") || I) && !a) return !0
    }
    return !!a && !!l || !1
  }(e)
}

function g(e) {
  let {
    survey: t
  } = e;
  if (p.lastFetched = Date.now(), null == p.hiddenSurveys && (p.hiddenSurveys = {}), null != t && null == p.hiddenSurveys[t.key]) {
    if (!A(t)) return;
    N = t
  }
}

function M() {
  if (null != N && (A(N) || (N = null, 0))) return !1;
  ! function() {
    let e = Object.values(h = null != h ? h : {})[0];
    if (null != e && A(e)) {
      g({
        type: "SURVEY_FETCHED",
        survey: e
      });
      return
    }
    if (null == N) return;
    N = null
  }()
}
class R extends(a = r.default.PersistedStore) {
  initialize(e) {
    p = null != e ? e : I, this.syncWith([E.default], M)
  }
  getState() {
    return p
  }
  getCurrentSurvey() {
    return N
  }
  getSurveyOverride() {
    return p.surveyOverride
  }
  getLastSeenTimestamp() {
    return p.lastSeen
  }
}
T(R, "displayName", "SurveyStore"), T(R, "persistKey", "SurveyStore"), T(R, "migrations", [e => {
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
}]), t.default = new R(o.default, {
  CONNECTION_OPEN: function() {
    var e;
    if (!(null != p.lastFetched && Date.now() - (null !== (e = p.lastFetched) && void 0 !== e ? e : 0) < S) || null != p.surveyOverride)(0, u.surveyFetch)(p.surveyOverride, !0)
  },
  SURVEY_FETCHED: g,
  SURVEY_HIDE: function(e) {
    let {
      key: t
    } = e;
    p.hiddenSurveys[t] = !0, N = null, h = null != h ? h : {}, delete h[t]
  },
  SURVEY_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    p.surveyOverride = t, null != t && delete p.hiddenSurveys[t], (0, u.surveyFetch)(p.surveyOverride, !0)
  },
  PUSH_NOTIFICATION_CLICK: function() {},
  DISPLAYED_INVITE_SHOW: function() {},
  LOGOUT: function() {
    p.hiddenSurveys = {}
  },
  SURVEY_SEEN: function() {
    p.lastSeen = Date.now()
  }
})