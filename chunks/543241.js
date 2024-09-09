n.d(t, {
    A3: function () {
        return L;
    },
    C1: function () {
        return Z;
    },
    DV: function () {
        return B;
    },
    Gn: function () {
        return U;
    },
    IP: function () {
        return j;
    },
    J1: function () {
        return x;
    },
    MZ: function () {
        return Y;
    },
    NJ: function () {
        return H;
    },
    Nf: function () {
        return G;
    },
    PC: function () {
        return D;
    },
    Y1: function () {
        return k;
    },
    fe: function () {
        return w;
    },
    jA: function () {
        return b;
    },
    kI: function () {
        return y;
    },
    nV: function () {
        return W;
    },
    q5: function () {
        return V;
    },
    to: function () {
        return P;
    },
    wC: function () {
        return F;
    },
    y$: function () {
        return M;
    }
}),
    n(733860),
    n(653041),
    n(47120),
    n(724458),
    n(627341),
    n(757143);
var r = n(470079),
    i = n(392711),
    a = n(278074),
    s = n(442837),
    o = n(367907),
    l = n(339085),
    u = n(689789),
    c = n(407477);
n(353842);
var d = n(558217),
    _ = n(675478),
    E = n(430824),
    f = n(771845),
    h = n(594174),
    p = n(626135),
    I = n(70956),
    m = n(176354),
    T = n(111361);
n(709054);
var S = n(304852),
    g = n(199257),
    A = n(149203),
    N = n(981631),
    O = n(185923),
    R = n(957825),
    v = n(474936),
    C = n(689938);
let y = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
        (0, d.O)(n);
        let i = (0, O.Gt)(e),
            a = F(n),
            o = V(n),
            { canSplitFrecencyList: _ } = (0, u.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            p = (0, c.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            I = H(n),
            { topEmojis: N, newlyAddedEmojis: R } = (0, g.Z)(n, e),
            { allEmojis: v } = (0, S.Z)({
                topEmojis: N,
                newlyAddedEmojis: R
            }),
            y = (0, s.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
            L = (0, s.e7)([E.Z], () => {
                var e;
                return null === (e = E.Z.getGuild(n)) || void 0 === e ? void 0 : e.name;
            }),
            D = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
            b = (0, T.I5)(D);
        return r.useMemo(() => {
            let r = y.getGroupedCustomEmoji(),
                s = f.ZP.getFlattenedGuildIds(),
                u = [],
                c = (r, i) =>
                    m.ZP.getEmojiUnavailableReasons({
                        categoryEmojis: r,
                        channel: t,
                        guildId: n,
                        intention: e,
                        computeUnfiltered: i
                    });
            return (
                ((e, i) => {
                    for (let a of e) {
                        let e;
                        if ((i === A.En.GUILD && (e = E.Z.getGuild(a)), null == e)) continue;
                        let s = null == r ? void 0 : r[e.id];
                        if (null == s || 0 === s.length) continue;
                        let { emojisDisabled: o, emojisFilteredCount: l, emojisPremiumLockedCount: d, emojiNitroLocked: _ } = c(s, !1);
                        if (null != t && s.length === l) continue;
                        let f = null;
                        i === A.En.GUILD &&
                            (f = {
                                type: A.En.GUILD,
                                guild: e,
                                isNitroLocked: !b && _ && d === s.length,
                                emojis: s,
                                emojisDisabled: o
                            }),
                            null != f && (e.id === n ? u.unshift(f) : u.push(f));
                    }
                })(s, A.En.GUILD),
                l.ZP.categories.reduce((t, r) => {
                    if (r === A.UX.TOP_GUILD_EMOJI) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = c(v, !0);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: A.En.TOP_GUILD_EMOJI,
                            id: r,
                            name: C.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({ guildName: L }),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e
                        });
                    } else if (r === A.UX.RECENT) {
                        let { emojisDisabled: n, emojisUnfiltered: i } = c(e === O.Hz.REACTION && (_ || p) ? o : a, !0);
                        if (null == i || 0 === i.length) return t;
                        t.push({
                            type: A.En.RECENT,
                            id: r,
                            name: C.Z.Messages.EMOJI_CATEGORY_RECENT,
                            isNitroLocked: !1,
                            emojis: i,
                            emojisDisabled: n
                        });
                    } else if (r === A.UX.FAVORITES) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = c(I, !0);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: A.En.FAVORITES,
                            id: r,
                            name: C.Z.Messages.CATEGORY_FAVORITE,
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e
                        });
                    } else if (r === A.UX.CUSTOM) {
                        let e = u;
                        !i && (e = u.filter((e) => e.type === A.En.GUILD && e.guild.id === n)), t.push(...e);
                    } else
                        t.push({
                            type: A.En.UNICODE,
                            id: r,
                            name: r,
                            isNitroLocked: !1
                        });
                    return t;
                }, [])
            );
        }, [y, t, n, e, b, v, L, _, p, o, a, I, i]);
    },
    L = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        p.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? N.ZY5.GUILD_CHANNEL : N.ZY5.DM_CHANNEL,
            location_section: null != e ? N.jXE.EMOJI_PICKER_POPOUT : N.jXE.CUSTOM_STATUS_MODAL
        });
    },
    D = (e, t) => {
        o.ZP.trackWithMetadata(N.rMx.SEARCH_STARTED, {
            search_type: null != t && t === O.Hz.REACTION ? N.aib.EMOJI_REACTION : N.aib.EMOJI,
            location: e
        });
    },
    b = (e, t, n, r, i) => {
        o.ZP.trackWithMetadata(N.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === O.Hz.REACTION ? N.aib.EMOJI_REACTION : N.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n
        });
    },
    M = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: s, searchQuery: l, isLocked: u, location: c, intention: d, index: _ } = e,
            E = null !== (r = i.uniqueName) && void 0 !== r ? r : i.name,
            f = (0, a.EQ)(d)
                .with(O.Hz.REACTION, () => N.aib.EMOJI_REACTION)
                .with(O.Hz.AUTO_SUGGESTION, () => N.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => N.aib.EMOJI);
        o.ZP.trackWithMetadata(N.rMx.SEARCH_RESULT_SELECTED, {
            search_type: f,
            location: c,
            expression_guild_id: i.guildId,
            emoji_id: i.id,
            emoji_name: E,
            is_custom: null != i.id,
            is_animated: i.animated,
            is_locked: u,
            query: l,
            index_num: _,
            load_id: null == s ? void 0 : s.loadId,
            total_results: null == s ? void 0 : null === (t = s.results) || void 0 === t ? void 0 : t.length,
            emoji_suggestion_ids:
                null == s
                    ? void 0
                    : null === (n = s.results) || void 0 === n
                      ? void 0
                      : n
                            .map((e) => {
                                let { emoji: t } = e;
                                return t.id;
                            })
                            .filter((e) => null != e)
        });
    },
    P = (e, t) => {
        o.ZP.trackWithMetadata(N.rMx.SEARCH_RESULT_EMPTY, {
            search_type: N.aib.EMOJI,
            query: t,
            location: e
        });
    },
    U = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        o.ZP.trackWithMetadata(N.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == n ? void 0 : n.toString(),
            newly_added_highlight: i,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: r
        });
    },
    w = (e) => {
        var t;
        let n,
            { emoji: r, location: i, pickerIntention: a, category: s, subCategory: l = A.t0.NONE, position: u, newlyAddedHighlight: c, isBurstReaction: d } = e;
        switch (a) {
            case O.Hz.REACTION:
                n = d ? v.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : v.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case O.Hz.STATUS:
                n = v.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                n = v.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let _ = null !== (t = r.uniqueName) && void 0 !== t ? t : r.name;
        o.ZP.trackWithMetadata(N.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: i,
            expression_id: r.id,
            expression_name: _,
            expression_guild_id: r.guildId,
            is_custom: null != r.id,
            is_animated: r.animated,
            expression_picker_section: s,
            expression_section: null == l ? void 0 : l.toString(),
            emoji_position: u,
            newly_added_highlight: c,
            is_burst: d
        });
    },
    x = (e) => {
        var t;
        let { emoji: n, location: r } = e,
            i = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
        o.ZP.trackWithMetadata(N.rMx.EXPRESSION_FAVORITED, {
            location: r,
            expression_type: R.X1.EMOJI,
            expression_id: n.id,
            expression_name: i,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated
        });
    };
(0, i.throttle)(
    (e) => {
        let { emojiSuggestions: t, analyticsLocation: n } = e;
        o.ZP.trackWithMetadata(N.rMx.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: N.Z9p.EMOJI,
            suggestion_quantity: t.results.length,
            custom_quantity: t.results.filter((e) => {
                let { emoji: t } = e;
                return null != t.id;
            }).length,
            load_id: t.loadId,
            location: n
        });
    },
    I.Z.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0
    }
);
let G = (e, t) => {
        if (e.type === A.En.GUILD) return null != t ? t.toString() : '';
        return e.id;
    },
    k = (e, t) => {
        switch (e) {
            case A.UX.TOP_GUILD_EMOJI:
                return C.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({ guildName: t });
            case A.UX.RECENT:
                return C.Z.Messages.EMOJI_CATEGORY_RECENT;
            case A.UX.FAVORITES:
                return C.Z.Messages.CATEGORY_FAVORITE;
            case A.UX.ACTIVITY:
                return C.Z.Messages.EMOJI_CATEGORY_ACTIVITY;
            case A.UX.FLAGS:
                return C.Z.Messages.EMOJI_CATEGORY_FLAGS;
            case A.UX.FOOD:
                return C.Z.Messages.EMOJI_CATEGORY_FOOD;
            case A.UX.NATURE:
                return C.Z.Messages.EMOJI_CATEGORY_NATURE;
            case A.UX.OBJECTS:
                return C.Z.Messages.EMOJI_CATEGORY_OBJECTS;
            case A.UX.PEOPLE:
                return C.Z.Messages.EMOJI_CATEGORY_PEOPLE;
            case A.UX.SYMBOLS:
                return C.Z.Messages.EMOJI_CATEGORY_SYMBOLS;
            case A.UX.TRAVEL:
                return C.Z.Messages.EMOJI_CATEGORY_TRAVEL;
            case A.UX.PREMIUM_UPSELL:
                return C.Z.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
            default:
                return null != t ? t : e;
        }
    };
function B(e, t, n) {
    r.useEffect(() => {
        _.DZ.loadIfNecessary();
    }, []);
    let i = (0, O.Gt)(n);
    return (0, s.e7)(
        [l.ZP],
        () => {
            let r = e.replace(/^:/, '').replace(/:$/, '');
            return '' === r
                ? null
                : l.ZP.searchWithoutFetchingLatest({
                      channel: t,
                      query: r,
                      count: 0,
                      intention: n,
                      includeExternalGuilds: i
                  });
        },
        [t, n, e, i],
        s.pF
    );
}
function F(e) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function V(e) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function H(e) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function Z(e, t) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    );
}
function Y(e) {
    return (
        r.useEffect(() => {
            _.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function j(e, t, n) {
    if (null == n) return A.t0.NONE;
    let r = e.map((e) => {
            var t, n;
            return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? A.t0.TOP_GUILD_EMOJI : i.includes(n) ? A.t0.NEWLY_ADDED_EMOJI : A.t0.NONE;
}
function W(e, t) {
    return e === O.Hz.REACTION ? (t ? C.Z.Messages.SEARCH_FOR_SUPER_REACTION : C.Z.Messages.SEARCH_FOR_REACTION) : C.Z.Messages.SEARCH_FOR_EMOJI;
}
