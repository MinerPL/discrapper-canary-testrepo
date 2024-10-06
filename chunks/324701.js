n.d(t, {
    x: function () {
        return m;
    },
    z: function () {
        return I;
    }
});
var i = n(735250),
    a = n(481060),
    s = n(668781),
    l = n(100527),
    r = n(585483),
    o = n(192720),
    c = n(768943),
    d = n(175006),
    u = n(981631),
    _ = n(989925),
    E = n(689938);
async function I(e) {
    let { displayToast: t = !1, ...I } = e;
    if (null == c.Z.getSavedMessage(I.channelId, I.messageId) && !(0, d.Z)()) {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, i.jsx)(e, {
                    source: l.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    if (
        null !=
        (await (0, o.XA)(I).catch((e) => {
            var t, n, i;
            return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === u.evJ.TOO_MANY_SAVED_MESSAGES
                ? (s.Z.show({
                      title: E.Z.Messages.FOR_LATER_TOO_MANY_TITLE,
                      body: E.Z.Messages.FOR_LATER_TOO_MANY_BODY.format({ max: _.D }),
                      cancelText: E.Z.Messages.OKAY,
                      confirmText: E.Z.Messages.FOR_LATER_MANAGE_MESSAGES,
                      onConfirm: () => r.S.dispatch(u.CkL.TOGGLE_FOR_LATER)
                  }),
                  null)
                : ((0, a.showToast)((0, a.createToast)(null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : E.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE)), null);
        }))
    ) {
        if (t) {
            let e = null != I.dueAt ? E.Z.Messages.MESSAGE_REMINDERS_CREATE_SUCCESS : E.Z.Messages.MESSAGE_BOOKMARKS_CREATE_SUCCESS_LONG,
                t = null != I.dueAt ? a.ToastType.CLOCK : a.ToastType.BOOKMARK;
            (0, a.showToast)((0, a.createToast)(e, t));
        }
    }
}
async function m(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
        (await (0, o.ep)(n).catch((e) => {
            var t, n;
            return (0, a.showToast)((0, a.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : E.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE)), null;
        }))
    ) {
        if (t) {
            let e = null != n.dueAt ? E.Z.Messages.MESSAGE_REMINDERS_DELETE_SUCCESS : E.Z.Messages.MESSAGE_BOOKMARKS_DELETE_SUCCESS,
                t = null != n.dueAt ? a.ToastType.CLOCK : a.ToastType.BOOKMARK;
            (0, a.showToast)((0, a.createToast)(e, t));
        }
    }
}
