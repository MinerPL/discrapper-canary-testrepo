var r = n(334389);
function i(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
    var n = function () {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            a = n.cache;
        if (a.has(i)) return a.get(i);
        var s = e.apply(this, r);
        return (n.cache = a.set(i, s) || a), s;
    };
    return (n.cache = new (i.Cache || r.Z)()), n;
}
(i.Cache = r.Z), (t.Z = i);
