s.d(t, {
  Z: function() {
return p;
  }
}), s(47120), s(773603);
var n = s(735250),
  a = s(470079),
  i = s(849055),
  r = s(442837),
  o = s(481060),
  l = s(239091),
  c = s(202858),
  d = s(153124),
  _ = s(360048),
  E = s(287880),
  u = s(358085),
  T = s(960048),
  I = s(998502),
  S = s(365007),
  N = s(15980),
  C = s(755733),
  m = s(981631),
  A = s(689938),
  h = s(553687);

function g(e) {
  let {
transitionState: t,
onClose: r,
ticket: l,
challenge: _
  } = e, E = (0, d.Dt)(), [N, g] = a.useState(''), [O, p] = a.useState(!0), [R, x] = a.useState(C.x.INIT), [M, D] = a.useState(''), [f, P] = a.useState(null), L = async () => {
let e;
x(C.x.REGISTER);
let t = u.isPlatformEmbedded && I.ZP.supportsFeature(m.eRX.WEBAUTHN) ? I.ZP.webAuthnRegister(_) : i.Ue(JSON.parse(_)).then(e => JSON.stringify(e));
try {
  e = await t;
} catch (e) {
  T.Z.captureException(e), P(A.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), x(C.x.INIT);
  return;
}
D(e), x(C.x.NAME);
  };
  return (0, n.jsxs)(o.ModalRoot, {
transitionState: t,
'aria-labelledby': E,
children: [
  (0, n.jsxs)(o.ModalHeader, {
    className: h.header,
    separator: !1,
    children: [
      (0, n.jsxs)(o.Heading, {
        id: E,
        variant: 'heading-lg/semibold',
        children: [
          R === C.x.INIT && A.Z.Messages.TWO_FA_WEBAUTHN_REGISTER,
          R === C.x.REGISTER && A.Z.Messages.TWO_FA_WEBAUTHN_INTERACT,
          R === C.x.NAME && A.Z.Messages.TWO_FA_WEBAUTHN_NAME
        ]
      }),
      (0, n.jsx)(o.ModalCloseButton, {
        onClick: r,
        className: h.modalCloseButton
      })
    ]
  }),
  (0, n.jsxs)(o.Slides, {
    activeSlide: R,
    width: 440,
    children: [
      (0, n.jsxs)(o.Slide, {
        id: C.x.INIT,
        children: [
          (0, n.jsxs)(o.ModalContent, {
            className: h.content,
            children: [
              (0, n.jsx)('div', {
                className: h.icon,
                children: (0, n.jsx)('img', {
                  alt: '',
                  src: s(773072)
                })
              }),
              (0, n.jsx)('div', {
                children: null != f && (0, n.jsx)(o.Text, {
                  variant: 'text-md/normal',
                  color: 'status-danger',
                  children: f
                })
              }),
              (0, n.jsx)('div', {
                children: (0, n.jsx)(o.Text, {
                  variant: 'text-md/normal',
                  children: A.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_INSTRUCTIONS
                })
              })
            ]
          }),
          (0, n.jsx)(o.ModalFooter, {
            children: (0, n.jsx)(o.Button, {
              onClick: L,
              children: A.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_CONFIRM
            })
          })
        ]
      }),
      (0, n.jsxs)(o.Slide, {
        id: C.x.REGISTER,
        children: [
          (0, n.jsxs)(o.ModalContent, {
            className: h.content,
            children: [
              (0, n.jsx)('div', {
                className: h.icon,
                children: (0, n.jsx)('img', {
                  alt: '',
                  src: s(773072)
                })
              }),
              (0, n.jsx)('div', {
                children: (0, n.jsx)(o.Text, {
                  variant: 'text-md/normal',
                  children: A.Z.Messages.TWO_FA_WEBAUTHN_INTERACT_INSTRUCTIONS
                })
              })
            ]
          }),
          (0, n.jsx)(o.ModalFooter, {
            children: (0, n.jsx)(o.Button, {
              submitting: !0
            })
          })
        ]
      }),
      (0, n.jsx)(o.Slide, {
        id: C.x.NAME,
        children: (0, n.jsxs)('form', {
          onSubmit: e => {
            e.preventDefault(), (0, S.Sr)(N, l, M).then(async () => {
              await (0, c.Yn)(!1);
            }).then(() => r()).catch(() => {
              P(A.Z.Messages.ERROR_OCCURRED_TRY_AGAIN), x(C.x.INIT);
            });
          },
          children: [
            (0, n.jsxs)(o.ModalContent, {
              className: h.content,
              children: [
                (0, n.jsx)('div', {
                  className: h.icon,
                  children: (0, n.jsx)('img', {
                    alt: '',
                    src: s(637163)
                  })
                }),
                (0, n.jsxs)('div', {
                  children: [
                    (0, n.jsx)(o.Text, {
                      variant: 'text-md/normal',
                      children: A.Z.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
                    }),
                    (0, n.jsx)(o.TextInput, {
                      className: h.input,
                      value: N,
                      onChange: e => {
                        g(e), p(0 === e.length);
                      },
                      autoFocus: !0,
                      minLength: 1
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)(o.ModalFooter, {
              className: h.footer,
              children: [
                (0, n.jsx)(o.Button, {
                  type: 'submit',
                  disabled: O,
                  children: A.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_FINISH
                }),
                (0, n.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: () => {
                    x(C.x.INIT);
                  },
                  children: A.Z.Messages.BACK
                })
              ]
            })
          ]
        })
      })
    ]
  })
]
  });
}

function O(e) {
  let {
onSelect: t,
credential: a
  } = e;
  return (0, n.jsxs)(o.Menu, {
navId: 'webauthn-credential-actions',
onClose: l.Zy,
'aria-label': A.Z.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
onSelect: t,
children: [
  (0, n.jsx)(o.MenuItem, {
    id: 'webauthn-edit-credential-'.concat(a.id),
    label: A.Z.Messages.EDIT,
    action: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.e('804').then(s.bind(s, 89616));
        return t => (0, n.jsx)(e, {
          credential: a,
          ...t
        });
      });
    }
  }),
  (0, n.jsx)(o.MenuItem, {
    id: 'webauthn-delete-credential-'.concat(a.id),
    label: A.Z.Messages.TWO_FA_WEBAUTHN_DELETE_CREDENTIAL,
    color: 'danger',
    action: () => {
      (0, S.cT)(a);
    }
  })
]
  });
}

function p() {
  let {
credentials: e,
hasFetchedCredentials: t
  } = (0, r.cj)([N.Z], () => ({
hasFetchedCredentials: N.Z.hasFetchedCredentials(),
credentials: N.Z.getCredentials()
  }));
  a.useEffect(() => {
!t && (0, S.hL)();
  }, [t]);
  let [s, i] = a.useState(!1);
  return (0, n.jsxs)(o.FormSection, {
title: A.Z.Messages.TWO_FA_WEBAUTHN_TITLE,
className: h.settings,
children: [
  (0, n.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: h.description,
    children: A.Z.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
  }),
  e.length > 0 && (0, n.jsx)('div', {
    className: h.credentialList,
    children: e.map(e => (0, n.jsx)(_.Z, {
      avatar: null,
      name: e.name,
      className: h.credentialItem,
      onContextMenu: t => {
        (0, l.vq)(t, t => (0, n.jsx)(O, {
          ...t,
          credential: e
        }));
      },
      children: (0, n.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.ICON,
        onClick: t => {
          (0, l.vq)(t, t => (0, n.jsx)(O, {
            ...t,
            credential: e
          }));
        },
        'aria-label': A.Z.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
        innerClassName: h.credentialOptions,
        children: (0, n.jsx)(o.MoreVerticalIcon, {
          size: 'md',
          color: 'currentColor',
          className: h.__invalid_overflowIcon,
          colorClass: h.__invalid_overflowIconFg,
          'aria-hidden': !0
        })
      })
    }, e.id))
  }),
  (0, n.jsx)('div', {
    children: (0, n.jsx)(o.Button, {
      onClick: () => {
        i(!0), (0, S.L$)().then(e => {
          let {
            ticket: t,
            challenge: s
          } = e;
          (0, o.openModal)(e => (0, n.jsx)(g, {
            ...e,
            ticket: t,
            challenge: s
          }));
        }).catch(e => {
          e.message !== A.Z.Messages.MFA_V2_CANCELED && T.Z.captureException(e);
        }).finally(() => {
          i(!1);
        });
      },
      submitting: s,
      disabled: !E.Ae,
      size: o.Button.Sizes.SMALL,
      children: A.Z.Messages.TWO_FA_WEBAUTHN_REGISTER
    })
  })
]
  });
}