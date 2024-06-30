n.d(t, {
    Z: function () {
        return r;
    }
}), n(47120);
var i = n(470079);
let a = !1, s = new Set();
function l(e) {
    e !== a && (a = e, s.forEach(e => e(a)));
}
function r() {
    let [e, t] = i.useState(a);
    return i.useEffect(() => {
        let e = e => {
            t(e);
        };
        return s.add(e), () => {
            s.delete(e);
        };
    }, []), e;
}
window.addEventListener('keydown', e => {
    l(e.shiftKey);
}), window.addEventListener('keyup', e => {
    l(e.shiftKey);
}), window.addEventListener('mousemove', e => {
    l(e.shiftKey);
}), window.addEventListener('blur', () => {
    l(!1);
});
