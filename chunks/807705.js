n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(470079);
function a(e, t) {
    let n = (0, i.useRef)(!1), a = (0, i.useRef)();
    (0, i.useEffect)(() => {
        n.current = !0, a.current = e;
    }, [e]), (0, i.useEffect)(() => {
        let e = setTimeout(() => n.current = !1, t);
        return () => clearTimeout(e);
    }, [
        e,
        t
    ]);
    let l = e !== a.current, s = n.current;
    return l || s;
}
