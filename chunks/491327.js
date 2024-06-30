n(47120);
var i = n(392711), s = n.n(i), a = n(243814), r = n(447543), l = n(287734), o = n(703656), c = n(131704), d = n(592125), u = n(430824), _ = n(496675), E = n(944486), h = n(979651), I = n(934415), m = n(996106), p = n(914946), g = n(452426), T = n(561205), S = n(186901), C = n(981631);
t.Z = {
    [C.Etm.GET_CHANNEL]: {
        scope: {
            [S.Gp.ANY]: [
                a.x.RPC,
                a.x.GUILDS
            ]
        },
        handler(e) {
            let {
                    args: {channel_id: t},
                    socket: n
                } = e, i = d.Z.getChannel(t);
            if (null == i)
                throw new m.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            if (i.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(a.x.RPC) && !e.includes(a.x.DM_CHANNELS_READ))
                    throw new m.Z({ errorCode: C.lTL.INVALID_PERMISSIONS }, 'Invalid scope');
            }
            return (0, p.T5)(i, (0, p.zM)(i, n.application.id, n.authorization.scopes));
        }
    },
    [C.Etm.GET_CHANNELS]: {
        scope: a.x.RPC,
        handler(e) {
            let {
                    args: {guild_id: t}
                } = e, n = s().values(d.Z.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = u.Z.getGuild(t);
                if (null == e)
                    throw new m.Z({ errorCode: C.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
                n = n.filter(t => {
                    let {guild_id: n} = t;
                    return n === e.id;
                });
            }
            return {
                channels: n.filter(e => _.Z.can(C.Plq.VIEW_CHANNEL, e)).map(e => {
                    let {
                        id: t,
                        name: n,
                        type: i
                    } = e;
                    return {
                        id: t,
                        name: n,
                        type: i
                    };
                })
            };
        }
    },
    [C.Etm.GET_CHANNEL_PERMISSIONS]: {
        scope: a.x.GUILDS_MEMBERS_READ,
        handler(e) {
            let t = (0, T.Z)();
            if (null == t)
                throw new m.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel');
            return { permissions: _.Z.computePermissions(t) };
        }
    },
    [C.Etm.SELECT_VOICE_CHANNEL]: {
        scope: a.x.RPC,
        validation: e => (0, g.Z)(e).required().keys({
            channel_id: e.string().allow(null),
            timeout: e.number().min(0).max(60),
            force: e.boolean(),
            navigate: e.boolean()
        }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: {
                    channel_id: i,
                    timeout: s = 0,
                    force: a = !1,
                    navigate: r = !1
                }
            } = e;
            if (!i)
                return l.default.selectVoiceChannel(null), null;
            let g = E.Z.getVoiceChannelId();
            if (null != g && g !== i && !1 === a)
                throw new m.Z({ errorCode: C.lTL.SELECT_VOICE_FORCE_REQUIRED }, 'User is already joined to a voice channel.');
            return t.storeWait(n, () => d.Z.getChannel(i), s).catch(() => {
                throw new m.Z({ errorCode: C.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select voice channel timed out.');
            }).then(e => {
                if (null == e)
                    throw new m.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(i));
                if (!(0, c.vd)(e.type))
                    throw new m.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Channel is not a voice channel');
                return Promise.all([
                    Promise.resolve(e),
                    (0, p.T5)(e, (0, p.zM)(e, n.application.id, n.authorization.scopes))
                ]);
            }).then(e => {
                let [t, n] = e;
                if (n.guild_id) {
                    if ((0, I.rY)(t, h.Z, u.Z))
                        throw new m.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Channel is full');
                    if (!_.Z.can(C.Plq.CONNECT, t))
                        throw new m.Z({ errorCode: C.lTL.INVALID_PERMISSIONS }, 'Connect permission required to join channel');
                }
                return l.default.selectVoiceChannel(t.id), r && (0, o.dL)(C.Z5c.CHANNEL(t.guild_id, t.id)), n;
            });
        }
    },
    [C.Etm.GET_SELECTED_VOICE_CHANNEL]: {
        scope: {
            [S.Gp.ANY]: [
                a.x.RPC,
                a.x.RPC_VOICE_READ
            ]
        },
        handler(e) {
            let {socket: t} = e, n = E.Z.getVoiceChannelId(), i = null != n ? d.Z.getChannel(n) : null;
            return null != i ? (0, p.T5)(i, (0, p.zM)(i, t.application.id, t.authorization.scopes)) : null;
        }
    },
    [C.Etm.SELECT_TEXT_CHANNEL]: {
        scope: a.x.RPC,
        validation: e => (0, g.Z)(e).required().keys({
            channel_id: e.string().allow(null),
            timeout: e.number().min(0).max(60)
        }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: {
                    channel_id: i,
                    timeout: s = 0
                }
            } = e;
            return i ? t.storeWait(n, () => d.Z.getChannel(i), s).catch(() => {
                throw new m.Z({ errorCode: C.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select text channel timed out.');
            }).then(e => {
                if (null == e)
                    throw new m.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(i));
                if (!(0, c.Qm)(e.type))
                    throw new m.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Channel is not a text channel');
                return Promise.all([
                    Promise.resolve(e),
                    (0, p.T5)(e, (0, p.zM)(e, n.application.id, n.authorization.scopes))
                ]);
            }).then(e => {
                let [t, n] = e;
                if (n.guild_id && !_.Z.can(C.Plq.VIEW_CHANNEL, t))
                    throw new m.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'No permission to see channel');
                return n.guild_id ? (0, o.dL)(C.Z5c.CHANNEL(n.guild_id, t.id)) : l.default.selectPrivateChannel(t.id), n;
            }) : ((0, o.uL)(C.Z5c.ME), null);
        }
    },
    [C.Etm.CREATE_CHANNEL_INVITE]: {
        scope: a.x.RPC,
        handler(e) {
            let {
                args: {
                    channel_id: t,
                    ...n
                }
            } = e;
            return r.Z.createInvite(t, n, 'RPC').catch(() => {
                throw new m.Z({ errorCode: C.lTL.INVALID_PERMISSIONS }, 'Unable to generate an invite for '.concat(t, '. Does this user have permissions?'));
            });
        }
    }
};
