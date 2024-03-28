"use strict";
n.r(t), n("47120");
var r = n("735250"),
  o = n("470079"),
  s = n("512722"),
  a = n.n(s),
  i = n("442837"),
  l = n("481060"),
  d = n("570140"),
  u = n("816814"),
  E = n("23645"),
  c = n("454585"),
  _ = n("144114"),
  f = n("607018"),
  R = n("325067"),
  h = n("594174"),
  p = n("285952"),
  I = n("279837"),
  A = n("981631"),
  O = n("815660"),
  N = n("689938"),
  M = n("948229");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = e => {
  let {
    label: t,
    text: n,
    children: o,
    ...s
  } = e;
  return (0, r.jsxs)(p.default, {
    direction: p.default.Direction.VERTICAL,
    ...s,
    children: [(0, r.jsx)(l.FormTitle, {
      tag: "h2",
      children: t
    }), null != n ? (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      className: M.sectionBody,
      children: n
    }) : null, (0, r.jsx)(p.default.Child, {
      wrap: !0,
      children: o
    })]
  })
};
class F extends o.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(A.UserFlags.MFA_SMS), o = e.hasFlag(A.UserFlags.PARTNER) || e.hasFlag(A.UserFlags.STAFF);
    return t ? (0, r.jsxs)(T, {
      label: N.default.Messages.MFA_SMS_ENABLE,
      text: N.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: [(0, r.jsxs)(l.Text, {
        variant: "text-md/normal",
        className: M.sectionBody,
        children: [(0, r.jsx)("strong", {
          className: M.phoneNumber,
          children: N.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }), (0, r.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          size: l.Button.Sizes.MIN,
          className: M.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: N.default.Messages.CHANGE_PHONE_NUMBER
        })]
      }), (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        disabled: n || o,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        children: o ? N.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? N.default.Messages.MFA_SMS_ALREADY_ENABLED : N.default.Messages.MFA_SMS_ENABLE
      })]
    }) : (0, r.jsx)(T, {
      label: N.default.Messages.MFA_SMS_ENABLE,
      text: N.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        disabled: o,
        children: o ? N.default.Messages.MFA_SMS_DISABLED_PARTNER : N.default.Messages.MFA_SMS_ADD_PHONE
      })
    })
  }
  renderBackupCodesSection() {
    return (0, r.jsx)(T, {
      label: N.default.Messages.TWO_FA_DOWNLOAD_CODES,
      text: N.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
      children: (0, r.jsx)(E.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => d.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(l.Button, {
          color: l.Button.Colors.GREEN,
          size: l.Button.Sizes.SMALL,
          children: N.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      })
    })
  }
  renderHeader(e) {
    return (0, r.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, r.jsxs)(p.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          className: M.header,
          children: c.default.parse(N.default.Messages.TWO_FA_SUCCESS_HEADER)
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: M.subHeader,
          children: e
        })]
      }), (0, r.jsx)(p.default.Child, {
        grow: 0,
        children: (0, r.jsx)(l.ModalCloseButton, {
          onClick: this.handleCloseModal
        })
      })]
    })
  }
  renderConfirmModal(e) {
    let {
      onClose: t
    } = this.props;
    return (0, r.jsx)(l.DeclarativeConfirmModal, {
      dismissable: !0,
      header: N.default.Messages.TWO_FA_CONFIRM_TITLE,
      confirmText: N.default.Messages.TWO_FA_CONFIRM_CONFIRM,
      cancelText: N.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showConfirmModal: !1
      }),
      onConfirm: () => {
        d.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), t()
      },
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        children: e
      })
    })
  }
  render() {
    let {
      isTotp: e
    } = this.props;
    return e ? this.renderTotp() : this.renderWebAuthn()
  }
  renderTotp() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: t
    } = this.state;
    return (0, r.jsxs)(l.ModalRoot, {
      transitionState: e,
      className: M.modal,
      children: [this.renderHeader(N.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, r.jsxs)(l.ModalContent, {
        className: M.modalInner,
        children: [this.renderSMSSection(), (0, r.jsx)(l.FormDivider, {
          className: M.divider
        }), this.renderBackupCodesSection()]
      }), t && this.renderConfirmModal(N.default.Messages.TWO_FA_CONFIRM_BODY)]
    })
  }
  renderWebAuthn() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: t
    } = this.state;
    return (0, r.jsxs)(l.ModalRoot, {
      transitionState: e,
      className: M.modal,
      children: [this.renderHeader(N.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, r.jsx)(l.ModalContent, {
        className: M.modalInner,
        children: this.renderBackupCodesSection()
      }), t && this.renderConfirmModal(N.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, l.openModal)(t => (0, r.jsx)(f.default, {
      reason: _.ChangePhoneReason.MFA_PHONE_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: O.PHONE_VERIFICATION_MODAL_KEY
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      showConfirmModal: !1
    }), S(this, "handleCloseModal", () => {
      let {
        onClose: e,
        hasSeenBackupPrompt: t
      } = this.props;
      t ? null == e || e() : this.setState({
        showConfirmModal: !0
      })
    }), S(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(N.default.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
        }).join("\r\n"),
        t = N.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), S(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), S(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, l.openModal)(e => (0, r.jsx)(I.default, {
          ...e,
          handleSubmit: e => u.default.enableSMS(e),
          title: N.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    })
  }
}
t.default = i.default.connectStores([h.default, R.default], () => {
  let e = h.default.getCurrentUser();
  return a()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: e,
    backupCodes: R.default.getBackupCodes(),
    hasSeenBackupPrompt: R.default.hasSeenBackupPrompt
  }
})(F)