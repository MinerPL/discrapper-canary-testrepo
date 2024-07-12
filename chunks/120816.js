r(47120);
var a, n, i, o, l = r(772848),
  c = r(756647),
  s = r(442837),
  d = r(570140),
  u = r(314897),
  h = r(906467);
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
}) : n[i] = o, t.Z = new f(d.Z, {
  TRACK: function(e) {
let {
  event: t,
  properties: r,
  fingerprint: a
} = e;
if (h.Z.isDeveloper) {
  var n;
  (g = [
    ...g,
    {
      key: (m++).toString(),
      event: t,
      properties: r,
      fingerprint: null != (n = a) ? (0, c.s)(n) : u.default.getId(),
      timestamp: new Date()
    }
  ]).length > 500 && g.shift();
}
  },
  TRACK_TRIGGER: function(e) {
let {
  experimentId: t,
  descriptor: r,
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
      experimentId: t,
      descriptor: r,
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
  enabled: t
} = e;
b = t;
  },
  ANALYTICS_LOG_CLEAR: function() {
g = [], p = [];
  }
});