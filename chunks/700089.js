n.d(t, {
    R: function () {
        return s;
    }
});
var r = n(470079), i = n(442837), a = n(675478), o = n(654455);
function s(e) {
    r.useEffect(() => {
        a.DZ.loadIfNecessary();
    }, []);
    let t = (0, i.e7)([o.ZP], () => o.ZP.getTopCommandsWithoutLoadingLatest());
    return r.useMemo(() => (0, o.LU)(t, e), [
        t,
        e
    ]);
}
