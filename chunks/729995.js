n.d(t, {
  Z: function() {
return R;
  }
});
var s = n(735250);
n(470079);
var a = n(442837),
  i = n(481060),
  r = n(2052),
  l = n(367907),
  o = n(45966),
  c = n(734893),
  d = n(621923),
  u = n(661824),
  _ = n(430824),
  I = n(626135),
  E = n(983135),
  T = n(8426),
  m = n(969632),
  N = n(570961),
  S = n(84658),
  h = n(974513),
  g = n(677892),
  C = n(981631),
  x = n(689938),
  p = n(717305);

function R(e) {
  let {
guildId: t,
completed: n
  } = e, {
homeSettingsEnabled: i
  } = (0, d.kZ)(t), c = (0, a.e7)([o.Z], () => o.Z.getEnabled(t)), {
location: _
  } = (0, r.O)();
  _.object = n ? C.qAy.ONBOARDING_EDIT : C.qAy.ONBOARDING_REVIEW;
  let m = async function() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
c ? (await (0, N.$y)(t, !1), I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
  ...(0, l.hH)(t),
  action_taken: S.W$[S.W$.TOGGLE_DISABLED],
  location: _
})) : (await (0, N.$y)(t, !0), e && (0, T.To)(t, !0), n ? I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
  ...(0, l.hH)(t),
  action_taken: S.W$[S.W$.TOGGLE_ENABLED],
  location: _
}) : I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
  ...(0, l.hH)(t),
  step: S.PG[S.PG.REVIEW],
  back: !1,
  skip: !1,
  completed: !0
}));
  }, h = () => {
I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
  ...(0, l.hH)(t),
  action_taken: S.W$[S.W$.PREVIEW],
  location: _
}), (0, E.di)(t);
  }, x = (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(g.ku, {
    guildId: t,
    onEdit: () => {
      I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
        ...(0, l.hH)(t),
        action_taken: S.W$[S.W$.EDIT_DEFAULT_CHANNELS],
        location: _
      }), (0, E.$K)(S.PG.DEFAULT_CHANNELS);
    },
    disableGoodStatus: n
  }),
  (0, s.jsx)(u.Z, {
    className: p.divider
  }),
  (0, s.jsx)(g.ap, {
    guildId: t,
    onEdit: () => {
      I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
        ...(0, l.hH)(t),
        action_taken: S.W$[S.W$.EDIT_CUSTOMIZATION_QUESTIONS],
        location: _
      }), (0, E.$K)(S.PG.CUSTOMIZATION_QUESTIONS);
    },
    disableGoodStatus: n
  }),
  i && (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(u.Z, {
        className: p.divider
      }),
      (0, s.jsx)(g.P_, {
        guildId: t,
        onEdit: () => {
          I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
            ...(0, l.hH)(t),
            action_taken: S.W$[S.W$.EDIT_HOME_SETTINGS],
            location: _
          }), (0, E.$K)(S.PG.HOME_SETTINGS);
        },
        disableGoodStatus: n
      })
    ]
  })
]
  });
  return n ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(f, {
    guildId: t,
    handlePreview: h
  }),
  (0, s.jsx)(L, {}),
  (0, s.jsxs)('div', {
    className: p.content,
    children: [
      (0, s.jsx)(O, {
        guildId: t,
        handleOnboardingToggle: m
      }),
      x
    ]
  })
]
  }) : (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: p.content,
    children: [
      (0, s.jsx)(A, {
        guildId: t,
        handleOnboardingToggle: m,
        handlePreview: h
      }),
      x
    ]
  }),
  (0, s.jsx)(M, {
    guildId: t
  })
]
  });
}

function f(e) {
  let {
guildId: t,
handlePreview: n
  } = e;
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(i.Heading, {
    variant: 'heading-lg/semibold',
    color: 'header-primary',
    className: p.header,
    children: x.Z.Messages.GUILD_SETTINGS_ONBOARDING
  }),
  (0, s.jsx)(i.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: p.subheader,
    children: x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE
  }),
  (0, s.jsxs)('div', {
    className: p.help,
    children: [
      (0, s.jsx)(i.Anchor, {
        target: '_blank',
        href: C.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, s.jsx)(i.Text, {
          variant: 'text-sm/medium',
          color: 'text-link',
          children: x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
        })
      }),
      (0, s.jsx)('div', {
        className: p.helpSeparator
      }),
      (0, s.jsx)(i.Anchor, {
        onClick: n,
        children: (0, s.jsx)(i.Text, {
          variant: 'text-sm/medium',
          color: 'text-link',
          children: x.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
        })
      }),
      (0, s.jsx)('div', {
        className: p.helpSeparator
      }),
      (0, s.jsx)(h.Wu, {
        guildId: t
      })
    ]
  })
]
  });
}

function L() {
  let e = '\u2022 ';
  return (0, s.jsxs)('div', {
className: p.notice,
children: [
  (0, s.jsx)('img', {
    className: p.wumpus,
    src: n(33631),
    alt: 'wumpus'
  }),
  (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-md/semibold',
        color: 'header-primary',
        className: p.header,
        children: x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_HEADER
      }),
      (0, s.jsxs)(i.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: [
          e,
          x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_2
        ]
      }),
      (0, s.jsxs)(i.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: [
          e,
          x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_3
        ]
      })
    ]
  })
]
  });
}

function O(e) {
  let {
guildId: t,
handleOnboardingToggle: n
  } = e, r = (0, g.$$)(t), l = (0, a.e7)([o.Z], () => o.Z.getEnabled(t));
  return (0, s.jsxs)('div', {
className: p.review,
children: [
  (0, s.jsxs)('div', {
    className: p.reviewHeaderText,
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-md/semibold',
        children: l ? x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_ENABLED : x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_DISABLED
      }),
      (0, s.jsx)(i.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: l ? x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_ENABLED : x.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_DISABLED
      })
    ]
  }),
  (0, s.jsx)(i.Switch, {
    checked: l,
    onChange: () => n(!1),
    disabled: !l && !r
  })
]
  });
}

function A(e) {
  let {
guildId: t,
handleOnboardingToggle: n,
handlePreview: r
  } = e, l = (0, g.$$)(t), o = (0, a.e7)([m.Z], () => m.Z.getSettings()), d = (0, c.uo)(o);
  return (0, s.jsxs)('div', {
className: p.reviewHeader,
children: [
  (0, s.jsxs)('div', {
    className: p.reviewHeaderText,
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-md/semibold',
        children: l ? x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE : x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE_INCOMPLETE
      }),
      (0, s.jsx)(i.Text, {
        variant: 'text-xs/normal',
        children: l ? x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION : x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION_INCOMPLETE
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: p.reviewActions,
    children: [
      (0, s.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.OUTLINED,
        onClick: r,
        children: x.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
      }),
      (0, s.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.BRAND,
        onClick: () => n(d),
        disabled: !l,
        children: x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_ENABLE_ONBOARDING
      })
    ]
  })
]
  });
}

function M(e) {
  let {
guildId: t
  } = e, n = (0, a.e7)([_.Z], () => _.Z.getGuild(t));
  return null == n || n.verificationLevel < C.sFg.VERY_HIGH ? null : (0, s.jsxs)('div', {
className: p.rolesWarning,
children: [
  (0, s.jsx)(i.CircleWarningIcon, {
    size: 'xs',
    color: 'currentColor',
    className: p.warningIcon
  }),
  (0, s.jsx)(i.Text, {
    variant: 'text-sm/medium',
    color: 'text-muted',
    children: x.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW_ROLES_WARNING
  })
]
  });
}