s(733860);
var t, l, i, a, r = s(392711), o = s.n(r), d = s(442837), u = s(570140), c = s(163268), E = s(786761), g = s(706454), m = s(592125), M = s(271383), f = s(430824), _ = s(375954), N = s(699516), h = s(594174);
let I = {};
function Z(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], l = m.Z.getChannel(e), i = null != l ? l.getGuildId() : null;
    return {
        id: e,
        messages: n.map(e => (0, E.e5)(e)),
        guildId: i,
        loaded: s,
        loading: t
    };
}
function A(e) {
    let {channel: n} = e;
    delete I[n.id];
}
function p() {
    o().forEach(I, e => {
        e.messages = e.messages.map(e => e.set('blocked', N.Z.isBlockedForMessage(e)));
    });
}
class S extends (t = d.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, f.Z, M.ZP, _.Z, h.default, g.default);
    }
    getPinnedMessages(e) {
        var n;
        return null !== (n = I[e]) && void 0 !== n ? n : void 0;
    }
    loaded(e) {
        return null != I[e] && I[e].loaded;
    }
}
a = 'ChannelPinsStore', (i = 'displayName') in (l = S) ? Object.defineProperty(l, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : l[i] = a, n.Z = new S(u.Z, {
    CONNECTION_OPEN: function () {
        I = {};
    },
    GUILD_DELETE: function (e) {
        let {guild: n} = e;
        I = o()(I).filter(e => e.guildId !== n.id).keyBy('id').value();
    },
    MESSAGE_UPDATE: function (e) {
        let n = e.message.id, s = e.message.channel_id;
        if (null == s)
            return !1;
        let t = I[s];
        if (null == t && !e.message.pinned)
            return !1;
        if (null == e.message.author) {
            if (null != t) {
                let l = o().findIndex(t.messages, e => e.id === n);
                if (l >= 0) {
                    let n = t.messages[l], i = (0, E.wi)(n, e.message);
                    if (i !== n) {
                        let e = t.messages.slice();
                        e[l] = i, I[s].messages = e;
                    }
                }
            }
            return;
        }
        if (e.message.pinned) {
            if (null == t) {
                t = Z(s, [e.message], !1), I[s] = t;
                return;
            }
            t.messages = t.messages.slice();
            let l = o().findIndex(t.messages, e => e.id === n);
            -1 === l ? t.messages.unshift((0, E.e5)(e.message)) : t.messages[l] = (0, E.wi)(t.messages[l], e.message), I[s] = t;
        } else {
            if (null == t)
                return;
            let e = o().findIndex(t.messages, e => e.id === n);
            if (-1 === e)
                return;
            t.messages = t.messages.slice(), t.messages.splice(e, 1), I[s] = t;
        }
    },
    MESSAGE_DELETE: function (e) {
        let {
                id: n,
                channelId: s
            } = e, t = I[s];
        if (null == t || 0 === o().remove(t.messages, e => e.id === n).length)
            return !1;
        t.messages = t.messages.slice(), I[s] = t;
    },
    MESSAGE_DELETE_BULK: function (e) {
        let {
                ids: n,
                channelId: s
            } = e, t = I[s];
        if (null != t)
            t.messages = t.messages.filter(e => -1 === n.indexOf(e.id));
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let {channelId: n} = e;
        I[n] = Z(n, [], !1, !0);
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let {
            channelId: n,
            messages: s
        } = e;
        I[n] = Z(n, s, !0);
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let {channelId: n} = e;
        delete I[n];
    },
    CHANNEL_DELETE: A,
    THREAD_DELETE: A,
    RELATIONSHIP_ADD: p,
    RELATIONSHIP_REMOVE: p,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let {
                messageId: n,
                channelId: s
            } = e, t = I[s];
        if (null == t)
            return;
        let l = o().findIndex(t.messages, e => e.id === n);
        if (-1 !== l)
            t.messages = t.messages.slice(), t.messages[l] = (0, c.Cm)(t.messages[l]), I[s] = t;
    }
});
