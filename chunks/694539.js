s(47120), s(642549), s(518263), s(970173), s(520712), s(268111), s(941497), s(32026), s(480839), s(744285), s(492257), s(873817), s(315314), s(610138), s(216116), s(78328), s(815648);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(979554),
  l = s(442837),
  c = s(481060),
  d = s(53281),
  _ = s(921813),
  E = s(594174),
  u = s(572004),
  T = s(451593),
  I = s(477146),
  S = s(329156),
  N = s(757613),
  C = s(346537),
  m = s(830318);
let A = e => {
  let [t, s] = e.split(','), n = atob(s), a = t.split(';')[0], i = new ArrayBuffer(n.length), r = new Uint8Array(i);
  for (let e = 0; e < n.length; e++)
r[e] = n.charCodeAt(e);
  return new Blob([i], {
type: a
  });
};
t.Z = e => {
  let {
effect: t,
back: s
  } = e, {
upsertConfig: i
  } = (0, T.E)(), g = (0, l.e7)([E.default], () => E.default.getCurrentUser()), [h, O] = a.useState(!0), p = a.useRef(null), [R, x] = a.useState(!1), [M, f] = a.useState(!1), [D, P] = a.useState(!1), [L, b] = a.useState([]), [Z, v] = a.useState(t.name);
  return (a.useEffect(() => {
let e = t.config.effects;
e.length > 0 && b([...e].map(e => {
  let t = A(e.base64),
    s = URL.createObjectURL(t);
  return e.src = s, e;
}));
  }, [t]), a.useEffect(() => {
i({
  id: t.id,
  name: Z,
  config: {
    effects: L
  }
});
  }, [
L,
Z
  ]), null == g) ? (0, n.jsx)('div', {}) : (0, n.jsxs)('div', {
className: N.root,
children: [
  (0, n.jsx)('div', {
    className: r()(N.row, N.end),
    children: (0, n.jsx)(c.Button, {
      onClick: s,
      children: 'Back'
    })
  }),
  (0, n.jsxs)('div', {
    className: N.grid,
    children: [
      (0, n.jsxs)('div', {
        className: r()(N.col, N.preview),
        children: [
          (0, n.jsx)('img', {
            src: R ? C : m,
            alt: '',
            width: 450
          }),
          h && (0, n.jsx)(S.Z, {
            config: {
              type: o.Z.PROFILE_EFFECT,
              title: 'debug',
              description: 'debug',
              accessibilityLabel: 'debug',
              reducedMotionSrc: '',
              effects: D ? (0, I.Tp)(L) : L,
              animationType: 0
            },
            profileEffectId: 'debug'
          })
        ]
      }),
      (0, n.jsxs)('div', {
        className: r()(N.col, N.controls),
        children: [
          (0, n.jsxs)('div', {
            className: r()(N.col, N.section),
            children: [
              (0, n.jsx)(c.Text, {
                variant: 'text-md/normal',
                children: 'Profile Effect Name'
              }),
              (0, n.jsx)('input', {
                type: 'text',
                value: Z,
                className: N.input,
                onChange: e => {
                  v(e.target.value);
                }
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: N.grid,
            children: [
              (0, n.jsxs)('div', {
                className: N.row,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'Dark Theme'
                  }),
                  (0, n.jsx)('input', {
                    type: 'checkbox',
                    checked: R,
                    className: N.checkBox,
                    onChange: () => {
                      x(!R);
                    }
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: N.row,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'Show User Profile'
                  }),
                  (0, n.jsx)('input', {
                    type: 'checkbox',
                    checked: M,
                    className: N.checkBox,
                    onChange: () => {
                      f(!M);
                    }
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: N.row,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'Simulate Android'
                  }),
                  (0, n.jsx)('input', {
                    type: 'checkbox',
                    checked: D,
                    className: N.checkBox,
                    onChange: () => {
                      P(!D);
                    }
                  })
                ]
              })
            ]
          }),
          (0, n.jsxs)('div', {
            children: [
              (0, n.jsxs)('div', {
                className: N.uploadButton,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: 'Click to upload image'
                  }),
                  (0, n.jsx)(d.Z, {
                    ref: p,
                    onChange: e => {
                      let t = e.currentTarget.files;
                      if (null == t)
                        return;
                      let s = t[0],
                        n = new FileReader();
                      n.onload = async e => {
                        if (null == e.target || 'string' != typeof e.target.result)
                          return;
                        let t = await (0, I.Xv)(URL.createObjectURL(s), e.target.result, s, L.length);
                        b(e => [
                          ...e,
                          t
                        ]);
                      }, n.readAsDataURL(s);
                    },
                    multiple: !1
                  })
                ]
              }),
              (0, n.jsx)(c.Text, {
                variant: 'text-sm/semibold',
                children: 'Make sure to upload the bottommost layer first!'
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: N.bottomControls,
            children: [
              (0, n.jsx)(c.Button, {
                color: c.ButtonColors.RED,
                look: c.ButtonLooks.LINK,
                onClick: () => {
                  b([]);
                },
                children: 'Clear Assets'
              }),
              (0, n.jsx)(c.Button, {
                color: c.ButtonColors.BRAND,
                onClick: () => {
                  O(!1), setTimeout(() => O(!0), 100);
                },
                children: 'Replay Animation'
              }),
              (0, n.jsx)(c.Button, {
                color: c.ButtonColors.BRAND,
                onClick: () => {
                  (0, u.JG)((0, I.HV)(L, 'proto')), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                },
                children: 'Export'
              })
            ]
          }),
          M && (0, n.jsxs)('div', {
            className: r()(N.userProfilePreview, N.preview),
            children: [
              (0, n.jsx)(_.Z, {
                user: g,
                pendingAvatar: void 0,
                pendingProfileEffectId: null,
                canUsePremiumCustomization: !0,
                isTryItOutFlow: !0
              }),
              (0, n.jsx)(S.Z, {
                config: {
                  type: o.Z.PROFILE_EFFECT,
                  title: 'debug',
                  description: 'debug',
                  accessibilityLabel: 'debug',
                  reducedMotionSrc: '',
                  effects: D ? (0, I.Tp)(L) : L,
                  animationType: 0
                },
                profileEffectId: 'debug'
              })
            ]
          })
        ]
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: r()(N.grid, N.layers),
    children: L.map((e, t) => (0, n.jsxs)('div', {
      className: N.layerForm,
      children: [
        (0, n.jsx)(c.Heading, {
          variant: 'heading-md/bold',
          children: e.name
        }),
        (0, n.jsx)('img', {
          src: e.base64,
          className: N.layerPreview,
          alt: ''
        }),
        (0, n.jsxs)('div', {
          className: r()(N.grid, N.section),
          children: [
            (0, n.jsxs)('div', {
              className: N.col,
              children: [
                (0, n.jsx)(c.Text, {
                  variant: 'text-md/bold',
                  children: 'Start'
                }),
                (0, n.jsx)('input', {
                  type: 'number',
                  value: e.start,
                  className: N.input,
                  onChange: e => {
                    b(s => {
                      let n = [...s],
                        a = s[t];
                      return a.start = +e.target.value, n[t] = a, n;
                    });
                  },
                  contentEditable: !0
                })
              ]
            }),
            (0, n.jsxs)('div', {
              className: N.col,
              children: [
                (0, n.jsx)(c.Text, {
                  variant: 'text-md/bold',
                  children: 'Duration'
                }),
                (0, n.jsx)('input', {
                  type: 'number',
                  value: e.duration,
                  className: N.input,
                  onChange: e => {
                    b(s => {
                      let n = [...s],
                        a = s[t];
                      return a.duration = +e.target.value, n[t] = a, n;
                    });
                  },
                  contentEditable: !0
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: r()(N.grid, N.section),
          children: [
            (0, n.jsxs)('div', {
              className: N.col,
              children: [
                (0, n.jsx)(c.Text, {
                  variant: 'text-md/bold',
                  children: 'Loop'
                }),
                (0, n.jsx)('input', {
                  type: 'checkbox',
                  checked: e.loop,
                  className: N.checkBox,
                  onChange: e => {
                    b(s => {
                      let n = [...s],
                        a = s[t];
                      return a.loop = e.target.checked, n[t] = a, n;
                    });
                  }
                })
              ]
            }),
            (0, n.jsx)('div', {
              className: N.col,
              children: e.loop && (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/bold',
                    children: 'Loop Delay'
                  }),
                  (0, n.jsx)('input', {
                    type: 'number',
                    value: e.loopDelay,
                    className: N.input,
                    onChange: e => {
                      b(s => {
                        let n = [...s],
                          a = s[t];
                        return a.loopDelay = +e.target.value, n[t] = a, n;
                      });
                    },
                    contentEditable: !0
                  })
                ]
              })
            })
          ]
        }),
        (0, n.jsx)('div', {
          className: r()(N.row, N.end),
          children: (0, n.jsx)(c.Button, {
            color: c.ButtonColors.RED,
            look: c.ButtonLooks.LINK,
            onClick: () => {
              b(t => t.filter(t => t !== e));
            },
            children: 'Remove Layer'
          })
        })
      ]
    }, t))
  })
]
  });
};