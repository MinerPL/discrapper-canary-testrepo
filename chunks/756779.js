"use strict";
t.r(s), t.d(s, {
  default: function() {
    return D
  }
});
var a = t("735250");
t("470079");
var r = t("512722"),
  l = t.n(r),
  o = t("990547"),
  i = t("442837"),
  n = t("481060"),
  d = t("782568"),
  u = t("213609"),
  c = t("357352"),
  p = t("434404"),
  m = t("695346"),
  g = t("430824"),
  S = t("499150"),
  h = t("682864"),
  f = t("153124"),
  _ = t("810090"),
  C = t("63063"),
  N = t("981631"),
  x = t("921944"),
  A = t("20281"),
  R = t("288898");
let j = [N.GuildFeatures.CREATOR_MONETIZABLE, N.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL];

function D(e) {
  let {
    transitionState: s,
    onClose: t,
    guildId: r,
    markAsDismissed: D
  } = e, I = (0, f.useUID)(), v = (0, i.useStateFromStores)([g.default], () => g.default.getGuild(r));
  l()(null != v, "Guild must be defined"), (0, u.default)({
    type: A.ImpressionTypes.MODAL,
    name: o.ImpressionNames.GUILD_SHOP_UPSELL,
    properties: {
      passed_in_guild_id: r
    }
  });
  let y = m.GifAutoPlay.useSetting();
  return (0, a.jsxs)(n.ModalRoot, {
    size: n.ModalSize.LARGE,
    className: R.__invalid_root,
    transitionState: s,
    "aria-labelledby": I,
    children: [(0, a.jsxs)(n.ModalHeader, {
      separator: !1,
      className: R.header,
      children: [(0, a.jsx)(n.ModalCloseButton, {
        className: R.closeButton,
        onClick: t
      }), (0, a.jsx)(n.Heading, {
        variant: "heading-xl/medium",
        color: "header-primary",
        id: I,
        children: "Server Shop is now open for business!"
      }), (0, a.jsx)(h.default, {
        size: 6
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        className: R.description,
        color: "header-secondary",
        children: "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise."
      }), (0, a.jsx)(h.default, {
        size: 8
      }), (0, a.jsx)(S.default, {
        onClick: () => {
          D(x.ContentDismissActionType.SECONDARY);
          let e = "".concat(C.default.getCreatorSupportArticleURL(N.HelpdeskArticles.SERVER_SUBSCRIPTION_AND_PRODUCTS), "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1");
          (0, d.default)(e, !0)
        },
        children: "Learn more"
      })]
    }), (0, a.jsx)("div", {
      className: R.divider
    }), (0, a.jsxs)(n.ModalContent, {
      className: R.content,
      children: [y ? (0, a.jsx)("img", {
        src: (0, c.getAssetCDNUrl)("server_products/upsell/demo2.png"),
        alt: "",
        className: R.demo
      }) : (0, a.jsx)(_.default, {
        autoPlay: !0,
        loop: !0,
        className: R.demo,
        width: 400,
        poster: (0, c.getAssetCDNUrl)("server_products/upsell/demo2.png"),
        src: (0, c.getAssetCDNUrl)("server_products/upsell/demo.mp4")
      }), (0, a.jsx)("img", {
        src: (0, c.getAssetCDNUrl)("server_products/upsell/new_sales.png"),
        alt: "",
        className: R.earningsImage
      })]
    }), (0, a.jsxs)(n.ModalFooter, {
      children: [(0, a.jsx)(n.Button, {
        onClick: () => {
          j.some(e => v.hasFeature(e)) ? p.default.open(r, N.GuildSettingsSections.GUILD_PRODUCTS) : p.default.open(r, N.GuildSettingsSections.ROLE_SUBSCRIPTIONS), D(x.ContentDismissActionType.PRIMARY), t()
        },
        children: "Check it out"
      }), (0, a.jsx)(h.default, {
        size: 12,
        horizontal: !0
      })]
    })]
  })
}