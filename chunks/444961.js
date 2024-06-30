n(47120);
var i = n(846519), s = n(570140), a = n(287734), r = n(317770), l = n(199902), o = n(592125), c = n(430824), d = n(517100), u = n(19780), _ = n(70956), E = n(358085), h = n(981631);
let I = new i.V7(), m = new i.V7();
class p extends r.Z {
    _initialize() {
        s.Z.subscribe('IDLE', this.handleIdleUpdate);
    }
    _terminate() {
        I.stop(), m.stop(), s.Z.unsubscribe('IDLE', this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = d.Z.getIdleSince();
        if (!E.isPlatformEmbedded)
            return;
        for (let e of (I.stop(), m.stop(), l.Z.getAllActiveStreams()))
            if (e.state !== h.jm8.ENDED)
                return;
        if (null == e)
            return;
        let t = u.Z.getChannelId();
        if (null == t)
            return;
        m.start(18000000, () => {
            a.default.selectVoiceChannel(null);
        });
        let n = c.Z.getGuild(u.Z.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout)
            return;
        let i = o.Z.getChannel(t);
        if (null != i)
            !i.isGuildStageVoice() && I.start(e + n.afkTimeout * _.Z.Millis.SECOND - Date.now(), () => {
                null != (n = c.Z.getGuild(u.Z.getGuildId())) && null != n.afkChannelId && a.default.selectVoiceChannel(n.afkChannelId);
            });
    }
}
t.Z = new p();
