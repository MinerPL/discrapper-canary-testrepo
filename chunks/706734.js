t.d(s, {
    Z: function () {
        return d;
    }
});
var n = t(735250);
t(470079);
var o = t(481060),
    a = t(488889),
    l = t(226186),
    r = t(626135),
    i = t(981631),
    E = t(259076),
    _ = t(689938),
    N = t(810452),
    c = t(859565);
function d(e) {
    let { onNext: s, onClose: t, reason: d, onReasonChange: u, freeTextResponse: A, setFreeTextResponse: C } = e,
        M = E.zf.map((e) => ({
            value: e,
            name: (0, a.S)(e)
        })),
        S = (0, l.u)('change_email_collect_reasons_slide');
    return (0, n.jsxs)('form', {
        onSubmit: s,
        children: [
            (0, n.jsxs)(o.ModalHeader, {
                separator: !1,
                className: c.header,
                children: [
                    (0, n.jsx)(o.Heading, {
                        variant: 'heading-xl/extrabold',
                        children: _.Z.Messages.EMAIL_CHANGE_REASONING_HEADER
                    }),
                    (0, n.jsx)(o.ModalCloseButton, {
                        onClick: t,
                        className: c.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(o.ModalContent, {
                className: N.content,
                children: [
                    (0, n.jsx)(o.RadioGroup, {
                        radioPosition: 'right',
                        radioItemClassName: N.radioItem,
                        size: o.RadioGroup.Sizes.NOT_SET,
                        value: d,
                        options: M,
                        onChange: (e) => {
                            let { value: s } = e;
                            r.default.track(i.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: s }), u(s), C(''), s === E.pw.SOMETHING_ELSE && l.Z.trackExposure({ location: 'change_email_collect_reasons_slide' });
                        }
                    }),
                    S &&
                        d === E.pw.SOMETHING_ELSE &&
                        (0, n.jsx)(o.FormItem, {
                            children: (0, n.jsx)(o.TextArea, {
                                value: A,
                                maxLength: E.mF,
                                onChange: C,
                                className: N.textArea,
                                placeholder: _.Z.Messages.EMAIL_CHANGE_REASONING_SOMETHING_ELSE_TEXTAREA_HINT
                            })
                        })
                ]
            }),
            (0, n.jsxs)(o.ModalFooter, {
                className: c.modalFooter,
                children: [
                    (0, n.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        disabled: null == d,
                        size: o.Button.Sizes.MEDIUM,
                        onClick: s,
                        children: _.Z.Messages.CONTINUE
                    }),
                    (0, n.jsx)(o.Button, {
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: t,
                        children: _.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
