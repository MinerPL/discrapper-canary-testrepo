n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(325767);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    var { width: t = 10, height: n = 10, color: o = 'currentColor', foreground: s } = e,
        u = c(e, ['width', 'height', 'color', 'foreground']);
    return (0, r.jsx)(
        'svg',
        l(a({}, (0, i.Z)(u)), {
            width: t,
            height: n,
            viewBox: '0 0 10 10',
            children: (0, r.jsx)('path', {
                className: s,
                d: 'M4.59185 1.69642L1.32007 0.0611887C1.14437 -0.00404167 0.953613 -0.0174513 0.770466 0.0225611C0.587319 0.0625734 0.419488 0.154328 0.286908 0.286908C0.154328 0.419488 0.0625738 0.587318 0.0225614 0.770466C-0.0174511 0.953613 -0.00404127 1.14437 0.0611893 1.32007L1.69642 4.59185C1.78832 4.83513 1.78825 5.10365 1.69623 5.34698L0.122153 8.68254C0.0375916 8.84984 0.00799916 9.03955 0.0375831 9.2246C0.0671671 9.40965 0.154425 9.58061 0.286913 9.7131C0.419402 9.84559 0.59035 9.93283 0.775402 9.96242C0.960453 9.992 1.15016 9.96241 1.31746 9.87785L4.65302 8.30377C4.89635 8.21175 5.16487 8.21168 5.40815 8.30358L8.67993 9.93881C8.85563 10.004 9.04639 10.0175 9.22953 9.97744C9.41268 9.93743 9.58051 9.84567 9.71309 9.71309C9.84567 9.58051 9.93743 9.41268 9.97744 9.22953C10.0175 9.04639 10.004 8.85563 9.93881 8.67993L8.30358 5.40815C8.24152 5.292 8.20906 5.16233 8.2091 5.03061C8.20913 4.89889 8.24165 4.7692 8.30377 4.65302L9.87785 1.31746C9.96241 1.15016 9.992 0.960453 9.96242 0.775401C9.93283 0.59035 9.84559 0.419401 9.7131 0.286913C9.58061 0.154424 9.40965 0.0671663 9.2246 0.0375824C9.03955 0.00799847 8.84984 0.037591 8.68254 0.122152L5.34698 1.69623C5.2308 1.75835 5.10111 1.79087 4.96939 1.7909C4.83767 1.79094 4.708 1.75848 4.59185 1.69642Z',
                fill: o
            })
        })
    );
}
