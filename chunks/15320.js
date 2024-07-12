n.d(t, {
  Z: function() {
return B;
  }
});
var s = n(735250),
  r = n(470079),
  o = n(399606),
  l = n(481060),
  i = n(367907),
  a = n(863249),
  d = n(944163),
  c = n(14263),
  u = n(996753),
  m = n(626135),
  p = n(823379),
  h = n(806223),
  g = n(45966),
  x = n(637853),
  f = n(968644),
  _ = n(104265),
  N = n(588632),
  I = n(290511),
  b = n(981631),
  C = n(689938),
  E = n(570581);

function v(e, t) {
  return (0, s.jsx)('span', {
className: E.helpTextItem,
children: e
  }, t);
}

function j(e) {
  return null != e && h.Z.getCurrentConfig({
location: 'ba216b_1'
  }, {
autoTrackExposure: !0
  }).includeRules;
}

function O(e) {
  let {
headerId: t,
guild: n,
step: r,
lastPrompt: i,
questionCount: a,
currentPrompt: d,
selectOption: m,
gotoPrevPrompt: p,
gotoNextPrompt: h,
completeOnboarding: _
  } = e, I = (0, o.Wu)([g.Z], () => g.Z.getOnboardingResponsesForPrompt(n.id, d.id)), b = 0 === I.length && (null == d ? void 0 : d.required), j = null == d ? void 0 : d.options.filter(e => I.includes(e.id)), O = (0, x.L6)(j), Z = (0, x.dX)(j), B = 0 === I.length, {
helpText: R,
helpTextAdditional: T
  } = (0, f.Z)({
guild: n,
prompt: d,
selectedRoleIds: O,
selectedChannelIds: Z,
itemHook: v
  }), D = (0, c.Z)(n.id, 1000), M = d.options.map(e => ({
value: e.id,
...e
  })), P = d.options.filter(e => I.includes(e.id)).map(e => e.id);
  return (0, s.jsx)('div', {
className: E.prompt,
children: (0, s.jsxs)('div', {
  className: E.promptContent,
  children: [
    (0, s.jsxs)(l.ScrollerThin, {
      className: E.scrollerContent,
      children: [
        (0, s.jsxs)('div', {
          className: E.questionHeader,
          children: [
            (0, s.jsx)(l.Text, {
              variant: 'text-sm/medium',
              color: 'text-muted',
              children: C.Z.Messages.ONBOARDING_QUESTION_COUNT.format({
                currentQuestion: r + 1,
                questionCount: a
              })
            }),
            d.required ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(l.Text, {
                  variant: 'text-xs/normal',
                  className: E.headerSeparator,
                  children: '\xB7'
                }),
                (0, s.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-brand',
                  children: C.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
                })
              ]
            }) : null
          ]
        }),
        (0, s.jsx)(l.Heading, {
          className: E.title,
          variant: 'heading-xl/semibold',
          color: 'header-primary',
          id: t,
          children: d.title
        }),
        (0, s.jsx)(N.Z, {
          options: M,
          value: P,
          onChange: e => {
            let t = e.find(e => !I.includes(e.id)),
              n = e.map(e => e.id);
            if (null != t)
              m(d.id, t.id, !0);
            else {
              let e = I.filter(e => !n.includes(e));
              d.options.filter(t => e.includes(t.id)).forEach(e => {
                m(d.id, e.id, !1);
              });
            }
          },
          memberCounts: D
        })
      ]
    }),
    (0, s.jsxs)('div', {
      className: E.navButtons,
      children: [
        (0, s.jsx)('div', {
          className: E.leftButtons,
          children: r > 0 && (0, s.jsxs)(l.Button, {
            className: E.button,
            innerClassName: E.buttonInner,
            onClick: () => p(I.length),
            size: l.Button.Sizes.MEDIUM,
            look: l.Button.Looks.OUTLINED,
            grow: !1,
            color: l.Button.Colors.PRIMARY,
            children: [
              (0, s.jsx)(u.Z, {
                className: E.arrow,
                direction: u.Z.Directions.LEFT
              }),
              C.Z.Messages.BACK
            ]
          })
        }),
        (0, s.jsxs)('div', {
          className: E.rightButtons,
          children: [
            (0, s.jsxs)(l.Text, {
              className: E.helpText,
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: [
                R,
                ' ',
                T
              ]
            }),
            (0, s.jsx)(l.Tooltip, {
              text: b ? C.Z.Messages.ONBOARDING_REQUIRED_QUESTION : null,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n
                } = e;
                return (0, s.jsx)(l.Button, {
                  className: E.button,
                  innerClassName: E.buttonInner,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  onClick: () => i ? _() : h(I.length),
                  disabled: b,
                  size: l.Button.Sizes.MEDIUM,
                  look: l.Button.Looks.FILLED,
                  grow: !1,
                  color: B ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
                  children: i ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      C.Z.Messages.FINISH,
                      (0, s.jsx)('span', {
                        className: E.finishEmoji,
                        role: 'img',
                        'aria-hidden': !0,
                        children: '\uD83C\uDF89'
                      })
                    ]
                  }) : (0, s.jsxs)(s.Fragment, {
                    children: [
                      B ? C.Z.Messages.SKIP : C.Z.Messages.NEXT,
                      (0, s.jsx)(u.Z, {
                        className: E.arrow,
                        direction: u.Z.Directions.RIGHT
                      })
                    ]
                  })
                });
              }
            })
          ]
        })
      ]
    })
  ]
})
  });
}

function Z(e) {
  let {
headerId: t,
guild: n,
step: r,
lastPrompt: i,
questionCount: a,
currentPrompt: d,
selectOption: c,
gotoPrevPrompt: m,
gotoNextPrompt: p,
completeOnboarding: h
  } = e, N = (0, o.Wu)([g.Z], () => g.Z.getOnboardingResponsesForPrompt(n.id, d.id)), I = 0 === N.length && (null == d ? void 0 : d.required), b = null == d ? void 0 : d.options.filter(e => N.includes(e.id)), j = (0, x.L6)(b), O = (0, x.dX)(b), Z = 0 === N.length, {
helpText: B,
helpTextAdditional: R
  } = (0, f.Z)({
guild: n,
prompt: d,
selectedRoleIds: j,
selectedChannelIds: O,
itemHook: v
  });
  return (0, s.jsx)('div', {
className: E.prompt,
children: (0, s.jsxs)('div', {
  className: E.promptContent,
  children: [
    (0, s.jsxs)(l.ScrollerThin, {
      className: E.scrollerContent,
      children: [
        (0, s.jsxs)('div', {
          className: E.questionHeader,
          children: [
            (0, s.jsx)(l.Text, {
              variant: 'text-sm/medium',
              color: 'text-muted',
              children: C.Z.Messages.ONBOARDING_QUESTION_COUNT.format({
                currentQuestion: r + 1,
                questionCount: a
              })
            }),
            d.required ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(l.Text, {
                  variant: 'text-xs/normal',
                  className: E.headerSeparator,
                  children: '\xB7'
                }),
                (0, s.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-brand',
                  children: C.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
                })
              ]
            }) : null
          ]
        }),
        (0, s.jsx)(l.Heading, {
          className: E.title,
          variant: 'heading-xl/semibold',
          color: 'header-primary',
          id: t,
          children: d.title
        }),
        (0, s.jsx)('div', {
          className: E.promptOptions,
          children: d.options.map(e => (0, s.jsx)(_.Z, {
            guildId: n.id,
            option: e,
            onSelect: t => c(d.id, e.id, null != t && t),
            selected: N.includes(e.id)
          }, e.id))
        })
      ]
    }),
    (0, s.jsxs)('div', {
      className: E.navButtons,
      children: [
        (0, s.jsx)('div', {
          className: E.leftButtons,
          children: r > 0 && (0, s.jsxs)(l.Button, {
            className: E.button,
            innerClassName: E.buttonInner,
            onClick: () => m(N.length),
            size: l.Button.Sizes.MEDIUM,
            look: l.Button.Looks.OUTLINED,
            grow: !1,
            color: l.Button.Colors.PRIMARY,
            children: [
              (0, s.jsx)(u.Z, {
                className: E.arrow,
                direction: u.Z.Directions.LEFT
              }),
              C.Z.Messages.BACK
            ]
          })
        }),
        (0, s.jsxs)('div', {
          className: E.rightButtons,
          children: [
            (0, s.jsxs)(l.Text, {
              className: E.helpText,
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: [
                B,
                ' ',
                R
              ]
            }),
            (0, s.jsx)(l.Tooltip, {
              text: I ? C.Z.Messages.ONBOARDING_REQUIRED_QUESTION : null,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n
                } = e;
                return (0, s.jsx)(l.Button, {
                  className: E.button,
                  innerClassName: E.buttonInner,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  onClick: () => i ? h() : p(N.length),
                  disabled: I,
                  size: l.Button.Sizes.MEDIUM,
                  look: l.Button.Looks.FILLED,
                  grow: !1,
                  color: Z ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
                  children: i ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      C.Z.Messages.FINISH,
                      (0, s.jsx)('span', {
                        className: E.finishEmoji,
                        role: 'img',
                        'aria-hidden': !0,
                        children: '\uD83C\uDF89'
                      })
                    ]
                  }) : (0, s.jsxs)(s.Fragment, {
                    children: [
                      Z ? C.Z.Messages.SKIP : C.Z.Messages.NEXT,
                      (0, s.jsx)(u.Z, {
                        className: E.arrow,
                        direction: u.Z.Directions.RIGHT
                      })
                    ]
                  })
                });
              }
            })
          ]
        })
      ]
    })
  ]
})
  });
}

function B(e) {
  let {
guild: t,
prompts: n,
step: l,
selectOption: c,
completeOnboarding: u,
setCurrentStep: h,
headerId: g,
disableTracking: x
  } = e, f = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id));
  r.useEffect(() => {
a.Z.fetchVerificationForm(t.id);
  }, [t.id]);
  let _ = n[l],
N = l + 1 >= n.length && !j(f),
C = n[0].required;
  r.useEffect(() => {
if (!x)
  m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
    ...(0, i.hH)(t.id),
    step: 0,
    required: C
  });
  }, [
t.id,
C,
x
  ]);
  let E = e => {
  !x && (m.default.track(b.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
    ...(0, i.hH)(t.id),
    step: l,
    options_selected: e,
    skipped: 0 === e,
    back: !1,
    in_onboarding: !0,
    is_final_step: !1
  }), l < n.length - 1 && m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
    ...(0, i.hH)(t.id),
    step: l,
    required: n[l + 1].required
  })), l + 1 < n.length ? h(l + 1) : j(f) && h('rules');
},
v = e => {
  !x && (m.default.track(b.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
    ...(0, i.hH)(t.id),
    step: l,
    skipped: !1,
    back: !0,
    options_selected: e,
    in_onboarding: !0,
    is_final_step: !1
  }), l > 0 && m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
    ...(0, i.hH)(t.id),
    step: l - 1,
    required: n[l - 1].required
  })), h(Math.max(0, l - 1));
};
  if (null == _)
return null;
  switch (_.type) {
case I.FN.MULTIPLE_CHOICE:
  return (0, s.jsx)(Z, {
    guild: t,
    headerId: g,
    step: l,
    questionCount: n.length,
    currentPrompt: _,
    lastPrompt: N,
    selectOption: c,
    gotoPrevPrompt: v,
    gotoNextPrompt: E,
    completeOnboarding: u
  });
case I.FN.DROPDOWN:
  return (0, s.jsx)(O, {
    guild: t,
    headerId: g,
    step: l,
    questionCount: n.length,
    currentPrompt: _,
    lastPrompt: N,
    selectOption: c,
    gotoPrevPrompt: v,
    gotoNextPrompt: E,
    completeOnboarding: u
  });
default:
  (0, p.vE)(_.type);
  }
}