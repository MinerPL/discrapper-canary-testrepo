n.d(t, {
    C: function () {
        return h;
    }
});
var i = n(735250), s = n(470079), a = n(481060), r = n(359110), l = n(6025), o = n(433355), c = n(26373), d = n(486622), u = n(376191), _ = n(689938), E = n(177133);
function h(e) {
    let {
            active: t,
            user: n,
            channel: h
        } = e, I = (0, c.K)(), m = s.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(_.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, a.ToastType.FAILURE));
        }, []), p = s.useCallback(() => {
            l.Z.closeChannelSidebar(o.uZ);
        }, []), g = s.useCallback(() => {
            l.Z.closeChannelSidebar(o.uZ), I && (0, r.Kh)(h.id);
        }, [
            h.id,
            I
        ]), {
            acceptMessageRequest: T,
            rejectMessageRequest: S,
            isAcceptLoading: C,
            isRejectLoading: N,
            isUserProfileLoading: f,
            isOptimisticAccepted: A,
            isOptimisticRejected: Z
        } = (0, d.m)({
            user: n,
            onAcceptSuccess: g,
            onRejectSuccess: p,
            onError: m
        }), L = C || N || f || A || Z;
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
                    (0, i.jsx)(a.Button, {
                        className: E.button,
                        color: a.ButtonColors.PRIMARY,
                        size: a.Button.Sizes.SMALL,
                        onClick: e => {
                            e.stopPropagation(), S(h.id);
                        },
                        disabled: L,
                        submitting: N || Z,
                        children: _.Z.Messages.MESSAGE_REQUEST_IGNORE
                    }),
                    (0, i.jsx)(a.Button, {
                        className: E.button,
                        color: a.ButtonColors.BRAND,
                        size: a.Button.Sizes.SMALL,
                        onClick: e => {
                            e.stopPropagation(), T(h.id);
                        },
                        disabled: L,
                        submitting: C || f || A,
                        children: _.Z.Messages.MESSAGE_REQUEST_ACCEPT
                    })
                ]
            })
        ]
    });
}
