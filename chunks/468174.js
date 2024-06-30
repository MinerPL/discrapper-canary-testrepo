r.d(e, {
    g: function () {
        return i;
    }
});
var n = r(46834), _ = r(876122), a = r(633401);
function i(t, e, r = () => {
}) {
    let i;
    let o = { ...t };
    void 0 !== o.name && void 0 === o.description && (o.description = o.name);
    let E = (0, _.Gd)(), s = E.getScope(), c = s.getSpan(), I = function () {
            if (!!(0, a.z)())
                return c ? c.startChild(o) : E.startTransaction(o);
        }();
    function R() {
        I && I.finish(), E.getScope().setSpan(c);
    }
    s.setSpan(I);
    try {
        i = e(I);
    } catch (t) {
        throw I && I.setStatus('internal_error'), r(t), R(), t;
    }
    return (0, n.J8)(i) ? Promise.resolve(i).then(() => {
        R();
    }, t => {
        I && I.setStatus('internal_error'), r(t), R();
    }) : R(), i;
}
