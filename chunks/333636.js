n.r(t), n(47120);
var a = n(735250),
    l = n(470079),
    o = n(481060),
    r = n(238675),
    s = n(677065);
let i = Object.entries(r.fw).map((e) => {
        let [t, n] = e;
        return {
            label: t,
            value: n
        };
    }),
    c = Object.entries(r.sJ)
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
        [A, C] = l.useState(null),
        [h, f] = l.useState(null),
        [T, p] = l.useState(''),
        S = async () => {
            if (u) {
                p('');
                try {
                    await (0, r.qy)(u, {
                        difficulty: null != A ? A : void 0,
                        should_serve_invisible: null != h ? h : void 0
                    });
                } catch (e) {
                    p(e.message);
                }
            }
        };
    return (0, a.jsxs)(o.ModalRoot, {
        transitionState: n,
        children: [
            (0, a.jsxs)(o.ModalHeader, {
                className: s.header,
                children: [
                    (0, a.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Captcha Test Tool'
                    }),
                    (0, a.jsx)(o.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, a.jsxs)(o.ModalContent, {
                className: s.content,
                children: [
                    (0, a.jsx)(o.SingleSelect, {
                        value: u,
                        options: i,
                        onChange: (e) => {
                            e !== r.fw.HCAPTCHA_RQDATA && C(null), e !== r.fw.HCAPTCHA_EASY && f(null), d(e), p('');
                        }
                    }),
                    u === r.fw.HCAPTCHA_RQDATA &&
                        (0, a.jsx)(o.SingleSelect, {
                            value: A,
                            options: c,
                            onChange: (e) => {
                                u === r.fw.HCAPTCHA_RQDATA && C(e);
                            }
                        }),
                    u === r.fw.HCAPTCHA_EASY &&
                        (0, a.jsx)(o.Checkbox, {
                            value: null != h && h,
                            onChange: (e, t) => f(t),
                            children: (0, a.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: 'Should serve invisible?'
                            })
                        })
                ]
            }),
            (0, a.jsxs)(o.ModalFooter, {
                className: s.footer,
                children: [
                    (0, a.jsx)(o.Button, {
                        onClick: S,
                        disabled: !u,
                        children: 'Trigger Captcha'
                    }),
                    '' !== T && (0, a.jsx)(o.InputError, { error: T })
                ]
            })
        ]
    });
};
