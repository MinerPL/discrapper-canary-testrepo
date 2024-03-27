"use strict";
t.r(r), t.d(r, {
  default: function() {
    return m
  }
}), t("222007");
var a = t("748820"),
  n = t("391679"),
  i = t("446674"),
  o = t("913144"),
  l = t("271938"),
  s = t("368694");
let c = 0,
  d = [],
  u = [],
  h = !1;
class p extends i.default.Store {
  initialize() {
    this.waitFor(s.default)
  }
  get loggedEvents() {
    return d
  }
  get loggedTriggers() {
    return u
  }
  get trackTriggers() {
    return h
  }
}
p.displayName = "AnalyticsLogStore";
var m = new p(o.default, {
  TRACK: function(e) {
    let {
      event: r,
      properties: t,
      fingerprint: a
    } = e;
    if (s.default.isDeveloper) {
      var i;
      (d = [...d, {
        key: (c++).toString(),
        event: r,
        properties: t,
        fingerprint: null != (i = a) ? (0, n.extractId)(i) : l.default.getId(),
        timestamp: new Date
      }]).length > 500 && d.shift()
    }
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: r,
      descriptor: t,
      exposureType: n,
      excluded: i,
      location: o,
      previouslyTracked: l
    } = e;
    if (!!s.default.isDeveloper) h && (u = [...u, {
      key: (0, a.v4)(),
      experimentId: r,
      descriptor: t,
      exposureType: n,
      excluded: i,
      location: o,
      previouslyTracked: l,
      timestamp: new Date
    }]).length > 500 && u.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: r
    } = e;
    h = r
  },
  ANALYTICS_LOG_CLEAR: function() {
    d = [], u = []
  }
})