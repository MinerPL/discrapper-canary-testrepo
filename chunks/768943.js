n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(759174),
    u = n(570140),
    c = n(786761),
    d = n(686478);
let _ = new l.h(
        (e) => {
            let { saveData: t } = e;
            return [d._l.ALL, null != t.dueAt ? d._l.REMINDER : d._l.BOOKMARK];
        },
        (e) => {
            var t, n, r;
            let { saveData: i } = e;
            return null !== (r = null === (n = (t = i).dueAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 10000000000000 - t.savedAt.getTime();
        }
    ),
    E = 0;
function f(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function h(e) {
    let { messageId: t, channelId: n } = e,
        r = f({
            messageId: t,
            channelId: n
        }),
        i = _.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    return (a.message = null), _.set(r, a), !0;
}
class p extends (r = o.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return _.values(d._l.ALL);
    }
    getSavedMessage(e, t) {
        return _.get(
            f({
                channelId: e,
                messageId: t
            })
        );
    }
    getMessageBookmarks() {
        return _.values(d._l.BOOKMARK);
    }
    getMessageReminders() {
        return _.values(d._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return this.getMessageReminders().filter((e) => {
            let { saveData: t } = e;
            return null == t.dueAt || new Date() > t.dueAt;
        }).length;
    }
    getSavedMessageCount() {
        return _.size();
    }
    getLastFetched() {
        return E;
    }
    isMessageBookmarked(e, t) {
        let n = _.get(
            f({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = _.get(
            f({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null != n.saveData.dueAt;
    }
    hasOverdueReminder(e) {
        return this.getMessageReminders().some((t) => {
            let { saveData: n } = t;
            return null == n.dueAt || e > n.dueAt;
        });
    }
    getState() {
        return { savedMessages: _ };
    }
}
(s = 'SavedMessagesStore'),
    (a = 'displayName') in (i = p)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new p(u.Z, {
        SAVED_MESSAGES_UPDATE: function (e) {
            let { savedMessages: t } = e;
            for (let e of ((E = new Date().getTime()), _.clear(), t)) _.set(f(e.saveData), e);
        },
        SAVED_MESSAGE_CREATE: function (e) {
            let { savedMessage: t } = e;
            _.set(f(t.saveData), t);
        },
        SAVED_MESSAGE_DELETE: function (e) {
            let { savedMessageData: t } = e;
            _.delete(f(t));
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e;
            return h({
                messageId: t,
                channelId: n
            });
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e;
            for (let e of t)
                h({
                    messageId: e,
                    channelId: n
                });
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            if (null == t.id || null == t.channel_id) return !1;
            let n = f({
                    messageId: t.id,
                    channelId: t.channel_id
                }),
                r = _.get(n);
            if ((null == r ? void 0 : r.message) == null) return !1;
            let i = { ...r };
            (i.message = (0, c.wi)(r.message, t)), _.set(n, i);
        }
    }));
