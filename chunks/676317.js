r.d(t, {
    Nb: function () {
        return s;
    },
    oA: function () {
        return u;
    },
    pr: function () {
        return d;
    },
    ze: function () {
        return c;
    }
});
var a = r(442837), n = r(430824), i = r(496675), o = r(981631);
let l = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.Z, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z, a = t.getGuild(e);
    return null != a && r.can(o.Plq.MANAGE_GUILD, a);
};
function c(e) {
    return null != e && l(e);
}
function s(e) {
    return l(e);
}
function d(e) {
    return (0, a.e7)([
        n.Z,
        i.Z
    ], () => l(e, n.Z, i.Z), [e]);
}
function u(e) {
    return (0, a.e7)([n.Z], () => {
        let t = n.Z.getGuild(e);
        return (null == t ? void 0 : t.hasFeature(o.oNc.COMMUNITY)) || !1;
    }, [e]);
}
