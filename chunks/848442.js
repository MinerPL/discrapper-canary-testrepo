"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("399606"),
  r = n("524437"),
  o = n("433517"),
  u = n("481060"),
  d = n("239091"),
  c = n("607070"),
  f = n("367907"),
  h = n("357352"),
  C = n("652515"),
  p = n("550951"),
  m = n("886176"),
  g = n("605236"),
  E = n("703656"),
  S = n("984933"),
  _ = n("430824"),
  I = n("696202"),
  N = n("26290"),
  T = n("626135"),
  A = n("434479"),
  L = n("981631"),
  v = n("176505"),
  x = n("629481"),
  R = n("689938"),
  M = n("845051");

function O(e) {
  let {
    guildId: t,
    selected: n,
    handleClick: a
  } = e, d = (0, C.useIsEligibleForSubscriptionsInGuildShop)(t, "guild_shop_channel_row"), p = (0, i.useStateFromStores)([_.default], () => _.default.getGuild(t)), A = (null == p ? void 0 : p.hasFeature(L.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0, v = "false" === o.Storage.get(x.GUILD_SHOP_CHANNEL_ROW_CLICK, "false"), O = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion);
  return (0, l.jsx)(u.ClickableContainer, {
    tag: "div",
    onClick: a,
    className: s()(M.previewChannelRow, {
      [M.selected]: n,
      [M.phantomPreview]: v
    }),
    "aria-label": R.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
    children: (0, l.jsxs)("div", {
      className: M.previewChannelRowContent,
      children: [(0, l.jsx)(m.default, {
        className: M.shopIcon
      }), (0, l.jsx)("div", {
        className: M.channelLabel,
        children: R.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      }), (0, l.jsxs)("div", {
        className: M.gifSection,
        children: [O ? (0, l.jsx)(N.TextBadge, {
          color: u.tokens.unsafe_rawColors.BRAND_260.css,
          text: R.default.Messages.NEW,
          className: M.newBadge
        }) : (0, l.jsx)("img", {
          src: (0, h.getAssetCDNUrl)("server_products/storefront/money.gif"),
          className: M.money,
          alt: ""
        }), n && (0, l.jsx)(u.Clickable, {
          className: M.closeButton,
          onClick: e => {
            if (e.stopPropagation(), (0, g.markDismissibleContentAsDismissed)(r.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW), T.default.track(L.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, f.collectGuildAnalyticsMetadata)(t),
                action_taken: x.GuildShopPreviewClickActions.DISMISS_CHANNEL_ROW
              }), !d || !A) {
              var n;
              (0, E.replaceWith)(L.Routes.CHANNEL(t, null === (n = S.default.getDefaultChannel(t)) || void 0 === n ? void 0 : n.id))
            }
          },
          "aria-label": R.default.Messages.DISMISS,
          children: (0, l.jsx)(I.default, {
            width: 16,
            height: 16
          })
        })]
      })]
    })
  })
}

function y(e) {
  let {
    guild: t,
    selected: a
  } = e, s = (0, p.useGuildShopPreviewVisible)(t, "guild_shop_channel_row"), i = () => {
    o.Storage.set(x.GUILD_SHOP_CHANNEL_ROW_CLICK, "true"), (0, E.transitionTo)(L.Routes.CHANNEL(t.id, v.StaticChannelRoute.GUILD_SHOP))
  };
  return s ? (0, l.jsx)(O, {
    guildId: t.id,
    selected: a,
    handleClick: i
  }) : (0, l.jsx)(A.default, {
    renderIcon: e => (0, l.jsx)(m.default, {
      width: 20,
      height: 20,
      className: e
    }),
    text: R.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
    selected: a,
    onClick: i,
    onContextMenu: e => {
      null != t && (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("66050").then(n.bind(n, "64220"));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
  })
}