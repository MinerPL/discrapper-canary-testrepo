n.d(t, {
    XA: function () {
        return c;
    },
    ep: function () {
        return d;
    },
    sE: function () {
        return _;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(786761),
    s = n(70956),
    o = n(768943),
    l = n(686478),
    u = n(981631);
async function c(e) {
    let t = await r.tn.put({
        url: u.ANM.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt }
    });
    if (t.ok) return (0, l.jk)(t.body);
}
async function d(e) {
    if ((await r.tn.del({ url: u.ANM.DELETE_SAVED_MESSAGE(e.channelId, e.messageId) })).ok) return !0;
}
async function _() {
    if (new Date().getTime() - o.Z.getLastFetched() < 1 * s.Z.Millis.MINUTE) return Promise.resolve();
    let e = (await r.tn.get({ url: u.ANM.GET_SAVED_MESSAGES })).body.results.map((e) => ({
        message: null != e.message ? (0, a.e5)(e.message) : null,
        saveData: (0, l.vL)(e.save_data)
    }));
    i.Z.dispatch({
        type: 'SAVED_MESSAGES_UPDATE',
        savedMessages: e
    });
}
