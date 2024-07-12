n.d(t, {
  Z: function() {
return o;
  }
}), n(47120);
var r = n(470079);

function i(e, t, n) {
  return [
Math.floor(e / n) - 1,
Math.ceil((e + t) / n) + 1
  ];
}
let a = [
  0,
  0
];

function o(e) {
  let {
chunkSize: t,
getScrollerState: n,
forceUpdate: o
  } = e, {
dirty: s,
scrollTop: l,
offsetHeight: u
  } = n();
  (0, r.useLayoutEffect)(() => {
s > 0 && o();
  }, [
s,
o
  ]);
  let c = (0, r.useRef)(a);
  c.current = i(l, u, t);
  let [d, _] = c.current;
  return {
forceUpdateOnChunkChange: (0, r.useCallback)(e => {
  let {
    dirty: r,
    scrollTop: a,
    offsetHeight: s
  } = n();
  if (r > 0)
    return;
  let [l, u] = i(a, s, t);
  l !== c.current[0] ? o() : 2 === e && u !== c.current[1] && o();
}, [
  o,
  t,
  n
]),
chunkStart: d,
chunkEnd: _,
dirty: s
  };
}