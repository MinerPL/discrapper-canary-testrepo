n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(522474),
    r = n(981631);
function l(e) {
    let { applicationId: t, channelId: l, mediaUrl: o } = e,
        c = s.Z.getWindowOpen(r.KJ3.CHANNEL_CALL_POPOUT) ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await n.e('4530').then(n.bind(n, 899201));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channelId: l,
                    mediaUrl: o,
                    ...n
                });
        },
        {
            modalKey: 'activity-share-moment-modal',
            contextKey: c
        }
    );
}
