n.d(t, {
    R: function () {
        return l;
    }
});
var r = n(192379),
    i = n(442837),
    a = n(675478),
    s = n(654455),
    o = n(526761);
function l(e) {
    r.useEffect(() => {
        a.DZ.loadIfUncached(o.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, i.e7)([s.ZP], () => s.ZP.getTopCommandsWithoutLoadingLatest());
    return r.useMemo(() => (0, s.LU)(t, e), [t, e]);
}
