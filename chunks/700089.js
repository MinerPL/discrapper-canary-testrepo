n.d(t, {
    R: function () {
        return o;
    }
});
var r = n(470079),
    i = n(442837),
    a = n(675478),
    s = n(654455);
function o(e) {
    r.useEffect(() => {
        a.DZ.loadIfNecessary();
    }, []);
    let t = (0, i.e7)([s.ZP], () => s.ZP.getTopCommandsWithoutLoadingLatest());
    return r.useMemo(() => (0, s.LU)(t, e), [t, e]);
}
