e.d(t, {
    Z: function () {
        return l;
    },
    g: function () {
        return a;
    }
}), e(47120);
var r = e(470079), i = e(442837), u = e(146282), o = e(327220), E = e(959580);
function a(n, t) {
    let {types: e} = n;
    return !!(null == e || e.has(t.content_type)) || !1;
}
function l(n) {
    let {
            feed: t,
            filters: e
        } = (0, i.cj)([u.Z], () => ({
            feed: u.Z.getFeed(n),
            filters: u.Z.getFilters()
        })), l = r.useMemo(() => {
            let n = null == t ? void 0 : t.entries.map(n => n.content);
            return null != e ? null == n ? void 0 : n.filter(n => a(e, n)) : n;
        }, [
            t,
            e
        ]);
    return l = (0, o.Z)(l), l = (0, E.Z)(l);
}
