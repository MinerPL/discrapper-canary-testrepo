n.d(t, {
  Z: function() {
return M;
  }
});
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(442837),
  o = n(704215),
  c = n(481060),
  d = n(605236),
  u = n(621923),
  _ = n(768762),
  I = n(999382),
  E = n(743475),
  T = n(983135),
  m = n(570961),
  N = n(208665),
  S = n(359191),
  h = n(84658),
  g = n(142961),
  C = n(729311),
  x = n(850864),
  p = n(729995),
  R = n(966301),
  f = n(707076),
  L = n(213956),
  O = n(689938),
  A = n(236169);

function M() {
  let e = (0, l.e7)([I.Z], () => I.Z.getGuildId());
  return null == e ? null : (0, s.jsx)(D, {
guildId: e
  });
}

function D(e) {
  let t, {
  guildId: n
} = e,
i = (0, l.e7)([S.Z], () => S.Z.getCurrentPage()),
I = (0, l.e7)([S.Z], () => {
  let e = (0, h.lg)(i);
  return null != e && !S.Z.isEducationUpsellDismissed(e);
}),
N = (0, g.Z)(n),
M = !N && I,
{
  homeSettingsEnabled: D
} = (0, u.kZ)(n);
  switch (a.useEffect(() => {
  (0, d.EW)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
}, []), i) {
case h.PG.LANDING:
  t = N ? (0, s.jsx)(p.Z, {
    completed: !0,
    guildId: n
  }) : (0, s.jsx)(f.Z, {});
  break;
case h.PG.SAFETY_CHECK:
  t = (0, s.jsx)(L.Z, {
    hideChangelog: !0
  });
  break;
case h.PG.DEFAULT_CHANNELS:
  t = (0, s.jsx)(C.Z, {
    saveOnClose: !N
  });
  break;
case h.PG.CUSTOMIZATION_QUESTIONS:
  t = (0, s.jsx)(R.ZP, {
    saveOnClose: !N
  });
  break;
case h.PG.HOME_SETTINGS:
  t = (0, s.jsx)(x.Z, {
    saveOnClose: !N
  });
  break;
case h.PG.REVIEW:
  t = (0, s.jsx)(p.Z, {
    completed: N,
    guildId: n
  });
  }
  return (0, s.jsxs)('div', {
className: r()(A.onboardingContainer, {
  [A.upsellOnTop]: M
}),
children: [
  !N && i !== h.PG.LANDING && (0, s.jsx)(v, {
    setOnboardingStep: T.$K,
    page: i,
    homeSettingsEnabled: D
  }),
  N && i !== h.PG.LANDING && (0, s.jsx)('div', {
    children: (0, s.jsxs)(c.Button, {
      innerClassName: A.backButton,
      look: c.Button.Looks.BLANK,
      size: c.Button.Sizes.MIN,
      onClick: () => {
        (0, m.NB)(), (0, E.BG)(), (0, T.$K)(h.PG.LANDING);
      },
      children: [
        (0, s.jsx)(_.Z, {
          className: A.arrow,
          direction: _.Z.Directions.LEFT
        }),
        (0, s.jsx)(c.Text, {
          variant: 'text-sm/semibold',
          color: 'interactive-normal',
          children: O.Z.Messages.BACK
        })
      ]
    })
  }),
  (0, s.jsx)('div', {
    children: t
  })
]
  });
}

function v(e) {
  let {
page: t,
setOnboardingStep: n,
homeSettingsEnabled: a
  } = e, i = (0, l.e7)([S.Z], () => S.Z.hasErrors()), o = e => {
if (!i)
  return () => n(e);
  }, d = (0, l.e7)([N.Z], () => N.Z.advancedMode);
  return (0, s.jsxs)('div', {
className: A.progressContainer,
children: [
  (0, s.jsxs)(c.Clickable, {
    className: r()(A.progressBarContainer, A.clickableProgressBar),
    onClick: o(h.PG.SAFETY_CHECK),
    children: [
      (0, s.jsx)('div', {
        className: r()(A.progressBar, {
          [A.progressBarCurrent]: t === h.PG.SAFETY_CHECK
        })
      }),
      (0, s.jsx)(c.Text, {
        color: t === h.PG.SAFETY_CHECK ? 'text-brand' : 'text-muted',
        variant: 'text-xs/medium',
        children: O.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_SAFETY.format({
          stepNumber: 1
        })
      })
    ]
  }),
  (0, s.jsxs)(c.Clickable, {
    className: r()(A.progressBarContainer, A.clickableProgressBar),
    onClick: o(h.PG.DEFAULT_CHANNELS),
    children: [
      (0, s.jsx)('div', {
        className: r()(A.progressBar, {
          [A.progressBarCurrent]: t === h.PG.DEFAULT_CHANNELS
        })
      }),
      (0, s.jsx)(c.Text, {
        color: t === h.PG.DEFAULT_CHANNELS ? 'text-brand' : 'text-muted',
        variant: 'text-xs/medium',
        children: d ? O.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_CHANNELS_ADVANCED.format({
          stepNumber: 2
        }) : O.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_CHANNELS.format({
          stepNumber: 2
        })
      })
    ]
  }),
  (0, s.jsxs)(c.Clickable, {
    className: r()(A.progressBarContainer, A.clickableProgressBar),
    onClick: o(h.PG.CUSTOMIZATION_QUESTIONS),
    children: [
      (0, s.jsx)('div', {
        className: r()(A.progressBar, {
          [A.progressBarCurrent]: t === h.PG.CUSTOMIZATION_QUESTIONS
        })
      }),
      (0, s.jsx)(c.Text, {
        color: t === h.PG.CUSTOMIZATION_QUESTIONS ? 'text-brand' : 'text-muted',
        variant: 'text-xs/medium',
        children: d ? O.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_PROMPTS_ADVANCED.format({
          stepNumber: 3
        }) : O.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_PROMPTS.format({
          stepNumber: 3
        })
      })
    ]
  }),
  a && (0, s.jsxs)(c.Clickable, {
    className: r()(A.progressBarContainer, A.clickableProgressBar),
    onClick: o(h.PG.HOME_SETTINGS),
    children: [
      (0, s.jsx)('div', {
        className: r()(A.progressBar, {
          [A.progressBarCurrent]: t === h.PG.HOME_SETTINGS
        })
      }),
      (0, s.jsx)(c.Text, {
        color: t === h.PG.HOME_SETTINGS ? 'text-brand' : 'text-muted',
        variant: 'text-xs/medium',
        children: O.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_HOME.format({
          stepNumber: 4
        })
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: A.progressBarContainer,
    children: [
      (0, s.jsx)('div', {
        className: r()(A.progressBar, {
          [A.progressBarCurrent]: t === h.PG.REVIEW
        })
      }),
      (0, s.jsx)(c.Text, {
        color: t === h.PG.REVIEW ? 'text-brand' : 'text-muted',
        variant: 'text-xs/medium',
        children: O.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_REVIEW.format({
          stepNumber: 3 + (a ? 1 : 0) + 1
        })
      })
    ]
  })
]
  });
}