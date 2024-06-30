n.d(t, {
    Z: function () {
        return r;
    }
});
function r(e, t, n) {
    let {onChange: r} = e, i = !1, a = !1;
    return e.onChange = () => {
        if (i) {
            a = !0;
            return;
        }
        i = !0;
        try {
            let e = 0;
            do {
                if (a = !1, e++ >= 5)
                    break;
                null == t || t();
                try {
                    r();
                } finally {
                    null == n || n();
                }
            } while (a);
        } finally {
            i = !1;
        }
    }, e;
}
