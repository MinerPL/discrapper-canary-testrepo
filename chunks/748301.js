n.r(t),
    n.d(t, {
        default: function () {
            return s;
        }
    });
var r = n(923868),
    i = n(424421),
    a = n(951516);
function s(e, t, n) {
    (0, a.Z)(2, arguments);
    var s = (0, r.default)(e, n),
        o = (0, r.default)(t, n);
    return Math.round((s.getTime() - (0, i.Z)(s) - (o.getTime() - (0, i.Z)(o))) / 604800000);
}
