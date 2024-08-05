n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(278074),
  o = n(442837),
  l = n(481060),
  u = n(884697),
  c = n(449217),
  d = n(706454),
  _ = n(158776),
  E = n(74538),
  f = n(204418),
  h = n(689938),
  p = n(987243);
let m = [{
  avatarSize: l.AvatarSizes.SIZE_40,
  showStatus: !1
},
{
  avatarSize: l.AvatarSizes.SIZE_32,
  showStatus: !1
},
{
  avatarSize: l.AvatarSizes.SIZE_40,
  showStatus: !0
},
{
  avatarSize: l.AvatarSizes.SIZE_32,
  showStatus: !0
}
  ],
  I = e => {
let {
  purchase: t
} = e, n = (0, o.e7)([d.default], () => d.default.locale), i = (0, u.qS)(t);
return (0, r.jsxs)('div', {
  className: p.purchaseInfo,
  children: [
    (0, r.jsx)(l.Text, {
      variant: 'text-sm/semibold',
      color: 'header-primary',
      children: t.name
    }),
    (0, r.jsx)(l.Text, {
      variant: 'text-sm/normal',
      children: t.summary
    }),
    (0, r.jsxs)(l.Text, {
      variant: 'text-xxs/normal',
      color: 'text-muted',
      children: [
        h.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(n, {
            month: 'long',
            year: 'numeric'
          })
        }),
        i && (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)('br', {}),
            h.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC
          ]
        })
      ]
    })
  ]
});
  };
t.Z = e => {
  let {
user: t,
guildId: n,
avatarDecorationOverride: i,
className: d
  } = e, T = (0, o.e7)([_.Z], () => _.Z.getStatus(t.id)), {
product: g,
purchase: S
  } = (0, c.Z)(null == i ? void 0 : i.skuId), A = E.ZP.canUseCollectibles(t), N = (0, u.qS)(S), v = (0, u.G1)(g), O = !A && N;
  return null != g && (null == S || O) ? (0, r.jsxs)('div', {
className: a()(p.modalPreview, p.shopPreviewContainer, d),
children: [
  (0, r.jsx)('div', {
    className: p.shopPreviewBanner,
    children: (0, r.jsx)(f.Z, {
      user: t,
      guildId: n,
      avatarDecorationOverride: i
    })
  }),
  (0, r.jsxs)('div', {
    className: p.shopPreviewTextContainer,
    children: [
      (0, r.jsx)(l.Text, {
        variant: 'text-sm/semibold',
        children: g.name
      }),
      (0, r.jsx)(l.Text, {
        variant: 'text-sm/normal',
        children: O ? h.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, s.EQ)([
          v,
          A
        ]).with([
          !0,
          !0
        ], () => h.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([
          !0,
          !1
        ], () => h.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => h.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })
    ]
  })
]
  }) : (0, r.jsxs)('div', {
className: a()(p.modalPreview, d),
children: [
  (0, r.jsxs)('div', {
    className: p.previewSections,
    children: [
      (0, r.jsx)('div', {
        className: p.decorationPreview,
        children: (0, r.jsx)(f.Z, {
          user: t,
          guildId: n,
          avatarDecorationOverride: i
        })
      }),
      (0, r.jsx)('div', {
        className: p.smallDecorationPreviewsContainer,
        children: m.map(e => {
          let {
            avatarSize: a,
            showStatus: s
          } = e;
          return (0, r.jsx)('div', {
            className: p.smallDecorationPreview,
            children: (0, r.jsx)(f.Z, {
              user: t,
              guildId: n,
              avatarSize: a,
              avatarDecorationOverride: i,
              status: s ? T : void 0,
              'aria-hidden': !0
            })
          }, ''.concat(a).concat(s));
        })
      })
    ]
  }),
  null != S && (0, r.jsx)(I, {
    purchase: S
  })
]
  });
};