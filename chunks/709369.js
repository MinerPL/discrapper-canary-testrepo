n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(40851),
    o = n(776031),
    l = n(199902),
    u = n(358085),
    c = n(134598),
    d = n(981631),
    _ = n(689938);
function E(e) {
    let { onClose: t } = e,
        n = (0, s.bp)(),
        E = (0, i.e7)([l.Z], () => l.Z.getCurrentUserActiveStream()),
        f = (0, o.Z)(E, n);
    return (0, r.jsxs)(a.Menu, {
        onSelect: d.VqG,
        navId: 'manage-broadcast',
        onClose: t,
        'aria-label': _.Z.Messages.SETTINGS,
        children: [
            u.isPlatformEmbedded && null != E
                ? (0, r.jsx)(a.MenuItem, {
                      id: 'stream-settings',
                      label: _.Z.Messages.SCREENSHARE_STREAM_QUALITY,
                      children: f
                  })
                : null,
            (0, r.jsx)(a.MenuItem, {
                id: 'broadcast-settings',
                label: _.Z.Messages.BROADCAST_SETTINGS,
                icon: a.SettingsIcon,
                action: () => (0, c.X)()
            })
        ]
    });
}
