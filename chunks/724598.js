"use strict";
t.d(s, {
  Z: function() {
    return m
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(367907),
  o = t(357352),
  c = t(434404),
  d = t(877453),
  u = t(626135),
  E = t(629481),
  _ = t(981631),
  I = t(689938),
  T = t(505679);

function N(e) {
  let {
    pills: s
  } = e;
  return (0, n.jsx)("div", {
    className: T.row,
    children: s.map(e => (0, n.jsx)("div", {
      className: T.pill,
      children: (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function m(e) {
  let {
    guildId: s,
    showCTA: t,
    responsive: i = !0
  } = e, m = [
    [I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS, I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS],
    [I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS, I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART],
    [I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS, I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS],
    [I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS, I.Z.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS]
  ];
  return (0, n.jsx)("div", {
    className: l()({
      [T.responsive]: i
    }),
    children: (0, n.jsxs)("div", {
      className: T.container,
      children: [(0, n.jsxs)("div", {
        className: T.content,
        children: [(0, n.jsx)("div", {
          className: T.pillContainer,
          children: m.map((e, s) => (0, n.jsx)(N, {
            pills: e
          }, "pill-row-".concat(s)))
        }), (0, n.jsxs)("div", {
          className: T.ctaContent,
          children: [(0, n.jsx)(a.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: I.Z.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
          }), t && (0, n.jsxs)(a.ShinyButton, {
            size: a.Button.Sizes.MEDIUM,
            className: T.getStartedButton,
            innerClassName: T.getStartedButtonContents,
            shineSize: a.ShinyButton.ShineSizes.SMALL,
            onClick: () => {
              u.default.track(_.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, r.hH)(s),
                action_taken: E.mz.GET_STARTED_CLICK
              }), c.Z.open(s, _.pNK.GUILD_PRODUCTS)
            },
            children: [I.Z.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON, (0, n.jsx)(d.Z, {
              className: T.getStartedArrow
            })]
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: T.muralImageContainer,
        children: [(0, n.jsx)("img", {
          src: (0, o.b)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: T.muralImage
        }), (0, n.jsx)("img", {
          src: (0, o.b)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: T.muralImageReducedWidth
        })]
      })]
    })
  })
}