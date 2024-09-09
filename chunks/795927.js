r.d(t, {
    m: function () {
        return c;
    }
});
var n = r(140955),
    a = r(596308),
    o = r(622574),
    i = r(433691),
    _ = r(118182),
    E = r(825321);
let s = [0.1, 0.25],
    c = (e, t = {}) => {
        (0, E.a)(
            (0, _.R)(() => {
                let r;
                let _ = (0, a.I)('CLS', 0),
                    E = 0,
                    c = [],
                    I = (e) => {
                        e.forEach((e) => {
                            if (!e.hadRecentInput) {
                                let t = c[0],
                                    r = c[c.length - 1];
                                E && t && r && e.startTime - r.startTime < 1000 && e.startTime - t.startTime < 5000 ? ((E += e.value), c.push(e)) : ((E = e.value), (c = [e]));
                            }
                        }),
                            E > _.value && ((_.value = E), (_.entries = c), r());
                    },
                    u = (0, o.N)('layout-shift', I);
                u &&
                    ((r = (0, n._)(e, _, s, t.reportAllChanges)),
                    (0, i.u)(() => {
                        I(u.takeRecords()), r(!0);
                    }),
                    setTimeout(r, 0));
            })
        );
    };
