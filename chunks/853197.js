n.d(t, {
    A5: function () {
        return _;
    },
    BS: function () {
        return g;
    },
    EW: function () {
        return S;
    },
    FL: function () {
        return C;
    },
    R9: function () {
        return m;
    },
    Tn: function () {
        return f;
    },
    Un: function () {
        return R;
    },
    Xt: function () {
        return h;
    },
    YK: function () {
        return T;
    },
    hM: function () {
        return p;
    },
    j7: function () {
        return E;
    },
    wj: function () {
        return I;
    },
    x8: function () {
        return A;
    }
});
var i = n(913527),
    a = n.n(i),
    s = n(594190),
    r = n(695346),
    l = n(77498),
    o = n(70956),
    c = n(346114),
    u = n(288836),
    d = n(689938);
function _(e) {
    let t = g(e);
    return null == t ? null : E(t);
}
function E(e) {
    if (e.dropsQuestId === u.oL) return c.a;
    return null;
}
function I(e, t) {
    if (null == e) return !1;
    let n = l.Z.getGameByName(e);
    return (
        !!(
            null != n &&
            t.some((e) => {
                var t;
                return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase());
            })
        ) || !1
    );
}
function m() {
    return Math.floor(Date.now() / 1000) - u.kS;
}
function T(e, t, n) {
    var i, a, s, r;
    if (null == g(e)) return !1;
    let l = ((i = t), (a = u.RN[e]), null !== (s = i.find((e) => I(e.name, a))) && void 0 !== s ? s : null);
    if (null != l) {
        let e = null !== (r = null == l ? void 0 : l.lastLaunched) && void 0 !== r ? r : 0;
        return n <= l.lastFocused || n * o.Z.Millis.SECOND <= e;
    }
    return !1;
}
function h(e) {
    return T(e, s.ZP.getGamesSeen(!1), m());
}
function N(e, t) {
    let { endDate: n } = e,
        i = a()(),
        s = a()(n, u.fS),
        r = a()(i.clone().add(e.dropsNoticeBannerDurationDays, 'days').format(u.fS)),
        l = s.isSameOrBefore(r),
        o = s.isBefore(i, 'minute');
    return l && ((t && !o) || (!t && o));
}
function f(e) {
    var t;
    let n = g(e);
    if (null == n || !(null === (t = _(e)) || void 0 === t ? void 0 : t.getCurrentConfig({ location: '1' }, { autoTrackExposure: !1 }).dropsEnabled)) return !1;
    let i = r.bh.getSetting(),
        a = N(n, !0);
    return !i && a;
}
function C(e) {
    var t, n;
    let i = g(e);
    if (null == i || !(null === (n = _(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({ location: '2' }, { autoTrackExposure: !1 })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
    let a = r.bh.getSetting(),
        s = N(i, !1);
    return p(i) && !a && s;
}
function p(e) {
    let { endDate: t } = e,
        n = a()(t, 'YYYY-MM-DD HH:mm');
    return a()() > n;
}
function g(e) {
    return u.Zv[e];
}
function S(e) {
    return Object.values(u.Zv).find((t) => t.dropsQuestId === e);
}
function A(e) {
    return Object.keys(u.Zv).find((t) => u.Zv[t].dropsQuestId === e);
}
function R(e) {
    switch (e) {
        case 'SWITCH':
            return d.Z.Messages.DROPS_PLATFORM_SWITCH;
        case 'PC':
            return d.Z.Messages.DROPS_PLATFORM_PC;
        case 'PLAYSTATION':
            return d.Z.Messages.DROPS_PLATFORM_PLAYSTATION;
        case 'XBOX':
            return d.Z.Messages.DROPS_PLATFORM_XBOX;
        default:
            return '';
    }
}
