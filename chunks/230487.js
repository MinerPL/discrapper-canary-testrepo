n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(740492),
    r = n(626135),
    l = n(358085),
    o = n(998502),
    c = n(258220),
    d = n(981631);
let u = 'activity-hardware-acceleration-modal';
function _(e) {
    !s.ZP.disableActivityHardwareAccelerationPrompt &&
        l.isPlatformEmbedded &&
        !o.ZP.getEnableHardwareAcceleration() &&
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 258220));
                return (n) =>
                    (0, i.jsx)(t, {
                        applicationId: e,
                        ...n
                    });
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    r.default.track(d.rMx.MODAL_DISMISSED, { type: c.ACTIVITY_ENCOURAGES_HW_ACCELERATION }), (0, a.closeModal)(u);
                }
            }
        );
}
