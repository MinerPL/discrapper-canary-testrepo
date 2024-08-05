var r = n(740078),
  i = n(510104);

function a(e, t, n) {
  return void 0 === n && (n = {
x: 0,
y: 0
  }), {
top: e.top - t.height - n.y,
right: e.right - t.width + n.x,
bottom: e.bottom - t.height + n.y,
left: e.left - t.width - n.x
  };
}

function s(e) {
  return [
r.we,
r.F2,
r.I,
r.t$
  ].some(function(t) {
return e[t] >= 0;
  });
}
t.Z = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: function(e) {
var t = e.state,
  n = e.name,
  r = t.rects.reference,
  o = t.rects.popper,
  l = t.modifiersData.preventOverflow,
  u = (0, i.Z)(t, {
    elementContext: 'reference'
  }),
  c = (0, i.Z)(t, {
    altBoundary: !0
  }),
  d = a(u, r),
  _ = a(c, o, l),
  E = s(d),
  f = s(_);
t.modifiersData[n] = {
  referenceClippingOffsets: d,
  popperEscapeOffsets: _,
  isReferenceHidden: E,
  hasPopperEscaped: f
}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
  'data-popper-reference-hidden': E,
  'data-popper-escaped': f
});
  }
};