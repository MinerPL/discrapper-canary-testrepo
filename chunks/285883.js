r.d(t, {
    EN: function () {
        return s;
    },
    IQ: function () {
        return c;
    },
    bU: function () {
        return i;
    }
});
var n = r(309544),
    a = r(573736),
    o = r(622916);
let i = 'baggage',
    _ = 'sentry-',
    E = /^sentry-/;
function s(e) {
    let t = (function (e) {
        return e && ((0, a.HD)(e) || Array.isArray(e))
            ? Array.isArray(e)
                ? e.reduce(
                      (e, t) => (
                          Object.entries(I(t)).forEach(([t, r]) => {
                              e[t] = r;
                          }),
                          e
                      ),
                      {}
                  )
                : I(e)
            : void 0;
    })(e);
    if (!t) return;
    let r = Object.entries(t).reduce((e, [t, r]) => (t.match(E) && (e[t.slice(_.length)] = r), e), {});
    return Object.keys(r).length > 0 ? r : void 0;
}
function c(e) {
    if (!!e)
        return (function (e) {
            if (0 !== Object.keys(e).length)
                return Object.entries(e).reduce((e, [t, r], a) => {
                    let i = `${encodeURIComponent(t)}=${encodeURIComponent(r)}`,
                        _ = 0 === a ? i : `${e},${i}`;
                    return _.length > 8192 ? (n.X && o.kg.warn(`Not adding key: ${t} with val: ${r} to baggage header due to exceeding baggage size limits.`), e) : _;
                }, '');
        })(Object.entries(e).reduce((e, [t, r]) => (r && (e[`${_}${t}`] = r), e), {}));
}
function I(e) {
    return e
        .split(',')
        .map((e) => e.split('=').map((e) => decodeURIComponent(e.trim())))
        .reduce((e, [t, r]) => (t && r && (e[t] = r), e), {});
}
