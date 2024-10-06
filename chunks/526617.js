n.d(t, {
    O: function () {
        return q;
    },
    Z: function () {
        return J;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(239091),
    c = n(788911),
    d = n(2052),
    _ = n(100527),
    E = n(906732),
    f = n(313201),
    h = n(880949),
    p = n(806966),
    I = n(28546),
    m = n(468954),
    T = n(53691),
    S = n(75145),
    g = n(631771),
    A = n(609218),
    N = n(695346),
    O = n(594174),
    R = n(979651),
    v = n(259580),
    C = n(626135),
    L = n(74538),
    y = n(135869),
    D = n(763296),
    b = n(697426),
    M = n(242291),
    P = n(22382),
    U = n(747071),
    w = n(421673),
    x = n(663215),
    G = n(409673),
    k = n(347072),
    B = n(835648),
    F = n(650743),
    V = n(394740),
    H = n(343747),
    Z = n(981631),
    Y = n(474936),
    j = n(689938),
    W = n(185426);
let K = [8, 0, 8, 0],
    z = 32 + S.Kn;
function q(e, t, n) {
    return (null == n && e.type === b.bg.GUILD && !t) || (e.type === b.bg.GUILD && e.guild.id !== n && !t);
}
function Q(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: o, showNitroDivider: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)(S.ZP, {
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
                                    case b.bg.FAVORITES:
                                        return (0, r.jsx)(l.StarIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case b.bg.RECENTLY_HEARD:
                                        return (0, r.jsx)(l.ClockIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case b.bg.FREQUENTLY_USED:
                                        return (0, r.jsx)(l.AnalyticsIcon, { className: W.headerIcon });
                                    case b.bg.GUILD:
                                        return (0, r.jsx)(h.Z, {
                                            guild: t.guild,
                                            height: 16,
                                            width: 16
                                        });
                                    case b.bg.DEFAULTS:
                                        return (0, r.jsx)(l.ClydeIcon, {
                                            size: 'custom',
                                            width: 28,
                                            height: 28,
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case b.bg.SEARCH:
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
                                        case b.bg.FAVORITES:
                                            return j.Z.Messages.FAVORITES;
                                        case b.bg.RECENTLY_HEARD:
                                            return j.Z.Messages.RECENTLY_HEARD;
                                        case b.bg.FREQUENTLY_USED:
                                            return j.Z.Messages.FREQUENTLY_USED;
                                        case b.bg.GUILD:
                                            return t.guild.name;
                                        case b.bg.DEFAULTS:
                                            return j.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                                        case b.bg.SEARCH:
                                            return j.Z.Messages.SEARCH_RESULTS_SECTION_LABEL;
                                    }
                                })()
                            }),
                            (0, r.jsx)(v.Z, {
                                className: W.headerIcon,
                                direction: n ? v.Z.Directions.RIGHT : v.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function X() {
    return (0, r.jsx)(c.Z, { message: j.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY });
}
function $(e) {
    let { descriptors: t, soundButtonProps: n, rowIndex: a, isLastRow: o, isUsingKeyboardNavigation: l, suppressPlaySound: u, gridRowProps: c, getItemProps: d, onSelectItem: _, onItemMouseEnter: E, buttonOverlay: f, isNitroLocked: h, shouldShowUpsell: I, refreshEnabled: m } = e,
        T = p.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, r.jsx)('ul', {
        ...c,
        className: s()(W.soundRow, {
            [W.soundRowNitroLocked]: h,
            [W.lastSoundRow]: o
        }),
        children: t.map((e, t) => {
            let r = 'item-'.concat(t),
                s = l && T.rowIndex === a && T.columnIndex === t;
            switch (e.item.type) {
                case b.vB.SOUND:
                    return (0, i.createElement)(G.ZP, {
                        ...d(t),
                        ...n,
                        key: ''.concat(r, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: u,
                        focused: s,
                        onMouseEnter: () => E(t),
                        onSelectItem: () => _(e),
                        enableSecondaryActions: !0,
                        buttonOverlay: f,
                        inNitroLockedSection: h,
                        showLockForDisabledSound: I,
                        refreshEnabled: m
                    });
                case b.vB.ADD_SOUND:
                    return (0, i.createElement)(k.Z, {
                        ...d(t),
                        key: r,
                        guild: e.item.guild,
                        focused: s,
                        onSelectItem: () => _(e),
                        refreshEnabled: m
                    });
            }
        })
    });
}
function J(e) {
    let { guildId: t, channel: a, containerWidth: s, onClose: c, onSelect: h, suppressPlaySound: S = !1, shouldShowUpsell: v = !0, gridNotice: G, soundButtonOverlay: k, listPadding: J, renderHeader: ee, defaultSoundsOnly: et = !1, inExpressionPicker: en, refreshEnabled: er } = e,
        { currentPreviewRef: ei } = i.useContext(y.Z),
        { analyticsLocations: ea } = (0, E.ZP)(),
        { analyticsLocations: es } = (0, E.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eo } = (0, d.O)(),
        el = i.useMemo(
            () => ({
                ...eo,
                section: Z.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [eo]
        ),
        [eu, ec] = i.useState(null),
        ed = (0, o.e7)([O.default], () => O.default.getCurrentUser()),
        e_ = (0, L.I5)(ed, Y.p9.TIER_2),
        eE = (0, o.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null !== (e = null == ed ? void 0 : ed.id) && void 0 !== e ? e : Z.lds);
        }),
        ef = (null == eE ? void 0 : eE.selfDeaf) || (null == eE ? void 0 : eE.mute) || (null == eE ? void 0 : eE.suppress),
        eh = (0, I.Iu)((e) => e.searchQuery),
        ep = null != eh && '' !== eh,
        eI = (0, f.Dt)(),
        { categories: em } = (0, x.ZP)(a, void 0, et),
        [eT, eS] = i.useState([]),
        [eg, eA] = i.useState(!1),
        eN = (0, x.FS)(em, eT, eh).filter((e) => e.items.length > 0),
        eO = eN.some((e) => !!(0, L._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eR = !e_ && v && eO,
        { enableInlineUpsell: ev, enableRoadblock: eC, enableRoadblockWithSocialProof: eL } = g.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eR }),
        ey = eR && ev,
        eD = N.T4.useSetting(),
        eb = i.useMemo(() => new Set(eD), [eD]),
        eM = null == a,
        eP = L.ZP.canUseCustomCallSounds(ed),
        eU = i.useCallback(
            (e) => {
                eb.has(e) ? eb.delete(e) : eb.add(e), N.T4.updateSetting(Array.from(eb));
            },
            [eb]
        ),
        ew = i.useCallback(
            (e, t) => {
                if (!S && (0, M.Nq)(ed, e, a, !1)) {
                    var n;
                    (0, M.GN)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : Z.lds, t),
                        ep &&
                            C.default.track(Z.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Z.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eh,
                                location_stack: t
                            });
                } else {
                    if ((0, M.Nq)(ed, e, a)) return;
                    v && ec(e);
                }
            },
            [S, ed, a, v, ep, eh]
        ),
        ex = i.useCallback(
            (e) => {
                switch (e.item.type) {
                    case b.vB.SOUND:
                        if (null != h) return h(e.item.sound);
                        return ew(e.item.sound, ea);
                    case b.vB.ADD_SOUND:
                        return c(), (0, H.Z)(e.item.guild.id);
                }
            },
            [ea, ew, c, h]
        ),
        eG = i.useCallback(
            (e, n, i, s, o) => {
                let l = eN[i.sectionIndex],
                    u = v && q(l.categoryInfo, e_, t),
                    c = i.sectionIndex === eN.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    $,
                    {
                        descriptors: e,
                        rowIndex: i.rowIndex,
                        isLastRow: c,
                        isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                        gridRowProps: n,
                        getItemProps: s,
                        onItemMouseEnter: o,
                        suppressPlaySound: S,
                        onSelectItem: ex,
                        soundButtonProps: {
                            channel: a,
                            interactive: eM ? eP : !ef,
                            forceSecondaryActions: eM || ev,
                            analyticsLocations: ea
                        },
                        buttonOverlay: k,
                        isNitroLocked: u && ey,
                        shouldShowUpsell: v,
                        refreshEnabled: er
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eN, v, e_, t, S, ex, a, eM, eP, ef, ev, ea, k, ey, er]
        ),
        ek = i.useCallback(
            (e, t) => {
                if (e <= 0 || !v) return !1;
                let n = eN[e],
                    r = eN[e - 1],
                    i = q(n.categoryInfo, e_, t),
                    a = q(r.categoryInfo, e_, t);
                return i && !a;
            },
            [eN, v, e_]
        ),
        eB = i.useCallback((e) => (0 === e ? 16 : ek(e, t) ? z : 32), [t, ek]),
        eF = i.useCallback(
            (e) => {
                let t = e === eN.length - 1;
                return ey && t ? 60 : 0;
            },
            [eN, ey]
        ),
        eV = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = v && q(e.categoryInfo, e_, t),
                    s = ek(n, t);
                return (0, r.jsx)(
                    Q,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eU(i),
                        collapsed: eb.has(i),
                        index: n,
                        isSectionNitroLocked: a && ey,
                        showNitroDivider: s && ey
                    },
                    'header-'.concat(i)
                );
            },
            [eb, eU, t, ek, v, e_, ey]
        ),
        eH = i.useCallback(
            (e, t) => {
                let n = t === eN.length - 1;
                return ey && n ? (0, r.jsx)('div', { className: W.sectionFooter }) : null;
            },
            [eN, ey]
        ),
        eZ = i.useCallback((e) => eS((0, w.ZP)(e, em, ed, a, ea)), [a, ed, em, ea]),
        eY = i.useCallback((e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        }, []),
        ej = i.useCallback(
            () =>
                (0, r.jsx)(l.Clickable, {
                    tabIndex: 0,
                    className: W.settingsClickArea,
                    onClick: eY,
                    'aria-label': j.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
                    children: (0, r.jsx)(l.VoiceNormalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: W.settingsIcon
                    })
                }),
            [eY]
        ),
        eW = i.useCallback(
            (e) =>
                (0, r.jsx)(B.Z, {
                    soundboardListRef: e,
                    categories: em,
                    shouldUpsellLockedCategories: ey,
                    listPadding: J,
                    guildId: t,
                    inExpressionPicker: en
                }),
            [em, ey, J, t, en]
        ),
        eK = () => {
            let e = D.Z.getSoundById('3');
            null != e && ec(e);
        },
        ez = i.useCallback(() => {
            let e = (0, L.Px)(Y.p9.TIER_2);
            return j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_POPUP_LABEL_V2.format({
                nitroTierName: e,
                onClick: eK
            });
        }, []),
        eq = i.useCallback(
            () =>
                ey
                    ? (0, r.jsx)(T.p, {
                          showUpsell: eg,
                          text: ez(),
                          button: j.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                          buttonAnalyticsObject: { section: Z.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [ez, eg, ey]
        ),
        eQ = i.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === b.vB.SOUND) {
                    var t;
                    return (0, r.jsx)(F.Z, {
                        closePicker: c,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                }
                return null;
            },
            [c]
        ),
        eX = i.useCallback(() => {
            var e;
            let t = D.Z.getSoundById('3'),
                n = new Audio((0, P.Z)('3'));
            null != ei.current && ei.current.pause(), (ei.current = n), (n.currentTime = 0), (n.volume = (0, U.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [ei]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != eu
                ? eC
                    ? (0, r.jsx)(A.Z, {
                          containerContext: A.p.NONE,
                          image: {
                              url: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
                              width: 220,
                              height: 132
                          },
                          title: j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_TITLE,
                          description: j.Z.Messages.PREMIUM_UPSELL_DESKTOP_FEATURE_SOUNDBOARD_DESCRIPTION,
                          enableSocialProof: eL,
                          analyticsLocationSection: Z.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: Y.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: {
                                  ...el,
                                  object: Z.qAy.SOUNDBOARD_SOUND
                              },
                              location_stack: es,
                              sku_id: L.ZP.getSkuIdForPremiumType(Y.p9.TIER_2)
                          },
                          onClose: () => ec(null),
                          onDisplay: eX
                      })
                    : (0, r.jsx)(V.Z, {
                          onClose: () => ec(null),
                          closePopout: c,
                          sound: eu,
                          channel: a
                      })
                : void 0,
            (0, r.jsx)(m.Z, {
                categories: eN,
                collapsedCategories: eb,
                containerWidth: s,
                store: p.Wq,
                onSelectItem: ex,
                onSearchExpressions: eZ,
                hasSearchResults: eT.length > 0,
                defaultSearchPlaceholder: j.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: eG,
                renderSectionHeader: eV,
                renderSectionFooter: eH,
                renderCategoryList: eW,
                renderHeaderAccessories: ej,
                rowHeight: er ? 80 : 48,
                sectionHeaderHeight: eB,
                sectionFooterHeight: eF,
                listPadding: K,
                itemNodeWidth: er ? 102 : 150,
                gridNavigatorId: eI,
                renderEmptySearchState: X,
                renderInspector: eQ,
                gridNotice: G,
                renderHeader: ee,
                renderUpsell: eq,
                setShowUpsell: eA
            })
        ]
    });
}
