t.d(n, {
    Z: function () {
        return C;
    }
});
var l = t(735250);
t(470079);
var i = t(442837), a = t(481060), r = t(749210), u = t(287734), s = t(933557), d = t(314897), o = t(592125), c = t(984933), Z = t(271383), E = t(430824), M = t(496675), f = t(699516), _ = t(594174), g = t(979651), I = t(934415), m = t(700785), R = t(981631), N = t(689938);
function C(e, n) {
    let t = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]), C = (0, i.e7)([
            g.Z,
            o.Z
        ], () => {
            let t = g.Z.getUserVoiceChannelId(n, e.id);
            return o.Z.getChannel(t);
        }, [
            n,
            e.id
        ]);
    if ((0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [
            n,
            e.id
        ]) || null == C)
        return null;
    let T = e.id === d.default.getId();
    if (!T && !M.Z.can(R.Plq.MOVE_MEMBERS, C))
        return null;
    let A = t.filter(n => {
        let {channel: t} = n;
        return t.id !== C.id && (T ? M.Z.can(R.Plq.CONNECT, t) && !(0, I.rY)(t, g.Z, E.Z) : M.Z.can(R.Plq.MOVE_MEMBERS, t) && (M.Z.can(R.Plq.CONNECT, t) || m.BT({
            permission: R.Plq.CONNECT,
            user: e,
            context: t
        })) && !(0, I.rY)(t, g.Z, E.Z));
    });
    return 0 === A.length ? null : (0, l.jsx)(a.MenuItem, {
        id: 'voice-move',
        label: N.Z.Messages.MOVE_TO,
        children: A.map(t => {
            let {channel: i} = t;
            return (0, l.jsx)(a.MenuItem, {
                id: i.id,
                action: () => {
                    var t;
                    return t = i, void (e.id === d.default.getId() ? u.default.selectVoiceChannel(t.id) : r.Z.setChannel(n, e.id, t.id));
                },
                label: (0, s.F6)(i, _.default, f.Z)
            }, i.id);
        })
    });
}
