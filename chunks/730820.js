t.d(s, {
    Z: function () {
        return j;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(816814),
    d = t(240872),
    _ = t(23645),
    E = t(712364),
    u = t(279837),
    I = t(600164),
    T = t(144114),
    S = t(921801),
    N = t(607018),
    C = t(778764),
    m = t(314897),
    A = t(325067),
    O = t(594174),
    g = t(572004),
    h = t(287880),
    p = t(714565),
    R = t(202858),
    x = t(726985),
    M = t(981631),
    f = t(815660),
    D = t(689938),
    P = t(78075),
    L = t(224499);
function b(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
function Z(e) {
    let {
            code: { code: s, consumed: t }
        } = e,
        i = ''.concat(s.substr(0, 4), '-').concat(s.substr(4)),
        r = a.useRef(null),
        o = a.useCallback(
            (e) => {
                if ('c' === e.key && e.metaKey && g.wS) {
                    var s;
                    e.preventDefault(), e.stopPropagation(), (0, g.JG)(i), null == r || null === (s = r.current) || void 0 === s || s.focus();
                }
            },
            [i]
        );
    return (0, n.jsx)('li', {
        className: L.marginBottom20,
        children: (0, n.jsx)(l.Clickable, {
            innerRef: r,
            className: P.backupCode,
            onKeyDown: o,
            children: (0, n.jsx)(l.Checkbox, {
                displayOnly: !0,
                readOnly: !0,
                className: P.codeCheckbox,
                value: t,
                children: (0, n.jsx)('span', {
                    className: P.code,
                    children: i
                })
            })
        })
    });
}
class v extends a.PureComponent {
    maskPhoneNumber(e) {
        return null == e ? '' : ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
    }
    renderMFASMS() {
        let e, s;
        let { revealed: t } = this.state,
            { currentUser: a, togglingSMS: i } = this.props,
            r = null != a.phone,
            o = a.hasFlag(M.xW$.MFA_SMS);
        if (r || o) {
            let e = t ? a.phone : this.maskPhoneNumber(a.phone);
            s = (0, n.jsxs)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                className: L.marginBottom8,
                children: [
                    D.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({ phoneNumber: e }),
                    (0, n.jsx)(l.Anchor, {
                        onClick: this.togglePhoneNumberVisibility,
                        className: P.phoneRevealer,
                        children: t ? D.Z.Messages.MFA_SMS_PHONE_NUMBER_HIDE : D.Z.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
                    })
                ]
            });
        }
        if (o)
            e = (0, n.jsx)(I.Z, {
                className: r ? '' : L.marginTop8,
                children: (0, n.jsx)(l.Button, {
                    color: l.Button.Colors.RED,
                    look: l.Button.Looks.OUTLINED,
                    size: l.Button.Sizes.SMALL,
                    submitting: i,
                    onClick: this.handleDisableSMS,
                    children: D.Z.Messages.MFA_SMS_REMOVE
                })
            });
        else {
            let s = (0, p.c)(a);
            e = (0, n.jsxs)(I.Z, {
                className: r ? '' : L.marginTop8,
                children: [
                    (0, n.jsx)(l.Button, {
                        onClick: this.handleEnableSMS,
                        size: l.Button.Sizes.SMALL,
                        submitting: i,
                        disabled: null != s,
                        children: null != s ? s : D.Z.Messages.MFA_SMS_ENABLE
                    }),
                    r
                        ? (0, n.jsx)(l.Button, {
                              onClick: this.handleChangePhoneNumber,
                              color: l.Button.Colors.PRIMARY,
                              size: l.Button.Sizes.SMALL,
                              look: l.Button.Looks.LINK,
                              children: D.Z.Messages.CHANGE_PHONE_NUMBER
                          })
                        : null
                ]
            });
        }
        return (0, n.jsx)(S.F, {
            setting: x.s6.ACCOUNT_SMS_BACKUP,
            children: (0, n.jsxs)(l.FormSection, {
                className: L.marginTop40,
                title: D.Z.Messages.MFA_SMS_AUTH,
                children: [
                    (0, n.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        children: D.Z.Messages.MFA_SMS_AUTH_SALES_PITCH
                    }),
                    s,
                    e
                ]
            })
        });
    }
    renderEnabled() {
        let e;
        let { backupCodes: s } = this.props,
            t = (0, n.jsx)(S.F, {
                setting: x.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, n.jsx)(l.Button, {
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                    size: l.Button.Sizes.SMALL,
                    children: D.Z.Messages.TWO_FA_VIEW_BACKUP_CODES
                })
            });
        if (s.length > 0) {
            t = (0, n.jsx)(_.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                children: (0, n.jsx)(l.Button, {
                    size: l.Button.Sizes.SMALL,
                    children: D.Z.Messages.TWO_FA_DOWNLOAD_CODES
                })
            });
            let a = (e) => e.map((e) => (0, n.jsx)(Z, { code: e }, e.code));
            e = (0, n.jsxs)(l.FormSection, {
                title: D.Z.Messages.TWO_FA_BACKUP_CODES_LABEL,
                children: [
                    (0, n.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: L.marginBottom20,
                        children: D.Z.Messages.TWO_FA_BACKUP_CODES_BODY.format()
                    }),
                    (0, n.jsxs)(I.Z, {
                        children: [
                            (0, n.jsx)(I.Z.Child, {
                                children: (0, n.jsx)('ul', {
                                    className: P.checkboxGroup,
                                    children: a(s.slice(0, s.length / 2))
                                })
                            }),
                            (0, n.jsx)(I.Z.Child, {
                                children: (0, n.jsx)('ul', {
                                    className: P.checkboxGroup,
                                    children: a(s.slice(s.length / 2))
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        children: (0, n.jsx)(l.Button, {
                            onClick: this.generateBackupCodes,
                            look: l.ButtonLooks.LINK,
                            size: l.ButtonSizes.MIN,
                            children: D.Z.Messages.TWO_FA_GENERATE_CODES
                        })
                    }),
                    (0, n.jsx)(l.FormDivider, { className: L.marginTop20 })
                ]
            });
        }
        return (0, n.jsxs)(l.FormSection, {
            children: [
                (0, n.jsx)(l.FormTitle, { children: D.Z.Messages.TWO_FA }),
                (0, n.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: L.marginBottom20,
                    children: D.Z.Messages.TWO_FA_DESCRIPTION
                }),
                (0, n.jsxs)(I.Z, {
                    justify: I.Z.Justify.START,
                    className: L.marginBottom20,
                    children: [
                        (0, n.jsx)(I.Z.Child, {
                            wrap: !0,
                            grow: 0,
                            children: t
                        }),
                        (0, n.jsxs)(I.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, n.jsx)(S.F, {
                                    setting: x.s6.ACCOUNT_REMOVE_2FA,
                                    children: (0, n.jsx)(l.Button, {
                                        onClick: this.handleDisableMFA,
                                        size: l.Button.Sizes.SMALL,
                                        color: l.ButtonColors.RED,
                                        look: l.ButtonLooks.OUTLINED,
                                        children: D.Z.Messages.TWO_FA_REMOVE
                                    })
                                }),
                                (0, n.jsx)(S.F, {
                                    setting: x.s6.ACCOUNT_ENABLE_2FA,
                                    children: (0, n.jsx)(l.Button, {
                                        onClick: R.ZP.enableMFA,
                                        size: l.ButtonSizes.SMALL,
                                        children: D.Z.Messages.TWO_FA_ENABLE
                                    })
                                })
                            ]
                        })
                    ]
                }),
                e,
                this.renderMFASMS(),
                (0, n.jsx)(S.F, {
                    setting: x.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, n.jsx)(C.Z, {})
                })
            ]
        });
    }
    renderDisabled() {
        return (0, n.jsxs)(l.FormSection, {
            title: D.Z.Messages.TWO_FA,
            children: [
                (0, n.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: L.marginBottom20,
                    children: D.Z.Messages.TWO_FA_SALES_PITCH
                }),
                (0, n.jsx)(l.FormItem, {
                    children: (0, n.jsx)(l.Button, {
                        onClick: R.ZP.enableMFA,
                        size: l.ButtonSizes.SMALL,
                        children: D.Z.Messages.TWO_FA_ENABLE
                    })
                }),
                (0, n.jsx)(C.Z, {})
            ]
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return h.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, n.jsx)(l.FormSection, {
                      title: D.Z.Messages.TWO_FA,
                      children: (0, n.jsx)(l.FormText, {
                          type: l.FormText.Types.DESCRIPTION,
                          children: D.Z.Messages.TWO_FA_NOT_VERIFIED
                      })
                  })
            : (0, n.jsx)(l.FormSection, {
                  title: D.Z.Messages.TWO_FA,
                  children: (0, n.jsx)(l.FormText, {
                      type: l.FormText.Types.DESCRIPTION,
                      children: D.Z.Messages.TWO_FA_USE_DESKTOP_APP
                  })
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.openModal)(
            (s) =>
                (0, n.jsx)(N.default, {
                    reason: T.L.USER_SETTINGS_UPDATE,
                    ...s,
                    ...e
                }),
            { modalKey: f.M }
        );
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                revealed: !1,
                password: ''
            }),
            b(this, 'togglePhoneNumberVisibility', (e) => {
                e.preventDefault(), this.setState({ revealed: !this.state.revealed });
            }),
            b(this, 'handleDisableMFA', () => {
                d.Z.show({
                    title: D.Z.Messages.TWO_FA_REMOVE,
                    body: D.Z.Messages.TWO_FA_REMOVE_CONFIRMATION,
                    cancelText: D.Z.Messages.CANCEL,
                    onConfirm: () => c.Z.disable()
                });
            }),
            b(this, 'generateBackupCodes', async () => {
                let e = A.Z.getVerificationKey();
                await c.Z.confirmViewBackupCodes(e, !0);
            }),
            b(this, 'sendMFABackupCodesVerificationKeyEmail', () => {
                (0, l.openModal)((e) =>
                    (0, n.jsx)(u.default, {
                        ...e,
                        handleSubmit: (e) =>
                            c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                this.viewBackupCodes(e);
                            }),
                        title: D.Z.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
                        actionText: D.Z.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
                    })
                );
            }),
            b(this, 'viewBackupCodes', (e) => {
                (0, l.openModal)((s) =>
                    (0, n.jsx)(E.Z, {
                        ...s,
                        handleSubmit: (e) => c.Z.confirmViewBackupCodes(e, !1).then(() => s.onClose()),
                        maxLength: 8,
                        title: D.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
                        label: D.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
                        forceNoPlaceholder: !0,
                        retryPrompt: D.Z.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
                        retrySuccessMessage: D.Z.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
                        onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
                        actionText: D.Z.Messages.TWO_FA_VIEW_CODES_SUBMIT,
                        helpMessage: D.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
                    })
                );
            }),
            b(this, 'getDownloadFileContents', () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: s, code: t } = e;
                            return '* '
                                .concat(t.substr(0, 4), '-')
                                .concat(t.substr(4), ' ')
                                .concat(s ? '(used)' : '');
                        })
                        .join('\r\n'),
                    s = D.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({ email: this.props.currentUser.email });
                return ''.concat(s, '\r\n\r\n').concat(e);
            }),
            b(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            b(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    s = () => {
                        (0, l.openModal)((e) =>
                            (0, n.jsx)(u.default, {
                                ...e,
                                handleSubmit: c.Z.enableSMS,
                                title: D.Z.Messages.MFA_SMS_ENABLE
                            })
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: s }) : s();
            }),
            b(this, 'handleDisableSMS', () => {
                (0, l.openModal)((e) =>
                    (0, n.jsx)(u.default, {
                        ...e,
                        handleSubmit: c.Z.disableSMS,
                        title: D.Z.Messages.MFA_SMS_REMOVE,
                        children: D.Z.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
                    })
                );
            });
    }
}
function j(e) {
    let s = (0, o.e7)([O.default], () => O.default.getCurrentUser());
    r()(null != s, 'TwoFactorAuth: currentUser cannot be undefined');
    let t = (0, o.cj)([A.Z, m.default], () => ({
        togglingSMS: A.Z.togglingSMS,
        hasTOTPEnabled: m.default.hasTOTPEnabled()
    }));
    return (0, n.jsx)(v, {
        currentUser: s,
        ...t,
        ...e
    });
}
