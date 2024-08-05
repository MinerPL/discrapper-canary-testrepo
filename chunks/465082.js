n.d(t, {
  Z: function() {
return f;
  }
});
var a = n(735250),
  i = n(470079),
  l = n(120356),
  r = n.n(l),
  s = n(91192),
  c = n(481060),
  o = n(768581),
  d = n(4461),
  u = n(924489),
  _ = n(491576),
  g = n(689938),
  m = n(262957);

function f(e) {
  var t, n, l, f;
  let {
application: C,
className: p,
childrenClassName: h,
showAdd: x,
showMutualGuilds: I,
showPrimaryCategory: T,
children: R,
onView: b,
guildCountPosition: A = 'top',
subheaderTextVariant: v = 'text-sm/normal',
mutualGuildShownMax: E,
guildIconSize: P,
source: N
  } = e, S = (0, s.JA)(C.id), j = o.ZP.getApplicationIconURL({
id: C.id,
icon: C.icon,
size: 48
  }), {
canInstall: y,
install: O
  } = (0, d.P)(C), M = (0, _.Z)({
application: C,
showMutualGuilds: I
  }), D = i.useCallback(e => {
e.stopPropagation(), O(N);
  }, [
O,
N
  ]), Z = null === (t = C.categories) || void 0 === t ? void 0 : t[0], L = (null !== (l = null === (n = C.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== l ? l : 0) > 0 || M.length > 0, Y = (0, a.jsx)(u.Z, {
application: C,
textVariant: v,
mutualGuilds: M,
mutualGuildShownMax: E,
guildIconSize: P,
compact: !0
  }), k = T && null != Z, H = L && 'top' === A, U = L && 'bottom' === A, B = null !== (f = C.storefront_available) && void 0 !== f && f, G = (0, a.jsxs)('article', {
children: [
  (0, a.jsxs)('div', {
    className: m.topWrapper,
    children: [
      (0, a.jsx)('img', {
        className: m.icon,
        alt: '',
        'aria-hidden': !0,
        src: j,
        width: 48,
        height: 48
      }),
      (0, a.jsxs)('div', {
        className: m.info,
        children: [
          (0, a.jsx)(c.Heading, {
            variant: 'heading-md/medium',
            children: C.name
          }),
          (k || H) && (0, a.jsxs)('div', {
            className: m.details,
            children: [
              k ? (0, a.jsx)(c.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: v,
                children: Z.name
              }) : null,
              H ? (0, a.jsxs)(a.Fragment, {
                children: [
                  k ? (0, a.jsx)('span', {
                    className: m.bullet,
                    children: '\u2022'
                  }) : null,
                  Y,
                  B ? (0, a.jsxs)('div', {
                    className: m.premiumContainer,
                    children: [
                      (0, a.jsx)('span', {
                        className: m.bullet,
                        children: '\u2022'
                      }),
                      (0, a.jsx)(c.TicketIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, a.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        className: m.premiumText,
                        children: g.Z.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
                      })
                    ]
                  }) : null
                ]
              }) : null
            ]
          })
        ]
      }),
      x ? (0, a.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        onClick: D,
        disabled: !y,
        children: g.Z.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
      }) : null
    ]
  }),
  null != R || null != h ? (0, a.jsx)('div', {
    className: r()(h, m.__invalid_children),
    children: R
  }) : null,
  U ? (0, a.jsx)('div', {
    className: m.bottomGuildCountContainer,
    children: Y
  }) : null
]
  });
  return null != b ? (0, a.jsx)(c.Clickable, {
tag: 'li',
onClick: () => b({
  mutualGuilds: M
}),
className: r()(p, m.listing, m.clickable),
...S,
children: G
  }) : (0, a.jsx)(c.FocusRing, {
children: (0, a.jsx)('li', {
  className: r()(p, m.listing),
  ...S,
  children: G
})
  });
}