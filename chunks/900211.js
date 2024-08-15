n.d(t, {
  Z: function() {
return r;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(347469),
  l = n(975481);

function r(e) {
  let {
resizableNode: t,
onResize: n,
onResizeEnd: r,
minHeight: o,
maxHeight: c
  } = e, [u, d] = a.useState(null);
  a.useEffect(() => {
var e, n;
d(null !== (n = null === (e = t.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : null);
  }, [t]);
  let h = (0, s.Z)({
initialElementDimension: u,
minDimension: o,
maxDimension: c,
resizableDomNodeRef: t,
onElementResize: n,
onElementResizeEnd: r,
orientation: s.y.VERTICAL_BOTTOM
  });
  return (0, i.jsx)('div', {
onMouseDown: h,
className: l.resizeHandle
  });
}