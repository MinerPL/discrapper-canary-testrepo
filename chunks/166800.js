r.d(t, {
    q: function () {
        return o;
    }
});
var n = r(226377),
    a = r(91647);
let o = {
    increment: function (e, t = 1, r) {
        n.q.increment(a.P, e, t, r);
    },
    distribution: function (e, t, r) {
        n.q.distribution(a.P, e, t, r);
    },
    set: function (e, t, r) {
        n.q.set(a.P, e, t, r);
    },
    gauge: function (e, t, r) {
        n.q.gauge(a.P, e, t, r);
    },
    timing: function (e, t, r = 'second', o) {
        return n.q.timing(a.P, e, t, r, o);
    }
};
