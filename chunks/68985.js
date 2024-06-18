"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(626135),
  a = n(261376),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
  numberOfDCsShownToday: 0,
  dailyCapPeriodStart: null,
  dismissibleContentSeenDuringSession: new Set,
  dailyCapOverridden: !1,
  renderedAtTimestamps: new Map,
  lastDCDismissed: null
};
class d extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t;
      _.numberOfDCsShownToday = null !== (t = e.numberOfDCsShownToday) && void 0 !== t ? t : 0, _.dailyCapPeriodStart = e.dailyCapPeriodStart, _.dailyCapOverridden = e.dailyCapOverridden
    }
    _.dismissibleContentSeenDuringSession = new Set, _.lastDCDismissed = null
  }
  getState() {
    return _
  }
  get dailyCapOverridden() {
    return _.dailyCapOverridden
  }
  get lastDCDismissed() {
    return _.lastDCDismissed
  }
  getRenderedAtTimestamp(e) {
    return _.renderedAtTimestamps.get(e)
  }
  hasUserHitDCCap(e) {
    if (null != e && (a.O.has(e) || _.dailyCapOverridden) || null != e && _.dismissibleContentSeenDuringSession.has(e)) return !1;
    let t = new Date;
    return t.setHours(0, 0, 0, 0), null != _.dailyCapPeriodStart && _.dailyCapPeriodStart < t.getTime() && (_.numberOfDCsShownToday = 0, _.dailyCapPeriodStart = null), _.numberOfDCsShownToday >= 3
  }
}
u(d, "displayName", "DismissibleContentFrameworkStore"), u(d, "persistKey", "DismissibleContentFrameworkStore"), u(d, "migrations", [e => ({
  ...e
})]), t.Z = new d(s.Z, {
  LOGOUT: function() {
    _ = {
      ..._,
      dismissibleContentSeenDuringSession: new Set,
      renderedAtTimestamps: new Map
    }
  },
  DCF_DAILY_CAP_OVERRIDE: function(e) {
    let {
      value: t
    } = e;
    _.dailyCapOverridden = t
  },
  DCF_HANDLE_DC_SHOWN: function(e) {
    let {
      dismissibleContent: t
    } = e, n = new Date;
    if (_.renderedAtTimestamps.set(t, n.getTime()), !(a.O.has(t) || _.dailyCapOverridden || _.dismissibleContentSeenDuringSession.has(t))) {
      if (_.dismissibleContentSeenDuringSession.add(t), null == _.dailyCapPeriodStart) {
        let e = new Date;
        e.setHours(0, 0, 0, 0), _.dailyCapPeriodStart = e.getTime()
      }
      _.numberOfDCsShownToday += 1, _.numberOfDCsShownToday > 3 && o.default.track(l.rMx.DCF_CAP_EXCEEDED, {
        cap_type: "daily_cap",
        dismissible_content: t,
        shown_dcs: _.numberOfDCsShownToday
      })
    }
  },
  DCF_HANDLE_DC_DISMISSED: function(e) {
    let {
      dismissibleContent: t
    } = e;
    _.lastDCDismissed = t, _.renderedAtTimestamps.delete(t)
  },
  DCF_RESET: function() {
    _.dailyCapPeriodStart = null, _.numberOfDCsShownToday = 0, _.dismissibleContentSeenDuringSession = new Set, _.lastDCDismissed = null
  }
})