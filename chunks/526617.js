n.d(t, {
    O: function () {
        return q;
    },
    Z: function () {
        return $;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(239091),
    c = n(788911),
    d = n(2052),
    f = n(100527),
    _ = n(906732),
    h = n(313201),
    p = n(880949),
    m = n(806966),
    g = n(28546),
    E = n(468954),
    v = n(53691),
    I = n(75145),
    S = n(631771),
    T = n(609218),
    b = n(695346),
    y = n(594174),
    A = n(979651),
    N = n(259580),
    C = n(626135),
    R = n(74538),
    O = n(135869),
    D = n(763296),
    L = n(697426),
    x = n(242291),
    w = n(22382),
    M = n(747071),
    P = n(421673),
    k = n(663215),
    U = n(409673),
    G = n(347072),
    B = n(835648),
    Z = n(650743),
    F = n(394740),
    V = n(343747),
    j = n(981631),
    H = n(474936),
    Y = n(388032),
    W = n(185426);
let K = [8, 0, 8, 0],
    z = 32 + I.Kn;
function q(e, t, n) {
    return (null == n && e.type === L.bg.GUILD && !t) || (e.type === L.bg.GUILD && e.guild.id !== n && !t);
}
function Q(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: o, showNitroDivider: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)(I.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, r.jsx)('div', {
                className: s()(W.sectionContainer, { [W.sectionContainerNitroLocked]: o }),
                children: (0, r.jsx)(l.Clickable, {
                    className: s()(W.sectionHeader, { [W.notFirstSectionHeader]: 0 !== a }),
                    onClick: i,
                    'aria-expanded': !n,
                    children: (0, r.jsxs)('div', {
                        className: W.sectionHeaderContent,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case L.bg.FAVORITES:
                                        return (0, r.jsx)(l.StarIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case L.bg.RECENTLY_HEARD:
                                        return (0, r.jsx)(l.ClockIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case L.bg.FREQUENTLY_USED:
                                        return (0, r.jsx)(l.AnalyticsIcon, { className: W.headerIcon });
                                    case L.bg.GUILD:
                                        return (0, r.jsx)(p.Z, {
                                            guild: t.guild,
                                            height: 16,
                                            width: 16
                                        });
                                    case L.bg.DEFAULTS:
                                        return (0, r.jsx)(l.ClydeIcon, {
                                            size: 'custom',
                                            width: 28,
                                            height: 28,
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case L.bg.SEARCH:
                                        return (0, r.jsx)(l.MagnifyingGlassIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                }
                            })(),
                            (0, r.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: W.sectionTitle,
                                children: (function () {
                                    switch (t.type) {
                                        case L.bg.FAVORITES:
                                            return Y.intl.string(Y.t.k8fFjo);
                                        case L.bg.RECENTLY_HEARD:
                                            return Y.intl.string(Y.t['8i/+SE']);
                                        case L.bg.FREQUENTLY_USED:
                                            return Y.intl.string(Y.t['+cGVV1']);
                                        case L.bg.GUILD:
                                            return t.guild.name;
                                        case L.bg.DEFAULTS:
                                            return Y.intl.string(Y.t.Rtvk9f);
                                        case L.bg.SEARCH:
                                            return Y.intl.string(Y.t.zkoeq6);
                                    }
                                })()
                            }),
                            (0, r.jsx)(N.Z, {
                                className: W.headerIcon,
                                direction: n ? N.Z.Directions.RIGHT : N.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function X() {
    return (0, r.jsx)(c.Z, { message: Y.intl.string(Y.t.bgDdND) });
}
function J(e) {
    let { descriptors: t, soundButtonProps: n, rowIndex: a, isLastRow: o, isUsingKeyboardNavigation: l, suppressPlaySound: u, gridRowProps: c, getItemProps: d, onSelectItem: f, onItemMouseEnter: _, buttonOverlay: h, isNitroLocked: p, shouldShowUpsell: g, refreshEnabled: E } = e,
        v = m.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, r.jsx)('ul', {
        ...c,
        className: s()(W.soundRow, {
            [W.soundRowNitroLocked]: p,
            [W.lastSoundRow]: o
        }),
        children: t.map((e, t) => {
            let r = 'item-'.concat(t),
                s = l && v.rowIndex === a && v.columnIndex === t;
            switch (e.item.type) {
                case L.vB.SOUND:
                    return (0, i.createElement)(U.ZP, {
                        ...d(t),
                        ...n,
                        key: ''.concat(r, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: u,
                        focused: s,
                        onMouseEnter: () => _(t),
                        onSelectItem: () => f(e),
                        enableSecondaryActions: !0,
                        buttonOverlay: h,
                        inNitroLockedSection: p,
                        showLockForDisabledSound: g,
                        refreshEnabled: E
                    });
                case L.vB.ADD_SOUND:
                    return (0, i.createElement)(G.Z, {
                        ...d(t),
                        key: r,
                        guild: e.item.guild,
                        focused: s,
                        onSelectItem: () => f(e),
                        refreshEnabled: E
                    });
            }
        })
    });
}
function $(e) {
    let { guildId: t, channel: a, containerWidth: s, onClose: c, onSelect: p, shouldValidateSelectedSound: I = !1, suppressPlaySound: N = !1, shouldShowUpsell: U = !0, gridNotice: G, soundButtonOverlay: $, listPadding: ee, renderHeader: et, defaultSoundsOnly: en = !1, inExpressionPicker: er, refreshEnabled: ei } = e,
        { currentPreviewRef: ea } = i.useContext(O.Z),
        { analyticsLocations: es } = (0, _.ZP)(),
        { analyticsLocations: eo } = (0, _.ZP)(f.Z.PREMIUM_UPSELL),
        { location: el } = (0, d.O)(),
        eu = i.useMemo(
            () => ({
                ...el,
                section: j.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [el]
        ),
        [ec, ed] = i.useState(null),
        ef = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        e_ = (0, R.I5)(ef, H.p9.TIER_2),
        eh = (0, o.e7)([A.Z], () => {
            var e;
            return A.Z.getVoiceState(t, null !== (e = null == ef ? void 0 : ef.id) && void 0 !== e ? e : j.lds);
        }),
        ep = (null == eh ? void 0 : eh.selfDeaf) || (null == eh ? void 0 : eh.mute) || (null == eh ? void 0 : eh.suppress),
        em = (0, g.Iu)((e) => e.searchQuery),
        eg = null != em && '' !== em,
        eE = (0, h.Dt)(),
        { categories: ev } = (0, k.ZP)(a, void 0, en),
        [eI, eS] = i.useState([]),
        [eT, eb] = i.useState(!1),
        ey = (0, k.FS)(ev, eI, em).filter((e) => e.items.length > 0),
        eA = ey.some((e) => !!(0, R._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eN = !e_ && U && eA,
        { enableInlineUpsell: eC, enableRoadblock: eR, enableRoadblockWithSocialProof: eO } = S.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eN }),
        eD = eN && eC,
        eL = b.T4.useSetting(),
        ex = i.useMemo(() => new Set(eL), [eL]),
        ew = null == a,
        eM = R.ZP.canUseCustomCallSounds(ef),
        eP = i.useCallback(
            (e) => {
                ex.has(e) ? ex.delete(e) : ex.add(e), b.T4.updateSetting(Array.from(ex));
            },
            [ex]
        ),
        ek = i.useCallback(
            (e, t) => {
                if (null != p && !I) return p(e);
                let n = (0, x.Nq)(ef, e, a, !1);
                if (null != p && I && n) p(e);
                else if (!N && n) {
                    var r;
                    (0, x.GN)(e, null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : j.lds, t),
                        eg &&
                            C.default.track(j.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: j.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: em,
                                location_stack: t
                            });
                } else {
                    if ((0, x.Nq)(ef, e, a)) return;
                    U && ed(e);
                }
            },
            [N, ef, a, U, eg, em, p, I]
        ),
        eU = i.useCallback(
            (e) => {
                switch (e.item.type) {
                    case L.vB.SOUND:
                        return ek(e.item.sound, es);
                    case L.vB.ADD_SOUND:
                        return c(), (0, V.Z)(e.item.guild.id);
                }
            },
            [es, ek, c]
        ),
        eG = i.useCallback(
            (e, n, i, s, o) => {
                let l = ey[i.sectionIndex],
                    u = U && q(l.categoryInfo, e_, t),
                    c = i.sectionIndex === ey.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    J,
                    {
                        descriptors: e,
                        rowIndex: i.rowIndex,
                        isLastRow: c,
                        isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                        gridRowProps: n,
                        getItemProps: s,
                        onItemMouseEnter: o,
                        suppressPlaySound: N,
                        onSelectItem: eU,
                        soundButtonProps: {
                            channel: a,
                            interactive: ew ? eM : !ep,
                            forceSecondaryActions: ew || eC,
                            analyticsLocations: es
                        },
                        buttonOverlay: $,
                        isNitroLocked: u && eD,
                        shouldShowUpsell: U,
                        refreshEnabled: ei
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [ey, U, e_, t, N, eU, a, ew, eM, ep, eC, es, $, eD, ei]
        ),
        eB = i.useCallback(
            (e, t) => {
                if (e <= 0 || !U) return !1;
                let n = ey[e],
                    r = ey[e - 1],
                    i = q(n.categoryInfo, e_, t),
                    a = q(r.categoryInfo, e_, t);
                return i && !a;
            },
            [ey, U, e_]
        ),
        eZ = i.useCallback((e) => (0 === e ? 16 : eB(e, t) ? z : 32), [t, eB]),
        eF = i.useCallback(
            (e) => {
                let t = e === ey.length - 1;
                return eD && t ? 60 : 0;
            },
            [ey, eD]
        ),
        eV = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = U && q(e.categoryInfo, e_, t),
                    s = eB(n, t);
                return (0, r.jsx)(
                    Q,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eP(i),
                        collapsed: ex.has(i),
                        index: n,
                        isSectionNitroLocked: a && eD,
                        showNitroDivider: s && eD
                    },
                    'header-'.concat(i)
                );
            },
            [ex, eP, t, eB, U, e_, eD]
        ),
        ej = i.useCallback(
            (e, t) => {
                let n = t === ey.length - 1;
                return eD && n ? (0, r.jsx)('div', { className: W.sectionFooter }) : null;
            },
            [ey, eD]
        ),
        eH = i.useCallback((e) => eS((0, P.ZP)(e, ev, ef, a, es)), [a, ef, ev, es]),
        eY = i.useCallback((e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        }, []),
        eW = i.useCallback(
            () =>
                (0, r.jsx)(l.Clickable, {
                    tabIndex: 0,
                    className: W.settingsClickArea,
                    onClick: eY,
                    'aria-label': Y.intl.string(Y.t.kbFsAA),
                    children: (0, r.jsx)(l.VoiceNormalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: W.settingsIcon
                    })
                }),
            [eY]
        ),
        eK = i.useCallback(
            (e) =>
                (0, r.jsx)(B.Z, {
                    soundboardListRef: e,
                    categories: ev,
                    shouldUpsellLockedCategories: eD,
                    listPadding: ee,
                    guildId: t,
                    inExpressionPicker: er
                }),
            [ev, eD, ee, t, er]
        ),
        ez = () => {
            let e = D.Z.getSoundById('3');
            null != e && ed(e);
        },
        eq = i.useCallback(() => {
            let e = (0, R.Px)(H.p9.TIER_2);
            return Y.intl.format(Y.t['tw/SSk'], {
                nitroTierName: e,
                onClick: ez
            });
        }, []),
        eQ = i.useCallback(
            () =>
                eD
                    ? (0, r.jsx)(v.p, {
                          showUpsell: eT,
                          text: eq(),
                          button: Y.intl.string(Y.t.pj0XBA),
                          buttonAnalyticsObject: { section: j.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [eq, eT, eD]
        ),
        eX = i.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === L.vB.SOUND) {
                    var t;
                    return (0, r.jsx)(Z.Z, {
                        closePicker: c,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                }
                return null;
            },
            [c]
        ),
        eJ = i.useCallback(() => {
            var e;
            let t = D.Z.getSoundById('3'),
                n = new Audio((0, w.Z)('3'));
            null != ea.current && ea.current.pause(), (ea.current = n), (n.currentTime = 0), (n.volume = (0, M.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [ea]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != ec
                ? eR
                    ? (0, r.jsx)(T.Z, {
                          containerContext: T.p.NONE,
                          image: {
                              url: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
                              width: 220,
                              height: 132
                          },
                          title: Y.intl.string(Y.t.jGDYFx),
                          description: Y.intl.string(Y.t['grL/ho']),
                          enableSocialProof: eO,
                          analyticsLocationSection: j.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: H.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: {
                                  ...eu,
                                  object: j.qAy.SOUNDBOARD_SOUND
                              },
                              location_stack: eo,
                              sku_id: R.ZP.getSkuIdForPremiumType(H.p9.TIER_2)
                          },
                          onClose: () => ed(null),
                          onDisplay: eJ
                      })
                    : (0, r.jsx)(F.Z, {
                          onClose: () => ed(null),
                          closePopout: c,
                          sound: ec,
                          channel: a
                      })
                : void 0,
            (0, r.jsx)(E.Z, {
                categories: ey,
                collapsedCategories: ex,
                containerWidth: s,
                store: m.Wq,
                onSelectItem: eU,
                onSearchExpressions: eH,
                hasSearchResults: eI.length > 0,
                defaultSearchPlaceholder: Y.intl.string(Y.t.sKt3xc),
                renderRow: eG,
                renderSectionHeader: eV,
                renderSectionFooter: ej,
                renderCategoryList: eK,
                renderHeaderAccessories: eW,
                rowHeight: ei ? 80 : 48,
                sectionHeaderHeight: eZ,
                sectionFooterHeight: eF,
                listPadding: K,
                itemNodeWidth: ei ? 102 : 150,
                gridNavigatorId: eE,
                renderEmptySearchState: X,
                renderInspector: eX,
                gridNotice: G,
                renderHeader: et,
                renderUpsell: eQ,
                setShowUpsell: eb
            })
        ]
    });
}
