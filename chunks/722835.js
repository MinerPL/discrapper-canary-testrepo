n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(872810), s = n(594190), a = n(199902), r = n(592125), l = n(430824), o = n(131951), c = n(496675), d = n(944486), u = n(449224), _ = n(382182), E = n(74299), h = n(989941);
function I() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!(0, E.Z)(o.Z) || null != a.Z.getCurrentUserActiveStream())
        return !1;
    let t = (0, h.Z)(s.ZP, u.Z);
    if (null == t || t.isLauncher && !e)
        return !1;
    let n = d.Z.getVoiceChannelId(), I = r.Z.getChannel(n);
    if (null == I)
        return !1;
    let m = I.getGuildId();
    return !!(0, _.JL)(I, l.Z, c.Z, !1) && ((0, i.WH)(m, I.id, { pid: t.pid }), !0);
}
