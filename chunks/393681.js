s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(512722),
  l = s.n(o),
  c = s(442837),
  d = s(780384),
  _ = s(481060),
  E = s(816814),
  u = s(809206),
  T = s(497321),
  I = s(279837),
  S = s(952306),
  N = s(346585),
  C = s(347649),
  m = s(332473),
  A = s(303172),
  h = s(921801),
  g = s(484459),
  O = s(430824),
  p = s(325067),
  R = s(246946),
  x = s(594174),
  M = s(285952),
  D = s(474333),
  f = s(499150),
  P = s(709054),
  L = s(706454),
  Z = s(210887),
  b = s(418632),
  v = s(730820),
  j = s(888256),
  B = s(2719),
  U = s(194530),
  G = s(726985),
  F = s(981631),
  y = s(801461),
  V = s(689938),
  Y = s(363210),
  w = s(549856);
class k extends a.PureComponent {
  componentDidMount() {
let {
  currentUser: e
} = this.props;
(0, g.Z)(e.id, e.getAvatarURL(void 0, 80));
  }
  componentWillUnmount() {
E.Z.clearBackupCodes(), (0, u.Zy)();
  }
  renderAccountWarning() {
let {
  currentUser: e
} = this.props;
if (!e.isClaimed()) {
  let e = (0, n.jsxs)('section', {
    children: [
      (0, n.jsx)('div', {
        className: Y.accountWarningBodyText,
        children: V.Z.Messages.UNCLAIMED_ACCOUNT_BODY_2
      }),
      (0, n.jsx)(_.Button, {
        look: _.ButtonLooks.OUTLINED,
        size: _.ButtonSizes.SMALL,
        color: _.Button.Colors.WHITE,
        onClick: () => S.Z.openClaimAccountModal(),
        children: V.Z.Messages.CLAIM_ACCOUNT_LONG
      })
    ]
  });
  return (0, n.jsx)(_.FormNotice, {
    type: _.FormNotice.Types.DANGER,
    className: w.marginBottom20,
    imageData: {
      src: s(418558),
      width: 60,
      height: 60
    },
    title: V.Z.Messages.UNCLAIMED_ACCOUNT_TITLE,
    body: e
  });
}
if (null == e.email)
  return null;
if (!e.verified) {
  let e = (0, n.jsxs)('section', {
    children: [
      (0, n.jsx)('div', {
        className: Y.accountWarningBodyText,
        children: V.Z.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
      }),
      (0, n.jsx)(b.Z, {
        size: _.ButtonSizes.SMALL,
        color: _.Button.Colors.PRIMARY
      })
    ]
  });
  return (0, n.jsx)(_.FormNotice, {
    type: _.FormNotice.Types.PRIMARY,
    className: w.marginBottom20,
    imageData: {
      src: s(449125),
      width: 60,
      height: 60
    },
    title: V.Z.Messages.UNVERIFIED_EMAIL_TITLE,
    body: e
  });
}
  }
  renderPomeloWarning() {
return this.props.shouldRenderPomeloWarning ? (0, n.jsxs)(D.Z, {
  className: Y.accountWarningBodyText,
  messageType: D.Q.WARNING,
  children: [
    this.props.forceMigrationExperiment ? V.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({
      date: (0, N.IE)(this.props.locale)
    }) : V.Z.Messages.POMELO_ACTION_NEEDED.format(),
    ' ',
    '',
    (0, n.jsx)(f.Z, {
      className: Y.noticeTextButton,
      onClick: () => (0, A.Z)(y.Kq.USER_SETTINGS),
      children: V.Z.Messages.GET_STARTED
    })
  ]
}) : null;
  }
  renderAccountSettings() {
return (0, n.jsxs)(_.FormSection, {
  tag: _.FormTitleTags.H1,
  title: V.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
  className: Y.__invalid_userSettingsAccount,
  children: [
    this.renderPomeloWarning(),
    this.renderAccountWarning(),
    (0, n.jsx)(B.Z, {})
  ]
});
  }
  renderSecuritySettings() {
let {
  backupCodes: e,
  currentUser: t,
  theme: a
} = this.props, i = (0, d.wj)(a) ? s(555702) : s(610802);
return (0, n.jsxs)(_.FormSection, {
  className: r()(Y.userSettingsSecurity, w.marginTop40),
  title: V.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
  tag: 'h1',
  children: [
    t.mfaEnabled ? (0, n.jsx)(_.FormSection, {
      children: (0, n.jsxs)(_.FormTitle, {
        className: r()(Y.isEnabled, w.marginBottom20),
        children: [
          (0, n.jsx)('img', {
            alt: '',
            className: r()(Y.lockIcon),
            src: s(511391)
          }),
          V.Z.Messages.TWO_FA_ENABLED
        ]
      })
    }) : null,
    (0, n.jsx)(h.F, {
      setting: G.s6.ACCOUNT_CHANGE_PASSWORD,
      children: (0, n.jsx)('div', {
        children: (0, n.jsx)(_.Button, {
          size: _.Button.Sizes.SMALL,
          className: Y.changePasswordButton,
          onClick: () => (0, _.openModal)(e => (0, n.jsx)(U.default, {
            ...e,
            onSuccess: e.onClose
          })),
          children: V.Z.Messages.CHANGE_PASSWORD
        })
      })
    }),
    (0, n.jsx)(h.F, {
      setting: G.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
      children: (0, n.jsxs)(M.Z, {
        align: M.Z.Align.STRETCH,
        children: [
          (0, n.jsx)(M.Z.Child, {
            wrap: !0,
            children: (0, n.jsx)(v.Z, {
              backupCodes: e
            })
          }),
          t.mfaEnabled ? null : (0, n.jsx)(M.Z, {
            align: M.Z.Align.CENTER,
            basis: '323px',
            grow: 0,
            children: (0, n.jsx)('img', {
              src: i,
              className: Y.userSettingsSecurityImage,
              alt: ''
            })
          })
        ]
      })
    })
  ]
});
  }
  renderConfirmModals() {
let {
  shouldRenderOwnedGuildsModal: e,
  shouldRenderDeleteAccountConfirmModal: t,
  shouldRenderDisableAccountErrorModal: s,
  disableAccountErrorMessage: a
} = this.state;
if (e) {
  let e = () => this.setState({
    shouldRenderOwnedGuildsModal: !1
  });
  return (0, n.jsx)(_.DeclarativeConfirmModal, {
    dismissable: !0,
    header: V.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
    confirmText: V.Z.Messages.OKAY,
    confirmButtonColor: _.ButtonColors.BRAND,
    onCancel: e,
    onConfirm: e,
    children: (0, n.jsx)(_.Text, {
      variant: 'text-md/normal',
      children: V.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
    })
  });
}
if (t) {
  let e = () => this.setState({
    shouldRenderDeleteAccountConfirmModal: !1
  });
  return (0, n.jsx)(_.DeclarativeConfirmModal, {
    dismissable: !0,
    header: V.Z.Messages.DELETE_ACCOUNT,
    confirmText: V.Z.Messages.DELETE_ACCOUNT,
    cancelText: V.Z.Messages.CANCEL,
    onCancel: e,
    onConfirm: () => (0, u.ss)('', !0).then(e),
    children: (0, n.jsx)(_.Text, {
      variant: 'text-md/normal',
      children: V.Z.Messages.DELETE_ACCOUNT_BODY
    })
  });
}
if (s) {
  let e = () => this.setState({
    shouldRenderDisableAccountErrorModal: !1,
    disableAccountErrorMessage: null
  });
  return (0, n.jsx)(_.DeclarativeConfirmModal, {
    dismissable: !0,
    header: V.Z.Messages.DELETE_ACCOUNT_ERROR,
    confirmText: V.Z.Messages.OKAY,
    confirmButtonColor: _.ButtonColors.BRAND,
    onCancel: e,
    onConfirm: e,
    children: (0, n.jsx)(_.Text, {
      variant: 'text-md/normal',
      children: a
    })
  });
}
return null;
  }
  renderAccountRemovalSettings() {
let {
  currentUser: e
} = this.props;
return (0, n.jsx)(j.Z, {
  className: w.marginTop40,
  currentUser: e,
  handleDisableAccount: () => this.handleDisableAccount(!1),
  handleDeleteAccount: () => this.handleDisableAccount(!0)
});
  }
  render() {
return this.props.hide ? (0, n.jsx)(T.Z, {}) : (0, n.jsxs)('div', {
  children: [
    this.renderConfirmModals(),
    (0, n.jsx)(h.F, {
      setting: G.s6.ACCOUNT_PROFILE,
      children: this.renderAccountSettings()
    }),
    (0, n.jsx)(h.F, {
      setting: G.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
      children: this.renderSecuritySettings()
    }),
    (0, n.jsx)(h.F, {
      setting: G.s6.ACCOUNT_REMOVAL,
      children: this.renderAccountRemovalSettings()
    })
  ]
});
  }
  handleDisableAccountError(e) {
if (e.body.code === F.evJ.INVALID_PASSWORD)
  throw e;
this.setState({
  shouldRenderDisableAccountErrorModal: !0,
  disableAccountErrorMessage: e.body.message
});
  }
  handleSubmitDisableAccount(e, t) {
return (0, u.ss)(e, t).then(F.dG4, this.handleDisableAccountError);
  }
  handleDisableAccount() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
  {
    currentUser: t
  } = this.props,
  s = O.Z.getGuilds();
if (P.default.keys(s).filter(e => s[e].ownerId === t.id).length > 0) {
  this.setState({
    shouldRenderOwnedGuildsModal: !0
  });
  return;
}
t.isClaimed() ? (0, _.openModal)(t => (0, n.jsx)(I.default, {
  ...t,
  handleSubmit: t => this.handleSubmitDisableAccount(t, e),
  title: e ? V.Z.Messages.DELETE_ACCOUNT : V.Z.Messages.DISABLE_ACCOUNT,
  actionText: e ? V.Z.Messages.DELETE_ACCOUNT : V.Z.Messages.DISABLE_ACCOUNT,
  children: e ? V.Z.Messages.DELETE_ACCOUNT_BODY : V.Z.Messages.DISABLE_ACCOUNT_BODY
})) : this.setState({
  shouldRenderDeleteAccountConfirmModal: !0
});
  }
  constructor(e) {
super(e), this.state = {
  disableAccountErrorMessage: null,
  shouldRenderOwnedGuildsModal: !1,
  shouldRenderDeleteAccountConfirmModal: !1,
  shouldRenderDisableAccountErrorModal: !1
};
  }
}
t.Z = () => {
  let e = (0, c.e7)([x.default], () => {
  let e = x.default.getCurrentUser();
  return l()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
}),
t = (0, c.e7)([p.Z], () => p.Z.getBackupCodes()),
s = (0, c.e7)([R.Z], () => R.Z.hidePersonalInformation),
a = (0, c.e7)([Z.Z], () => Z.Z.theme),
i = (0, m.b)(),
r = (0, C.CC)(),
o = (0, c.e7)([L.default], () => L.default.locale);
  return (0, n.jsx)(k, {
theme: a,
currentUser: e,
backupCodes: t,
hide: s,
shouldRenderPomeloWarning: i,
forceMigrationExperiment: r,
locale: o
  });
};