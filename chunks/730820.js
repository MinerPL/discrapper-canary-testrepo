"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("816814"),
  u = s("23645"),
  c = s("712364"),
  S = s("279837"),
  E = s("144114"),
  T = s("607018"),
  _ = s("778764"),
  f = s("314897"),
  m = s("325067"),
  g = s("594174"),
  h = s("285952"),
  N = s("572004"),
  I = s("287880"),
  p = s("714565"),
  C = s("202858"),
  A = s("981631"),
  O = s("815660"),
  x = s("689938"),
  R = s("438170"),
  M = s("794711");

function v(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function D(e) {
  let {
    code: {
      code: t,
      consumed: s
    }
  } = e, l = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), i = n.useRef(null), r = n.useCallback(e => {
    if ("c" === e.key && e.metaKey && N.SUPPORTS_COPY) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, N.copy)(l), null == i || null === (t = i.current) || void 0 === t || t.focus()
    }
  }, [l]);
  return (0, a.jsx)("li", {
    className: M.marginBottom20,
    children: (0, a.jsx)(o.Clickable, {
      innerRef: i,
      className: R.backupCode,
      onKeyDown: r,
      children: (0, a.jsx)(o.Checkbox, {
        displayOnly: !0,
        readOnly: !0,
        className: R.codeCheckbox,
        value: s,
        children: (0, a.jsx)("span", {
          className: R.code,
          children: l
        })
      })
    })
  })
}
class L extends n.PureComponent {
  maskPhoneNumber(e) {
    return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))
  }
  renderMFASMS() {
    let e, t;
    let {
      revealed: s
    } = this.state, {
      currentUser: n,
      togglingSMS: l
    } = this.props, i = null != n.phone, r = n.hasFlag(A.UserFlags.MFA_SMS);
    if (i || r) {
      let e = s ? n.phone : this.maskPhoneNumber(n.phone);
      t = (0, a.jsxs)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: M.marginBottom8,
        children: [x.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
          phoneNumber: e
        }), (0, a.jsx)(o.Anchor, {
          onClick: this.togglePhoneNumberVisibility,
          className: R.phoneRevealer,
          children: s ? x.default.Messages.MFA_SMS_PHONE_NUMBER_HIDE : x.default.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
        })]
      })
    }
    if (r) e = (0, a.jsx)(h.default, {
      className: i ? "" : M.marginTop8,
      children: (0, a.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        look: o.Button.Looks.OUTLINED,
        size: o.Button.Sizes.SMALL,
        submitting: l,
        onClick: this.handleDisableSMS,
        children: x.default.Messages.MFA_SMS_REMOVE
      })
    });
    else {
      let t = (0, p.getSMSBackupDisabledMessage)(n);
      e = (0, a.jsxs)(h.default, {
        className: i ? "" : M.marginTop8,
        children: [(0, a.jsx)(o.Button, {
          onClick: this.handleEnableSMS,
          size: o.Button.Sizes.SMALL,
          submitting: l,
          disabled: null != t,
          children: null != t ? t : x.default.Messages.MFA_SMS_ENABLE
        }), i ? (0, a.jsx)(o.Button, {
          onClick: this.handleChangePhoneNumber,
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          look: o.Button.Looks.LINK,
          children: x.default.Messages.CHANGE_PHONE_NUMBER
        }) : null]
      })
    }
    return (0, a.jsxs)(o.FormSection, {
      className: M.marginTop40,
      title: x.default.Messages.MFA_SMS_AUTH,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: x.default.Messages.MFA_SMS_AUTH_SALES_PITCH
      }), t, e]
    })
  }
  renderEnabled() {
    let e;
    let {
      backupCodes: t
    } = this.props, s = (0, a.jsx)(o.Button, {
      onClick: this.sendMFABackupCodesVerificationKeyEmail,
      size: o.Button.Sizes.SMALL,
      children: x.default.Messages.TWO_FA_VIEW_BACKUP_CODES
    });
    if (t.length > 0) {
      s = (0, a.jsx)(u.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, a.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          children: x.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      });
      let n = e => e.map(e => (0, a.jsx)(D, {
        code: e
      }, e.code));
      e = (0, a.jsxs)(o.FormSection, {
        title: x.default.Messages.TWO_FA_BACKUP_CODES_LABEL,
        children: [(0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          className: M.marginBottom20,
          children: x.default.Messages.TWO_FA_BACKUP_CODES_BODY.format()
        }), (0, a.jsxs)(h.default, {
          children: [(0, a.jsx)(h.default.Child, {
            children: (0, a.jsx)("ul", {
              className: R.checkboxGroup,
              children: n(t.slice(0, t.length / 2))
            })
          }), (0, a.jsx)(h.default.Child, {
            children: (0, a.jsx)("ul", {
              className: R.checkboxGroup,
              children: n(t.slice(t.length / 2))
            })
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(o.Button, {
            onClick: this.generateBackupCodes,
            look: o.ButtonLooks.LINK,
            size: o.ButtonSizes.MIN,
            children: x.default.Messages.TWO_FA_GENERATE_CODES
          })
        }), (0, a.jsx)(o.FormDivider, {
          className: M.marginTop20
        })]
      })
    }
    return (0, a.jsxs)(o.FormSection, {
      children: [(0, a.jsx)(o.FormTitle, {
        children: x.default.Messages.TWO_FA
      }), (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: M.marginBottom20,
        children: x.default.Messages.TWO_FA_DESCRIPTION
      }), (0, a.jsxs)(h.default, {
        justify: h.default.Justify.START,
        className: M.marginBottom20,
        children: [(0, a.jsx)(h.default.Child, {
          wrap: !0,
          grow: 0,
          children: s
        }), (0, a.jsx)(h.default.Child, {
          wrap: !0,
          children: this.props.hasTOTPEnabled ? (0, a.jsx)(o.Button, {
            onClick: this.handleDisableMFA,
            size: o.Button.Sizes.SMALL,
            color: o.ButtonColors.RED,
            look: o.ButtonLooks.OUTLINED,
            children: x.default.Messages.TWO_FA_REMOVE
          }) : (0, a.jsx)(o.Button, {
            onClick: C.default.enableMFA,
            size: o.ButtonSizes.SMALL,
            children: x.default.Messages.TWO_FA_ENABLE
          })
        })]
      }), e, this.renderMFASMS(), (0, a.jsx)(_.default, {})]
    })
  }
  renderDisabled() {
    return (0, a.jsxs)(o.FormSection, {
      title: x.default.Messages.TWO_FA,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: M.marginBottom20,
        children: x.default.Messages.TWO_FA_SALES_PITCH
      }), (0, a.jsx)(o.FormItem, {
        children: (0, a.jsx)(o.Button, {
          onClick: C.default.enableMFA,
          size: o.ButtonSizes.SMALL,
          children: x.default.Messages.TWO_FA_ENABLE
        })
      }), (0, a.jsx)(_.default, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return I.hasCrypto ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, a.jsx)(o.FormSection, {
      title: x.default.Messages.TWO_FA,
      children: (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: x.default.Messages.TWO_FA_NOT_VERIFIED
      })
    }) : (0, a.jsx)(o.FormSection, {
      title: x.default.Messages.TWO_FA,
      children: (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: x.default.Messages.TWO_FA_USE_DESKTOP_APP
      })
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, o.openModal)(t => (0, a.jsx)(T.default, {
      reason: E.ChangePhoneReason.USER_SETTINGS_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: O.PHONE_VERIFICATION_MODAL_KEY
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      revealed: !1,
      password: ""
    }), v(this, "togglePhoneNumberVisibility", e => {
      e.preventDefault(), this.setState({
        revealed: !this.state.revealed
      })
    }), v(this, "handleDisableMFA", () => {
      d.default.disable()
    }), v(this, "generateBackupCodes", async () => {
      let e = m.default.getVerificationKey();
      await d.default.confirmViewBackupCodes(e, !0)
    }), v(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, o.openModal)(e => (0, a.jsx)(S.default, {
        ...e,
        handleSubmit: e => d.default.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: x.default.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
        actionText: x.default.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
      }))
    }), v(this, "viewBackupCodes", e => {
      (0, o.openModal)(t => (0, a.jsx)(c.default, {
        ...t,
        handleSubmit: e => d.default.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
        maxLength: 8,
        title: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
        label: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
        forceNoPlaceholder: !0,
        retryPrompt: x.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
        retrySuccessMessage: x.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
        onRetry: () => d.default.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: x.default.Messages.TWO_FA_VIEW_CODES_SUBMIT,
        helpMessage: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
      }))
    }), v(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: s
          } = e;
          return "* ".concat(s.substr(0, 4), "-").concat(s.substr(4), " ").concat(t ? "(used)" : "")
        }).join("\r\n"),
        t = x.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), v(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), v(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, o.openModal)(e => (0, a.jsx)(S.default, {
          ...e,
          handleSubmit: d.default.enableSMS,
          title: x.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    }), v(this, "handleDisableSMS", () => {
      (0, o.openModal)(e => (0, a.jsx)(S.default, {
        ...e,
        handleSubmit: d.default.disableSMS,
        title: x.default.Messages.MFA_SMS_REMOVE,
        children: x.default.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
      }))
    })
  }
}

function P(e) {
  let t = (0, r.useStateFromStores)([g.default], () => g.default.getCurrentUser());
  i()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let s = (0, r.useStateFromStoresObject)([m.default, f.default], () => ({
    togglingSMS: m.default.togglingSMS,
    hasTOTPEnabled: f.default.hasTOTPEnabled()
  }));
  return (0, a.jsx)(L, {
    currentUser: t,
    ...s,
    ...e
  })
}