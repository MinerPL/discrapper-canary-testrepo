n.d(t, {
    Am: function () {
        return c;
    },
    ZP: function () {
        return d;
    },
    s$: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(430824), s = n(275759), l = n(689938);
let u = 'guild-connection-roles';
function c(e) {
    (0, a.openModalLazy)(async () => {
        let {default: t} = await n.e('40897').then(n.bind(n, 507294));
        return n => (0, r.jsx)(t, {
            ...n,
            guildId: e
        });
    }, {
        modalKey: u,
        contextKey: a.DEFAULT_MODAL_CONTEXT,
        onCloseRequest: () => {
            (0, a.closeModal)(u, a.DEFAULT_MODAL_CONTEXT);
        }
    });
}
function d(e) {
    return (0, i.e7)([o.Z], () => (0, s.kQ)(e, o.Z.getRoles(e.id)), [e]) ? (0, r.jsx)(a.MenuItem, {
        id: 'guild-connection-roles',
        label: l.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
        icon: a.LinkIcon,
        action: () => c(e.id)
    }) : null;
}
