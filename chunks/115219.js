var i, a, s, l, r = n(873011), o = n(442837), c = n(570140);
let d = [], u = 0;
class _ extends (l = o.ZP.Store) {
    initialize() {
    }
    getMessageBookmarks() {
        return d;
    }
    getLastFetched() {
        return u;
    }
    isMessageBookmarked(e) {
        return null != d.find(t => t.messageId === e);
    }
    getState() {
        return { messages: d };
    }
}
s = 'MessageBookmarksStore', (a = 'displayName') in (i = _) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new _(c.Z, {
    SAVED_MESSAGES_UPDATE: function (e) {
        let {messages: t} = e;
        u = new Date().getTime(), d = t.filter(e => e.type === r.J.BOOKMARK);
    }
});
