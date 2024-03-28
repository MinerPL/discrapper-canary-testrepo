"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("990547"),
  o = n("831209"),
  u = n("442837"),
  d = n("481060"),
  c = n("367907"),
  f = n("213609"),
  E = n("267101"),
  _ = n("336197"),
  T = n("430824"),
  m = n("346656"),
  I = n("682864"),
  p = n("132338"),
  h = n("626135"),
  N = n("76535"),
  S = n("866104"),
  C = n("886176"),
  A = n("981631"),
  g = n("689938"),
  M = n("423650");

function R(e) {
  var t;
  let {
    guildId: n
  } = e, l = (0, u.useStateFromStores)([T.default], () => T.default.getGuild(n)), {
    loading: R,
    subscriptionsSettings: O
  } = (0, N.useMonetizationSettings)(n), {
    listingsLoaded: v
  } = (0, E.useFetchGuildProductListingsForGuild)(n), L = (0, E.useGuildProductsForGuild)(n, {
    publishedOnly: !0
  }), x = a.useCallback(async () => {
    h.default.track(A.AnalyticEvents.GUILD_SHOP_EMBED_CLICKED, {
      ...(0, c.collectGuildAnalyticsMetadata)(n)
    }), await (0, _.default)(A.Routes.SERVER_SHOP(n))
  }, [n]);
  (0, f.default)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == l
  });
  let D = L.length > 0 ? new Date(Math.min(...L.map(e => Date.parse(e.published_at)))) : void 0;
  return R || !v ? (0, s.jsx)("div", {
    className: i()(M.guildShopEmbed, M.spinnerContainer),
    children: (0, s.jsx)(d.Spinner, {})
  }) : null == l || null == O ? null : (0, s.jsxs)("div", {
    className: M.guildShopEmbed,
    children: [(0, s.jsx)(S.HeroImage, {
      coverImageAsset: null !== (t = O.cover_image_asset) && void 0 !== t ? t : null
    }), (0, s.jsx)(I.default, {
      size: 16
    }), (0, s.jsxs)("div", {
      className: M.serverShopLabel,
      children: [(0, s.jsx)(C.default, {
        height: "16px",
        width: "16px",
        color: o.default.INTERACTIVE_NORMAL
      }), (0, s.jsx)(d.Heading, {
        variant: "heading-sm/semibold",
        color: "interactive-normal",
        className: M.serverShopLabelText,
        children: g.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      })]
    }), (0, s.jsx)(I.default, {
      size: 16
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: g.default.Messages.GUILD_STORE_HERO_TITLE.format({
        guildName: l.name
      })
    }), (0, s.jsx)(I.default, {
      size: 4
    }), (0, s.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: O.description
    }), (0, s.jsx)(I.default, {
      size: 16
    }), (0, s.jsx)(p.default, {}), (0, s.jsx)(I.default, {
      size: 16
    }), (0, s.jsxs)("div", {
      className: M.guildShopEmbedFooter,
      children: [(0, s.jsx)(m.default, {
        guild: l
      }), (0, s.jsxs)("ul", {
        className: M.guildShopSummary,
        children: [(0, s.jsx)("li", {
          children: (0, s.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.default.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({
              listingCount: L.length
            })
          })
        }), null != D && (0, s.jsx)("li", {
          children: (0, s.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.default.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({
              createdYear: D.getFullYear()
            })
          })
        })]
      }), (0, s.jsx)(d.Button, {
        className: M.guildShopEmbedCta,
        onClick: x,
        children: (0, s.jsxs)("div", {
          className: M.guildShopEmbedCtaContent,
          children: [(0, s.jsx)(C.default, {
            height: "18px",
            width: "18px"
          }), (0, s.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: g.default.Messages.GUILD_SHOP_EMBED_CTA
          })]
        })
      })]
    })]
  })
}