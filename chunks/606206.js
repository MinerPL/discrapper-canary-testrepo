let s;
l(47120), l(653041), l(411104);
var n, r, a, u, i = l(442837), o = l(570140), c = l(278323), d = l(212819), h = l(933557), _ = l(592125), f = l(430824), p = l(293273), I = l(158776), E = l(699516), N = l(594174), T = l(55589), m = l(981631);
let C = [
        d.h8.TEXT_CHANNEL,
        d.h8.GROUP_DM,
        d.h8.USER
    ], A = null, v = null, g = [], L = [];
function S(e) {
    g = [
        ...g,
        e
    ], L = L.map(e => ({
        ...e,
        sent: g.includes(e.data.record.id)
    })), R.emitChange();
}
function x() {
    A = null, null != s && (s.destroy(), s = null), null != v && v();
}
function M() {
    let e = null != A && null != A.application_id ? p.Z.getApplicationActivity(A.application_id) : null;
    if (null != A && (null == e || null == e.party || null == e.party.id))
        return x();
}
class y extends (n = i.ZP.Store) {
    initialize() {
        this.waitFor(p.Z);
    }
    getActivity() {
        return A;
    }
    getQuery() {
        var e;
        return null !== (e = null == s ? void 0 : s.query) && void 0 !== e ? e : '';
    }
    getResults() {
        return L;
    }
}
u = 'ActivityInviteModalStore', (a = 'displayName') in (r = y) ? Object.defineProperty(r, a, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[a] = u;
let R = new y(o.Z, {
    ACTIVITY_INVITE_MODAL_OPEN: function (e) {
        A = e.activity, v = e.resolve, g = [], null == s && (s = new d.ZP((e, t) => {
            var l;
            return l = e, void (L = ('' === t.trim() ? function () {
                let e = [];
                return T.Z.getPrivateChannelIds().forEach(t => {
                    let l = _.Z.getChannel(t);
                    if (null != l)
                        if (l.type === m.d4z.DM) {
                            let t = l.getRecipientId(), s = null != t ? N.default.getUser(t) : null;
                            null != s && e.push({
                                type: d.h8.USER,
                                record: s,
                                score: 0
                            });
                        } else
                            l.isMultiUserDM() && e.push({
                                type: d.h8.GROUP_DM,
                                record: l,
                                score: 0
                            });
                }), e;
            }() : l).map(e => {
                switch (e.type) {
                case d.h8.USER: {
                        let {record: t} = e;
                        return {
                            type: d.h8.USER,
                            sent: g.includes(t.id),
                            status: I.Z.getStatus(t.id),
                            data: e
                        };
                    }
                case d.h8.TEXT_CHANNEL: {
                        let {record: t} = e, l = _.Z.getChannel(t.parent_id), s = f.Z.getGuild(t.guild_id);
                        return {
                            type: d.h8.TEXT_CHANNEL,
                            sent: g.includes(t.id),
                            categoryName: null != l ? (0, h.F6)(l, N.default, E.Z) : '',
                            guildName: null != s ? s.toString() : '',
                            data: e
                        };
                    }
                case d.h8.GROUP_DM: {
                        let {record: t} = e;
                        return {
                            type: d.h8.GROUP_DM,
                            sent: g.includes(t.id),
                            data: e
                        };
                    }
                default:
                    throw Error('Unknown Result Type: '.concat(e.type));
                }
            }), R.emitChange());
        }, C, 100)), s.search('');
    },
    ACTIVITY_INVITE_MODAL_QUERY: function (e) {
        let {query: t} = e;
        null != s && s.search(t);
    },
    ACTIVITY_INVITE_MODAL_SEND: function (e) {
        if (null == A)
            return;
        let t = e.channelId, l = e.userId;
        null != t ? c.Z.sendActivityInvite({
            channelId: t,
            type: m.mFx.JOIN,
            activity: A,
            location: 'Channel Text Area - Invite to Join Modal'
        }).then(() => S(t)) : null != l && c.Z.sendActivityInviteUser({
            userId: l,
            type: m.mFx.JOIN,
            activity: A,
            location: 'Channel Text Area - Invite to Join Modal'
        }).then(() => S(l));
    },
    ACTIVITY_INVITE_MODAL_CLOSE: x,
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let {locked: t} = e;
        return !!t && null != A && (x(), !0);
    },
    LOCAL_ACTIVITY_UPDATE: M,
    RPC_APP_DISCONNECTED: M
});
t.Z = R;
