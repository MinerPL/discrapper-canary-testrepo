var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(786761),
    c = n(592125),
    d = n(594174),
    _ = n(823379),
    E = n(709054);
let f = {};
function h(e) {
    var t;
    let n = c.Z.getChannel(null == e ? void 0 : e.channel_id);
    if (null == n || !n.isForumPost()) return !1;
    let r = f[n.id];
    return E.default.compare(null == e ? void 0 : e.id, null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.id) > -1;
}
function p(e, t) {
    let n = null == t ? null : (0, u.e5)(t);
    return (
        (f[e] = {
            loaded: !0,
            message: n
        }),
        !0
    );
}
function m(e) {
    return f[e];
}
function I(e) {
    var t;
    return null === (t = f[e]) || void 0 === t ? void 0 : t.message;
}
function T(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => p(e.id, null)),
        null == n ||
            n.filter(_.lm).forEach((e) => {
                p(e.channel_id, e);
            });
}
class g extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.default);
    }
    getMessageState(e) {
        return (
            !(e in f) &&
                (f[e] = {
                    loaded: !1,
                    message: null
                }),
            f[e]
        );
    }
}
(a = 'ForumPostRecentMessageStore'),
    (i = 'displayName') in (r = g)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    new g(l.Z, {
        CONNECTION_OPEN: function () {
            f = {};
        },
        MESSAGE_CREATE: function (e) {
            if (e.isPushNotification || !h(e.message)) return !1;
            e.message.channel_id === E.default.castMessageIdAsChannelId(e.message.id) ? p(e.message.channel_id, null) : p(e.message.channel_id, e.message);
        },
        MESSAGE_UPDATE: function (e) {
            if (!h(e.message) || e.message.channel_id === e.message.id) return !1;
            !(function (e, t) {
                let n = (function (e) {
                        return f[e];
                    })(e),
                    r = I(e);
                null != n &&
                    null != r &&
                    (f[e] = {
                        ...n,
                        message: (0, u.wi)(r, t)
                    });
            })(e.message.channel_id, e.message);
        },
        MESSAGE_DELETE: function (e) {
            return (function (e, t) {
                let n = I(e);
                return (null == n ? void 0 : n.id) === t && (delete f[e], !0);
            })(e.channelId, e.id);
        },
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            for (let e in t) p(e, t[e].most_recent_message);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: T,
        LOAD_THREADS_SUCCESS: T
    });
