t(733860);
var i,
    s,
    l,
    a,
    r = t(392711),
    o = t.n(r),
    u = t(442837),
    d = t(570140),
    c = t(163268),
    E = t(786761),
    f = t(706454),
    g = t(592125),
    m = t(271383),
    M = t(430824),
    _ = t(375954),
    h = t(699516),
    N = t(594174);
let I = {};
function Z(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = g.Z.getChannel(e),
        l = null != s ? s.getGuildId() : null;
    return {
        id: e,
        messages: n.map((e) => (0, E.e5)(e)),
        guildId: l,
        loaded: t,
        loading: i
    };
}
function A(e) {
    let { channel: n } = e;
    delete I[n.id];
}
function p() {
    o().forEach(I, (e) => {
        e.messages = e.messages.map((e) => e.set('blocked', h.Z.isBlockedForMessage(e)));
    });
}
class S extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, M.Z, m.ZP, _.Z, N.default, f.default);
    }
    getPinnedMessages(e) {
        var n;
        return null !== (n = I[e]) && void 0 !== n ? n : void 0;
    }
    loaded(e) {
        return null != I[e] && I[e].loaded;
    }
}
(a = 'ChannelPinsStore'),
    (l = 'displayName') in (s = S)
        ? Object.defineProperty(s, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[l] = a),
    (n.Z = new S(d.Z, {
        CONNECTION_OPEN: function () {
            I = {};
        },
        GUILD_DELETE: function (e) {
            let { guild: n } = e;
            I = o()(I)
                .filter((e) => e.guildId !== n.id)
                .keyBy('id')
                .value();
        },
        MESSAGE_UPDATE: function (e) {
            let n = e.message.id,
                t = e.message.channel_id;
            if (null == t) return !1;
            let i = I[t];
            if (null == i && !e.message.pinned) return !1;
            if (null == e.message.author) {
                if (null != i) {
                    let s = o().findIndex(i.messages, (e) => e.id === n);
                    if (s >= 0) {
                        let n = i.messages[s],
                            l = (0, E.wi)(n, e.message);
                        if (l !== n) {
                            let e = i.messages.slice();
                            (e[s] = l), (I[t].messages = e);
                        }
                    }
                }
                return;
            }
            if (e.message.pinned) {
                if (null == i) {
                    (i = Z(t, [e.message], !1)), (I[t] = i);
                    return;
                }
                i.messages = i.messages.slice();
                let s = o().findIndex(i.messages, (e) => e.id === n);
                -1 === s ? i.messages.unshift((0, E.e5)(e.message)) : (i.messages[s] = (0, E.wi)(i.messages[s], e.message)), (I[t] = i);
            } else {
                if (null == i) return;
                let e = o().findIndex(i.messages, (e) => e.id === n);
                if (-1 === e) return;
                (i.messages = i.messages.slice()), i.messages.splice(e, 1), (I[t] = i);
            }
        },
        MESSAGE_DELETE: function (e) {
            let { id: n, channelId: t } = e,
                i = I[t];
            if (null == i || 0 === o().remove(i.messages, (e) => e.id === n).length) return !1;
            (i.messages = i.messages.slice()), (I[t] = i);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: n, channelId: t } = e,
                i = I[t];
            if (null != i) i.messages = i.messages.filter((e) => -1 === n.indexOf(e.id));
        },
        LOAD_PINNED_MESSAGES: function (e) {
            let { channelId: n } = e;
            I[n] = Z(n, [], !1, !0);
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { channelId: n, messages: t } = e;
            I[n] = Z(n, t, !0);
        },
        LOAD_PINNED_MESSAGES_FAILURE: function (e) {
            let { channelId: n } = e;
            delete I[n];
        },
        CHANNEL_DELETE: A,
        THREAD_DELETE: A,
        RELATIONSHIP_ADD: p,
        RELATIONSHIP_REMOVE: p,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: n, channelId: t } = e,
                i = I[t];
            if (null == i) return;
            let s = o().findIndex(i.messages, (e) => e.id === n);
            if (-1 !== s) (i.messages = i.messages.slice()), (i.messages[s] = (0, c.Cm)(i.messages[s])), (I[t] = i);
        }
    }));
