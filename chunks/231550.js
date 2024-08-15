r.d(t, {
  Y: function() {
return T;
  }
});
var n = r(395848),
  a = r(140955),
  o = r(596308),
  i = r(622574),
  _ = r(433691),
  E = r(412828),
  s = r(662355);
let c = [
200,
500
  ],
  I = () => (0, E.U)() - 0,
  u = [],
  l = {},
  R = e => {
let t = u[u.length - 1],
  r = l[e.interactionId];
if (r || u.length < 10 || t && e.duration > t.latency) {
  if (r)
    r.entries.push(e), r.latency = Math.max(r.latency, e.duration);
  else {
    let t = {
      id: e.interactionId,
      latency: e.duration,
      entries: [e]
    };
    l[t.id] = t, u.push(t);
  }
  u.sort((e, t) => t.latency - e.latency), u.splice(10).forEach(e => {
    delete l[e.id];
  });
}
  },
  A = () => {
let e = Math.min(u.length - 1, Math.floor(I() / 50));
return u[e];
  },
  T = (e, t = {}) => {
(0, s.A)(() => {
  let r;
  (0, E.Y)();
  let s = (0, o.I)('INP'),
    l = e => {
      e.forEach(e => {
        e.interactionId && R(e), 'first-input' === e.entryType && !u.some(t => t.entries.some(t => e.duration === t.duration && e.startTime === t.startTime)) && R(e);
      });
      let t = A();
      t && t.latency !== s.value && (s.value = t.latency, s.entries = t.entries, r());
    },
    T = (0, i.N)('event', l, {
      durationThreshold: null != t.durationThreshold ? t.durationThreshold : 40
    });
  r = (0, a._)(e, s, c, t.reportAllChanges), T && ('PerformanceEventTiming' in n.m && 'interactionId' in PerformanceEventTiming.prototype && T.observe({
    type: 'first-input',
    buffered: !0
  }), (0, _.u)(() => {
    l(T.takeRecords()), s.value < 0 && I() > 0 && (s.value = 0, s.entries = []), r(!0);
  }));
});
  };