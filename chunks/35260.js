var r = n(147913),
    i = n(31996),
    a = n(728675),
    s = n(981631);
function o(e) {
    var t;
    if ((null === (t = e.message_reference) || void 0 === t ? void 0 : t.type) !== s.Uvt.FORWARD) return;
    let n = e.message_reference.guild_id;
    if (null != n) (0, i.Q)(n);
}
class l extends r.Z {
    constructor() {
        super(), (0, a.Z)(this, o);
    }
}
t.Z = new l();
