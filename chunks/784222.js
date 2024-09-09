n.d(t, {
    Bg: function () {
        return a;
    },
    Ni: function () {
        return V;
    },
    YH: function () {
        return B;
    },
    ld: function () {
        return r;
    },
    rf: function () {
        return F;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(470079),
    c = n(392711),
    d = n.n(c),
    _ = n(772848),
    E = n(442837),
    f = n(80932),
    h = n(339085),
    p = n(906411),
    I = n(689789),
    m = n(407477),
    T = n(633302),
    S = n(806966),
    g = n(28546),
    A = n(357156),
    N = n(984933),
    O = n(430824),
    R = n(914010),
    v = n(771845),
    C = n(594174),
    y = n(78839),
    L = n(176354),
    D = n(111361),
    b = n(111846),
    M = n(392552),
    P = n(543241),
    U = n(304852),
    w = n(199257),
    x = n(149203),
    G = n(185923),
    k = n(689938);
((s = r || (r = {}))[(s.EMOJI = 0)] = 'EMOJI'), (s[(s.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (s[(s.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), ((o = i || (i = {}))[(o.SECTION_HEADING = 0)] = 'SECTION_HEADING'), (o[(o.SECTION_ROW = 1)] = 'SECTION_ROW');
let B = (e) => {
    let { channel: t, collapsedSections: n, includeCreateEmojiButton: r = !0, pickerIntention: i, emojiSearchResults: a, gridWidth: s, emojiPaddingHorizontal: o, emojiSpriteSize: l } = e,
        c = (0, E.e7)([h.ZP], () => h.ZP.categories),
        f = (0, E.e7)([O.Z], () => O.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
        S = null == t ? null : t.getGuildId(),
        g = (0, E.e7)([h.ZP], () => h.ZP.getDisambiguatedEmojiContext(S), [S]),
        B = (0, P.NJ)(S),
        F = (0, P.wC)(S),
        V = (0, P.q5)(S),
        { canSplitFrecencyList: H } = (0, I.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        Z = (0, m.p3)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        { topEmojis: Y, newlyAddedEmojis: j } = (0, w.Z)(S, i),
        W = (0, E.Wu)([v.ZP], () => v.ZP.getFlattenedGuildIds(), []),
        K = (0, E.e7)([h.ZP], () => h.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: z } = (0, A.X)(f),
        q = (0, E.e7)([C.default], () => C.default.getCurrentUser()),
        Q = (0, D.I5)(q),
        X = (0, E.e7)([y.ZP], () => y.ZP.inReverseTrial()),
        $ = g.getCustomEmoji(),
        J = (e) => {
            if (e.type === p.B.GUILD) return e.guildId;
        },
        ee = u.useMemo(() => d().groupBy($, J), [$]),
        { enabled: et, treatment: en } = M.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !z
            }
        ),
        { enabled: er } = b.Z.getCurrentConfig(
            { location: 'useEmojiGrid' },
            {
                autoTrackExposure: !Q,
                disable: Q
            }
        );
    return u.useMemo(() => {
        let e = [],
            u = [],
            E = [],
            h = [],
            p = 0,
            I = 0;
        if (null != g && null != s) {
            let m = Math.floor(s / (l + 2 * o)),
                S = 3 * m,
                g = (a, s) => {
                    let o = new Map(),
                        c = n.has(s.sectionId),
                        [_, f] = d().partition(a, (e) => {
                            let n = L.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: i
                            });
                            return o.set(e, n), !n;
                        }),
                        T = _.concat(f),
                        g = s.guild,
                        A = R.Z.getGuildId(),
                        N = s.sectionId === x.En.TOP_GUILD_EMOJI,
                        O = !N && null != g && A === g.id && T.length < g.getMaxEmojiSlots(),
                        v = N && T.length < m && !et,
                        C = null != g && N && et && en === M.B.WITH_TOP_LIST && ee[g.id].length < g.getMaxEmojiSlots(),
                        y = r && z && null != g && (O || v || C);
                    y && C && T.length === m && T.shift();
                    let D = T.length > S,
                        b = er && D && null != g && s.isNitroLocked,
                        U = b && !K.has(g.id);
                    U && T.splice(S - 1);
                    let w = et && y && !c,
                        G = Math.ceil((y || b ? T.length + 1 : T.length) / m),
                        B = [];
                    for (let e = 0; e < G; e++) {
                        let t = 0 === e,
                            n = e * m - (w && e > 0 ? 1 : 0),
                            r = n + m - (w && t ? 1 : 0),
                            i = T.slice(n, r).map((e, n) => {
                                var r, i;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: l,
                                    isDisabled: o.get(e),
                                    rowIndex: I,
                                    columnIndex: w && t ? n + 1 : n,
                                    visibleRowIndex: p,
                                    category: s.type,
                                    subCategory: s.sectionId === x.En.TOP_GUILD_EMOJI ? (0, P.IP)(Y, j, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : x.t0.NONE
                                };
                            });
                        if (
                            (w &&
                                t &&
                                !c &&
                                (i = [
                                    {
                                        type: 1,
                                        guildId: g.id,
                                        name: k.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        size: l,
                                        rowIndex: I,
                                        columnIndex: 0,
                                        visibleRowIndex: p
                                    },
                                    ...i
                                ]),
                            B.push(i),
                            !c)
                        ) {
                            if (!et && y && e === G - 1) {
                                let t = B[e];
                                t.push({
                                    type: 1,
                                    guildId: g.id,
                                    name: k.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: p
                                });
                            }
                            if (b && e === G - 1) {
                                let t = B[e];
                                t.push({
                                    type: 2,
                                    guildId: g.id,
                                    name: k.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION,
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: p,
                                    sectionCollapsedToThreeRows: U
                                });
                            }
                            h.push(i.length), E.push(i), p++;
                        }
                        I++;
                    }
                    let F = {
                        ...s,
                        count: a.length
                    };
                    u.push(F), e.push(c ? 0 : G);
                };
            if (null != a)
                0 !== a.unlocked.length &&
                    g(a.unlocked, {
                        type: x.En.SEARCH_RESULTS,
                        sectionId: x.En.SEARCH_RESULTS,
                        count: a.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== a.locked.length &&
                        g(a.locked, {
                            type: x.En.PREMIUM_UPSELL,
                            categoryId: x.UX.PREMIUM_UPSELL,
                            sectionId: x.En.PREMIUM_UPSELL,
                            count: a.locked.length,
                            isNitroLocked: !Q
                        });
            else
                for (let e of c)
                    if (e === x.UX.CUSTOM) {
                        let n = (n) => {
                            let r = ee[n];
                            if (null == r) return;
                            let a = r.filter(
                                (e) =>
                                    L.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != t ? t : N.ZP.getDefaultChannel(n),
                                        intention: i
                                    }) !== G.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === a.length) return;
                            let s = O.Z.getGuild(n),
                                o =
                                    X ||
                                    (!Q &&
                                        L.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: a,
                                            channel: t,
                                            intention: i
                                        }));
                            g(a, {
                                categoryId: e,
                                guild: s,
                                type: x.En.GUILD,
                                sectionId: null != s ? s.id : (0, _.Z)(),
                                count: a.length,
                                isNitroLocked: o
                            });
                        };
                        if ((null != f && n(f.id), (0, G.Gt)(i))) for (let e of W) (null == f || f.id !== e) && n(e);
                    } else if (e === x.UX.TOP_GUILD_EMOJI) {
                        if (null != f) {
                            let { allEmojis: t } = (0, U.J)({
                                topEmojis: Y,
                                newlyAddedEmojis: j
                            });
                            t.length > 0 &&
                                g(t, {
                                    categoryId: e,
                                    guild: O.Z.getGuild(f.id),
                                    type: x.En.TOP_GUILD_EMOJI,
                                    sectionId: x.En.TOP_GUILD_EMOJI,
                                    count: t.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === x.UX.RECENT) {
                        let n = (i === G.Hz.REACTION && (H || Z) ? V : F).filter(
                            (e) =>
                                !L.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        g(n, {
                            categoryId: e,
                            type: x.En.RECENT,
                            sectionId: x.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === x.UX.FAVORITES) {
                        let n = B.filter(
                            (e) =>
                                !L.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        0 !== n.length &&
                            g(n, {
                                categoryId: e,
                                type: x.En.FAVORITES,
                                sectionId: x.En.FAVORITES,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let t = T.ZP.getByCategory(e);
                        null != t &&
                            g(t, {
                                categoryId: e,
                                type: x.En.UNICODE,
                                sectionId: e,
                                count: t.length,
                                isNitroLocked: !1
                            });
                    }
        }
        return {
            columnCounts: h,
            emojiGrid: E,
            rowCountBySection: e,
            sectionDescriptors: u
        };
    }, [g, s, l, o, a, n, et, en, ee, r, z, er, K, t, i, Y, j, Q, c, f, W, H, Z, V, F, B, X]);
};
((l = a || (a = {}))[(l.PREMIUM = 0)] = 'PREMIUM'), (l[(l.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION');
let F = (e) => {
        let { pickerIntention: t, selectedChannel: n, onSelectEmoji: r, setUpsellConfigs: i, emojiSelectAnalytics: a, trackEmojiFavorited: s } = e,
            o = (0, E.e7)([h.ZP], () => h.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return u.useCallback(
            (e, l) => {
                switch (e.type) {
                    case 1:
                        r(void 0, l.isFinalSelection, l.isBurst);
                        return;
                    case 0: {
                        let { emoji: u } = e;
                        if (null == u) return;
                        let c = L.ZP.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (l.toggleFavorite) {
                            o.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, f.Xe)(u) : (null == s || s(e), (0, f.$K)(u));
                            return;
                        }
                        if (c === G.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === G.Z5.PREMIUM_LOCKED) {
                            i({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (c === G.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === p.B.GUILD) {
                            i({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return;
                        }
                        if (c === G.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
                    }
                }
            },
            [n, t, r, i, o, a, s]
        );
    },
    V = (e) => {
        let { emojiListRef: t } = e,
            n = (0, g.Iu)((e) => e.searchQuery),
            r = u.useCallback(
                (e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
                },
                [t]
            );
        return u.useCallback(
            (e) => {
                '' !== n ? ((0, g.ql)(''), S.kJ.setActiveCategoryIndex(e)) : r(e);
            },
            [r, n]
        );
    };
