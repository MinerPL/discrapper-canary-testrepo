n.d(t, {
    NX: function () {
        return d;
    },
    WS: function () {
        return c;
    },
    l5: function () {
        return u;
    },
    qB: function () {
        return E;
    }
});
var r = n(106351),
    i = n(442837),
    a = n(424602),
    s = n(592125),
    o = n(496675),
    l = n(231338);
function u(e) {
    var t;
    if (null == e) return !1;
    let n = s.Z.getChannel(e.parent_id);
    if (null != n && (null == n ? void 0 : n.type) !== r.d.GUILD_CATEGORY) return !1;
    return (t = e.type), [r.d.GUILD_TEXT, r.d.GROUP_DM, r.d.DM].includes(t);
}
function c(e) {
    return _(e, o.Z);
}
function d(e) {
    return (0, i.e7)([s.Z, o.Z], () => _(s.Z.getChannel(e), o.Z));
}
function _(e, t) {
    return !!(null != e && void 0 !== e && u(e) && (null == e.guild_id || t.can(l.Pl.USE_EMBEDDED_ACTIVITIES, e))) || !1;
}
function E(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getChannel(e)),
        r = (0, i.e7)([o.Z], () => o.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, n)),
        c = u(n),
        d = null == n ? void 0 : n.guild_id;
    return !a.T.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && (null != d ? r && c : c);
}
