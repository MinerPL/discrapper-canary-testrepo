function r(e) {
    return '/' === e.charAt(0);
}
function i(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
        e[n] = e[r];
    e.pop();
}
n.r(t);
t.default = function (e, t) {
    void 0 === t && (t = '');
    var n, a = e && e.split('/') || [], o = t && t.split('/') || [], s = e && r(e), l = t && r(t), u = s || l;
    if (e && r(e) ? o = a : a.length && (o.pop(), o = o.concat(a)), !o.length)
        return '/';
    if (o.length) {
        var c = o[o.length - 1];
        n = '.' === c || '..' === c || '' === c;
    } else
        n = !1;
    for (var d = 0, _ = o.length; _ >= 0; _--) {
        var E = o[_];
        '.' === E ? i(o, _) : '..' === E ? (i(o, _), d++) : d && (i(o, _), d--);
    }
    if (!u)
        for (; d--; d)
            o.unshift('..');
    u && '' !== o[0] && (!o[0] || !r(o[0])) && o.unshift('');
    var f = o.join('/');
    return n && '/' !== f.substr(-1) && (f += '/'), f;
};
