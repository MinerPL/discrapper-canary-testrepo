var r, i = n(442837), a = n(570140), o = n(41776), s = n(222677), l = n(598077), u = n(592125), c = n(594174);
function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let _ = {};
class E {
    static ensure(e, t, n) {
        var r, i;
        let a = ''.concat(e, ':').concat(t.name, ':').concat(null !== (r = t.id) && void 0 !== r ? r : '', ':').concat(n);
        return _[a] = null !== (i = _[a]) && void 0 !== i ? i : new E();
    }
    constructor() {
        d(this, 'users', void 0), d(this, 'fetched', void 0), this.fetched = !1, this.users = {};
    }
}
function f(e) {
    let {
            type: t,
            messageId: n,
            userId: r,
            emoji: i,
            reactionType: a
        } = e, o = E.ensure(n, i, a);
    if ('MESSAGE_REACTION_ADD' === t) {
        let e = c.default.getUser(r);
        null != e && (o.users[r] = e);
    } else
        delete o.users[r];
}
class h extends (r = i.ZP.Store) {
    getReactions(e, t, n, r, i) {
        let a = E.ensure(t, n, i);
        if (!a.fetched) {
            let l = u.Z.getChannel(e), c = null != l ? l.getGuildId() : null;
            if (null != c && o.Z.isLurking(c))
                return;
            s.U0({
                channelId: e,
                messageId: t,
                emoji: n,
                limit: r,
                type: i
            }), a.fetched = !0;
        }
        return a.users;
    }
}
d(h, 'displayName', 'MessageReactionsStore'), t.Z = new h(a.Z, {
    CONNECTION_OPEN: function () {
        _ = {};
    },
    MESSAGE_REACTION_ADD: f,
    MESSAGE_REACTION_REMOVE: f,
    MESSAGE_REACTION_ADD_USERS: function (e) {
        let {
                messageId: t,
                users: n,
                emoji: r,
                reactionType: i
            } = e, a = E.ensure(t, r, i);
        n.forEach(e => a.users[e.id] = new l.Z(e));
    }
});
