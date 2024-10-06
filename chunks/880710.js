n.d(t, {
    w: function () {
        return d;
    }
});
var r = n(146150),
    i = n(28866),
    a = n(670458),
    s = n(926832),
    o = n(859159);
function l(e, t) {
    return Object.keys(e).reduce(function (n, i) {
        return (n[i] = (0, r.pi)({ timeZone: t }, e[i])), n;
    }, {});
}
function u(e, t) {
    return Object.keys((0, r.pi)((0, r.pi)({}, e), t)).reduce(function (n, i) {
        return (n[i] = (0, r.pi)((0, r.pi)({}, e[i] || {}), t[i] || {})), n;
    }, {});
}
function c(e, t) {
    if (!t) return e;
    var n = a.C.formats;
    return (0, r.pi)((0, r.pi)((0, r.pi)({}, n), e), {
        date: u(l(n.date, t), l(e.date || {}, t)),
        time: u(l(n.time, t), l(e.time || {}, t))
    });
}
var d = function (e, t, n, a, l) {
    var u = e.locale,
        d = e.formats,
        _ = e.messages,
        E = e.defaultLocale,
        f = e.defaultFormats,
        h = e.fallbackOnEmptyString,
        p = e.onError,
        I = e.timeZone,
        m = e.defaultRichTextElements;
    void 0 === n && (n = { id: '' });
    var T = n.id,
        S = n.defaultMessage;
    (0, i.kG)(!!T, '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue');
    var g = String(T),
        A = _ && Object.prototype.hasOwnProperty.call(_, g) && _[g];
    if (Array.isArray(A) && 1 === A.length && A[0].type === o.wD.literal) return A[0].value;
    if (!a && A && 'string' == typeof A && !m) return A.replace(/'\{(.*?)\}'/gi, '{$1}');
    if (((a = (0, r.pi)((0, r.pi)({}, m), a || {})), (d = c(d, I)), (f = c(f, I)), !A)) {
        if (!1 === h && '' === A) return A;
        if (((!S || (u && u.toLowerCase() !== E.toLowerCase())) && p(new s.$6(n, u)), S))
            try {
                var N = t.getMessageFormat(S, E, f, l);
                return N.format(a);
            } catch (e) {
                return p(new s.X9('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), u, n, e)), 'string' == typeof S ? S : g;
            }
        return g;
    }
    try {
        var N = t.getMessageFormat(A, u, d, (0, r.pi)({ formatters: t }, l || {}));
        return N.format(a);
    } catch (e) {
        p(new s.X9('Error formatting message: "'.concat(g, '", using ').concat(S ? 'default message' : 'id', ' as fallback.'), u, n, e));
    }
    if (S)
        try {
            var N = t.getMessageFormat(S, E, f, l);
            return N.format(a);
        } catch (e) {
            p(new s.X9('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), u, n, e));
        }
    return 'string' == typeof A ? A : 'string' == typeof S ? S : g;
};
