n.r(t), n.d(t, {
    default: function () {
        return o;
    }
});
var r = n(424421), i = n(767629), a = n(951516);
function o(e, t) {
    (0, a.Z)(2, arguments);
    var n = (0, i.default)(e), o = (0, i.default)(t);
    return Math.round((n.getTime() - (0, r.Z)(n) - (o.getTime() - (0, r.Z)(o))) / 86400000);
}
