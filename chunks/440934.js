o.r(n),
    o.d(n, {
        default: function () {
            return _;
        },
        openInteractionModal: function () {
            return m;
        }
    });
var t = o(735250);
o(470079);
var i = o(481060),
    a = o(112831),
    r = o(777036),
    c = o(970184),
    d = o(471073),
    l = o(293979),
    s = o(954654),
    u = o(689938),
    f = o(167990);
function _(e) {
    let { title: n, onClose: o, transitionState: _ } = e,
        { components: m, applicationIconURL: p, applicationName: I, submissionState: h, error: b, validators: C, onSubmit: g } = (0, l.X9)(e, o);
    return (0, t.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), g();
        },
        children: (0, t.jsxs)(i.ModalRoot, {
            transitionState: _,
            children: [
                (0, t.jsxs)(i.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, t.jsx)(i.Avatar, {
                            src: p,
                            size: i.AvatarSizes.SIZE_24,
                            'aria-label': I,
                            className: f.applicationIcon
                        }),
                        (0, t.jsx)(a.Z, {
                            color: a.Z.Colors.HEADER_PRIMARY,
                            size: a.Z.Sizes.SIZE_24,
                            children: n
                        }),
                        (0, t.jsx)(i.ModalCloseButton, {
                            onClick: o,
                            className: f.closeButton
                        })
                    ]
                }),
                (0, t.jsxs)(i.ModalContent, {
                    children: [
                        null != b && '' !== b
                            ? (0, t.jsx)(r.Z, {
                                  messageType: r.Q.ERROR,
                                  className: f.submissionWarning,
                                  children: b
                              })
                            : null,
                        (0, t.jsx)(r.Z, {
                            messageType: r.Q.WARNING,
                            className: f.submissionWarning,
                            children: u.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({ applicationName: I })
                        }),
                        (0, t.jsx)(i.FormSection, {
                            children: (0, t.jsx)(c.Il, {
                                modal: e,
                                validators: C,
                                children: (0, s.xX)(m)
                            })
                        })
                    ]
                }),
                (0, t.jsxs)(i.ModalFooter, {
                    children: [
                        (0, t.jsx)(i.Button, {
                            type: 'submit',
                            color: i.Button.Colors.BRAND,
                            size: i.Button.Sizes.MEDIUM,
                            submitting: h === d.i.IN_FLIGHT,
                            children: u.Z.Messages.SUBMIT
                        }),
                        (0, t.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: o,
                            children: u.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    });
}
function m(e) {
    (0, i.openModal)((n) =>
        (0, t.jsx)(_, {
            ...n,
            ...e
        })
    );
}
