n(47120);
var i = n(570140), s = n(846027), a = n(872810), r = n(317770), l = n(569545), o = n(199902), c = n(314897), d = n(592125), u = n(131951), _ = n(590415);
function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class h extends r.Z {
    _initialize() {
        i.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        i.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e), E(this, 'handleVoiceStateUpdates', e => {
            let {voiceStates: t} = e, n = c.default.getId();
            t.forEach(e => {
                var t;
                if (e.userId === n && !!(null === (t = d.Z.getChannel(e.channelId)) || void 0 === t ? void 0 : t.isGuildStageVoice()))
                    (0, _.gf)(e) !== _.xO.ON_STAGE && (this.handleStopStream(e), this.handleStopUserVideo());
            });
        }), E(this, 'handleStopStream', e => {
            let t = o.Z.getActiveStreamForUser(e.userId, e.guildId);
            if (null != t)
                (0, a.g)((0, l.V9)(t), !1);
        }), E(this, 'handleStopUserVideo', () => {
            u.Z.isVideoEnabled() && s.Z.setVideoEnabled(!1);
        });
    }
}
t.Z = new h();
