n(47120), n(627341);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(512722),
    l = n.n(i),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    f = n(979554),
    p = n(399606),
    g = n(663002),
    C = n(481060),
    m = n(37234),
    _ = n(727637),
    h = n(607070),
    b = n(100527),
    x = n(906732),
    I = n(1585),
    E = n(333867),
    v = n(197115),
    L = n(300284),
    S = n(876917),
    T = n(642619),
    N = n(210887),
    O = n(74538),
    k = n(335131),
    B = n(1870),
    j = n(884697),
    Z = n(664018),
    P = n(890249),
    A = n(635552),
    R = n(724994),
    y = n(390698),
    M = n(813083),
    w = n(680942),
    H = n(558060),
    D = n(237031),
    F = n(616066),
    U = n(216541),
    G = n(832149),
    V = n(474936),
    W = n(689938),
    z = n(775409);
let Y = (e) => {
        let { children: t, onClick: n, ...r } = e;
        return (0, a.jsx)(C.Button, {
            fullWidth: !0,
            look: C.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...r,
            children: t
        });
    },
    K = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)(C.Button, {
            color: C.ButtonColors.BRAND,
            look: C.Button.Looks.FILLED,
            size: C.ButtonSizes.ICON,
            className: o()(z.previewButton, t),
            innerClassName: z.previewButtonInner,
            'aria-label': W.Z.Messages.PREVIEW,
            ...n,
            children: (0, a.jsx)(C.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: s, onMount: i, isGiftEasterEggEnabled: X, isPopularPicksRow: q, isInFeedView: $ } = e,
        { analyticsLocations: J } = (0, x.ZP)([...(q ? [b.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : []), ...($ ? [b.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), b.Z.COLLECTIBLES_SHOP_CARD]),
        Q = r.useRef(null),
        ee = (0, _.Z)(Q),
        [et, en] = r.useState(!1),
        ea = ee || et,
        [er] = t.items,
        es = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
        eo = O.ZP.canUseCollectibles(n),
        ei = (0, j.XM)(t, eo, !1),
        el = r.useMemo(() => (0, j.BH)(t, eo), [t, eo]),
        ec = (0, j.G1)(t),
        ed = (0, j.rN)(t),
        { isPurchased: eu, isPartiallyPurchased: ef } = (0, R.L)(t),
        [ep, eg] = (0, p.Wu)([B.Z], () => [B.Z.isClaiming === t.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== t.skuId]),
        eC = (0, p.e7)([N.Z], () => (0, g.wj)(N.Z.theme)),
        em = (0, P.m)('CollectiblesCollectedModal'),
        e_ = (0, j.x6)(t) || em,
        eh = (0, j.Yq)(t.skuId),
        { hoverVariant: eb } = (0, Z.E)('CollectiblesShopTallCard'),
        ex = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    r.useEffect(() => {
        let { current: e } = Q;
        if (null == e) return;
        let t = () => en(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        r.useEffect(() => {
            null == i || i(Q);
        }, [i]);
    let eI = (0, L.Z)({ analyticsLocations: J }),
        eE = r.useRef(null),
        { handleUseNow: ev, isApplying: eL } = (0, A.W)({ product: t }),
        eS = () => {
            if (((0, m.xf)(), eI(), t.type === f.Z.AVATAR_DECORATION && null != er)) {
                l()(er.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, I.ps)({
                        initialSelectedDecoration: er,
                        analyticsLocations: J
                    });
                return;
            }
            t.type === f.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: er.id,
                    analyticsLocations: J
                });
        },
        eT = (e) => (n) => {
            (eE.current = n.currentTarget),
                (0, D.T)({
                    product: t,
                    category: s,
                    analyticsLocations: J,
                    analyticsSource: e,
                    returnRef: eE
                });
        },
        eN = eT(b.Z.COLLECTIBLES_SHOP_CARD),
        eO = eT(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        ek = () =>
            (0, a.jsx)('div', {
                className: z.hoverUpsellContainer,
                children: (0, a.jsx)(v.Z, {
                    fullWidth: !0,
                    className: z.__invalid_premiumSubscribeButton,
                    disabled: eg,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: W.Z.Messages.UNLOCK_WITH_NITRO,
                    subscriptionTier: V.Si.TIER_2
                })
            }),
        eB = () =>
            eu || ef
                ? (0, a.jsx)(y.U, {
                      className: z.priceTag,
                      isPartiallyPurchased: ef
                  })
                : ec
                  ? (0, a.jsx)(C.Text, {
                        variant: 'text-md/semibold',
                        className: z.priceTag,
                        children: W.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, a.jsx)(H.Z, {
                        product: t,
                        discount: el,
                        isPremiumUser: eo,
                        className: z.priceTag
                    }),
        ej = () =>
            ec || d.tq
                ? null
                : ed
                  ? (0, a.jsx)(K, { onClick: eO })
                  : (0, a.jsx)(w.Z, {
                        product: t,
                        returnRef: Q,
                        isGiftEasterEggEnabled: X,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eZ = () => {
            if (ec && !eo && !ed) return ek();
            let e = ec
                ? {
                      submitting: ep,
                      submittingStartedLabel: W.Z.Messages.COLLECTIBLES_COLLECTING,
                      submittingFinishedLabel: W.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                      onClick: async () => {
                          await (0, k.fK)(t.skuId),
                              (0, G.Z)({
                                  product: t,
                                  analyticsLocations: J
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, E.Z)({
                              skuId: t.skuId,
                              analyticsLocations: J,
                              returnRef: Q
                          })
                  };
            return (0, a.jsxs)('div', {
                className: z.buttonsContainer,
                children: [
                    ef
                        ? null
                        : eu
                          ? (0, a.jsx)(Y, {
                                disabled: eg,
                                onClick: e_ ? ev : eS,
                                submitting: eL,
                                children: W.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, a.jsx)(Y, {
                                disabled: eg,
                                className: z.purchaseButton,
                                ...e,
                                children: ec ? W.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : W.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: ei })
                            }),
                    ej()
                ]
            });
        };
    return (0, j.x6)(t) && null != el && el.discountPercentage < 0
        ? null
        : (0, a.jsx)(C.FocusRing, {
              children: (0, a.jsxs)(C.Clickable, {
                  innerRef: Q,
                  className: o()(eC ? z.shopCardDark : z.shopCard, {
                      [z.partiallyOwned]: ef,
                      [z.shopCardAnimation]: !es && eb !== Z.D.NO_MOVEMENT,
                      [eC ? z.shopCardDarkHighlighted : z.shopCardHighlighted]: ea,
                      [z.mysteryShopCard]: ex
                  }),
                  onBlur: () => en(!1),
                  onClick: eN,
                  id: 'shop-item-'.concat(t.skuId),
                  children: [
                      ec &&
                          (0, a.jsx)(C.Tooltip, {
                              tooltipContentClassName: z.premiumWheelTooltipContent,
                              color: C.Tooltip.Colors.PRIMARY,
                              text: W.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                              children: (e) =>
                                  (0, a.jsx)(C.TextBadge, {
                                      ...e,
                                      className: z.premiumWheelBadge,
                                      text: (0, a.jsx)(C.NitroWheelIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: z.premiumWheel
                                      })
                                  })
                          }),
                      (0, a.jsx)('div', {
                          className: z.preview,
                          children: (0, c.EQ)(t.type)
                              .with(f.Z.PROFILE_EFFECT, () =>
                                  (0, a.jsx)('div', {
                                      className: z.profileEffectShopPreview,
                                      children: (0, a.jsx)(S.Z, {
                                          isHovering: ea,
                                          profileEffectId: er.id,
                                          isPurchased: eu,
                                          removeSetHeight: !0
                                      })
                                  })
                              )
                              .with(
                                  f.Z.AVATAR_DECORATION,
                                  () => (
                                      l()(er.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                      (0, a.jsx)('div', {
                                          className: o()(z.avatarContainer, ex && z.mysteryAvatarContainer),
                                          children: (0, a.jsx)(F.R, {
                                              item: er,
                                              user: n,
                                              isPurchased: eu,
                                              isHighlighted: ea
                                          })
                                      })
                                  )
                              )
                              .with(f.Z.BUNDLE, () =>
                                  (0, a.jsx)(U.d, {
                                      product: t,
                                      user: n,
                                      isPurchased: eu,
                                      isHighlighted: ea
                                  })
                              )
                              .otherwise(() => null)
                      }),
                      eu
                          ? (0, a.jsx)('div', {
                                className: z.checkmarkWrapper,
                                children: (0, a.jsx)(C.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 38,
                                    height: 38,
                                    className: z.checkmark
                                })
                            })
                          : null,
                      (0, a.jsxs)('div', {
                          className: o()(z.cardText, { [z.cardTextBlur]: (null == er ? void 0 : er.type) === f.Z.PROFILE_EFFECT }),
                          children: [
                              (0, a.jsx)('div', { className: o()(z.cardBackground, eC ? z.darkCardBackground : z.lightCardBackground, (null == er ? void 0 : er.type) === f.Z.PROFILE_EFFECT ? z.cardLowOpacity : null) }),
                              (0, a.jsx)(C.Text, {
                                  variant: 'text-lg/bold',
                                  className: z.productName,
                                  children: t.name
                              }),
                              (0, a.jsxs)('div', {
                                  className: z.detailsWrapper,
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: ef ? void 0 : z.innerBlur,
                                          children: eB()
                                      }),
                                      (0, a.jsx)('div', {
                                          className: z.innerHover,
                                          children: eZ()
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, a.jsx)(M.Z, {
                          category: s,
                          className: z.limitedTimeBadge,
                          display: 'card'
                      }),
                      eh &&
                          !ef &&
                          !eu &&
                          (0, a.jsx)(C.TextBadge, {
                              text: W.Z.Messages.NEW,
                              disableColor: !0,
                              className: z.newBadge
                          })
                  ]
              })
          });
};
