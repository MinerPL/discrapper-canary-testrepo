t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(442837),
    d = t(780384),
    _ = t(481060),
    u = t(816814),
    E = t(809206),
    T = t(497321),
    S = t(279837),
    I = t(952306),
    N = t(600164),
    m = t(690221),
    C = t(346585),
    A = t(347649),
    g = t(332473),
    h = t(303172),
    O = t(921801),
    p = t(484459),
    R = t(430824),
    x = t(325067),
    f = t(246946),
    M = t(594174),
    D = t(709054),
    P = t(706454),
    L = t(210887),
    b = t(418632),
    Z = t(730820),
    v = t(888256),
    j = t(2719),
    B = t(194530),
    U = t(726985),
    G = t(981631),
    F = t(801461),
    y = t(689938),
    V = t(78075),
    Y = t(224499);
class w extends a.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, p.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        u.Z.clearBackupCodes(), (0, E.Zy)();
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, n.jsxs)('section', {
                children: [
                    (0, n.jsx)('div', {
                        className: V.accountWarningBodyText,
                        children: y.Z.Messages.UNCLAIMED_ACCOUNT_BODY_2
                    }),
                    (0, n.jsx)(_.Button, {
                        look: _.ButtonLooks.OUTLINED,
                        size: _.ButtonSizes.SMALL,
                        color: _.Button.Colors.WHITE,
                        onClick: () => I.Z.openClaimAccountModal(),
                        children: y.Z.Messages.CLAIM_ACCOUNT_LONG
                    })
                ]
            });
            return (0, n.jsx)(_.FormNotice, {
                type: _.FormNotice.Types.DANGER,
                className: Y.marginBottom20,
                imageData: {
                    src: t(418558),
                    width: 60,
                    height: 60
                },
                title: y.Z.Messages.UNCLAIMED_ACCOUNT_TITLE,
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, n.jsxs)('section', {
                children: [
                    (0, n.jsx)('div', {
                        className: V.accountWarningBodyText,
                        children: y.Z.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
                    }),
                    (0, n.jsx)(b.Z, {
                        size: _.ButtonSizes.SMALL,
                        color: _.Button.Colors.PRIMARY
                    })
                ]
            });
            return (0, n.jsx)(_.FormNotice, {
                type: _.FormNotice.Types.PRIMARY,
                className: Y.marginBottom20,
                imageData: {
                    src: t(449125),
                    width: 60,
                    height: 60
                },
                title: y.Z.Messages.UNVERIFIED_EMAIL_TITLE,
                body: e
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, n.jsxs)(_.HelpMessage, {
                  className: V.accountWarningBodyText,
                  messageType: _.HelpMessageTypes.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? y.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({ date: (0, C.IE)(this.props.locale) }) : y.Z.Messages.POMELO_ACTION_NEEDED.format(),
                      ' ',
                      '',
                      (0, n.jsx)(m.Z, {
                          className: V.noticeTextButton,
                          onClick: () => (0, h.Z)(F.Kq.USER_SETTINGS),
                          children: y.Z.Messages.GET_STARTED
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        return (0, n.jsxs)(_.FormSection, {
            tag: _.FormTitleTags.H1,
            title: y.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
            className: V.__invalid_userSettingsAccount,
            children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, n.jsx)(j.Z, {})]
        });
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: s, theme: a } = this.props,
            i = (0, d.wj)(a) ? t(555702) : t(610802);
        return (0, n.jsxs)(_.FormSection, {
            className: r()(V.userSettingsSecurity, Y.marginTop40),
            title: y.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            tag: 'h1',
            children: [
                s.mfaEnabled
                    ? (0, n.jsx)(_.FormSection, {
                          children: (0, n.jsxs)(_.FormTitle, {
                              className: r()(V.isEnabled, Y.marginBottom20),
                              children: [
                                  (0, n.jsx)('img', {
                                      alt: '',
                                      className: r()(V.lockIcon),
                                      src: t(511391)
                                  }),
                                  y.Z.Messages.TWO_FA_ENABLED
                              ]
                          })
                      })
                    : null,
                (0, n.jsx)(O.F, {
                    setting: U.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, n.jsx)('div', {
                        children: (0, n.jsx)(_.Button, {
                            size: _.Button.Sizes.SMALL,
                            className: V.changePasswordButton,
                            onClick: () =>
                                (0, _.openModal)((e) =>
                                    (0, n.jsx)(B.default, {
                                        ...e,
                                        onSuccess: e.onClose
                                    })
                                ),
                            children: y.Z.Messages.CHANGE_PASSWORD
                        })
                    })
                }),
                (0, n.jsx)(O.F, {
                    setting: U.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, n.jsxs)(N.Z, {
                        align: N.Z.Align.STRETCH,
                        children: [
                            (0, n.jsx)(N.Z.Child, {
                                wrap: !0,
                                children: (0, n.jsx)(Z.Z, { backupCodes: e })
                            }),
                            s.mfaEnabled
                                ? null
                                : (0, n.jsx)(N.Z, {
                                      align: N.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, n.jsx)('img', {
                                          src: i,
                                          className: V.userSettingsSecurityImage,
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
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: s, shouldRenderDisableAccountErrorModal: t, disableAccountErrorMessage: a } = this.state;
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, n.jsx)(_.DeclarativeConfirmModal, {
                dismissable: !0,
                header: y.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
                confirmText: y.Z.Messages.OKAY,
                confirmButtonColor: _.ButtonColors.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, n.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    children: y.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
                })
            });
        }
        if (s) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, n.jsx)(_.DeclarativeConfirmModal, {
                dismissable: !0,
                header: y.Z.Messages.DELETE_ACCOUNT,
                confirmText: y.Z.Messages.DELETE_ACCOUNT,
                cancelText: y.Z.Messages.CANCEL,
                onCancel: e,
                onConfirm: () => (0, E.ss)('', !0).then(e),
                children: (0, n.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    children: y.Z.Messages.DELETE_ACCOUNT_BODY
                })
            });
        }
        if (t) {
            let e = () =>
                this.setState({
                    shouldRenderDisableAccountErrorModal: !1,
                    disableAccountErrorMessage: null
                });
            return (0, n.jsx)(_.DeclarativeConfirmModal, {
                dismissable: !0,
                header: y.Z.Messages.DELETE_ACCOUNT_ERROR,
                confirmText: y.Z.Messages.OKAY,
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
        let { currentUser: e } = this.props;
        return (0, n.jsx)(v.Z, {
            className: Y.marginTop40,
            currentUser: e,
            handleDisableAccount: () => this.handleDisableAccount(!1),
            handleDeleteAccount: () => this.handleDisableAccount(!0)
        });
    }
    render() {
        return this.props.hide
            ? (0, n.jsx)(T.Z, {})
            : (0, n.jsxs)('div', {
                  children: [
                      this.renderConfirmModals(),
                      (0, n.jsx)(O.F, {
                          setting: U.s6.ACCOUNT_PROFILE,
                          children: this.renderAccountSettings()
                      }),
                      (0, n.jsx)(O.F, {
                          setting: U.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                          children: this.renderSecuritySettings()
                      }),
                      (0, n.jsx)(O.F, {
                          setting: U.s6.ACCOUNT_REMOVAL,
                          children: this.renderAccountRemovalSettings()
                      })
                  ]
              });
    }
    handleDisableAccountError(e) {
        if (e.body.code === G.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, s) {
        return (0, E.ss)(e, s).then(G.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: s } = this.props,
            t = R.Z.getGuilds();
        if (D.default.keys(t).filter((e) => t[e].ownerId === s.id).length > 0) {
            this.setState({ shouldRenderOwnedGuildsModal: !0 });
            return;
        }
        s.isClaimed()
            ? (0, _.openModal)((s) =>
                  (0, n.jsx)(S.default, {
                      ...s,
                      handleSubmit: (s) => this.handleSubmitDisableAccount(s, e),
                      title: e ? y.Z.Messages.DELETE_ACCOUNT : y.Z.Messages.DISABLE_ACCOUNT,
                      actionText: e ? y.Z.Messages.DELETE_ACCOUNT : y.Z.Messages.DISABLE_ACCOUNT,
                      children: e ? y.Z.Messages.DELETE_ACCOUNT_BODY : y.Z.Messages.DISABLE_ACCOUNT_BODY
                  })
              )
            : this.setState({ shouldRenderDeleteAccountConfirmModal: !0 });
    }
    constructor(e) {
        super(e),
            (this.state = {
                disableAccountErrorMessage: null,
                shouldRenderOwnedGuildsModal: !1,
                shouldRenderDeleteAccountConfirmModal: !1,
                shouldRenderDisableAccountErrorModal: !1
            });
    }
}
s.Z = () => {
    let e = (0, c.e7)([M.default], () => {
            let e = M.default.getCurrentUser();
            return l()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        s = (0, c.e7)([x.Z], () => x.Z.getBackupCodes()),
        t = (0, c.e7)([f.Z], () => f.Z.hidePersonalInformation),
        a = (0, c.e7)([L.Z], () => L.Z.theme),
        i = (0, g.b)(),
        r = (0, A.CC)(),
        o = (0, c.e7)([P.default], () => P.default.locale);
    return (0, n.jsx)(w, {
        theme: a,
        currentUser: e,
        backupCodes: s,
        hide: t,
        shouldRenderPomeloWarning: i,
        forceMigrationExperiment: r,
        locale: o
    });
};
