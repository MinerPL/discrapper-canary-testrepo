"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Q
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("442837"),
  u = s("692547"),
  c = s("481060"),
  S = s("230711"),
  E = s("129861"),
  T = s("279837"),
  _ = s("952306"),
  f = s("299206"),
  m = s("295474"),
  g = s("144114"),
  h = s("918505"),
  N = s("332473"),
  I = s("318661"),
  p = s("735336"),
  C = s("184325"),
  A = s("204197"),
  O = s("25990"),
  x = s("594174"),
  R = s("808268"),
  M = s("759231"),
  v = s("572004"),
  D = s("51144"),
  L = s("998502"),
  P = s("695346"),
  j = s("461877"),
  b = s("981631"),
  U = s("815660"),
  y = s("801461"),
  B = s("228168"),
  F = s("689938"),
  G = s("557013");
let k = L.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

function H(e) {
  var t, l;
  let {
    className: r,
    user: o
  } = e, d = n.useRef(null), S = (0, h.usePomeloEligibility)(), E = (0, N.useIsEligibleForPomelo)(), T = (0, m.useGuildAutomodProfileQuarantineErrors)(), _ = null !== (l = null == T ? void 0 : null === (t = T.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : null, [f, g] = n.useState(!1);
  n.useEffect(() => {
    g(null != d.current && d.current.scrollWidth > d.current.clientWidth)
  }, [o.username]);
  let I = !o.isClaimed(),
    p = S && !o.isPomelo() && !o.hasVerifiedEmailOrPhone() || I,
    C = p ? F.default.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
  return (0, a.jsxs)("div", {
    className: i()(G.field, r),
    children: [(0, a.jsx)("div", {
      className: G.constrainedRow,
      children: (0, a.jsxs)("div", {
        className: G.usernameRow,
        children: [(0, a.jsx)(c.FormTitle, {
          className: G.fieldTitle,
          children: F.default.Messages.USER_SETTINGS_LABEL_USERNAME
        }), (0, a.jsxs)("div", {
          className: G.usernameInnerRow,
          ref: d,
          children: [(0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: o.username
          }), !o.isPomelo() && (0, a.jsxs)(c.Text, {
            tag: "span",
            color: "header-secondary",
            variant: "text-md/normal",
            children: ["#", o.discriminator]
          })]
        })]
      })
    }), E && (0, a.jsx)("div", {
      className: G.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: F.default.Messages.ACTION_NEEDED,
        children: e => (0, a.jsx)(M.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), null != _ && (0, a.jsx)("div", {
      className: G.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: _,
        "aria-label": !1,
        children: e => (0, a.jsx)(M.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), (0, a.jsx)(c.Tooltip, {
      text: C,
      children: e => (0, a.jsx)(c.Button, {
        ...e,
        disabled: p,
        size: c.Button.Sizes.SMALL,
        className: G.fieldButton,
        color: c.Button.Colors.PRIMARY,
        "aria-label": F.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
        onClick: () => (0, c.openModalLazy)(async () => {
          if (E) {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("85342")]).then(s.bind(s, "193049"));
            return t => (0, a.jsx)(e, {
              source: y.PomeloEntrypoints.USER_SETTINGS_EDIT,
              ...t
            })
          } {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("75492"), s.e("42758")]).then(s.bind(s, "2702"));
            return t => (0, a.jsx)(e, {
              ...t
            })
          }
        }),
        children: f ? F.default.Messages.DISAPPROVAL : F.default.Messages.EDIT
      })
    })]
  })
}

function w(e) {
  var t, s;
  let {
    user: l,
    className: r
  } = e, o = (0, m.useGuildAutomodProfileQuarantineErrors)(), d = null !== (s = null == o ? void 0 : null === (t = o.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : null, S = D.default.getGlobalName(l), E = n.useRef(null), [T, _] = n.useState(!1);
  return n.useEffect(() => {
    _(null != E.current && E.current.scrollWidth > E.current.clientWidth)
  }, [S]), (0, a.jsxs)("div", {
    className: i()(G.field, r),
    children: [(0, a.jsx)("div", {
      className: G.constrainedRow,
      children: (0, a.jsxs)("div", {
        className: G.usernameRow,
        children: [(0, a.jsx)(c.FormTitle, {
          className: G.fieldTitle,
          children: F.default.Messages.DISPLAY_NAME
        }), (0, a.jsx)("div", {
          className: G.usernameInnerRow,
          ref: E,
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == S ? F.default.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : S
          })
        })]
      })
    }), null != d && (0, a.jsx)("div", {
      className: G.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: d,
        "aria-label": !1,
        children: e => (0, a.jsx)(M.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), (0, a.jsx)(c.Button, {
      className: G.fieldButton,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.PRIMARY,
      "aria-label": F.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
      onClick: z,
      children: T ? F.default.Messages.DISAPPROVAL : F.default.Messages.EDIT
    })]
  })
}

function V(e) {
  let {
    text: t,
    censor: s,
    revealLabel: l,
    hideLabel: i
  } = e, [r, o] = n.useState(!1), d = r ? t : s(t);
  return (0, a.jsxs)(a.Fragment, {
    children: [d, (0, a.jsx)(c.Button, {
      look: c.Button.Looks.LINK,
      size: c.Button.Sizes.MIN,
      color: c.Button.Colors.LINK,
      "aria-label": r ? i : l,
      onClick: () => o(!r),
      children: r ? F.default.Messages.HIDE : F.default.Messages.REVEAL
    })]
  })
}

function Y(e) {
  let t, {
    className: n,
    user: l
  } = e;
  if (l.isClaimed()) {
    if (null == l.email) t = {
      buttonText: F.default.Messages.ADD,
      buttonAriaLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
      buttonColor: c.Button.Colors.PRIMARY,
      valueMessage: F.default.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
      handleClick: () => (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("9343")]).then(s.bind(s, "642298"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    };
    else {
      let {
        email: e
      } = l;
      t = {
        buttonText: F.default.Messages.EDIT,
        buttonAriaLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
        buttonColor: c.Button.Colors.PRIMARY,
        valueMessage: (0, a.jsx)(V, {
          text: e,
          censor: j.censorEmail,
          revealLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
          hideLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
        }),
        handleClick: () => (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("9343")]).then(s.bind(s, "642298"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      }
    }
  } else t = {
    buttonText: F.default.Messages.CLAIM_ACCOUNT_SHORT,
    buttonAriaLabel: F.default.Messages.CLAIM_ACCOUNT_SHORT,
    buttonColor: c.Button.Colors.BRAND,
    valueMessage: F.default.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
    handleClick: () => _.default.openClaimAccountModal()
  };
  return (0, a.jsxs)("div", {
    className: i()(G.field, n),
    children: [(0, a.jsx)("div", {
      className: G.constrainedRow,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.FormTitle, {
          className: G.fieldTitle,
          children: F.default.Messages.USER_SETTINGS_LABEL_EMAIL
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t.valueMessage
          })
        })]
      })
    }), (0, a.jsx)(c.Button, {
      className: G.fieldButton,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.PRIMARY,
      "aria-label": t.buttonAriaLabel,
      onClick: t.handleClick,
      children: t.buttonText
    })]
  })
}

function K(e) {
  let t, {
    className: n,
    user: l
  } = e;
  if (!l.isClaimed()) return null;
  let {
    phone: r,
    email: o
  } = l, d = null != r;
  return t = d ? (0, a.jsx)(V, {
    text: r,
    censor: j.censorPhone,
    revealLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
    hideLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
  }) : F.default.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER, (0, a.jsxs)("div", {
    className: i()(G.field, n),
    children: [(0, a.jsx)("div", {
      className: G.constrainedRow,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.FormTitle, {
          className: G.fieldTitle,
          children: F.default.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t
          })
        })]
      })
    }), (0, a.jsxs)("div", {
      className: G.fieldButtonList,
      children: [d && null != o ? (0, a.jsx)(c.Button, {
        className: i()(G.fieldButton, G.removeButton),
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        "aria-label": F.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, c.openModal)(e => (0, a.jsx)(T.default, {
            ...e,
            title: F.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
            children: l.hasFlag(b.UserFlags.MFA_SMS) ? F.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
            actionText: F.default.Messages.REMOVE,
            handleSubmit: e => g.default.removePhone(e, g.ChangePhoneReason.USER_SETTINGS_UPDATE)
          }))
        },
        children: F.default.Messages.REMOVE
      }) : null, (0, a.jsx)(c.Button, {
        className: G.fieldButton,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.PRIMARY,
        "aria-label": d ? F.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : F.default.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(s.bind(s, "607018"));
            return t => (0, a.jsx)(e, {
              reason: g.ChangePhoneReason.USER_SETTINGS_UPDATE,
              ...t
            })
          }, {
            modalKey: U.PHONE_VERIFICATION_MODAL_KEY
          })
        },
        children: d ? F.default.Messages.EDIT : F.default.Messages.ADD
      })]
    })]
  })
}

function W(e) {
  let {
    user: t
  } = e, s = (0, f.default)({
    id: t.id,
    label: F.default.Messages.COPY_ID_USER
  });
  return P.DeveloperMode.useSetting() && v.SUPPORTS_COPY ? (0, a.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(c.Menu, {
        onClose: t,
        onSelect: void 0,
        navId: "copy-id",
        "aria-label": F.default.Messages.USER_MORE_ACTIONS_MENU_LABEL,
        children: s
      })
    },
    children: e => (0, a.jsx)(c.Clickable, {
      ...e,
      className: G.overflowMenuButton,
      "aria-label": F.default.Messages.ACTIONS,
      children: (0, a.jsx)(R.default, {
        className: G.overflowMenuIcon,
        height: 24,
        width: 24
      })
    })
  }) : null
}

function z() {
  S.default.setSection(b.UserSettingsSections.PROFILE_CUSTOMIZATION)
}

function Q() {
  var e;
  let t = (0, d.useStateFromStores)([x.default], () => {
      let e = x.default.getCurrentUser();
      return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
    }),
    s = (0, I.default)(t.id),
    n = P.StatusSetting.useSetting(),
    l = (0, d.useStateFromStores)([O.default], () => O.default.getErrors()),
    i = null == l ? void 0 : null === (e = l.avatar) || void 0 === e ? void 0 : e[0],
    {
      avatarSrc: r,
      avatarDecorationSrc: u
    } = (0, A.default)({
      user: t,
      size: c.AvatarSizes.SIZE_80
    });
  return (0, a.jsxs)("div", {
    className: G.accountProfileCard,
    children: [(0, a.jsx)(p.default, {
      displayProfile: s,
      user: t,
      allowEdit: !1,
      guildId: void 0,
      profileType: B.UserProfileTypes.SETTINGS
    }), (0, a.jsxs)("div", {
      className: G.userInfo,
      children: [(0, a.jsx)(k, {
        className: G.avatar,
        src: r,
        avatarDecoration: u,
        status: n,
        size: c.AvatarSizes.SIZE_80,
        "aria-label": t.username
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: G.profileCardUsernameRow,
          children: [(0, a.jsx)(E.default, {
            user: t,
            className: G.userTag,
            discriminatorClass: G.discriminator
          }), (0, a.jsx)(W, {
            user: t
          })]
        }), (0, a.jsx)(C.default, {
          className: G.badgeList,
          user: t,
          size: C.BadgeSizes.SIZE_22
        })]
      }), (0, a.jsx)(c.Button, {
        onClick: z,
        size: c.Button.Sizes.SMALL,
        children: F.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE
      })]
    }), (0, a.jsxs)("div", {
      className: G.background,
      children: [null != i ? (0, a.jsx)(c.Text, {
        className: G.avatarError,
        variant: "text-xs/normal",
        color: "text-danger",
        children: i
      }) : null, (0, a.jsxs)("div", {
        className: G.fieldList,
        children: [(0, a.jsx)(w, {
          className: G.fieldSpacerBottom,
          user: t
        }), (0, a.jsx)(H, {
          user: t
        }), (0, a.jsx)(Y, {
          className: G.fieldSpacer,
          user: t
        }), (0, a.jsx)(K, {
          className: G.fieldSpacer,
          user: t
        })]
      })]
    })]
  })
}