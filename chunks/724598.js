n.d(t, {
  Z: function() {
return m;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(481060),
  l = n(367907),
  o = n(357352),
  c = n(434404),
  d = n(626135),
  u = n(629481),
  _ = n(981631),
  I = n(689938),
  E = n(432663);

function T(e) {
  let {
pills: t
  } = e;
  return (0, s.jsx)('div', {
className: E.row,
children: t.map(e => (0, s.jsx)('div', {
  className: E.pill,
  children: (0, s.jsx)(r.Text, {
    variant: 'text-sm/normal',
    children: e
  })
}, e))
  });
}

function m(e) {
  let {
guildId: t,
showCTA: n,
responsive: a = !0
  } = e, m = [
[
  I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS,
  I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS
],
[
  I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS,
  I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART
],
[
  I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS,
  I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS
],
[
  I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS,
  I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS
]
  ];
  return (0, s.jsx)('div', {
className: i()({
  [E.responsive]: a
}),
children: (0, s.jsxs)('div', {
  className: E.container,
  children: [
    (0, s.jsxs)('div', {
      className: E.content,
      children: [
        (0, s.jsx)('div', {
          className: E.pillContainer,
          children: m.map((e, t) => (0, s.jsx)(T, {
            pills: e
          }, 'pill-row-'.concat(t)))
        }),
        (0, s.jsxs)('div', {
          className: E.ctaContent,
          children: [
            (0, s.jsx)(r.Text, {
              variant: 'text-lg/medium',
              color: 'header-primary',
              children: I.Z.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
            }),
            n && (0, s.jsxs)(r.ShinyButton, {
              size: r.Button.Sizes.MEDIUM,
              className: E.getStartedButton,
              innerClassName: E.getStartedButtonContents,
              shineSize: r.ShinyButton.ShineSizes.SMALL,
              onClick: () => {
                d.default.track(_.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                  ...(0, l.hH)(t),
                  action_taken: u.mz.GET_STARTED_CLICK
                }), c.Z.open(t, _.pNK.GUILD_PRODUCTS);
              },
              children: [
                I.Z.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON,
                (0, s.jsx)(r.ArrowSmallRightIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: E.getStartedArrow
                })
              ]
            })
          ]
        })
      ]
    }),
    (0, s.jsxs)('div', {
      className: E.muralImageContainer,
      children: [
        (0, s.jsx)('img', {
          src: (0, o.b)('server_products/storefront/preview-mural.png'),
          alt: '',
          className: E.muralImage
        }),
        (0, s.jsx)('img', {
          src: (0, o.b)('server_products/storefront/preview-mural-reduced.png'),
          alt: '',
          className: E.muralImageReducedWidth
        })
      ]
    })
  ]
})
  });
}