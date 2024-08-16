r.d(t, {
    l: function () {
        return i;
    },
    o: function () {
        return o;
    }
});
var n = r(988097),
    a = r(696486);
function o(e, t, r) {
    let o = (0, a.HN)(),
        i = o && (0, a.Gx)(o);
    i &&
        i.addEvent(e, {
            [n.Wb]: t,
            [n.E1]: r
        });
}
function i(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return (
        e.forEach((e) => {
            let r = e.attributes || {},
                a = r[n.E1],
                o = r[n.Wb];
            'string' == typeof a &&
                'number' == typeof o &&
                (t[e.name] = {
                    value: o,
                    unit: a
                });
        }),
        t
    );
}
