n.d(t, {
    A3: function () {
        return C;
    },
    C1: function () {
        return F;
    },
    DV: function () {
        return G;
    },
    Gn: function () {
        return M;
    },
    IP: function () {
        return H;
    },
    J1: function () {
        return U;
    },
    MZ: function () {
        return V;
    },
    NJ: function () {
        return B;
    },
    Nf: function () {
        return w;
    },
    PC: function () {
        return y;
    },
    Y1: function () {
        return x;
    },
    fe: function () {
        return P;
    },
    jA: function () {
        return D;
    },
    kI: function () {
        return R;
    },
    nV: function () {
        return Z;
    },
    to: function () {
        return b;
    },
    wC: function () {
        return k;
    },
    y$: function () {
        return L;
    }
}), n(733860), n(653041), n(47120), n(724458), n(627341), n(757143);
var r = n(470079), i = n(392711), a = n(278074), o = n(442837), s = n(367907), l = n(339085);
n(353842);
var u = n(558217), c = n(675478), d = n(430824), _ = n(771845), E = n(594174), f = n(626135), h = n(70956), p = n(176354), m = n(111361);
n(709054);
var I = n(304852), T = n(199257), g = n(149203), S = n(981631), A = n(185923), N = n(957825), v = n(474936), O = n(689938);
let R = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
        (0, u.O)(n);
        let i = (0, A.Gt)(e), a = k(n), s = B(n), {
                topEmojis: c,
                newlyAddedEmojis: f
            } = (0, T.Z)(n, e), {allEmojis: h} = (0, I.Z)({
                topEmojis: c,
                newlyAddedEmojis: f
            }), S = (0, o.e7)([l.Z], () => l.Z.getDisambiguatedEmojiContext(n), [n]), N = (0, o.e7)([d.Z], () => {
                var e;
                return null === (e = d.Z.getGuild(n)) || void 0 === e ? void 0 : e.name;
            }), v = (0, o.e7)([E.default], () => E.default.getCurrentUser()), R = (0, m.I5)(v);
        return r.useMemo(() => {
            let r = S.getGroupedCustomEmoji(), o = _.ZP.getFlattenedGuildIds(), u = [], c = (r, i) => p.ZP.getEmojiUnavailableReasons({
                    categoryEmojis: r,
                    channel: t,
                    guildId: n,
                    intention: e,
                    computeUnfiltered: i
                });
            return ((e, i) => {
                for (let a of e) {
                    let e;
                    if (i === g.En.GUILD && (e = d.Z.getGuild(a)), null == e)
                        continue;
                    let o = null == r ? void 0 : r[e.id];
                    if (null == o || 0 === o.length)
                        continue;
                    let {
                        emojisDisabled: s,
                        emojisFilteredCount: l,
                        emojisPremiumLockedCount: _,
                        emojiNitroLocked: E
                    } = c(o, !1);
                    if (null != t && o.length === l)
                        continue;
                    let f = null;
                    i === g.En.GUILD && (f = {
                        type: g.En.GUILD,
                        guild: e,
                        isNitroLocked: !R && E && _ === o.length,
                        emojis: o,
                        emojisDisabled: s
                    }), null != f && (e.id === n ? u.unshift(f) : u.push(f));
                }
            })(o, g.En.GUILD), l.Z.categories.reduce((e, t) => {
                if (t === g.UX.TOP_GUILD_EMOJI) {
                    let {
                        emojisDisabled: n,
                        emojisUnfiltered: r
                    } = c(h, !0);
                    if (null == r || 0 === r.length)
                        return e;
                    e.push({
                        type: g.En.TOP_GUILD_EMOJI,
                        id: t,
                        name: O.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({ guildName: N }),
                        isNitroLocked: !1,
                        emojis: r,
                        emojisDisabled: n
                    });
                } else if (t === g.UX.RECENT) {
                    let {
                        emojisDisabled: n,
                        emojisUnfiltered: r
                    } = c(a, !0);
                    if (null == r || 0 === r.length)
                        return e;
                    e.push({
                        type: g.En.RECENT,
                        id: t,
                        name: O.Z.Messages.EMOJI_CATEGORY_RECENT,
                        isNitroLocked: !1,
                        emojis: r,
                        emojisDisabled: n
                    });
                } else if (t === g.UX.FAVORITES) {
                    let {
                        emojisDisabled: n,
                        emojisUnfiltered: r
                    } = c(s, !0);
                    if (null == r || 0 === r.length)
                        return e;
                    e.push({
                        type: g.En.FAVORITES,
                        id: t,
                        name: O.Z.Messages.CATEGORY_FAVORITE,
                        isNitroLocked: !1,
                        emojis: r,
                        emojisDisabled: n
                    });
                } else if (t === g.UX.CUSTOM) {
                    let t = u;
                    !i && (t = u.filter(e => e.type === g.En.GUILD && e.guild.id === n)), e.push(...t);
                } else
                    e.push({
                        type: g.En.UNICODE,
                        id: t,
                        name: t,
                        isNitroLocked: !1
                    });
                return e;
            }, []);
        }, [
            S,
            t,
            n,
            e,
            h,
            N,
            a,
            s,
            i,
            R
        ]);
    }, C = e => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        f.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? S.ZY5.GUILD_CHANNEL : S.ZY5.DM_CHANNEL,
            location_section: null != e ? S.jXE.EMOJI_PICKER_POPOUT : S.jXE.CUSTOM_STATUS_MODAL
        });
    }, y = (e, t) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_STARTED, {
            search_type: null != t && t === A.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            location: e
        });
    }, D = (e, t, n, r, i) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === A.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n
        });
    }, L = e => {
        var t, n, r;
        let {
                emoji: i,
                emojiSuggestions: o,
                searchQuery: l,
                isLocked: u,
                location: c,
                intention: d,
                index: _
            } = e, E = null !== (r = i.uniqueName) && void 0 !== r ? r : i.name, f = (0, a.EQ)(d).with(A.Hz.REACTION, () => S.aib.EMOJI_REACTION).with(A.Hz.AUTO_SUGGESTION, () => S.aib.EMOJI_AUTO_SUGGESTION).otherwise(() => S.aib.EMOJI);
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
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
            load_id: null == o ? void 0 : o.loadId,
            total_results: null == o ? void 0 : null === (t = o.results) || void 0 === t ? void 0 : t.length,
            emoji_suggestion_ids: null == o ? void 0 : null === (n = o.results) || void 0 === n ? void 0 : n.map(e => {
                let {emoji: t} = e;
                return t.id;
            }).filter(e => null != e)
        });
    }, b = (e, t) => {
        s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_EMPTY, {
            search_type: S.aib.EMOJI,
            query: t,
            location: e
        });
    }, M = e => {
        let {
            emoji: t,
            subCategory: n,
            position: r,
            newlyAddedHighlight: i
        } = e;
        s.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == n ? void 0 : n.toString(),
            newly_added_highlight: i,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: r
        });
    }, P = e => {
        var t;
        let n, {
                emoji: r,
                location: i,
                pickerIntention: a,
                category: o,
                subCategory: l = g.t0.NONE,
                position: u,
                newlyAddedHighlight: c,
                isBurstReaction: d
            } = e;
        switch (a) {
        case A.Hz.REACTION:
            n = d ? v.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : v.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
            break;
        case A.Hz.STATUS:
            n = v.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
            break;
        default:
            n = v.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let _ = null !== (t = r.uniqueName) && void 0 !== t ? t : r.name;
        s.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: i,
            expression_id: r.id,
            expression_name: _,
            expression_guild_id: r.guildId,
            is_custom: null != r.id,
            is_animated: r.animated,
            expression_picker_section: o,
            expression_section: null == l ? void 0 : l.toString(),
            emoji_position: u,
            newly_added_highlight: c,
            is_burst: d
        });
    }, U = e => {
        var t;
        let {
                emoji: n,
                location: r
            } = e, i = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
        s.ZP.trackWithMetadata(S.rMx.EXPRESSION_FAVORITED, {
            location: r,
            expression_type: N.X1.EMOJI,
            expression_id: n.id,
            expression_name: i,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated
        });
    };
(0, i.throttle)(e => {
    let {
        emojiSuggestions: t,
        analyticsLocation: n
    } = e;
    s.ZP.trackWithMetadata(S.rMx.AUTO_SUGGEST_DISPLAYED, {
        suggestion_type: S.Z9p.EMOJI,
        suggestion_quantity: t.results.length,
        custom_quantity: t.results.filter(e => {
            let {emoji: t} = e;
            return null != t.id;
        }).length,
        load_id: t.loadId,
        location: n
    });
}, h.Z.Millis.HALF_SECOND, {
    leading: !1,
    trailing: !0
});
let w = (e, t) => {
        if (e.type === g.En.GUILD)
            return null != t ? t.toString() : '';
        return e.id;
    }, x = (e, t) => {
        switch (e) {
        case g.UX.TOP_GUILD_EMOJI:
            return O.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({ guildName: t });
        case g.UX.RECENT:
            return O.Z.Messages.EMOJI_CATEGORY_RECENT;
        case g.UX.FAVORITES:
            return O.Z.Messages.CATEGORY_FAVORITE;
        case g.UX.ACTIVITY:
            return O.Z.Messages.EMOJI_CATEGORY_ACTIVITY;
        case g.UX.FLAGS:
            return O.Z.Messages.EMOJI_CATEGORY_FLAGS;
        case g.UX.FOOD:
            return O.Z.Messages.EMOJI_CATEGORY_FOOD;
        case g.UX.NATURE:
            return O.Z.Messages.EMOJI_CATEGORY_NATURE;
        case g.UX.OBJECTS:
            return O.Z.Messages.EMOJI_CATEGORY_OBJECTS;
        case g.UX.PEOPLE:
            return O.Z.Messages.EMOJI_CATEGORY_PEOPLE;
        case g.UX.SYMBOLS:
            return O.Z.Messages.EMOJI_CATEGORY_SYMBOLS;
        case g.UX.TRAVEL:
            return O.Z.Messages.EMOJI_CATEGORY_TRAVEL;
        case g.UX.PREMIUM_UPSELL:
            return O.Z.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
        default:
            return null != t ? t : e;
        }
    };
function G(e, t, n) {
    r.useEffect(() => {
        c.DZ.loadIfNecessary();
    }, []);
    let i = (0, A.Gt)(n);
    return (0, o.e7)([l.Z], () => {
        let r = e.replace(/^:/, '').replace(/:$/, '');
        return '' === r ? null : l.Z.searchWithoutFetchingLatest({
            channel: t,
            query: r,
            count: 0,
            intention: n,
            includeExternalGuilds: i
        });
    }, [
        t,
        n,
        e,
        i
    ], o.pF);
}
function k(e) {
    return r.useEffect(() => {
        c.DZ.loadIfNecessary();
    }, []), (0, o.Wu)([l.Z], () => l.Z.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest());
}
function B(e) {
    return r.useEffect(() => {
        c.DZ.loadIfNecessary();
    }, []), (0, o.Wu)([l.Z], () => l.Z.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest);
}
function F(e, t) {
    return r.useEffect(() => {
        c.DZ.loadIfNecessary();
    }, []), (0, o.e7)([l.Z], () => null != t && l.Z.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t));
}
function V(e) {
    return r.useEffect(() => {
        c.DZ.loadIfNecessary();
    }, []), (0, o.Wu)([l.Z], () => l.Z.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest());
}
function H(e, t, n) {
    if (null == n)
        return g.t0.NONE;
    let r = e.map(e => {
            var t, n;
            return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name;
        }), i = t.map(e => e.id);
    return r.includes(n) ? g.t0.TOP_GUILD_EMOJI : i.includes(n) ? g.t0.NEWLY_ADDED_EMOJI : g.t0.NONE;
}
function Z(e, t) {
    return e === A.Hz.REACTION ? t ? O.Z.Messages.SEARCH_FOR_SUPER_REACTION : O.Z.Messages.SEARCH_FOR_REACTION : O.Z.Messages.SEARCH_FOR_EMOJI;
}
