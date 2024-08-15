t(47120);
var a, n, i, o, l = t(772848),
  c = t(756647),
  s = t(442837),
  d = t(570140),
  u = t(314897),
  h = t(906467);
let m = 0,
  g = [],
  p = [],
  b = !1;
class f extends(a = s.ZP.Store) {
  initialize() {
this.waitFor(h.Z);
  }
  get loggedEvents() {
return g;
  }
  get loggedTriggers() {
return p;
  }
  get trackTriggers() {
return b;
  }
}
o = 'AnalyticsLogStore', (i = 'displayName') in(n = f) ? Object.defineProperty(n, i, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = o, r.Z = new f(d.Z, {
  TRACK: function(e) {
let {
  event: r,
  properties: t,
  fingerprint: a
} = e;
if (h.Z.isDeveloper) {
  var n;
  (g = [
    ...g,
    {
      key: (m++).toString(),
      event: r,
      properties: t,
      fingerprint: null != (n = a) ? (0, c.s)(n) : u.default.getId(),
      timestamp: new Date()
    }
  ]).length > 500 && g.shift();
}
  },
  TRACK_TRIGGER: function(e) {
let {
  experimentId: r,
  descriptor: t,
  exposureType: a,
  excluded: n,
  location: i,
  previouslyTracked: o
} = e;
if (!!h.Z.isDeveloper)
  b && (p = [
    ...p,
    {
      key: (0, l.Z)(),
      experimentId: r,
      descriptor: t,
      exposureType: a,
      excluded: n,
      location: i,
      previouslyTracked: o,
      timestamp: new Date()
    }
  ]).length > 500 && p.shift();
  },
  SET_TRACK_TRIGGERS: function(e) {
let {
  enabled: r
} = e;
b = r;
  },
  ANALYTICS_LOG_CLEAR: function() {
g = [], p = [];
  }
});