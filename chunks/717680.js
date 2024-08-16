n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(470079);
let a = !1,
    s = new Set();
function r(e) {
    e !== a && ((a = e), s.forEach((e) => e(a)));
}
function l() {
    let [e, t] = i.useState(a);
    return (
        i.useEffect(() => {
            let e = (e) => {
                t(e);
            };
            return (
                s.add(e),
                () => {
                    s.delete(e);
                }
            );
        }, []),
        e
    );
}
window.addEventListener('keydown', (e) => {
    r(e.shiftKey);
}),
    window.addEventListener('keyup', (e) => {
        r(e.shiftKey);
    }),
    window.addEventListener('mousemove', (e) => {
        r(e.shiftKey);
    }),
    window.addEventListener('blur', () => {
        r(!1);
    });
