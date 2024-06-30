n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250), s = n(470079), a = n(286379), r = n(481060), l = n(797614), o = n(359110), c = n(6025), d = n(433355), u = n(26373), _ = n(486622), E = n(376191), h = n(86203), I = n(689938), m = n(228255);
function p(e) {
    let {
            active: t,
            user: n,
            channel: p
        } = e, g = (0, u.V)(), T = s.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(I.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, r.ToastType.FAILURE)), l.Z.increment({ name: a.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []), S = s.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ);
        }, []), C = s.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ), g && (0, o.Kh)(p.id);
        }, [
            p.id,
            g
        ]), {
            acceptMessageRequest: N,
            isAcceptLoading: f,
            isUserProfileLoading: A,
            isOptimisticAccepted: Z
        } = (0, _.m)({
            user: n,
            onAcceptSuccess: C,
            onRejectSuccess: S,
            onError: T
        }), L = f || A, v = L || Z;
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)(E.Z, {
                otherUser: n,
                channel: p,
                active: t
            }),
            (0, i.jsxs)('div', {
                className: m.actions,
                children: [
                    (0, i.jsx)(r.Button, {
                        className: m.button,
                        color: r.ButtonColors.PRIMARY,
                        size: r.Button.Sizes.SMALL,
                        onClick: e => {
                            N(p.id), e.stopPropagation();
                        },
                        disabled: v,
                        submitting: L,
                        children: I.Z.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
                    }),
                    (0, i.jsx)(h.Z, {
                        className: m.button,
                        channel: p,
                        buttonSize: r.Button.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
