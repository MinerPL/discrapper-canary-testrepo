var n = a(735250);
a(470079);
var t = a(120356), l = a.n(t), i = a(481060), r = a(888592), o = a(689938), c = a(782664);
s.Z = e => {
    let {
        school: s,
        setStep: a
    } = e;
    return (0, n.jsxs)('div', {
        className: c.container,
        children: [
            (0, n.jsx)('div', { className: c.topImage }),
            (0, n.jsx)(i.Heading, {
                className: l()(c.centerText, c.header),
                variant: 'heading-xl/semibold',
                children: o.Z.Messages.HUB_WAITLIST_MODAL_JOINED_HEADER
            }),
            (0, n.jsx)('div', {
                className: c.descriptionWidth,
                children: (0, n.jsx)(i.Text, {
                    className: c.centerText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: o.Z.Messages.HUB_WAITLIST_MODAL_JOINED_DESCRIPTION.format({ school: s })
                })
            }),
            (0, n.jsx)(i.Button, {
                look: i.Button.Looks.LINK,
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.LINK,
                onClick: () => {
                    a(r.tF.VERIFY_EMAIL);
                },
                className: c.__invalid_resendLink,
                children: o.Z.Messages.HUB_EMAIL_CONFIRMATION_DIFFERENT_EMAIL
            })
        ]
    });
};
