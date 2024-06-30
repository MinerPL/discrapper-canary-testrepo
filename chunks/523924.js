var i = n(735250);
n(470079);
var s = n(481060), a = n(346656), r = n(689938), l = n(640380), o = n(364632);
t.Z = e => {
    let {
        headerId: t,
        reapplyText: n,
        onReapply: c,
        confirmText: d,
        onWithdrawApplication: u,
        rejectionReason: _ = null,
        guild: E = null
    } = e;
    return (0, i.jsxs)('div', {
        className: l.confirmation,
        children: [
            (0, i.jsxs)('div', {
                className: l.confirmationContent,
                children: [
                    null !== E ? (0, i.jsx)(a.Z, {
                        size: a.Z.Sizes.LARGER,
                        guild: E,
                        className: l.guildIcon
                    }) : (0, i.jsx)('img', {
                        alt: r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
                        src: o,
                        className: l.__invalid_verificationStateIcon
                    }),
                    (0, i.jsx)(s.Heading, {
                        id: t,
                        variant: 'heading-xl/semibold',
                        className: l.header,
                        children: (null == E ? void 0 : E.name) != null ? r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({ guildName: E.name }) : r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
                    }),
                    null != _ && '' !== _ ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(s.Text, {
                            variant: 'text-sm/normal',
                            children: [
                                (0, i.jsx)('span', {
                                    className: l.rejectionReasonLabel,
                                    children: r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
                                }),
                                (0, i.jsx)('span', {
                                    className: l.rejectionReason,
                                    children: _
                                })
                            ]
                        })
                    }) : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: l.confirmationButtonRow,
                children: [
                    (0, i.jsx)(s.Button, {
                        onClick: c,
                        color: s.Button.Colors.PRIMARY,
                        className: l.confirmationButton,
                        children: n
                    }),
                    (0, i.jsx)(s.Button, {
                        onClick: u,
                        color: s.Button.Colors.RED,
                        className: l.confirmationButton,
                        children: d
                    })
                ]
            })
        ]
    });
};
