n.r(a), n.d(a, {
    default: function () {
        return u;
    }
});
var t = n(735250), s = n(470079), o = n(481060), r = n(153124), c = n(626135), d = n(981631), i = n(689938), l = n(776953), C = n(963705);
function u(e) {
    let {
        source: a,
        onClose: n,
        transitionState: u
    } = e;
    s.useEffect(() => {
        c.default.track(d.rMx.OPEN_MODAL, {
            type: d.jXE.CONTACT_SYNC_NC_MODAL,
            source: { location: a }
        });
    }, [a]);
    let N = (0, r.Dt)();
    return (0, t.jsxs)(o.ModalRoot, {
        className: l.contactSync,
        transitionState: u,
        'aria-labelledby': N,
        children: [
            (0, t.jsx)(o.ModalCloseButton, {
                onClick: n,
                className: l.modalCloseButton
            }),
            (0, t.jsxs)('div', {
                className: l.inner,
                children: [
                    (0, t.jsx)(o.Heading, {
                        variant: 'heading-xl/extrabold',
                        color: 'header-primary',
                        className: l.header,
                        children: i.Z.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_TITLE
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: i.Z.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_BODY
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: l.container,
                children: (0, t.jsx)('img', {
                    alt: '',
                    src: C
                })
            })
        ]
    });
}
