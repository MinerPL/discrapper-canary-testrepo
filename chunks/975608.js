n(411104);
var l = n(470079),
  i = n(960048);
t.Z = (e, t, n, u, o) => {
  let r = (0, l.useRef)(!1);
  (0, l.useEffect)(() => {
if (t && !r.current) {
  r.current = !0;
  let t = setTimeout(() => {
    let t = Error(''.concat(e, ' is taking too long to load.'));
    i.Z.setExtra({
      loadingState: u,
      loadingTimeSeconds: n
    }), i.Z.captureException(t, {
      ...o,
      tags: {
        ...null == o ? void 0 : o.tags
      }
    });
  }, 1000 * n);
  return () => {
    clearTimeout(t);
  };
}
  }, [
t,
n
  ]);
};