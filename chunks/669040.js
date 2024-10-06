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
    N = n(775412),
    O = n(48125),
    R = n(104494),
    v = n(639119),
    C = n(53691),
    L = n(75145),
    y = n(631771),
    D = n(695346),
    b = n(594174),
    M = n(78839),
    P = n(626135),
    U = n(111361),
    w = n(74538),
    x = n(624138),
    G = n(543241),
    k = n(883661),
    B = n(880949),
    F = n(784222),
    V = n(172800),
    H = n(149203),
    Z = n(981631),
    Y = n(957825),
    j = n(474936),
    W = n(689938),
    K = n(560454);
let z = (0, x.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    q = (0, x.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    Q = (0, x.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    X = (0, x.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    $ = (0, x.Mg)(_.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    J = (0, x.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ee = (0, x.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    et = (e) => e + 2 * ee,
    en = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: a, emojiSize: o, onEmojiSelect: u, searchQuery: _, sectionDescriptors: E, setCollapsedSections: h, getEmojiItemProps: p, getEmojiRowProps: m, isScrolling: S, isUsingKeyboardNavigation: N, allowAnimatedEmoji: O, channelGuildId: R, messageId: v, isBurstReaction: C, listHeaderClassName: y, activeSectionIndex: D, upsellGlowOpacity: b, emojiListRef: U } = e,
            w = (0, f.O)(),
            x = i.useRef(Z.xAR),
            j = i.useMemo(() => ('' !== n ? d.Z.convert.toCodePoint(n) : ''), [n]),
            W = i.useCallback(
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
                            P.default.track(Z.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: w.location,
                                tab: Y.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        h(r);
                },
                [w, t, h]
            ),
            en = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === F.ld.EMOJI ? e.emoji.allNamesString : e.name;
                x.current !== Z.xAR && window.cancelAnimationFrame(x.current),
                    (x.current = window.requestAnimationFrame(() => {
                        I.kJ.setInspectedExpressionPosition(t, n, T.u.MOUSE_EVENT), I.kJ.setSearchPlaceholder(r), (x.current = Z.xAR);
                    }));
            }, []),
            er = (0, c.e7)([A.qc], () => A.qc.hasHotspot(A.v6.FAVORITE_EMOJI_TOOLTIP), []),
            ei = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = E[t.sectionIndex];
                        return (0, r.jsx)(
                            V.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: j,
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
                                selectedItemClassName: K.__invalid_selectedItem,
                                messageId: v,
                                isBurstReaction: C,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: () => {
                                    var e;
                                    null === (e = U.current) || void 0 === e || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                }
                            },
                            e
                        );
                    }),
                [a, E, o, j, en, u, p, m, S, N, O, er, R, v, C, U]
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
                        if (o === H.En.SEARCH_RESULTS) return;
                        let u =
                                o === H.En.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(B.Z, {
                                              guild: i,
                                              height: 16,
                                              width: 16
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(k.Z, {
                                            categoryId: a,
                                            height: 16,
                                            width: 16,
                                            size: 'custom'
                                        })
                                      : null,
                            c = null == i ? void 0 : i.toString();
                        null != a && (c = (0, G.Y1)(a, null == i ? void 0 : i.toString()));
                        let d = D === e,
                            _ = n.isNitroLocked,
                            f = _ && !d,
                            h = _ && d;
                        return (0, r.jsx)(
                            g.Z,
                            {
                                className: s()(K.header, y, {
                                    [K.inactiveNitroHeader]: f,
                                    [K.activeNitroHeader]: h
                                }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => et(l, i),
                                children: c
                            },
                            l
                        );
                    }),
                [E, t, et, y, D]
            ),
            es = (0, c.e7)([M.ZP], () => M.ZP.inReverseTrial()),
            eo = i.useCallback(
                (e, n) => {
                    let i = E[e],
                        a = ee(e),
                        o = W(e);
                    return (0, r.jsx)(
                        'div',
                        {
                            className: s()(K.categorySection, {
                                [K.categorySectionLast]: e === E.length - 1,
                                [K.categorySectionCollapsed]: t.has(i.sectionId),
                                [K.categorySectionNitroLocked]: i.isNitroLocked,
                                [K.categorySectionNitroDivider]: a || o
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, E, ee, W]
            ),
            el = i.useCallback(
                (e) => {
                    if (ee(e)) return es ? (0, r.jsx)(L.mY, {}) : (0, r.jsx)(L.ZP, { glowOpacity: b });
                    return W(e) ? (0, r.jsx)('div', { className: K.nitroBottomDivider }) : null;
                },
                [b, ee, W, es]
            ),
            eu = i.useCallback((e) => (ee(e) ? 41 : W(e) ? 33 : 0), [ee, W]),
            ec = i.useCallback(
                (e) => {
                    var n;
                    return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || ee(e) || W(e) ? 0 : J;
                },
                [t, E, ee, W]
            ),
            ed = i.useMemo(() => ['' !== _ ? X : z, q, Q, 0], [_]);
        return {
            listPadding: ed,
            renderRow: ei,
            renderSection: eo,
            renderSectionHeader: ea,
            renderSectionFooter: el,
            sectionMarginBottom: ec,
            sectionHeaderHeight: i.useCallback((e) => (E[e].type === H.En.SEARCH_RESULTS ? 0 : $), [E]),
            sectionFooterHeight: eu
        };
    },
    er = i.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: a, emojiSize: s, onEmojiSelect: o, setUpsellConfigs: l, sectionDescriptors: d, rowCountBySection: _, collapsedSections: T, setCollapsedSections: g, getEmojiItemProps: A, getEmojiRowProps: L, rowCount: M, isUsingKeyboardNavigation: x, channelGuildId: G, messageId: k, isBurstReaction: B, listHeaderClassName: V } = e,
            H = i.useRef(!1),
            Y = I.kJ.useStore((e) => e.activeCategoryIndex),
            z = (0, m.Iu)((e) => e.searchQuery),
            q = D.Yk.useSetting(),
            Q = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
            X = (0, U.I5)(Q),
            { location: $ } = (0, f.O)(),
            { analyticsLocations: J } = (0, h.ZP)(),
            [ee, er] = i.useState(0),
            [ei, ea] = i.useState(!1),
            [es, eo] = i.useState(0),
            el = (0, v.N)(),
            eu = (0, R.Ng)(),
            ec = ei && !X && !u.tq,
            ed = null != el || null != eu,
            { enabled: e_ } = y.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ec && !ed,
                    disable: !ec || ed
                }
            ),
            { enabled: eE } = O.Z.useExperiment(
                { location: 'EmojiPickerList' },
                {
                    autoTrackExposure: ec && null != el,
                    disable: !ec || null == el
                }
            ),
            ef = e_ || eE,
            {
                listPadding: eh,
                renderRow: ep,
                renderSection: eI,
                renderSectionHeader: em,
                renderSectionFooter: eT,
                sectionMarginBottom: eS,
                sectionHeaderHeight: eg,
                sectionFooterHeight: eA
            } = en({
                collapsedSections: T,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: o,
                searchQuery: z,
                sectionDescriptors: d,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: L,
                isScrolling: H,
                isUsingKeyboardNavigation: x,
                allowAnimatedEmoji: q,
                channelGuildId: G,
                messageId: k,
                isBurstReaction: B,
                listHeaderClassName: V,
                activeSectionIndex: ee,
                upsellGlowOpacity: es,
                emojiListRef: a
            }),
            eN = (0, S.Uf)({
                listRef: a,
                searchQuery: z,
                nitroLockedSectionStates: d,
                setShowUpsell: ea,
                setUpsellGlowOpacity: eo
            }),
            eO = (0, S.Qs)({
                activeCategoryIndex: Y,
                isScrolling: H,
                listRef: a,
                onActiveCategoryIndexChange: (e) => {
                    er(e), '' === z && I.kJ.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: z,
                disableForSearch: !1
            });
        (0, S.Xs)({
            searchQuery: z,
            activeCategoryIndex: Y,
            listRef: a
        });
        let eR = i.useCallback(
                (e) => {
                    eN(e), eO(e);
                },
                [eN, eO]
            ),
            ev = d.length > 0;
        return (
            i.useEffect(() => {
                ei &&
                    P.default.track(Z.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: j.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: $,
                        location_stack: J
                    });
            }, [$, J, ei]),
            i.useEffect(() => {
                '' !== z && (eo(0), ea(!1));
            }, [z]),
            (0, r.jsxs)('div', {
                className: K.listWrapper,
                children: [
                    ev
                        ? (0, r.jsx)(p.Z, {
                              role: 'none presentation',
                              className: K.list,
                              listPadding: eh,
                              onScroll: eR,
                              renderRow: ep,
                              renderSection: eI,
                              renderSectionHeader: em,
                              renderSectionFooter: eT,
                              rowCount: M,
                              rowCountBySection: _,
                              rowHeight: et(s),
                              sectionHeaderHeight: eg,
                              sectionMarginBottom: eS,
                              sectionFooterHeight: eA,
                              stickyHeaders: !0,
                              ref: a
                          })
                        : (0, r.jsx)(E.Z, {
                              message: W.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
                              className: K.noSearchResultsContainer
                          }),
                    X || u.tq
                        ? null
                        : (0, r.jsx)(C.p, {
                              showUpsell: ei,
                              text: (function () {
                                  if (!ef) return W.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE;
                                  {
                                      let e = (0, w.Px)(j.p9.TIER_2);
                                      return W.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_POPUP_LABEL_V2.format({
                                          nitroTierName: e,
                                          onClick: () => {
                                              l({
                                                  type: F.Bg.PREMIUM,
                                                  emojiDescriptor: void 0
                                              });
                                          }
                                      });
                                  }
                              })(),
                              button: (function () {
                                  if (ef) {
                                      var e;
                                      let t = (0, N.J0)();
                                      return null !== (e = (0, w.fr)(t)) && void 0 !== e ? e : W.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA;
                                  }
                                  return W.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA;
                              })(),
                              buttonAnalyticsObject: { section: Z.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
t.Z = er;
