n.d(t, {
    Hw: function () {
        return d;
    },
    Ss: function () {
        return l;
    },
    cq: function () {
        return u;
    }
}),
    n(47120);
var r = n(392711),
    i = n(860911),
    a = n(981631),
    s = n(176505);
let o = /^\d+$/;
function l(e) {
    return null != e && (!!(e === a.ME || e === a.I_8 || e === a.o_z || o.test(e)) || !1);
}
function u(e) {
    return !!(null == e || o.test(e) || (0, s.AB)(e)) || !1;
}
function c(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new i.Zn(
        ':'
            .concat((0, r.escapeRegExp)(e), '(')
            .concat(t, ')')
            .concat(n ? '?' : '')
    );
}
let d = {
    guildId() {
        let { name: e = 'guildId', optional: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [a.ME, a.I_8, a.o_z].map(r.escapeRegExp).join('|');
        return c(e, ''.concat(n, '|\\d+'), { optional: t });
    },
    channelId() {
        let { name: e = 'channelId', optional: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [...s.Vg].map(r.escapeRegExp).join('|');
        return c(e, ''.concat(n, '|\\d+'), { optional: t });
    }
};
