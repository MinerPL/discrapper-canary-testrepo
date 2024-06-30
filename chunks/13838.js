n(47120);
var i = n(392711), s = n.n(i), a = n(243814), r = n(902704), l = n(812206), o = n(594190), c = n(199902), d = n(592125), u = n(271383), _ = n(430824), E = n(131951), h = n(19780), I = n(594174), m = n(979651), p = n(996106), g = n(914946), T = n(238679), S = n(452426), C = n(295424), N = n(222263), f = n(863141), A = n(186901), Z = n(981631);
let L = e => (0, S.Z)(e).required().keys({ channel_id: e.string().required() });
function v(e) {
    var t;
    let {
            args: {channel_id: n},
            socket: i
        } = e, s = d.Z.getChannel(n);
    if (null == s || !(0, g.zM)(s, i.application.id, i.authorization.scopes))
        throw new p.Z({ errorCode: Z.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
    if (s.isNSFW() && (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0)
        throw new p.Z({ errorCode: Z.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(s.id));
}
let O = e => (0, S.Z)(e).keys({ channel_id: e.string().allow(null) });
function R(e) {
    let {
        args: {channel_id: t}
    } = e;
    if (null != t && null == d.Z.getChannel(t))
        throw new p.Z({ errorCode: Z.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let x = {
    [Z.zMe.GUILD_STATUS]: {
        scope: a.x.RPC,
        validation: e => (0, S.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: {guild_id: t}
            } = e;
            if (null == _.Z.getGuild(t))
                throw new p.Z({ errorCode: Z.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
            return e => {
                var n;
                let {
                        prevState: i,
                        dispatch: a
                    } = e, r = _.Z.getGuild(t);
                if (null == r)
                    return;
                let l = {
                    guild: {
                        id: r.id,
                        name: r.name,
                        icon_url: null !== (n = r.getIconURL(128)) && void 0 !== n ? n : null
                    },
                    online: 0
                };
                return !s().isEqual(i, l) && a(l), l;
            };
        }
    },
    [Z.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                a.x.RPC_VOICE_READ
            ]
        },
        validation: e => (0, S.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: {channel_id: t}
            } = e;
            if (null == d.Z.getChannel(t))
                throw new p.Z({ errorCode: Z.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return e => {
                let {
                        prevState: n,
                        dispatch: i
                    } = e, a = d.Z.getChannel(t);
                if (null == a)
                    return;
                let r = a.getGuildId(), l = Object.values(m.Z.getVoiceStatesForChannel(a.id));
                return n && s().differenceBy(l, n, e => {
                    let {userId: t} = e;
                    return t;
                }).forEach(e => i((0, g.aE)(r, a.id, e))), l;
            };
        }
    },
    [Z.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                a.x.RPC_VOICE_READ
            ]
        },
        validation: e => (0, S.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: {channel_id: t}
            } = e;
            if (null == d.Z.getChannel(t))
                throw new p.Z({ errorCode: Z.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return e => {
                let {
                        prevState: n,
                        dispatch: i
                    } = e, a = d.Z.getChannel(t);
                if (null == a)
                    return;
                let r = a.getGuildId(), l = Object.values(m.Z.getVoiceStatesForChannel(a.id));
                return s().differenceBy(n, l, e => {
                    let {userId: t} = e;
                    return t;
                }).forEach(e => i((0, g.aE)(r, a.id, e))), l;
            };
        }
    },
    [Z.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                a.x.RPC_VOICE_READ
            ]
        },
        validation: e => (0, S.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: {channel_id: t}
            } = e;
            if (null == d.Z.getChannel(t))
                throw new p.Z({ errorCode: Z.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return e => {
                let {
                        prevState: n,
                        dispatch: i
                    } = e, a = d.Z.getChannel(t);
                if (null == a)
                    return;
                let r = a.getGuildId(), l = Object.values(m.Z.getVoiceStatesForChannel(a.id)).map(e => (0, g.aE)(r, a.id, e));
                return s().differenceWith(l, n, s().isEqual).forEach(e => i(e)), l;
            };
        }
    },
    [Z.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                a.x.RPC_VOICE_READ
            ]
        },
        handler: () => e => {
            let {
                    prevState: t,
                    dispatch: n
                } = e, i = {
                    state: (0, g.zy)(h.Z.getState()),
                    hostname: h.Z.getHostname(),
                    pings: h.Z.getPings(),
                    average_ping: h.Z.getAveragePing(),
                    last_ping: h.Z.getLastPing()
                };
            return !s().isEqual(i, t) && n(i), i;
        }
    },
    [Z.zMe.MESSAGE_CREATE]: {
        scope: a.x.RPC,
        validation: L,
        handler: v
    },
    [Z.zMe.MESSAGE_UPDATE]: {
        scope: a.x.RPC,
        validation: L,
        handler: v
    },
    [Z.zMe.MESSAGE_DELETE]: {
        scope: a.x.RPC,
        validation: L,
        handler: v
    },
    [Z.zMe.SPEAKING_START]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                a.x.RPC_VOICE_READ,
                A.lH
            ]
        },
        validation: O,
        handler: R
    },
    [Z.zMe.SPEAKING_STOP]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                a.x.RPC_VOICE_READ,
                A.lH
            ]
        },
        validation: O,
        handler: R
    },
    [Z.zMe.GUILD_CREATE]: {
        scope: a.x.RPC,
        handler() {
        }
    },
    [Z.zMe.CHANNEL_CREATE]: {
        scope: a.x.RPC,
        handler() {
        }
    },
    [Z.zMe.GAME_JOIN]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                A.lH
            ]
        },
        handler() {
        }
    },
    [Z.zMe.GAME_SPECTATE]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                A.lH
            ]
        },
        handler() {
        }
    },
    [Z.zMe.ACTIVITY_JOIN]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                A.wE,
                A.lH
            ]
        },
        handler() {
        }
    },
    [Z.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                A.lH
            ]
        },
        handler() {
        }
    },
    [Z.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                A.wE,
                A.lH
            ]
        },
        handler() {
        }
    },
    [Z.zMe.ACTIVITY_INVITE]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                A.lH
            ]
        },
        handler() {
        }
    },
    [Z.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                A.wE,
                A.lH
            ]
        },
        handler() {
        }
    },
    [Z.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: {
            [A.Gp.ANY]: [
                a.x.RPC,
                A.wE,
                A.lH
            ]
        },
        handler() {
        }
    },
    [Z.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: T.gQ,
    [Z.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [A.Gp.ANY]: [A.wE] },
        handler() {
        }
    },
    [Z.zMe.ORIENTATION_UPDATE]: {
        scope: { [A.Gp.ANY]: [A.wE] },
        handler() {
        }
    },
    [Z.zMe.VOICE_CHANNEL_SELECT]: {
        scope: a.x.RPC,
        handler() {
        }
    },
    [Z.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [A.Gp.ALL]: [
                a.x.RPC,
                a.x.RPC_NOTIFICATIONS_READ
            ]
        },
        handler() {
        }
    },
    [Z.zMe.RELATIONSHIP_UPDATE]: {
        scope: a.x.RELATIONSHIPS_READ,
        handler() {
        }
    },
    [Z.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [A.Gp.ANY]: [
                A.lH,
                a.x.IDENTIFY
            ]
        },
        handler: () => e => {
            let {
                    prevState: t,
                    dispatch: n
                } = e, i = { currentUser: I.default.getCurrentUser() };
            return null != i.currentUser && (null == t || !(0, r.Z)(i, t)) && n((0, f.Z)(i.currentUser)), i;
        }
    },
    [Z.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [A.Gp.ALL]: [
                a.x.IDENTIFY,
                a.x.GUILDS_MEMBERS_READ
            ]
        },
        handler(e) {
            let {
                args: {guild_id: t}
            } = e;
            return e => {
                let {
                        prevState: n,
                        dispatch: i
                    } = e, s = { currentGuildMember: u.ZP.getSelfMember(t) };
                return null != s.currentGuildMember && (null == n || !(0, r.Z)(s, n)) && i((0, N.Z)(s.currentGuildMember)), s;
            };
        }
    },
    [Z.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [A.Gp.ANY]: [
                A.lH,
                A.wE
            ]
        },
        handler() {
        }
    },
    [Z.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [A.Gp.ANY]: [
                A.lH,
                A.wE
            ]
        },
        handler() {
        }
    },
    [Z.zMe.USER_ACHIEVEMENT_UPDATE]: {
        scope: A.lH,
        handler() {
        }
    },
    [Z.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [A.Gp.ALL]: [
                A.lH,
                a.x.RPC_SCREENSHARE_READ
            ]
        },
        handler: () => e => {
            var t, n;
            let {
                    prevState: i,
                    dispatch: a
                } = e, r = c.Z.getStreamerActiveStreamMetadata(), d = (null == r ? void 0 : r.pid) != null ? o.ZP.getGameForPID(r.pid) : null, u = (null == d ? void 0 : d.id) != null ? l.Z.getApplication(d.id) : null, _ = null != u ? (0, C.Z)(u) : null, E = null == r ? void 0 : r.sourceName, h = {
                    active: null != r,
                    pid: null !== (t = null == r ? void 0 : r.pid) && void 0 !== t ? t : null,
                    application: (n = null != _, n) ? { name: E } : null
                };
            return !s().isEqual(h, i) && a(h), h;
        }
    },
    [Z.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [A.Gp.ALL]: [
                A.lH,
                a.x.RPC_VIDEO_READ
            ]
        },
        handler: () => e => {
            let {
                    prevState: t,
                    dispatch: n
                } = e, i = { active: E.Z.isVideoEnabled() };
            return !s().isEqual(i, t) && n(i), i;
        }
    }
};
t.Z = x;
