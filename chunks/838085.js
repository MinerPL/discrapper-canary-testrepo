n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(470079),
    a = n(393238);
function s() {
    let { ref: e, width: t } = (0, a.Z)(),
        [n, s] = i.useState();
    return (
        i.useEffect(() => {
            null == n && null != t && s(t);
        }, [n, t]),
        [e, n]
    );
}
