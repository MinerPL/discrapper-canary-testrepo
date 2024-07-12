n.r(t), n(47120);
var o = n(735250),
  r = n(470079),
  s = n(512722),
  a = n.n(s),
  i = n(442837),
  l = n(481060),
  d = n(570140),
  c = n(816814),
  E = n(23645),
  u = n(454585),
  _ = n(144114),
  h = n(607018),
  p = n(325067),
  R = n(594174),
  f = n(285952),
  I = n(279837),
  N = n(981631),
  M = n(815660),
  A = n(689938),
  S = n(941395);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let C = e => {
  let {
label: t,
text: n,
children: r,
...s
  } = e;
  return (0, o.jsxs)(f.Z, {
direction: f.Z.Direction.VERTICAL,
...s,
children: [
  (0, o.jsx)(l.FormTitle, {
    tag: 'h2',
    children: t
  }),
  null != n ? (0, o.jsx)(l.Text, {
    variant: 'text-md/normal',
    className: S.sectionBody,
    children: n
  }) : null,
  (0, o.jsx)(f.Z.Child, {
    wrap: !0,
    children: r
  })
]
  });
};
class F extends r.PureComponent {
  renderSMSSection() {
let {
  currentUser: e
} = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(N.xW$.MFA_SMS), r = e.hasFlag(N.xW$.PARTNER) || e.hasFlag(N.xW$.STAFF);
return t ? (0, o.jsxs)(C, {
  label: A.Z.Messages.MFA_SMS_ENABLE,
  text: A.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,
  children: [
    (0, o.jsxs)(l.Text, {
      variant: 'text-md/normal',
      className: S.sectionBody,
      children: [
        (0, o.jsx)('strong', {
          className: S.phoneNumber,
          children: A.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }),
        (0, o.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          size: l.Button.Sizes.MIN,
          className: S.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: A.Z.Messages.CHANGE_PHONE_NUMBER
        })
      ]
    }),
    (0, o.jsx)(l.Button, {
      onClick: this.handleEnableSMS,
      disabled: n || r,
      color: l.Button.Colors.GREEN,
      size: l.Button.Sizes.SMALL,
      children: r ? A.Z.Messages.MFA_SMS_DISABLED_PARTNER : n ? A.Z.Messages.MFA_SMS_ALREADY_ENABLED : A.Z.Messages.MFA_SMS_ENABLE
    })
  ]
}) : (0, o.jsx)(C, {
  label: A.Z.Messages.MFA_SMS_ENABLE,
  text: A.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,
  children: (0, o.jsx)(l.Button, {
    onClick: this.handleEnableSMS,
    color: l.Button.Colors.GREEN,
    size: l.Button.Sizes.SMALL,
    disabled: r,
    children: r ? A.Z.Messages.MFA_SMS_DISABLED_PARTNER : A.Z.Messages.MFA_SMS_ADD_PHONE
  })
});
  }
  renderBackupCodesSection() {
return (0, o.jsx)(C, {
  label: A.Z.Messages.TWO_FA_DOWNLOAD_CODES,
  text: A.Z.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
  children: (0, o.jsx)(E.Z, {
    fileContents: this.getDownloadFileContents,
    contentType: 'text/plain',
    fileName: 'discord_backup_codes.txt',
    onDownload: () => d.Z.dispatch({
      type: 'MFA_SEEN_BACKUP_CODE_PROMPT'
    }),
    children: (0, o.jsx)(l.Button, {
      color: l.Button.Colors.GREEN,
      size: l.Button.Sizes.SMALL,
      children: A.Z.Messages.TWO_FA_DOWNLOAD_CODES
    })
  })
});
  }
  renderHeader(e) {
return (0, o.jsxs)(l.ModalHeader, {
  separator: !1,
  children: [
    (0, o.jsxs)(f.Z.Child, {
      grow: 1,
      shrink: 1,
      children: [
        (0, o.jsx)(l.Heading, {
          variant: 'heading-lg/semibold',
          className: S.header,
          children: u.Z.parse(A.Z.Messages.TWO_FA_SUCCESS_HEADER)
        }),
        (0, o.jsx)(l.Text, {
          variant: 'text-xs/normal',
          className: S.subHeader,
          children: e
        })
      ]
    }),
    (0, o.jsx)(f.Z.Child, {
      grow: 0,
      children: (0, o.jsx)(l.ModalCloseButton, {
        onClick: this.handleCloseModal
      })
    })
  ]
});
  }
  renderConfirmModal(e) {
let {
  onClose: t
} = this.props;
return (0, o.jsx)(l.DeclarativeConfirmModal, {
  dismissable: !0,
  header: A.Z.Messages.TWO_FA_CONFIRM_TITLE,
  confirmText: A.Z.Messages.TWO_FA_CONFIRM_CONFIRM,
  cancelText: A.Z.Messages.CANCEL,
  onCancel: () => this.setState({
    showConfirmModal: !1
  }),
  onConfirm: () => {
    d.Z.dispatch({
      type: 'MFA_SEEN_BACKUP_CODE_PROMPT'
    }), t();
  },
  children: (0, o.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'text-normal',
    children: e
  })
});
  }
  render() {
let {
  isTotp: e
} = this.props;
return e ? this.renderTotp() : this.renderWebAuthn();
  }
  renderTotp() {
let {
  transitionState: e
} = this.props, {
  showConfirmModal: t
} = this.state;
return (0, o.jsxs)(l.ModalRoot, {
  transitionState: e,
  className: S.modal,
  children: [
    this.renderHeader(A.Z.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()),
    (0, o.jsxs)(l.ModalContent, {
      className: S.modalInner,
      children: [
        this.renderSMSSection(),
        (0, o.jsx)(l.FormDivider, {
          className: S.divider
        }),
        this.renderBackupCodesSection()
      ]
    }),
    t && this.renderConfirmModal(A.Z.Messages.TWO_FA_CONFIRM_BODY)
  ]
});
  }
  renderWebAuthn() {
let {
  transitionState: e
} = this.props, {
  showConfirmModal: t
} = this.state;
return (0, o.jsxs)(l.ModalRoot, {
  transitionState: e,
  className: S.modal,
  children: [
    this.renderHeader(A.Z.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()),
    (0, o.jsx)(l.ModalContent, {
      className: S.modalInner,
      children: this.renderBackupCodesSection()
    }),
    t && this.renderConfirmModal(A.Z.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)
  ]
});
  }
  openPhoneVerificationModal() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
(0, l.openModal)(t => (0, o.jsx)(h.default, {
  reason: _.L.MFA_PHONE_UPDATE,
  ...t,
  ...e
}), {
  modalKey: M.M
});
  }
  constructor(...e) {
super(...e), O(this, 'state', {
  showConfirmModal: !1
}), O(this, 'handleCloseModal', () => {
  let {
    onClose: e,
    hasSeenBackupPrompt: t
  } = this.props;
  t ? null == e || e() : this.setState({
    showConfirmModal: !0
  });
}), O(this, 'getDownloadFileContents', () => {
  let e = this.props.backupCodes.map(e => {
      let {
        consumed: t,
        code: n
      } = e;
      return '* '.concat(n.substr(0, 4), '-').concat(n.substr(4), ' ').concat(t ? '('.concat(A.Z.Messages.TWO_FA_BACKUP_CODE_USED, ')') : '');
    }).join('\r\n'),
    t = A.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
      email: this.props.currentUser.email
    });
  return ''.concat(t, '\r\n\r\n').concat(e);
}), O(this, 'handleChangePhoneNumber', () => {
  this.openPhoneVerificationModal();
}), O(this, 'handleEnableSMS', () => {
  let {
    currentUser: e
  } = this.props, t = () => {
    (0, l.openModal)(e => (0, o.jsx)(I.default, {
      ...e,
      handleSubmit: e => c.Z.enableSMS(e),
      title: A.Z.Messages.MFA_SMS_ENABLE
    }));
  };
  null == e.phone ? this.openPhoneVerificationModal({
    onAddedPhone: t
  }) : t();
});
  }
}
t.default = i.ZP.connectStores([
  R.default,
  p.Z
], () => {
  let e = R.default.getCurrentUser();
  return a()(null != e, 'MFAEnableSuccess: currentUser cannot be undefined'), {
currentUser: e,
backupCodes: p.Z.getBackupCodes(),
hasSeenBackupPrompt: p.Z.hasSeenBackupPrompt
  };
})(F);