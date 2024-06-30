n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var s = n(990547), a = n(481060), r = n(703656), l = n(153124), o = n(63063), c = n(758119), d = n(981631), u = n(689938), _ = n(846378);
function E() {
    (0, c.qV)(), (0, r.uL)(d.Z5c.LOGIN);
}
function h(e) {
    let {
            underageMessage: t,
            transitionState: r
        } = e, c = (0, l.Dt)();
    return (0, i.jsxs)(a.ModalRoot, {
        transitionState: r,
        size: a.ModalSize.SMALL,
        'aria-labelledby': c,
        impression: {
            impressionName: s.ImpressionNames.USER_AGE_GATE_UNDERAGE,
            impressionProperties: { existing_user: !0 }
        },
        children: [
            (0, i.jsx)(a.ModalContent, {
                children: (0, i.jsxs)('div', {
                    className: _.container,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: n(231443),
                            className: _.img
                        }),
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-xl/semibold',
                            className: _.title,
                            id: c,
                            children: u.Z.Messages.AGE_GATE_UNDERAGE_EXISTING_HEADER
                        }),
                        (0, i.jsx)(a.Text, {
                            color: 'header-secondary',
                            className: _.subtitle,
                            variant: 'text-sm/normal',
                            children: u.Z.Messages.AGE_GATE_UNDERAGE_BODY.format({
                                underageMessage: null != t ? t : u.Z.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                                helpURL: o.Z.getArticleURL(d.BhN.AGE_GATE)
                            })
                        }),
                        (0, i.jsx)(a.Text, {
                            color: 'header-secondary',
                            className: _.subtitle,
                            variant: 'text-sm/normal',
                            children: u.Z.Messages.AGE_GATE_UNDERAGE_EXISTING_BODY_DELETION_WITH_DAYS.format({ days: 30 })
                        })
                    ]
                })
            }),
            (0, i.jsx)(a.ModalFooter, {
                children: (0, i.jsx)(a.Button, {
                    size: a.ButtonSizes.SMALL,
                    fullWidth: !0,
                    onClick: E,
                    children: u.Z.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
                })
            })
        ]
    });
}
