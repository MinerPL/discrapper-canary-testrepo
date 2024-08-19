n.d(t, {
    Bg: function () {
        return a;
    },
    Ni: function () {
        return F;
    },
    YH: function () {
        return k;
    },
    ld: function () {
        return r;
    },
    rf: function () {
        return B;
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
    m = n(689789),
    I = n(633302),
    T = n(806966),
    g = n(28546),
    S = n(889161),
    A = n(984933),
    N = n(430824),
    v = n(914010),
    O = n(771845),
    R = n(594174),
    C = n(78839),
    y = n(176354),
    D = n(111361),
    L = n(111846),
    b = n(392552),
    M = n(543241),
    P = n(304852),
    U = n(199257),
    w = n(149203),
    x = n(185923),
    G = n(689938);
((s = r || (r = {}))[(s.EMOJI = 0)] = 'EMOJI'), (s[(s.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (s[(s.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), ((o = i || (i = {}))[(o.SECTION_HEADING = 0)] = 'SECTION_HEADING'), (o[(o.SECTION_ROW = 1)] = 'SECTION_ROW');
let k = (e) => {
    let { channel: t, collapsedSections: n, includeCreateEmojiButton: r = !0, pickerIntention: i, emojiSearchResults: a, gridWidth: s, emojiPaddingHorizontal: o, emojiSpriteSize: l } = e,
        c = (0, E.e7)([h.ZP], () => h.ZP.categories),
        f = (0, E.e7)([N.Z], () => N.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
        T = null == t ? null : t.getGuildId(),
        g = (0, E.e7)([h.ZP], () => h.ZP.getDisambiguatedEmojiContext(T), [T]),
        k = (0, M.NJ)(T),
        B = (0, M.wC)(T),
        F = (0, M.q5)(T),
        { canSplitFrecencyList: V } = (0, m.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        { topEmojis: H, newlyAddedEmojis: Z } = (0, U.Z)(T, i),
        Y = (0, E.Wu)([O.ZP], () => O.ZP.getFlattenedGuildIds(), []),
        j = (0, E.e7)([h.ZP], () => h.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: W } = (0, S.XJ)(f),
        K = (0, E.e7)([R.default], () => R.default.getCurrentUser()),
        z = (0, D.I5)(K),
        q = (0, E.e7)([C.ZP], () => C.ZP.inReverseTrial()),
        Q = g.getCustomEmoji(),
        X = (e) => {
            if (e.type === p.B.GUILD) return e.guildId;
        },
        $ = u.useMemo(() => d().groupBy(Q, X), [Q]),
        { enabled: J, treatment: ee } = b.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !W
            }
        ),
        { enabled: et } = L.Z.getCurrentConfig(
            { location: 'useEmojiGrid' },
            {
                autoTrackExposure: !z,
                disable: z
            }
        );
    return u.useMemo(() => {
        let e = [],
            u = [],
            E = [],
            h = [],
            p = 0,
            m = 0;
        if (null != g && null != s) {
            let T = Math.floor(s / (l + 2 * o)),
                g = 3 * T,
                S = (a, s) => {
                    let o = new Map(),
                        c = n.has(s.sectionId),
                        [_, f] = d().partition(a, (e) => {
                            let n = y.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: i
                            });
                            return o.set(e, n), !n;
                        }),
                        I = _.concat(f),
                        S = s.guild,
                        A = v.Z.getGuildId(),
                        N = s.sectionId === w.En.TOP_GUILD_EMOJI,
                        O = !N && null != S && A === S.id && I.length < S.getMaxEmojiSlots(),
                        R = N && I.length < T && !J,
                        C = null != S && N && J && ee === b.B.WITH_TOP_LIST && $[S.id].length < S.getMaxEmojiSlots(),
                        D = r && W && null != S && (O || R || C);
                    D && C && I.length === T && I.shift();
                    let L = I.length > g && null != S && S.id !== A,
                        P = et && L && !j.has(S.id);
                    P && I.splice(g - 1);
                    let U = J && D && !c,
                        x = Math.ceil((D ? I.length + 1 : I.length) / T),
                        k = [];
                    for (let e = 0; e < x; e++) {
                        let t = 0 === e,
                            n = e * T - (U && e > 0 ? 1 : 0),
                            r = n + T - (U && t ? 1 : 0),
                            i = I.slice(n, r).map((e, n) => {
                                var r, i;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: l,
                                    isDisabled: o.get(e),
                                    rowIndex: m,
                                    columnIndex: U && t ? n + 1 : n,
                                    visibleRowIndex: p,
                                    category: s.type,
                                    subCategory: s.sectionId === w.En.TOP_GUILD_EMOJI ? (0, M.IP)(H, Z, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : w.t0.NONE
                                };
                            });
                        if (
                            (U &&
                                t &&
                                !c &&
                                (i = [
                                    {
                                        type: 1,
                                        guildId: S.id,
                                        name: G.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        size: l,
                                        rowIndex: m,
                                        columnIndex: 0,
                                        visibleRowIndex: p
                                    },
                                    ...i
                                ]),
                            k.push(i),
                            !c)
                        ) {
                            if (!J && D && e === x - 1) {
                                let t = k[e];
                                t.push({
                                    type: 1,
                                    guildId: S.id,
                                    name: G.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: p
                                });
                            }
                            if (et && e === x - 1 && L) {
                                let t = k[e];
                                t.push({
                                    type: 2,
                                    guildId: S.id,
                                    name: G.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION,
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: p,
                                    sectionCollapsedToThreeRows: P
                                });
                            }
                            h.push(i.length), E.push(i), p++;
                        }
                        m++;
                    }
                    let B = {
                        ...s,
                        count: a.length
                    };
                    u.push(B), e.push(c ? 0 : x);
                };
            if (null != a)
                0 !== a.unlocked.length &&
                    S(a.unlocked, {
                        type: w.En.SEARCH_RESULTS,
                        sectionId: w.En.SEARCH_RESULTS,
                        count: a.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== a.locked.length &&
                        S(a.locked, {
                            type: w.En.PREMIUM_UPSELL,
                            categoryId: w.UX.PREMIUM_UPSELL,
                            sectionId: w.En.PREMIUM_UPSELL,
                            count: a.locked.length,
                            isNitroLocked: !z
                        });
            else
                for (let e of c)
                    if (e === w.UX.CUSTOM) {
                        let n = (n) => {
                            let r = $[n];
                            if (null == r) return;
                            let a = r.filter(
                                (e) =>
                                    y.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != t ? t : A.ZP.getDefaultChannel(n),
                                        intention: i
                                    }) !== x.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === a.length) return;
                            let s = N.Z.getGuild(n),
                                o =
                                    q ||
                                    (!z &&
                                        y.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: a,
                                            channel: t,
                                            intention: i
                                        }));
                            S(a, {
                                categoryId: e,
                                guild: s,
                                type: w.En.GUILD,
                                sectionId: null != s ? s.id : (0, _.Z)(),
                                count: a.length,
                                isNitroLocked: o
                            });
                        };
                        if ((null != f && n(f.id), (0, x.Gt)(i))) for (let e of Y) (null == f || f.id !== e) && n(e);
                    } else if (e === w.UX.TOP_GUILD_EMOJI) {
                        if (null != f) {
                            let { allEmojis: t } = (0, P.J)({
                                topEmojis: H,
                                newlyAddedEmojis: Z
                            });
                            t.length > 0 &&
                                S(t, {
                                    categoryId: e,
                                    guild: N.Z.getGuild(f.id),
                                    type: w.En.TOP_GUILD_EMOJI,
                                    sectionId: w.En.TOP_GUILD_EMOJI,
                                    count: t.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === w.UX.RECENT) {
                        let n = (i === x.Hz.REACTION && V ? F : B).filter(
                            (e) =>
                                !y.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        S(n, {
                            categoryId: e,
                            type: w.En.RECENT,
                            sectionId: w.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === w.UX.FAVORITES) {
                        let n = k.filter(
                            (e) =>
                                !y.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        0 !== n.length &&
                            S(n, {
                                categoryId: e,
                                type: w.En.FAVORITES,
                                sectionId: w.En.FAVORITES,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let t = I.ZP.getByCategory(e);
                        null != t &&
                            S(t, {
                                categoryId: e,
                                type: w.En.UNICODE,
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
    }, [g, s, l, o, a, n, J, ee, $, r, W, t, i, H, Z, z, c, f, Y, V, F, B, k, j, et, q]);
};
((l = a || (a = {}))[(l.PREMIUM = 0)] = 'PREMIUM'), (l[(l.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION');
let B = (e) => {
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
                        let c = y.ZP.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (l.toggleFavorite) {
                            o.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, f.Xe)(u) : (null == s || s(e), (0, f.$K)(u));
                            return;
                        }
                        if (c === x.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === x.Z5.PREMIUM_LOCKED) {
                            i({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (c === x.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === p.B.GUILD) {
                            i({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return;
                        }
                        if (c === x.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
                    }
                }
            },
            [n, t, r, i, o, a, s]
        );
    },
    F = (e) => {
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
                '' !== n ? ((0, g.ql)(''), T.kJ.setActiveCategoryIndex(e)) : r(e);
            },
            [r, n]
        );
    };
