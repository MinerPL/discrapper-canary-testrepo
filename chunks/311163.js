r.d(t, {
    Z: function () {
        return n;
    }
});
var a = r(272423);
function n(e) {
    let t = (0, a.kf)(e);
    if (null != t)
        return [
            t.params.guildId,
            t.params.channelId
        ];
    let r = (0, a.B3)(e);
    if (null != r) {
        var n, i;
        return [
            null === (n = r.params) || void 0 === n ? void 0 : n.guildId,
            null === (i = r.params) || void 0 === i ? void 0 : i.channelId
        ];
    }
    return [
        void 0,
        void 0
    ];
}
