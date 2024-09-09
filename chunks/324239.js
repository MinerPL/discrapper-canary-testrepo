n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    }),
    n(47120);
var o = n(735250),
    s = n(470079),
    l = n(481060),
    r = n(893776),
    a = n(809206),
    i = n(600164),
    c = n(390885),
    u = n(626135),
    d = n(361207),
    m = n(981631),
    f = n(630724),
    _ = n(689938),
    p = n(809784);
function C(e) {
    let { email: t, setEmail: n, claimRequired: u, onSuccess: d, onClose: m } = e,
        [C, g] = s.useState(),
        [N, A] = s.useState(''),
        [S, T] = s.useState(''),
        [I, x] = s.useState(!1);
    s.useEffect(() => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT), []);
    let M = async (e) => {
        e.preventDefault(), x(!0), g(''), T('');
        try {
            await (0, a.S2)({
                email: t,
                password: N
            }),
                x(!1),
                d();
        } catch (e) {
            var n, o;
            (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.email) && g(e.body.email), (null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.password) && T(e.body.password), x(!1);
        }
    };
    return (0, o.jsxs)('div', {
        children: [
            (0, o.jsxs)(l.ModalHeader, {
                className: p.formHeader,
                direction: i.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, o.jsx)('div', { className: p.formImage }),
                    (0, o.jsx)(l.Heading, {
                        className: p.formTitle,
                        variant: 'heading-xl/semibold',
                        children: _.Z.Messages.FINISH_SIGNING_UP
                    }),
                    (0, o.jsx)(l.Text, {
                        className: p.formBody,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u ? _.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : _.Z.Messages.CLAIM_ACCOUNT_BODY_2
                    }),
                    (0, o.jsx)(l.ModalCloseButton, {
                        className: p.closeButton,
                        onClick: m
                    })
                ]
            }),
            (0, o.jsx)(l.ModalContent, {
                children: (0, o.jsxs)('form', {
                    className: p.formContent,
                    onSubmit: M,
                    children: [
                        (0, o.jsx)(l.FormItem, {
                            title: _.Z.Messages.FORM_LABEL_EMAIL,
                            className: p.formItem,
                            children: (0, o.jsx)(l.TextInput, {
                                value: t,
                                error: C,
                                onChange: (e) => n(e),
                                autoFocus: !0
                            })
                        }),
                        (0, o.jsx)(l.FormItem, {
                            title: _.Z.Messages.FORM_LABEL_PASSWORD,
                            className: p.formItem,
                            children: (0, o.jsx)(l.TextInput, {
                                type: 'password',
                                value: N,
                                error: S,
                                onChange: (e) => A(e)
                            })
                        }),
                        (0, o.jsx)(l.Button, {
                            type: 'submit',
                            size: l.Button.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: I,
                            disabled: 0 === t.length || 0 === N.length,
                            children: _.Z.Messages.CLAIM_ACCOUNT
                        }),
                        u &&
                            (0, o.jsx)(l.Button, {
                                className: p.logoutButton,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                size: l.Button.Sizes.NONE,
                                onClick: () => {
                                    r.Z.logout(), m();
                                },
                                children: _.Z.Messages.LOGOUT
                            })
                    ]
                })
            })
        ]
    });
}
function g(e) {
    let { email: t, claimRequired: n, onClose: r } = e,
        a = n ? _.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : _.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
    function C() {
        window.open((0, d.t3)(), '_blank'),
            u.default.track(m.rMx.DOWNLOAD_APP, {
                platform: (0, d.DW)(),
                ptb: !1,
                released: !0,
                has_e_mail: !0,
                referring_location: 'Claim Modal',
                qr_code: !1
            });
    }
    return (
        s.useEffect(() => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, o.jsxs)('div', {
            children: [
                (0, o.jsxs)(l.ModalContent, {
                    className: p.successContent,
                    children: [
                        !n &&
                            (0, o.jsx)(l.ModalCloseButton, {
                                className: p.closeButton,
                                onClick: r
                            }),
                        (0, o.jsx)('div', { className: p.successImage }),
                        (0, o.jsx)(l.Text, {
                            className: p.successTitle,
                            variant: 'text-lg/semibold',
                            children: a.format({ email: t })
                        }),
                        (0, o.jsx)(l.Text, {
                            className: p.successPromotion,
                            variant: 'text-md/normal',
                            children: _.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })
                    ]
                }),
                n
                    ? (0, o.jsx)(l.ModalFooter, {
                          direction: i.Z.Direction.VERTICAL,
                          children: (0, o.jsx)(l.Button, {
                              size: l.Button.Sizes.LARGE,
                              onClick: r,
                              children: _.Z.Messages.OKAY
                          })
                      })
                    : (0, o.jsx)(l.ModalFooter, {
                          direction: i.Z.Direction.VERTICAL,
                          children: (0, o.jsx)(l.Button, {
                              color: l.Button.Colors.BRAND,
                              size: l.Button.Sizes.LARGE,
                              onClick: C,
                              children: _.Z.Messages.CLAIM_ACCOUNT_GET_APP
                          })
                      })
            ]
        })
    );
}
function N(e) {
    let { onClose: t, transitionState: n, claimRequired: r = !1 } = e,
        [a, i] = s.useState(''),
        [c, u] = s.useState(!1);
    return c
        ? (0, o.jsx)(l.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(g, {
                  email: a,
                  claimRequired: r,
                  onClose: t
              })
          })
        : (0, o.jsx)(l.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(C, {
                  email: a,
                  setEmail: i,
                  claimRequired: r,
                  onSuccess: () => u(!0),
                  onClose: t
              })
          });
}
