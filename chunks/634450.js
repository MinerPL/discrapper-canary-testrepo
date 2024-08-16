function n(e) {
    return '/' === e.charAt(0);
}
function r(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
    e.pop();
}
t.Z = function (e, t) {
    void 0 === t && (t = '');
    var i,
        a = (e && e.split('/')) || [],
        s = (t && t.split('/')) || [],
        o = e && n(e),
        l = t && n(t),
        u = o || l;
    if ((e && n(e) ? (s = a) : a.length && (s.pop(), (s = s.concat(a))), !s.length)) return '/';
    if (s.length) {
        var c = s[s.length - 1];
        i = '.' === c || '..' === c || '' === c;
    } else i = !1;
    for (var d = 0, _ = s.length; _ >= 0; _--) {
        var E = s[_];
        '.' === E ? r(s, _) : '..' === E ? (r(s, _), d++) : d && (r(s, _), d--);
    }
    if (!u) for (; d--; d) s.unshift('..');
    u && '' !== s[0] && (!s[0] || !n(s[0])) && s.unshift('');
    var f = s.join('/');
    return i && '/' !== f.substr(-1) && (f += '/'), f;
};
