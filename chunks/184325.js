n.d(t, {
  V: function() {
return r;
  },
  Z: function() {
return O;
  }
}), n(653041);
var r, i, a = n(735250);
n(470079);
var s = n(120356),
  o = n.n(s),
  l = n(481060),
  u = n(315263),
  c = n(100527),
  d = n(906732),
  _ = n(688465),
  E = n(617136),
  f = n(497505),
  h = n(626135),
  p = n(785717),
  m = n(221292),
  I = n(290421),
  T = n(318661),
  g = n(228168),
  S = n(981631),
  A = n(689938),
  N = n(36548),
  v = n(839973);

function O(e) {
  let {
user: t,
guildId: n,
className: r,
shrinkAtCount: i,
shrinkToSize: s,
isTryItOutFlow: O,
onBadgeClick: R,
size: C = 0
  } = e, y = (0, T.ZP)(t.id, n), {
analyticsLocations: D
  } = (0, d.ZP)(c.Z.BADGE), {
context: L,
trackUserProfileAction: b
  } = (0, p.KZ)(), M = (0, I.Z)(y).map(e => ({
...e,
src: (0, g.jC)(e.icon)
  }));
  if (t.isClyde())
return (0, a.jsx)('div', {
  className: o()(r, N.container, N.clydeBadgeList),
  'aria-label': A.Z.Messages.PROFILE_USER_BADGES,
  role: 'group',
  children: (0, a.jsx)(_.Z, {})
});
  O && null == M.find(e => 'premium' === e.id) && M.push({
id: 'premium',
src: v,
description: A.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
  date: new Date()
})
  });
  let P = null != i && null != s && M.length > i ? s : C;
  return (0, a.jsx)(d.Gt, {
value: D,
children: (0, a.jsx)('div', {
  className: o()(r, M.length > 0 ? N.containerWithContent : N.container),
  'aria-label': A.Z.Messages.PROFILE_USER_BADGES,
  role: 'group',
  children: M.map(e => (0, a.jsx)(l.Tooltip, {
    position: 'top',
    text: e.description,
    spacing: 12,
    children: t => (0, a.jsx)(l.Anchor, {
      ...t,
      onClick: n => {
        var r;
        b({
          action: 'PRESS_BADGE'
        }), (0, m.NE)({
          badge: e.id,
          analyticsLocations: D,
          ...L
        }), null === (r = t.onClick) || void 0 === r || r.call(t);
        let i = null != e.link ? (0, u.default)(e.link, {
          analyticsLocations: D
        }) : null;
        if (null != i)
          return null == R || R(), i(n);
      },
      onMouseEnter: () => {
        var n;
        e.id === I.i && (h.default.track(S.rMx.QUEST_CONTENT_VIEWED, {
          ...(0, E.mH)(f.jn.QUEST_BADGE)
        }), (0, m.Qf)({
          badge: e.id,
          analyticsLocations: D,
          ...L
        })), null === (n = t.onMouseEnter) || void 0 === n || n.call(t);
      },
      href: e.link,
      children: (0, a.jsx)('img', {
        alt: ' ',
        'aria-hidden': !0,
        src: e.src,
        className: o()({
          [N.profileBadge24]: 0 === P,
          [N.profileBadge22]: 1 === P,
          [N.profileBadge20]: 2 === P,
          [N.profileBadge18]: 3 === P
        })
      })
    })
  }, e.id))
})
  });
}
(i = r || (r = {}))[i.SIZE_24 = 0] = 'SIZE_24', i[i.SIZE_22 = 1] = 'SIZE_22', i[i.SIZE_20 = 2] = 'SIZE_20', i[i.SIZE_18 = 3] = 'SIZE_18';