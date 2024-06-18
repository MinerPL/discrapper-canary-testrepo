"use strict";
t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(2052),
  d = t(906732),
  u = t(678558),
  E = t(852679),
  _ = t(889161),
  I = t(626135),
  T = t(267642),
  N = t(268350),
  m = t(926491),
  S = t(386937),
  h = t(316350),
  g = t(863562),
  x = t(981631),
  C = t(689938),
  R = t(852522);
let L = e => e < (0, T.A3)(x.Eu4.NONE) ? x.Eu4.NONE : e < (0, T.A3)(x.Eu4.TIER_1) ? x.Eu4.TIER_1 : e < (0, T.A3)(x.Eu4.TIER_2) ? x.Eu4.TIER_2 : e < (0, T.A3)(x.Eu4.TIER_3) ? x.Eu4.TIER_3 : x.Eu4.NONE,
  O = e => {
    let {
      children: s,
      currentGuildTier: t,
      guildStickers: i,
      tier: l
    } = e, a = t < l, r = (0, T.ig)(l);
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: s
      }), !a && (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: C.Z.Messages.GUILD_STICKER_SETTINGS_REMAINING_SLOTS_AVAILABLE.format({
          numTotal: r,
          numAvailable: (0, T.Qi)(i, l)
        })
      })]
    })
  },
  A = e => {
    let {
      guildId: s
    } = e;
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("49237"), t.e("99387"), t.e("93626")]).then(t.bind(t, 136735));
      return t => (0, n.jsx)(e, {
        guildId: s,
        ...t
      })
    })
  },
  p = () => (0, n.jsx)("div", {
    className: R.placeholderCard,
    children: (0, n.jsx)("img", {
      className: R.placeholderImg,
      alt: C.Z.Messages.GUILD_STICKER_SETTINGS_PLACEHOLDER_ALT_TEXT,
      src: t(872732)
    })
  }),
  M = e => {
    let {
      guild: s
    } = e, {
      location: t
    } = (0, c.O)(), {
      canCreateExpressions: i
    } = (0, _.XJ)(s);
    return (0, n.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.BRAND,
      onClick: () => {
        I.default.track(x.rMx.OPEN_MODAL, {
          type: x.jXE.CREATE_STICKER_MODAL,
          location: t
        }), A({
          guildId: s.id
        })
      },
      disabled: !i,
      children: C.Z.Messages.GUILD_STICKER_GRID_UPLOAD_LABEL
    })
  };
s.Z = e => {
  let {
    guild: s
  } = e, [l, c] = i.useState(!0), I = (0, r.e7)([m.Z], () => {
    var e;
    return null !== (e = m.Z.getStickersByGuildId(s.id)) && void 0 !== e ? e : []
  }, [s]), {
    analyticsLocations: A
  } = (0, d.ZP)(), f = s.hasFeature(x.oNc.MORE_STICKERS) ? x.Eu4.TIER_3 : s.premiumTier, v = s.hasFeature(x.oNc.MORE_STICKERS) ? (0, T.vn)(s.id)[x.Eu4.TIER_3] : s.premiumSubscriberCount;
  if (i.useEffect(() => {
      let e = !1;
      return (async () => {
        c(!0), await (0, N.pk)(s.id), !e && c(!1)
      })(), () => {
        e = !0
      }
    }, [s]), i.useEffect(() => {
      window.dispatchEvent(new Event("resize"))
    }, [I]), l) return (0, n.jsx)(o.Spinner, {});
  let D = (e, t) => {
      let n = null;
      t === x.Eu4.TIER_1 ? n = x.Qqv.TIER_1 : t === x.Eu4.TIER_2 ? n = x.Qqv.TIER_2 : t === x.Eu4.TIER_3 && (n = x.Qqv.TIER_3), (0, E.Z)({
        analyticsLocations: A,
        analyticsLocation: {
          page: x.ZY5.GUILD_SETTINGS,
          section: x.jXE.GUILD_SETTINGS_STICKERS,
          object: x.qAy.BOOST_LEVEL_UPSELL_BUTTON,
          objectType: n
        },
        guildId: s.id,
        totalNumberOfSlotsToAssign: e
      })
    },
    Z = [{
      tier: x.Eu4.NONE,
      title: (0, n.jsx)(O, {
        guildStickers: I,
        currentGuildTier: f,
        tier: x.Eu4.NONE,
        children: C.Z.Messages.GUILD_SETTINGS_STICKERS_FREE_SLOTS_HEADER
      })
    }, {
      tier: x.Eu4.TIER_1,
      title: (0, n.jsx)(O, {
        guildStickers: I,
        currentGuildTier: f,
        tier: x.Eu4.TIER_1,
        children: C.Z.Messages.PREMIUM_GUILD_TIER_1
      })
    }, {
      tier: x.Eu4.TIER_2,
      title: (0, n.jsx)(O, {
        guildStickers: I,
        currentGuildTier: f,
        tier: x.Eu4.TIER_2,
        children: C.Z.Messages.PREMIUM_GUILD_TIER_2
      })
    }, {
      tier: x.Eu4.TIER_3,
      title: (0, n.jsx)(O, {
        guildStickers: I,
        currentGuildTier: f,
        tier: x.Eu4.TIER_3,
        children: C.Z.Messages.PREMIUM_GUILD_TIER_3
      })
    }];
  return (0, n.jsx)(S.Z, {
    tiers: Z,
    renderTier: e => {
      let i, {
          isAnimatedTo: l,
          onSetRef: r,
          tier: c,
          tiers: d,
          tierIndex: E
        } = e,
        {
          canCreateExpressions: N,
          canManageGuildExpression: m
        } = (0, _.Gw)(s),
        S = d[E - 1],
        O = null != S ? (0, T.A3)(S.tier) : 0,
        A = (0, T.A3)(c.tier),
        Z = (0, T.ig)(c.tier),
        j = I.slice(O, A),
        U = j.length > 0,
        G = f < c.tier,
        P = L(I.length),
        b = N && !G && P === c.tier && A !== j.length,
        B = b || j.length > 0,
        y = A - O,
        F = t(872732),
        w = Z - j.length,
        k = b ? Math.min(5 - (j.length + 0) % 5, w) : 0,
        H = [];
      for (let e = 0; e < k; e++) H.push((0, n.jsx)(p, {}, "placeholder-".concat(e)));
      let V = P === E + 1 && P > f,
        Y = b || V || E > f;
      return V ? i = (0, n.jsx)(u.Z, {
        guild: s,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        buttonText: C.Z.Messages.GUILD_STICKER_SETTINGS_UNLOCK_SLOTS,
        targetBoostedGuildTier: f + 1,
        analyticsLocation: {
          page: x.ZY5.GUILD_SETTINGS,
          section: x.jXE.GUILD_SETTINGS_STICKERS,
          object: x.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
          objectType: (0, T.ge)(c.tier)
        }
      }) : b && (i = (0, n.jsx)(M, {
        guild: s
      })), (0, n.jsxs)(h.Z, {
        subscriptionCount: v,
        tier: c,
        onSetRef: r,
        isAnimatedTo: l,
        hasBottomMargin: E !== d.length - 1,
        withCardBody: !B,
        headerButton: i,
        showHeaderLockStatus: Y,
        guildId: s.id,
        children: [B && (0, n.jsxs)("div", {
          className: R.grid,
          children: [j.map(e => (0, n.jsx)(g.Z, {
            isDisabled: G,
            sticker: e,
            canManageSticker: m(e)
          }, e.id)), H]
        }), !G && !b && 0 === j.length && (0, n.jsx)("div", {
          className: a()(R.emptyTierWrapper, R.unusedTierWrapper),
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: C.Z.Messages.GUILD_STICKER_UNUSED_TIER
          })
        }), G && !U && (0, n.jsxs)("div", {
          className: R.emptyTierWrapper,
          children: [(0, n.jsx)("img", {
            alt: C.Z.Messages.GUILD_STICKER_SETTINGS_ICON_ALT_TEXT,
            className: R.emptyTierImage,
            src: F
          }), (0, n.jsx)(o.Text, {
            className: R.unlockTierCtaHeading,
            variant: "text-md/normal",
            color: "header-secondary",
            children: c.tier === x.Eu4.TIER_1 ? C.Z.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS_WITHOUT_TOTAL.format({
              numAdditional: y
            }) : C.Z.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS.format({
              numAdditional: y,
              numTotal: A
            })
          }), (0, n.jsx)(o.Button, {
            color: o.Button.Colors.GREEN,
            onClick: () => D((0, T.vn)(s.id)[c.tier] - s.premiumSubscriberCount, c.tier),
            children: C.Z.Messages.GUILD_STICKER_SETTINGS_BUY_LEVEL
          })]
        })]
      }, c.tier)
    }
  })
}