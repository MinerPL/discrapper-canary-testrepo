n.d(t, {
    Nb: function () {
        return l;
    },
    oA: function () {
        return o;
    },
    pr: function () {
        return s;
    },
    ze: function () {
        return u;
    }
});
var r = n(442837),
    a = n(430824),
    i = n(496675),
    E = n(981631);
let _ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
        r = t.getGuild(e);
    return null != r && n.can(E.Plq.MANAGE_GUILD, r);
};
function u(e) {
    return null != e && _(e);
}
function l(e) {
    return _(e);
}
function s(e) {
    return (0, r.e7)([a.Z, i.Z], () => _(e, a.Z, i.Z), [e]);
}
function o(e) {
    return (0, r.e7)(
        [a.Z],
        () => {
            let t = a.Z.getGuild(e);
            return (null == t ? void 0 : t.hasFeature(E.oNc.COMMUNITY)) || !1;
        },
        [e]
    );
}
