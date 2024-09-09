a.d(n, {
    Z: function () {
        return i;
    }
}),
    a(47120);
var t = a(470079),
    c = a(881052);
function i(e, n) {
    let [a, i] = t.useState(!1),
        [o, r] = t.useState(null);
    return [
        async () => {
            i(!0), r(null);
            try {
                let n = await e();
                return i(!1), r(null), n;
            } catch (a) {
                let e = new c.Hx(a);
                return null == n || n(e), r(e), i(!1), null;
            }
        },
        {
            loading: a,
            error: o
        }
    ];
}
