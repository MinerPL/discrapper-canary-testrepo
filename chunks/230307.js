"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(981631);
let _ = {},
  d = null;
class c extends(o = a.ZP.Store) {
  get applicationStatistics() {
    return _
  }
  get lastFetched() {
    return d
  }
  getGameDuration(e) {
    let t = _[e];
    return null != t ? t.total_duration : 0
  }
  getLastPlayedDateTime(e) {
    let t = _[e];
    return null != t ? new Date(t.last_played_at).getTime() : null
  }
  hasApplicationStatistic(e) {
    return null != _[e]
  }
  getCurrentUserStatisticsForApplication(e) {
    return _[e]
  }
  getQuickSwitcherScoreForApplication(e) {
    let t = _[e],
      n = 0;
    if (null != t) {
      let e = Date.now(),
        i = Math.floor((e - new Date(t.last_played_at).getTime()) / 864e5),
        r = Math.floor(1e3 * t.total_duration / 36e5);
      0 === i ? n += 50 : i >= 1 && i < 2 ? n += 40 : i >= 2 && i < 4 ? n += 30 : i >= 4 && i < 7 ? n += 20 : i >= 7 && (n += 10), 0 === r ? n += 0 : r >= 1 && r < 12 ? n += 10 : r >= 12 && r < 168 ? n += 20 : r >= 168 && r < 720 ? n += 40 : r >= 720 && (n += 50)
    }
    return n
  }
}
s = "LibraryApplicationStatisticsStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new c(l.Z, {
  USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t
    } = e;
    t.forEach(e => {
      _[e.application_id] = e
    }), d = Date.now()
  },
  ACTIVITY_UPDATE_START: function(e) {
    let {
      duration: t,
      applicationId: n,
      distributor: i
    } = e, r = _[n], s = new Date().toISOString(), o = 0, a = 0;
    if (null != r) {
      var l;
      o = r.total_duration, a = null !== (l = r.total_discord_sku_duration) && void 0 !== l ? l : 0
    }
    o += t, i === u.GQo.DISCORD && (a += t), _[n] = {
      application_id: n,
      total_duration: o,
      last_played_at: s,
      total_discord_sku_duration: a
    }
  },
  LOGOUT: function() {
    _ = {}, d = null
  }
})