s.d(t, {
  Z: function() {
return m;
  }
}), s(47120);
var n, a, i = s(735250),
  r = s(470079),
  o = s(442837),
  l = s(481060),
  c = s(570140),
  d = s(401430),
  _ = s(155268),
  E = s(695103),
  u = s(285952),
  T = s(153124),
  I = s(689938),
  S = s(873644),
  N = s(549856);
let C = /^\d+$|^$/;
(a = n || (n = {})).LOCALHOST = 'localhost', a.PROXY = 'proxy';

function m(e) {
  let {
onClose: t,
transitionState: s
  } = e, {
authorizedApplicationId: n,
authorizationError: a,
authorizing: m
  } = (0, o.cj)([E.Z], () => ({
authorizedApplicationId: E.Z.testModeApplicationId,
authorizationError: E.Z.error,
authorizing: E.Z.isFetchingAuthorization
  })), [A, h] = r.useState(null != n ? n : ''), [g, O] = r.useState('8080'), [p, R] = r.useState('localhost'), x = (0, T.Dt)(), M = C.test(A);
  async function D() {
d.q$();
let e = function(e, t, s) {
  if (null == e)
    return null;
  switch (e) {
    case 'localhost':
      return 'https://localhost:'.concat(t);
    case 'proxy':
      return (0, _.Z)(s);
  }
}(p, g, A);
null != await d.Wt(A, e) && t();
  }
  r.useEffect(() => () => c.Z.wait(() => d.q$()), []);
  let f = null != n && n === A,
P = f ? function() {
  d.mc(), h(''), R(null);
} : D;
  return (0, i.jsxs)(l.ModalRoot, {
'aria-labelledby': x,
transitionState: s,
children: [
  (0, i.jsxs)(l.ModalHeader, {
    justify: u.Z.Justify.BETWEEN,
    separator: !1,
    children: [
      (0, i.jsx)(l.FormTitle, {
        id: x,
        tag: 'h1',
        className: N.marginReset,
        children: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
      }),
      (0, i.jsx)(l.ModalCloseButton, {
        onClick: t
      })
    ]
  }),
  (0, i.jsxs)(l.ModalContent, {
    className: S.modalContent,
    children: [
      (0, i.jsx)(l.FormText, {
        className: N.marginBottom20,
        type: l.FormText.Types.DESCRIPTION,
        children: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
      }),
      null == a ? null : (0, i.jsx)(l.FormErrorBlock, {
        className: N.marginBottom20,
        children: a
      }),
      (0, i.jsx)('form', {
        onSubmit: e => {
          e.preventDefault(), P();
        },
        children: (0, i.jsxs)(u.Z, {
          direction: u.Z.Direction.VERTICAL,
          align: u.Z.Align.START,
          children: [
            (0, i.jsx)(l.FormItem, {
              className: S.inputWrapper,
              title: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
              required: !0,
              children: (0, i.jsx)(l.TextInput, {
                value: A,
                maxLength: 19,
                error: M ? null : I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
                onChange: function(e) {
                  h(e);
                },
                disabled: m
              })
            }),
            (0, i.jsx)(l.FormItem, {
              className: S.inputWrapper,
              title: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
              children: (0, i.jsx)(l.SingleSelect, {
                isDisabled: !M || '' === A,
                value: p,
                options: [{
                    value: 'localhost',
                    label: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
                    key: 'localhost'
                  },
                  {
                    value: 'proxy',
                    label: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
                    key: 'proxy'
                  }
                ],
                onChange: function(e) {
                  R(e);
                },
                placeholder: 'URL Origin Type'
              })
            }),
            'localhost' !== p ? null : (0, i.jsx)(l.FormItem, {
              className: S.inputWrapper,
              title: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
              required: !0,
              children: (0, i.jsx)(l.TextInput, {
                value: g,
                maxLength: 5,
                onChange: e => O(e),
                disabled: m
              })
            }),
            (0, i.jsx)(l.Button, {
              submitting: m,
              type: 'submit',
              disabled: !M || 0 === A.length || 'localhost' === p && 0 === g.length,
              color: f ? l.Button.Colors.RED : l.Button.Colors.GREEN,
              children: f ? I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
            })
          ]
        })
      })
    ]
  })
]
  });
}