n(47120);
var a = n(470079),
  s = n(796075),
  r = n(481060);
let l = 'undefined' == typeof ResizeObserver ? s.d : ResizeObserver,
  i = new Map(),
  o = new l(e => {
e.forEach(e => {
  var t;
  let {
    target: n
  } = e;
  null === (t = i.get(n)) || void 0 === t || t(e);
});
  });
t.Z = () => {
  let e = a.useRef(null),
[t, n] = a.useState(400),
s = a.useCallback(() => {
  null !== e.current && n(e.current.clientWidth);
}, [
  n,
  e
]);
  return (0, r.useResizeObserverSubscription)({
ref: e,
key: 'forum-container',
onUpdate: s,
resizeObserver: o,
listenerMap: i
  }), {
containerRef: e,
containerWidth: t
  };
};