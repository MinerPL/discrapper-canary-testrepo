"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("442837"),
  u = s("780384"),
  c = s("481060"),
  S = s("816814"),
  E = s("809206"),
  T = s("497321"),
  _ = s("279837"),
  f = s("952306"),
  m = s("346585"),
  g = s("347649"),
  h = s("332473"),
  N = s("303172"),
  I = s("484459"),
  p = s("430824"),
  C = s("325067"),
  A = s("246946"),
  O = s("594174"),
  x = s("285952"),
  R = s("474333"),
  M = s("499150"),
  v = s("709054"),
  D = s("706454"),
  L = s("210887"),
  P = s("418632"),
  j = s("730820"),
  b = s("888256"),
  U = s("2719"),
  y = s("194530"),
  B = s("981631"),
  F = s("801461"),
  G = s("689938"),
  k = s("438170"),
  H = s("794711");
class w extends n.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, I.default)(e.id, e.getAvatarURL(void 0, 80))
  }
  componentWillUnmount() {
    S.default.clearBackupCodes(), (0, E.accountDetailsClose)()
  }
  renderAccountWarning() {
    let {
      currentUser: e
    } = this.props;
    if (!e.isClaimed()) {
      let e = (0, a.jsxs)("section", {
        children: [(0, a.jsx)("div", {
          className: k.accountWarningBodyText,
          children: G.default.Messages.UNCLAIMED_ACCOUNT_BODY_2
        }), (0, a.jsx)(c.Button, {
          look: c.ButtonLooks.INVERTED,
          size: c.ButtonSizes.SMALL,
          color: c.Button.Colors.RED,
          onClick: () => f.default.openClaimAccountModal(),
          children: G.default.Messages.CLAIM_ACCOUNT_LONG
        })]
      });
      return (0, a.jsx)(c.FormNotice, {
        type: c.FormNotice.Types.DANGER,
        className: H.marginBottom20,
        imageData: {
          src: s("418558"),
          width: 60,
          height: 60
        },
        title: G.default.Messages.UNCLAIMED_ACCOUNT_TITLE,
        body: e
      })
    }
    if (null == e.email) return null;
    if (!e.verified) {
      let e = (0, a.jsxs)("section", {
        children: [(0, a.jsx)("div", {
          className: k.accountWarningBodyText,
          children: G.default.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
        }), (0, a.jsx)(P.default, {
          size: c.ButtonSizes.SMALL,
          color: c.Button.Colors.PRIMARY
        })]
      });
      return (0, a.jsx)(c.FormNotice, {
        type: c.FormNotice.Types.PRIMARY,
        className: H.marginBottom20,
        imageData: {
          src: s("449125"),
          width: 60,
          height: 60
        },
        title: G.default.Messages.UNVERIFIED_EMAIL_TITLE,
        body: e
      })
    }
  }
  renderPomeloWarning() {
    return this.props.shouldRenderPomeloWarning ? (0, a.jsxs)(R.default, {
      className: k.accountWarningBodyText,
      messageType: R.HelpMessageTypes.WARNING,
      children: [this.props.forceMigrationExperiment ? G.default.Messages.POMELO_ACTION_NEEDED_FORCE.format({
        date: (0, m.getLocalizedForcedUUDate)(this.props.locale)
      }) : G.default.Messages.POMELO_ACTION_NEEDED.format(), " ", "", (0, a.jsx)(M.default, {
        className: k.noticeTextButton,
        onClick: () => (0, N.default)(F.PomeloEntrypoints.USER_SETTINGS),
        children: G.default.Messages.GET_STARTED
      })]
    }) : null
  }
  renderAccountSettings() {
    return (0, a.jsxs)(c.FormSection, {
      tag: c.FormTitleTags.H1,
      title: G.default.Messages.USER_SETTINGS_MY_ACCOUNT,
      className: k.__invalid_userSettingsAccount,
      children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, a.jsx)(U.default, {})]
    })
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: t,
      theme: n
    } = this.props, l = (0, u.isThemeDark)(n) ? s("555702") : s("610802");
    return (0, a.jsxs)(c.FormSection, {
      className: i()(k.userSettingsSecurity, H.marginTop40),
      title: G.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
      tag: "h1",
      children: [t.mfaEnabled ? (0, a.jsx)(c.FormSection, {
        children: (0, a.jsxs)(c.FormTitle, {
          className: i()(k.isEnabled, H.marginBottom20),
          children: [(0, a.jsx)("img", {
            alt: "",
            className: i()(k.lockIcon),
            src: s("511391")
          }), G.default.Messages.TWO_FA_ENABLED]
        })
      }) : null, (0, a.jsx)("div", {
        children: (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          className: k.changePasswordButton,
          onClick: () => (0, c.openModal)(e => (0, a.jsx)(y.default, {
            ...e,
            onSuccess: e.onClose
          })),
          children: G.default.Messages.CHANGE_PASSWORD
        })
      }), (0, a.jsxs)(x.default, {
        align: x.default.Align.STRETCH,
        children: [(0, a.jsx)(x.default.Child, {
          wrap: !0,
          children: (0, a.jsx)(j.default, {
            backupCodes: e
          })
        }), t.mfaEnabled ? null : (0, a.jsx)(x.default, {
          align: x.default.Align.CENTER,
          basis: "323px",
          grow: 0,
          children: (0, a.jsx)("img", {
            src: l,
            className: k.userSettingsSecurityImage,
            alt: ""
          })
        })]
      })]
    })
  }
  renderConfirmModals() {
    let {
      shouldRenderOwnedGuildsModal: e,
      shouldRenderDeleteAccountConfirmModal: t,
      shouldRenderDisableAccountErrorModal: s,
      disableAccountErrorMessage: n
    } = this.state;
    if (e) {
      let e = () => this.setState({
        shouldRenderOwnedGuildsModal: !1
      });
      return (0, a.jsx)(c.DeclarativeConfirmModal, {
        dismissable: !0,
        header: G.default.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
        confirmText: G.default.Messages.OKAY,
        confirmButtonColor: c.ButtonColors.BRAND,
        onCancel: e,
        onConfirm: e,
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: G.default.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
        })
      })
    }
    if (t) {
      let e = () => this.setState({
        shouldRenderDeleteAccountConfirmModal: !1
      });
      return (0, a.jsx)(c.DeclarativeConfirmModal, {
        dismissable: !0,
        header: G.default.Messages.DELETE_ACCOUNT,
        confirmText: G.default.Messages.DELETE_ACCOUNT,
        cancelText: G.default.Messages.CANCEL,
        onCancel: e,
        onConfirm: () => (0, E.disableAccount)("", !0).then(e),
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: G.default.Messages.DELETE_ACCOUNT_BODY
        })
      })
    }
    if (s) {
      let e = () => this.setState({
        shouldRenderDisableAccountErrorModal: !1,
        disableAccountErrorMessage: null
      });
      return (0, a.jsx)(c.DeclarativeConfirmModal, {
        dismissable: !0,
        header: G.default.Messages.DELETE_ACCOUNT_ERROR,
        confirmText: G.default.Messages.OKAY,
        confirmButtonColor: c.ButtonColors.BRAND,
        onCancel: e,
        onConfirm: e,
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: n
        })
      })
    }
  }
  render() {
    if (this.props.hide) return (0, a.jsx)(T.default, {});
    let {
      currentUser: e
    } = this.props;
    return (0, a.jsxs)("div", {
      children: [this.renderConfirmModals(), this.renderAccountSettings(), e.isClaimed() ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.FormDivider, {
          className: H.marginTop40
        }), this.renderSecuritySettings(), (0, a.jsx)(c.FormDivider, {
          className: H.marginTop40
        })]
      }) : null, (0, a.jsx)(b.default, {
        className: H.marginTop40,
        currentUser: e,
        handleDisableAccount: () => this.handleDisableAccount(!1),
        handleDeleteAccount: () => this.handleDisableAccount(!0)
      })]
    })
  }
  handleDisableAccountError(e) {
    if (e.body.code === B.AbortCodes.INVALID_PASSWORD) throw e;
    this.setState({
      shouldRenderDisableAccountErrorModal: !0,
      disableAccountErrorMessage: e.body.message
    })
  }
  handleSubmitDisableAccount(e, t) {
    return (0, E.disableAccount)(e, t).then(B.NOOP, this.handleDisableAccountError)
  }
  handleDisableAccount() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        currentUser: t
      } = this.props,
      s = p.default.getGuilds();
    if (v.default.keys(s).filter(e => s[e].ownerId === t.id).length > 0) {
      this.setState({
        shouldRenderOwnedGuildsModal: !0
      });
      return
    }
    t.isClaimed() ? (0, c.openModal)(t => (0, a.jsx)(_.default, {
      ...t,
      handleSubmit: t => this.handleSubmitDisableAccount(t, e),
      title: e ? G.default.Messages.DELETE_ACCOUNT : G.default.Messages.DISABLE_ACCOUNT,
      actionText: e ? G.default.Messages.DELETE_ACCOUNT : G.default.Messages.DISABLE_ACCOUNT,
      children: e ? G.default.Messages.DELETE_ACCOUNT_BODY : G.default.Messages.DISABLE_ACCOUNT_BODY
    })) : this.setState({
      shouldRenderDeleteAccountConfirmModal: !0
    })
  }
  constructor(e) {
    super(e), this.state = {
      disableAccountErrorMessage: null,
      shouldRenderOwnedGuildsModal: !1,
      shouldRenderDeleteAccountConfirmModal: !1,
      shouldRenderDisableAccountErrorModal: !1
    }
  }
}
t.default = () => {
  let e = (0, d.useStateFromStores)([O.default], () => {
      let e = O.default.getCurrentUser();
      return o()(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e
    }),
    t = (0, d.useStateFromStores)([C.default], () => C.default.getBackupCodes()),
    s = (0, d.useStateFromStores)([A.default], () => A.default.hidePersonalInformation),
    n = (0, d.useStateFromStores)([L.default], () => L.default.theme),
    l = (0, h.useIsEligibleForPomelo)(),
    i = (0, g.useForceMigration)(),
    r = (0, d.useStateFromStores)([D.default], () => D.default.locale);
  return (0, a.jsx)(w, {
    theme: n,
    currentUser: e,
    backupCodes: t,
    hide: s,
    shouldRenderPomeloWarning: l,
    forceMigrationExperiment: i,
    locale: r
  })
}