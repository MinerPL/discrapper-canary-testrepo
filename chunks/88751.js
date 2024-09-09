n(47120), n(724458);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(570140),
    E = n(592125),
    f = n(271383),
    h = n(430824),
    p = n(594174),
    I = n(979651),
    m = n(700785),
    T = n(146085),
    S = n(590415);
((a = r || (r = {})).SPEAKER = 'speaker'), (a.MODERATOR = 'moderator');
let g = {},
    A = {
        speaker: !1,
        moderator: !1
    };
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == g[t] && (g[t] = {});
    let r = (function (e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = E.Z.getChannel(t),
            o = null == s ? void 0 : s.getGuildId(),
            l = h.Z.getGuild(o);
        if (null == l || null == s || !s.isGuildStageVoice()) return A;
        return {
            speaker: (function (e, t) {
                let n = I.Z.getVoiceStateForChannel(t, e);
                return (0, S.gf)(n) === S.xO.ON_STAGE;
            })(e, t),
            moderator: a
                ? ((n = e),
                  (r = l),
                  (i = s),
                  m.BT({
                      permission: T.yP,
                      user: n,
                      context: r,
                      overwrites: i.permissionOverwrites,
                      roles: h.Z.getRoles(r.id)
                  }))
                : null
        };
    })(e, t, n);
    return (g[t][e] = r), r;
}
function O(e) {
    let t = Object.values(E.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete g[e.id];
    return t.length > 0;
}
function R(e) {
    let { guildId: t, user: n } = e;
    return (
        null != n &&
        null != t &&
        (function (e, t) {
            for (let n in g) {
                let r = E.Z.getBasicChannel(n);
                if (null != r && r.guild_id === t) delete g[n][e];
            }
            return !0;
        })(n.id, t)
    );
}
function v(e) {
    let { guild: t } = e;
    for (let e in g) {
        let n = E.Z.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete g[e];
    }
}
class C extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, E.Z, h.Z, p.default, I.Z);
    }
    isSpeaker(e, t) {
        return this.getPermissionsForUser(e, t).speaker;
    }
    isModerator(e, t) {
        var n;
        return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n;
    }
    isAudienceMember(e, t) {
        let n = this.getPermissionsForUser(e, t);
        return !n.speaker && !n.moderator;
    }
    getPermissionsForUser(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t) return A;
        let i = null === (n = g[t]) || void 0 === n ? void 0 : n[e];
        if (null != i) return r && null == i.moderator ? N(e, t, !0) : i;
        return N(e, t, r);
    }
}
(l = 'StageChannelRoleStore'),
    (o = 'displayName') in (s = C)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.ZP = new C(_.Z, {
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            for (let e of t) delete g[e.id];
        },
        CONNECTION_OPEN: function () {
            g = {};
        },
        GUILD_MEMBER_REMOVE: R,
        GUILD_MEMBER_UPDATE: R,
        GUILD_ROLE_UPDATE: function (e) {
            let { guildId: t } = e;
            O(t);
        },
        PASSIVE_UPDATE_V2: function (e) {
            return O(e.guildId);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return (
                !c().isEmpty(g) &&
                t.reduce((e, t) => {
                    let { userId: n, channelId: r } = t;
                    return (
                        (function (e, t) {
                            var n;
                            if (null == t) return !1;
                            let r = E.Z.getChannel(t);
                            return !!(null != r && r.isGuildStageVoice()) && (null === (n = g[t]) || void 0 === n || delete n[e], !0);
                        })(n, r) || e
                    );
                }, !1)
            );
        },
        GUILD_CREATE: v,
        GUILD_DELETE: v
    }));
