n.d(t, {
    $: function () {
        return s;
    }
}), n(47120);
var i = n(470079), a = n(881052);
function s(e) {
    let {
            onError: t,
            onSuccess: n,
            report: s
        } = e, [l, r] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!l) {
                r(!0);
                try {
                    await s(), null == n || n();
                } catch (n) {
                    let e = new a.Hx(n);
                    null == t || t(e);
                } finally {
                    r(!1);
                }
            }
        }, [
            l,
            t,
            n,
            s
        ]),
        isReportFalsePositiveLoading: l
    };
}
