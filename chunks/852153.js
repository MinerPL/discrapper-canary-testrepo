var a = r(599295),
    n = r(692378),
    s = r(383237),
    o = r(470079),
    i = r(639519),
    c = r.n(i),
    u = r(456519),
    l = r(3339),
    b = r(652621),
    f = r(398420),
    d = r(893361),
    h = ['getItemString', 'keyPath', 'labelRenderer', 'styling', 'value', 'valueRenderer', 'isCustomNode'];
function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? p(Object(r), !0).forEach(function (t) {
                  (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : p(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var g = function (e) {
    var t = e.getItemString,
        r = e.keyPath,
        n = e.labelRenderer,
        i = e.styling,
        c = e.value,
        p = e.valueRenderer,
        g = e.isCustomNode,
        v = (0, s.Z)(e, h),
        m = g(c) ? 'Custom' : (0, u.Z)(c),
        O = {
            getItemString: t,
            key: r[0],
            keyPath: r,
            labelRenderer: n,
            nodeType: m,
            styling: i,
            value: c,
            valueRenderer: p
        },
        w = y(
            y(y({}, v), O),
            {},
            {
                data: c,
                isCustomNode: g
            }
        );
    switch (m) {
        case 'Object':
        case 'Error':
        case 'WeakMap':
        case 'WeakSet':
            return o.createElement(l.Z, w);
        case 'Array':
            return o.createElement(b.Z, w);
        case 'Iterable':
        case 'Map':
        case 'Set':
            return o.createElement(f.Z, w);
        case 'String':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, O, {
                    valueGetter: function (e) {
                        return '"'.concat(e, '"');
                    }
                })
            );
        case 'Number':
        case 'Custom':
            return o.createElement(d.Z, O);
        case 'Boolean':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, O, {
                    valueGetter: function (e) {
                        return e ? 'true' : 'false';
                    }
                })
            );
        case 'Date':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, O, {
                    valueGetter: function (e) {
                        return e.toISOString();
                    }
                })
            );
        case 'Null':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, O, {
                    valueGetter: function () {
                        return 'null';
                    }
                })
            );
        case 'Undefined':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, O, {
                    valueGetter: function () {
                        return 'undefined';
                    }
                })
            );
        case 'Function':
        case 'Symbol':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, O, {
                    valueGetter: function (e) {
                        return e.toString();
                    }
                })
            );
        default:
            return o.createElement(
                d.Z,
                (0, a.Z)({}, O, {
                    valueGetter: function () {
                        return '<'.concat(m, '>');
                    }
                })
            );
    }
};
(g.propTypes = {
    getItemString: c().func.isRequired,
    keyPath: c().arrayOf(c().oneOfType([c().string, c().number]).isRequired).isRequired,
    labelRenderer: c().func.isRequired,
    styling: c().func.isRequired,
    value: c().any,
    valueRenderer: c().func.isRequired,
    isCustomNode: c().func.isRequired
}),
    (t.Z = g);
