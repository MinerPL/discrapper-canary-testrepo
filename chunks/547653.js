n.r(t), n(47120);
var l = n(735250),
    i = n(470079),
    r = n(481060),
    a = n(668781),
    u = n(787014),
    o = n(689938);
t.default = function (e) {
    let { channelId: t, application: n, onClose: s, ...d } = e,
        [N, _] = i.useState(!1),
        E = async () => {
            try {
                _(!0), await u.ZP.removeLinkedLobby(t), s();
            } catch (e) {
                _(!1),
                    a.Z.show({
                        title: o.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ERROR_TITLE,
                        body: o.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ERROR
                    });
            }
        };
    return (0, l.jsx)(r.ConfirmModal, {
        header: o.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ALERT_TITLE,
        confirmText: o.Z.Messages.CONFIRM,
        cancelText: o.Z.Messages.CANCEL,
        confirmButtonColor: r.Button.Colors.BRAND,
        onConfirm: E,
        loading: N,
        onClose: s,
        ...d,
        children: (0, l.jsx)(r.Text, {
            variant: 'text-sm/normal',
            children: o.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ALERT_BODY.format({ applicationName: n.name })
        })
    });
};
