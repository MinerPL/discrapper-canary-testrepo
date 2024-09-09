n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(442837),
    l = n(592125),
    r = n(938475),
    a = n(853856),
    s = n(981631);
function o(e) {
    return (0, i.cj)(
        [r.ZP, l.Z, a.Z],
        () => {
            if (e !== s.I_8) return r.ZP.getVoiceStates(e);
            let t = a.Z.getFavoriteChannels(),
                n = {};
            for (let e in t) {
                let t = l.Z.getChannel(e);
                null != t && (n[e] = r.ZP.getVoiceStatesForChannel(t));
            }
            return n;
        },
        [e]
    );
}
