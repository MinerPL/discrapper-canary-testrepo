t.d(s, {
    Z: function () {
        return z;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(442837),
    d = t(692547),
    _ = t(481060),
    u = t(230711),
    E = t(129861),
    T = t(279837),
    S = t(952306),
    I = t(299206),
    N = t(295474),
    m = t(144114),
    C = t(918505),
    A = t(332473),
    g = t(921801),
    h = t(485341),
    O = t(687158),
    p = t(518950),
    R = t(184325),
    x = t(867176),
    f = t(25990),
    M = t(594174),
    D = t(572004),
    P = t(51144),
    L = t(998502),
    b = t(695346),
    Z = t(461877),
    v = t(726985),
    j = t(981631),
    B = t(815660),
    U = t(801461),
    G = t(689938),
    F = t(523193);
let y = L.ZP.getEnableHardwareAcceleration() ? _.AnimatedAvatar : _.Avatar;
function V(e) {
    var s, i;
    let { className: o, user: l } = e,
        c = a.useRef(null),
        u = (0, C.o9)(),
        E = (0, A.b)(),
        T = (0, N.gS)(),
        S = null !== (i = null == T ? void 0 : null === (s = T.nick) || void 0 === s ? void 0 : s[0]) && void 0 !== i ? i : null,
        [I, m] = a.useState(!1);
    a.useEffect(() => {
        m(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [l.username]);
    let g = !l.isClaimed(),
        h = (u && !l.isPomelo() && !l.hasVerifiedEmailOrPhone()) || g,
        O = h ? G.Z.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
    return (0, n.jsxs)('div', {
        className: r()(F.field, o),
        children: [
            (0, n.jsx)('div', {
                className: F.constrainedRow,
                children: (0, n.jsxs)('div', {
                    className: F.usernameRow,
                    children: [
                        (0, n.jsx)(_.FormTitle, {
                            className: F.fieldTitle,
                            children: G.Z.Messages.USER_SETTINGS_LABEL_USERNAME
                        }),
                        (0, n.jsxs)('div', {
                            className: F.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, n.jsx)(_.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: l.username
                                }),
                                !l.isPomelo() &&
                                    (0, n.jsxs)(_.Text, {
                                        tag: 'span',
                                        color: 'header-secondary',
                                        variant: 'text-md/normal',
                                        children: ['#', l.discriminator]
                                    })
                            ]
                        })
                    ]
                })
            }),
            E &&
                (0, n.jsx)('div', {
                    className: F.pomeloWarning,
                    children: (0, n.jsx)(_.Tooltip, {
                        text: G.Z.Messages.ACTION_NEEDED,
                        children: (e) =>
                            (0, n.jsx)(_.CircleWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            null != S &&
                (0, n.jsx)('div', {
                    className: F.pomeloWarning,
                    children: (0, n.jsx)(_.Tooltip, {
                        text: S,
                        'aria-label': !1,
                        children: (e) =>
                            (0, n.jsx)(_.CircleWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            (0, n.jsx)(_.Tooltip, {
                text: O,
                children: (e) =>
                    (0, n.jsx)(_.Button, {
                        ...e,
                        disabled: h,
                        size: _.Button.Sizes.SMALL,
                        className: F.fieldButton,
                        color: _.Button.Colors.PRIMARY,
                        'aria-label': G.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
                        onClick: () =>
                            (0, _.openModalLazy)(async () => {
                                if (E) {
                                    let { default: e } = await Promise.all([t.e('85342'), t.e('2137')]).then(t.bind(t, 193049));
                                    return (s) =>
                                        (0, n.jsx)(e, {
                                            source: U.Kq.USER_SETTINGS_EDIT,
                                            ...s
                                        });
                                }
                                {
                                    let { default: e } = await Promise.all([t.e('75492'), t.e('84956'), t.e('42758')]).then(t.bind(t, 2702));
                                    return (s) => (0, n.jsx)(e, { ...s });
                                }
                            }),
                        children: I ? G.Z.Messages.DISAPPROVAL : G.Z.Messages.EDIT
                    })
            })
        ]
    });
}
function Y(e) {
    var s, t;
    let { user: i, className: o } = e,
        l = (0, N.gS)(),
        c = null !== (t = null == l ? void 0 : null === (s = l.nick) || void 0 === s ? void 0 : s[0]) && void 0 !== t ? t : null,
        u = P.ZP.getGlobalName(i),
        E = a.useRef(null),
        [T, S] = a.useState(!1);
    return (
        a.useEffect(() => {
            S(null != E.current && E.current.scrollWidth > E.current.clientWidth);
        }, [u]),
        (0, n.jsxs)('div', {
            className: r()(F.field, o),
            children: [
                (0, n.jsx)('div', {
                    className: F.constrainedRow,
                    children: (0, n.jsxs)('div', {
                        className: F.usernameRow,
                        children: [
                            (0, n.jsx)(_.FormTitle, {
                                className: F.fieldTitle,
                                children: G.Z.Messages.DISPLAY_NAME
                            }),
                            (0, n.jsx)('div', {
                                className: F.usernameInnerRow,
                                ref: E,
                                children: (0, n.jsx)(_.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == u ? G.Z.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : u
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, n.jsx)('div', {
                        className: F.pomeloWarning,
                        children: (0, n.jsx)(_.Tooltip, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, n.jsx)(_.CircleWarningIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    color: d.Z.colors.STATUS_WARNING.css
                                })
                        })
                    }),
                (0, n.jsx)(_.Button, {
                    className: F.fieldButton,
                    size: _.Button.Sizes.SMALL,
                    color: _.Button.Colors.PRIMARY,
                    'aria-label': G.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
                    onClick: K,
                    children: T ? G.Z.Messages.DISAPPROVAL : G.Z.Messages.EDIT
                })
            ]
        })
    );
}
function w(e) {
    let { text: s, censor: t, revealLabel: i, hideLabel: r } = e,
        [o, l] = a.useState(!1),
        c = o ? s : t(s);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            c,
            (0, n.jsx)(_.Button, {
                look: _.Button.Looks.LINK,
                size: _.Button.Sizes.MIN,
                color: _.Button.Colors.LINK,
                'aria-label': o ? r : i,
                onClick: () => l(!o),
                children: o ? G.Z.Messages.HIDE : G.Z.Messages.REVEAL
            })
        ]
    });
}
function k(e) {
    let s,
        { className: a, user: i } = e;
    if (i.isClaimed()) {
        if (null == i.email)
            s = {
                buttonText: G.Z.Messages.ADD,
                buttonAriaLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
                buttonColor: _.Button.Colors.PRIMARY,
                valueMessage: G.Z.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
                handleClick: () =>
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([t.e('9343'), t.e('12409')]).then(t.bind(t, 642298));
                        return (s) => (0, n.jsx)(e, { ...s });
                    })
            };
        else {
            let { email: e } = i;
            s = {
                buttonText: G.Z.Messages.EDIT,
                buttonAriaLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
                buttonColor: _.Button.Colors.PRIMARY,
                valueMessage: (0, n.jsx)(w, {
                    text: e,
                    censor: Z.E,
                    revealLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
                    hideLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
                }),
                handleClick: () =>
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([t.e('9343'), t.e('12409')]).then(t.bind(t, 642298));
                        return (s) => (0, n.jsx)(e, { ...s });
                    })
            };
        }
    } else
        s = {
            buttonText: G.Z.Messages.CLAIM_ACCOUNT_SHORT,
            buttonAriaLabel: G.Z.Messages.CLAIM_ACCOUNT_SHORT,
            buttonColor: _.Button.Colors.BRAND,
            valueMessage: G.Z.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
            handleClick: () => S.Z.openClaimAccountModal()
        };
    return (0, n.jsxs)('div', {
        className: r()(F.field, a),
        children: [
            (0, n.jsx)('div', {
                className: F.constrainedRow,
                children: (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(_.FormTitle, {
                            className: F.fieldTitle,
                            children: G.Z.Messages.USER_SETTINGS_LABEL_EMAIL
                        }),
                        (0, n.jsx)('div', {
                            children: (0, n.jsx)(_.Text, {
                                tag: 'span',
                                color: 'header-primary',
                                variant: 'text-md/normal',
                                children: s.valueMessage
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(_.Button, {
                className: F.fieldButton,
                size: _.Button.Sizes.SMALL,
                color: _.Button.Colors.PRIMARY,
                'aria-label': s.buttonAriaLabel,
                onClick: s.handleClick,
                children: s.buttonText
            })
        ]
    });
}
function H(e) {
    let s,
        { className: a, user: i } = e;
    if (!i.isClaimed()) return null;
    let { phone: o, email: l } = i,
        c = null != o;
    return (
        (s = c
            ? (0, n.jsx)(w, {
                  text: o,
                  censor: Z.n,
                  revealLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
                  hideLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
              })
            : G.Z.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER),
        (0, n.jsxs)('div', {
            className: r()(F.field, a),
            children: [
                (0, n.jsx)('div', {
                    className: F.constrainedRow,
                    children: (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)(_.FormTitle, {
                                className: F.fieldTitle,
                                children: G.Z.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
                            }),
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(_.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: s
                                })
                            })
                        ]
                    })
                }),
                (0, n.jsxs)('div', {
                    className: F.fieldButtonList,
                    children: [
                        c && null != l
                            ? (0, n.jsx)(_.Button, {
                                  className: r()(F.fieldButton, F.removeButton),
                                  size: _.Button.Sizes.SMALL,
                                  look: _.Button.Looks.LINK,
                                  color: _.Button.Colors.PRIMARY,
                                  'aria-label': G.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
                                  onClick: function () {
                                      (0, _.openModal)((e) =>
                                          (0, n.jsx)(T.default, {
                                              ...e,
                                              title: G.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
                                              children: i.hasFlag(j.xW$.MFA_SMS) ? G.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
                                              actionText: G.Z.Messages.REMOVE,
                                              handleSubmit: (e) => m.Z.removePhone(e, m.L.USER_SETTINGS_UPDATE)
                                          })
                                      );
                                  },
                                  children: G.Z.Messages.REMOVE
                              })
                            : null,
                        (0, n.jsx)(_.Button, {
                            className: F.fieldButton,
                            size: _.Button.Sizes.SMALL,
                            color: _.Button.Colors.PRIMARY,
                            'aria-label': c ? G.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : G.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
                            onClick: function () {
                                (0, _.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(t.bind(t, 607018));
                                        return (s) =>
                                            (0, n.jsx)(e, {
                                                reason: m.L.USER_SETTINGS_UPDATE,
                                                ...s
                                            });
                                    },
                                    { modalKey: B.M }
                                );
                            },
                            children: c ? G.Z.Messages.EDIT : G.Z.Messages.ADD
                        })
                    ]
                })
            ]
        })
    );
}
function W(e) {
    let { user: s } = e,
        t = (0, I.Z)({
            id: s.id,
            label: G.Z.Messages.COPY_ID_USER
        });
    return b.Sb.useSetting() && D.wS
        ? (0, n.jsx)(_.Popout, {
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, n.jsx)(_.Menu, {
                      onClose: s,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': G.Z.Messages.USER_MORE_ACTIONS_MENU_LABEL,
                      children: t
                  });
              },
              children: (e) =>
                  (0, n.jsx)(_.Clickable, {
                      ...e,
                      className: F.overflowMenuButton,
                      'aria-label': G.Z.Messages.ACTIONS,
                      children: (0, n.jsx)(_.MoreHorizontalIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: F.overflowMenuIcon
                      })
                  })
          })
        : null;
}
function K() {
    u.Z.setSection(j.oAB.PROFILE_CUSTOMIZATION);
}
function z() {
    var e;
    let s = (0, c.e7)([M.default], () => {
            let e = M.default.getCurrentUser();
            return l()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
        }),
        t = (0, O.ZP)(s.id),
        a = (0, h.Z)(t),
        i = b.co.useSetting(),
        r = (0, c.e7)([f.Z], () => f.Z.getErrors()),
        o = null == r ? void 0 : null === (e = r.avatar) || void 0 === e ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: u } = (0, p.Z)({
            user: s,
            size: _.AvatarSizes.SIZE_80
        });
    return (0, n.jsxs)('div', {
        className: F.accountProfileCard,
        children: [
            (0, n.jsx)(x.b, {
                user: s,
                displayProfile: t,
                avatarSize: _.AvatarSizes.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0
            }),
            (0, n.jsxs)('div', {
                className: F.userInfo,
                children: [
                    (0, n.jsx)(y, {
                        className: F.avatar,
                        src: d,
                        avatarDecoration: u,
                        status: i,
                        size: _.AvatarSizes.SIZE_80,
                        'aria-label': s.username
                    }),
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsxs)('div', {
                                className: F.profileCardUsernameRow,
                                children: [
                                    (0, n.jsx)(E.Z, {
                                        user: s,
                                        className: F.userTag,
                                        discriminatorClass: F.discriminator
                                    }),
                                    (0, n.jsx)(W, { user: s })
                                ]
                            }),
                            (0, n.jsx)(R.Z, {
                                badges: a,
                                className: F.badgeList,
                                badgeClassName: F.badge
                            })
                        ]
                    }),
                    (0, n.jsx)(_.Button, {
                        onClick: K,
                        size: _.Button.Sizes.SMALL,
                        children: G.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: F.background,
                children: [
                    null != o
                        ? (0, n.jsx)(_.Text, {
                              className: F.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: o
                          })
                        : null,
                    (0, n.jsxs)('div', {
                        className: F.fieldList,
                        children: [
                            (0, n.jsx)(g.F, {
                                setting: v.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, n.jsx)(Y, {
                                    className: F.fieldSpacerBottom,
                                    user: s
                                })
                            }),
                            (0, n.jsx)(g.F, {
                                setting: v.s6.ACCOUNT_USERNAME,
                                children: (0, n.jsx)(V, { user: s })
                            }),
                            (0, n.jsx)(g.F, {
                                setting: v.s6.ACCOUNT_EMAIL,
                                children: (0, n.jsx)(k, {
                                    className: F.fieldSpacer,
                                    user: s
                                })
                            }),
                            (0, n.jsx)(g.F, {
                                setting: v.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, n.jsx)(H, {
                                    className: F.fieldSpacer,
                                    user: s
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
