n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(735250);
n(470079);
var i = n(399606),
  a = n(481060),
  s = n(275759),
  o = n(565138),
  l = n(706454),
  u = n(271383),
  c = n(430824),
  d = n(709054),
  _ = n(689938),
  E = n(350741);

function f(e) {
  let {
userId: t,
guildId: n,
textClassName: f,
tooltipDelay: h
  } = e, p = (0, i.e7)([l.default], () => l.default.locale), m = (0, i.e7)([c.Z], () => null != n ? c.Z.getGuild(n) : null), I = (0, i.e7)([u.ZP], () => null != n ? u.ZP.getMember(n, t) : null), T = (0, s.FI)(d.default.extractTimestamp(t), p), g = (0, s.FI)(null == I ? void 0 : I.joinedAt, p);
  return null == m || null == I ? (0, r.jsx)(a.Text, {
variant: 'text-sm/normal',
className: f,
children: T
  }) : (0, r.jsxs)('div', {
className: E.memberSinceWrapper,
children: [
  (0, r.jsxs)('div', {
    className: E.memberSince,
    children: [
      (0, r.jsx)(a.Tooltip, {
        text: _.Z.Messages.DISCORD_NAME,
        delay: h,
        children: e => (0, r.jsx)(a.ClydeIcon, {
          size: 'custom',
          width: 28,
          height: 28,
          color: 'currentColor',
          ...e,
          className: E.discordIcon
        })
      }),
      (0, r.jsx)(a.Text, {
        variant: 'text-sm/normal',
        className: f,
        children: T
      })
    ]
  }),
  (0, r.jsx)('div', {
    className: E.divider
  }),
  (0, r.jsxs)('div', {
    className: E.memberSince,
    children: [
      (0, r.jsx)(a.Tooltip, {
        text: m.name,
        delay: h,
        children: e => (0, r.jsx)(o.Z, {
          ...e,
          guild: m,
          size: o.Z.Sizes.SMOL
        })
      }),
      (0, r.jsx)(a.Text, {
        variant: 'text-sm/normal',
        className: f,
        children: g
      })
    ]
  })
]
  });
}