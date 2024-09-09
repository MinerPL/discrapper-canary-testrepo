s.r(t),
    s.d(t, {
        default: function () {
            return A;
        }
    }),
    s(47120);
var o,
    n,
    r = s(735250),
    a = s(470079),
    i = s(990547),
    l = s(442837),
    d = s(481060),
    c = s(570140),
    u = s(213609),
    h = s(594174),
    f = s(726745),
    _ = s(475062),
    p = s(760213),
    m = s(71509),
    C = s(981631),
    g = s(689938),
    T = s(680396);
((n = o || (o = {}))[(n.MANAGE_ACCOUNTS = 0)] = 'MANAGE_ACCOUNTS'), (n[(n.LOGIN = 1)] = 'LOGIN');
let N = {
    0: d.ModalSize.SMALL,
    1: d.ModalSize.DYNAMIC
};
function A(e) {
    let { transitionState: t, onClose: s } = e,
        [o, n] = a.useState(0),
        { currentUser: A, multiAccountUsers: E } = (0, l.cj)([h.default, f.Z], () => ({
            currentUser: h.default.getCurrentUser(),
            multiAccountUsers: f.Z.getUsers()
        })),
        [I, M] = a.useState(!1),
        [R, O] = a.useState(C.lds),
        [S, x] = a.useState(null);
    a.useEffect(() => {
        if (I)
            x(
                (0, r.jsx)(d.HelpMessage, {
                    messageType: d.HelpMessageTypes.ERROR,
                    className: T.infoMessage,
                    children: g.Z.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({ maxNumAccounts: m.$H })
                })
            ),
                O(C.lds);
        else if (null != R) {
            let e = h.default.getUser(R);
            null != e &&
                x(
                    (0, r.jsx)(d.HelpMessage, {
                        messageType: d.HelpMessageTypes.POSITIVE,
                        className: T.infoMessage,
                        children: g.Z.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({ username: e.username })
                    })
                ),
                M(!1);
        }
    }, [R, I]),
        a.useEffect(() => {
            E.length < m.$H && M(!1);
        }, [E]),
        (0, u.Z)({
            type: i.ImpressionTypes.MODAL,
            name: 0 === o ? i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : i.ImpressionNames.USER_LOGIN
        });
    let L = null;
    return (
        0 === o
            ? (L = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.ModalHeader, {
                          separator: !1,
                          children: (0, r.jsxs)('div', {
                              className: T.header,
                              children: [
                                  (0, r.jsx)(d.Heading, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: g.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      className: T.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: g.Z.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
                                  })
                              ]
                          })
                      }),
                      (0, r.jsxs)(d.ModalContent, {
                          children: [
                              S,
                              (0, r.jsx)(p.Z, {
                                  actionText: g.Z.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case p.W.LOGIN_REQUIRED:
                                              n(1);
                                              break;
                                          case p.W.SWITCHED:
                                              s();
                                              break;
                                          case p.W.REMOVED:
                                              t === (null == A ? void 0 : A.id) && s(), O(t);
                                      }
                                  }
                              }),
                              (0, r.jsx)('div', {
                                  className: T.actions,
                                  children: (0, r.jsx)(d.Button, {
                                      look: d.Button.Looks.LINK,
                                      color: d.Button.Colors.PRIMARY,
                                      onClick: () => {
                                          if (E.length >= m.$H) {
                                              M(!0);
                                              return;
                                          }
                                          n(1);
                                      },
                                      size: d.Button.Sizes.MEDIUM,
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/semibold',
                                          children: g.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === o &&
              (L = (0, r.jsx)(_.Z, {
                  onClose: () => {
                      c.Z.dispatch({ type: 'CLEAR_AUTHENTICATION_ERRORS' }), n(0);
                  }
              })),
        (0, r.jsx)(d.ModalRoot, {
            className: T.modal,
            transitionState: t,
            size: N[o],
            'aria-label': g.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
            children: (0, r.jsx)(d.Sequencer, {
                step: o,
                steps: [0, 1],
                children: L
            })
        })
    );
}
