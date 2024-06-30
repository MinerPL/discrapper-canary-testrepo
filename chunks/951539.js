i.d(n, {
    ZP: function () {
        return Z;
    },
    so: function () {
        return v;
    },
    wg: function () {
        return h;
    }
}), i(47120);
var l = i(442837), t = i(159300), a = i(427679), r = i(592125), s = i(984933), o = i(430824), c = i(496675), u = i(700785), d = i(924301), E = i(765305), g = i(981631);
function h(e) {
    var n;
    let [i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z];
    let {
        entityType: l,
        channelId: t
    } = 'entity_type' in (n = e) ? {
        entityType: n.entity_type,
        channelId: n.channel_id
    } : n;
    if (l === E.WX.EXTERNAL)
        return !0;
    let a = i.getChannel(t);
    return null != a && u.Uu(g.Plq.VIEW_CHANNEL, a);
}
function v(e) {
    let [n, i, l, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
        s.ZP,
        r.Z,
        o.Z,
        a.Z
    ];
    if ((0, d.Z2)(e))
        return !1;
    let {
            guild_id: g,
            channel_id: v
        } = e, Z = e.entity_type === E.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : i.getChannel(v), C = l.getGuild(g), m = u.getStageInstanceByChannel(v);
    return !!(0, t.b)(c.Z, C, Z, m) && null != Z && h(e, [i]);
}
function Z(e) {
    return (0, l.e7)([
        s.ZP,
        r.Z,
        o.Z,
        a.Z
    ], () => v(e, [
        s.ZP,
        r.Z,
        o.Z,
        a.Z
    ]), [e]);
}
