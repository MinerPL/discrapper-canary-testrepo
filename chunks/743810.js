t.d(n, {
    Nv: function () {
        return S;
    },
    pd: function () {
        return C;
    },
    uX: function () {
        return T;
    },
    wk: function () {
        return A;
    }
});
var i = t(350483), l = t(220444), o = t(905423), E = t(131704), r = t(592125), u = t(306680), a = t(9156), s = t(981631), d = t(490897);
let _ = (e, n) => {
        let t = r.Z.getChannel(n);
        return null != t && ((0, E.hv)(t.type) ? !!u.ZP.getMentionCount(n) : (!a.ZP.isChannelMuted(e, n) || u.ZP.getMentionCount(n) > 0) && (0, l.d)(t));
    }, c = (e, n) => {
        if (n === d.W.GUILD_EVENT)
            return !a.ZP.isMuteScheduledEventsEnabled(e) && u.ZP.hasUnread(e, n);
        return u.ZP.hasUnread(e, n);
    }, C = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (0, i.Z)(1, {
                channelPredicate: _,
                guildPredicate: e => e === n || !a.ZP.isMuted(e),
                guildFeaturePredicate: c
            }), !1;
        }
    }, A = {
        binds: ['alt+shift+up'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (0, i.Z)(-1, {
                channelPredicate: _,
                guildPredicate: e => e === n || !a.ZP.isMuted(e),
                guildFeaturePredicate: c
            }), !1;
        }
    }, I = (e, n) => u.ZP.getMentionCount(n) > 0, S = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(1, {
            channelPredicate: I,
            withVoiceChannels: !0
        }), !1)
    }, T = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(-1, {
            channelPredicate: I,
            withVoiceChannels: !0
        }), !1)
    };
