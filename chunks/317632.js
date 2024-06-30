n(47120);
var i, a, s, l, r = n(442837), o = n(570140), c = n(823379), d = n(981631);
let u = [], _ = {}, E = null, m = 0;
function I(e) {
    let t = null;
    try {
        t = JSON.parse(e.launch_parameters);
    } catch {
        return null;
    }
    if (e.platform_type === d.ABu.XBOX) {
        let n = null == t ? void 0 : t.titleId, i = null == t ? void 0 : t.inviteToken;
        return null == n || null == i ? null : {
            ...e,
            parsed_launch_parameters: {
                titleId: n,
                inviteToken: i
            }
        };
    }
    return null;
}
class T extends (i = r.ZP.Store) {
    getInvites() {
        return u;
    }
    getInviteStatuses() {
        return _;
    }
    isInviteGameInstalled(e) {
        var t;
        return null === (t = _[e.invite_id]) || void 0 === t ? void 0 : t.installed;
    }
    isInviteJoinable(e) {
        var t;
        return null === (t = _[e.invite_id]) || void 0 === t ? void 0 : t.joinable;
    }
    getLastUnseenInvite() {
        return E;
    }
    getUnseenInviteCount() {
        return m;
    }
}
l = 'GameInviteStore', (s = 'displayName') in (a = T) ? Object.defineProperty(a, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = l, t.Z = new T(o.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let {gameInvites: t} = e;
        u = t.map(I).filter(c.lm);
    },
    GAME_INVITE_CREATE: function (e) {
        let {gameInvite: t} = e, n = I(t);
        null != n && (u = [
            n,
            ...u
        ], E = t, m += 1);
    },
    GAME_INVITE_DELETE: function (e) {
        let {inviteId: t} = e;
        u = u.filter(e => e.invite_id !== t);
    },
    GAME_INVITE_DELETE_MANY: function (e) {
        let {inviteIds: t} = e;
        u = u.filter(e => !t.includes(e.invite_id));
    },
    GAME_INVITE_UPDATE_STATUS: function (e) {
        (_ = { ..._ })[e.inviteId] = {
            installed: e.installed,
            joinable: e.joinable
        };
    },
    GAME_INVITE_CLEAR_UNSEEN: function (e) {
        E = null, m = 0;
    }
});
