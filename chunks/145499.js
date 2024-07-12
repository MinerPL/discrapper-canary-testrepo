n(47120), n(653041);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(274136),
  d = n(2052),
  u = n(906732),
  _ = n(678558),
  I = n(852679),
  E = n(889161),
  T = n(626135),
  m = n(267642),
  N = n(268350),
  S = n(926491),
  h = n(386937),
  g = n(316350),
  C = n(863562),
  x = n(981631),
  p = n(689938),
  R = n(88725);
let f = (e, t) => e < (0, m.A3)(x.Eu4.NONE) ? x.Eu4.NONE : e < (0, m.A3)(x.Eu4.TIER_1) ? x.Eu4.TIER_1 : e < (0, m.A3)(x.Eu4.TIER_2) ? x.Eu4.TIER_2 : e < (0, m.A3)(x.Eu4.TIER_3) || null != t && t.hasFeature(x.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS ? x.Eu4.TIER_3 : x.Eu4.NONE,
  L = e => {
let {
  children: t,
  currentGuildTier: n,
  guildStickers: a,
  tier: i
} = e, r = n < i, l = (0, m.ig)(i);
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(o.Heading, {
      color: 'header-primary',
      variant: 'heading-md/semibold',
      children: t
    }),
    !r && (0, s.jsx)(o.Text, {
      variant: 'text-xs/normal',
      children: p.Z.Messages.GUILD_STICKER_SETTINGS_REMAINING_SLOTS_AVAILABLE.format({
        numTotal: l,
        numAvailable: (0, m.Qi)(a, i)
      })
    })
  ]
});
  },
  O = e => {
let {
  guildId: t
} = e;
(0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('93626'),
    n.e('94548')
  ]).then(n.bind(n, 136735));
  return n => (0, s.jsx)(e, {
    guildId: t,
    ...n
  });
});
  },
  A = () => (0, s.jsx)('div', {
className: R.placeholderCard,
children: (0, s.jsx)('img', {
  className: R.placeholderImg,
  alt: p.Z.Messages.GUILD_STICKER_SETTINGS_PLACEHOLDER_ALT_TEXT,
  src: n(872732)
})
  }),
  M = e => {
let {
  guild: t
} = e, {
  location: n
} = (0, d.O)(), {
  canCreateExpressions: a
} = (0, E.XJ)(t);
return (0, s.jsx)(o.Button, {
  size: o.Button.Sizes.SMALL,
  color: o.Button.Colors.BRAND,
  onClick: () => {
    T.default.track(x.rMx.OPEN_MODAL, {
      type: x.jXE.CREATE_STICKER_MODAL,
      location: n
    }), O({
      guildId: t.id
    });
  },
  disabled: !a,
  children: p.Z.Messages.GUILD_STICKER_GRID_UPLOAD_LABEL
});
  };
t.Z = e => {
  let {
guild: t
  } = e, [i, c] = a.useState(!0), d = (0, l.e7)([S.Z], () => {
var e;
return null !== (e = S.Z.getStickersByGuildId(t.id)) && void 0 !== e ? e : [];
  }, [t]), {
analyticsLocations: T
  } = (0, u.ZP)(), O = t.hasFeature(x.oNc.MORE_STICKERS) ? x.Eu4.TIER_3 : t.premiumTier, D = t.hasFeature(x.oNc.MORE_STICKERS) ? (0, m.vn)(t.id)[x.Eu4.TIER_3] : t.premiumSubscriberCount;
  if (a.useEffect(() => {
  let e = !1;
  return (async () => {
    c(!0), await (0, N.pk)(t.id), !e && c(!1);
  })(), () => {
    e = !0;
  };
}, [t]), a.useEffect(() => {
  window.dispatchEvent(new Event('resize'));
}, [d]), i)
return (0, s.jsx)(o.Spinner, {});
  let v = (e, n) => {
  let s = null;
  n === x.Eu4.TIER_1 ? s = x.Qqv.TIER_1 : n === x.Eu4.TIER_2 ? s = x.Qqv.TIER_2 : n === x.Eu4.TIER_3 && (s = x.Qqv.TIER_3), (0, I.Z)({
    analyticsLocations: T,
    analyticsLocation: {
      page: x.ZY5.GUILD_SETTINGS,
      section: x.jXE.GUILD_SETTINGS_STICKERS,
      object: x.qAy.BOOST_LEVEL_UPSELL_BUTTON,
      objectType: s
    },
    guildId: t.id,
    totalNumberOfSlotsToAssign: e
  });
},
j = [{
    tier: x.Eu4.NONE,
    title: (0, s.jsx)(L, {
      guildStickers: d,
      currentGuildTier: O,
      tier: x.Eu4.NONE,
      children: p.Z.Messages.GUILD_SETTINGS_STICKERS_FREE_SLOTS_HEADER
    })
  },
  {
    tier: x.Eu4.TIER_1,
    title: (0, s.jsx)(L, {
      guildStickers: d,
      currentGuildTier: O,
      tier: x.Eu4.TIER_1,
      children: p.Z.Messages.PREMIUM_GUILD_TIER_1
    })
  },
  {
    tier: x.Eu4.TIER_2,
    title: (0, s.jsx)(L, {
      guildStickers: d,
      currentGuildTier: O,
      tier: x.Eu4.TIER_2,
      children: p.Z.Messages.PREMIUM_GUILD_TIER_2
    })
  },
  {
    tier: x.Eu4.TIER_3,
    title: (0, s.jsx)(L, {
      guildStickers: d,
      currentGuildTier: O,
      tier: x.Eu4.TIER_3,
      children: p.Z.Messages.PREMIUM_GUILD_TIER_3
    })
  }
];
  return (0, s.jsx)(h.Z, {
tiers: j,
renderTier: e => {
  let a, {
      isAnimatedTo: i,
      onSetRef: l,
      tier: c,
      tiers: u,
      tierIndex: I
    } = e,
    {
      canCreateExpressions: T,
      canManageGuildExpression: N
    } = (0, E.Gw)(t),
    S = u[I - 1],
    h = null != S ? (0, m.A3)(S.tier) : 0,
    L = (0, m.A3)(c.tier, t),
    j = (0, m.ig)(c.tier),
    Z = d.slice(h, L),
    b = Z.length > 0,
    U = O < c.tier,
    G = f(d.length, t),
    P = T && !U && G === c.tier && L !== Z.length,
    B = P || Z.length > 0,
    y = L - h,
    F = n(872732),
    w = j - Z.length,
    k = P ? Math.min(5 - (Z.length + 0) % 5, w) : 0,
    H = [];
  for (let e = 0; e < k; e++)
    H.push((0, s.jsx)(A, {}, 'placeholder-'.concat(e)));
  let V = G === I + 1 && G > O,
    Y = P || V || I > O;
  return V ? a = (0, s.jsx)(_.Z, {
    guild: t,
    size: o.Button.Sizes.SMALL,
    color: o.Button.Colors.GREEN,
    buttonText: p.Z.Messages.GUILD_STICKER_SETTINGS_UNLOCK_SLOTS,
    targetBoostedGuildTier: O + 1,
    analyticsLocation: {
      page: x.ZY5.GUILD_SETTINGS,
      section: x.jXE.GUILD_SETTINGS_STICKERS,
      object: x.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
      objectType: (0, m.ge)(c.tier)
    }
  }) : P && (a = (0, s.jsx)(M, {
    guild: t
  })), (0, s.jsxs)(g.Z, {
    subscriptionCount: D,
    tier: c,
    onSetRef: l,
    isAnimatedTo: i,
    hasBottomMargin: I !== u.length - 1,
    withCardBody: !B,
    headerButton: a,
    showHeaderLockStatus: Y,
    guildId: t.id,
    children: [
      B && (0, s.jsxs)('div', {
        className: R.grid,
        children: [
          Z.map(e => (0, s.jsx)(C.Z, {
            isDisabled: U,
            sticker: e,
            canManageSticker: N(e)
          }, e.id)),
          H
        ]
      }),
      !U && !P && 0 === Z.length && (0, s.jsx)('div', {
        className: r()(R.emptyTierWrapper, R.unusedTierWrapper),
        children: (0, s.jsx)(o.Text, {
          variant: 'text-md/normal',
          color: 'header-secondary',
          children: p.Z.Messages.GUILD_STICKER_UNUSED_TIER
        })
      }),
      U && !b && (0, s.jsxs)('div', {
        className: R.emptyTierWrapper,
        children: [
          (0, s.jsx)('img', {
            alt: p.Z.Messages.GUILD_STICKER_SETTINGS_ICON_ALT_TEXT,
            className: R.emptyTierImage,
            src: F
          }),
          (0, s.jsx)(o.Text, {
            className: R.unlockTierCtaHeading,
            variant: 'text-md/normal',
            color: 'header-secondary',
            children: c.tier === x.Eu4.TIER_1 ? p.Z.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS_WITHOUT_TOTAL.format({
              numAdditional: y
            }) : p.Z.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS.format({
              numAdditional: y,
              numTotal: L
            })
          }),
          (0, s.jsx)(o.Button, {
            color: o.Button.Colors.GREEN,
            onClick: () => v((0, m.vn)(t.id)[c.tier] - t.premiumSubscriberCount, c.tier),
            children: p.Z.Messages.GUILD_STICKER_SETTINGS_BUY_LEVEL
          })
        ]
      })
    ]
  }, c.tier);
}
  });
};