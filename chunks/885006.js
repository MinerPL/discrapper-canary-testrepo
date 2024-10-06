t.d(n, {
    Z: function () {
        return i;
    }
}),
    t(47120);
var a = t(470079);
function i(e) {
    var n, t, i;
    let [o, r] = a.useState({
        width: null !== (t = window.innerWidth) && void 0 !== t ? t : 1080,
        height: null !== (i = window.innerHeight) && void 0 !== i ? i : 1080
    });
    return (
        a.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                r({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        o
    );
}
