t.d(n, {
    Nv: function () {
        return L;
    },
    pd: function () {
        return A;
    },
    uX: function () {
        return N;
    },
    wk: function () {
        return S;
    }
});
var i = t(350483),
    l = t(220444),
    o = t(905423),
    r = t(131704),
    E = t(592125),
    a = t(306680),
    u = t(944486),
    s = t(9156),
    d = t(981631),
    _ = t(490897);
let c = (e, n) => {
        let t = E.Z.getChannel(n);
        return null != t && ((0, r.hv)(t.type) || d.TPd.GUILD_VOCAL.has(t.type) ? a.ZP.getMentionCount(n) > 0 || u.Z.getVoiceChannelId() === n : (!s.ZP.isChannelMuted(e, n) || a.ZP.getMentionCount(n) > 0) && (0, l.d)(t));
    },
    C = (e, n) => {
        if (n === _.W.GUILD_EVENT) return !s.ZP.isMuteScheduledEventsEnabled(e) && a.ZP.hasUnread(e, n);
        return a.ZP.hasUnread(e, n);
    },
    I = (e, n) => {
        let t = E.Z.getChannel(n);
        return !!(null != t && d.TPd.GUILD_VOCAL.has(t.type)) && (!!(a.ZP.getMentionCount(n) > 0) || (u.Z.getVoiceChannelId() === n && a.ZP.getUnreadCount(n) > 0));
    },
    A = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : d.ME;
            return (
                (0, i.Z)(1, {
                    channelPredicate: c,
                    guildPredicate: (e) => e === n || !s.ZP.isMuted(e),
                    guildFeaturePredicate: C,
                    ensureChatIsVisible: I,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    S = {
        binds: ['alt+shift+up'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : d.ME;
            return (
                (0, i.Z)(-1, {
                    channelPredicate: c,
                    guildPredicate: (e) => e === n || !s.ZP.isMuted(e),
                    guildFeaturePredicate: C,
                    ensureChatIsVisible: I,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    T = (e, n) => a.ZP.getMentionCount(n) > 0,
    L = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(1, {
                channelPredicate: T,
                ensureChatIsVisible: I,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    N = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(-1, {
                channelPredicate: T,
                ensureChatIsVisible: I,
                withVoiceChannels: !0
            }),
            !1
        )
    };
