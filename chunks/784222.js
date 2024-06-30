n.d(t, {
    Bg: function () {
        return a;
    },
    Ni: function () {
        return G;
    },
    YH: function () {
        return w;
    },
    ld: function () {
        return r;
    },
    rf: function () {
        return x;
    }
}), n(47120), n(653041);
var r, i, a, o, s, l, u = n(470079), c = n(392711), d = n.n(c), _ = n(772848), E = n(442837), f = n(80932), h = n(339085), p = n(906411), m = n(633302), I = n(806966), T = n(28546), g = n(889161), S = n(984933), A = n(430824), N = n(914010), v = n(771845), O = n(594174), R = n(176354), C = n(111361), y = n(392552), D = n(543241), L = n(304852), b = n(199257), M = n(149203), P = n(185923), U = n(689938);
(o = r || (r = {}))[o.EMOJI = 0] = 'EMOJI', o[o.CREATE_EMOJI = 1] = 'CREATE_EMOJI', (s = i || (i = {}))[s.SECTION_HEADING = 0] = 'SECTION_HEADING', s[s.SECTION_ROW = 1] = 'SECTION_ROW';
let w = e => {
    let {
            channel: t,
            collapsedSections: n,
            includeCreateEmojiButton: r = !0,
            pickerIntention: i,
            emojiSearchResults: a,
            gridWidth: o,
            emojiPaddingHorizontal: s,
            emojiSpriteSize: l
        } = e, c = (0, E.e7)([h.Z], () => h.Z.categories), f = (0, E.e7)([A.Z], () => A.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]), I = null == t ? null : t.getGuildId(), T = (0, E.e7)([h.Z], () => h.Z.getDisambiguatedEmojiContext(I), [I]), w = (0, D.NJ)(I), x = (0, D.wC)(I), {
            topEmojis: G,
            newlyAddedEmojis: k
        } = (0, b.Z)(I, i), B = (0, E.Wu)([v.ZP], () => v.ZP.getFlattenedGuildIds(), []), {canCreateExpressions: F} = (0, g.XJ)(f), V = (0, E.e7)([O.default], () => O.default.getCurrentUser()), H = (0, C.I5)(V), Z = T.getCustomEmoji(), Y = e => {
            if (e.type === p.B.GUILD)
                return e.guildId;
        }, j = u.useMemo(() => d().groupBy(Z, Y), [Z]), {
            enabled: W,
            treatment: K
        } = y.Z.useExperiment({ location: 'EmojiPicker' }, {
            autoTrackExposure: !0,
            disable: !F
        });
    return u.useMemo(() => {
        let e = [], u = [], E = [], h = [], p = 0, I = 0;
        if (null != T && null != o) {
            let T = Math.floor(o / (l + 2 * s)), g = (a, o) => {
                    let s = new Map(), c = n.has(o.sectionId), [_, f] = d().partition(a, e => {
                            let n = R.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: i
                            });
                            return s.set(e, n), !n;
                        }), m = _.concat(f), g = o.guild, S = N.Z.getGuildId(), A = o.sectionId === M.En.TOP_GUILD_EMOJI, v = !A && null != g && S === g.id && m.length < g.getMaxEmojiSlots(), O = A && m.length < T && !W, C = null != g && A && W && K === y.B.WITH_TOP_LIST && j[g.id].length < g.getMaxEmojiSlots(), L = r && F && null != g && (v || O || C);
                    L && C && m.length === T && m.shift();
                    let b = W && L && !c, P = Math.ceil((L ? m.length + 1 : m.length) / T), w = [];
                    for (let e = 0; e < P; e++) {
                        let t = 0 === e, n = e * T - (b && e > 0 ? 1 : 0), r = n + T - (b && t ? 1 : 0), i = m.slice(n, r).map((e, n) => {
                                var r, i;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: l,
                                    isDisabled: s.get(e),
                                    rowIndex: I,
                                    columnIndex: b && t ? n + 1 : n,
                                    visibleRowIndex: p,
                                    category: o.type,
                                    subCategory: o.sectionId === M.En.TOP_GUILD_EMOJI ? (0, D.IP)(G, k, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : M.t0.NONE
                                };
                            });
                        if (b && t && !c && (i = [
                                {
                                    type: 1,
                                    guildId: g.id,
                                    name: U.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: l,
                                    rowIndex: I,
                                    columnIndex: 0,
                                    visibleRowIndex: p
                                },
                                ...i
                            ]), w.push(i), !c) {
                            if (!W && L && e === P - 1) {
                                let t = w[e];
                                t.push({
                                    type: 1,
                                    guildId: g.id,
                                    name: U.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: p
                                });
                            }
                            h.push(i.length), E.push(i), p++;
                        }
                        I++;
                    }
                    let x = {
                        ...o,
                        count: a.length
                    };
                    u.push(x), e.push(c ? 0 : P);
                };
            if (null != a)
                0 !== a.unlocked.length && g(a.unlocked, {
                    type: M.En.SEARCH_RESULTS,
                    sectionId: M.En.SEARCH_RESULTS,
                    count: a.unlocked.length,
                    isNitroLocked: !1
                }), 0 !== a.locked.length && g(a.locked, {
                    type: M.En.PREMIUM_UPSELL,
                    categoryId: M.UX.PREMIUM_UPSELL,
                    sectionId: M.En.PREMIUM_UPSELL,
                    count: a.locked.length,
                    isNitroLocked: !H
                });
            else
                for (let e of c)
                    if (e === M.UX.CUSTOM) {
                        let n = n => {
                            let r = j[n];
                            if (null == r)
                                return;
                            let a = r.filter(e => R.ZP.getEmojiUnavailableReason({
                                emoji: e,
                                channel: null != t ? t : S.ZP.getDefaultChannel(n),
                                intention: i
                            }) !== P.Z5.DISALLOW_EXTERNAL);
                            if (0 === a.length)
                                return;
                            let o = A.Z.getGuild(n), s = !H && R.ZP.isEmojiCategoryNitroLocked({
                                    categoryEmojis: a,
                                    channel: t,
                                    intention: i
                                });
                            g(a, {
                                categoryId: e,
                                guild: o,
                                type: M.En.GUILD,
                                sectionId: null != o ? o.id : (0, _.Z)(),
                                count: a.length,
                                isNitroLocked: s
                            });
                        };
                        if (null != f && n(f.id), (0, P.Gt)(i))
                            for (let e of B)
                                (null == f || f.id !== e) && n(e);
                    } else if (e === M.UX.TOP_GUILD_EMOJI) {
                        if (null != f) {
                            let {allEmojis: t} = (0, L.J)({
                                topEmojis: G,
                                newlyAddedEmojis: k
                            });
                            t.length > 0 && g(t, {
                                categoryId: e,
                                guild: A.Z.getGuild(f.id),
                                type: M.En.TOP_GUILD_EMOJI,
                                sectionId: M.En.TOP_GUILD_EMOJI,
                                count: t.length,
                                isNitroLocked: !1
                            });
                        }
                    } else if (e === M.UX.RECENT) {
                        let n = x.filter(e => !R.ZP.isEmojiFiltered({
                            emoji: e,
                            channel: t,
                            intention: i
                        }));
                        g(n, {
                            categoryId: e,
                            type: M.En.RECENT,
                            sectionId: M.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === M.UX.FAVORITES) {
                        let n = w.filter(e => !R.ZP.isEmojiFiltered({
                            emoji: e,
                            channel: t,
                            intention: i
                        }));
                        0 !== n.length && g(n, {
                            categoryId: e,
                            type: M.En.FAVORITES,
                            sectionId: M.En.FAVORITES,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else {
                        let t = m.ZP.getByCategory(e);
                        null != t && g(t, {
                            categoryId: e,
                            type: M.En.UNICODE,
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
    }, [
        T,
        o,
        l,
        s,
        a,
        n,
        t,
        i,
        c,
        f,
        j,
        B,
        k,
        G,
        x,
        w,
        F,
        r,
        H,
        W,
        K
    ]);
};
(l = a || (a = {}))[l.PREMIUM = 0] = 'PREMIUM', l[l.ROLE_SUBSCRIPTION = 1] = 'ROLE_SUBSCRIPTION';
let x = e => {
        let {
                pickerIntention: t,
                selectedChannel: n,
                onSelectEmoji: r,
                setUpsellConfigs: i,
                emojiSelectAnalytics: a,
                trackEmojiFavorited: o
            } = e, s = (0, E.e7)([h.Z], () => h.Z.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return u.useCallback((e, l) => {
            switch (e.type) {
            case 1:
                r(void 0, l.isFinalSelection, l.isBurst);
                return;
            case 0: {
                    let {emoji: u} = e;
                    if (null == u)
                        return;
                    let c = R.ZP.getEmojiUnavailableReason({
                        emoji: u,
                        channel: n,
                        intention: t
                    });
                    if (l.toggleFavorite) {
                        s.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, f.Xe)(u) : (null == o || o(e), (0, f.$K)(u));
                        return;
                    }
                    if (c === P.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE)
                        return;
                    if (c === P.Z5.PREMIUM_LOCKED) {
                        i({
                            type: 0,
                            emojiDescriptor: e
                        });
                        return;
                    }
                    if (c === P.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === p.B.GUILD) {
                        i({
                            type: 1,
                            guildId: u.guildId,
                            emojiId: u.id
                        });
                        return;
                    }
                    if (c === P.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE)
                        return;
                    null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
                }
            }
        }, [
            n,
            t,
            r,
            i,
            s,
            a,
            o
        ]);
    }, G = e => {
        let {emojiListRef: t} = e, n = (0, T.Iu)(e => e.searchQuery), r = u.useCallback(e => {
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
            }, [t]);
        return u.useCallback(e => {
            '' !== n ? ((0, T.ql)(''), I.kJ.setActiveCategoryIndex(e)) : r(e);
        }, [
            r,
            n
        ]);
    };
