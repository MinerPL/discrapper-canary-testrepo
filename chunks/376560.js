n.d(t, {
    L: function () {
        return o;
    }
});
var r = n(304329),
    i = n(899497),
    a = n(977584),
    s = n(229579),
    o = function () {
        var e = 1 / 0,
            t = [];
        r.C.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                    var n = new i.A(t.target),
                        o = (0, a.D)(t.target);
                    r.push(n), (t.lastReportedSize = (0, s.Y)(t.target, t.observedBox)), o < e && (e = o);
                }),
                    t.push(function () {
                        n.callback.call(n.observer, r, n.observer);
                    }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }
        });
        for (var n = 0; n < t.length; n++) (0, t[n])();
        return e;
    };
