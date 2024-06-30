n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var s = n(481060), a = n(522474), r = n(981631);
function l(e) {
    let {
            applicationId: t,
            channelId: l,
            mediaUrl: o
        } = e, c = a.Z.getWindowOpen(r.KJ3.CHANNEL_CALL_POPOUT) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
    (0, s.openModalLazy)(async () => {
        let {default: e} = await n.e('4530').then(n.bind(n, 899201));
        return n => (0, i.jsx)(e, {
            applicationId: t,
            channelId: l,
            mediaUrl: o,
            ...n
        });
    }, {
        modalKey: 'activity-share-moment-modal',
        contextKey: c
    });
}
