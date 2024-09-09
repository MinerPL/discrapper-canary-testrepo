n.d(e, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var a = n(470079),
    r = n(442837),
    l = n(592125),
    u = n(9156);
function i(t) {
    let e = (0, r.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
        n = (0, r.e7)([l.Z], () => l.Z.getMutableDMsByUserIds(), [e]),
        i = (0, r.e7)([u.ZP], () => u.ZP.getMutedChannels(null)),
        o = a.useMemo(() => {
            let t = new Set();
            for (let e in n) {
                let a = n[e];
                null != a && i.has(a) && t.add(e);
            }
            return t;
        }, [n, i]);
    return a.useMemo(
        () =>
            null == t
                ? void 0
                : t.filter((t) => {
                      for (let e of t.participants) if (o.has(e)) return !1;
                      return !0;
                  }),
        [t, o]
    );
}
