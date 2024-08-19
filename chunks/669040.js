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
    h = n(607070),
    p = n(906732),
    m = n(218867),
    I = n(806966),
    T = n(28546),
    g = n(691251),
    S = n(98528),
    A = n(551058),
    N = n(536442),
    v = n(104494),
    O = n(639119),
    R = n(53691),
    C = n(75145),
    y = n(631771),
    D = n(695346),
    L = n(594174),
    b = n(78839),
    M = n(626135),
    P = n(111361),
    U = n(74538),
    w = n(624138),
    x = n(543241),
    G = n(883661),
    k = n(880949),
    B = n(784222),
    F = n(172800),
    V = n(149203),
    H = n(981631),
    Z = n(957825),
    Y = n(474936),
    j = n(689938),
    W = n(365887);
let K = (0, w.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    z = (0, w.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    q = (0, w.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    Q = (0, w.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    X = (0, w.Mg)(_.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    $ = (0, w.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    J = (0, w.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ee = (e) => e + 2 * J,
    et = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: a, emojiSize: o, onEmojiSelect: u, searchQuery: _, sectionDescriptors: E, setCollapsedSections: p, getEmojiItemProps: m, getEmojiRowProps: T, isScrolling: S, isUsingKeyboardNavigation: v, allowAnimatedEmoji: O, channelGuildId: R, messageId: y, isBurstReaction: D, listHeaderClassName: L, activeSectionIndex: P, upsellGlowOpacity: U } = e,
            w = (0, f.O)(),
            Y = i.useRef(H.xAR),
            j = i.useMemo(() => ('' !== n ? d.Z.convert.toCodePoint(n) : ''), [n]),
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
                            M.default.track(H.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: w.location,
                                tab: Z.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        p(r);
                },
                [w, t, p]
            ),
            en = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === B.ld.EMOJI ? e.emoji.allNamesString : e.name;
                Y.current !== H.xAR && window.cancelAnimationFrame(Y.current),
                    (Y.current = window.requestAnimationFrame(() => {
                        I.kJ.setInspectedExpressionPosition(t, n, g.u.MOUSE_EVENT), I.kJ.setSearchPlaceholder(r), (Y.current = H.xAR);
                    }));
            }, []),
            er = (0, c.e7)([N.qc], () => N.qc.hasHotspot(N.v6.FAVORITE_EMOJI_TOOLTIP), []),
            ei = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = E[t.sectionIndex];
                        return (0, r.jsx)(
                            F.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: j,
                                onInspect: en,
                                onSelect: u,
                                getEmojiItemProps: m,
                                getEmojiRowProps: T,
                                isScrolling: S,
                                isUsingKeyboardNavigation: v,
                                rowIndex: e,
                                allowAnimatedEmoji: O,
                                showEmojiFavoriteTooltip: er,
                                channelGuildId: R,
                                category: i.sectionId,
                                selectedItemClassName: W.__invalid_selectedItem,
                                messageId: y,
                                isBurstReaction: D,
                                inNitroLockedSection: i.isNitroLocked
                            },
                            e
                        );
                    }),
                [a, E, o, j, en, u, m, T, S, v, O, er, R, y, D]
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
                        if (o === V.En.SEARCH_RESULTS) return;
                        let u =
                                o === V.En.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(k.Z, {
                                              guild: i,
                                              height: 16,
                                              width: 16
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(G.Z, {
                                            categoryId: a,
                                            height: 16,
                                            width: 16,
                                            size: 'custom'
                                        })
                                      : null,
                            c = null == i ? void 0 : i.toString();
                        null != a && (c = (0, x.Y1)(a, null == i ? void 0 : i.toString()));
                        let d = P === e,
                            _ = n.isNitroLocked,
                            f = _ && !d,
                            h = _ && d;
                        return (0, r.jsx)(
                            A.Z,
                            {
                                className: s()(W.header, L, {
                                    [W.inactiveNitroHeader]: f,
                                    [W.activeNitroHeader]: h
                                }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => et(l, i),
                                children: c
                            },
                            l
                        );
                    }),
                [E, t, et, L, P]
            ),
            es = (0, c.e7)([b.ZP], () => b.ZP.inReverseTrial()),
            eo = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
            el = i.useCallback(
                (e, n) => {
                    let i = E[e],
                        a = ee(e),
                        o = J(e);
                    return (0, r.jsx)(
                        'div',
                        {
                            className: s()(W.categorySection, {
                                [W.categorySectionLast]: e === E.length - 1,
                                [W.categorySectionCollapsed]: t.has(i.sectionId),
                                [W.categorySectionNitroLocked]: i.isNitroLocked,
                                [W.categorySectionNitroDivider]: a || o,
                                [W.categorySectionOpacityAnimation]: i.isNitroLocked && es && !eo
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, E, ee, J, es, eo]
            ),
            eu = i.useCallback(
                (e) => {
                    if (ee(e)) return es ? (0, r.jsx)(C.mY, { glowOpacity: U }) : (0, r.jsx)(C.ZP, { glowOpacity: U });
                    return J(e) ? (0, r.jsx)('div', { className: s()(W.nitroBottomDivider, { [W.categorySectionOpacityAnimation]: es && !eo }) }) : null;
                },
                [U, ee, J, es, eo]
            ),
            ec = i.useCallback((e) => (ee(e) ? 41 : J(e) ? 33 : 0), [ee, J]),
            ed = i.useCallback(
                (e) => {
                    var n;
                    return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || ee(e) || J(e) ? 0 : $;
                },
                [t, E, ee, J]
            ),
            e_ = i.useMemo(() => ['' !== _ ? Q : K, z, q, 0], [_]);
        return {
            listPadding: e_,
            renderRow: ei,
            renderSection: el,
            renderSectionHeader: ea,
            renderSectionFooter: eu,
            sectionMarginBottom: ed,
            sectionHeaderHeight: i.useCallback((e) => (E[e].type === V.En.SEARCH_RESULTS ? 0 : X), [E]),
            sectionFooterHeight: ec
        };
    },
    en = i.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: a, emojiSize: s, onEmojiSelect: o, setUpsellConfigs: l, sectionDescriptors: d, rowCountBySection: _, collapsedSections: h, setCollapsedSections: g, getEmojiItemProps: A, getEmojiRowProps: N, rowCount: C, isUsingKeyboardNavigation: b, channelGuildId: w, messageId: x, isBurstReaction: G, listHeaderClassName: k } = e,
            F = i.useRef(!1),
            V = I.kJ.useStore((e) => e.activeCategoryIndex),
            Z = (0, T.Iu)((e) => e.searchQuery),
            K = D.Yk.useSetting(),
            z = (0, c.e7)([L.default], () => L.default.getCurrentUser()),
            q = (0, P.I5)(z),
            { location: Q } = (0, f.O)(),
            { analyticsLocations: X } = (0, p.ZP)(),
            [$, J] = i.useState(0),
            [en, er] = i.useState(!1),
            [ei, ea] = i.useState(0),
            es = (0, O.N)(),
            eo = (0, v.Ng)(),
            el = en && !q && !u.tq && !(null != es || null != eo),
            { enabled: eu } = y.Gi.useExperiment(
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
                sectionFooterHeight: em
            } = et({
                collapsedSections: h,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: o,
                searchQuery: Z,
                sectionDescriptors: d,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: N,
                isScrolling: F,
                isUsingKeyboardNavigation: b,
                allowAnimatedEmoji: K,
                channelGuildId: w,
                messageId: x,
                isBurstReaction: G,
                listHeaderClassName: k,
                activeSectionIndex: $,
                upsellGlowOpacity: ei
            }),
            eI = (0, S.Uf)({
                listRef: a,
                searchQuery: Z,
                nitroLockedSectionStates: d,
                setShowUpsell: er,
                setUpsellGlowOpacity: ea
            }),
            eT = (0, S.Qs)({
                activeCategoryIndex: V,
                isScrolling: F,
                listRef: a,
                onActiveCategoryIndexChange: (e) => {
                    J(e), '' === Z && I.kJ.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: Z,
                disableForSearch: !1
            });
        (0, S.Xs)({
            searchQuery: Z,
            activeCategoryIndex: V,
            listRef: a
        });
        let eg = i.useCallback(
                (e) => {
                    eI(e), eT(e);
                },
                [eI, eT]
            ),
            eS = d.length > 0;
        return (
            i.useEffect(() => {
                en &&
                    M.default.track(H.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Y.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: X
                    });
            }, [Q, X, en]),
            i.useEffect(() => {
                '' !== Z && (ea(0), er(!1));
            }, [Z]),
            (0, r.jsxs)('div', {
                className: W.listWrapper,
                children: [
                    eS
                        ? (0, r.jsx)(m.Z, {
                              role: 'none presentation',
                              className: W.list,
                              listPadding: ec,
                              onScroll: eg,
                              renderRow: ed,
                              renderSection: e_,
                              renderSectionHeader: eE,
                              renderSectionFooter: ef,
                              rowCount: C,
                              rowCountBySection: _,
                              rowHeight: ee(s),
                              sectionHeaderHeight: ep,
                              sectionMarginBottom: eh,
                              sectionFooterHeight: em,
                              stickyHeaders: !0,
                              ref: a
                          })
                        : (0, r.jsx)(E.Z, {
                              message: j.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
                              className: W.noSearchResultsContainer
                          }),
                    q || u.tq
                        ? null
                        : (0, r.jsx)(R.p, {
                              showUpsell: en,
                              upsellText: (function () {
                                  if (!eu) return j.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE;
                                  {
                                      let e = (0, U.Px)(Y.p9.TIER_2);
                                      return j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_POPUP_LABEL_V2.format({
                                          nitroTierName: e,
                                          onClick: () => {
                                              l({
                                                  type: B.Bg.PREMIUM,
                                                  emojiDescriptor: void 0
                                              });
                                          }
                                      });
                                  }
                              })(),
                              ctaText: j.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                              ctaAnalyticsObject: { section: H.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
t.Z = en;
