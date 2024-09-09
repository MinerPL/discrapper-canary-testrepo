n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(873546),
    c = n(442837),
    d = n(946188),
    _ = n(477690),
    E = n(788911),
    f = n(2052),
    h = n(906732),
    p = n(218867),
    I = n(806966),
    m = n(28546),
    T = n(691251),
    S = n(98528),
    g = n(551058),
    A = n(536442),
    N = n(104494),
    O = n(639119),
    R = n(53691),
    v = n(75145),
    C = n(631771),
    y = n(695346),
    L = n(594174),
    D = n(78839),
    b = n(626135),
    M = n(111361),
    P = n(74538),
    U = n(624138),
    w = n(543241),
    x = n(883661),
    G = n(880949),
    k = n(784222),
    B = n(172800),
    F = n(149203),
    V = n(981631),
    H = n(957825),
    Z = n(474936),
    Y = n(689938),
    j = n(365887);
let W = (0, U.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    K = (0, U.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    z = (0, U.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    q = (0, U.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    Q = (0, U.Mg)(_.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    X = (0, U.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    $ = (0, U.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    J = (e) => e + 2 * $,
    ee = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: a, emojiSize: o, onEmojiSelect: u, searchQuery: _, sectionDescriptors: E, setCollapsedSections: h, getEmojiItemProps: p, getEmojiRowProps: m, isScrolling: S, isUsingKeyboardNavigation: N, allowAnimatedEmoji: O, channelGuildId: R, messageId: C, isBurstReaction: y, listHeaderClassName: L, activeSectionIndex: M, upsellGlowOpacity: P, emojiListRef: U } = e,
            Z = (0, f.O)(),
            Y = i.useRef(V.xAR),
            $ = i.useMemo(() => ('' !== n ? d.Z.convert.toCodePoint(n) : ''), [n]),
            J = i.useCallback(
                (e) => {
                    let t = E[e],
                        n = E[e + 1];
                    return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [E]
            ),
            ee = i.useCallback(
                (e) => {
                    if (e >= E.length - 1) return !1;
                    let t = E[e],
                        n = E[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [E]
            ),
            et = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            b.default.track(V.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: Z.location,
                                tab: H.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        h(r);
                },
                [Z, t, h]
            ),
            en = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === k.ld.EMOJI ? e.emoji.allNamesString : e.name;
                Y.current !== V.xAR && window.cancelAnimationFrame(Y.current),
                    (Y.current = window.requestAnimationFrame(() => {
                        I.kJ.setInspectedExpressionPosition(t, n, T.u.MOUSE_EVENT), I.kJ.setSearchPlaceholder(r), (Y.current = V.xAR);
                    }));
            }, []),
            er = (0, c.e7)([A.qc], () => A.qc.hasHotspot(A.v6.FAVORITE_EMOJI_TOOLTIP), []),
            ei = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = E[t.sectionIndex];
                        return (0, r.jsx)(
                            B.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: $,
                                onInspect: en,
                                onSelect: u,
                                getEmojiItemProps: p,
                                getEmojiRowProps: m,
                                isScrolling: S,
                                isUsingKeyboardNavigation: N,
                                rowIndex: e,
                                allowAnimatedEmoji: O,
                                showEmojiFavoriteTooltip: er,
                                channelGuildId: R,
                                category: i.sectionId,
                                selectedItemClassName: j.__invalid_selectedItem,
                                messageId: C,
                                isBurstReaction: y,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: () => {
                                    var e;
                                    null === (e = U.current) || void 0 === e || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                }
                            },
                            e
                        );
                    }),
                [a, E, o, $, en, u, p, m, S, N, O, er, R, C, y, U]
            );
        i.useEffect(
            () => () => {
                var e, t;
                return null === (t = ei.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t);
            },
            [ei]
        );
        let ea = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = E[e];
                        if (null == n) return;
                        let { guild: i, categoryId: a, type: o, sectionId: l } = n;
                        if (o === F.En.SEARCH_RESULTS) return;
                        let u =
                                o === F.En.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(G.Z, {
                                              guild: i,
                                              height: 16,
                                              width: 16
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(x.Z, {
                                            categoryId: a,
                                            height: 16,
                                            width: 16,
                                            size: 'custom'
                                        })
                                      : null,
                            c = null == i ? void 0 : i.toString();
                        null != a && (c = (0, w.Y1)(a, null == i ? void 0 : i.toString()));
                        let d = M === e,
                            _ = n.isNitroLocked,
                            f = _ && !d,
                            h = _ && d;
                        return (0, r.jsx)(
                            g.Z,
                            {
                                className: s()(j.header, L, {
                                    [j.inactiveNitroHeader]: f,
                                    [j.activeNitroHeader]: h
                                }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => et(l, i),
                                children: c
                            },
                            l
                        );
                    }),
                [E, t, et, L, M]
            ),
            es = (0, c.e7)([D.ZP], () => D.ZP.inReverseTrial()),
            eo = i.useCallback(
                (e, n) => {
                    let i = E[e],
                        a = ee(e),
                        o = J(e);
                    return (0, r.jsx)(
                        'div',
                        {
                            className: s()(j.categorySection, {
                                [j.categorySectionLast]: e === E.length - 1,
                                [j.categorySectionCollapsed]: t.has(i.sectionId),
                                [j.categorySectionNitroLocked]: i.isNitroLocked,
                                [j.categorySectionNitroDivider]: a || o
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, E, ee, J]
            ),
            el = i.useCallback(
                (e) => {
                    if (ee(e)) return es ? (0, r.jsx)(v.mY, {}) : (0, r.jsx)(v.ZP, { glowOpacity: P });
                    return J(e) ? (0, r.jsx)('div', { className: j.nitroBottomDivider }) : null;
                },
                [P, ee, J, es]
            ),
            eu = i.useCallback((e) => (ee(e) ? 41 : J(e) ? 33 : 0), [ee, J]),
            ec = i.useCallback(
                (e) => {
                    var n;
                    return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || ee(e) || J(e) ? 0 : X;
                },
                [t, E, ee, J]
            ),
            ed = i.useMemo(() => ['' !== _ ? q : W, K, z, 0], [_]);
        return {
            listPadding: ed,
            renderRow: ei,
            renderSection: eo,
            renderSectionHeader: ea,
            renderSectionFooter: el,
            sectionMarginBottom: ec,
            sectionHeaderHeight: i.useCallback((e) => (E[e].type === F.En.SEARCH_RESULTS ? 0 : Q), [E]),
            sectionFooterHeight: eu
        };
    },
    et = i.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: a, emojiSize: s, onEmojiSelect: o, setUpsellConfigs: l, sectionDescriptors: d, rowCountBySection: _, collapsedSections: T, setCollapsedSections: g, getEmojiItemProps: A, getEmojiRowProps: v, rowCount: D, isUsingKeyboardNavigation: U, channelGuildId: w, messageId: x, isBurstReaction: G, listHeaderClassName: B } = e,
            F = i.useRef(!1),
            H = I.kJ.useStore((e) => e.activeCategoryIndex),
            W = (0, m.Iu)((e) => e.searchQuery),
            K = y.Yk.useSetting(),
            z = (0, c.e7)([L.default], () => L.default.getCurrentUser()),
            q = (0, M.I5)(z),
            { location: Q } = (0, f.O)(),
            { analyticsLocations: X } = (0, h.ZP)(),
            [$, et] = i.useState(0),
            [en, er] = i.useState(!1),
            [ei, ea] = i.useState(0),
            es = (0, O.N)(),
            eo = (0, N.Ng)(),
            el = en && !q && !u.tq && !(null != es || null != eo),
            { enabled: eu } = C.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: el,
                    disable: !el
                }
            ),
            {
                listPadding: ec,
                renderRow: ed,
                renderSection: e_,
                renderSectionHeader: eE,
                renderSectionFooter: ef,
                sectionMarginBottom: eh,
                sectionHeaderHeight: ep,
                sectionFooterHeight: eI
            } = ee({
                collapsedSections: T,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: o,
                searchQuery: W,
                sectionDescriptors: d,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: v,
                isScrolling: F,
                isUsingKeyboardNavigation: U,
                allowAnimatedEmoji: K,
                channelGuildId: w,
                messageId: x,
                isBurstReaction: G,
                listHeaderClassName: B,
                activeSectionIndex: $,
                upsellGlowOpacity: ei,
                emojiListRef: a
            }),
            em = (0, S.Uf)({
                listRef: a,
                searchQuery: W,
                nitroLockedSectionStates: d,
                setShowUpsell: er,
                setUpsellGlowOpacity: ea
            }),
            eT = (0, S.Qs)({
                activeCategoryIndex: H,
                isScrolling: F,
                listRef: a,
                onActiveCategoryIndexChange: (e) => {
                    et(e), '' === W && I.kJ.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: W,
                disableForSearch: !1
            });
        (0, S.Xs)({
            searchQuery: W,
            activeCategoryIndex: H,
            listRef: a
        });
        let eS = i.useCallback(
                (e) => {
                    em(e), eT(e);
                },
                [em, eT]
            ),
            eg = d.length > 0;
        return (
            i.useEffect(() => {
                en &&
                    b.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Z.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: X
                    });
            }, [Q, X, en]),
            i.useEffect(() => {
                '' !== W && (ea(0), er(!1));
            }, [W]),
            (0, r.jsxs)('div', {
                className: j.listWrapper,
                children: [
                    eg
                        ? (0, r.jsx)(p.Z, {
                              role: 'none presentation',
                              className: j.list,
                              listPadding: ec,
                              onScroll: eS,
                              renderRow: ed,
                              renderSection: e_,
                              renderSectionHeader: eE,
                              renderSectionFooter: ef,
                              rowCount: D,
                              rowCountBySection: _,
                              rowHeight: J(s),
                              sectionHeaderHeight: ep,
                              sectionMarginBottom: eh,
                              sectionFooterHeight: eI,
                              stickyHeaders: !0,
                              ref: a
                          })
                        : (0, r.jsx)(E.Z, {
                              message: Y.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
                              className: j.noSearchResultsContainer
                          }),
                    q || u.tq
                        ? null
                        : (0, r.jsx)(R.p, {
                              showUpsell: en,
                              text: (function () {
                                  if (!eu) return Y.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE;
                                  {
                                      let e = (0, P.Px)(Z.p9.TIER_2);
                                      return Y.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_POPUP_LABEL_V2.format({
                                          nitroTierName: e,
                                          onClick: () => {
                                              l({
                                                  type: k.Bg.PREMIUM,
                                                  emojiDescriptor: void 0
                                              });
                                          }
                                      });
                                  }
                              })(),
                              button: Y.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                              buttonAnalyticsObject: { section: V.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
t.Z = et;
