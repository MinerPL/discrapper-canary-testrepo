n.d(t, {
    K_: function () {
        return y;
    },
    hU: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(846519),
    c = n(692547),
    d = n(481060),
    _ = n(596454),
    E = n(607070),
    f = n(745510),
    h = n(806966),
    p = n(631771),
    I = n(594174),
    m = n(208049),
    T = n(763296),
    S = n(697426),
    g = n(242291),
    A = n(706667),
    N = n(286654),
    O = n(675654),
    R = n(689938),
    v = n(573035);
function C(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: o = 'top', refreshEnabled: l = !1 } = e;
    return (0, r.jsx)(d.Tooltip, {
        text: i,
        position: o,
        children: (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                'aria-label': i,
                className: s()(l ? v.secondaryButtonRefresh : v.secondaryButton, { [v.buttonDisabled]: t }),
                onClick: n,
                children: a
            })
    });
}
function y(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top', refreshEnabled: s = !1 } = e;
    return (0, r.jsx)(C, {
        tooltipPosition: a,
        disabled: i,
        onClick: function (e) {
            e.stopPropagation(), e.currentTarget.blur(), n();
        },
        text: R.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: s,
        children: (0, r.jsx)(d.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: v.secondaryIcon
        })
    });
}
t.ZP = i.forwardRef(function (e, t) {
    var n, a, L, D, b, M, P, U, w, x;
    let { sound: G, channel: k, className: B, focused: F, forceSecondaryActions: V = !1, interactive: H = !0, enableSecondaryActions: Z = !1, suppressPlaySound: Y, onMouseEnter: j, onSelectItem: W, analyticsLocations: K, buttonOverlay: z = S.Pb.PLAY, showLockForDisabledSound: q = !0, inNitroLockedSection: Q = !1, refreshEnabled: X = !1, ...$ } = e,
        { soundId: J, name: ee, emojiId: et, emojiName: en } = G,
        er = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        ei = (0, N.z)(G, null == k ? void 0 : k.guild_id),
        { playSoundboardSound: ea, previewSound: es, isPlayingSound: eo, isPreviewingSound: el } = (0, A.Z)(G, null !== (D = null == k ? void 0 : k.id) && void 0 !== D ? D : null),
        { createMultipleConfettiAt: eu } = i.useContext(f.h),
        ec = i.useRef(null);
    let ed =
            ((w = G.soundId),
            (x = ec.current),
            i.useMemo(() => {
                if (null == x || '1' !== w)
                    return {
                        x: 0,
                        y: 0
                    };
                let e = x.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                };
            }, [x, w])),
        e_ = (0, l.e7)([E.Z], () => E.Z.useReducedMotion),
        eE = i.useRef(0.01),
        ef = i.useRef(new u.Xp()),
        eh = '1' === G.soundId,
        ep = (0, l.e7)([T.Z], () => T.Z.isFavoriteSound(J), [J]),
        eI = 'sound-'.concat(G.soundId),
        em = (0, o.JA)(eI),
        eT = null != et || null != en,
        eS = !(0, g.Nq)(er, G, k),
        eg = V || (Z && !eS),
        eA = i.useRef(null),
        eN = (null !== (b = null === (n = eA.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== b ? b : 0) > (null !== (M = null === (a = eA.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== M ? M : 0),
        eO = null !== (P = h.Wq.useStore().bottomPosition) && void 0 !== P ? P : 0,
        eR = null !== (U = null === (L = ec.current) || void 0 === L ? void 0 : L.getBoundingClientRect().bottom) && void 0 !== U ? U : 0,
        ev = eS && q,
        { enableInlineUpsell: eC } = p.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: ev });
    function ey(e) {
        e.stopPropagation(), e.currentTarget.blur(), ep ? (0, m.hs)(J) : (0, m.TB)(J);
    }
    function eL() {
        return (0, r.jsx)(C, {
            disabled: !H && !V,
            onClick: ey,
            text: (ep ? R.Z.Messages.SOUNDBOARD_SOUND_UNFAVORITE_SOUND : R.Z.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND).format({
                emojiName: G.emojiName,
                soundName: G.name
            }),
            refreshEnabled: X,
            children: ep
                ? (0, r.jsx)(d.StarIcon, {
                      size: 'xs',
                      className: s()(v.secondaryIcon, v.favoriteIconFavorite),
                      color: c.Z.unsafe_rawColors.GOLD.css
                  })
                : (0, r.jsx)(d.StarOutlineIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: v.secondaryIcon
                  })
        });
    }
    function eD() {
        if ((eh && !e_ && ((eE.current = Math.min(eE.current + 0.01, 0.1)), Math.random() < eE.current && eu(ed.x, ed.y, void 0, void 0, { sprite: O.vv })), null != W)) {
            W();
            return;
        }
        Y || ea(K);
    }
    let eb = y({
            sound: G,
            previewSound: es,
            disabled: eS && !V,
            refreshEnabled: X
        }),
        eM = (e) =>
            Y || eS || X
                ? eS && q && eC
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(X ? v.primaryIconRefresh : v.primaryIcon, v.lockIcon, e, { [v.hasEmoji]: eT })
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(v.primaryIcon, e)
                  }),
        eP = () =>
            eC && eS && q && !Q
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: v.buttonOverlayBackground }),
                          eM(v.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: v.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: X ? v.buttonOverlayActionsRefresh : v.buttonOverlayActions,
                                  children: [eg && eb, eg && eL()]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: v.buttonOverlay,
                      children: [
                          !X && (0, r.jsx)('div', { className: s()({ [v.buttonOverlayBackground]: !Y }) }),
                          (0, r.jsxs)('div', {
                              className: X ? v.buttonOverlayActionsRefresh : v.buttonOverlayActions,
                              children: [eg && eb, eM(), eg && eL()]
                          })
                      ]
                  });
    return (
        i.useEffect(() => {
            let e = ef.current;
            return (
                eh &&
                    e.start(1000, () => {
                        eE.current = Math.max(eE.current - 0.01, 0.01);
                    }),
                () => e.stop()
            );
        }, [eh]),
        (0, r.jsxs)('li', {
            ref: t,
            className: v.soundButtonWrapper,
            onMouseEnter: j,
            children: [
                (0, r.jsx)(d.Tooltip, {
                    text: G.name,
                    position: eR + 50 > eO ? 'top' : 'bottom',
                    children: (e) =>
                        (0, r.jsxs)(d.ClickableContainer, {
                            ...$,
                            buttonProps: {
                                ...em,
                                id: eI,
                                role: 'button'
                            },
                            'aria-label': R.Z.Messages.SOUNDBOARD_PLAY_SOUND.format({
                                emojiName: G.emojiName,
                                soundName: G.name
                            }),
                            className: s()(B, X ? v.soundButtonRefresh : v.soundButton, {
                                [v.playing]: eo,
                                [v.previewing]: el,
                                [v.hoverActiveBackground]: Y && !X,
                                [v.soundButtonInteractive]: H && !X,
                                [v.soundButtonInteractiveRefresh]: H && X,
                                [v.buttonDisabled]: !H && !V,
                                [v.premiumDisabled]: eS && !V,
                                [v.premiumDisabledRefresh]: eS && X,
                                [v.buttonDisabledSecondaryActionsEnabled]: !H && V,
                                [v.focused]: H && F
                            }),
                            ...e,
                            onClick: eD,
                            onContextMenu: Z && !eS ? ei : void 0,
                            onMouseOver: () => {
                                var t;
                                return eN && X ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(X ? v.soundInfoRefresh : v.soundInfo, { [v.hasEmoji]: eT }),
                                    'aria-hidden': !0,
                                    ref: ec,
                                    children: [
                                        eT &&
                                            (X
                                                ? (0, r.jsx)('div', {
                                                      className: v.emojiCircle,
                                                      children: (0, r.jsx)(_.Z, {
                                                          emojiId: et,
                                                          emojiName: en,
                                                          className: v.emoji
                                                      })
                                                  })
                                                : (0, r.jsx)(_.Z, {
                                                      emojiId: et,
                                                      emojiName: en,
                                                      className: v.emoji
                                                  })),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: H ? void 0 : 'text-muted',
                                            className: s()(X ? v.soundNameRefresh : v.soundName, { [v.hasEmoji]: eT }),
                                            ref: eA,
                                            children: ee
                                        })
                                    ]
                                }),
                                (function () {
                                    switch (z) {
                                        case S.Pb.ADD:
                                            return (0, r.jsxs)('div', {
                                                className: v.addButtonOverlay,
                                                children: [
                                                    (0, r.jsx)('div', { className: v.buttonOverlayBackground }),
                                                    (0, r.jsxs)('div', {
                                                        className: X ? v.buttonOverlayActionsRefresh : v.buttonOverlayActions,
                                                        children: [
                                                            eb,
                                                            X
                                                                ? (0, r.jsx)('div', {
                                                                      className: v.primaryIconRefresh,
                                                                      children: (0, r.jsx)(d.PlusLargeIcon, {
                                                                          size: 'md',
                                                                          color: 'currentColor',
                                                                          className: v.plusSign
                                                                      })
                                                                  })
                                                                : (0, r.jsxs)('div', {
                                                                      className: v.addButton,
                                                                      children: [
                                                                          (0, r.jsx)(d.PlusSmallIcon, {
                                                                              size: 'md',
                                                                              color: 'currentColor',
                                                                              className: v.plusSign
                                                                          }),
                                                                          (0, r.jsx)(d.Text, {
                                                                              variant: 'text-xs/medium',
                                                                              color: 'header-primary',
                                                                              children: R.Z.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                                                          })
                                                                      ]
                                                                  }),
                                                            eg && eL()
                                                        ]
                                                    })
                                                ]
                                            });
                                        case S.Pb.PLAY:
                                        default:
                                            return eP();
                                    }
                                })()
                            ]
                        })
                }),
                !G.available &&
                    (0, r.jsx)(d.Tooltip, {
                        text: R.Z.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: X ? v.unavailableTooltipRefresh : v.unavailableTooltip,
                                ...e
                            })
                    })
            ]
        })
    );
});
