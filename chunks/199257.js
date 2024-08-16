n.d(t, {
    Z: function () {
        return l;
    },
    _: function () {
        return o;
    }
});
var r = n(399606),
    i = n(339085),
    a = n(185923);
let s = [];
function o(e) {
    let { emojiStoreInstance: t = i.ZP, guildId: n, pickerIntention: r } = e;
    return {
        topEmojis: r !== a.Hz.REACTION ? t.getTopEmoji(n) : s,
        newlyAddedEmojis: r !== a.Hz.REACTION ? t.getNewlyAddedEmoji(n) : s
    };
}
function l(e, t) {
    return (0, r.cj)(
        [i.ZP],
        () =>
            o({
                emojiStoreInstance: i.ZP,
                guildId: e,
                pickerIntention: t
            }),
        [e, t]
    );
}
