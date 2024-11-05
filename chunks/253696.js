n.d(t, {
    Z: function () {
        return g;
    },
    b: function () {
        return m;
    }
}),
    n(724458);
var r = n(192379),
    i = n(367907),
    a = n(339085),
    s = n(689789),
    o = n(407477),
    l = n(592125),
    u = n(944486),
    c = n(176354),
    d = n(304852),
    f = n(199257),
    _ = n(981631),
    h = n(185923),
    p = n(957825);
function m(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        if (t.current.intention === h.Hz.REACTION) g(t.current);
    }, []);
}
function g(e) {
    var t;
    let { intention: n, containerWidth: r, rowSize: m, isBurstReaction: g, analyticsObject: E } = e,
        v = l.Z.getChannel(u.Z.getChannelId()),
        I = null == v ? void 0 : v.getGuildId(),
        { canSplitFrecencyList: S } = s.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        T = (0, o.E2)({
            location: 'trackOnEmojiPickerOpened',
            autoTrackExposure: !0
        });
    o.Xb.trackExposure({ location: 'trackOnEmojiPickerOpened' });
    let b = (S || T) && n === h.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : a.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        y = null != v ? a.ZP.getDisambiguatedEmojiContext(v.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        A = (S || T) && n === h.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : a.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        N = b.slice(0, A),
        C = null != I ? a.ZP.getGuildEmoji(I) : [],
        R = Object.values(null !== (t = a.ZP.getDisambiguatedEmojiContext(null == v ? void 0 : v.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => (e += t.length), 0),
        { topEmojis: O, newlyAddedEmojis: D } = (0, f._)({
            guildId: null == v ? void 0 : v.getGuildId(),
            pickerIntention: n
        }),
        { visibleTopEmojis: L, visibleNewlyAddedEmojis: x } = (0, d.J)({
            topEmojis: O,
            newlyAddedEmojis: D,
            rowSize: m
        });
    i.ZP.trackWithMetadata(n === h.Hz.REACTION ? _.rMx.REACTION_PICKER_OPENED : _.rMx.EXPRESSION_PICKER_OPENED, {
        width: r,
        tab: p.X1.EMOJI,
        badged: !1,
        num_expressions_favorites: y.length,
        num_animated_expressions_favorites: y.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_favorites: y.filter(c.ZP.isCustomEmoji).length,
        num_standard_expressions_favorites: y.filter((e) => null == e.id).length,
        num_expressions_frecent: N.length,
        num_animated_expressions_frecent: N.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_frecent: N.filter(c.ZP.isCustomEmoji).length,
        num_standard_expressions_frecent: N.filter((e) => null == e.id).length,
        num_current_guild_expressions: C.length,
        num_custom_expressions_total: R,
        num_expressions_top_server: L.length,
        num_animated_expressions_top_server: L.filter((e) => e.animated).length,
        num_expressions_newly_added: x.length,
        num_animated_expressions_newly_added: x.filter((e) => e.animated).length,
        ...(n === h.Hz.REACTION && { is_burst: g }),
        ...(null != E && { location_object: E })
    });
}
