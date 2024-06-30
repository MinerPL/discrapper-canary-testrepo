i.d(n, {
    Z: function () {
        return a;
    }
}), i(47120);
var l = i(470079), t = i(881052);
function a(e, n) {
    let [i, a] = l.useState(!1), [r, s] = l.useState(null);
    return [
        async () => {
            a(!0), s(null);
            try {
                let n = await e();
                return a(!1), s(null), n;
            } catch (i) {
                let e = new t.Hx(i);
                return null == n || n(e), s(e), a(!1), null;
            }
        },
        {
            loading: i,
            error: r
        }
    ];
}
