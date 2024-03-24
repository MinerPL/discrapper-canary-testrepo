"use strict";
n.r(t), n.d(t, {
  SURVEY_REFETCH_INTERVAL: function() {
    return S
  },
  default: function() {
    return O
  }
}), n("222007"), n("866227");
var s, l, a = n("316693"),
  i = n("446674");
n("95410");
var r = n("913144"),
  o = n("518888"),
  u = n("99317"),
  d = n("525065"),
  c = n("305961"),
  E = n("957255"),
  f = n("162771"),
  _ = n("697218"),
  T = n("49111");
let I = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null
  },
  m = I,
  N = {},
  p = null,
  S = 864e5;
(l = s || (s = {})).IS_OWNER = "is_owner", l.IS_ADMIN = "is_admin", l.IS_COMMUNITY = "is_community", l.GUILD_SIZE = "guild_size", l.IS_HUB = "is_hub", l.IS_VIEWING = "is_viewing", l.GUILD_PERMISSIONS = "guild_permissions", l.GUILD_SIZE_ALL = "guild_size_all";
let A = new Set(Object.values(s));

function C(e) {
  return function(e) {
    return "1213250669327286303" === e.key || "1213251044474232852" === e.key ? (0, u.daysSinceYouBarFirstSeen)() >= 7 : "1213254060338319402" !== e.key && "1213254481224015954" !== e.key || (0, u.daysSinceYouBarFirstSeen)() >= 14
  }(e) && function(e) {
    let {
      guild_requirements: t = [],
      guild_size: n = [null, null],
      guild_permissions: s = []
    } = e;
    if (0 === t.length) return !0;
    for (let e of t)
      if (!A.has(e)) return !1;
    let l = t.includes("guild_size_all"),
      i = !0,
      r = Object.values(c.default.getGuilds());
    for (let o of r) {
      if (l || t.includes("guild_size")) {
        let e = d.default.getMemberCount(o.id);
        if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
          i = !1;
          continue
        }
      }
      if (t.includes("is_community") && !o.hasFeature(T.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !o.hasFeature(T.GuildFeatures.HUB)) continue;
      if (t.includes("guild_permissions")) {
        if (0 === s.length) continue;
        let e = !1;
        for (let t of s) try {
          let n = a.deserialize(t);
          if (E.default.can(n, o)) {
            e = !0;
            break
          }
        } catch (e) {}
        if (!e) continue
      }
      let r = _.default.getCurrentUser(),
        u = (null == r ? void 0 : r.id) === o.ownerId,
        c = E.default.can(T.Permissions.ADMINISTRATOR, o);
      if (t.includes("is_owner") && !u || t.includes("is_admin") && !c) continue;
      null == (N = null != N ? N : {})[e.key] && (N[e.key] = e);
      let I = f.default.getGuildId(),
        m = null != I && I === o.id;
      if ((!t.includes("is_viewing") || m) && !l) return !0
    }
    return !!l && !!i || !1
  }(e)
}

function h(e) {
  let {
    survey: t
  } = e;
  if (m.lastFetched = Date.now(), null == m.hiddenSurveys && (m.hiddenSurveys = {}), null != t && null == m.hiddenSurveys[t.key]) {
    if (!C(t)) return;
    p = t
  }
}

function g() {
  if (null != p && (C(p) || (p = null, 0))) return !1;
  ! function() {
    N = null != N ? N : {};
    let e = Object.values(N)[0];
    if (null != e && C(e)) {
      h({
        type: "SURVEY_FETCHED",
        survey: e
      });
      return
    }
    if (null == p) return;
    p = null
  }()
}
class M extends i.default.PersistedStore {
  initialize(e) {
    m = null != e ? e : I, this.syncWith([f.default], g)
  }
  getState() {
    return m
  }
  getCurrentSurvey() {
    return p
  }
  getSurveyOverride() {
    return m.surveyOverride
  }
  getLastSeenTimestamp() {
    return m.lastSeen
  }
}
M.displayName = "SurveyStore", M.persistKey = "SurveyStore", M.migrations = [e => {
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
}];
var O = new M(r.default, {
  CONNECTION_OPEN: function() {
    var e;
    if (!(null != m.lastFetched && Date.now() - (null !== (e = m.lastFetched) && void 0 !== e ? e : 0) < S) || null != m.surveyOverride)(0, o.surveyFetch)(m.surveyOverride, !0)
  },
  SURVEY_FETCHED: h,
  SURVEY_HIDE: function(e) {
    let {
      key: t
    } = e;
    m.hiddenSurveys[t] = !0, p = null, N = null != N ? N : {}, delete N[t]
  },
  SURVEY_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    m.surveyOverride = t, null != t && delete m.hiddenSurveys[t], (0, o.surveyFetch)(m.surveyOverride, !0)
  },
  PUSH_NOTIFICATION_CLICK: function() {},
  DISPLAYED_INVITE_SHOW: function() {},
  LOGOUT: function() {
    m.hiddenSurveys = {}
  },
  SURVEY_SEEN: function() {
    m.lastSeen = Date.now()
  }
})