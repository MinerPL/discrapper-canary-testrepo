e.d(t, {
    Z: function () {
        return E;
    }
}), e(47120);
var r = e(470079), i = e(442837), u = e(592125), o = e(9156);
function E(n) {
    let t = (0, i.e7)([u.Z], () => u.Z.getPrivateChannelsVersion()), e = (0, i.e7)([u.Z], () => u.Z.getMutableDMsByUserIds(), [t]), E = (0, i.e7)([o.ZP], () => o.ZP.getMutedChannels(null)), a = r.useMemo(() => {
            let n = new Set();
            for (let t in e) {
                let r = e[t];
                null != r && E.has(r) && n.add(t);
            }
            return n;
        }, [
            e,
            E
        ]);
    return r.useMemo(() => null == n ? void 0 : n.filter(n => {
        for (let t of n.participants)
            if (a.has(t))
                return !1;
        return !0;
    }), [
        n,
        a
    ]);
}
