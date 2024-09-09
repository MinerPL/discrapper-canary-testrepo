n.d(t, {
    t: function () {
        return o;
    }
});
var i = n(442837),
    l = n(273387),
    r = n(975984),
    a = n(306680),
    s = n(709054);
function o(e) {
    return (0, i.e7)(
        [l.Z, a.ZP],
        () => {
            var t;
            if (null == e) return 0;
            let n = a.ZP.ackMessageId(e.id);
            if (null == n) return 0;
            let i = Object.values(null !== (t = l.Z.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter((e) => {
                let t = s.default.fromTimestamp(new Date(e.createdAt).getTime());
                return (0, r.gX)(e) && t > n;
            });
            return Math.min(r._N, i.length);
        },
        [e]
    );
}
