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
    y = n(74538),
    L = n(135869),
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
    W = n(477611);
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
    let { guildId: t, channel: a, containerWidth: s, onClose: c, onSelect: h, suppressPlaySound: S = !1, shouldShowUpsell: v = !0, gridNotice: G, soundButtonOverlay: k, listPadding: J, renderHeader: ee, defaultSoundsOnly: et = !1, refreshEnabled: en } = e,
        { currentPreviewRef: er } = i.useContext(L.Z),
        { analyticsLocations: ei } = (0, E.ZP)(),
        { analyticsLocations: ea } = (0, E.ZP)(_.Z.PREMIUM_UPSELL),
        { location: es } = (0, d.O)(),
        eo = i.useMemo(
            () => ({
                ...es,
                section: Z.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [es]
        ),
        [el, eu] = i.useState(null),
        ec = (0, o.e7)([O.default], () => O.default.getCurrentUser()),
        ed = (0, y.I5)(ec, Y.p9.TIER_2),
        e_ = (0, o.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null !== (e = null == ec ? void 0 : ec.id) && void 0 !== e ? e : Z.lds);
        }),
        eE = (null == e_ ? void 0 : e_.selfDeaf) || (null == e_ ? void 0 : e_.mute) || (null == e_ ? void 0 : e_.suppress),
        ef = (0, I.Iu)((e) => e.searchQuery),
        eh = null != ef && '' !== ef,
        ep = (0, f.Dt)(),
        { categories: eI } = (0, x.ZP)(a, void 0, et),
        [em, eT] = i.useState([]),
        [eS, eg] = i.useState(!1),
        eA = (0, x.FS)(eI, em, ef).filter((e) => e.items.length > 0),
        eN = eA.some((e) => !!(0, y._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eO = !ed && v && eN,
        { enableInlineUpsell: eR, enableRoadblock: ev, enableRoadblockWithSocialProof: eC } = g.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eO }),
        ey = eO && eR,
        eL = N.T4.useSetting(),
        eD = i.useMemo(() => new Set(eL), [eL]),
        eb = null == a,
        eM = y.ZP.canUseCustomCallSounds(ec),
        eP = i.useCallback(
            (e) => {
                eD.has(e) ? eD.delete(e) : eD.add(e), N.T4.updateSetting(Array.from(eD));
            },
            [eD]
        ),
        eU = i.useCallback(
            (e, t) => {
                if (!S && (0, M.Nq)(ec, e, a, !1)) {
                    var n;
                    (0, M.GN)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : Z.lds, t),
                        eh &&
                            C.default.track(Z.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Z.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: ef,
                                location_stack: t
                            });
                } else {
                    if ((0, M.Nq)(ec, e, a)) return;
                    v && eu(e);
                }
            },
            [S, ec, a, v, eh, ef]
        ),
        ew = i.useCallback(
            (e) => {
                switch (e.item.type) {
                    case b.vB.SOUND:
                        return null == h || h(e.item.sound), eU(e.item.sound, ei);
                    case b.vB.ADD_SOUND:
                        return c(), (0, H.Z)(e.item.guild.id);
                }
            },
            [ei, eU, c, h]
        ),
        ex = i.useCallback(
            (e, n, i, s, o) => {
                let l = eA[i.sectionIndex],
                    u = v && q(l.categoryInfo, ed, t),
                    c = i.sectionIndex === eA.length - 1 && i.rowIndex === i.totalRowCount - 1;
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
                        onSelectItem: ew,
                        soundButtonProps: {
                            channel: a,
                            interactive: eb ? eM : !eE,
                            forceSecondaryActions: eb || eR,
                            analyticsLocations: ei
                        },
                        buttonOverlay: k,
                        isNitroLocked: u && ey,
                        shouldShowUpsell: v,
                        refreshEnabled: en
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eA, v, ed, t, S, ew, a, eb, eM, eE, eR, ei, k, ey, en]
        ),
        eG = i.useCallback(
            (e, t) => {
                if (e <= 0 || !v) return !1;
                let n = eA[e],
                    r = eA[e - 1],
                    i = q(n.categoryInfo, ed, t),
                    a = q(r.categoryInfo, ed, t);
                return i && !a;
            },
            [eA, v, ed]
        ),
        ek = i.useCallback((e) => (0 === e ? 16 : eG(e, t) ? z : 32), [t, eG]),
        eB = i.useCallback(
            (e) => {
                let t = e === eA.length - 1;
                return ey && t ? 60 : 0;
            },
            [eA, ey]
        ),
        eF = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = v && q(e.categoryInfo, ed, t),
                    s = eG(n, t);
                return (0, r.jsx)(
                    Q,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eP(i),
                        collapsed: eD.has(i),
                        index: n,
                        isSectionNitroLocked: a && ey,
                        showNitroDivider: s && ey
                    },
                    'header-'.concat(i)
                );
            },
            [eD, eP, t, eG, v, ed, ey]
        ),
        eV = i.useCallback(
            (e, t) => {
                let n = t === eA.length - 1;
                return ey && n ? (0, r.jsx)('div', { className: W.sectionFooter }) : null;
            },
            [eA, ey]
        ),
        eH = i.useCallback((e) => eT((0, w.ZP)(e, eI, ec, a, ei)), [a, ec, eI, ei]),
        eZ = i.useCallback((e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        }, []),
        eY = i.useCallback(
            () =>
                (0, r.jsx)(l.Clickable, {
                    tabIndex: 0,
                    className: W.settingsClickArea,
                    onClick: eZ,
                    'aria-label': j.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
                    children: (0, r.jsx)(l.VoiceNormalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: W.settingsIcon
                    })
                }),
            [eZ]
        ),
        ej = i.useCallback(
            (e) =>
                (0, r.jsx)(B.Z, {
                    soundboardListRef: e,
                    categories: eI,
                    shouldUpsellLockedCategories: ey,
                    listPadding: J,
                    guildId: t
                }),
            [eI, J, t, ey]
        ),
        eW = () => {
            let e = D.Z.getSoundById('3');
            null != e && eu(e);
        },
        eK = i.useCallback(() => {
            let e = (0, y.Px)(Y.p9.TIER_2);
            return j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_POPUP_LABEL_V2.format({
                nitroTierName: e,
                onClick: eW
            });
        }, []),
        ez = i.useCallback(
            () =>
                ey
                    ? (0, r.jsx)(T.p, {
                          showUpsell: eS,
                          text: eK(),
                          button: j.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                          buttonAnalyticsObject: { section: Z.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [eK, eS, ey]
        ),
        eq = i.useCallback(
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
        eQ = i.useCallback(() => {
            var e;
            let t = D.Z.getSoundById('3'),
                n = new Audio((0, P.Z)('3'));
            null != er.current && er.current.pause(), (er.current = n), (n.currentTime = 0), (n.volume = (0, U.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [er]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != el
                ? ev
                    ? (0, r.jsx)(A.Z, {
                          containerContext: A.p.NONE,
                          image: {
                              url: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
                              width: 220,
                              height: 132
                          },
                          title: j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_TITLE,
                          description: j.Z.Messages.PREMIUM_UPSELL_DESKTOP_FEATURE_SOUNDBOARD_DESCRIPTION,
                          enableSocialProof: eC,
                          analyticsLocationSection: Z.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: Y.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: {
                                  ...eo,
                                  object: Z.qAy.SOUNDBOARD_SOUND
                              },
                              location_stack: ea,
                              sku_id: y.ZP.getSkuIdForPremiumType(Y.p9.TIER_2)
                          },
                          onClose: () => eu(null),
                          onDisplay: eQ
                      })
                    : (0, r.jsx)(V.Z, {
                          onClose: () => eu(null),
                          closePopout: c,
                          sound: el,
                          channel: a
                      })
                : void 0,
            (0, r.jsx)(m.Z, {
                categories: eA,
                collapsedCategories: eD,
                containerWidth: s,
                store: p.Wq,
                onSelectItem: ew,
                onSearchExpressions: eH,
                hasSearchResults: em.length > 0,
                defaultSearchPlaceholder: j.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: ex,
                renderSectionHeader: eF,
                renderSectionFooter: eV,
                renderCategoryList: ej,
                renderHeaderAccessories: eY,
                rowHeight: en ? 80 : 48,
                sectionHeaderHeight: ek,
                sectionFooterHeight: eB,
                listPadding: K,
                itemNodeWidth: en ? 102 : 150,
                gridNavigatorId: ep,
                renderEmptySearchState: X,
                renderInspector: eq,
                gridNotice: G,
                renderHeader: ee,
                renderUpsell: ez,
                setShowUpsell: eg
            })
        ]
    });
}
