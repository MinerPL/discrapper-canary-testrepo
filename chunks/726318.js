r.d(t, {
  r: function() {
return o;
  }
});
var n = r(101284),
  a = r(151122);
let o = (0, a._I)(() => {
  let e = 1000 * (0, n.ph)();
  return {
name: 'SessionTiming',
processEvent(t) {
  let r = 1000 * (0, n.ph)();
  return {
    ...t,
    extra: {
      ...t.extra,
      'session:start': e,
      'session:duration': r - e,
      'session:end': r
    }
  };
}
  };
});