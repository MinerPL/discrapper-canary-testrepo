n.d(t, {
    Of: function () {
        return c;
    },
    ZP: function () {
        return l;
    }
}),
    n(47120),
    n(470079);
var r = n(442837),
    i = n(594174),
    a = n(251625),
    s = n(255564),
    o = n(621853);
function l(e, t) {
    return (0, r.e7)([i.default, o.Z], () => c(e, t, [i.default, o.Z]));
}
n(484459);
let u = (0, a.oH)((e, t) => new s.Z(e, t));
function c(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, o.Z],
        a = n.getUser(e),
        s = r.getUserProfile(e),
        l = r.getGuildMemberProfile(e, t);
    return null == a || null == s ? null : u(s, l);
}
