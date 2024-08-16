n.d(t, {
    ZP: function () {
        return c;
    },
    _n: function () {
        return u;
    },
    dD: function () {
        return E;
    },
    tA: function () {
        return _;
    },
    zW: function () {
        return d;
    }
});
var r = n(442837),
    i = n(695346);
n(199902);
var a = n(314897),
    s = n(592125);
n(944486);
var o = n(885110),
    l = n(770471);
function u() {
    let e = (0, r.e7)([a.default], () => a.default.getId()),
        { canBroadcast: t } = l.Z.useExperiment({ location: 'use_self_broadcast' }, { autoTrackExposure: !1 }),
        n = (0, r.e7)([o.Z], () => o.Z.getBroadcast());
    return t && (null == n ? void 0 : n.userId) === e ? n : null;
}
function c() {
    return null != u();
}
function d(e) {
    let t = u(),
        n = (0, r.e7)([s.Z], () => s.Z.getChannel(e));
    return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel();
}
function _(e) {
    let t = a.default.getId(),
        { canBroadcast: n } = l.Z.getCurrentConfig({ location: 'is_broadcasting_in_channel' }, { autoTrackExposure: !1 }),
        r = o.Z.getBroadcast();
    if (!n || null == r || r.userId !== t) return !1;
    let i = s.Z.getChannel(e);
    return null != i && i.ownerId === r.userId && i.isBroadcastChannel();
}
function E() {
    let e = i.MI.getSetting(),
        t = i.GA.getSetting();
    return i.Uc.getSetting() || e.length > 0 || t.length > 0;
}
n(292584);
