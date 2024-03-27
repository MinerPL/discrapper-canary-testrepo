"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("77078"),
  i = s("812204"),
  r = s("685665"),
  o = s("95039"),
  d = s("345988"),
  u = s("163732"),
  c = s("364685"),
  E = s("657"),
  _ = s("993105"),
  I = s("427459"),
  T = s("701909"),
  S = s("900938"),
  f = s("49111"),
  m = s("560241"),
  N = s("782340"),
  g = s("986433");
let h = {
    page: f.AnalyticsPages.GUILD_SETTINGS,
    section: f.AnalyticsSections.GUILD_SETTINGS_STICKERS,
    object: f.AnalyticsObjects.BOOSTING_BANNER
  },
  C = e => {
    let {
      guild: t
    } = e, {
      analyticsLocations: s
    } = (0, r.default)(), l = (0, I.getAppliedGuildBoostsRequired)(t.id)[f.BoostedGuildTiers.TIER_1] - t.premiumSubscriberCount;
    return (0, a.jsxs)("div", {
      className: g.upsellContainer,
      children: [(0, a.jsx)(n.Heading, {
        className: g.upsellHeader,
        variant: "heading-xl/semibold",
        children: N.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_TITLE
      }), (0, a.jsx)(n.Text, {
        className: g.upsellDescription,
        variant: "text-md/normal",
        children: N.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_DESCRIPTION_FREE_SLOTS
      }), (0, a.jsxs)("div", {
        className: g.upsellButtons,
        children: [(0, a.jsx)(n.Button, {
          className: g.upsellButtonPrimary,
          innerClassName: g.upsellButton,
          color: n.Button.Colors.WHITE,
          onClick: () => (0, u.default)({
            analyticsLocations: s,
            analyticsLocation: h,
            guildId: t.id,
            totalNumberOfSlotsToAssign: l
          }),
          children: N.default.Messages.GUILD_SETTINGS_STICKERS_BOOST_SERVER
        }), (0, a.jsx)(n.Button, {
          innerClassName: g.upsellButton,
          color: n.Button.Colors.WHITE,
          onClick: () => (0, o.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: f.AnalyticsSections.GUILD_SETTINGS_STICKERS
            }
          }),
          children: N.default.Messages.LEARN_MORE
        })]
      })]
    })
  },
  R = () => (0, a.jsxs)(n.FormSection, {
    title: N.default.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_HEADING,
    children: [(0, a.jsx)(n.FormText, {
      type: n.FormTextTypes.DESCRIPTION,
      children: N.default.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_INSTRUCTIONS.format({
        fileSize: (0, _.formatKbSize)(m.MAX_STICKER_FILE_SIZE, {
          useKibibytes: !0
        })
      })
    }), (0, a.jsx)(n.FormText, {
      type: n.FormTextTypes.DESCRIPTION,
      children: N.default.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_HELP.format({
        articleUrl: T.default.getArticleURL(f.HelpdeskArticles.STICKERS_UPLOAD)
      })
    })]
  }),
  x = e => {
    let t, s, l, {
        guild: n,
        guildStickers: i
      } = e,
      r = n.premiumTier,
      o = (0, I.getAvailableStickerSlotCount)(i, r),
      u = (0, I.getNextTier)(r, n.id),
      c = (0, I.getTotalStickerCountForTier)(r),
      E = i.length;
    return null == u || r === f.BoostedGuildTiers.TIER_3 || o > 0 ? (0, a.jsx)(a.Fragment, {}) : (E > c ? (t = N.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TOO_MANY_STICKERS_HEADER.format({
      level: u
    }), s = N.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TOO_MANY_STICKERS_TEXT.format({
      level: u
    }), l = f.AnalyticsObjects.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = N.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER, s = N.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TEXT.format({
      level: u,
      numAdditional: (0, I.getIncrementalStickerCountForTier)(u)
    }), l = f.AnalyticsObjects.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, a.jsx)(d.default, {
      header: t,
      text: s,
      guild: n,
      analyticsLocation: {
        page: f.AnalyticsPages.GUILD_SETTINGS,
        section: f.AnalyticsSections.GUILD_SETTINGS_STICKERS,
        object: l,
        objectType: (0, I.boostedGuildTierToAnalyticsObjectType)(u)
      }
    }))
  };
var L = () => {
  let e = (0, l.useStateFromStores)([S.default], () => S.default.getGuild()),
    t = (0, l.useStateFromStores)([c.default], () => {
      var t;
      return null != e && null !== (t = c.default.getStickersByGuildId(e.id)) && void 0 !== t ? t : []
    }, [e]),
    {
      analyticsLocations: s
    } = (0, r.default)(i.default.STICKERS);
  if (null == e) return null;
  let o = e.premiumTier !== f.BoostedGuildTiers.NONE || t.length > 0;
  return (0, a.jsx)(r.AnalyticsLocationProvider, {
    value: s,
    children: (0, a.jsxs)(n.FormSection, {
      title: N.default.Messages.GUILD_SETTINGS_STICKERS,
      tag: n.FormTitleTags.H1,
      children: [o ? (0, a.jsxs)("div", {
        children: [(0, a.jsx)(x, {
          guild: e,
          guildStickers: t
        }), (0, a.jsx)(R, {})]
      }) : (0, a.jsx)(C, {
        guild: e
      }), (0, a.jsx)(n.FormDivider, {
        className: g.divider
      }), (0, a.jsx)(E.default, {
        guild: e
      })]
    })
  })
}