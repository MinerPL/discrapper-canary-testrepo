var n = r(657398), _ = r(706627);
t.exports = function (t) {
    if (!_(t))
        return !1;
    var e = n(t);
    return '[object Function]' == e || '[object GeneratorFunction]' == e || '[object AsyncFunction]' == e || '[object Proxy]' == e;
};
