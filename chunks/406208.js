var n = r(544364),
    i = Date.now(),
    o = 'fnValues' + i,
    s = 'fnStyle' + ++i;
t.Z = function () {
    return {
        onCreateRule: function (e, t, r) {
            if ('function' != typeof t) return null;
            var i = (0, n.JH)(e, {}, r);
            return (i[s] = t), i;
        },
        onProcessStyle: function (e, t) {
            if (o in t || s in t) return e;
            var r = {};
            for (var n in e) {
                var i = e[n];
                'function' == typeof i && (delete e[n], (r[n] = i));
            }
            return (t[o] = r), e;
        },
        onUpdate: function (e, t, r, n) {
            var i = t[s];
            i && (t.style = i(e) || {});
            var a = t[o];
            if (a) for (var u in a) t.prop(u, a[u](e), n);
        }
    };
};
