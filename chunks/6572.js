n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(442837),
  r = n(963838),
  o = n(37091),
  c = n(689938),
  u = n(187509);

function d(e) {
  let t, {
  channelId: n,
  userId: a
} = e,
[d, h] = (0, l.Wu)([o.Z], () => [
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
      className: s()(u.completeLeft, u.highFive)
    }),
    (0, i.jsx)('img', {
      alt: c.Z.Messages.CALL_HIGH_FIVE_EXCLAMATION,
      src: (0, r._r)({
        name: h[1],
        id: null,
        animated: !1
      }),
      className: s()(u.completeRight, u.highFive)
    })
  ]
});
  else {
if (null == d)
  return null;
t = (0, i.jsx)('img', {
  alt: c.Z.Messages.CALL_HIGH_FIVE_EXCLAMATION,
  src: (0, r._r)({
    name: d,
    id: null,
    animated: !1
  }),
  className: s()(u.waiting, u.highFive)
});
  }
  return (0, i.jsx)('div', {
className: u.root,
children: t
  });
}