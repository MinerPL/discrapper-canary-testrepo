t(411104);
var i = t(735250);
t(470079);
var r = t(481060), u = t(689938);
n.Z = {
    openSecureFramesUserVerificationModal: function (e, n) {
        (0, r.openModalLazy)(async () => {
            let r = (await t.e('33397').then(t.bind(t, 963410))).default;
            return t => (0, i.jsx)(r, {
                userId: e,
                channelId: n,
                ...t
            });
        });
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let {
            title: n,
            subtitle: l,
            onConfirm: a
        } = e;
        (0, r.openModalLazy)(async () => {
            let {ConfirmModal: e} = await Promise.resolve().then(t.bind(t, 481060));
            return t => (0, i.jsx)(e, {
                header: n,
                confirmText: u.Z.Messages.CONFIRM,
                cancelText: u.Z.Messages.CANCEL,
                onConfirm: a,
                ...t,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: l
                })
            });
        });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error('handleSecureFramesUserVerificationLink not implemented');
    }
};
