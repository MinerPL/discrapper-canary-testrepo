n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var s = n(470079);
function a(e) {
    let [t, n] = s.useState(e),
        a = s.useRef(null);
    return (
        s.useEffect(() => {
            var t, s;
            n(null !== (s = null === (t = a.current) || void 0 === t ? void 0 : t.offsetHeight) && void 0 !== s ? s : e);
        }),
        {
            headerHeight: t,
            headerRef: a
        }
    );
}
