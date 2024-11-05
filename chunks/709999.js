n(47120), n(627341);
var r = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    m = n(979554),
    f = n(399606),
    p = n(622535),
    h = n(663002),
    g = n(481060),
    C = n(37234),
    b = n(727637),
    x = n(607070),
    v = n(100527),
    _ = n(906732),
    k = n(1585),
    j = n(333867),
    E = n(197115),
    I = n(300284),
    T = n(876917),
    S = n(642619),
    B = n(210887),
    N = n(74538),
    y = n(335131),
    L = n(1870),
    Z = n(884697),
    w = n(664018),
    P = n(890249),
    O = n(635552),
    A = n(724994),
    H = n(297651),
    R = n(390698),
    F = n(813083),
    D = n(680942),
    M = n(558060),
    V = n(237031),
    W = n(616066),
    U = n(216541),
    z = n(832149),
    G = n(474936),
    K = n(388032),
    $ = n(352177);
let Y = (e) => {
        let { children: t, onClick: n, ...a } = e;
        return (0, r.jsx)(g.Button, {
            fullWidth: !0,
            look: g.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...a,
            children: t
        });
    },
    J = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(g.Button, {
            color: g.ButtonColors.BRAND,
            look: g.Button.Looks.FILLED,
            size: g.ButtonSizes.ICON,
            className: i()($.previewButton, t),
            innerClassName: $.previewButtonInner,
            'aria-label': K.intl.string(K.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: s, onMount: l, isGiftEasterEggEnabled: q, isInFeedView: Q } = e,
        { analyticsLocations: X } = (0, _.ZP)([...(Q ? [v.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), v.Z.COLLECTIBLES_SHOP_CARD]),
        ee = a.useRef(null),
        { handleCardVisibilityChange: et } = (0, H.E)(t, Q ? 'home' : 'full'),
        en = (0, b.Z)(ee),
        [er, ea] = a.useState(!1),
        es = en || er,
        [ei] = t.items,
        el = (0, f.e7)([x.Z], () => x.Z.useReducedMotion),
        eo = N.ZP.canUseCollectibles(n),
        ec = (0, Z.XM)(t, eo, !1),
        ed = a.useMemo(() => (0, Z.BH)(t, eo), [t, eo]),
        eu = (0, Z.G1)(t),
        em = (0, Z.rN)(t),
        { isPurchased: ef, isPartiallyPurchased: ep } = (0, A.L)(t),
        [eh, eg] = (0, f.Wu)([L.Z], () => [L.Z.isClaiming === t.skuId, null != L.Z.isClaiming && L.Z.isClaiming !== t.skuId]),
        eC = (0, f.e7)([B.Z], () => (0, h.wj)(B.Z.theme)),
        eb = (0, P.m)('CollectiblesCollectedModal'),
        ex = (0, Z.x6)(t) || eb,
        ev = (0, Z.Yq)(t.skuId),
        { hoverVariant: e_ } = (0, w.E)('CollectiblesShopTallCard'),
        ek = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    a.useEffect(() => {
        let { current: e } = ee;
        if (null == e) return;
        let t = () => ea(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        a.useEffect(() => {
            null == l || l(ee);
        }, [l]);
    let ej = (0, I.Z)({ analyticsLocations: X }),
        eE = a.useRef(null),
        { handleUseNow: eI, isApplying: eT } = (0, O.W)({ product: t }),
        eS = () => {
            if (((0, C.xf)(), ej(), t.type === m.Z.AVATAR_DECORATION && null != ei)) {
                o()(ei.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: ei,
                        analyticsLocations: X
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, S.H)({
                    initialSelectedEffectId: ei.id,
                    analyticsLocations: X
                });
        },
        eB = (e) => (n) => {
            (eE.current = n.currentTarget),
                (0, V.T)({
                    product: t,
                    category: s,
                    analyticsLocations: X,
                    analyticsSource: e,
                    returnRef: eE
                });
        },
        eN = eB(v.Z.COLLECTIBLES_SHOP_CARD),
        ey = eB(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eL = () =>
            (0, r.jsx)('div', {
                className: $.hoverUpsellContainer,
                children: (0, r.jsx)(E.Z, {
                    fullWidth: !0,
                    className: $.__invalid_premiumSubscribeButton,
                    disabled: eg,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: K.intl.string(K.t.sEAnVF),
                    subscriptionTier: G.Si.TIER_2
                })
            }),
        eZ = () =>
            ef || ep
                ? (0, r.jsx)(R.U, {
                      className: $.priceTag,
                      isPartiallyPurchased: ep
                  })
                : eu
                  ? (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        className: $.priceTag,
                        children: K.intl.string(K.t.rt69oq)
                    })
                  : (0, r.jsx)(M.Z, {
                        product: t,
                        discount: ed,
                        isPremiumUser: eo,
                        className: $.priceTag
                    }),
        ew = () =>
            eu || d.tq
                ? null
                : em
                  ? (0, r.jsx)(J, { onClick: ey })
                  : (0, r.jsx)(D.Z, {
                        product: t,
                        returnRef: ee,
                        isGiftEasterEggEnabled: q,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eP = () => {
            if (eu && !eo && !em) return eL();
            let e = eu
                ? {
                      submitting: eh,
                      submittingStartedLabel: K.intl.string(K.t['TYw+9v']),
                      submittingFinishedLabel: K.intl.string(K.t.Pg1UPz),
                      onClick: async () => {
                          await (0, y.fK)(t.skuId),
                              (0, z.Z)({
                                  product: t,
                                  analyticsLocations: X
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, j.Z)({
                              skuId: t.skuId,
                              analyticsLocations: X,
                              returnRef: ee
                          })
                  };
            return (0, r.jsxs)('div', {
                className: $.buttonsContainer,
                children: [
                    ep
                        ? null
                        : ef
                          ? (0, r.jsx)(Y, {
                                disabled: eg,
                                onClick: ex ? eI : eS,
                                submitting: eT,
                                children: K.intl.string(K.t.MAS7uL)
                            })
                          : (0, r.jsx)(Y, {
                                disabled: eg,
                                className: $.purchaseButton,
                                ...e,
                                children: eu ? K.intl.string(K.t.zp6caG) : K.intl.formatToPlainString(K.t['cNSL/v'], { price: ec })
                            }),
                    ew()
                ]
            });
        };
    return (0, Z.x6)(t) && null != ed && ed.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: et,
              threshold: 0,
              children: (0, r.jsx)(g.FocusRing, {
                  children: (0, r.jsxs)(g.Clickable, {
                      innerRef: ee,
                      className: i()(eC ? $.shopCardDark : $.shopCard, {
                          [$.partiallyOwned]: ep,
                          [$.shopCardAnimation]: !el && e_ !== w.D.NO_MOVEMENT,
                          [eC ? $.shopCardDarkHighlighted : $.shopCardHighlighted]: es,
                          [$.mysteryShopCard]: ek
                      }),
                      onBlur: () => ea(!1),
                      onClick: eN,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          eu &&
                              (0, r.jsx)(g.Tooltip, {
                                  tooltipContentClassName: $.premiumWheelTooltipContent,
                                  color: g.Tooltip.Colors.PRIMARY,
                                  text: K.intl.string(K.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(g.TextBadge, {
                                          ...e,
                                          className: $.premiumWheelBadge,
                                          text: (0, r.jsx)(g.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: $.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: $.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)('div', {
                                          className: $.profileEffectShopPreview,
                                          children: (0, r.jsx)(T.Z, {
                                              isHovering: es,
                                              profileEffectId: ei.id,
                                              isPurchased: ef,
                                              removeSetHeight: !0
                                          })
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(ei.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, r.jsx)('div', {
                                              className: i()($.avatarContainer, ek && $.mysteryAvatarContainer),
                                              children: (0, r.jsx)(W.R, {
                                                  item: ei,
                                                  user: n,
                                                  isPurchased: ef,
                                                  isHighlighted: es
                                              })
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)(U.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: ef,
                                          isHighlighted: es
                                      })
                                  )
                                  .otherwise(() => null)
                          }),
                          ef
                              ? (0, r.jsx)('div', {
                                    className: $.checkmarkWrapper,
                                    children: (0, r.jsx)(g.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: $.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: i()($.cardText, { [$.cardTextBlur]: (null == ei ? void 0 : ei.type) === m.Z.PROFILE_EFFECT }),
                              children: [
                                  (0, r.jsx)('div', { className: i()($.cardBackground, eC ? $.darkCardBackground : $.lightCardBackground, (null == ei ? void 0 : ei.type) === m.Z.PROFILE_EFFECT ? $.cardLowOpacity : null) }),
                                  (0, r.jsx)(g.Text, {
                                      variant: 'text-lg/bold',
                                      className: $.productName,
                                      children: t.name
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: $.detailsWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: ep ? void 0 : $.innerBlur,
                                              children: eZ()
                                          }),
                                          (0, r.jsx)('div', {
                                              className: $.innerHover,
                                              children: eP()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)(F.Z, {
                              category: s,
                              className: $.limitedTimeBadge,
                              display: 'card'
                          }),
                          ev &&
                              !ep &&
                              !ef &&
                              (0, r.jsx)(g.TextBadge, {
                                  text: K.intl.string(K.t.y2b7CA),
                                  disableColor: !0,
                                  className: $.newBadge
                              })
                      ]
                  })
              })
          });
};
