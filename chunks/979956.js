l.d(t, {
    BK: function () {
        return r;
    },
    Bf: function () {
        return d;
    },
    KZ: function () {
        return u;
    }
}),
    l(724458),
    l(653041);
var i = l(476326),
    n = l(403182),
    s = l(74538),
    a = l(474936),
    o = l(689938);
function r(e, t) {
    let l = n.Ng(n.dg(t));
    return s.ZP.isPremium(e, a.p9.TIER_2) ? o.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: l }) : s.ZP.isPremium(e, a.p9.TIER_1) ? o.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({ maxSize: l }) : o.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: l });
}
function d(e, t) {
    return n.nA(e, t) || n.vY(e);
}
function u(e) {
    return e.reduce((e, t) => (t.item.platform === i.ow.WEB && e.push(t.item.file), e), []);
}
