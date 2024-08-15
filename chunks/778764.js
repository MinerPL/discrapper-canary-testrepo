t.d(s, {
  Z: function() {
return p;
  }
}), t(47120), t(773603);
var n = t(735250),
  a = t(470079),
  i = t(849055),
  r = t(442837),
  o = t(481060),
  l = t(239091),
  c = t(554300),
  d = t(313201),
  _ = t(202858),
  E = t(287880),
  u = t(358085),
  I = t(960048),
  T = t(998502),
  S = t(365007),
  N = t(15980),
  C = t(755733),
  m = t(981631),
  A = t(689938),
  g = t(824901);

function O(e) {
  let {
transitionState: s,
onClose: r,
ticket: l,
challenge: c
  } = e, E = (0, d.Dt)(), [N, O] = a.useState(''), [h, p] = a.useState(!0), [R, x] = a.useState(C.x.INIT), [M, f] = a.useState(''), [D, P] = a.useState(null), L = async () => {
let e;
x(C.x.REGISTER);
let s = u.isPlatformEmbedded && T.ZP.supportsFeature(m.eRX.WEBAUTHN) ? T.ZP.webAuthnRegister(c) : i.Ue(JSON.parse(c)).then(e => JSON.stringify(e));
try {
  e = await s;
} catch (e) {
  I.Z.captureException(e), P(A.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), x(C.x.INIT);
  return;
}
f(e), x(C.x.NAME);
  };
  return (0, n.jsxs)(o.ModalRoot, {
transitionState: s,
'aria-labelledby': E,
children: [
  (0, n.jsxs)(o.ModalHeader, {
    className: g.header,
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
        className: g.modalCloseButton
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
            className: g.content,
            children: [
              (0, n.jsx)('div', {
                className: g.icon,
                children: (0, n.jsx)('img', {
                  alt: '',
                  src: t(773072)
                })
              }),
              (0, n.jsx)('div', {
                children: null != D && (0, n.jsx)(o.Text, {
                  variant: 'text-md/normal',
                  color: 'status-danger',
                  children: D
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
            className: g.content,
            children: [
              (0, n.jsx)('div', {
                className: g.icon,
                children: (0, n.jsx)('img', {
                  alt: '',
                  src: t(773072)
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
              await (0, _.Yn)(!1);
            }).then(() => r()).catch(() => {
              P(A.Z.Messages.ERROR_OCCURRED_TRY_AGAIN), x(C.x.INIT);
            });
          },
          children: [
            (0, n.jsxs)(o.ModalContent, {
              className: g.content,
              children: [
                (0, n.jsx)('div', {
                  className: g.icon,
                  children: (0, n.jsx)('img', {
                    alt: '',
                    src: t(637163)
                  })
                }),
                (0, n.jsxs)('div', {
                  children: [
                    (0, n.jsx)(o.Text, {
                      variant: 'text-md/normal',
                      children: A.Z.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
                    }),
                    (0, n.jsx)(o.TextInput, {
                      className: g.input,
                      value: N,
                      onChange: e => {
                        O(e), p(0 === e.length);
                      },
                      autoFocus: !0,
                      minLength: 1
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)(o.ModalFooter, {
              className: g.footer,
              children: [
                (0, n.jsx)(o.Button, {
                  type: 'submit',
                  disabled: h,
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

function h(e) {
  let {
onSelect: s,
credential: a
  } = e;
  return (0, n.jsxs)(o.Menu, {
navId: 'webauthn-credential-actions',
onClose: l.Zy,
'aria-label': A.Z.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
onSelect: s,
children: [
  (0, n.jsx)(o.MenuItem, {
    id: 'webauthn-edit-credential-'.concat(a.id),
    label: A.Z.Messages.EDIT,
    action: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await t.e('804').then(t.bind(t, 89616));
        return s => (0, n.jsx)(e, {
          credential: a,
          ...s
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
hasFetchedCredentials: s
  } = (0, r.cj)([N.Z], () => ({
hasFetchedCredentials: N.Z.hasFetchedCredentials(),
credentials: N.Z.getCredentials()
  }));
  a.useEffect(() => {
!s && (0, S.hL)();
  }, [s]);
  let [t, i] = a.useState(!1);
  return (0, n.jsxs)(o.FormSection, {
title: A.Z.Messages.TWO_FA_WEBAUTHN_TITLE,
className: g.settings,
children: [
  (0, n.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: g.description,
    children: A.Z.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
  }),
  e.length > 0 && (0, n.jsx)('div', {
    className: g.credentialList,
    children: e.map(e => (0, n.jsx)(c.Z, {
      avatar: null,
      name: e.name,
      className: g.credentialItem,
      onContextMenu: s => {
        (0, l.vq)(s, s => (0, n.jsx)(h, {
          ...s,
          credential: e
        }));
      },
      children: (0, n.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.ICON,
        onClick: s => {
          (0, l.vq)(s, s => (0, n.jsx)(h, {
            ...s,
            credential: e
          }));
        },
        'aria-label': A.Z.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
        innerClassName: g.credentialOptions,
        children: (0, n.jsx)(o.MoreVerticalIcon, {
          size: 'md',
          color: 'currentColor',
          className: g.__invalid_overflowIcon,
          colorClass: g.__invalid_overflowIconFg,
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
            ticket: s,
            challenge: t
          } = e;
          (0, o.openModal)(e => (0, n.jsx)(O, {
            ...e,
            ticket: s,
            challenge: t
          }));
        }).catch(e => {
          e.message !== A.Z.Messages.MFA_V2_CANCELED && I.Z.captureException(e);
        }).finally(() => {
          i(!1);
        });
      },
      submitting: t,
      disabled: !E.Ae,
      size: o.Button.Sizes.SMALL,
      children: A.Z.Messages.TWO_FA_WEBAUTHN_REGISTER
    })
  })
]
  });
}