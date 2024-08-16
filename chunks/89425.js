n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(411104);
var r = n(430198),
    i = n(557135),
    a = n(66999),
    s = n(592125),
    o = n(496675),
    l = n(944486),
    u = n(979651);
class c extends Error {}
async function d(e) {
    let { channelId: t, timeoutMs: n = 10000, bypassChangeModal: d = !1 } = e,
        _ = s.Z.getChannel(t);
    if (
        null == _ ||
        !(await i.Z.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: d,
            channel: _,
            connected: u.Z.isInChannel(t),
            needSubscriptionToAccess: (0, a.$)(t, s.Z, r.Z, o.Z).needSubscriptionToAccess
        }))
    )
        return !1;
    let E = new Promise((e, r) => {
        let i = setTimeout(() => {
            r(new c('Joining voice channel has timed out.'));
        }, n);
        l.Z.addConditionalChangeListener(() => l.Z.getVoiceChannelId() !== t || (clearTimeout(i), e(), !1));
    });
    try {
        await E;
    } catch (e) {
        if (e instanceof c) return !1;
        throw e;
    }
    return !0;
}
