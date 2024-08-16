r.d(t, {
    a: function () {
        return c;
    }
});
var n = r(140955),
    a = r(202937),
    o = r(416987),
    i = r(596308),
    _ = r(622574),
    E = r(662355);
let s = [1800, 3000],
    c = (e, t = {}) => {
        (0, E.A)(() => {
            let r;
            let E = (0, o.Y)(),
                c = (0, i.I)('FCP'),
                I = (0, _.N)('paint', (e) => {
                    e.forEach((e) => {
                        'first-contentful-paint' === e.name && (I.disconnect(), e.startTime < E.firstHiddenTime && ((c.value = Math.max(e.startTime - (0, a.A)(), 0)), c.entries.push(e), r(!0)));
                    });
                });
            I && (r = (0, n._)(e, c, s, t.reportAllChanges));
        });
    };
