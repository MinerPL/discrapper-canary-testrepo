let i;
n(47120), n(724458), n(653041);
var a, l, s, r, o = n(392711), c = n.n(o), u = n(442837), d = n(570140), h = n(279779), p = n(131704), m = n(624138), _ = n(51144), f = n(592125), E = n(580005), C = n(699516), g = n(594174), I = n(981631);
let x = !1, T = '', N = 0, v = [], S = !1, Z = new Set(), A = null;
function M() {
    T = '', N = 0, v = [], Z = new Set(), x = !1, A = null;
}
function b(e) {
    T = e, N = 0, R();
}
function R() {
    if (!x)
        return !1;
    let e = f.Z.getChannel(A);
    if (0 === T.trim().length)
        return null != i && i.clearQuery(), v = function (e) {
            let t = C.Z.getFriendIDs();
            return (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
                let n = g.default.getUser(t);
                return null == n ? e : (e.push({ user: n }), e);
            }, []).sort(L);
        }(e), !0;
    let t = null != e ? e.recipients : [];
    return null != i && i.setQuery(T, { friends: !0 }, t, function () {
        let e = E.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof p.mn && e.isDM()), t = Math.max(...e.map(e => {
                let {id: t} = e;
                return E.Z.getScoreWithoutFetchingLatest(t);
            })), n = {};
        return e.forEach(e => {
            let i = E.Z.getScoreWithoutFetchingLatest(e.id), a = e.getRecipientId(), l = C.Z.isFriend(a) ? 0.2 : 0, s = null != f.Z.getDMFromUserId(a) ? 0.1 : 0;
            n[a] = 1 + i / t + l + s;
        }), n;
    }()), !1;
}
function j() {
    if (!x)
        return !1;
    let e = S;
    return (S = c().some(C.Z.getRelationships(), e => e === I.OGo.FRIEND)) !== e;
}
function L(e, t) {
    return (0, m._I)(_.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, m._I)(_.ZP.getName(t.user).toLocaleLowerCase()));
}
function P(e) {
    let {results: t} = e;
    if (!!x && '' !== T)
        v = t.map(e => {
            let {id: t} = e;
            return { user: g.default.getUser(t) };
        }).filter(e => null != e.user), w.emitChange();
}
function O() {
    return null != i && (i.destroy(), i = null), h.Z.getSearchContext(P, 1000);
}
function y(e) {
    if (e.key !== I.vTt)
        return !1;
    x = !0, j(), i = O(), A = null, b('');
}
function D(e) {
    if (e.key !== I.vTt)
        return !1;
    k();
}
function k() {
    null != i && (i.destroy(), i = null), M();
}
class U extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(g.default, f.Z, C.Z), this.syncWith([
            g.default,
            f.Z
        ], R), this.syncWith([C.Z], j);
    }
    getResults() {
        return v;
    }
    hasFriends() {
        return S;
    }
    getSelectedUsers() {
        return Z;
    }
    getQuery() {
        return T;
    }
    getState() {
        return {
            query: T,
            selectedRow: N,
            selectedUsers: Z,
            results: v,
            hasFriends: S
        };
    }
}
r = 'PrivateChannelRecipientsInviteStore', (s = 'displayName') in (l = U) ? Object.defineProperty(l, s, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : l[s] = r;
let w = new U(d.Z, {
    CONNECTION_OPEN: function () {
        M();
    },
    CHANNEL_SELECT: function (e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        if (null != t)
            return !1;
        let i = x;
        return M(), x = i, A = n, R();
    },
    MODAL_PUSH: y,
    SHOW_ACTION_SHEET: y,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
        x = !0, j(), i = O(), A = e.channelId, b('');
    },
    MODAL_POP: D,
    HIDE_ACTION_SHEET: D,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: k,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
        A = e.channelId, b(e.query);
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
        N = e.row;
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
        let {userId: t} = e;
        Z.add(t), Z = new Set(Z);
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
        let {userId: t} = e;
        Z.delete(t), Z = new Set(Z);
    }
});
t.Z = w;
