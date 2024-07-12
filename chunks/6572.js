n.d(t, {
  Z: function() {
return u;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(442837),
  r = n(963838),
  o = n(37091),
  c = n(689938),
  d = n(187509);

function u(e) {
  let t, {
  channelId: n,
  userId: a
} = e,
[u, h] = (0, s.Wu)([o.Z], () => [
  o.Z.getWaitingHighFive(n, a),
  o.Z.getCompletedHighFive(n, a)
]);
  if (null != h)
t = (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)('img', {
      alt: c.Z.Messages.CALL_HIGH_FIVE_EXCLAMATION,
      src: (0, r._r)({
        name: h[0],
        id: null,
        animated: !1
      }),
      className: l()(d.completeLeft, d.highFive)
    }),
    (0, i.jsx)('img', {
      alt: c.Z.Messages.CALL_HIGH_FIVE_EXCLAMATION,
      src: (0, r._r)({
        name: h[1],
        id: null,
        animated: !1
      }),
      className: l()(d.completeRight, d.highFive)
    })
  ]
});
  else {
if (null == u)
  return null;
t = (0, i.jsx)('img', {
  alt: c.Z.Messages.CALL_HIGH_FIVE_EXCLAMATION,
  src: (0, r._r)({
    name: u,
    id: null,
    animated: !1
  }),
  className: l()(d.waiting, d.highFive)
});
  }
  return (0, i.jsx)('div', {
className: d.root,
children: t
  });
}