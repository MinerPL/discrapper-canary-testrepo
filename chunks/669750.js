n(47120);
var r = n(147913),
    i = n(362721),
    a = n(314897),
    s = n(592125),
    o = n(979651),
    l = n(906605),
    u = n(574176),
    c = n(106301),
    d = n(866071),
    _ = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class f extends r.Z {
    constructor(...e) {
        super(...e),
            E(this, 'previousVoiceChannelId', void 0),
            E(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout()
            }),
            E(this, 'handlePostConnectionOpen', () => {
                (0, l.UP)();
            }),
            E(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t, guildId: n } = e,
                    { enableHangStatus: r, setDefaultStatus: a } = u.n.getCurrentConfig(
                        {
                            guildId: null != n ? n : _.lds,
                            location: 'HangStatusManager'
                        },
                        { autoTrackExposure: !0 }
                    );
                if (null == n && null == t) {
                    this.handleDisconnectFromVoiceChannel(), (this.previousVoiceChannelId = t);
                    return;
                }
                if (!r || t === this.previousVoiceChannelId) return;
                if (((this.previousVoiceChannelId = t), null == n || null == t)) return;
                let o = s.Z.getChannel(t);
                if (null == o || o.type !== _.d4z.GUILD_VOICE || !(0, i.w)(o, !0) || null != c.Z.getCurrentHangStatus()) return;
                let E = c.Z.getCurrentDefaultStatus();
                if ((null == E ? void 0 : E.expiresAt) != null && (null == E ? void 0 : E.expiresAt) >= Date.now()) {
                    if (E.status === _.tNA.CUSTOM && null != E.customHangStatus) {
                        let { status: e, emoji: t } = E.customHangStatus;
                        if (null != t && !(0, d.K)(t, o)) return;
                        (0, l._s)(e, t);
                        return;
                    }
                    if (null == E.status) return;
                    else {
                        (0, l.Zx)(E.status);
                        return;
                    }
                }
                a && (0, l.Zx)(_.tNA.CHILLING);
            }),
            E(this, 'handleGuildMemberUpdate', (e) => {
                let { user: t, guildId: n } = e;
                if (t.id !== a.default.getId()) return;
                let r = o.Z.getCurrentClientVoiceChannelId(n);
                if (null == r || null == c.Z.getCurrentHangStatus()) return;
                let u = s.Z.getChannel(r);
                !(0, i.w)(u, !0) && (0, l.Sc)();
            }),
            E(this, 'handleDisconnectFromVoiceChannel', () => {
                (0, l.Sc)();
            }),
            E(this, 'handleLogout', () => {
                this.handleDisconnectFromVoiceChannel();
            });
    }
}
t.Z = new f();
