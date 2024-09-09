t(47120), t(642549), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(315314), t(610138), t(216116), t(78328), t(815648), t(653041);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(979554),
    l = t(442837),
    c = t(481060),
    d = t(53281),
    _ = t(921813),
    u = t(594174),
    E = t(572004),
    T = t(451593),
    S = t(477146),
    I = t(329156),
    N = t(792461),
    m = t(346537),
    C = t(830318);
let A = (e) => {
    let [s, t] = e.split(','),
        n = atob(t),
        a = s.split(';')[0],
        i = new ArrayBuffer(n.length),
        r = new Uint8Array(i);
    for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
    return new Blob([i], { type: a });
};
s.Z = (e) => {
    let { effect: s, back: t } = e,
        { upsertConfig: i } = (0, T.E)(),
        g = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        [h, O] = a.useState(!0),
        p = a.useRef(null),
        [R, x] = a.useState(!1),
        [f, M] = a.useState(!1),
        [D, P] = a.useState(!1),
        [L, b] = a.useState([]),
        [Z, v] = a.useState(s.name);
    return (a.useEffect(() => {
        let e = s.config.effects;
        e.length > 0 &&
            b(
                [...e].map((e) => {
                    let s = A(e.base64),
                        t = URL.createObjectURL(s);
                    return (e.src = t), e;
                })
            );
    }, [s]),
    a.useEffect(() => {
        i({
            id: s.id,
            name: Z,
            config: { effects: L }
        });
    }, [L, Z]),
    null == g)
        ? (0, n.jsx)('div', {})
        : (0, n.jsxs)('div', {
              className: N.root,
              children: [
                  (0, n.jsx)('div', {
                      className: r()(N.row, N.end),
                      children: (0, n.jsx)(c.Button, {
                          onClick: t,
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
                                      src: R ? m : C,
                                      alt: '',
                                      width: 450
                                  }),
                                  h &&
                                      (0, n.jsx)(I.Z, {
                                          config: {
                                              type: o.Z.PROFILE_EFFECT,
                                              title: 'debug',
                                              description: 'debug',
                                              accessibilityLabel: 'debug',
                                              reducedMotionSrc: '',
                                              effects: D ? (0, S.Tp)(L) : L,
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
                                              onChange: (e) => {
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
                                                      checked: f,
                                                      className: N.checkBox,
                                                      onChange: () => {
                                                          M(!f);
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
                                                      children: 'Upload Layer'
                                                  }),
                                                  (0, n.jsx)(d.Z, {
                                                      ref: p,
                                                      onChange: (e) => {
                                                          let s = e.currentTarget.files;
                                                          if (null == s) return;
                                                          let t = s[0],
                                                              n = new FileReader();
                                                          (n.onload = async (e) => {
                                                              if (null == e.target || 'string' != typeof e.target.result) return;
                                                              let s = await (0, S.Xv)(URL.createObjectURL(t), e.target.result, t, L.length);
                                                              b((e) => [...e, s]);
                                                          }),
                                                              n.readAsDataURL(t);
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
                                                  (0, E.JG)((0, S.HV)(L, 'proto')), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                                              },
                                              children: 'Export'
                                          })
                                      ]
                                  }),
                                  (0, n.jsxs)('div', {
                                      className: r()(N.bottomControls, N.shareSection),
                                      children: [
                                          (0, n.jsxs)(c.Text, {
                                              variant: 'text-sm/semibold',
                                              children: [
                                                  'Export the config for sharing in this tool.',
                                                  ' ',
                                                  (0, n.jsx)('span', {
                                                      className: N.warningText,
                                                      children: "WARNING: it's really big"
                                                  })
                                              ]
                                          }),
                                          (0, n.jsx)(c.Button, {
                                              color: c.ButtonColors.GREEN,
                                              onClick: () => {
                                                  (0, E.JG)(JSON.stringify(s)), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                                              },
                                              children: 'Share'
                                          })
                                      ]
                                  }),
                                  L.some((e) => {
                                      var s;
                                      return (null !== (s = e.randomizedSources) && void 0 !== s ? s : []).length > 0;
                                  }) &&
                                      (0, n.jsxs)('div', {
                                          className: r()(N.section, N.randomizedRules),
                                          children: [
                                              (0, n.jsx)(c.Text, {
                                                  variant: 'text-md/bold',
                                                  children: 'Rules of Randomized Effects'
                                              }),
                                              (0, n.jsxs)('ol', {
                                                  children: [(0, n.jsx)('li', { children: 'When an effect has randomization, all layers with random options must have the same number of options.' }), (0, n.jsx)('li', { children: 'The duration for the random options of a layer must be the same' }), (0, n.jsx)('li', { children: 'If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)' }), (0, n.jsx)('li', { children: 'Click "Replay Animation" to "reroll" the randomization' })]
                                              })
                                          ]
                                      }),
                                  (0, n.jsx)('div', {
                                      children:
                                          f &&
                                          (0, n.jsxs)('div', {
                                              className: r()(N.userProfilePreview, N.preview),
                                              children: [
                                                  (0, n.jsx)(_.Z, {
                                                      user: g,
                                                      pendingAvatar: void 0,
                                                      pendingProfileEffectId: null,
                                                      canUsePremiumCustomization: !0,
                                                      isTryItOutFlow: !0
                                                  }),
                                                  (0, n.jsx)(I.Z, {
                                                      config: {
                                                          type: o.Z.PROFILE_EFFECT,
                                                          title: 'debug',
                                                          description: 'debug',
                                                          accessibilityLabel: 'debug',
                                                          reducedMotionSrc: '',
                                                          effects: D ? (0, S.Tp)(L) : L,
                                                          animationType: 0
                                                      },
                                                      profileEffectId: 'debug'
                                                  })
                                              ]
                                          })
                                  })
                              ]
                          }),
                          (0, n.jsx)('div', {
                              className: r()(N.grid, N.layers),
                              children: L.map((e, s) => {
                                  var t;
                                  return (0, n.jsxs)(
                                      'div',
                                      {
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
                                              (null !== (t = e.randomizedSources) && void 0 !== t ? t : []).map((e, s) =>
                                                  (0, n.jsx)(
                                                      'img',
                                                      {
                                                          src: e,
                                                          className: N.layerPreview,
                                                          alt: ''
                                                      },
                                                      s
                                                  )
                                              ),
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
                                                                  onChange: (e) => {
                                                                      b((t) => {
                                                                          let n = [...t],
                                                                              a = t[s];
                                                                          return (a.start = +e.target.value), (n[s] = a), n;
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
                                                                  onChange: (e) => {
                                                                      b((t) => {
                                                                          let n = [...t],
                                                                              a = t[s];
                                                                          return (a.duration = +e.target.value), (n[s] = a), n;
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
                                                                  onChange: (e) => {
                                                                      b((t) => {
                                                                          let n = [...t],
                                                                              a = t[s];
                                                                          return (a.loop = e.target.checked), (n[s] = a), n;
                                                                      });
                                                                  }
                                                              })
                                                          ]
                                                      }),
                                                      (0, n.jsx)('div', {
                                                          className: N.col,
                                                          children:
                                                              e.loop &&
                                                              (0, n.jsxs)(n.Fragment, {
                                                                  children: [
                                                                      (0, n.jsx)(c.Text, {
                                                                          variant: 'text-md/bold',
                                                                          children: 'Loop Delay'
                                                                      }),
                                                                      (0, n.jsx)('input', {
                                                                          type: 'number',
                                                                          value: e.loopDelay,
                                                                          className: N.input,
                                                                          onChange: (e) => {
                                                                              b((t) => {
                                                                                  let n = [...t],
                                                                                      a = t[s];
                                                                                  return (a.loopDelay = +e.target.value), (n[s] = a), n;
                                                                              });
                                                                          },
                                                                          contentEditable: !0
                                                                      })
                                                                  ]
                                                              })
                                                      })
                                                  ]
                                              }),
                                              (0, n.jsxs)('div', {
                                                  className: r()(N.row, N.end),
                                                  children: [
                                                      (0, n.jsxs)('div', {
                                                          className: N.uploadButton,
                                                          children: [
                                                              (0, n.jsx)(c.Text, {
                                                                  variant: 'text-sm/normal',
                                                                  color: 'always-white',
                                                                  children: 'Add Alternative'
                                                              }),
                                                              (0, n.jsx)(d.Z, {
                                                                  ref: p,
                                                                  onChange: (e) => {
                                                                      let t = e.currentTarget.files;
                                                                      if (null == t) return;
                                                                      let n = t[0],
                                                                          a = new FileReader();
                                                                      (a.onload = (e) => {
                                                                          b((t) => {
                                                                              if (null == e.target || 'string' != typeof e.target.result) return t;
                                                                              let n = [...t];
                                                                              return null == t[s].randomizedSources && (t[s].randomizedSources = []), t[s].randomizedSources.push(e.target.result), n;
                                                                          });
                                                                      }),
                                                                          a.readAsDataURL(n);
                                                                  },
                                                                  multiple: !1
                                                              })
                                                          ]
                                                      }),
                                                      (0, n.jsx)(c.Button, {
                                                          color: c.ButtonColors.RED,
                                                          look: c.ButtonLooks.LINK,
                                                          onClick: () => {
                                                              b((s) => s.filter((s) => s !== e));
                                                          },
                                                          children: 'Remove Layer'
                                                      })
                                                  ]
                                              })
                                          ]
                                      },
                                      s
                                  );
                              })
                          })
                      ]
                  })
              ]
          });
};
