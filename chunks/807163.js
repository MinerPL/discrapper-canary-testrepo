t(627341), t(47120), t(724458), t(653041);
var r = t(200651),
    n = t(192379),
    a = t(120356),
    i = t.n(a),
    o = t(512722),
    l = t.n(o),
    c = t(392711),
    u = t.n(c),
    m = t(278074),
    d = t(442837),
    p = t(780384),
    x = t(481060),
    C = t(570140),
    f = t(179360),
    h = t(230711),
    j = t(410030),
    I = t(607070),
    N = t(44315),
    g = t(118012),
    v = t(543241),
    T = t(906411),
    _ = t(565138),
    b = t(822179),
    E = t(419922),
    L = t(687158),
    A = t(484459),
    M = t(813549),
    Z = t(867176),
    S = t(502762),
    U = t(652853),
    R = t(430824),
    y = t(594174),
    P = t(314884),
    w = t(709586),
    k = t(626135),
    z = t(768581),
    V = t(63063),
    B = t(998502),
    F = t(53900),
    O = t(789155),
    D = t(55610),
    K = t(798769),
    W = t(474936),
    G = t(981631),
    Y = t(388032),
    H = t(896243),
    Q = t(834982),
    q = t(912450),
    X = t(703548),
    J = t(869333),
    $ = t(652528),
    ee = t(874692),
    es = t(391458),
    et = t(70967),
    er = t(674264),
    en = t(360088),
    ea = t(304880);
let ei = B.ZP.getEnableHardwareAcceleration() ? x.AnimatedAvatar : x.Avatar,
    eo = {
        boostItemVisual: $,
        emojiStickersVisual: ee,
        screenShareItemVisual: en,
        uploadsMessagesItemVisual: es,
        uploadsMessagesItemVisualV2: et,
        PL: er,
        TR: ea
    },
    el = {
        boostItemVisual: Q,
        emojiStickersVisual: q,
        screenShareItemVisual: en,
        uploadsMessagesItemVisual: X,
        uploadsMessagesItemVisualV2: J,
        PL: er,
        TR: ea
    };
function ec() {
    let e = (0, j.ZP)();
    return (0, p.wj)(e) ? el : eo;
}
function eu(e) {
    let { description: s, onLearnMore: t, renderVisual: n } = e;
    return (0, r.jsxs)('div', {
        className: H.whatYouLoseItem,
        children: [
            (0, r.jsxs)('div', {
                className: H.whatYouLoseItemLeftColumn,
                children: [
                    (0, r.jsx)(x.Text, {
                        variant: 'text-md/normal',
                        children: s
                    }),
                    (0, r.jsx)(x.Button, {
                        look: x.Button.Looks.LINK,
                        color: x.Button.Colors.LINK,
                        size: x.Button.Sizes.NONE,
                        className: H.whatYouLoseItemLearnMore,
                        onClick: t,
                        children: Y.intl.string(Y.t.hvVgAQ)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: H.whatYouLoseItemRightColumn,
                children: n()
            })
        ]
    });
}
function em(e) {
    let { ...s } = e,
        { theme: t } = (0, U.z)(),
        n = (0, N.O0)(G.tPk.INTERACTIVE_ACTIVE, t);
    return (0, r.jsx)(x.NitroWheelIcon, {
        size: 'md',
        ...s,
        color: n.hex
    });
}
function ed(e) {
    let { currentUser: s, premiumType: t, onClose: n } = e,
        a = (0, L.ZP)(s.id),
        i = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        o = t === W.p9.TIER_1,
        l = (0, m.EQ)(null == a ? void 0 : a.premiumType)
            .with(W.p9.TIER_2, () =>
                (0, r.jsxs)(S.Z, {
                    user: s,
                    displayProfile: a,
                    forceShowPremium: !0,
                    profileType: null,
                    className: H.profileCard,
                    children: [
                        (0, r.jsx)(Z.b, {
                            user: s,
                            displayProfile: a,
                            avatarSize: x.AvatarSizes.SIZE_56,
                            avatarOffsetX: 8,
                            avatarOffsetY: 2,
                            bannerWidth: 172,
                            bannerHeight: 60,
                            themePadding: 4
                        }),
                        (0, r.jsx)(ei, {
                            className: H.profileAvatar,
                            src: s.getAvatarURL(void 0, (0, x.getAvatarSize)(x.AvatarSizes.SIZE_56), !i),
                            size: x.AvatarSizes.SIZE_56,
                            'aria-label': s.username
                        }),
                        (0, r.jsx)(S.Z.Overlay, {
                            className: H.profileInner,
                            children: (0, r.jsxs)('div', {
                                className: H.profileUserInfo,
                                children: [
                                    (0, r.jsx)(M.Z, {
                                        className: H.profileNameTag,
                                        usernameClass: H.profileNameTagUsername,
                                        name: s.toString()
                                    }),
                                    (0, r.jsx)(em, { className: H.profilePremiumIcon })
                                ]
                            })
                        })
                    ]
                })
            )
            .otherwise(() =>
                (0, r.jsxs)('div', {
                    className: H.profileCardTier1,
                    children: [
                        (0, r.jsx)(ei, {
                            className: H.profileAvatarTier1,
                            src: s.getAvatarURL(void 0, (0, x.getAvatarSize)(x.AvatarSizes.SIZE_56), !i),
                            size: x.AvatarSizes.SIZE_56,
                            'aria-label': s.username
                        }),
                        (0, r.jsxs)('div', {
                            className: H.profileUserInfoTier1,
                            children: [
                                (0, r.jsx)(M.Z, {
                                    className: H.profileNameTag,
                                    usernameClass: H.profileNameTagUsername,
                                    name: s.toString()
                                }),
                                (0, r.jsx)(x.NitroWheelIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: H.profilePremiumIcon
                                })
                            ]
                        })
                    ]
                })
            );
    return (0, r.jsx)(
        eu,
        {
            description: o ? Y.intl.format(Y.t.xCaYwM, {}) : Y.intl.format(Y.t['gpqr+v'], {}),
            onLearnMore: () => {
                n(), h.Z.open(G.oAB.PROFILE_CUSTOMIZATION), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'user_profile_customization' });
            },
            renderVisual: () => l
        },
        'profile-item'
    );
}
function ep(e) {
    let { premiumType: s } = e,
        t = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        n = (0, v.wC)(null)
            .filter((e) => e.type === T.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, d.Wu)([b.Z], () => b.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        i = ec().emojiStickersVisual,
        o = s === W.p9.TIER_1;
    return (0, r.jsx)(
        eu,
        {
            description: o ? Y.intl.format(Y.t.couiKC, {}) : Y.intl.format(Y.t['0hUHi4'], {}),
            onLearnMore: () => {
                window.open(V.Z.getArticleURL(G.BhN.PREMIUM_DETAILS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' });
            },
            renderVisual: () =>
                (null != n && n.length > 0) || (!o && null != a && a.length > 0)
                    ? (0, r.jsxs)('div', {
                          className: H.emojiStickersPersonalizedContainer,
                          children: [
                              n
                                  .map((e) =>
                                      null == e.id
                                          ? e.url
                                          : z.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: !t && e.animated,
                                                size: 58
                                            })
                                  )
                                  .map((e) =>
                                      null != e
                                          ? (0, r.jsx)('img', {
                                                className: H.personalizedEmoji,
                                                alt: '',
                                                src: e
                                            })
                                          : null
                                  ),
                              o
                                  ? null
                                  : a.map((e) =>
                                        (0, r.jsx)(
                                            E.ZP,
                                            {
                                                disableAnimation: t,
                                                sticker: e,
                                                size: 58,
                                                withLoadingIndicator: !1
                                            },
                                            e.id
                                        )
                                    )
                          ]
                      })
                    : (0, r.jsx)('img', {
                          className: H.nonPersonalizedGraphic,
                          alt: '',
                          src: i
                      })
        },
        'emoji-stickers-item'
    );
}
function ex(e) {
    let { premiumType: s, onClose: t } = e;
    n.useEffect(() => C.Z.wait(() => (0, f.X8)()), []);
    let a = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        [o, l] = (0, d.Wu)([P.Z, R.Z], () => {
            let e = P.Z.boostSlots,
                s = new Map();
            u()(e)
                .map('premiumGuildSubscription')
                .map('guildId')
                .forEach((e) => {
                    if (null != R.Z.getGuild(e)) {
                        var t;
                        let r = null !== (t = s.get(e)) && void 0 !== t ? t : 0;
                        s.set(e, r + 1);
                    }
                });
            let t = null,
                r = 0;
            return s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [R.Z.getGuild(t), r];
        }),
        c = null != o && l > 0,
        m = ec().boostItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: s === W.p9.TIER_1 ? Y.intl.format(Y.t['K4Hv6+'], {}) : Y.intl.format(Y.t.wRxEDQ, {}),
            onLearnMore: () => {
                t(), h.Z.open(G.oAB.GUILD_BOOSTING), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' });
            },
            renderVisual: () =>
                c
                    ? (0, r.jsx)('div', {
                          className: H.boostCardContainer,
                          children: (0, r.jsxs)('div', {
                              className: H.boostCard,
                              children: [
                                  (0, r.jsx)(_.Z, {
                                      guild: o,
                                      size: _.Z.Sizes.MEDIUM,
                                      animate: !a,
                                      className: H.boostCardIcon
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: H.boostCardInfo,
                                      children: [
                                          (0, r.jsx)(x.Text, {
                                              variant: 'text-md/normal',
                                              className: i()(H.textSingleLineEllipsis, H.boostCardTitle),
                                              children: o.name
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: H.boostCardSubtitle,
                                              children: [
                                                  (0, r.jsx)(w.Z, { className: H.boostCardGem }),
                                                  (0, r.jsx)(x.Text, {
                                                      variant: 'text-xs/normal',
                                                      className: i()(H.textSingleLineEllipsis, H.boostCardCount),
                                                      children: Y.intl.format(Y.t['Ou/g/P'], { boostCount: l })
                                                  })
                                              ]
                                          })
                                      ]
                                  })
                              ]
                          })
                      })
                    : (0, r.jsx)('img', {
                          alt: '',
                          src: m
                      })
        },
        'boost-item'
    );
}
let eC = () => {
    let e = ec().screenShareItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: Y.intl.format(Y.t.wK04T0, {}),
            onLearnMore: () => {
                window.open(V.Z.getArticleURL(G.BhN.STREAM_QUALITY_SETTINGS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' });
            },
            renderVisual: () =>
                (0, r.jsx)('img', {
                    alt: '',
                    src: e
                })
        },
        'screen-share-item'
    );
};
function ef(e) {
    let { premiumType: s } = e,
        t = ec().uploadsMessagesItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: s === W.p9.TIER_2 ? Y.intl.format(Y.t.GsOFRE, {}) : Y.intl.format(Y.t.wFWO6O, {}),
            onLearnMore: () => {
                window.open(V.Z.getArticleURL(G.BhN.PREMIUM_DETAILS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' });
            },
            renderVisual: () =>
                (0, r.jsx)('img', {
                    alt: '',
                    src: t
                })
        },
        'uploads-item'
    );
}
let eh = (e) => {
    let { country: s } = e,
        t = ec(),
        n = 'PL' === s ? t.PL : t.TR;
    return (0, r.jsx)(
        eu,
        {
            description: Y.intl.format('PL' === s ? Y.t['0MAev7'] : Y.t.p2CqUl, {}),
            onLearnMore: () => {
                window.open(V.Z.getArticleURL(G.BhN.LOCALIZED_PRICING)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'grandfathered_prices' });
            },
            renderVisual: () =>
                (0, r.jsx)('img', {
                    alt: '',
                    src: n
                })
        },
        'grandfathered-prices-item'
    );
};
function ej(e) {
    let { currentUser: s, premiumType: t, onClose: a, isDowngrade: i = !1 } = e,
        o = (0, F.Z)(),
        c = (0, D.U)(),
        u = n.useMemo(() => {
            let e = [];
            switch ((c && (l()(null != o, 'Subscription billing country should not be null'), e.push((0, r.jsx)(eh, { country: o }))), t)) {
                case W.p9.TIER_0:
                    e.push((0, r.jsx)(ep, { premiumType: t }), (0, r.jsx)(ef, { premiumType: t }));
                    break;
                case W.p9.TIER_1:
                    i
                        ? e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: a
                              }),
                              (0, r.jsx)(eC, {}),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: a
                              })
                          )
                        : e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: a
                              }),
                              (0, r.jsx)(ep, { premiumType: t }),
                              (0, r.jsx)(eC, {}),
                              (0, r.jsx)(ef, { premiumType: t }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: a
                              })
                          );
                    break;
                case W.p9.TIER_2:
                    i
                        ? e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: a
                              }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: a
                              }),
                              (0, r.jsx)(eC, {})
                          )
                        : e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: a
                              }),
                              (0, r.jsx)(ep, { premiumType: t }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: a
                              }),
                              (0, r.jsx)(eC, {}),
                              (0, r.jsx)(ef, { premiumType: t })
                          );
            }
            return e;
        }, [t, s, a, i, c, o]);
    return (0, r.jsx)('div', {
        className: H.whatYouLoseItemContainer,
        children: u
    });
}
s.Z = function (e) {
    let { premiumType: s, titleText: t, subtitleText: a, footer: i, onClose: o, onDiscountClaim: c, onContinue: u, analyticsLocations: m, isLoading: p = !1, churnUserDiscountOffer: C = null, isDowngrade: f = !1, subtitleIcon: h, subtitleClassName: j } = e,
        I = (0, d.e7)([y.default], () => {
            let e = y.default.getCurrentUser();
            return l()(null != e, 'ProfileItem: currentUser cannot be undefined'), e;
        });
    n.useEffect(() => {
        (0, A.Z)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let N = null != C && !p;
    return (n.useEffect(() => {
        N &&
            k.default.track(G.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: m,
                discount_id: null == C ? void 0 : C.discount_id
            });
    }, [N, m, C]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, r.jsx)(x.ModalContent, {
                      className: H.body,
                      children: (0, r.jsx)(x.Spinner, { className: H.spinner })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, r.jsxs)(x.ModalContent, {
                      className: H.body,
                      children: [
                          (0, r.jsx)(g.Z, {
                              size: g.Z.Sizes.SIZE_24,
                              className: H.title,
                              children: t
                          }),
                          (0, r.jsxs)('div', {
                              className: j,
                              children: [
                                  h,
                                  (0, r.jsx)(x.Text, {
                                      variant: 'text-md/normal',
                                      className: H.subtitle,
                                      children: a
                                  })
                              ]
                          }),
                          (0, r.jsx)(ej, {
                              currentUser: I,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: f
                          })
                      ]
                  }),
                  !N && (0, r.jsx)(x.ModalFooter, { children: i }),
                  N &&
                      (0, r.jsx)(O.Z, {
                          churnUserDiscountOffer: C,
                          onDiscountClaim: c,
                          onContinue: u
                      })
              ]
          });
};
