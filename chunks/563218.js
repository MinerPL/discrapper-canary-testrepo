n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(570140),
  r = n(519938),
  o = n(928518),
  c = n(585483),
  u = n(317381),
  d = n(917107),
  h = n(716600),
  p = n(918559),
  m = n(981631);
let _ = (e, t) => {
  l.Z.wait(() => {
(0, r.Cz)(e, t);
  });
};

function f(e) {
  let t, {
  embedId: n,
  className: l,
  style: r
} = e,
f = (0, s.e7)([o.Z], () => o.Z.getWindow(m.KJ3.CHANNEL_CALL_POPOUT)),
E = (0, h.Z)(),
g = (0, s.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
  if (null != E && !(0, d.Z)(E.channelId) && g === p.Ez.PANEL)
t = window;
  else {
var C;
t = null !== (C = null == f ? void 0 : f.window) && void 0 !== C ? C : window;
  }
  let I = a.useRef(null),
x = a.useMemo(() => {
  let e = null;
  return () => {
    null == e && (e = t.requestAnimationFrame(() => {
      var t, i;
      _(n, null !== (i = null === (t = I.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== i ? i : null), e = null;
    }));
  };
}, [
  n,
  t
]);
  return a.useEffect(() => (t.addEventListener('resize', x), c.S.subscribe(m.CkL.REMEASURE_TARGET, x), () => {
t.removeEventListener('resize', x), c.S.unsubscribe(m.CkL.REMEASURE_TARGET, x);
  }), [
x,
t
  ]), a.useLayoutEffect(() => {
let e = I.current;
if (null == e)
  return;
let t = e.ownerDocument.defaultView;
if (null == t)
  return;
x();
let i = new t.ResizeObserver(x);
return i.observe(e), () => {
  i.disconnect(), _(n, null);
};
  }, [
n,
x
  ]), (0, i.jsx)('div', {
ref: I,
style: r,
className: l
  });
}