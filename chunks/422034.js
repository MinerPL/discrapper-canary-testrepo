n.d(t, {
  O: function() {
return h;
  },
  Z: function() {
return f;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(204197),
  c = n(357355),
  d = n(182294),
  _ = n(689938),
  E = n(32724);

function f(e) {
  let {
smallerText: t,
className: n,
textColor: a
  } = e, u = (0, o.e7)([c.Z], () => c.Z.affinities.slice(0, 3).reverse()), f = u.map((e, t) => (0, r.jsx)(h, {
affinity: e,
applyMask: t !== u.length - 1,
size: d.EF.SIZE_32
  }, e.id)), p = e => null != e.globalName ? e.globalName : e.username, m = i.useMemo(() => 3 === u.length ? _.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
username: p(u[2])
  }) : 2 === u.length ? _.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_2.format({
username: p(u[1]),
otherUsername: p(u[0])
  }) : 1 === u.length ? _.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
username: p(u[0])
  }) : '', [u]);
  return 0 === u.length ? null : (0, r.jsxs)('div', {
className: s()(E.container, n),
children: [
  (0, r.jsx)('div', {
    className: E.iconContainer,
    children: f
  }),
  (0, r.jsx)('div', {
    className: E.textContainer,
    children: (0, r.jsx)(function() {
      return t ? (0, r.jsx)(l.Text, {
        variant: 'text-lg/medium',
        color: a,
        children: m
      }) : (0, r.jsx)(l.Heading, {
        variant: 'heading-xl/medium',
        color: a,
        children: m
      });
    }, {})
  })
]
  });
}

function h(e) {
  let {
affinity: t,
applyMask: n,
size: i
  } = e, {
avatarSrc: a,
eventHandlers: o
  } = (0, u.Z)({
user: t,
size: i,
animateOnHover: !0
  });
  return (0, r.jsx)(l.Avatar, {
className: s()(E.icon, {
  [E.mask]: n
}),
src: a,
'aria-label': t.username,
size: i,
...o
  });
}