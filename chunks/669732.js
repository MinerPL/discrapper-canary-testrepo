s.r(t);
var r = s(735250);
s(470079);
var a = s(120356),
    n = s.n(a),
    o = s(481060),
    i = s(923928),
    c = s(600164),
    l = s(689938),
    m = s(365456),
    d = s(337667);
t.default = (e) => {
    let { onClose: t, transitionState: s, showHideSuppressWarning: a = !1 } = e;
    return (0, r.jsx)(o.ModalRoot, {
        transitionState: s,
        className: m.container,
        'aria-label': l.Z.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
        children: (0, r.jsxs)('form', {
            onSubmit: (e) => {
                null == e || e.preventDefault(), i.Z.clearSuppressWarning(), null == t || t();
            },
            className: m.form,
            children: [
                (0, r.jsxs)(o.ModalContent, {
                    className: m.modalContent,
                    children: [
                        (0, r.jsx)('img', {
                            src: d,
                            alt: '',
                            className: m.hero
                        }),
                        (0, r.jsx)(o.Text, {
                            className: m.title,
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: l.Z.Messages.HUB_STUDY_ROOM_SUPPRESS_TITLE
                        }),
                        (0, r.jsx)(o.Text, {
                            className: m.description,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: l.Z.Messages.HUB_STUDY_ROOM_SUPPRESS_DESCRIPTION
                        })
                    ]
                }),
                (0, r.jsxs)(o.ModalFooter, {
                    justify: c.Z.Justify.BETWEEN,
                    wrap: c.Z.Wrap.WRAP,
                    children: [
                        (0, r.jsx)(o.Button, {
                            type: 'submit',
                            size: o.Button.Sizes.LARGE,
                            className: n()(m.primaryButton, m.gutter),
                            autoFocus: !0,
                            children: l.Z.Messages.GOT_IT
                        }),
                        a &&
                            (0, r.jsx)(o.Clickable, {
                                onClick: () => i.Z.clearSuppressWarning(!0),
                                className: m.minorContainer,
                                children: (0, r.jsx)(o.Text, {
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
