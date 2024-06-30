s.d(t, {
    Z: function () {
        return j;
    }
}), s(47120);
var n = s(735250), a = s(470079), i = s(512722), r = s.n(i), o = s(442837), l = s(481060), c = s(816814), d = s(240872), _ = s(23645), E = s(712364), u = s(279837), T = s(144114), I = s(921801), S = s(607018), N = s(778764), C = s(314897), m = s(325067), A = s(594174), h = s(285952), g = s(572004), O = s(287880), p = s(714565), R = s(202858), x = s(726985), M = s(981631), D = s(815660), f = s(689938), P = s(402669), L = s(331651);
function Z(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
function b(e) {
    let {
            code: {
                code: t,
                consumed: s
            }
        } = e, i = ''.concat(t.substr(0, 4), '-').concat(t.substr(4)), r = a.useRef(null), o = a.useCallback(e => {
            if ('c' === e.key && e.metaKey && g.wS) {
                var t;
                e.preventDefault(), e.stopPropagation(), (0, g.JG)(i), null == r || null === (t = r.current) || void 0 === t || t.focus();
            }
        }, [i]);
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
                value: s,
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
        let e, t;
        let {revealed: s} = this.state, {
                currentUser: a,
                togglingSMS: i
            } = this.props, r = null != a.phone, o = a.hasFlag(M.xW$.MFA_SMS);
        if (r || o) {
            let e = s ? a.phone : this.maskPhoneNumber(a.phone);
            t = (0, n.jsxs)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                className: L.marginBottom8,
                children: [
                    f.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({ phoneNumber: e }),
                    (0, n.jsx)(l.Anchor, {
                        onClick: this.togglePhoneNumberVisibility,
                        className: P.phoneRevealer,
                        children: s ? f.Z.Messages.MFA_SMS_PHONE_NUMBER_HIDE : f.Z.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
                    })
                ]
            });
        }
        if (o)
            e = (0, n.jsx)(h.Z, {
                className: r ? '' : L.marginTop8,
                children: (0, n.jsx)(l.Button, {
                    color: l.Button.Colors.RED,
                    look: l.Button.Looks.OUTLINED,
                    size: l.Button.Sizes.SMALL,
                    submitting: i,
                    onClick: this.handleDisableSMS,
                    children: f.Z.Messages.MFA_SMS_REMOVE
                })
            });
        else {
            let t = (0, p.c)(a);
            e = (0, n.jsxs)(h.Z, {
                className: r ? '' : L.marginTop8,
                children: [
                    (0, n.jsx)(l.Button, {
                        onClick: this.handleEnableSMS,
                        size: l.Button.Sizes.SMALL,
                        submitting: i,
                        disabled: null != t,
                        children: null != t ? t : f.Z.Messages.MFA_SMS_ENABLE
                    }),
                    r ? (0, n.jsx)(l.Button, {
                        onClick: this.handleChangePhoneNumber,
                        color: l.Button.Colors.PRIMARY,
                        size: l.Button.Sizes.SMALL,
                        look: l.Button.Looks.LINK,
                        children: f.Z.Messages.CHANGE_PHONE_NUMBER
                    }) : null
                ]
            });
        }
        return (0, n.jsx)(I.F, {
            setting: x.s6.ACCOUNT_SMS_BACKUP,
            children: (0, n.jsxs)(l.FormSection, {
                className: L.marginTop40,
                title: f.Z.Messages.MFA_SMS_AUTH,
                children: [
                    (0, n.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        children: f.Z.Messages.MFA_SMS_AUTH_SALES_PITCH
                    }),
                    t,
                    e
                ]
            })
        });
    }
    renderEnabled() {
        let e;
        let {backupCodes: t} = this.props, s = (0, n.jsx)(I.F, {
                setting: x.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, n.jsx)(l.Button, {
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                    size: l.Button.Sizes.SMALL,
                    children: f.Z.Messages.TWO_FA_VIEW_BACKUP_CODES
                })
            });
        if (t.length > 0) {
            s = (0, n.jsx)(_.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                children: (0, n.jsx)(l.Button, {
                    size: l.Button.Sizes.SMALL,
                    children: f.Z.Messages.TWO_FA_DOWNLOAD_CODES
                })
            });
            let a = e => e.map(e => (0, n.jsx)(b, { code: e }, e.code));
            e = (0, n.jsxs)(l.FormSection, {
                title: f.Z.Messages.TWO_FA_BACKUP_CODES_LABEL,
                children: [
                    (0, n.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: L.marginBottom20,
                        children: f.Z.Messages.TWO_FA_BACKUP_CODES_BODY.format()
                    }),
                    (0, n.jsxs)(h.Z, {
                        children: [
                            (0, n.jsx)(h.Z.Child, {
                                children: (0, n.jsx)('ul', {
                                    className: P.checkboxGroup,
                                    children: a(t.slice(0, t.length / 2))
                                })
                            }),
                            (0, n.jsx)(h.Z.Child, {
                                children: (0, n.jsx)('ul', {
                                    className: P.checkboxGroup,
                                    children: a(t.slice(t.length / 2))
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        children: (0, n.jsx)(l.Button, {
                            onClick: this.generateBackupCodes,
                            look: l.ButtonLooks.LINK,
                            size: l.ButtonSizes.MIN,
                            children: f.Z.Messages.TWO_FA_GENERATE_CODES
                        })
                    }),
                    (0, n.jsx)(l.FormDivider, { className: L.marginTop20 })
                ]
            });
        }
        return (0, n.jsxs)(l.FormSection, {
            children: [
                (0, n.jsx)(l.FormTitle, { children: f.Z.Messages.TWO_FA }),
                (0, n.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: L.marginBottom20,
                    children: f.Z.Messages.TWO_FA_DESCRIPTION
                }),
                (0, n.jsxs)(h.Z, {
                    justify: h.Z.Justify.START,
                    className: L.marginBottom20,
                    children: [
                        (0, n.jsx)(h.Z.Child, {
                            wrap: !0,
                            grow: 0,
                            children: s
                        }),
                        (0, n.jsxs)(h.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, n.jsx)(I.F, {
                                    setting: x.s6.ACCOUNT_REMOVE_2FA,
                                    children: (0, n.jsx)(l.Button, {
                                        onClick: this.handleDisableMFA,
                                        size: l.Button.Sizes.SMALL,
                                        color: l.ButtonColors.RED,
                                        look: l.ButtonLooks.OUTLINED,
                                        children: f.Z.Messages.TWO_FA_REMOVE
                                    })
                                }),
                                (0, n.jsx)(I.F, {
                                    setting: x.s6.ACCOUNT_ENABLE_2FA,
                                    children: (0, n.jsx)(l.Button, {
                                        onClick: R.ZP.enableMFA,
                                        size: l.ButtonSizes.SMALL,
                                        children: f.Z.Messages.TWO_FA_ENABLE
                                    })
                                })
                            ]
                        })
                    ]
                }),
                e,
                this.renderMFASMS(),
                (0, n.jsx)(I.F, {
                    setting: x.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, n.jsx)(N.Z, {})
                })
            ]
        });
    }
    renderDisabled() {
        return (0, n.jsxs)(l.FormSection, {
            title: f.Z.Messages.TWO_FA,
            children: [
                (0, n.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: L.marginBottom20,
                    children: f.Z.Messages.TWO_FA_SALES_PITCH
                }),
                (0, n.jsx)(l.FormItem, {
                    children: (0, n.jsx)(l.Button, {
                        onClick: R.ZP.enableMFA,
                        size: l.ButtonSizes.SMALL,
                        children: f.Z.Messages.TWO_FA_ENABLE
                    })
                }),
                (0, n.jsx)(N.Z, {})
            ]
        });
    }
    render() {
        let {currentUser: e} = this.props;
        return O.uZ ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, n.jsx)(l.FormSection, {
            title: f.Z.Messages.TWO_FA,
            children: (0, n.jsx)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                children: f.Z.Messages.TWO_FA_NOT_VERIFIED
            })
        }) : (0, n.jsx)(l.FormSection, {
            title: f.Z.Messages.TWO_FA,
            children: (0, n.jsx)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                children: f.Z.Messages.TWO_FA_USE_DESKTOP_APP
            })
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.openModal)(t => (0, n.jsx)(S.default, {
            reason: T.L.USER_SETTINGS_UPDATE,
            ...t,
            ...e
        }), { modalKey: D.M });
    }
    constructor(...e) {
        super(...e), Z(this, 'state', {
            revealed: !1,
            password: ''
        }), Z(this, 'togglePhoneNumberVisibility', e => {
            e.preventDefault(), this.setState({ revealed: !this.state.revealed });
        }), Z(this, 'handleDisableMFA', () => {
            d.Z.show({
                title: f.Z.Messages.TWO_FA_REMOVE,
                body: f.Z.Messages.TWO_FA_REMOVE_CONFIRMATION,
                cancelText: f.Z.Messages.CANCEL,
                onConfirm: () => c.Z.disable()
            });
        }), Z(this, 'generateBackupCodes', async () => {
            let e = m.Z.getVerificationKey();
            await c.Z.confirmViewBackupCodes(e, !0);
        }), Z(this, 'sendMFABackupCodesVerificationKeyEmail', () => {
            (0, l.openModal)(e => (0, n.jsx)(u.default, {
                ...e,
                handleSubmit: e => c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                    this.viewBackupCodes(e);
                }),
                title: f.Z.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
                actionText: f.Z.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
            }));
        }), Z(this, 'viewBackupCodes', e => {
            (0, l.openModal)(t => (0, n.jsx)(E.Z, {
                ...t,
                handleSubmit: e => c.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                maxLength: 8,
                title: f.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
                label: f.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
                forceNoPlaceholder: !0,
                retryPrompt: f.Z.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
                retrySuccessMessage: f.Z.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
                onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
                actionText: f.Z.Messages.TWO_FA_VIEW_CODES_SUBMIT,
                helpMessage: f.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
            }));
        }), Z(this, 'getDownloadFileContents', () => {
            let e = this.props.backupCodes.map(e => {
                    let {
                        consumed: t,
                        code: s
                    } = e;
                    return '* '.concat(s.substr(0, 4), '-').concat(s.substr(4), ' ').concat(t ? '(used)' : '');
                }).join('\r\n'), t = f.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({ email: this.props.currentUser.email });
            return ''.concat(t, '\r\n\r\n').concat(e);
        }), Z(this, 'handleChangePhoneNumber', () => {
            this.openPhoneVerificationModal();
        }), Z(this, 'handleEnableSMS', () => {
            let {currentUser: e} = this.props, t = () => {
                    (0, l.openModal)(e => (0, n.jsx)(u.default, {
                        ...e,
                        handleSubmit: c.Z.enableSMS,
                        title: f.Z.Messages.MFA_SMS_ENABLE
                    }));
                };
            null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
        }), Z(this, 'handleDisableSMS', () => {
            (0, l.openModal)(e => (0, n.jsx)(u.default, {
                ...e,
                handleSubmit: c.Z.disableSMS,
                title: f.Z.Messages.MFA_SMS_REMOVE,
                children: f.Z.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
            }));
        });
    }
}
function j(e) {
    let t = (0, o.e7)([A.default], () => A.default.getCurrentUser());
    r()(null != t, 'TwoFactorAuth: currentUser cannot be undefined');
    let s = (0, o.cj)([
        m.Z,
        C.default
    ], () => ({
        togglingSMS: m.Z.togglingSMS,
        hasTOTPEnabled: C.default.hasTOTPEnabled()
    }));
    return (0, n.jsx)(v, {
        currentUser: t,
        ...s,
        ...e
    });
}
