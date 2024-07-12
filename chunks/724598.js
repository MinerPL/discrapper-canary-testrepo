n.d(t, {
  Z: function() {
return I;
  }
});
var r = n(735250);
n(470079);
var s = n(120356),
  i = n.n(s),
  o = n(481060),
  a = n(367907),
  l = n(357352),
  c = n(434404),
  d = n(626135),
  C = n(629481),
  u = n(981631),
  _ = n(689938),
  x = n(497162);

function f(e) {
  let {
pills: t
  } = e;
  return (0, r.jsx)('div', {
className: x.row,
children: t.map(e => (0, r.jsx)('div', {
  className: x.pill,
  children: (0, r.jsx)(o.Text, {
    variant: 'text-sm/normal',
    children: e
  })
}, e))
  });
}

function I(e) {
  let {
guildId: t,
showCTA: n,
responsive: s = !0
  } = e, I = [
[
  _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS,
  _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS
],
[
  _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS,
  _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART
],
[
  _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS,
  _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS
],
[
  _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS,
  _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS
]
  ];
  return (0, r.jsx)('div', {
className: i()({
  [x.responsive]: s
}),
children: (0, r.jsxs)('div', {
  className: x.container,
  children: [
    (0, r.jsxs)('div', {
      className: x.content,
      children: [
        (0, r.jsx)('div', {
          className: x.pillContainer,
          children: I.map((e, t) => (0, r.jsx)(f, {
            pills: e
          }, 'pill-row-'.concat(t)))
        }),
        (0, r.jsxs)('div', {
          className: x.ctaContent,
          children: [
            (0, r.jsx)(o.Text, {
              variant: 'text-lg/medium',
              color: 'header-primary',
              children: _.Z.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
            }),
            n && (0, r.jsxs)(o.ShinyButton, {
              size: o.Button.Sizes.MEDIUM,
              className: x.getStartedButton,
              innerClassName: x.getStartedButtonContents,
              shineSize: o.ShinyButton.ShineSizes.SMALL,
              onClick: () => {
                d.default.track(u.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                  ...(0, a.hH)(t),
                  action_taken: C.mz.GET_STARTED_CLICK
                }), c.Z.open(t, u.pNK.GUILD_PRODUCTS);
              },
              children: [
                _.Z.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON,
                (0, r.jsx)(o.ArrowSmallRightIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: x.getStartedArrow
                })
              ]
            })
          ]
        })
      ]
    }),
    (0, r.jsxs)('div', {
      className: x.muralImageContainer,
      children: [
        (0, r.jsx)('img', {
          src: (0, l.b)('server_products/storefront/preview-mural.png'),
          alt: '',
          className: x.muralImage
        }),
        (0, r.jsx)('img', {
          src: (0, l.b)('server_products/storefront/preview-mural-reduced.png'),
          alt: '',
          className: x.muralImageReducedWidth
        })
      ]
    })
  ]
})
  });
}