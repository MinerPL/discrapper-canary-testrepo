function n(t) {
    if (!t)
        return {};
    let e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e)
        return {};
    let r = e[6] || '', n = e[8] || '';
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: r,
        hash: n,
        relative: e[5] + r + n
    };
}
r.d(e, {
    en: function () {
        return n;
    }
});
