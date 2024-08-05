var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(749210),
  l = n(225784),
  o = n(210887),
  c = n(469988),
  d = n(689938),
  u = n(381118);
t.Z = e => {
  let {
guilds: t
  } = e, n = (0, a.e7)([o.Z], () => o.Z.theme), _ = t.map(e => (0, i.jsx)(l.Z, {
className: u.__invalid_guildCard,
onView: () => r.Z.transitionToGuildSync(e.id),
guild: {
  ...e,
  presenceCount: void 0,
  memberCount: void 0,
  premiumSubscriptionCount: void 0,
  emojis: void 0
},
theme: n
  }, e.id));
  return (0, i.jsx)('section', {
className: u.guildListSection,
children: t.length > 0 ? (0, i.jsxs)('div', {
  children: [
    (0, i.jsx)(s.Heading, {
      className: u.__invalid_title,
      variant: 'heading-lg/semibold',
      children: d.Z.Messages.YOUR_HUB
    }),
    (0, i.jsxs)('div', {
      className: u.guildList,
      children: [
        _,
        (0, i.jsx)(c.Z, {
          hasHub: !0
        })
      ]
    })
  ]
}) : (0, i.jsx)('div', {
  className: u.guildList,
  children: (0, i.jsx)(c.Z, {
    hasHub: !1
  })
})
  });
};