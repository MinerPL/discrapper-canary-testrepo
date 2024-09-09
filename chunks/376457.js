r.d(t, {
    s: function () {
        return o;
    }
});
var n = r(151122),
    a = r(163162);
let o = (0, n._I)(() => ({
    name: 'HttpContext',
    preprocessEvent(e) {
        if (!a.m9.navigator && !a.m9.location && !a.m9.document) return;
        let t = (e.request && e.request.url) || (a.m9.location && a.m9.location.href),
            { referrer: r } = a.m9.document || {},
            { userAgent: n } = a.m9.navigator || {},
            o = {
                ...(e.request && e.request.headers),
                ...(r && { Referer: r }),
                ...(n && { 'User-Agent': n })
            },
            i = {
                ...e.request,
                ...(t && { url: t }),
                headers: o
            };
        e.request = i;
    }
}));
