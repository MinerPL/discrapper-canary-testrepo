n.d(t, {
    M: function () {
        return u;
    }
});
var r = n(684342),
    i = n(391756),
    a = n(797578),
    s = n(876026),
    o = new Map(),
    l = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    u = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new a.r(e, t);
                s.C.push(n), o.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                if (o.has(e)) {
                    var a = o.get(e);
                    0 > l(a.observationTargets, t) && (a.observationTargets.push(new i.Q(t, n && n.box)), (0, r.t)(1), r.p.schedule());
                }
            }),
            (e.unobserve = function (e, t) {
                if (o.has(e)) {
                    var n = o.get(e),
                        i = l(n.observationTargets, t);
                    i >= 0 && (n.observationTargets.splice(i, 1), (0, r.t)(-1));
                }
            }),
            (e.disconnect = function (e) {
                if (o.has(e)) {
                    var t = o.get(e);
                    s.C.splice(s.C.indexOf(t), 1), o.delete(e), (0, r.t)(-t.observationTargets.length);
                }
            }),
            e
        );
    })();
