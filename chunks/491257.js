e.exports = function (e, t, n, r) {
    (t = t || '&'), (n = n || '=');
    var i = {};
    if ('string' != typeof e || 0 === e.length) return i;
    var a = /\+/g;
    e = e.split(t);
    var s = 1000;
    r && 'number' == typeof r.maxKeys && (s = r.maxKeys);
    var o = e.length;
    s > 0 && o > s && (o = s);
    for (var l = 0; l < o; ++l) {
        var u,
            c,
            d,
            _,
            E,
            f,
            h = e[l].replace(a, '%20'),
            p = h.indexOf(n);
        if ((p >= 0 ? ((d = h.substr(0, p)), (_ = h.substr(p + 1))) : ((d = h), (_ = '')), (E = decodeURIComponent(d)), (f = decodeURIComponent(_)), (u = i), (c = E), Object.prototype.hasOwnProperty.call(u, c))) Array.isArray(i[E]) ? i[E].push(f) : (i[E] = [i[E], f]);
        else i[E] = f;
    }
    return i;
};
