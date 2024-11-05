n.d(t, {
    w: function () {
        return d;
    }
});
var r = n(259630),
    i = n(128307),
    a = n(118201),
    s = n(958388),
    o = n(322182);
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
        f = e.messages,
        _ = e.defaultLocale,
        h = e.defaultFormats,
        p = e.fallbackOnEmptyString,
        m = e.onError,
        g = e.timeZone,
        E = e.defaultRichTextElements;
    void 0 === n && (n = { id: '' });
    var v = n.id,
        I = n.defaultMessage;
    (0, i.kG)(!!v, '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue');
    var S = String(v),
        T = f && Object.prototype.hasOwnProperty.call(f, S) && f[S];
    if (Array.isArray(T) && 1 === T.length && T[0].type === o.wD.literal) return T[0].value;
    if (!a && T && 'string' == typeof T && !E) return T.replace(/'\{(.*?)\}'/gi, '{$1}');
    if (((a = (0, r.pi)((0, r.pi)({}, E), a || {})), (d = c(d, g)), (h = c(h, g)), !T)) {
        if (!1 === p && '' === T) return T;
        if (((!I || (u && u.toLowerCase() !== _.toLowerCase())) && m(new s.$6(n, u)), I))
            try {
                var b = t.getMessageFormat(I, _, h, l);
                return b.format(a);
            } catch (e) {
                return m(new s.X9('Error formatting default message for: "'.concat(S, '", rendering default message verbatim'), u, n, e)), 'string' == typeof I ? I : S;
            }
        return S;
    }
    try {
        var b = t.getMessageFormat(T, u, d, (0, r.pi)({ formatters: t }, l || {}));
        return b.format(a);
    } catch (e) {
        m(new s.X9('Error formatting message: "'.concat(S, '", using ').concat(I ? 'default message' : 'id', ' as fallback.'), u, n, e));
    }
    if (I)
        try {
            var b = t.getMessageFormat(I, _, h, l);
            return b.format(a);
        } catch (e) {
            m(new s.X9('Error formatting the default message for: "'.concat(S, '", rendering message verbatim'), u, n, e));
        }
    return 'string' == typeof T ? T : 'string' == typeof I ? I : S;
};
