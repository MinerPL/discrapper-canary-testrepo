n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(726542),
    i = n(394821),
    a = n(503438),
    s = n(834353),
    o = n(802856),
    l = n(981631);
let u = new Set([l.ABu.LEAGUE_OF_LEGENDS, l.ABu.ROBLOX, l.ABu.TWITCH, l.ABu.YOUTUBE]);
function c(e) {
    if ((0, a.Z)(e)) return r.Z.get(l.ABu.SPOTIFY);
    if ((0, i.Z)(e)) return r.Z.get(l.ABu.CRUNCHYROLL);
    if ((0, o.Z)(e)) return r.Z.get(l.ABu.XBOX);
    if ((0, s.Z)(e)) return r.Z.get(l.ABu.PLAYSTATION);
    let t = r.Z.find((t) => {
        let { name: n } = t;
        return n === e.name;
    });
    return null != t && u.has(t.type) ? t : null;
}
