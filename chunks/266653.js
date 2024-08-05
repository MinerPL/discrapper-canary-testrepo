s.r(t), s.d(t, {
  default: function() {
return E;
  }
}), s(47120);
var o, n, r = s(735250),
  a = s(470079),
  i = s(990547),
  l = s(442837),
  d = s(481060),
  c = s(570140),
  u = s(213609),
  h = s(777036),
  f = s(594174),
  _ = s(726745),
  p = s(475062),
  m = s(760213),
  C = s(71509),
  g = s(981631),
  T = s(689938),
  N = s(72818);
(n = o || (o = {}))[n.MANAGE_ACCOUNTS = 0] = 'MANAGE_ACCOUNTS', n[n.LOGIN = 1] = 'LOGIN';
let A = {
  0: d.ModalSize.SMALL,
  1: d.ModalSize.DYNAMIC
};

function E(e) {
  let {
transitionState: t,
onClose: s
  } = e, [o, n] = a.useState(0), {
currentUser: E,
multiAccountUsers: I
  } = (0, l.cj)([
f.default,
_.Z
  ], () => ({
currentUser: f.default.getCurrentUser(),
multiAccountUsers: _.Z.getUsers()
  })), [R, O] = a.useState(!1), [S, M] = a.useState(g.lds), [x, L] = a.useState(null);
  a.useEffect(() => {
if (R)
  L((0, r.jsx)(h.Z, {
    messageType: h.Q.ERROR,
    className: N.infoMessage,
    children: T.Z.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
      maxNumAccounts: C.$H
    })
  })), M(g.lds);
else if (null != S) {
  let e = f.default.getUser(S);
  null != e && L((0, r.jsx)(h.Z, {
    messageType: h.Q.POSITIVE,
    className: N.infoMessage,
    children: T.Z.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
      username: e.username
    })
  })), O(!1);
}
  }, [
S,
R
  ]), a.useEffect(() => {
I.length < C.$H && O(!1);
  }, [I]), (0, u.Z)({
type: i.ImpressionTypes.MODAL,
name: 0 === o ? i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : i.ImpressionNames.USER_LOGIN
  });
  let b = null;
  return 0 === o ? b = (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(d.ModalHeader, {
    separator: !1,
    children: (0, r.jsxs)('div', {
      className: N.header,
      children: [
        (0, r.jsx)(d.Heading, {
          variant: 'heading-xl/semibold',
          color: 'header-primary',
          children: T.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
        }),
        (0, r.jsx)(d.Text, {
          className: N.subheaderText,
          color: 'header-secondary',
          variant: 'text-md/normal',
          children: T.Z.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
        })
      ]
    })
  }),
  (0, r.jsxs)(d.ModalContent, {
    children: [
      x,
      (0, r.jsx)(m.Z, {
        actionText: T.Z.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
        onAction: (e, t) => {
          switch (e) {
            case m.W.LOGIN_REQUIRED:
              n(1);
              break;
            case m.W.SWITCHED:
              s();
              break;
            case m.W.REMOVED:
              t === (null == E ? void 0 : E.id) && s(), M(t);
          }
        }
      }),
      (0, r.jsx)('div', {
        className: N.actions,
        children: (0, r.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY,
          onClick: () => {
            if (I.length >= C.$H) {
              O(!0);
              return;
            }
            n(1);
          },
          size: d.Button.Sizes.MEDIUM,
          children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/semibold',
            children: T.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
          })
        })
      })
    ]
  })
]
  }) : 1 === o && (b = (0, r.jsx)(p.Z, {
onClose: () => {
  c.Z.dispatch({
    type: 'CLEAR_AUTHENTICATION_ERRORS'
  }), n(0);
}
  })), (0, r.jsx)(d.ModalRoot, {
className: N.modal,
transitionState: t,
size: A[o],
'aria-label': T.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
children: (0, r.jsx)(d.Sequencer, {
  step: o,
  steps: [
    0,
    1
  ],
  children: b
})
  });
}