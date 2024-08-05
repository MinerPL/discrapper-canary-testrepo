t.d(n, {
  Z: function() {
return x;
  }
});
var l = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  a = t(392711),
  o = t(481060),
  s = t(239091),
  c = t(596454),
  u = t(911969),
  d = t(574399),
  m = t(572004),
  f = t(49012),
  _ = t(970184),
  p = t(280501),
  v = t(689938),
  C = t(433562);

function h(e) {
  let {
url: n,
onSelect: t
  } = e;
  return m.wS && null != n ? (0, l.jsx)(o.Menu, {
navId: 'component-button',
onClose: s.Zy,
'aria-label': v.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
onSelect: t,
children: (0, l.jsx)(o.MenuGroup, {
  children: (0, l.jsx)(o.MenuItem, {
    id: 'copy',
    label: v.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
    action: () => (0, m.JG)(n)
  })
})
  }) : null;
}

function x(e) {
  let n;
  let {
label: t,
style: r,
disabled: m,
emoji: v,
url: x,
skuId: I
  } = e, {
executeStateUpdate: E,
visualState: T,
isDisabled: N
  } = (0, _.Ee)(e), g = (0, d.I)(I), S = null != I && r === u.ZJ.PREMIUM, b = S && (null == g ? void 0 : g.disabled), O = S ? null == g ? void 0 : g.label : t, j = null != v, M = null != O && O.length > 0, Z = r === u.ZJ.LINK && null != x && x.length > 0, y = T === p.gH.LOADING || S && null == g;
  return n = Z ? () => {
(0, f.q)({
  href: null != x ? x : '',
  shouldConfirm: !0
});
  } : S ? null != g && !1 === g.disabled ? g.onClick : a.noop : () => E(), (0, l.jsxs)(o.Button, {
color: function(e) {
  switch (e) {
    case u.ZJ.PRIMARY:
    case u.ZJ.PREMIUM:
      return o.Button.Colors.BRAND;
    case u.ZJ.SUCCESS:
      return o.Button.Colors.GREEN;
    case u.ZJ.DESTRUCTIVE:
      return o.Button.Colors.RED;
    default:
      return o.Button.Colors.PRIMARY;
  }
}(r),
size: o.Button.Sizes.SMALL,
disabled: m || T === p.gH.DISABLED || N || b,
onClick: n,
onContextMenu: e => {
  Z && (0, s.vq)(e, e => (0, l.jsx)(h, {
    ...e,
    url: x
  }));
},
role: Z ? 'link' : 'button',
children: [
  (0, l.jsxs)('div', {
    className: i()(C.content, {
      [C.hidden]: y,
      [C.premium]: S
    }),
    'aria-hidden': y,
    children: [
      S ? (0, l.jsx)('div', {
        className: C.shopIcon,
        children: (0, l.jsx)(o.ShopIcon, {
          size: 'xs',
          color: 'white'
        })
      }) : null,
      j ? (0, l.jsx)(c.Z, {
        className: i()({
          [C.textEmoji]: M
        }),
        src: v.src,
        emojiId: v.id,
        emojiName: v.name,
        animated: v.animated
      }) : null,
      M ? (0, l.jsx)('div', {
        className: C.label,
        children: O
      }) : null,
      Z ? (0, l.jsx)(o.WindowLaunchIcon, {
        size: 'xs',
        color: 'currentColor',
        className: C.launchIcon
      }) : null
    ]
  }),
  y ? (0, l.jsx)('div', {
    className: C.loading,
    children: (0, l.jsx)(o.Dots, {
      dotRadius: 3.5,
      themed: !0
    })
  }) : null
]
  });
}