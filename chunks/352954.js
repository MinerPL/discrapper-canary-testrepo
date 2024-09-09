t(411104);
var r = t(735250);
t(470079);
var i = t(481060),
    E = t(981631),
    u = t(689938);
n.Z = {
    openSecureFramesStreamVerification: function (e, n) {
        (0, i.openModalLazy)(async () => {
            let i = (await t.e('94904').then(t.bind(t, 660250))).default;
            return (t) =>
                (0, r.jsx)(i, {
                    streamKey: e,
                    channelId: n,
                    ...t
                });
        });
    },
    openSecureFramesUserVerificationModal: function (e, n, u, a) {
        u() &&
            (0, i.openModalLazy)(
                async () => {
                    let i = (await t.e('33397').then(t.bind(t, 963410))).default;
                    return (t) =>
                        (0, r.jsx)(i, {
                            userId: e,
                            channelId: n,
                            ...t
                        });
                },
                { contextKey: a === E.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT }
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: n, subtitle: E, confirmText: a = u.Z.Messages.CONFIRM, onConfirm: o } = e;
        (0, i.openModalLazy)(async () => {
            let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
            return (t) =>
                (0, r.jsx)(e, {
                    header: n,
                    confirmText: a,
                    cancelText: u.Z.Messages.CANCEL,
                    onConfirm: o,
                    ...t,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: E
                    })
                });
        });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error('handleSecureFramesUserVerificationLink not implemented');
    }
};
