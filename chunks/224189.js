n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(812206),
    i = n(307643),
    a = n(973616),
    s = n(592125),
    o = n(566620),
    l = n(969345);
async function u(e, t) {
    var n;
    let u = r.Z.getApplication(e);
    if (c(u)) return u;
    let d = null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id,
        { activityConfigs: _, applications: E } = await (0, o.w1)({ guildId: d }),
        f = (0, l.Z)({
            applicationId: e,
            activityConfigs: _,
            applications: E
        });
    if (c(null == f ? void 0 : f.application)) return null == f ? void 0 : f.application;
    {
        let t = await (0, i.UM)(e);
        return a.Z.createFromServer(t);
    }
}
function c(e) {
    return null != e && null != e.embeddedActivityConfig && !0;
}
