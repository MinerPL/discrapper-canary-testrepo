n.r(t), n(47120);
var a = n(735250),
    l = n(470079),
    r = n(481060),
    o = n(238675),
    s = n(797863);
let i = Object.entries(o.fw).map((e) => {
        let [t, n] = e;
        return {
            label: t,
            value: n
        };
    }),
    c = Object.entries(o.sJ)
        .map((e) => {
            let [t, n] = e;
            return {
                label: t,
                value: n
            };
        })
        .filter((e) => {
            let { value: t } = e;
            return 'number' == typeof t;
        });
t.default = function (e) {
    let { onClose: t, transitionState: n } = e,
        [u, d] = l.useState(null),
        [h, C] = l.useState(null),
        [A, f] = l.useState(null),
        [T, p] = l.useState(''),
        x = async () => {
            if (u) {
                p('');
                try {
                    await (0, o.qy)(u, {
                        difficulty: null != h ? h : void 0,
                        should_serve_invisible: null != A ? A : void 0
                    });
                } catch (e) {
                    p(e.message);
                }
            }
        };
    return (0, a.jsxs)(r.ModalRoot, {
        transitionState: n,
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                className: s.header,
                children: [
                    (0, a.jsx)(r.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Captcha Test Tool'
                    }),
                    (0, a.jsx)(r.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, a.jsxs)(r.ModalContent, {
                className: s.content,
                children: [
                    (0, a.jsx)(r.SingleSelect, {
                        value: u,
                        options: i,
                        onChange: (e) => {
                            e !== o.fw.HCAPTCHA_RQDATA && (C(null), f(null)), d(e), p('');
                        }
                    }),
                    u === o.fw.HCAPTCHA_RQDATA &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(r.SingleSelect, {
                                    value: h,
                                    options: c,
                                    onChange: (e) => {
                                        u === o.fw.HCAPTCHA_RQDATA && C(e);
                                    }
                                }),
                                (0, a.jsx)(r.Checkbox, {
                                    value: null != A && A,
                                    onChange: (e, t) => f(t),
                                    children: (0, a.jsx)(r.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Should serve invisible?'
                                    })
                                })
                            ]
                        })
                ]
            }),
            (0, a.jsxs)(r.ModalFooter, {
                className: s.footer,
                children: [
                    (0, a.jsx)(r.Button, {
                        onClick: x,
                        disabled: !u,
                        children: 'Trigger Captcha'
                    }),
                    '' !== T && (0, a.jsx)(r.InputError, { error: T })
                ]
            })
        ]
    });
};
