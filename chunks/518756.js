n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(442837),
    u = n(357156),
    a = n(984933),
    l = n(430824),
    o = n(496675),
    r = n(981631);
function c(e, t) {
    return (0, i.e7)(
        [l.Z, a.ZP, o.Z],
        () => {
            let n = l.Z.getGuild(e);
            if (o.Z.can(r.Plq.ADMINISTRATOR, n) || o.Z.can(r.Plq.CREATE_EVENTS, n)) return !0;
            for (let { channel: n } of a.ZP.getChannels(e)[a.Zb])
                if (null == t || n.type === t) {
                    let [e] = (0, u.Ob)(n);
                    if (o.Z.can(e, n)) return !0;
                }
            return !1;
        },
        [e, t]
    );
}
