n.d(t, {
    Ib: function () {
        return c;
    },
    M9: function () {
        return E;
    },
    OR: function () {
        return u;
    },
    g0: function () {
        return f;
    },
    gJ: function () {
        return _;
    }
}), n(470079), n(442837);
var r = n(430824), i = n(496675), a = n(266090), o = n(981631), s = n(176505);
function l(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '1e9ccc_1', i = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.lds;
    return a.Z.useExperiment({
        guildId: i,
        location: r
    }, { autoTrackExposure: n }).experimentState;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
    return l(e, t, n) === a.P.ClydeProfiles;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return d(l(e, n), e, t);
}
function d(e, t, n) {
    if (null == t) {
        if (null != n && n.isPrivate())
            return !!n.hasFlag(s.zZ.CLYDE_AI) || r.Z.getGuildIds().some(e => E(r.Z.getGuild(e)));
        return !1;
    }
    return null != e && e !== a.P.None && i.Z.can(o.Plq.USE_CLYDE_AI, n);
}
function _(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : o.lds;
    return d(a.Z.getCurrentConfig({
        guildId: i,
        location: '1e9ccc_2'
    }, { autoTrackExposure: r }).experimentState, e, t);
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return h(e, t) !== a.P.None;
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return h(e, t) === a.P.ClydeProfiles;
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e)
        return !1;
    let n = e.id;
    return a.Z.getCurrentConfig({
        guildId: n,
        location: '1e9ccc_4'
    }, { autoTrackExposure: t }).experimentState;
}
