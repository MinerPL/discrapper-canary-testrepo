n.d(t, {
    Z: function () {
        return x;
    }
});
var r = n(735250);
n(470079);
var a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(110478),
    s = n(423932),
    c = n(601948),
    d = n(594174),
    u = n(820756),
    h = n(113207);
let m = () => {
    Promise.all([n.e('52030'), n.e('47238')])
        .then(n.bind(n, 24031))
        .then((e) => {
            let { openMFAModal: t } = e;
            t(
                {
                    ticket: 'ticket',
                    methods: [
                        {
                            type: 'webauthn',
                            challenge: '{}'
                        },
                        {
                            type: 'totp',
                            backup_codes_allowed: !0
                        },
                        { type: 'sms' },
                        { type: 'password' }
                    ]
                },
                console.log,
                console.error
            );
        });
};
function x() {
    let e = d.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(u.buttonsContainer, h.marginBottom20),
                children: (0, r.jsx)(c.S, { isDevTools: !0 })
            }),
            (0, r.jsx)('div', {
                className: l()(u.buttonsContainer, h.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                    onClick: m,
                    children: 'Launch MFA'
                })
            }),
            (0, r.jsx)('div', {
                className: l()(u.buttonsContainer, h.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                    onClick: () => (0, s.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(u.buttonsContainer, h.marginBottom20),
                    children: (0, r.jsx)(i.Button, {
                        onClick: () => (0, o.N)(),
                        children: 'Launch Captcha Test Tool'
                    })
                })
        ]
    });
}
