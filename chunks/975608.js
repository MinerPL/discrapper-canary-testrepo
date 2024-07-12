t(411104);
var l = t(470079),
  u = t(960048);
e.Z = (n, e, t, i, a) => {
  let r = (0, l.useRef)(!1);
  (0, l.useEffect)(() => {
if (e && !r.current) {
  r.current = !0;
  let e = setTimeout(() => {
    let e = Error(''.concat(n, ' is taking too long to load.'));
    u.Z.setExtra({
      loadingState: i,
      loadingTimeSeconds: t
    }), u.Z.captureException(e, {
      ...a,
      tags: {
        ...null == a ? void 0 : a.tags
      }
    });
  }, 1000 * t);
  return () => {
    clearTimeout(e);
  };
}
  }, [
e,
t
  ]);
};