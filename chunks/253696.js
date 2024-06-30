n.d(t, {
    Z: function () {
        return h;
    },
    b: function () {
        return f;
    }
}), n(724458);
var r = n(470079), i = n(367907), a = n(339085), o = n(592125), s = n(944486), l = n(176354), u = n(304852), c = n(199257), d = n(981631), _ = n(185923), E = n(957825);
function f(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        if (t.current.intention === _.Hz.REACTION)
            h(t.current);
    }, []);
}
function h(e) {
    var t;
    let {
            intention: n,
            containerWidth: r,
            rowSize: f,
            isBurstReaction: h,
            analyticsObject: p
        } = e, m = o.Z.getChannel(s.Z.getChannelId()), I = null == m ? void 0 : m.getGuildId(), T = a.Z.emojiFrecencyWithoutFetchingLatest.frequently.slice(), g = null != m ? a.Z.getDisambiguatedEmojiContext(m.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], S = T.slice(0, a.Z.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), A = null != I ? a.Z.getGuildEmoji(I) : [], N = Object.values(null !== (t = a.Z.getDisambiguatedEmojiContext(null == m ? void 0 : m.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => e += t.length, 0), {
            topEmojis: v,
            newlyAddedEmojis: O
        } = (0, c._)({
            guildId: null == m ? void 0 : m.getGuildId(),
            pickerIntention: n
        }), {
            visibleTopEmojis: R,
            visibleNewlyAddedEmojis: C
        } = (0, u.J)({
            topEmojis: v,
            newlyAddedEmojis: O,
            rowSize: f
        });
    i.ZP.trackWithMetadata(n === _.Hz.REACTION ? d.rMx.REACTION_PICKER_OPENED : d.rMx.EXPRESSION_PICKER_OPENED, {
        width: r,
        tab: E.X1.EMOJI,
        badged: !1,
        num_expressions_favorites: g.length,
        num_animated_expressions_favorites: g.filter(e => null == e ? void 0 : e.animated).length,
        num_custom_expressions_favorites: g.filter(l.ZP.isCustomEmoji).length,
        num_standard_expressions_favorites: g.filter(e => null == e.id).length,
        num_expressions_frecent: S.length,
        num_animated_expressions_frecent: S.filter(e => null == e ? void 0 : e.animated).length,
        num_custom_expressions_frecent: S.filter(l.ZP.isCustomEmoji).length,
        num_standard_expressions_frecent: S.filter(e => null == e.id).length,
        num_current_guild_expressions: A.length,
        num_custom_expressions_total: N,
        num_expressions_top_server: R.length,
        num_animated_expressions_top_server: R.filter(e => e.animated).length,
        num_expressions_newly_added: C.length,
        num_animated_expressions_newly_added: C.filter(e => e.animated).length,
        ...n === _.Hz.REACTION && { is_burst: h },
        ...null != p && { location_object: p }
    });
}
