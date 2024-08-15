let n;
r.d(t, {
  U: function() {
return s;
  },
  Y: function() {
return c;
  }
});
var a = r(622574);
let o = 0,
  i = 1 / 0,
  _ = 0,
  E = e => {
e.forEach(e => {
  e.interactionId && (i = Math.min(i, e.interactionId), o = (_ = Math.max(_, e.interactionId)) ? (_ - i) / 7 + 1 : 0);
});
  },
  s = () => n ? o : performance.interactionCount || 0,
  c = () => {
!('interactionCount' in performance) && !n && (n = (0, a.N)('event', E, {
  type: 'event',
  buffered: !0,
  durationThreshold: 0
}));
  };