n.d(t, {
    x: function () {
        return I;
    },
    z: function () {
        return E;
    }
});
var i = n(735250),
    s = n(481060),
    a = n(668781),
    r = n(100527),
    l = n(585483),
    o = n(192720),
    c = n(175006),
    u = n(981631),
    d = n(989925),
    _ = n(689938);
async function E(e) {
    let { displayToast: t = !1, ...E } = e;
    if (!(0, c.Z)()) {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, i.jsx)(e, {
                    source: r.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    if (
        null !=
        (await (0, o.XA)(E).catch((e) => {
            var t, n, i;
            return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === u.evJ.TOO_MANY_SAVED_MESSAGES
                ? (a.Z.show({
                      title: _.Z.Messages.FOR_LATER_TOO_MANY_TITLE,
                      body: _.Z.Messages.FOR_LATER_TOO_MANY_BODY.format({ max: d.D }),
                      confirmText: _.Z.Messages.OKAY,
                      cancelText: _.Z.Messages.FOR_LATER_MANAGE_MESSAGES,
                      onCancel: () => l.S.dispatch(u.CkL.TOGGLE_FOR_LATER)
                  }),
                  null)
                : ((0, s.showToast)((0, s.createToast)(null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : _.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE)), null);
        }))
    ) {
        if (t) {
            let e = null != E.dueAt ? _.Z.Messages.MESSAGE_REMINDERS_CREATE_SUCCESS : _.Z.Messages.MESSAGE_BOOKMARKS_CREATE_SUCCESS_LONG,
                t = null != E.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
            (0, s.showToast)((0, s.createToast)(e, t));
        }
    }
}
async function I(e) {
    let { displayToast: t = !1, ...a } = e;
    if (!(0, c.Z)()) {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, i.jsx)(e, {
                    source: r.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    if (
        null !=
        (await (0, o.ep)(a).catch((e) => {
            var t, n;
            return (0, s.showToast)((0, s.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : _.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE)), null;
        }))
    ) {
        if (t) {
            let e = null != a.dueAt ? _.Z.Messages.MESSAGE_REMINDERS_DELETE_SUCCESS : _.Z.Messages.MESSAGE_BOOKMARKS_DELETE_SUCCESS,
                t = null != a.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
            (0, s.showToast)((0, s.createToast)(e, t));
        }
    }
}
