n.d(t, {
    Bg: function () {
        return a;
    },
    Ni: function () {
        return F;
    },
    YH: function () {
        return B;
    },
    ld: function () {
        return r;
    },
    rf: function () {
        return Z;
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
    u = n(192379),
    c = n(392711),
    d = n.n(c),
    f = n(772848),
    _ = n(442837),
    h = n(80932),
    p = n(339085),
    m = n(906411),
    g = n(689789),
    E = n(407477),
    v = n(633302),
    I = n(806966),
    S = n(28546),
    T = n(357156),
    b = n(140465),
    y = n(984933),
    A = n(430824),
    N = n(914010),
    C = n(771845),
    R = n(594174),
    O = n(176354),
    D = n(111361),
    L = n(111846),
    x = n(392552),
    w = n(543241),
    M = n(304852),
    P = n(199257),
    k = n(149203),
    U = n(185923),
    G = n(388032);
((s = r || (r = {}))[(s.EMOJI = 0)] = 'EMOJI'), (s[(s.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (s[(s.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), ((o = i || (i = {}))[(o.SECTION_HEADING = 0)] = 'SECTION_HEADING'), (o[(o.SECTION_ROW = 1)] = 'SECTION_ROW');
let B = (e) => {
    let { channel: t, collapsedSections: n, includeCreateEmojiButton: r = !0, pickerIntention: i, emojiSearchResults: a, gridWidth: s, emojiPaddingHorizontal: o, emojiSpriteSize: l } = e,
        c = (0, _.e7)([p.ZP], () => p.ZP.categories),
        h = (0, _.e7)([A.Z], () => A.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
        I = null == t ? null : t.getGuildId(),
        S = (0, _.e7)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(I), [I]),
        B = (0, w.NJ)(I),
        Z = (0, w.wC)(I),
        F = (0, w.q5)(I),
        { canSplitFrecencyList: V } = (0, g.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        j = (0, E.p3)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        });
    E.Xb.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 });
    let { topEmojis: H, newlyAddedEmojis: Y } = (0, P.Z)(I, i),
        W = (0, _.Wu)([C.ZP], () => C.ZP.getFlattenedGuildIds(), []),
        K = (0, _.e7)([p.ZP], () => p.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: z } = (0, T.XJ)(h),
        q = (0, _.e7)([R.default], () => R.default.getCurrentUser()),
        Q = (0, D.I5)(q),
        X = (0, b.x8)('useEmojiGrid'),
        J = S.getCustomEmoji(),
        $ = (e) => {
            if (e.type === m.B.GUILD) return e.guildId;
        },
        ee = u.useMemo(() => d().groupBy(J, $), [J]),
        { enabled: et, treatment: en } = x.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !z
            }
        ),
        { enabled: er } = L.Z.getCurrentConfig(
            { location: 'useEmojiGrid' },
            {
                autoTrackExposure: !Q,
                disable: Q
            }
        );
    return u.useMemo(() => {
        let e = [],
            u = [],
            _ = [],
            p = [],
            m = 0,
            g = 0;
        if (null != S && null != s) {
            let E = Math.floor(s / (l + 2 * o)),
                I = 3 * E,
                S = (a, s) => {
                    let o = new Map(),
                        c = n.has(s.sectionId),
                        [f, h] = d().partition(a, (e) => {
                            let n = O.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: i
                            });
                            return o.set(e, n), !n;
                        }),
                        v = f.concat(h),
                        S = s.guild,
                        T = N.Z.getGuildId(),
                        b = s.sectionId === k.En.TOP_GUILD_EMOJI,
                        y = !b && null != S && T === S.id && v.length < S.getMaxEmojiSlots(),
                        A = b && v.length < E && !et,
                        C = null != S && b && et && en === x.B.WITH_TOP_LIST && ee[S.id].length < S.getMaxEmojiSlots(),
                        R = r && z && null != S && (y || A || C);
                    R && C && v.length === E && v.shift();
                    let D = v.length > I,
                        L = er && D && null != S && s.isNitroLocked,
                        M = L && !K.has(S.id);
                    M && v.splice(I - 1);
                    let P = et && R && !c,
                        U = Math.ceil((R || L ? v.length + 1 : v.length) / E),
                        B = [];
                    for (let e = 0; e < U; e++) {
                        let t = 0 === e,
                            n = e * E - (P && e > 0 ? 1 : 0),
                            r = n + E - (P && t ? 1 : 0),
                            i = v.slice(n, r).map((e, n) => {
                                var r, i;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: l,
                                    isDisabled: o.get(e),
                                    rowIndex: g,
                                    columnIndex: P && t ? n + 1 : n,
                                    visibleRowIndex: m,
                                    category: s.type,
                                    subCategory: s.sectionId === k.En.TOP_GUILD_EMOJI ? (0, w.IP)(H, Y, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : k.t0.NONE
                                };
                            });
                        if (
                            (P &&
                                t &&
                                !c &&
                                (i = [
                                    {
                                        type: 1,
                                        guildId: S.id,
                                        name: G.intl.string(G.t['Z/r7IS']),
                                        size: l,
                                        rowIndex: g,
                                        columnIndex: 0,
                                        visibleRowIndex: m
                                    },
                                    ...i
                                ]),
                            B.push(i),
                            !c)
                        ) {
                            if (!et && R && e === U - 1) {
                                let t = B[e];
                                t.push({
                                    type: 1,
                                    guildId: S.id,
                                    name: G.intl.string(G.t['Z/r7IS']),
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: m
                                });
                            }
                            if (L && e === U - 1) {
                                let t = B[e];
                                t.push({
                                    type: 2,
                                    guildId: S.id,
                                    name: G.intl.string(G.t.NZI2Zm),
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: m,
                                    sectionCollapsedToThreeRows: M
                                });
                            }
                            p.push(i.length), _.push(i), m++;
                        }
                        g++;
                    }
                    let Z = {
                        ...s,
                        count: a.length
                    };
                    u.push(Z), e.push(c ? 0 : U);
                };
            if (null != a)
                0 !== a.unlocked.length &&
                    S(a.unlocked, {
                        type: k.En.SEARCH_RESULTS,
                        sectionId: k.En.SEARCH_RESULTS,
                        count: a.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== a.locked.length &&
                        S(a.locked, {
                            type: k.En.PREMIUM_UPSELL,
                            categoryId: k.UX.PREMIUM_UPSELL,
                            sectionId: k.En.PREMIUM_UPSELL,
                            count: a.locked.length,
                            isNitroLocked: !Q
                        });
            else
                for (let e of c)
                    if (e === k.UX.CUSTOM) {
                        let n = (n) => {
                            let r = ee[n];
                            if (null == r) return;
                            let a = r.filter(
                                (e) =>
                                    O.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != t ? t : y.ZP.getDefaultChannel(n),
                                        intention: i
                                    }) !== U.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === a.length) return;
                            let s = A.Z.getGuild(n),
                                o =
                                    X ||
                                    (!Q &&
                                        O.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: a,
                                            channel: t,
                                            intention: i
                                        }));
                            S(a, {
                                categoryId: e,
                                guild: s,
                                type: k.En.GUILD,
                                sectionId: null != s ? s.id : (0, f.Z)(),
                                count: a.length,
                                isNitroLocked: o
                            });
                        };
                        if ((null != h && n(h.id), (0, U.Gt)(i))) for (let e of W) (null == h || h.id !== e) && n(e);
                    } else if (e === k.UX.TOP_GUILD_EMOJI) {
                        if (null != h) {
                            let { allEmojis: t } = (0, M.J)({
                                topEmojis: H,
                                newlyAddedEmojis: Y
                            });
                            t.length > 0 &&
                                S(t, {
                                    categoryId: e,
                                    guild: A.Z.getGuild(h.id),
                                    type: k.En.TOP_GUILD_EMOJI,
                                    sectionId: k.En.TOP_GUILD_EMOJI,
                                    count: t.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === k.UX.RECENT) {
                        let n = (i === U.Hz.REACTION && (V || j) ? F : Z).filter(
                            (e) =>
                                !O.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        S(n, {
                            categoryId: e,
                            type: k.En.RECENT,
                            sectionId: k.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === k.UX.FAVORITES) {
                        let n = B.filter(
                            (e) =>
                                !O.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        0 !== n.length &&
                            S(n, {
                                categoryId: e,
                                type: k.En.FAVORITES,
                                sectionId: k.En.FAVORITES,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let t = v.ZP.getByCategory(e);
                        null != t &&
                            S(t, {
                                categoryId: e,
                                type: k.En.UNICODE,
                                sectionId: e,
                                count: t.length,
                                isNitroLocked: !1
                            });
                    }
        }
        return {
            columnCounts: p,
            emojiGrid: _,
            rowCountBySection: e,
            sectionDescriptors: u
        };
    }, [S, s, l, o, a, n, et, en, ee, r, z, er, K, t, i, H, Y, Q, c, h, W, V, j, F, Z, B, X]);
};
((l = a || (a = {}))[(l.PREMIUM = 0)] = 'PREMIUM'), (l[(l.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION');
let Z = (e) => {
        let { pickerIntention: t, selectedChannel: n, onSelectEmoji: r, setUpsellConfigs: i, emojiSelectAnalytics: a, trackEmojiFavorited: s } = e,
            o = (0, _.e7)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return u.useCallback(
            (e, l) => {
                switch (e.type) {
                    case 1:
                        r(void 0, l.isFinalSelection, l.isBurst);
                        return;
                    case 0: {
                        let { emoji: u } = e;
                        if (null == u) return;
                        let c = O.ZP.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (l.toggleFavorite) {
                            o.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, h.Xe)(u) : (null == s || s(e), (0, h.$K)(u));
                            return;
                        }
                        if (c === U.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === U.Z5.PREMIUM_LOCKED) {
                            i({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (c === U.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === m.B.GUILD) {
                            i({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return;
                        }
                        if (c === U.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
                    }
                }
            },
            [n, t, r, i, o, a, s]
        );
    },
    F = (e) => {
        let { emojiListRef: t } = e,
            n = (0, S.Iu)((e) => e.searchQuery),
            r = u.useCallback(
                (e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
                },
                [t]
            );
        return u.useCallback(
            (e) => {
                '' !== n ? ((0, S.ql)(''), I.kJ.setActiveCategoryIndex(e)) : r(e);
            },
            [r, n]
        );
    };
