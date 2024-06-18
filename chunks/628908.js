"use strict";
n.r(t), n(47120);
var r = n(735250),
  o = n(470079),
  s = n(512722),
  a = n.n(s),
  i = n(442837),
  l = n(481060),
  d = n(570140),
  E = n(816814),
  c = n(23645),
  u = n(454585),
  _ = n(144114),
  h = n(607018),
  R = n(325067),
  p = n(594174),
  I = n(285952),
  M = n(279837),
  N = n(981631),
  f = n(815660),
  A = n(689938),
  O = n(190677);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = e => {
  let {
    label: t,
    text: n,
    children: o,
    ...s
  } = e;
  return (0, r.jsxs)(I.Z, {
    direction: I.Z.Direction.VERTICAL,
    ...s,
    children: [(0, r.jsx)(l.FormTitle, {
      tag: "h2",
      children: t
    }), null != n ? (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      className: O.sectionBody,
      children: n
    }) : null, (0, r.jsx)(I.Z.Child, {
      wrap: !0,
      children: o
    })]
  })
};
class F extends o.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(N.xW$.MFA_SMS), o = e.hasFlag(N.xW$.PARTNER) || e.hasFlag(N.xW$.STAFF);
    return t ? (0, r.jsxs)(C, {
      label: A.Z.Messages.MFA_SMS_ENABLE,
      text: A.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: [(0, r.jsxs)(l.Text, {
        variant: "text-md/normal",
        className: O.sectionBody,
        children: [(0, r.jsx)("strong", {
          className: O.phoneNumber,
          children: A.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }), (0, r.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          size: l.Button.Sizes.MIN,
          className: O.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: A.Z.Messages.CHANGE_PHONE_NUMBER
        })]
      }), (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        disabled: n || o,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        children: o ? A.Z.Messages.MFA_SMS_DISABLED_PARTNER : n ? A.Z.Messages.MFA_SMS_ALREADY_ENABLED : A.Z.Messages.MFA_SMS_ENABLE
      })]
    }) : (0, r.jsx)(C, {
      label: A.Z.Messages.MFA_SMS_ENABLE,
      text: A.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        disabled: o,
        children: o ? A.Z.Messages.MFA_SMS_DISABLED_PARTNER : A.Z.Messages.MFA_SMS_ADD_PHONE
      })
    })
  }
  renderBackupCodesSection() {
    return (0, r.jsx)(C, {
      label: A.Z.Messages.TWO_FA_DOWNLOAD_CODES,
      text: A.Z.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
      children: (0, r.jsx)(c.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => d.Z.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(l.Button, {
          color: l.Button.Colors.GREEN,
          size: l.Button.Sizes.SMALL,
          children: A.Z.Messages.TWO_FA_DOWNLOAD_CODES
        })
      })
    })
  }
  renderHeader(e) {
    return (0, r.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, r.jsxs)(I.Z.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          className: O.header,
          children: u.Z.parse(A.Z.Messages.TWO_FA_SUCCESS_HEADER)
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: O.subHeader,
          children: e
        })]
      }), (0, r.jsx)(I.Z.Child, {
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
      header: A.Z.Messages.TWO_FA_CONFIRM_TITLE,
      confirmText: A.Z.Messages.TWO_FA_CONFIRM_CONFIRM,
      cancelText: A.Z.Messages.CANCEL,
      onCancel: () => this.setState({
        showConfirmModal: !1
      }),
      onConfirm: () => {
        d.Z.dispatch({
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
      className: O.modal,
      children: [this.renderHeader(A.Z.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, r.jsxs)(l.ModalContent, {
        className: O.modalInner,
        children: [this.renderSMSSection(), (0, r.jsx)(l.FormDivider, {
          className: O.divider
        }), this.renderBackupCodesSection()]
      }), t && this.renderConfirmModal(A.Z.Messages.TWO_FA_CONFIRM_BODY)]
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
      className: O.modal,
      children: [this.renderHeader(A.Z.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, r.jsx)(l.ModalContent, {
        className: O.modalInner,
        children: this.renderBackupCodesSection()
      }), t && this.renderConfirmModal(A.Z.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, l.openModal)(t => (0, r.jsx)(h.default, {
      reason: _.L.MFA_PHONE_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: f.M
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
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(A.Z.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
        }).join("\r\n"),
        t = A.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), S(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), S(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, l.openModal)(e => (0, r.jsx)(M.default, {
          ...e,
          handleSubmit: e => E.Z.enableSMS(e),
          title: A.Z.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    })
  }
}
t.default = i.ZP.connectStores([p.default, R.Z], () => {
  let e = p.default.getCurrentUser();
  return a()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: e,
    backupCodes: R.Z.getBackupCodes(),
    hasSeenBackupPrompt: R.Z.hasSeenBackupPrompt
  }
})(F)