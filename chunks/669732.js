r.r(t);
var n = r(735250);
r(470079);
var s = r(120356), a = r.n(s), o = r(481060), i = r(923928), c = r(285952), l = r(689938), m = r(306798), d = r(337667);
t.default = e => {
    let {
        onClose: t,
        transitionState: r,
        showHideSuppressWarning: s = !1
    } = e;
    return (0, n.jsx)(o.ModalRoot, {
        transitionState: r,
        className: m.container,
        'aria-label': l.Z.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
        children: (0, n.jsxs)('form', {
            onSubmit: e => {
                null == e || e.preventDefault(), i.Z.clearSuppressWarning(), null == t || t();
            },
            className: m.form,
            children: [
                (0, n.jsxs)(o.ModalContent, {
                    className: m.modalContent,
                    children: [
                        (0, n.jsx)('img', {
                            src: d,
                            alt: '',
                            className: m.hero
                        }),
                        (0, n.jsx)(o.Text, {
                            className: m.title,
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: l.Z.Messages.HUB_STUDY_ROOM_SUPPRESS_TITLE
                        }),
                        (0, n.jsx)(o.Text, {
                            className: m.description,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: l.Z.Messages.HUB_STUDY_ROOM_SUPPRESS_DESCRIPTION
                        })
                    ]
                }),
                (0, n.jsxs)(o.ModalFooter, {
                    justify: c.Z.Justify.BETWEEN,
                    wrap: c.Z.Wrap.WRAP,
                    children: [
                        (0, n.jsx)(o.Button, {
                            type: 'submit',
                            size: o.Button.Sizes.LARGE,
                            className: a()(m.primaryButton, m.gutter),
                            autoFocus: !0,
                            children: l.Z.Messages.GOT_IT
                        }),
                        s && (0, n.jsx)(o.Clickable, {
                            onClick: () => i.Z.clearSuppressWarning(!0),
                            className: m.minorContainer,
                            children: (0, n.jsx)(o.Text, {
                                className: m.minorAction,
                                variant: 'text-xs/normal',
                                children: l.Z.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    ]
                })
            ]
        })
    });
};
