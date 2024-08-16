n.d(t, {
    Z: function () {
        return p;
    },
    b: function () {
        return h;
    }
}),
    n(724458);
var r = n(470079),
    i = n(367907),
    a = n(339085),
    s = n(689789),
    o = n(592125),
    l = n(944486),
    u = n(176354),
    c = n(304852),
    d = n(199257),
    _ = n(981631),
    E = n(185923),
    f = n(957825);
function h(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        if (t.current.intention === E.Hz.REACTION) p(t.current);
    }, []);
}
function p(e) {
    var t;
    let { intention: n, containerWidth: r, rowSize: h, isBurstReaction: p, analyticsObject: m } = e,
        I = o.Z.getChannel(l.Z.getChannelId()),
        T = null == I ? void 0 : I.getGuildId(),
        { canSplitFrecencyList: g } = s.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        S = g && n === E.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : a.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        A = null != I ? a.ZP.getDisambiguatedEmojiContext(I.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        N = g && n === E.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : a.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        v = S.slice(0, N),
        O = null != T ? a.ZP.getGuildEmoji(T) : [],
        R = Object.values(null !== (t = a.ZP.getDisambiguatedEmojiContext(null == I ? void 0 : I.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => (e += t.length), 0),
        { topEmojis: C, newlyAddedEmojis: y } = (0, d._)({
            guildId: null == I ? void 0 : I.getGuildId(),
            pickerIntention: n
        }),
        { visibleTopEmojis: D, visibleNewlyAddedEmojis: L } = (0, c.J)({
            topEmojis: C,
            newlyAddedEmojis: y,
            rowSize: h
        });
    i.ZP.trackWithMetadata(n === E.Hz.REACTION ? _.rMx.REACTION_PICKER_OPENED : _.rMx.EXPRESSION_PICKER_OPENED, {
        width: r,
        tab: f.X1.EMOJI,
        badged: !1,
        num_expressions_favorites: A.length,
        num_animated_expressions_favorites: A.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_favorites: A.filter(u.ZP.isCustomEmoji).length,
        num_standard_expressions_favorites: A.filter((e) => null == e.id).length,
        num_expressions_frecent: v.length,
        num_animated_expressions_frecent: v.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_frecent: v.filter(u.ZP.isCustomEmoji).length,
        num_standard_expressions_frecent: v.filter((e) => null == e.id).length,
        num_current_guild_expressions: O.length,
        num_custom_expressions_total: R,
        num_expressions_top_server: D.length,
        num_animated_expressions_top_server: D.filter((e) => e.animated).length,
        num_expressions_newly_added: L.length,
        num_animated_expressions_newly_added: L.filter((e) => e.animated).length,
        ...(n === E.Hz.REACTION && { is_burst: p }),
        ...(null != m && { location_object: m })
    });
}
