n.d(t, {
    Z: function () {
        return C;
    }
}), n(47120);
var s = n(735250), o = n(470079), r = n(481060), a = n(442837), i = n(194359), c = n(782568), E = n(726521), N = n(485664), u = n(699516), I = n(473092), T = n(941362), l = n(850165), _ = n(134612), A = n(981631), d = n(689938), R = n(897583), O = n(149355);
function C(e) {
    let {
            senderId: t,
            channelId: n,
            hasReported: C,
            onReport: S,
            trackAnalyticsEvent: P
        } = e, h = (0, a.e7)([u.Z], () => u.Z.isBlocked(t)), [f, M] = o.useState(h), p = (0, N.o)(), [g, b] = o.useState(!1), x = (0, T.q)(n), m = () => {
            M(!0), i.Z.addRelationship({
                userId: t,
                context: { location: _.DL },
                type: A.OGo.BLOCKED
            }), P(I.NM.USER_TAKEOVER_MODAL_BLOCK);
        }, L = () => {
            M(!1), i.Z.unblockUser(t, { location: _.DL }), P(I.NM.USER_TAKEOVER_MODAL_UNBLOCK);
        }, Z = async () => {
            if (null != x)
                b(!0), await (0, E.J7)(x, () => {
                    (0, r.showToast)((0, r.createToast)(d.Z.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, r.ToastType.SUCCESS)), S();
                }, () => {
                    (0, r.showToast)((0, r.createToast)(d.Z.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, r.ToastType.FAILURE));
                }), b(!1), P(I.NM.USER_TAKEOVER_MODAL_REPORT);
        };
    return (0, s.jsx)(l.Z, {
        heroImageSrc: O,
        heroImageAlt: d.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
        header: d.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER,
        description: d.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION,
        children: (0, s.jsxs)('div', {
            className: R.buttonContainer,
            children: [
                (0, s.jsxs)(r.Button, {
                    color: r.Button.Colors.BRAND,
                    size: r.Button.Sizes.LARGE,
                    className: R.button,
                    innerClassName: R.buttonInner,
                    onClick: () => {
                        f ? L() : m();
                    },
                    children: [
                        (0, s.jsx)(r.CircleXIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: r.tokens.colors.WHITE,
                            className: R.buttonIcon
                        }),
                        f ? d.Z.Messages.UNBLOCK : d.Z.Messages.BLOCK
                    ]
                }),
                (0, s.jsxs)(r.Button, {
                    color: r.Button.Colors.PRIMARY,
                    size: r.Button.Sizes.LARGE,
                    className: R.button,
                    innerClassName: R.buttonInner,
                    onClick: Z,
                    submitting: g,
                    disabled: C,
                    children: [
                        (0, s.jsx)(r.FlagIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: r.tokens.colors.WHITE,
                            className: R.buttonIcon
                        }),
                        C ? d.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : d.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT
                    ]
                }),
                (0, s.jsxs)(r.Button, {
                    color: r.Button.Colors.PRIMARY,
                    size: r.Button.Sizes.LARGE,
                    className: R.button,
                    innerClassName: R.buttonInner,
                    onClick: () => {
                        p ? ((0, c.Z)(_.EI), P(I.NM.USER_TAKEOVER_MODAL_CTL)) : ((0, c.Z)(_.n4), P(I.NM.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                    children: [
                        (0, s.jsx)(r.ChatIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: r.tokens.colors.WHITE,
                            className: R.buttonIcon
                        }),
                        p ? d.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : d.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE
                    ]
                })
            ]
        })
    });
}
