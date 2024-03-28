"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120");
var a, r, n = s("735250"),
  o = s("470079"),
  l = s("990547"),
  i = s("442837"),
  d = s("481060"),
  u = s("570140"),
  h = s("213609"),
  c = s("594174"),
  f = s("474333"),
  p = s("726745"),
  g = s("475062"),
  m = s("760213"),
  S = s("798077"),
  T = s("981631"),
  C = s("689938"),
  A = s("474695");
(r = a || (a = {}))[r.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS", r[r.LOGIN = 1] = "LOGIN";
let E = {
  0: d.ModalSize.SMALL,
  1: d.ModalSize.DYNAMIC
};

function _(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, [a, r] = o.useState(0), {
    currentUser: _,
    multiAccountUsers: N
  } = (0, i.useStateFromStoresObject)([c.default, p.default], () => ({
    currentUser: c.default.getCurrentUser(),
    multiAccountUsers: p.default.getUsers()
  })), [M, R] = o.useState(!1), [O, I] = o.useState(T.EMPTY_STRING_SNOWFLAKE_ID), [L, x] = o.useState(null);
  o.useEffect(() => {
    if (M) x((0, n.jsx)(f.default, {
      messageType: f.HelpMessageTypes.ERROR,
      className: A.infoMessage,
      children: C.default.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
        maxNumAccounts: S.MAX_ACCOUNTS
      })
    })), I(T.EMPTY_STRING_SNOWFLAKE_ID);
    else if (null != O) {
      let e = c.default.getUser(O);
      null != e && x((0, n.jsx)(f.default, {
        messageType: f.HelpMessageTypes.POSITIVE,
        className: A.infoMessage,
        children: C.default.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
          username: e.username
        })
      })), R(!1)
    }
  }, [O, M]), o.useEffect(() => {
    N.length < S.MAX_ACCOUNTS && R(!1)
  }, [N]), (0, h.default)({
    type: l.ImpressionTypes.MODAL,
    name: 0 === a ? l.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : l.ImpressionNames.USER_LOGIN
  });
  let P = null;
  return 0 === a ? P = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.ModalHeader, {
      separator: !1,
      children: (0, n.jsxs)("div", {
        className: A.header,
        children: [(0, n.jsx)(d.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: C.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
        }), (0, n.jsx)(d.Text, {
          className: A.subheaderText,
          color: "header-secondary",
          variant: "text-md/normal",
          children: C.default.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
        })]
      })
    }), (0, n.jsxs)(d.ModalContent, {
      children: [L, (0, n.jsx)(m.default, {
        actionText: C.default.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
        onAction: (e, t) => {
          switch (e) {
            case m.MultiAccountActionType.LOGIN_REQUIRED:
              r(1);
              break;
            case m.MultiAccountActionType.SWITCHED:
              s();
              break;
            case m.MultiAccountActionType.REMOVED:
              t === (null == _ ? void 0 : _.id) && s(), I(t)
          }
        }
      }), (0, n.jsx)("div", {
        className: A.actions,
        children: (0, n.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY,
          onClick: () => {
            if (N.length >= S.MAX_ACCOUNTS) {
              R(!0);
              return
            }
            r(1)
          },
          size: d.Button.Sizes.MEDIUM,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/semibold",
            children: C.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
          })
        })
      })]
    })]
  }) : 1 === a && (P = (0, n.jsx)(g.default, {
    onClose: () => {
      u.default.dispatch({
        type: "CLEAR_AUTHENTICATION_ERRORS"
      }), r(0)
    }
  })), (0, n.jsx)(d.ModalRoot, {
    className: A.modal,
    transitionState: t,
    size: E[a],
    "aria-label": C.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
    children: (0, n.jsx)(d.Sequencer, {
      step: a,
      steps: [0, 1],
      children: P
    })
  })
}