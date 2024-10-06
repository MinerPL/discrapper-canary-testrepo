n.d(t, {
    XA: function () {
        return u;
    },
    ep: function () {
        return c;
    },
    sE: function () {
        return d;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(786761),
    s = n(768943),
    o = n(686478),
    l = n(981631);
async function u(e) {
    let t = await r.tn.put({
        url: l.ANM.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt }
    });
    if (t.ok) return (0, o.jk)(t.body);
}
async function c(e) {
    if ((await r.tn.del({ url: l.ANM.DELETE_SAVED_MESSAGE(e.channelId, e.messageId) })).ok) return !0;
}
async function d() {
    if (!s.Z.getIsStale()) return Promise.resolve();
    let e = (await r.tn.get({ url: l.ANM.GET_SAVED_MESSAGES })).body.results.map((e) => ({
        message: null != e.message ? (0, a.e5)(e.message) : null,
        saveData: (0, o.vL)(e.save_data)
    }));
    i.Z.dispatch({
        type: 'SAVED_MESSAGES_UPDATE',
        savedMessages: e
    });
}
