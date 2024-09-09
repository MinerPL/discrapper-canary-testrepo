var e, o;
function i(r) {
    let t = 0,
        n = [];
    return async function () {
        if (2 !== t) {
            if (1 === t)
                return new Promise((r) => {
                    n.push(r);
                });
            for (t = 1, await r(), t = 2; n.length > 0; ) {
                var e;
                null === (e = n.shift()) || void 0 === e || e();
            }
        }
    };
}
n.d(t, {
    G: function () {
        return i;
    }
}),
    n(653041),
    ((o = e || (e = {}))[(o.UNINITIALIZED = 0)] = 'UNINITIALIZED'),
    (o[(o.INITIALIZING = 1)] = 'INITIALIZING'),
    (o[(o.READY = 2)] = 'READY');
