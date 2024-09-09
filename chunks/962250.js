a.d(s, {
    b: function () {
        return r;
    }
}),
    a(47120);
var n = a(470079);
function r() {
    var e, s;
    let [a, r] = n.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (s = window.innerHeight) && void 0 !== s ? s : 1080
    });
    return (
        n.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                r({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        a
    );
}
