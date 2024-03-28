"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var l = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  a = s("481060"),
  n = s("367907"),
  d = s("357352"),
  o = s("434404"),
  u = s("976644"),
  c = s("877453"),
  C = s("626135"),
  _ = s("629481"),
  f = s("981631"),
  h = s("689938"),
  S = s("257441");

function L(e) {
  let {
    pills: t
  } = e;
  return (0, l.jsx)("div", {
    className: S.row,
    children: t.map(e => (0, l.jsx)("div", {
      className: S.pill,
      children: (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function x(e) {
  let {
    guildId: t,
    showCTA: s,
    responsive: i = !0
  } = e, x = [
    [h.default.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS, h.default.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS],
    [h.default.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS, h.default.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART],
    [h.default.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS, h.default.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS],
    [h.default.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS, h.default.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS]
  ];
  return (0, l.jsx)("div", {
    className: r()({
      [S.responsive]: i
    }),
    children: (0, l.jsxs)("div", {
      className: S.container,
      children: [(0, l.jsxs)("div", {
        className: S.content,
        children: [(0, l.jsx)("div", {
          className: S.pillContainer,
          children: x.map((e, t) => (0, l.jsx)(L, {
            pills: e
          }, "pill-row-".concat(t)))
        }), (0, l.jsxs)("div", {
          className: S.ctaContent,
          children: [(0, l.jsx)(a.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: h.default.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
          }), s && (0, l.jsxs)(u.default, {
            size: a.Button.Sizes.MEDIUM,
            className: S.getStartedButton,
            innerClassName: S.getStartedButtonContents,
            shineSize: u.default.ShineSizes.SMALL,
            onClick: () => {
              C.default.track(f.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, n.collectGuildAnalyticsMetadata)(t),
                action_taken: _.GuildShopPreviewClickActions.GET_STARTED_CLICK
              }), o.default.open(t, f.GuildSettingsSections.GUILD_PRODUCTS)
            },
            children: [h.default.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON, (0, l.jsx)(c.default, {
              className: S.getStartedArrow
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: S.muralImageContainer,
        children: [(0, l.jsx)("img", {
          src: (0, d.getAssetCDNUrl)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: S.muralImage
        }), (0, l.jsx)("img", {
          src: (0, d.getAssetCDNUrl)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: S.muralImageReducedWidth
        })]
      })]
    })
  })
}