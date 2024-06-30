n.r(t), n.d(t, {
    default: function () {
        return o;
    }
});
var r = n(923868), i = n(424421), a = n(951516);
function o(e, t, n) {
    (0, a.Z)(2, arguments);
    var o = (0, r.default)(e, n), s = (0, r.default)(t, n);
    return Math.round((o.getTime() - (0, i.Z)(o) - (s.getTime() - (0, i.Z)(s))) / 604800000);
}
