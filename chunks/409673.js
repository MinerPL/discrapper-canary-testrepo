n.d(t, {
    K_: function () {
        return R;
    },
    hU: function () {
        return C;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(846519),
    c = n(692547),
    d = n(481060),
    f = n(596454),
    _ = n(607070),
    h = n(745510),
    p = n(806966),
    m = n(631771),
    g = n(594174),
    E = n(208049),
    v = n(763296),
    I = n(697426),
    S = n(242291),
    T = n(706667),
    b = n(286654),
    y = n(675654),
    A = n(388032),
    N = n(423298);
function C(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: o = 'top', refreshEnabled: l = !1 } = e;
    return (0, r.jsx)(d.Tooltip, {
        text: i,
        position: o,
        children: (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                'aria-label': i,
                className: s()(l ? N.secondaryButtonRefresh : N.secondaryButton, { [N.buttonDisabled]: t }),
                onClick: n,
                children: a
            })
    });
}
function R(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top', refreshEnabled: s = !1 } = e;
    return (0, r.jsx)(C, {
        tooltipPosition: a,
        disabled: i,
        onClick: function (e) {
            e.stopPropagation(), e.currentTarget.blur(), n();
        },
        text: A.intl.formatToPlainString(A.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: s,
        children: (0, r.jsx)(d.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: N.secondaryIcon
        })
    });
}
t.ZP = i.forwardRef(function (e, t) {
    var n, a, O, D, L, x, w, M, P, k;
    let { sound: U, channel: G, containerClassName: B, className: Z, focused: F, forceSecondaryActions: V = !1, interactive: j = !0, enableSecondaryActions: H = !1, suppressPlaySound: Y, onMouseEnter: W, onSelectItem: K, analyticsLocations: z, buttonOverlay: q = I.Pb.PLAY, showLockForDisabledSound: Q = !0, inNitroLockedSection: X = !1, refreshEnabled: J = !1, isAnimated: $ = !0, isPlayingSoundOverride: ee, ...et } = e,
        { soundId: en, name: er, emojiId: ei, emojiName: ea } = U,
        es = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        eo = (0, b.z)(U, null == G ? void 0 : G.guild_id),
        { playSoundboardSound: el, previewSound: eu, isPlayingSound: ec, isPreviewingSound: ed } = (0, T.Z)(U, null !== (D = null == G ? void 0 : G.id) && void 0 !== D ? D : null),
        { createMultipleConfettiAt: ef } = i.useContext(h.h),
        e_ = i.useRef(null);
    let eh =
            ((P = U.soundId),
            (k = e_.current),
            i.useMemo(() => {
                if (null == k || '1' !== P)
                    return {
                        x: 0,
                        y: 0
                    };
                let e = k.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                };
            }, [k, P])),
        ep = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        em = i.useRef(0.01),
        eg = i.useRef(new u.Xp()),
        eE = '1' === U.soundId,
        ev = (0, l.e7)([v.Z], () => v.Z.isFavoriteSound(en), [en]),
        eI = 'sound-'.concat(U.soundId),
        eS = (0, o.JA)(eI),
        eT = null != ei || null != ea,
        eb = !(0, S.Nq)(es, U, G),
        ey = V || (H && !eb),
        eA = i.useRef(null),
        eN = (null !== (L = null === (n = eA.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== L ? L : 0) > (null !== (x = null === (a = eA.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== x ? x : 0),
        eC = null !== (w = p.Wq.useStore().bottomPosition) && void 0 !== w ? w : 0,
        eR = null !== (M = null === (O = e_.current) || void 0 === O ? void 0 : O.getBoundingClientRect().bottom) && void 0 !== M ? M : 0,
        eO = eb && Q,
        { enableInlineUpsell: eD } = m.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eO });
    function eL(e) {
        e.stopPropagation(), e.currentTarget.blur(), ev ? (0, E.hs)(en) : (0, E.TB)(en);
    }
    function ex() {
        return (0, r.jsx)(C, {
            disabled: !j && !V,
            onClick: eL,
            text: A.intl.formatToPlainString(ev ? A.t.lQLsjY : A.t.Y5DOs7, {
                emojiName: U.emojiName,
                soundName: U.name
            }),
            refreshEnabled: J,
            children: ev
                ? (0, r.jsx)(d.StarIcon, {
                      size: 'xs',
                      className: s()(N.secondaryIcon, N.favoriteIconFavorite),
                      color: c.Z.unsafe_rawColors.GOLD.css
                  })
                : (0, r.jsx)(d.StarOutlineIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: N.secondaryIcon
                  })
        });
    }
    function ew() {
        if ((eE && !ep && ((em.current = Math.min(em.current + 0.01, 0.1)), Math.random() < em.current && ef(eh.x, eh.y, void 0, void 0, { sprite: y.vv })), null != K)) {
            K();
            return;
        }
        Y || el(z);
    }
    let eM = R({
            sound: U,
            previewSound: eu,
            disabled: eb && !V,
            refreshEnabled: J
        }),
        eP = (e) =>
            Y || eb || J
                ? eb && Q && eD
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(J ? N.primaryIconRefresh : N.primaryIcon, N.lockIcon, e, { [N.hasEmoji]: eT })
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(N.primaryIcon, e)
                  }),
        ek = () =>
            eD && eb && Q && !X
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: N.buttonOverlayBackground }),
                          eP(N.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: N.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: J ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                                  children: [ey && eM, ey && ex()]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: N.buttonOverlay,
                      children: [
                          !J && (0, r.jsx)('div', { className: s()({ [N.buttonOverlayBackground]: !Y }) }),
                          (0, r.jsxs)('div', {
                              className: J ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                              children: [ey && eM, eP(), ey && ex()]
                          })
                      ]
                  });
    return (
        i.useEffect(() => {
            let e = eg.current;
            return (
                eE &&
                    e.start(1000, () => {
                        em.current = Math.max(em.current - 0.01, 0.01);
                    }),
                () => e.stop()
            );
        }, [eE]),
        (0, r.jsxs)('li', {
            ref: t,
            className: s()(N.soundButtonWrapper, B),
            onMouseEnter: W,
            children: [
                (0, r.jsx)(d.Tooltip, {
                    text: U.name,
                    position: eR + 50 > eC ? 'top' : 'bottom',
                    children: (e) =>
                        (0, r.jsxs)(d.ClickableContainer, {
                            ...et,
                            buttonProps: {
                                ...eS,
                                id: eI,
                                role: 'button'
                            },
                            'aria-label': A.intl.formatToPlainString(A.t.tuMUJy, {
                                emojiName: U.emojiName,
                                soundName: U.name
                            }),
                            className: s()(
                                J ? N.soundButtonRefresh : N.soundButton,
                                {
                                    [N.animated]: $,
                                    [N.playing]: null != ee ? ee : ec,
                                    [N.previewing]: ed,
                                    [N.hoverActiveBackground]: Y && !J,
                                    [N.soundButtonInteractive]: j && !J,
                                    [N.soundButtonInteractiveRefresh]: j && J,
                                    [N.buttonDisabled]: !j && !V,
                                    [N.premiumDisabled]: eb && !V,
                                    [N.premiumDisabledRefresh]: eb && J,
                                    [N.buttonDisabledSecondaryActionsEnabled]: !j && V,
                                    [N.focused]: j && F
                                },
                                Z
                            ),
                            ...e,
                            onClick: ew,
                            onContextMenu: H && !eb ? eo : void 0,
                            onMouseOver: () => {
                                var t;
                                return eN && J ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(J ? N.soundInfoRefresh : N.soundInfo, { [N.hasEmoji]: eT }),
                                    'aria-hidden': !0,
                                    ref: e_,
                                    children: [
                                        eT &&
                                            (J
                                                ? (0, r.jsx)('div', {
                                                      className: N.emojiCircle,
                                                      children: (0, r.jsx)(f.Z, {
                                                          emojiId: ei,
                                                          emojiName: ea,
                                                          className: N.emoji
                                                      })
                                                  })
                                                : (0, r.jsx)(f.Z, {
                                                      emojiId: ei,
                                                      emojiName: ea,
                                                      className: N.emoji
                                                  })),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: j ? void 0 : 'text-muted',
                                            className: s()(J ? N.soundNameRefresh : N.soundName, { [N.hasEmoji]: eT }),
                                            ref: eA,
                                            children: er
                                        })
                                    ]
                                }),
                                (function () {
                                    switch (q) {
                                        case I.Pb.ADD:
                                            return (0, r.jsxs)('div', {
                                                className: N.addButtonOverlay,
                                                children: [
                                                    (0, r.jsx)('div', { className: N.buttonOverlayBackground }),
                                                    (0, r.jsxs)('div', {
                                                        className: J ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                                                        children: [
                                                            eM,
                                                            J
                                                                ? (0, r.jsx)('div', {
                                                                      className: N.primaryIconRefresh,
                                                                      children: (0, r.jsx)(d.PlusLargeIcon, {
                                                                          size: 'md',
                                                                          color: 'currentColor',
                                                                          className: N.plusSign
                                                                      })
                                                                  })
                                                                : (0, r.jsxs)('div', {
                                                                      className: N.addButton,
                                                                      children: [
                                                                          (0, r.jsx)(d.PlusSmallIcon, {
                                                                              size: 'md',
                                                                              color: 'currentColor',
                                                                              className: N.plusSign
                                                                          }),
                                                                          (0, r.jsx)(d.Text, {
                                                                              variant: 'text-xs/medium',
                                                                              color: 'header-primary',
                                                                              children: A.intl.string(A.t.QqqXLS)
                                                                          })
                                                                      ]
                                                                  }),
                                                            ey && ex()
                                                        ]
                                                    })
                                                ]
                                            });
                                        case I.Pb.PLAY:
                                        default:
                                            return ek();
                                    }
                                })()
                            ]
                        })
                }),
                !U.available &&
                    (0, r.jsx)(d.Tooltip, {
                        text: A.intl.string(A.t.MDOXJS),
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: J ? N.unavailableTooltipRefresh : N.unavailableTooltip,
                                ...e
                            })
                    })
            ]
        })
    );
});
