"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("627445"),
  o = n.n(s),
  a = n("446674"),
  l = n("77078"),
  u = n("913144"),
  d = n("430713"),
  c = n("984557"),
  f = n("367376"),
  E = n("878720"),
  h = n("601745"),
  _ = n("650893"),
  p = n("697218"),
  C = n("145131"),
  v = n("583227"),
  S = n("49111"),
  m = n("482931"),
  R = n("782340"),
  I = n("193384");
let A = e => {
  let {
    label: t,
    text: n,
    children: i,
    ...s
  } = e;
  return (0, r.jsxs)(C.default, {
    direction: C.default.Direction.VERTICAL,
    ...s,
    children: [(0, r.jsx)(l.FormTitle, {
      tag: "h2",
      children: t
    }), null != n ? (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      className: I.sectionBody,
      children: n
    }) : null, (0, r.jsx)(C.default.Child, {
      wrap: !0,
      children: i
    })]
  })
};
class N extends i.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(S.UserFlags.MFA_SMS), i = e.hasFlag(S.UserFlags.PARTNER) || e.hasFlag(S.UserFlags.STAFF);
    return t ? (0, r.jsxs)(A, {
      label: R.default.Messages.MFA_SMS_ENABLE,
      text: R.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: [(0, r.jsxs)(l.Text, {
        variant: "text-md/normal",
        className: I.sectionBody,
        children: [(0, r.jsx)("strong", {
          className: I.phoneNumber,
          children: R.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }), (0, r.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          size: l.Button.Sizes.MIN,
          className: I.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: R.default.Messages.CHANGE_PHONE_NUMBER
        })]
      }), (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        disabled: n || i,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        children: i ? R.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? R.default.Messages.MFA_SMS_ALREADY_ENABLED : R.default.Messages.MFA_SMS_ENABLE
      })]
    }) : (0, r.jsx)(A, {
      label: R.default.Messages.MFA_SMS_ENABLE,
      text: R.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        disabled: i,
        children: i ? R.default.Messages.MFA_SMS_DISABLED_PARTNER : R.default.Messages.MFA_SMS_ADD_PHONE
      })
    })
  }
  renderBackupCodesSection() {
    return (0, r.jsx)(A, {
      label: R.default.Messages.TWO_FA_DOWNLOAD_CODES,
      text: R.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
      children: (0, r.jsx)(c.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => u.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(l.Button, {
          color: l.Button.Colors.GREEN,
          size: l.Button.Sizes.SMALL,
          children: R.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      })
    })
  }
  renderHeader(e) {
    return (0, r.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, r.jsxs)(C.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          className: I.header,
          children: f.default.parse(R.default.Messages.TWO_FA_SUCCESS_HEADER)
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: I.subHeader,
          children: e
        })]
      }), (0, r.jsx)(C.default.Child, {
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
      header: R.default.Messages.TWO_FA_CONFIRM_TITLE,
      confirmText: R.default.Messages.TWO_FA_CONFIRM_CONFIRM,
      cancelText: R.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showConfirmModal: !1
      }),
      onConfirm: () => {
        u.default.dispatch({
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
      className: I.modal,
      children: [this.renderHeader(R.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, r.jsxs)(l.ModalContent, {
        className: I.modalInner,
        children: [this.renderSMSSection(), (0, r.jsx)(l.FormDivider, {
          className: I.divider
        }), this.renderBackupCodesSection()]
      }), t && this.renderConfirmModal(R.default.Messages.TWO_FA_CONFIRM_BODY)]
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
      className: I.modal,
      children: [this.renderHeader(R.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, r.jsx)(l.ModalContent, {
        className: I.modalInner,
        children: this.renderBackupCodesSection()
      }), t && this.renderConfirmModal(R.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, l.openModal)(t => (0, r.jsx)(h.default, {
      reason: E.ChangePhoneReason.MFA_PHONE_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: m.PHONE_VERIFICATION_MODAL_KEY
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showConfirmModal: !1
    }, this.handleCloseModal = () => {
      let {
        onClose: e,
        hasSeenBackupPrompt: t
      } = this.props;
      t ? null == e || e() : this.setState({
        showConfirmModal: !0
      })
    }, this.getDownloadFileContents = () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(R.default.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
        }).join("\r\n"),
        t = R.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }, this.handleChangePhoneNumber = () => {
      this.openPhoneVerificationModal()
    }, this.handleEnableSMS = () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, l.openModal)(e => (0, r.jsx)(v.default, {
          ...e,
          handleSubmit: e => d.default.enableSMS(e),
          title: R.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    }
  }
}
var T = a.default.connectStores([p.default, _.default], () => {
  let e = p.default.getCurrentUser();
  return o(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: e,
    backupCodes: _.default.getBackupCodes(),
    hasSeenBackupPrompt: _.default.hasSeenBackupPrompt
  }
})(N)