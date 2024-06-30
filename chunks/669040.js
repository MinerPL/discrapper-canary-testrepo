n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(392711), l = n.n(s), u = n(920906), c = n(873546), d = n(442837), _ = n(946188), E = n(477690), f = n(481060), h = n(788911), p = n(2052), m = n(607070), I = n(906732), T = n(806966), g = n(28546), S = n(691251), A = n(98528), N = n(551058), v = n(536442), O = n(104494), R = n(639119), C = n(75145), y = n(197115), D = n(631771), L = n(695346), b = n(594174), M = n(672752), P = n(695464), U = n(626135), w = n(111361), x = n(74538), G = n(624138), k = n(543241), B = n(883661), F = n(880949), V = n(784222), H = n(172800), Z = n(149203), Y = n(981631), j = n(957825), W = n(474936), K = n(689938), z = n(935879);
let q = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP), Q = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT), X = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM), $ = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP), J = (0, G.Mg)(E.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT), ee = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM), et = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL), en = e => e + 2 * et, er = e => {
        let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: a,
                emojiSize: s,
                onEmojiSelect: u,
                searchQuery: c,
                sectionDescriptors: E,
                setCollapsedSections: f,
                getEmojiItemProps: h,
                getEmojiRowProps: m,
                isScrolling: I,
                isUsingKeyboardNavigation: g,
                allowAnimatedEmoji: A,
                channelGuildId: O,
                messageId: R,
                isBurstReaction: y,
                listHeaderClassName: D,
                activeSectionIndex: L,
                upsellGlowOpacity: b
            } = e, M = (0, p.O)(), P = i.useRef(Y.xAR), w = i.useMemo(() => '' !== n ? _.Z.convert.toCodePoint(n) : '', [n]), x = i.useCallback(e => {
                let t = E[e], n = E[e + 1];
                return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
            }, [E]), G = i.useCallback(e => {
                if (e >= E.length - 1)
                    return !1;
                let t = E[e], n = E[e + 1];
                return !t.isNitroLocked && n.isNitroLocked;
            }, [E]), W = i.useCallback(function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = new Set(t), i = t.has(e);
                i ? r.delete(e) : r.add(e), null != n && U.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: M.location,
                    tab: j.X1.EMOJI,
                    collapsed: !i,
                    guild_id: n.id
                }), f(r);
            }, [
                M,
                t,
                f
            ]), K = i.useCallback(e => {
                let {
                        columnIndex: t,
                        visibleRowIndex: n
                    } = e, r = e.type === V.ld.EMOJI ? e.emoji.allNamesString : e.name;
                P.current !== Y.xAR && window.cancelAnimationFrame(P.current), P.current = window.requestAnimationFrame(() => {
                    T.kJ.setInspectedExpressionPosition(t, n, S.u.MOUSE_EVENT), T.kJ.setSearchPlaceholder(r), P.current = Y.xAR;
                });
            }, []), et = (0, d.e7)([v.qc], () => v.qc.hasHotspot(v.v6.FAVORITE_EMOJI_TOOLTIP), []), en = i.useMemo(() => l().memoize((e, t) => {
                let n = a[e], i = E[t.sectionIndex];
                return (0, r.jsx)(H.Z, {
                    emojiDescriptors: n,
                    emojiSize: s,
                    surrogateCodePoint: w,
                    onInspect: K,
                    onSelect: u,
                    getEmojiItemProps: h,
                    getEmojiRowProps: m,
                    isScrolling: I,
                    isUsingKeyboardNavigation: g,
                    rowIndex: e,
                    allowAnimatedEmoji: A,
                    showEmojiFavoriteTooltip: et,
                    channelGuildId: O,
                    category: i.sectionId,
                    selectedItemClassName: z.__invalid_selectedItem,
                    messageId: R,
                    isBurstReaction: y,
                    inNitroLockedSection: i.isNitroLocked
                }, e);
            }), [
                a,
                E,
                s,
                w,
                K,
                u,
                h,
                m,
                I,
                g,
                A,
                et,
                O,
                R,
                y
            ]);
        i.useEffect(() => () => {
            var e, t;
            return null === (t = en.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t);
        }, [en]);
        let er = i.useMemo(() => l().memoize(e => {
                let n = E[e];
                if (null == n)
                    return;
                let {
                    guild: i,
                    categoryId: a,
                    type: s,
                    sectionId: l
                } = n;
                if (s === Z.En.SEARCH_RESULTS)
                    return;
                let u = s === Z.En.GUILD ? null != i ? (0, r.jsx)(F.Z, {
                        guild: i,
                        height: 16,
                        width: 16
                    }) : null : null != a ? (0, r.jsx)(B.Z, {
                        categoryId: a,
                        height: 16,
                        width: 16,
                        size: 'custom'
                    }) : null, c = null == i ? void 0 : i.toString();
                null != a && (c = (0, k.Y1)(a, null == i ? void 0 : i.toString()));
                let d = L === e, _ = n.isNitroLocked, f = _ && !d, h = _ && d;
                return (0, r.jsx)(N.Z, {
                    className: o()(z.header, D, {
                        [z.inactiveNitroHeader]: f,
                        [z.activeNitroHeader]: h
                    }),
                    icon: u,
                    isCollapsed: t.has(l),
                    onClick: () => W(l, i),
                    children: c
                }, l);
            }), [
                E,
                t,
                W,
                D,
                L
            ]), ei = i.useCallback((e, n) => {
                let i = E[e], a = G(e), s = x(e);
                return (0, r.jsx)('div', {
                    className: o()(z.categorySection, {
                        [z.categorySectionLast]: e === E.length - 1,
                        [z.categorySectionCollapsed]: t.has(i.sectionId),
                        [z.categorySectionNitroLocked]: i.isNitroLocked,
                        [z.categorySectionNitroDivider]: a || s
                    }),
                    children: n
                }, e);
            }, [
                t,
                E,
                G,
                x
            ]), ea = i.useCallback(e => G(e) ? (0, r.jsx)(C.Z, { glowOpacity: b }) : x(e) ? (0, r.jsx)('div', { className: z.nitroBottomDivider }) : null, [
                b,
                G,
                x
            ]), eo = i.useCallback(e => G(e) ? 41 : x(e) ? 33 : 0, [
                G,
                x
            ]), es = i.useCallback(e => {
                var n;
                return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || G(e) || x(e) ? 0 : ee;
            }, [
                t,
                E,
                G,
                x
            ]), el = i.useMemo(() => [
                '' !== c ? $ : q,
                Q,
                X,
                0
            ], [c]);
        return {
            listPadding: el,
            renderRow: en,
            renderSection: ei,
            renderSectionHeader: er,
            renderSectionFooter: ea,
            sectionMarginBottom: es,
            sectionHeaderHeight: i.useCallback(e => E[e].type === Z.En.SEARCH_RESULTS ? 0 : J, [E]),
            sectionFooterHeight: eo
        };
    }, ei = i.memo(function (e) {
        let {
                diversitySurrogate: t,
                emojiGrid: n,
                emojiListRef: a,
                emojiSize: o,
                onEmojiSelect: s,
                setUpsellConfigs: l,
                sectionDescriptors: _,
                rowCountBySection: E,
                collapsedSections: S,
                setCollapsedSections: N,
                getEmojiItemProps: v,
                getEmojiRowProps: C,
                rowCount: G,
                isUsingKeyboardNavigation: k,
                channelGuildId: B,
                messageId: F,
                isBurstReaction: H,
                listHeaderClassName: Z
            } = e, j = i.useRef(!1), q = T.kJ.useStore(e => e.activeCategoryIndex), Q = (0, g.Iu)(e => e.searchQuery), X = L.Yk.useSetting(), $ = (0, d.e7)([b.default], () => b.default.getCurrentUser()), J = (0, w.I5)($), {location: ee} = (0, p.O)(), {analyticsLocations: et} = (0, I.ZP)(), [ei, ea] = i.useState(0), [eo, es] = i.useState(!1), [el, eu] = i.useState(0), ec = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), ed = (0, u.useSpring)({
                transform: eo ? 'translateY(0%)' : 'translateY(120%)',
                opacity: eo ? 1 : 0,
                config: {
                    tension: 120,
                    friction: 14
                },
                immediate: ec
            }), e_ = (0, R.N)(), eE = (0, O.Ng)(), ef = eo && !J && !c.tq && !(null != e_ || null != eE), {enabled: eh} = D.Gi.useExperiment({ location: 'Premium Emoji Roadblock' }, {
                autoTrackExposure: ef,
                disable: !ef
            }), {
                listPadding: ep,
                renderRow: em,
                renderSection: eI,
                renderSectionHeader: eT,
                renderSectionFooter: eg,
                sectionMarginBottom: eS,
                sectionHeaderHeight: eA,
                sectionFooterHeight: eN
            } = er({
                collapsedSections: S,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: o,
                onEmojiSelect: s,
                searchQuery: Q,
                sectionDescriptors: _,
                setCollapsedSections: N,
                getEmojiItemProps: v,
                getEmojiRowProps: C,
                isScrolling: j,
                isUsingKeyboardNavigation: k,
                allowAnimatedEmoji: X,
                channelGuildId: B,
                messageId: F,
                isBurstReaction: H,
                listHeaderClassName: Z,
                activeSectionIndex: ei,
                upsellGlowOpacity: el
            }), ev = (0, A.Uf)({
                listRef: a,
                searchQuery: Q,
                setShowUpsell: es,
                setUpsellGlowOpacity: eu,
                emojiSectionDescriptors: _
            }), eO = (0, A.Qs)({
                activeCategoryIndex: q,
                isScrolling: j,
                listRef: a,
                onActiveCategoryIndexChange: e => {
                    ea(e), '' === Q && T.kJ.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: Q,
                disableForSearch: !1
            });
        (0, A.Xs)({
            searchQuery: Q,
            activeCategoryIndex: q,
            listRef: a
        });
        let eR = i.useCallback(e => {
                ev(e), eO(e);
            }, [
                ev,
                eO
            ]), eC = _.length > 0;
        return i.useEffect(() => {
            eo && U.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                type: W.cd.EMOJI_PICKER_FLOATING_UPSELL,
                location: ee,
                location_stack: et
            });
        }, [
            ee,
            et,
            eo
        ]), i.useEffect(() => {
            '' !== Q && (eu(0), es(!1));
        }, [Q]), (0, r.jsxs)('div', {
            className: z.listWrapper,
            children: [
                eC ? (0, r.jsx)(P.Z, {
                    role: 'none presentation',
                    className: z.list,
                    listPadding: ep,
                    onScroll: eR,
                    renderRow: em,
                    renderSection: eI,
                    renderSectionHeader: eT,
                    renderSectionFooter: eg,
                    rowCount: G,
                    rowCountBySection: E,
                    rowHeight: en(o),
                    sectionHeaderHeight: eA,
                    sectionMarginBottom: eS,
                    sectionFooterHeight: eN,
                    stickyHeaders: !0,
                    ref: a
                }) : (0, r.jsx)(h.Z, {
                    message: K.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
                    className: z.noSearchResultsContainer
                }),
                J || c.tq ? null : (0, r.jsxs)(u.animated.div, {
                    style: {
                        ...ed,
                        opacity: ed.opacity
                    },
                    className: z.upsellContainer,
                    children: [
                        (0, r.jsx)(f.NitroWheelIcon, {
                            size: 'md',
                            color: M.JX.PREMIUM_TIER_2
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            className: z.upsellText,
                            children: function () {
                                if (!eh)
                                    return K.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE;
                                {
                                    let e = (0, x.Px)(W.p9.TIER_2);
                                    return K.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_POPUP_LABEL_V2.format({
                                        nitroTierName: e,
                                        onClick: () => {
                                            l({
                                                type: V.Bg.PREMIUM,
                                                emojiDescriptor: void 0
                                            });
                                        }
                                    });
                                }
                            }()
                        }),
                        (0, r.jsx)(y.Z, {
                            className: z.upsellButton,
                            size: f.ButtonSizes.TINY,
                            shinyButtonClassName: z.upsellButton,
                            subscriptionTier: W.Si.TIER_2,
                            buttonText: K.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                            premiumModalAnalyticsLocation: { section: Y.jXE.EMOJI_PICKER_FLOATING_UPSELL },
                            tabIndex: eo ? 0 : -1
                        })
                    ]
                })
            ]
        });
    });
t.Z = ei;
