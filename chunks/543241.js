n.d(t, {
    A3: function () {
        return O;
    },
    C1: function () {
        return j;
    },
    DV: function () {
        return B;
    },
    Gn: function () {
        return M;
    },
    IP: function () {
        return Y;
    },
    J1: function () {
        return k;
    },
    MZ: function () {
        return H;
    },
    NJ: function () {
        return V;
    },
    Nf: function () {
        return U;
    },
    PC: function () {
        return D;
    },
    Y1: function () {
        return G;
    },
    fe: function () {
        return P;
    },
    jA: function () {
        return L;
    },
    kI: function () {
        return R;
    },
    nV: function () {
        return W;
    },
    q5: function () {
        return F;
    },
    to: function () {
        return w;
    },
    wC: function () {
        return Z;
    },
    y$: function () {
        return x;
    }
}),
    n(733860),
    n(653041),
    n(47120),
    n(724458),
    n(627341),
    n(757143);
var r = n(192379),
    i = n(392711),
    a = n(278074),
    s = n(442837),
    o = n(367907),
    l = n(339085),
    u = n(689789),
    c = n(407477);
n(353842);
var d = n(558217),
    f = n(675478),
    _ = n(430824),
    h = n(771845),
    p = n(594174),
    m = n(626135),
    g = n(70956),
    E = n(176354),
    v = n(111361);
n(709054);
var I = n(304852),
    S = n(199257),
    T = n(149203),
    b = n(981631),
    y = n(185923),
    A = n(957825),
    N = n(474936),
    C = n(388032);
let R = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
        (0, d.O)(n);
        let i = (0, y.Gt)(e),
            a = Z(n),
            o = F(n),
            { canSplitFrecencyList: f } = (0, u.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            m = (0, c.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            });
        c.Xb.useExperiment({ location: 'useEmojiCategories' }, { autoTrackExposure: !0 });
        let g = V(n),
            { topEmojis: b, newlyAddedEmojis: A } = (0, S.Z)(n, e),
            { allEmojis: N } = (0, I.Z)({
                topEmojis: b,
                newlyAddedEmojis: A
            }),
            R = (0, s.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
            O = (0, s.e7)([_.Z], () => {
                var e;
                return null === (e = _.Z.getGuild(n)) || void 0 === e ? void 0 : e.name;
            }),
            D = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
            L = (0, v.I5)(D);
        return r.useMemo(() => {
            let r = R.getGroupedCustomEmoji(),
                s = h.ZP.getFlattenedGuildIds(),
                u = [],
                c = (r, i) =>
                    E.ZP.getEmojiUnavailableReasons({
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
                        if ((i === T.En.GUILD && (e = _.Z.getGuild(a)), null == e)) continue;
                        let s = null == r ? void 0 : r[e.id];
                        if (null == s || 0 === s.length) continue;
                        let { emojisDisabled: o, emojisFilteredCount: l, emojisPremiumLockedCount: d, emojiNitroLocked: f } = c(s, !1);
                        if (null != t && s.length === l) continue;
                        let h = null;
                        i === T.En.GUILD &&
                            (h = {
                                type: T.En.GUILD,
                                guild: e,
                                isNitroLocked: !L && f && d === s.length,
                                emojis: s,
                                emojisDisabled: o
                            }),
                            null != h && (e.id === n ? u.unshift(h) : u.push(h));
                    }
                })(s, T.En.GUILD),
                l.ZP.categories.reduce((t, r) => {
                    if (r === T.UX.TOP_GUILD_EMOJI) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = c(N, !0);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: T.En.TOP_GUILD_EMOJI,
                            id: r,
                            name: C.intl.formatToPlainString(C.t.W6Wi1d, { guildName: O }),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e
                        });
                    } else if (r === T.UX.RECENT) {
                        let { emojisDisabled: n, emojisUnfiltered: i } = c(e === y.Hz.REACTION && (f || m) ? o : a, !0);
                        if (null == i || 0 === i.length) return t;
                        t.push({
                            type: T.En.RECENT,
                            id: r,
                            name: C.intl.string(C.t['5TvaSk']),
                            isNitroLocked: !1,
                            emojis: i,
                            emojisDisabled: n
                        });
                    } else if (r === T.UX.FAVORITES) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = c(g, !0);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: T.En.FAVORITES,
                            id: r,
                            name: C.intl.string(C.t.y3LQCA),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e
                        });
                    } else if (r === T.UX.CUSTOM) {
                        let e = u;
                        !i && (e = u.filter((e) => e.type === T.En.GUILD && e.guild.id === n)), t.push(...e);
                    } else
                        t.push({
                            type: T.En.UNICODE,
                            id: r,
                            name: r,
                            isNitroLocked: !1
                        });
                    return t;
                }, [])
            );
        }, [R, t, n, e, L, N, O, f, m, o, a, g, i]);
    },
    O = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        m.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? b.ZY5.GUILD_CHANNEL : b.ZY5.DM_CHANNEL,
            location_section: null != e ? b.jXE.EMOJI_PICKER_POPOUT : b.jXE.CUSTOM_STATUS_MODAL
        });
    },
    D = (e, t) => {
        o.ZP.trackWithMetadata(b.rMx.SEARCH_STARTED, {
            search_type: null != t && t === y.Hz.REACTION ? b.aib.EMOJI_REACTION : b.aib.EMOJI,
            location: e
        });
    },
    L = (e, t, n, r, i) => {
        o.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === y.Hz.REACTION ? b.aib.EMOJI_REACTION : b.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n
        });
    },
    x = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: s, searchQuery: l, isLocked: u, location: c, intention: d, index: f } = e,
            _ = null !== (r = i.uniqueName) && void 0 !== r ? r : i.name,
            h = (0, a.EQ)(d)
                .with(y.Hz.REACTION, () => b.aib.EMOJI_REACTION)
                .with(y.Hz.AUTO_SUGGESTION, () => b.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => b.aib.EMOJI);
        o.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_SELECTED, {
            search_type: h,
            location: c,
            expression_guild_id: i.guildId,
            emoji_id: i.id,
            emoji_name: _,
            is_custom: null != i.id,
            is_animated: i.animated,
            is_locked: u,
            query: l,
            index_num: f,
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
    w = (e, t) => {
        o.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_EMPTY, {
            search_type: b.aib.EMOJI,
            query: t,
            location: e
        });
    },
    M = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        o.ZP.trackWithMetadata(b.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == n ? void 0 : n.toString(),
            newly_added_highlight: i,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: r
        });
    },
    P = (e) => {
        var t;
        let n,
            { emoji: r, location: i, pickerIntention: a, category: s, subCategory: l = T.t0.NONE, position: u, newlyAddedHighlight: c, isBurstReaction: d } = e;
        switch (a) {
            case y.Hz.REACTION:
                n = d ? N.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : N.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case y.Hz.STATUS:
                n = N.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                n = N.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let f = null !== (t = r.uniqueName) && void 0 !== t ? t : r.name;
        o.ZP.trackWithMetadata(b.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: i,
            expression_id: r.id,
            expression_name: f,
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
    k = (e) => {
        var t;
        let { emoji: n, location: r } = e,
            i = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
        o.ZP.trackWithMetadata(b.rMx.EXPRESSION_FAVORITED, {
            location: r,
            expression_type: A.X1.EMOJI,
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
        o.ZP.trackWithMetadata(b.rMx.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: b.Z9p.EMOJI,
            suggestion_quantity: t.results.length,
            custom_quantity: t.results.filter((e) => {
                let { emoji: t } = e;
                return null != t.id;
            }).length,
            load_id: t.loadId,
            location: n
        });
    },
    g.Z.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0
    }
);
let U = (e, t) => {
        if (e.type === T.En.GUILD) return null != t ? t.toString() : '';
        return e.id;
    },
    G = (e, t) => {
        switch (e) {
            case T.UX.TOP_GUILD_EMOJI:
                return C.intl.formatToPlainString(C.t.W6Wi1d, { guildName: t });
            case T.UX.RECENT:
                return C.intl.string(C.t['5TvaSk']);
            case T.UX.FAVORITES:
                return C.intl.string(C.t.y3LQCA);
            case T.UX.ACTIVITY:
                return C.intl.string(C.t.O783tb);
            case T.UX.FLAGS:
                return C.intl.string(C.t.vvaizs);
            case T.UX.FOOD:
                return C.intl.string(C.t.ldm9aW);
            case T.UX.NATURE:
                return C.intl.string(C.t.egIBDA);
            case T.UX.OBJECTS:
                return C.intl.string(C.t.gWm7Mj);
            case T.UX.PEOPLE:
                return C.intl.string(C.t.GX594O);
            case T.UX.SYMBOLS:
                return C.intl.string(C.t.QXMYAQ);
            case T.UX.TRAVEL:
                return C.intl.string(C.t.w33hIC);
            case T.UX.PREMIUM_UPSELL:
                return C.intl.string(C.t.pAF6xM);
            default:
                return null != t ? t : e;
        }
    };
function B(e, t, n) {
    r.useEffect(() => {
        f.DZ.loadIfNecessary();
    }, []);
    let i = (0, y.Gt)(n);
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
function Z(e) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function F(e) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function V(e) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function j(e, t) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, s.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    );
}
function H(e) {
    return (
        r.useEffect(() => {
            f.DZ.loadIfNecessary();
        }, []),
        (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function Y(e, t, n) {
    if (null == n) return T.t0.NONE;
    let r = e.map((e) => {
            var t, n;
            return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? T.t0.TOP_GUILD_EMOJI : i.includes(n) ? T.t0.NEWLY_ADDED_EMOJI : T.t0.NONE;
}
function W(e, t) {
    return e === y.Hz.REACTION ? (t ? C.intl.string(C.t['h7ES+v']) : C.intl.string(C.t['6any2N'])) : C.intl.string(C.t.KgK5qq);
}
