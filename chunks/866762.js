n(312677);
var e = n(945124);
self.addEventListener('message', t => {
    var r, n;
    let {
        data: {
            unsortedClans: i,
            id: o,
            criteria: u
        }
    } = t;
    let a = (r = i, n = u, r.map(t => ({
        ...t,
        affinity: (0, e.y)(t, n)
    })).sort((t, r) => {
        var i, o;
        let u = null !== (i = r.affinity) && void 0 !== i ? i : (0, e.y)(r, n);
        return u - (null !== (o = t.affinity) && void 0 !== o ? o : (0, e.y)(t, n));
    }));
    self.postMessage({
        sortedClans: a,
        id: o
    });
});
