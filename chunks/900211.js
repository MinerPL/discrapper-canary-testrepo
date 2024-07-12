n.d(t, {
  Z: function() {
return r;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(347469),
  s = n(574453);

function r(e) {
  let {
resizableNode: t,
onResize: n,
onResizeEnd: r,
minHeight: o,
maxHeight: c
  } = e, [d, u] = a.useState(null);
  a.useEffect(() => {
var e, n;
u(null !== (n = null === (e = t.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : null);
  }, [t]);
  let h = (0, l.Z)({
initialElementDimension: d,
minDimension: o,
maxDimension: c,
resizableDomNodeRef: t,
onElementResize: n,
onElementResizeEnd: r,
orientation: l.y.VERTICAL_BOTTOM
  });
  return (0, i.jsx)('div', {
onMouseDown: h,
className: s.resizeHandle
  });
}