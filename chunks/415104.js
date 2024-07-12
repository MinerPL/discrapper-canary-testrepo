n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(497505),
  o = n(918701),
  c = n(439826),
  d = n(43779),
  u = n(444627);

function _(e) {
  var t;
  let {
quest: n
  } = e, a = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, _ = !(0, o.zi)(n) || (0, o.iQ)(n) && a, [h, E] = s.useState(!1);
  return (0, i.jsxs)('div', {
className: r()(u.container, {
  [u.noCta]: !_,
  [u.cta]: _
}),
onMouseEnter: () => E(!0),
onMouseLeave: () => E(!1),
children: [
  (0, i.jsx)(c.Z, {
    quest: n,
    isHovering: h
  }),
  (0, i.jsx)(d.Z, {
    quest: n,
    questContent: l.jn.QUEST_HOME_DESKTOP
  })
]
  });
}