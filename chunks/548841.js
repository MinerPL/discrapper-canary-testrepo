t.r(e);
var i = t(735250);
t(470079);
var r = t(481060), s = t(287734), a = t(153124), l = t(471253), o = t(939863), c = t(689938), u = t(58150);
e.default = n => {
    let {
            channel: e,
            ...t
        } = n, d = (0, a.Dt)();
    return (0, i.jsxs)(r.ConfirmModal, {
        confirmText: c.Z.Messages.END_STAGE,
        cancelText: c.Z.Messages.CANCEL,
        onConfirm: () => {
            (0, l.NZ)(e), s.default.disconnect();
        },
        confirmButtonColor: r.Button.Colors.RED,
        bodyClassName: u.body,
        ...t,
        children: [
            (0, i.jsx)(o.Z, {
                className: u.headerIconContainer,
                children: (0, i.jsx)('div', {
                    className: u.iconBackground,
                    children: (0, i.jsx)(r.StageXIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40,
                        className: u.headerIcon
                    })
                })
            }),
            (0, i.jsx)(r.Heading, {
                id: d,
                variant: 'heading-xl/semibold',
                color: 'header-primary',
                className: u.title,
                children: c.Z.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: u.subtitle,
                children: c.Z.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
            })
        ]
    });
};
