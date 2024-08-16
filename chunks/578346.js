r.d(t, {
    D2: function () {
        return s;
    },
    Hj: function () {
        return E;
    },
    rK: function () {
        return c;
    }
});
var n = r(309544),
    a = r(622916),
    o = r(688838);
let i = {},
    _ = {};
function E(e, t) {
    (i[e] = i[e] || []), i[e].push(t);
}
function s(e, t) {
    !_[e] && (t(), (_[e] = !0));
}
function c(e, t) {
    let r = e && i[e];
    if (!!r)
        for (let i of r)
            try {
                i(t);
            } catch (t) {
                n.X &&
                    a.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, o.$P)(i)}
Error:`,
                        t
                    );
            }
}
