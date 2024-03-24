"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("997289"),
  u = s("685665"),
  c = s("617917"),
  E = s("163732"),
  _ = s("817963"),
  I = s("599110"),
  T = s("427459"),
  S = s("467094"),
  f = s("364685"),
  m = s("566171"),
  N = s("417385"),
  g = s("910687"),
  h = s("49111"),
  C = s("782340"),
  R = s("91591");
let x = e => e < (0, T.getTotalStickerCountForTier)(h.BoostedGuildTiers.NONE) ? h.BoostedGuildTiers.NONE : e < (0, T.getTotalStickerCountForTier)(h.BoostedGuildTiers.TIER_1) ? h.BoostedGuildTiers.TIER_1 : e < (0, T.getTotalStickerCountForTier)(h.BoostedGuildTiers.TIER_2) ? h.BoostedGuildTiers.TIER_2 : e < (0, T.getTotalStickerCountForTier)(h.BoostedGuildTiers.TIER_3) ? h.BoostedGuildTiers.TIER_3 : h.BoostedGuildTiers.NONE,
  L = e => {
    let {
      children: t,
      currentGuildTier: s,
      guildStickers: l,
      tier: n
    } = e, i = s < n, r = (0, T.getIncrementalStickerCountForTier)(n);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: t
      }), !i && (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: C.default.Messages.GUILD_STICKER_SETTINGS_REMAINING_SLOTS_AVAILABLE.format({
          numTotal: r,
          numAvailable: (0, T.getAvailableStickerSlotCount)(l, n)
        })
      })]
    })
  },
  O = e => {
    let {
      guildId: t
    } = e;
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("54666").then(s.bind(s, "54666"));
      return s => (0, a.jsx)(e, {
        guildId: t,
        ...s
      })
    })
  },
  A = () => (0, a.jsx)("div", {
    className: R.placeholderCard,
    children: (0, a.jsx)("img", {
      className: R.placeholderImg,
      alt: C.default.Messages.GUILD_STICKER_SETTINGS_PLACEHOLDER_ALT_TEXT,
      src: s("89734")
    })
  }),
  p = e => {
    let {
      guild: t
    } = e, {
      location: s
    } = (0, d.useAnalyticsContext)(), {
      canCreateExpressions: l
    } = (0, _.useManageResourcePermissions)(t);
    return (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.BRAND,
      onClick: () => {
        I.default.track(h.AnalyticEvents.OPEN_MODAL, {
          type: h.AnalyticsSections.CREATE_STICKER_MODAL,
          location: s
        }), O({
          guildId: t.id
        })
      },
      disabled: !l,
      children: C.default.Messages.GUILD_STICKER_GRID_UPLOAD_LABEL
    })
  };
var M = e => {
  let {
    guild: t
  } = e, [n, d] = l.useState(!0), I = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getStickersByGuildId(t.id)) && void 0 !== e ? e : []
  }, [t]), {
    analyticsLocations: O
  } = (0, u.default)(), M = t.hasFeature(h.GuildFeatures.MORE_STICKERS) ? h.BoostedGuildTiers.TIER_3 : t.premiumTier, D = t.hasFeature(h.GuildFeatures.MORE_STICKERS) ? (0, T.getAppliedGuildBoostsRequired)(t.id)[h.BoostedGuildTiers.TIER_3] : t.premiumSubscriberCount;
  if (l.useEffect(() => {
      let e = !1,
        s = async () => {
          d(!0), await (0, S.fetchGuildStickers)(t.id), !e && d(!1)
        };
      return s(), () => {
        e = !0
      }
    }, [t]), l.useEffect(() => {
      window.dispatchEvent(new Event("resize"))
    }, [I]), n) return (0, a.jsx)(o.Spinner, {});
  let v = (e, s) => {
      let a = null;
      s === h.BoostedGuildTiers.TIER_1 ? a = h.AnalyticsObjectTypes.TIER_1 : s === h.BoostedGuildTiers.TIER_2 ? a = h.AnalyticsObjectTypes.TIER_2 : s === h.BoostedGuildTiers.TIER_3 && (a = h.AnalyticsObjectTypes.TIER_3), (0, E.default)({
        analyticsLocations: O,
        analyticsLocation: {
          page: h.AnalyticsPages.GUILD_SETTINGS,
          section: h.AnalyticsSections.GUILD_SETTINGS_STICKERS,
          object: h.AnalyticsObjects.BOOST_LEVEL_UPSELL_BUTTON,
          objectType: a
        },
        guildId: t.id,
        totalNumberOfSlotsToAssign: e
      })
    },
    G = [{
      tier: h.BoostedGuildTiers.NONE,
      title: (0, a.jsx)(L, {
        guildStickers: I,
        currentGuildTier: M,
        tier: h.BoostedGuildTiers.NONE,
        children: C.default.Messages.GUILD_SETTINGS_STICKERS_FREE_SLOTS_HEADER
      })
    }, {
      tier: h.BoostedGuildTiers.TIER_1,
      title: (0, a.jsx)(L, {
        guildStickers: I,
        currentGuildTier: M,
        tier: h.BoostedGuildTiers.TIER_1,
        children: C.default.Messages.PREMIUM_GUILD_TIER_1
      })
    }, {
      tier: h.BoostedGuildTiers.TIER_2,
      title: (0, a.jsx)(L, {
        guildStickers: I,
        currentGuildTier: M,
        tier: h.BoostedGuildTiers.TIER_2,
        children: C.default.Messages.PREMIUM_GUILD_TIER_2
      })
    }, {
      tier: h.BoostedGuildTiers.TIER_3,
      title: (0, a.jsx)(L, {
        guildStickers: I,
        currentGuildTier: M,
        tier: h.BoostedGuildTiers.TIER_3,
        children: C.default.Messages.PREMIUM_GUILD_TIER_3
      })
    }];
  return (0, a.jsx)(m.default, {
    tiers: G,
    renderTier: e => {
      let l, {
          isAnimatedTo: n,
          onSetRef: r,
          tier: d,
          tiers: u,
          tierIndex: E
        } = e,
        {
          canCreateExpressions: S,
          canManageGuildExpression: f
        } = (0, _.getManageResourcePermissions)(t),
        m = u[E - 1],
        L = null != m ? (0, T.getTotalStickerCountForTier)(m.tier) : 0,
        O = (0, T.getTotalStickerCountForTier)(d.tier),
        G = (0, T.getIncrementalStickerCountForTier)(d.tier),
        j = I.slice(L, O),
        U = j.length > 0,
        P = M < d.tier,
        b = x(I.length),
        B = S && !P && b === d.tier && O !== j.length,
        y = B || j.length > 0,
        F = O - L,
        H = s("89734"),
        k = G - j.length,
        w = B ? Math.min(5 - (j.length + 0) % 5, k) : 0,
        V = [];
      for (let e = 0; e < w; e++) V.push((0, a.jsx)(A, {}, "placeholder-".concat(e)));
      let Y = b === E + 1 && b > M,
        W = B || Y || E > M;
      return Y ? l = (0, a.jsx)(c.default, {
        guild: t,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        buttonText: C.default.Messages.GUILD_STICKER_SETTINGS_UNLOCK_SLOTS,
        targetBoostedGuildTier: M + 1,
        analyticsLocation: {
          page: h.AnalyticsPages.GUILD_SETTINGS,
          section: h.AnalyticsSections.GUILD_SETTINGS_STICKERS,
          object: h.AnalyticsObjects.BOOST_UPSELL_NEXT_LEVEL_HEADER,
          objectType: (0, T.boostedGuildTierToAnalyticsObjectType)(d.tier)
        }
      }) : B && (l = (0, a.jsx)(p, {
        guild: t
      })), (0, a.jsxs)(N.default, {
        subscriptionCount: D,
        tier: d,
        onSetRef: r,
        isAnimatedTo: n,
        hasBottomMargin: E !== u.length - 1,
        withCardBody: !y,
        headerButton: l,
        showHeaderLockStatus: W,
        guildId: t.id,
        children: [y && (0, a.jsxs)("div", {
          className: R.grid,
          children: [j.map(e => (0, a.jsx)(g.default, {
            isDisabled: P,
            sticker: e,
            canManageSticker: f(e)
          }, e.id)), V]
        }), !P && !B && 0 === j.length && (0, a.jsx)("div", {
          className: i(R.emptyTierWrapper, R.unusedTierWrapper),
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: C.default.Messages.GUILD_STICKER_UNUSED_TIER
          })
        }), P && !U && (0, a.jsxs)("div", {
          className: R.emptyTierWrapper,
          children: [(0, a.jsx)("img", {
            alt: C.default.Messages.GUILD_STICKER_SETTINGS_ICON_ALT_TEXT,
            className: R.emptyTierImage,
            src: H
          }), (0, a.jsx)(o.Text, {
            className: R.unlockTierCtaHeading,
            variant: "text-md/normal",
            color: "header-secondary",
            children: d.tier === h.BoostedGuildTiers.TIER_1 ? C.default.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS_WITHOUT_TOTAL.format({
              numAdditional: F
            }) : C.default.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS.format({
              numAdditional: F,
              numTotal: O
            })
          }), (0, a.jsx)(o.Button, {
            color: o.Button.Colors.GREEN,
            onClick: () => v((0, T.getAppliedGuildBoostsRequired)(t.id)[d.tier] - t.premiumSubscriberCount, d.tier),
            children: C.default.Messages.GUILD_STICKER_SETTINGS_BUY_LEVEL
          })]
        })]
      }, d.tier)
    }
  })
}