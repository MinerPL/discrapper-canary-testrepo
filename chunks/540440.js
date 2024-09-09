n.d(t, {
    B: function () {
        return _;
    },
    y: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(278074),
    a = n(442837),
    s = n(481060),
    o = n(26033),
    l = n(594174),
    u = n(324745),
    c = n(689938);
function d(e) {
    return (0, i.EQ)(e)
        .when(o.dX, () => c.Z.Messages.USER_ACTIVITY_CLEAR_GAME_HISTORY)
        .when(o.y0, () => c.Z.Messages.USER_ACTIVITY_CLEAR_WATCH_HISTORY)
        .when(o.dU, () => c.Z.Messages.USER_ACTIVITY_CLEAR_LISTENING_HISTORY)
        .otherwise(() => null);
}
function _(e) {
    let { user: t, entry: i, display: o, onAction: c, onClose: _ } = e,
        E = (0, u.Z)({ onClose: _ }),
        f = (0, a.e7)([l.default], () => l.default.getCurrentUser());
    if (t.id !== (null == f ? void 0 : f.id) || 'live' === o || null == i) return null;
    let h = () => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('26545').then(n.bind(n, 81596));
            return (n) =>
                (0, r.jsx)(e, {
                    entry: i,
                    user: t,
                    onAction: c,
                    onOpenGameSettings: E,
                    ...n
                });
        }),
            null == _ || _();
    };
    return (0, r.jsx)(s.MenuItem, {
        id: 'delete-entry-history',
        label: d(i),
        action: () => {
            null == c || c({ action: 'PRESS_DELETE_HISTORY_MENU_ITEM' }), h();
        },
        color: 'danger'
    });
}
