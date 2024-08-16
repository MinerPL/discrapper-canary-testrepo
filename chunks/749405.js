n.d(t, {
    C: function () {
        return h;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(359110),
    l = n(6025),
    o = n(433355),
    c = n(26373),
    d = n(486622),
    u = n(376191),
    _ = n(689938),
    E = n(846482);
function h(e) {
    let { active: t, user: n, channel: h } = e,
        m = (0, c.K)(),
        I = a.useCallback(() => {
            (0, s.showToast)((0, s.createToast)(_.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, s.ToastType.FAILURE));
        }, []),
        g = a.useCallback(() => {
            l.Z.closeChannelSidebar(o.uZ);
        }, []),
        p = a.useCallback(() => {
            l.Z.closeChannelSidebar(o.uZ), m && (0, r.Kh)(h.id);
        }, [h.id, m]),
        {
            acceptMessageRequest: T,
            rejectMessageRequest: S,
            isAcceptLoading: f,
            isRejectLoading: C,
            isUserProfileLoading: N,
            isOptimisticAccepted: A,
            isOptimisticRejected: v
        } = (0, d.m)({
            user: n,
            onAcceptSuccess: p,
            onRejectSuccess: g,
            onError: I
        }),
        Z = f || C || N || A || v;
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsx)(u.Z, {
                channel: h,
                otherUser: n,
                active: t
            }),
            (0, i.jsxs)('div', {
                className: E.actions,
                children: [
                    (0, i.jsx)(s.Button, {
                        className: E.button,
                        color: s.ButtonColors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), S(h.id);
                        },
                        disabled: Z,
                        submitting: C || v,
                        children: _.Z.Messages.MESSAGE_REQUEST_IGNORE
                    }),
                    (0, i.jsx)(s.Button, {
                        className: E.button,
                        color: s.ButtonColors.BRAND,
                        size: s.Button.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), T(h.id);
                        },
                        disabled: Z,
                        submitting: f || N || A,
                        children: _.Z.Messages.MESSAGE_REQUEST_ACCEPT
                    })
                ]
            })
        ]
    });
}
