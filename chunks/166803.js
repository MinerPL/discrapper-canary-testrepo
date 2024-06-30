n.d(t, {
    Z: function () {
        return r;
    }
});
var s = n(149765), a = n(700785), i = n(981631);
function r(e, t) {
    let n = { [t.id]: t };
    return e.filter(e => {
        let t = a.I0({
                forceRoles: n,
                context: e
            }), r = i.Plq.VIEW_CHANNEL;
        return e.isGuildVocal() && (r = s.IH(r, i.Plq.CONNECT)), s.e$(t, r) && !a.Uu(r, e);
    });
}
