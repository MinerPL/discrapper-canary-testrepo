r.d(e, {
    N: function () {
        return n;
    }
});
let n = (t, e, r) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            let n = new PerformanceObserver(t => {
                e(t.getEntries());
            });
            return n.observe(Object.assign({
                type: t,
                buffered: !0
            }, r || {})), n;
        }
    } catch (t) {
    }
};
