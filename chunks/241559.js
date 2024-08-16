n.d(t, {
    hB: function () {
        return m;
    },
    lv: function () {
        return _;
    },
    n2: function () {
        return f;
    },
    nX: function () {
        return p;
    },
    rX: function () {
        return I;
    },
    xC: function () {
        return h;
    }
}),
    n(47120);
var r = n(149765),
    i = n(442837),
    a = n(430824),
    s = n(496675),
    o = n(594174),
    l = n(700785),
    u = n(478743),
    c = n(981631);
let d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, o.default],
            [n, r] = t,
            i = n.getGuild(e);
        return {
            user: r.getCurrentUser(),
            guild: i
        };
    },
    _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, o.default],
            n = d(e, t);
        return (
            null != n &&
            r.Db(
                l.uB({
                    user: n.user,
                    context: n.guild,
                    checkElevated: !1
                }),
                u.N
            )
        );
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, o.default],
            n = d(e, t);
        return null != n && s.Z.can(c.Plq.MANAGE_GUILD, n.guild) && s.Z.can(c.Plq.BAN_MEMBERS, n.guild);
    };
function f(e) {
    return (0, i.e7)([a.Z, o.default], () => _(e, [a.Z, o.default]), [e]);
}
function h(e) {
    let t = f(e),
        n = (0, i.e7)([a.Z, o.default], () => E(e, [a.Z, o.default]), [e]);
    return t && n;
}
function p(e) {
    return (0, i.e7)(
        [a.Z, s.Z],
        () => {
            let t = a.Z.getGuild(e);
            return null != t && s.Z.can(c.Plq.MANAGE_GUILD, t);
        },
        [e]
    );
}
function m(e, t, n) {
    return (0, i.e7)(
        [s.Z, a.Z],
        () => {
            let r = a.Z.getGuild(e);
            return null != r && t && s.Z.canManageUser(c.Plq.BAN_MEMBERS, n, r);
        },
        [t, e, n]
    );
}
function I(e, t, n) {
    let r = a.Z.getGuild(e);
    return null != r && t && s.Z.canManageUser(c.Plq.BAN_MEMBERS, n, r);
}
