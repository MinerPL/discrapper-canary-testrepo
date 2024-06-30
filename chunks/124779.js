t.r(e), t.d(e, {
    default: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var l = t(481060), s = t(287734), a = t(153124), r = t(471253), c = t(939863), o = t(689938), u = t(472659);
function d(n) {
    let {
            channel: e,
            transitionState: t,
            onClose: d
        } = n, _ = (0, a.Dt)();
    function E() {
        s.default.disconnect(), d();
    }
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: t,
        'aria-labelledby': _,
        children: [
            (0, i.jsxs)(l.ModalContent, {
                className: u.content,
                children: [
                    (0, i.jsx)(c.Z, {
                        children: (0, i.jsx)('div', {
                            className: u.iconBackground,
                            children: (0, i.jsx)(l.StageXIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40,
                                className: u.headerIcon
                            })
                        })
                    }),
                    (0, i.jsx)(l.Heading, {
                        id: _,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: u.title,
                        children: o.Z.Messages.EXPLICIT_END_STAGE_TITLE
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: u.subtitle,
                        children: o.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE
                    })
                ]
            }),
            (0, i.jsxs)(l.ModalFooter, {
                children: [
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.RED,
                        onClick: function () {
                            (0, r.NZ)(e), E();
                        },
                        children: o.Z.Messages.EXPLICIT_END_STAGE_CONFIRM
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        className: u.cancelButton,
                        onClick: E,
                        children: o.Z.Messages.EXPLICIT_END_STAGE_CANCEL
                    })
                ]
            })
        ]
    });
}
