var r = n(735250);
n(470079);
var i = n(481060), a = n(99690), o = n(689938), s = n(415823);
t.Z = e => {
    let {user: t} = e;
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)(i.Heading, {
                className: s.header,
                variant: 'heading-sm/semibold',
                children: o.Z.Messages.REPORTS_USER_PREVIEW_TITLE
            }),
            (0, r.jsx)('div', {
                className: s.userContainer,
                children: (0, r.jsxs)('div', {
                    className: s.userInfo,
                    children: [
                        (0, r.jsx)(a.Z, {
                            className: s.userIcon,
                            user: t,
                            size: i.AvatarSizes.SIZE_40
                        }),
                        (0, r.jsxs)('div', {
                            children: [
                                null != t.globalName && (0, r.jsx)(i.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: t.globalName
                                }),
                                (0, r.jsx)(i.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: t.username
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
