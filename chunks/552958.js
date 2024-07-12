t.d(n, {
  Z: function() {
return l;
  }
}), t(47120);
var i = t(470079),
  a = t(974180),
  r = t(557177);

function l() {
  let [e, n] = i.useState(), t = i.useRef(-1);
  return {
playSound: i.useCallback(e => {
  n(e), r.GN(a.Ay, a.yk, () => {
    clearTimeout(t.current), t.current = setTimeout(() => {
      n(void 0);
    }, 500);
  }, e);
}, []),
isPlaying: null != e,
soundpackPlaying: e
  };
}