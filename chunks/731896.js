n.d(t, {
    V: function () {
        return o;
    }
});
var r = n(470079),
    i = n(442837),
    a = n(365943),
    s = n(25251);
let o = (e) => {
    let t = (0, i.e7)([s.Z], () => s.Z.getProfileEffectById(e)),
        n = null != t;
    return (
        r.useEffect(() => {
            null != e && !n && (0, a.z)(!0);
        }, [e, n]),
        t
    );
};
