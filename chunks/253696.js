n.d(t, {
    Z: function () {
        return I;
    },
    b: function () {
        return p;
    }
}),
    n(724458);
var r = n(470079),
    i = n(367907),
    a = n(339085),
    s = n(689789),
    o = n(407477),
    l = n(592125),
    u = n(944486),
    c = n(176354),
    d = n(304852),
    _ = n(199257),
    E = n(981631),
    f = n(185923),
    h = n(957825);
function p(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        if (t.current.intention === f.Hz.REACTION) I(t.current);
    }, []);
}
function I(e) {
    var t;
    let { intention: n, containerWidth: r, rowSize: p, isBurstReaction: I, analyticsObject: m } = e,
        T = l.Z.getChannel(u.Z.getChannelId()),
        S = null == T ? void 0 : T.getGuildId(),
        { canSplitFrecencyList: g } = s.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        A = (0, o.E2)({
            location: 'trackOnEmojiPickerOpened',
            autoTrackExposure: !0
        }),
        N = (g || A) && n === f.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : a.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        O = null != T ? a.ZP.getDisambiguatedEmojiContext(T.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        R = (g || A) && n === f.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : a.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        v = N.slice(0, R),
        C = null != S ? a.ZP.getGuildEmoji(S) : [],
        y = Object.values(null !== (t = a.ZP.getDisambiguatedEmojiContext(null == T ? void 0 : T.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => (e += t.length), 0),
        { topEmojis: L, newlyAddedEmojis: D } = (0, _._)({
            guildId: null == T ? void 0 : T.getGuildId(),
            pickerIntention: n
        }),
        { visibleTopEmojis: b, visibleNewlyAddedEmojis: M } = (0, d.J)({
            topEmojis: L,
            newlyAddedEmojis: D,
            rowSize: p
        });
    i.ZP.trackWithMetadata(n === f.Hz.REACTION ? E.rMx.REACTION_PICKER_OPENED : E.rMx.EXPRESSION_PICKER_OPENED, {
        width: r,
        tab: h.X1.EMOJI,
        badged: !1,
        num_expressions_favorites: O.length,
        num_animated_expressions_favorites: O.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_favorites: O.filter(c.ZP.isCustomEmoji).length,
        num_standard_expressions_favorites: O.filter((e) => null == e.id).length,
        num_expressions_frecent: v.length,
        num_animated_expressions_frecent: v.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_frecent: v.filter(c.ZP.isCustomEmoji).length,
        num_standard_expressions_frecent: v.filter((e) => null == e.id).length,
        num_current_guild_expressions: C.length,
        num_custom_expressions_total: y,
        num_expressions_top_server: b.length,
        num_animated_expressions_top_server: b.filter((e) => e.animated).length,
        num_expressions_newly_added: M.length,
        num_animated_expressions_newly_added: M.filter((e) => e.animated).length,
        ...(n === f.Hz.REACTION && { is_burst: I }),
        ...(null != m && { location_object: m })
    });
}
