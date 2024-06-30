n.d(t, {
    k: function () {
        return o;
    }
});
var r = n(442837), i = n(114064), a = n(485731);
function o(e) {
    var t, n;
    let {
            demos: o,
            activated: s
        } = (0, r.cj)([i.Z], () => ({
            demos: i.Z.getPerksDemos(),
            activated: i.Z.getActivated()
        })), l = (0, a.j$)();
    return {
        available: null !== (t = null == o ? void 0 : o[e]) && void 0 !== t && t,
        activated: null !== (n = s[e]) && void 0 !== n && n,
        hqStreamingState: l
    };
}
