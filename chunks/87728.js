n.d(t, {
    Z: function () {
        return a;
    }
}), n(47120);
var i = n(470079);
function a() {
    var e;
    let [t, n] = i.useState((e = window.innerWidth < 1132, e));
    return i.useEffect(() => {
        function e() {
            n(window.innerWidth < 1132);
        }
        return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
    }, [n]), t;
}
