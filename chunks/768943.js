n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(759174),
    u = n(570140),
    c = n(786761),
    d = n(594174),
    _ = n(686478);
let E = new l.h(
        (e) => {
            let { saveData: t } = e;
            return [_._l.ALL, null != t.dueAt ? _._l.REMINDER : _._l.BOOKMARK];
        },
        (e) => {
            var t, n, r;
            let { saveData: i } = e;
            return null !== (r = null === (n = (t = i).dueAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 10000000000000 - t.savedAt.getTime();
        }
    ),
    f = !0,
    h = 0,
    p = new Set(),
    I = new Set(),
    m = new Map();
function T(e) {
    let t = m.get(e);
    return null != t && t.size > 0;
}
function S(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function g(e) {
    var t;
    let n = S(e.saveData);
    null == E.get(n) && (h = Date.now()), E.set(n, e);
    let r = e.saveData.messageId,
        i = e.saveData.channelId,
        a = null !== (t = m.get(i)) && void 0 !== t ? t : new Set();
    a.add(r), m.set(i, a), null == e.message && I.add(r), null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? p.add(r) : p.delete(r);
}
function A(e) {
    let { messageId: t, channelId: n } = e,
        r = S({
            messageId: t,
            channelId: n
        }),
        i = E.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    return (a.message = null), E.set(r, a), !0;
}
function N() {
    if (0 === I.size || f) return !1;
    f = !0;
}
class O extends (r = o.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return E.values(_._l.ALL);
    }
    getSavedMessage(e, t) {
        return E.get(
            S({
                channelId: e,
                messageId: t
            })
        );
    }
    getMessageBookmarks() {
        return E.values(_._l.BOOKMARK);
    }
    getMessageReminders() {
        return E.values(_._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return p.size;
    }
    hasOverdueReminder() {
        return p.size > 0;
    }
    getSavedMessageCount() {
        return E.size();
    }
    getIsStale() {
        return f;
    }
    getLastChanged() {
        return h;
    }
    isMessageBookmarked(e, t) {
        let n = E.get(
            S({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = E.get(
            S({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null != n.saveData.dueAt;
    }
}
(s = 'SavedMessagesStore'),
    (a = 'displayName') in (i = O)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new O(u.Z, {
        POST_CONNECTION_OPEN: function () {
            f = !0;
        },
        LOGOUT: function () {
            (f = !0), E.clear(), m.clear(), I.clear();
        },
        SAVED_MESSAGES_UPDATE: function (e) {
            let { savedMessages: t } = e;
            for (let e of ((f = !1), E.clear(), m.clear(), I.clear(), t)) g(e);
        },
        SAVED_MESSAGE_CREATE: function (e) {
            let { savedMessage: t } = e;
            g(t);
        },
        SAVED_MESSAGE_DELETE: function (e) {
            let { savedMessageData: t } = e;
            return (function (e) {
                var t;
                let n = S(e),
                    r = E.get(n);
                if (null == r) return !1;
                E.delete(n);
                let i = e.messageId;
                null === (t = m.get(r.saveData.channelId)) || void 0 === t || t.delete(i), I.delete(i), p.delete(i), (h = Date.now());
            })(t);
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e;
            return A({
                messageId: t,
                channelId: n
            });
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e;
            for (let e of t)
                A({
                    messageId: e,
                    channelId: n
                });
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            if (null == t.id || null == t.channel_id) return !1;
            let n = S({
                    messageId: t.id,
                    channelId: t.channel_id
                }),
                r = E.get(n);
            if ((null == r ? void 0 : r.message) == null) return !1;
            let i = { ...r };
            (i.message = (0, c.wi)(r.message, t)), E.set(n, i);
        },
        GUILD_CREATE: N,
        GUILD_UPDATE: N,
        GUILD_DELETE: N,
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (0 === I.size || f || !T(t.id)) return !1;
            f = !0;
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (0 === I.size || f) return !1;
            let n = !1;
            for (let e of t) {
                if (!!T(e.id)) (f = !0), (n = !0);
            }
            return n;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if (0 === I.size || f || !T(t.id)) return !1;
            f = !0;
        },
        GUILD_MEMBER_UPDATE: function (e) {
            var t;
            let { user: n } = e;
            if (0 === I.size || f || n.id !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            f = !0;
        },
        GUILD_ROLE_CREATE: N,
        GUILD_ROLE_UPDATE: N,
        GUILD_ROLE_DELETE: N,
        MESSAGE_REMINDER_DUE: function (e) {
            let { savedMessage: t } = e;
            p.add(t.saveData.messageId);
        }
    }));
