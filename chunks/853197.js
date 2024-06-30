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
        return p;
    },
    R9: function () {
        return I;
    },
    Tn: function () {
        return f;
    },
    Un: function () {
        return x;
    },
    Xt: function () {
        return h;
    },
    YK: function () {
        return T;
    },
    hM: function () {
        return C;
    },
    j7: function () {
        return E;
    },
    wj: function () {
        return m;
    },
    x8: function () {
        return A;
    }
});
var i = n(913527), a = n.n(i), s = n(594190), l = n(695346), r = n(77498), o = n(70956), c = n(346114), d = n(702512), u = n(689938);
function _(e) {
    let t = g(e);
    return null == t ? null : E(t);
}
function E(e) {
    if (e.dropsQuestId === d.oL)
        return c.a;
    return null;
}
function m(e, t) {
    if (null == e)
        return !1;
    let n = r.Z.getGameByName(e);
    return !!(null != n && t.some(e => {
        var t;
        return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase());
    })) || !1;
}
function I() {
    return Math.floor(Date.now() / 1000) - d.kS;
}
function T(e, t, n) {
    var i, a, s, l;
    if (null == g(e))
        return !1;
    let r = (i = t, a = d.RN[e], null !== (s = i.find(e => m(e.name, a))) && void 0 !== s ? s : null);
    if (null != r) {
        ;
        let e = null !== (l = null == r ? void 0 : r.lastLaunched) && void 0 !== l ? l : 0;
        return n <= r.lastFocused || n * o.Z.Millis.SECOND <= e;
    }
    return !1;
}
function h(e) {
    return T(e, s.ZP.getGamesSeen(!1), I());
}
function N(e, t) {
    let {endDate: n} = e, i = a()(), s = a()(n, d.fS), l = a()(i.clone().add(e.dropsNoticeBannerDurationDays, 'days').format(d.fS)), r = s.isSameOrBefore(l), o = s.isBefore(i, 'minute');
    return r && (t && !o || !t && o);
}
function f(e) {
    var t;
    let n = g(e);
    if (null == n || !(null === (t = _(e)) || void 0 === t ? void 0 : t.getCurrentConfig({ location: '1' }, { autoTrackExposure: !1 }).dropsEnabled))
        return !1;
    let i = l.bh.getSetting(), a = N(n, !0);
    return !i && a;
}
function p(e) {
    var t, n;
    let i = g(e);
    if (null == i || !(null === (n = _(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({ location: '2' }, { autoTrackExposure: !1 })) || void 0 === t ? void 0 : t.dropsEnabled))
        return !1;
    let a = l.bh.getSetting(), s = N(i, !1);
    return C(i) && !a && s;
}
function C(e) {
    let {endDate: t} = e, n = a()(t, 'YYYY-MM-DD HH:mm');
    return a()() > n;
}
function g(e) {
    return d.Zv[e];
}
function S(e) {
    return Object.values(d.Zv).find(t => t.dropsQuestId === e);
}
function A(e) {
    return Object.keys(d.Zv).find(t => d.Zv[t].dropsQuestId === e);
}
function x(e) {
    switch (e) {
    case 'SWITCH':
        return u.Z.Messages.DROPS_PLATFORM_SWITCH;
    case 'PC':
        return u.Z.Messages.DROPS_PLATFORM_PC;
    case 'PLAYSTATION':
        return u.Z.Messages.DROPS_PLATFORM_PLAYSTATION;
    case 'XBOX':
        return u.Z.Messages.DROPS_PLATFORM_XBOX;
    default:
        return '';
    }
}
