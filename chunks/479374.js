var r = n(161581), i = n(955903), a = n(354848), o = n(474180), s = n(943329), l = n(641236), u = n(531379), c = n(42024), d = n(992051), _ = n(106295), E = i && i.prototype, f = l('species'), h = !1, p = a(r.PromiseRejectionEvent), m = o('Promise', function () {
        var e = s(i), t = e !== String(i);
        if (!t && 66 === _ || d && !(E.catch && E.finally))
            return !0;
        if (!_ || _ < 51 || !/native code/.test(e)) {
            var n = new i(function (e) {
                    e(1);
                }), r = function (e) {
                    e(function () {
                    }, function () {
                    });
                };
            if ((n.constructor = {})[f] = r, !(h = n.then(function () {
                }) instanceof r))
                return !0;
        }
        return !t && (u || c) && !p;
    });
e.exports = {
    CONSTRUCTOR: m,
    REJECTION_EVENT: p,
    SUBCLASSING: h
};
