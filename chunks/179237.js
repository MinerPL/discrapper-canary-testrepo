n.r(t),
    n.d(t, {
        createStringInterpolator: function () {
            return E;
        }
    });
var r,
    i = n(109393),
    a = n(414776),
    s = n(707506),
    o = n(566867),
    l = n(239189),
    u = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    c = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    d = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    _ = function (e, t, n, r, i) {
        return 'rgba(' + Math.round(t) + ', ' + Math.round(n) + ', ' + Math.round(r) + ', ' + i + ')';
    },
    E = function (e) {
        !r && (r = l.colorNames ? RegExp('(' + Object.keys(l.colorNames).join('|') + ')', 'g') : /^\b$/);
        var t = e.output.map(function (e) {
                return (0, a.je)(e).replace(c, o.c).replace(r, o.c);
            }),
            n = t.map(function (e) {
                return e.match(u).map(Number);
            }),
            E = n[0]
                .map(function (e, t) {
                    return n.map(function (e) {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    });
                })
                .map(function (t) {
                    return (0, s.m)((0, i.pi)((0, i.pi)({}, e), { output: t }));
                });
        return function (e) {
            var n = 0;
            return t[0]
                .replace(u, function () {
                    return String(E[n++](e));
                })
                .replace(d, _);
        };
    };
