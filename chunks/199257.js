n.d(t, {
    Z: function () {
        return l;
    },
    _: function () {
        return s;
    }
});
var r = n(399606), i = n(339085), a = n(185923);
let o = [];
function s(e) {
    let {
        emojiStoreInstance: t = i.Z,
        guildId: n,
        pickerIntention: r
    } = e;
    return {
        topEmojis: r !== a.Hz.REACTION ? t.getTopEmoji(n) : o,
        newlyAddedEmojis: r !== a.Hz.REACTION ? t.getNewlyAddedEmoji(n) : o
    };
}
function l(e, t) {
    return (0, r.cj)([i.Z], () => s({
        emojiStoreInstance: i.Z,
        guildId: e,
        pickerIntention: t
    }), [
        e,
        t
    ]);
}
