n.d(t, {
  Z: function() {
return g;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(315263),
  l = n(100527),
  u = n(906732),
  c = n(617136),
  d = n(497505),
  _ = n(626135),
  E = n(785717),
  f = n(221292),
  h = n(290421),
  p = n(228168),
  m = n(981631),
  I = n(689938),
  T = n(993138);

function g(e) {
  let {
badges: t,
className: n,
badgeClassName: i,
onClose: g
  } = e, {
analyticsLocations: S
  } = (0, u.ZP)(l.Z.BADGE), {
trackUserProfileAction: A,
...N
  } = (0, E.KZ)();
  return (0, r.jsx)('div', {
className: a()(T.container, n),
'aria-label': I.Z.Messages.PROFILE_USER_BADGES,
role: 'group',
children: t.map(e => (0, r.jsx)(o.TooltipContainer, {
  text: e.description,
  delay: p.vB,
  children: (0, r.jsx)(o.Anchor, {
    onClick: t => {
      A({
        action: 'PRESS_BADGE'
      }), (0, f.NE)({
        badge: e.id,
        analyticsLocations: S,
        ...N
      });
      let n = null != e.link ? (0, s.default)(e.link, {
        analyticsLocations: S
      }) : null;
      if (null != n)
        return null == g || g(), n(t);
    },
    onMouseEnter: () => {
      e.id === h.i && _.default.track(m.rMx.QUEST_CONTENT_VIEWED, {
        ...(0, c.mH)(d.jn.QUEST_BADGE)
      }), A({
        action: 'HOVER_BADGE'
      }), (0, f.Qf)({
        badge: e.id,
        analyticsLocations: S,
        ...N
      });
    },
    href: e.link,
    children: (0, r.jsx)('img', {
      alt: ' ',
      'aria-hidden': !0,
      src: (0, p.jC)(e.icon),
      className: a()(T.badge, i)
    })
  })
}, e.id))
  });
}