n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(497505),
  o = n(602667),
  c = n(439826),
  d = n(43779),
  u = n(444627);

function _(e) {
  let {
quest: t,
className: n,
questContent: s,
contentPosition: _,
rowIndex: h
  } = e, [E, I] = a.useState(!1), [m, g] = a.useState([]), p = a.useCallback(() => {
I(!0);
  }, [I]), T = a.useCallback(() => {
I(!1);
  }, [I]);
  return (0, i.jsx)(o.A, {
questOrQuests: t,
questContent: s,
questContentPosition: _,
questContentRowIndex: h,
trackGuildAndChannelMetadata: s === l.jn.QUESTS_EMBED,
children: e => (0, i.jsxs)('div', {
  id: 'quest-tile-'.concat(t.id),
  ref: t => {
    e.current = t;
  },
  className: r()(u.container, n),
  onMouseEnter: p,
  onMouseLeave: T,
  children: [
    (0, i.jsx)(c.Z, {
      quest: t,
      isHovering: E,
      errorHints: m
    }),
    (0, i.jsx)(d.Z, {
      quest: t,
      questContent: s,
      isHovering: E,
      contentPosition: _,
      rowIndex: h,
      onReceiveErrorHints: g
    })
  ]
})
  });
}