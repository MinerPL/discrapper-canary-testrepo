n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(286379),
    r = n(481060),
    l = n(797614),
    o = n(359110),
    c = n(6025),
    d = n(433355),
    u = n(26373),
    _ = n(486622),
    E = n(376191),
    h = n(86203),
    m = n(689938),
    I = n(747689);
function g(e) {
    let { active: t, user: n, channel: g } = e,
        p = (0, u.V)(),
        T = a.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(m.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, r.ToastType.FAILURE)), l.Z.increment({ name: s.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        S = a.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ);
        }, []),
        f = a.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ), p && (0, o.Kh)(g.id);
        }, [g.id, p]),
        {
            acceptMessageRequest: C,
            isAcceptLoading: N,
            isUserProfileLoading: A,
            isOptimisticAccepted: v
        } = (0, _.m)({
            user: n,
            onAcceptSuccess: f,
            onRejectSuccess: S,
            onError: T
        }),
        Z = N || A,
        L = Z || v;
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [
            (0, i.jsx)(E.Z, {
                otherUser: n,
                channel: g,
                active: t
            }),
            (0, i.jsxs)('div', {
                className: I.actions,
                children: [
                    (0, i.jsx)(r.Button, {
                        className: I.button,
                        color: r.ButtonColors.PRIMARY,
                        size: r.Button.Sizes.SMALL,
                        onClick: (e) => {
                            C(g.id), e.stopPropagation();
                        },
                        disabled: L,
                        submitting: Z,
                        children: m.Z.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
                    }),
                    (0, i.jsx)(h.Z, {
                        className: I.button,
                        channel: g,
                        buttonSize: r.Button.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
