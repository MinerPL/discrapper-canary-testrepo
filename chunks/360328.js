n.d(t, {
    s: function () {
        return c;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(481060),
    l = n(693546),
    r = n(246364),
    o = n(689938);
function c(e, t, c) {
    let [u, d] = s.useState(!1),
        h = () => {
            (0, a.showToast)((0, a.createToast)(o.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE));
        },
        m = async () => {
            if (!u && null != e && null != t && null != c) {
                d(!0);
                try {
                    await l.Z.updateGuildJoinRequest(e, t, c, r.wB.APPROVED);
                } catch {
                    h();
                } finally {
                    d(!1);
                }
            }
        };
    return {
        approveRequest: m,
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != c &&
                (0, a.openModalLazy)(async () => {
                    let { default: s } = await n.e('56496').then(n.bind(n, 113886));
                    return (n) =>
                        (0, i.jsx)(s, {
                            modalProps: n,
                            guildId: e,
                            userId: t,
                            guildJoinRequestId: c,
                            onError: h
                        });
                });
        },
        submitting: u
    };
}
