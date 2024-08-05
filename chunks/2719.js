s.d(t, {
  Z: function() {
return Q;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(512722),
  l = s.n(o),
  c = s(442837),
  d = s(692547),
  _ = s(481060),
  E = s(230711),
  u = s(129861),
  T = s(279837),
  I = s(952306),
  S = s(299206),
  N = s(295474),
  C = s(144114),
  m = s(918505),
  A = s(332473),
  g = s(921801),
  h = s(290421),
  O = s(318661),
  p = s(80132),
  R = s(735336),
  x = s(204197),
  M = s(25990),
  f = s(594174),
  D = s(572004),
  P = s(51144),
  L = s(998502),
  b = s(695346),
  Z = s(461877),
  v = s(726985),
  j = s(981631),
  B = s(815660),
  U = s(801461),
  G = s(228168),
  F = s(689938),
  y = s(900168);
let V = L.ZP.getEnableHardwareAcceleration() ? _.AnimatedAvatar : _.Avatar;

function Y(e) {
  var t, i;
  let {
className: o,
user: l
  } = e, c = a.useRef(null), E = (0, m.o9)(), u = (0, A.b)(), T = (0, N.gS)(), I = null !== (i = null == T ? void 0 : null === (t = T.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : null, [S, C] = a.useState(!1);
  a.useEffect(() => {
C(null != c.current && c.current.scrollWidth > c.current.clientWidth);
  }, [l.username]);
  let g = !l.isClaimed(),
h = E && !l.isPomelo() && !l.hasVerifiedEmailOrPhone() || g,
O = h ? F.Z.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
  return (0, n.jsxs)('div', {
className: r()(y.field, o),
children: [
  (0, n.jsx)('div', {
    className: y.constrainedRow,
    children: (0, n.jsxs)('div', {
      className: y.usernameRow,
      children: [
        (0, n.jsx)(_.FormTitle, {
          className: y.fieldTitle,
          children: F.Z.Messages.USER_SETTINGS_LABEL_USERNAME
        }),
        (0, n.jsxs)('div', {
          className: y.usernameInnerRow,
          ref: c,
          children: [
            (0, n.jsx)(_.Text, {
              tag: 'span',
              color: 'header-primary',
              variant: 'text-md/normal',
              children: l.username
            }),
            !l.isPomelo() && (0, n.jsxs)(_.Text, {
              tag: 'span',
              color: 'header-secondary',
              variant: 'text-md/normal',
              children: [
                '#',
                l.discriminator
              ]
            })
          ]
        })
      ]
    })
  }),
  u && (0, n.jsx)('div', {
    className: y.pomeloWarning,
    children: (0, n.jsx)(_.Tooltip, {
      text: F.Z.Messages.ACTION_NEEDED,
      children: e => (0, n.jsx)(_.CircleExclamationPointIcon, {
        size: 'custom',
        width: 20,
        height: 20,
        ...e,
        color: d.Z.colors.STATUS_WARNING.css
      })
    })
  }),
  null != I && (0, n.jsx)('div', {
    className: y.pomeloWarning,
    children: (0, n.jsx)(_.Tooltip, {
      text: I,
      'aria-label': !1,
      children: e => (0, n.jsx)(_.CircleExclamationPointIcon, {
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
    children: e => (0, n.jsx)(_.Button, {
      ...e,
      disabled: h,
      size: _.Button.Sizes.SMALL,
      className: y.fieldButton,
      color: _.Button.Colors.PRIMARY,
      'aria-label': F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
      onClick: () => (0, _.openModalLazy)(async () => {
        if (u) {
          let {
            default: e
          } = await Promise.all([
            s.e('85342'),
            s.e('51695')
          ]).then(s.bind(s, 193049));
          return t => (0, n.jsx)(e, {
            source: U.Kq.USER_SETTINGS_EDIT,
            ...t
          });
        } {
          let {
            default: e
          } = await Promise.all([
            s.e('75492'),
            s.e('84956'),
            s.e('42758')
          ]).then(s.bind(s, 2702));
          return t => (0, n.jsx)(e, {
            ...t
          });
        }
      }),
      children: S ? F.Z.Messages.DISAPPROVAL : F.Z.Messages.EDIT
    })
  })
]
  });
}

function w(e) {
  var t, s;
  let {
user: i,
className: o
  } = e, l = (0, N.gS)(), c = null !== (s = null == l ? void 0 : null === (t = l.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : null, E = P.ZP.getGlobalName(i), u = a.useRef(null), [T, I] = a.useState(!1);
  return a.useEffect(() => {
I(null != u.current && u.current.scrollWidth > u.current.clientWidth);
  }, [E]), (0, n.jsxs)('div', {
className: r()(y.field, o),
children: [
  (0, n.jsx)('div', {
    className: y.constrainedRow,
    children: (0, n.jsxs)('div', {
      className: y.usernameRow,
      children: [
        (0, n.jsx)(_.FormTitle, {
          className: y.fieldTitle,
          children: F.Z.Messages.DISPLAY_NAME
        }),
        (0, n.jsx)('div', {
          className: y.usernameInnerRow,
          ref: u,
          children: (0, n.jsx)(_.Text, {
            tag: 'span',
            color: 'header-primary',
            variant: 'text-md/normal',
            children: null == E ? F.Z.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : E
          })
        })
      ]
    })
  }),
  null != c && (0, n.jsx)('div', {
    className: y.pomeloWarning,
    children: (0, n.jsx)(_.Tooltip, {
      text: c,
      'aria-label': !1,
      children: e => (0, n.jsx)(_.CircleExclamationPointIcon, {
        size: 'custom',
        width: 20,
        height: 20,
        ...e,
        color: d.Z.colors.STATUS_WARNING.css
      })
    })
  }),
  (0, n.jsx)(_.Button, {
    className: y.fieldButton,
    size: _.Button.Sizes.SMALL,
    color: _.Button.Colors.PRIMARY,
    'aria-label': F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
    onClick: z,
    children: T ? F.Z.Messages.DISAPPROVAL : F.Z.Messages.EDIT
  })
]
  });
}

function k(e) {
  let {
text: t,
censor: s,
revealLabel: i,
hideLabel: r
  } = e, [o, l] = a.useState(!1), c = o ? t : s(t);
  return (0, n.jsxs)(n.Fragment, {
children: [
  c,
  (0, n.jsx)(_.Button, {
    look: _.Button.Looks.LINK,
    size: _.Button.Sizes.MIN,
    color: _.Button.Colors.LINK,
    'aria-label': o ? r : i,
    onClick: () => l(!o),
    children: o ? F.Z.Messages.HIDE : F.Z.Messages.REVEAL
  })
]
  });
}

function H(e) {
  let t, {
className: a,
user: i
  } = e;
  if (i.isClaimed()) {
if (null == i.email)
  t = {
    buttonText: F.Z.Messages.ADD,
    buttonAriaLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
    buttonColor: _.Button.Colors.PRIMARY,
    valueMessage: F.Z.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
    handleClick: () => (0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([
        s.e('9343'),
        s.e('45863')
      ]).then(s.bind(s, 642298));
      return t => (0, n.jsx)(e, {
        ...t
      });
    })
  };
else {
  let {
    email: e
  } = i;
  t = {
    buttonText: F.Z.Messages.EDIT,
    buttonAriaLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
    buttonColor: _.Button.Colors.PRIMARY,
    valueMessage: (0, n.jsx)(k, {
      text: e,
      censor: Z.E,
      revealLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
      hideLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
    }),
    handleClick: () => (0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([
        s.e('9343'),
        s.e('45863')
      ]).then(s.bind(s, 642298));
      return t => (0, n.jsx)(e, {
        ...t
      });
    })
  };
}
  } else
t = {
  buttonText: F.Z.Messages.CLAIM_ACCOUNT_SHORT,
  buttonAriaLabel: F.Z.Messages.CLAIM_ACCOUNT_SHORT,
  buttonColor: _.Button.Colors.BRAND,
  valueMessage: F.Z.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
  handleClick: () => I.Z.openClaimAccountModal()
};
  return (0, n.jsxs)('div', {
className: r()(y.field, a),
children: [
  (0, n.jsx)('div', {
    className: y.constrainedRow,
    children: (0, n.jsxs)('div', {
      children: [
        (0, n.jsx)(_.FormTitle, {
          className: y.fieldTitle,
          children: F.Z.Messages.USER_SETTINGS_LABEL_EMAIL
        }),
        (0, n.jsx)('div', {
          children: (0, n.jsx)(_.Text, {
            tag: 'span',
            color: 'header-primary',
            variant: 'text-md/normal',
            children: t.valueMessage
          })
        })
      ]
    })
  }),
  (0, n.jsx)(_.Button, {
    className: y.fieldButton,
    size: _.Button.Sizes.SMALL,
    color: _.Button.Colors.PRIMARY,
    'aria-label': t.buttonAriaLabel,
    onClick: t.handleClick,
    children: t.buttonText
  })
]
  });
}

function W(e) {
  let t, {
className: a,
user: i
  } = e;
  if (!i.isClaimed())
return null;
  let {
phone: o,
email: l
  } = i, c = null != o;
  return t = c ? (0, n.jsx)(k, {
text: o,
censor: Z.n,
revealLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
hideLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
  }) : F.Z.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER, (0, n.jsxs)('div', {
className: r()(y.field, a),
children: [
  (0, n.jsx)('div', {
    className: y.constrainedRow,
    children: (0, n.jsxs)('div', {
      children: [
        (0, n.jsx)(_.FormTitle, {
          className: y.fieldTitle,
          children: F.Z.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
        }),
        (0, n.jsx)('div', {
          children: (0, n.jsx)(_.Text, {
            tag: 'span',
            color: 'header-primary',
            variant: 'text-md/normal',
            children: t
          })
        })
      ]
    })
  }),
  (0, n.jsxs)('div', {
    className: y.fieldButtonList,
    children: [
      c && null != l ? (0, n.jsx)(_.Button, {
        className: r()(y.fieldButton, y.removeButton),
        size: _.Button.Sizes.SMALL,
        look: _.Button.Looks.LINK,
        color: _.Button.Colors.PRIMARY,
        'aria-label': F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, _.openModal)(e => (0, n.jsx)(T.default, {
            ...e,
            title: F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
            children: i.hasFlag(j.xW$.MFA_SMS) ? F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
            actionText: F.Z.Messages.REMOVE,
            handleSubmit: e => C.Z.removePhone(e, C.L.USER_SETTINGS_UPDATE)
          }));
        },
        children: F.Z.Messages.REMOVE
      }) : null,
      (0, n.jsx)(_.Button, {
        className: y.fieldButton,
        size: _.Button.Sizes.SMALL,
        color: _.Button.Colors.PRIMARY,
        'aria-label': c ? F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : F.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, _.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(s.bind(s, 607018));
            return t => (0, n.jsx)(e, {
              reason: C.L.USER_SETTINGS_UPDATE,
              ...t
            });
          }, {
            modalKey: B.M
          });
        },
        children: c ? F.Z.Messages.EDIT : F.Z.Messages.ADD
      })
    ]
  })
]
  });
}

function K(e) {
  let {
user: t
  } = e, s = (0, S.Z)({
id: t.id,
label: F.Z.Messages.COPY_ID_USER
  });
  return b.Sb.useSetting() && D.wS ? (0, n.jsx)(_.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, n.jsx)(_.Menu, {
    onClose: t,
    onSelect: void 0,
    navId: 'copy-id',
    'aria-label': F.Z.Messages.USER_MORE_ACTIONS_MENU_LABEL,
    children: s
  });
},
children: e => (0, n.jsx)(_.Clickable, {
  ...e,
  className: y.overflowMenuButton,
  'aria-label': F.Z.Messages.ACTIONS,
  children: (0, n.jsx)(_.MoreHorizontalIcon, {
    size: 'md',
    color: 'currentColor',
    className: y.overflowMenuIcon
  })
})
  }) : null;
}

function z() {
  E.Z.setSection(j.oAB.PROFILE_CUSTOMIZATION);
}

function Q() {
  var e;
  let t = (0, c.e7)([f.default], () => {
  let e = f.default.getCurrentUser();
  return l()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
}),
s = (0, O.ZP)(t.id),
a = (0, h.Z)(s),
i = b.co.useSetting(),
r = (0, c.e7)([M.Z], () => M.Z.getErrors()),
o = null == r ? void 0 : null === (e = r.avatar) || void 0 === e ? void 0 : e[0],
{
  avatarSrc: d,
  avatarDecorationSrc: E
} = (0, x.Z)({
  user: t,
  size: _.AvatarSizes.SIZE_80
});
  return (0, n.jsxs)('div', {
className: y.accountProfileCard,
children: [
  (0, n.jsx)(R.Z, {
    displayProfile: s,
    user: t,
    allowEdit: !1,
    guildId: void 0,
    profileType: G.y0.SETTINGS
  }),
  (0, n.jsxs)('div', {
    className: y.userInfo,
    children: [
      (0, n.jsx)(V, {
        className: y.avatar,
        src: d,
        avatarDecoration: E,
        status: i,
        size: _.AvatarSizes.SIZE_80,
        'aria-label': t.username
      }),
      (0, n.jsxs)('div', {
        children: [
          (0, n.jsxs)('div', {
            className: y.profileCardUsernameRow,
            children: [
              (0, n.jsx)(u.Z, {
                user: t,
                className: y.userTag,
                discriminatorClass: y.discriminator
              }),
              (0, n.jsx)(K, {
                user: t
              })
            ]
          }),
          (0, n.jsx)(p.Z, {
            badges: a,
            className: y.badgeList,
            badgeClassName: y.badge
          })
        ]
      }),
      (0, n.jsx)(_.Button, {
        onClick: z,
        size: _.Button.Sizes.SMALL,
        children: F.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
      })
    ]
  }),
  (0, n.jsxs)('div', {
    className: y.background,
    children: [
      null != o ? (0, n.jsx)(_.Text, {
        className: y.avatarError,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: o
      }) : null,
      (0, n.jsxs)('div', {
        className: y.fieldList,
        children: [
          (0, n.jsx)(g.F, {
            setting: v.s6.ACCOUNT_DISPLAY_NAME,
            children: (0, n.jsx)(w, {
              className: y.fieldSpacerBottom,
              user: t
            })
          }),
          (0, n.jsx)(g.F, {
            setting: v.s6.ACCOUNT_USERNAME,
            children: (0, n.jsx)(Y, {
              user: t
            })
          }),
          (0, n.jsx)(g.F, {
            setting: v.s6.ACCOUNT_EMAIL,
            children: (0, n.jsx)(H, {
              className: y.fieldSpacer,
              user: t
            })
          }),
          (0, n.jsx)(g.F, {
            setting: v.s6.ACCOUNT_PHONE_NUMBER,
            children: (0, n.jsx)(W, {
              className: y.fieldSpacer,
              user: t
            })
          })
        ]
      })
    ]
  })
]
  });
}