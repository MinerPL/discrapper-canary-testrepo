n.d(t, {
    a: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(378298),
    s = n(473092),
    o = n(237292);
function l(e) {
    let { channelId: t, warningId: l, senderId: u, warningType: c } = e;
    if (!!(0, o.mG)({ location: 'takeover-modal' }))
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('37229'), n.e('59650')]).then(n.bind(n, 955708));
                return (n) =>
                    (0, r.jsx)(e, {
                        channelId: t,
                        warningId: l,
                        senderId: u,
                        warningType: c,
                        modalProps: n
                    });
            },
            {
                backdropStyle: i.BackdropStyles.BLUR,
                onCloseCallback: () => {
                    (0, a.T)(t, [l]),
                        (0, s.qc)({
                            channelId: t,
                            senderId: u,
                            warningId: l,
                            warningType: c,
                            cta: s.NM.USER_TAKEOVER_MODAL_DISMISS,
                            isNudgeWarning: !1
                        });
                }
            }
        );
}
