n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(149765), s = n(442837), a = n(984933), r = n(496675), l = n(981631);
function o(e) {
    let t = (0, s.e7)([a.ZP], () => {
        var t;
        return null !== (t = a.ZP.getChannels(e)[a.sH]) && void 0 !== t ? t : [];
    }, [e]);
    return 0 === t.length ? 0 : t.filter(e => {
        let {channel: t} = e;
        return r.Z.can(i.$e(l.Plq.SEND_MESSAGES, l.Plq.VIEW_CHANNEL), t);
    }).length;
}
