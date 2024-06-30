r.d(e, {
    JY: function () {
        return n;
    },
    Q: function () {
        return _;
    },
    WG: function () {
        return a;
    }
});
function n(t, e = Date.now()) {
    let r = parseInt(`${ t }`, 10);
    if (!isNaN(r))
        return 1000 * r;
    let n = Date.parse(`${ t }`);
    return isNaN(n) ? 60000 : n - e;
}
function _(t, e, r = Date.now()) {
    var n;
    return ((n = t)[e] || n.all || 0) > r;
}
function a(t, {
    statusCode: e,
    headers: r
}, _ = Date.now()) {
    let a = { ...t }, i = r && r['x-sentry-rate-limits'], o = r && r['retry-after'];
    if (i)
        for (let t of i.trim().split(',')) {
            let [e, r] = t.split(':', 2), n = parseInt(e, 10), i = (isNaN(n) ? 60 : n) * 1000;
            if (r)
                for (let t of r.split(';'))
                    a[t] = _ + i;
            else
                a.all = _ + i;
        }
    else
        o ? a.all = _ + n(o, _) : 429 === e && (a.all = _ + 60000);
    return a;
}
