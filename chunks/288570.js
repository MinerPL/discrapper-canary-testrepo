r.d(t, {
    m: function () {
        return I;
    }
});
var n = r(395848),
    a = r(140955),
    o = r(202937),
    i = r(896247),
    _ = r(596308),
    E = r(662355);
let s = [800, 1800],
    c = (e) => {
        n.m.document && n.m.document.prerendering ? (0, E.A)(() => c(e)) : n.m.document && 'complete' !== n.m.document.readyState ? addEventListener('load', () => c(e), !0) : setTimeout(e, 0);
    },
    I = (e, t = {}) => {
        let r = (0, _.I)('TTFB'),
            n = (0, a._)(e, r, s, t.reportAllChanges);
        c(() => {
            let e = (0, i.W)();
            if (e) {
                let t = e.responseStart;
                if (t <= 0 || t > performance.now()) return;
                (r.value = Math.max(t - (0, o.A)(), 0)), (r.entries = [e]), n(!0);
            }
        });
    };
