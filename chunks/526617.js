n.d(t, {
    Z: function () {
        return V;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(239091), c = n(788911), d = n(906732), _ = n(880949), E = n(806966), f = n(28546), h = n(468954), p = n(695346), m = n(594174), I = n(979651), T = n(153124), g = n(259580), S = n(626135), A = n(74538), N = n(697426), v = n(242291), O = n(421673), R = n(663215), C = n(409673), y = n(347072), D = n(835648), L = n(650743), b = n(394740), M = n(343747), P = n(981631), U = n(689938), w = n(938594);
let x = [
    8,
    0,
    8,
    8
];
function G(e) {
    return 0 === e ? 16 : 32;
}
function k(e) {
    let {
        categoryInfo: t,
        collapsed: n,
        toggleCollapsed: i,
        index: a
    } = e;
    return (0, r.jsx)('div', {
        className: w.sectionContainer,
        children: (0, r.jsx)(l.Clickable, {
            className: o()(w.sectionHeader, { [w.notFirstSectionHeader]: 0 !== a }),
            onClick: i,
            'aria-expanded': !n,
            children: (0, r.jsxs)('div', {
                className: w.sectionHeaderContent,
                children: [
                    function () {
                        switch (t.type) {
                        case N.bg.FAVORITES:
                            return (0, r.jsx)(l.StarIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: w.headerIcon
                            });
                        case N.bg.RECENTLY_HEARD:
                            return (0, r.jsx)(l.ClockIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                color: 'currentColor',
                                className: w.headerIcon
                            });
                        case N.bg.FREQUENTLY_USED:
                            return (0, r.jsx)(l.AnalyticsIcon, { className: w.headerIcon });
                        case N.bg.GUILD:
                            return (0, r.jsx)(_.Z, {
                                guild: t.guild,
                                height: 16,
                                width: 16
                            });
                        case N.bg.DEFAULTS:
                            return (0, r.jsx)(l.ClydeIcon, {
                                size: 'custom',
                                width: 28,
                                height: 28,
                                color: 'currentColor',
                                className: w.headerIcon
                            });
                        case N.bg.SEARCH:
                            return (0, r.jsx)(l.MagnifyingGlassIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: w.headerIcon
                            });
                        }
                    }(),
                    (0, r.jsx)(l.Heading, {
                        variant: 'eyebrow',
                        color: 'none',
                        className: w.sectionTitle,
                        children: function () {
                            switch (t.type) {
                            case N.bg.FAVORITES:
                                return U.Z.Messages.FAVORITES;
                            case N.bg.RECENTLY_HEARD:
                                return U.Z.Messages.RECENTLY_HEARD;
                            case N.bg.FREQUENTLY_USED:
                                return U.Z.Messages.FREQUENTLY_USED;
                            case N.bg.GUILD:
                                return t.guild.name;
                            case N.bg.DEFAULTS:
                                return U.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                            case N.bg.SEARCH:
                                return U.Z.Messages.SEARCH_RESULTS_SECTION_LABEL;
                            }
                        }()
                    }),
                    (0, r.jsx)(g.Z, {
                        className: w.headerIcon,
                        direction: n ? g.Z.Directions.RIGHT : g.Z.Directions.DOWN
                    })
                ]
            })
        })
    });
}
function B() {
    return (0, r.jsx)(c.Z, { message: U.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY });
}
function F(e) {
    let {
            descriptors: t,
            soundButtonProps: n,
            rowIndex: a,
            isUsingKeyboardNavigation: o,
            suppressPlaySound: s,
            gridRowProps: l,
            getItemProps: u,
            onSelectItem: c,
            onItemMouseEnter: d,
            buttonOverlay: _
        } = e, f = E.Wq.useStore(e => e.inspectedExpressionPosition);
    return (0, r.jsx)('ul', {
        ...l,
        className: w.soundRow,
        children: t.map((e, t) => {
            let r = 'item-'.concat(t), l = o && f.rowIndex === a && f.columnIndex === t;
            switch (e.item.type) {
            case N.vB.SOUND:
                return (0, i.createElement)(C.ZP, {
                    ...u(t),
                    ...n,
                    key: ''.concat(r, '-').concat(e.item.sound.soundId),
                    sound: e.item.sound,
                    suppressPlaySound: s,
                    focused: l,
                    onMouseEnter: () => d(t),
                    onSelectItem: () => c(e),
                    enableSecondaryActions: !0,
                    buttonOverlay: _
                });
            case N.vB.ADD_SOUND:
                return (0, i.createElement)(y.Z, {
                    ...u(t),
                    key: r,
                    guild: e.item.guild,
                    focused: l
                });
            }
        })
    });
}
function V(e) {
    let {
            guildId: t,
            channel: a,
            containerWidth: o,
            onClose: c,
            onSelect: _,
            suppressPlaySound: g = !1,
            shouldShowUpsell: C = !0,
            gridNotice: y,
            soundButtonOverlay: V,
            listPadding: H,
            renderHeader: Z,
            defaultSoundsOnly: Y = !1
        } = e, {analyticsLocations: j} = (0, d.ZP)(), [W, K] = i.useState(null), z = (0, s.e7)([m.default], () => m.default.getCurrentUser()), q = (0, s.e7)([I.Z], () => {
            var e;
            return I.Z.getVoiceState(t, null !== (e = null == z ? void 0 : z.id) && void 0 !== e ? e : P.lds);
        }), Q = (null == q ? void 0 : q.selfDeaf) || (null == q ? void 0 : q.mute) || (null == q ? void 0 : q.suppress), X = (0, f.Iu)(e => e.searchQuery), $ = (0, T.Dt)(), {categories: J} = (0, R.ZP)(a, void 0, Y), [ee, et] = i.useState([]), en = (0, R.FS)(J, ee, X), er = p.T4.useSetting(), ei = i.useMemo(() => new Set(er), [er]), ea = null == a, eo = A.ZP.canUseCustomCallSounds(z), es = i.useCallback(e => {
            ei.has(e) ? ei.delete(e) : ei.add(e), p.T4.updateSetting(Array.from(ei));
        }, [ei]), el = i.useCallback((e, t) => {
            if (!g && (0, v.Nq)(z, e, a, !1)) {
                var n;
                (0, v.GN)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : P.lds, t), null != X && '' !== X && S.default.track(P.rMx.SEARCH_RESULT_SELECTED, {
                    search_type: P.aib.SOUNDBOARD,
                    channel_id: null == a ? void 0 : a.id,
                    query: X,
                    location_stack: t
                });
            } else {
                if ((0, v.Nq)(z, e, a))
                    return;
                C && K(e);
            }
        }, [
            g,
            z,
            a,
            C,
            X
        ]), eu = i.useCallback(e => {
            switch (e.item.type) {
            case N.vB.SOUND:
                return null == _ || _(e.item.sound), el(e.item.sound, j);
            case N.vB.ADD_SOUND:
                return (0, M.Z)(e.item.guild.id);
            }
        }, [
            j,
            el,
            _
        ]), ec = i.useCallback((e, t, n, i, o) => (0, r.jsx)(F, {
            descriptors: e,
            rowIndex: n.rowIndex,
            isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
            gridRowProps: t,
            getItemProps: i,
            onItemMouseEnter: o,
            suppressPlaySound: g,
            onSelectItem: eu,
            soundButtonProps: {
                channel: a,
                interactive: ea ? eo : !Q,
                forceSecondaryActions: ea,
                analyticsLocations: j
            },
            buttonOverlay: V
        }, 'row-'.concat(t['aria-rowindex'])), [
            eu,
            a,
            Q,
            g,
            j,
            ea,
            eo,
            V
        ]), ed = i.useCallback((e, t) => {
            let n = ''.concat(e.key);
            return (0, r.jsx)(k, {
                categoryInfo: e.categoryInfo,
                toggleCollapsed: () => es(n),
                collapsed: ei.has(n),
                index: t
            }, 'header-'.concat(n));
        }, [
            ei,
            es
        ]), e_ = i.useCallback(e => et((0, O.ZP)(e, J, z, a, j)), [
            a,
            z,
            J,
            j
        ]), eE = i.useCallback(e => {
            (0, u.jW)(e, async () => {
                let {default: e} = await n.e('56049').then(n.bind(n, 338991));
                return t => (0, r.jsx)(e, { ...t });
            });
        }, []), ef = i.useCallback(() => (0, r.jsx)(l.Clickable, {
            tabIndex: 0,
            className: w.settingsClickArea,
            onClick: eE,
            'aria-label': U.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
            children: (0, r.jsx)(l.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: w.settingsIcon
            })
        }), [eE]), eh = i.useCallback(e => (0, r.jsx)(D.Z, {
            soundboardListRef: e,
            categories: J,
            listPadding: H
        }), [
            J,
            H
        ]), ep = i.useCallback(e => {
            if ((null == e ? void 0 : e.item.type) === N.vB.SOUND) {
                var t;
                return (0, r.jsx)(L.Z, {
                    closePicker: c,
                    soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                });
            }
            return null;
        }, [c]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != W && (0, r.jsx)(b.Z, {
                onClose: () => K(null),
                closePopout: c,
                sound: W,
                channel: a
            }),
            (0, r.jsx)(h.Z, {
                categories: en,
                collapsedCategories: ei,
                containerWidth: o,
                store: E.Wq,
                onSelectItem: eu,
                onSearchExpressions: e_,
                hasSearchResults: ee.length > 0,
                defaultSearchPlaceholder: U.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: ec,
                renderSectionHeader: ed,
                renderCategoryList: eh,
                renderHeaderAccessories: ef,
                rowHeight: 48,
                sectionHeaderHeight: G,
                listPadding: x,
                itemNodeWidth: 150,
                gridNavigatorId: $,
                renderEmptySearchState: B,
                renderInspector: ep,
                gridNotice: y,
                renderHeader: Z
            })
        ]
    });
}
