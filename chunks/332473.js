n.d(t, {
    b: function () {
        return l;
    },
    e: function () {
        return r;
    }
});
var i = n(399606),
    a = n(594174),
    s = n(918505);
let r = () => o(a.default.getCurrentUser(), (0, s.JH)()),
    l = () =>
        o(
            (0, i.e7)([a.default], () => a.default.getCurrentUser()),
            (0, s.o9)()
        );
function o(e, t) {
    return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t && !0;
}
