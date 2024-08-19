n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(653041);
var i = n(496675),
    l = n(443063),
    r = n(981631);
function a(e) {
    let t = e.hasFeature(r.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && i.Z.can(r.Plq.KICK_MEMBERS, e);
    if (!e.hasFeature(r.oNc.CLAN)) return [];
    let n = [];
    return t && n.push(l.z.GUILD_MEMBER_APPLICATIONS), n;
}
