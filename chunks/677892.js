n.d(t, {
  $$: function() {
return h;
  },
  P_: function() {
return x;
  },
  ap: function() {
return C;
  },
  ku: function() {
return g;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(442837),
  r = n(481060),
  l = n(45966),
  o = n(637853),
  c = n(734893),
  d = n(621923),
  u = n(8426),
  _ = n(969632),
  I = n(974513),
  E = n(290511),
  T = n(689938),
  m = n(786816);

function N(e) {
  let t, {
title: n,
description: a,
icon: i,
hasStarted: l,
status: o,
onEdit: c,
extra: d
  } = e;
  switch (o) {
case 'good':
  t = (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(r.CheckmarkLargeIcon, {
        size: 'xs',
        color: 'currentColor',
        className: m.checkmark
      }),
      (0, s.jsx)(r.Text, {
        variant: 'text-xs/semibold',
        color: 'status-positive',
        className: m.statusText,
        children: T.Z.Messages.DEFAULT_CHANNELS_GOOD
      })
    ]
  });
  break;
case 'warning':
  t = (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(r.CircleWarningIcon, {
        size: 'xs',
        color: 'currentColor',
        className: m.warning
      }),
      (0, s.jsx)(r.Text, {
        variant: 'text-xs/semibold',
        color: 'status-warning',
        className: m.statusText,
        children: T.Z.Messages.ONBOARDING_PROMPTS_WARNING
      })
    ]
  });
  break;
case 'required':
  t = (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(r.CircleWarningIcon, {
        size: 'xs',
        color: 'currentColor',
        className: m.danger
      }),
      (0, s.jsx)(r.Text, {
        variant: 'text-xs/semibold',
        color: 'status-danger',
        className: m.statusText,
        children: T.Z.Messages.REQUIRED
      })
    ]
  });
  }
  return (0, s.jsxs)('div', {
className: m.onboardingStepContainer,
children: [
  (0, s.jsxs)('div', {
    className: m.leftContainer,
    children: [
      (0, s.jsx)('div', {
        className: m.iconContainer,
        children: i
      }),
      (0, s.jsxs)('div', {
        className: m.onboardingStepText,
        children: [
          (0, s.jsx)(r.Heading, {
            variant: 'heading-md/semibold',
            children: n
          }),
          (0, s.jsx)(r.Text, {
            variant: 'text-xs/normal',
            color: l && 'required' === o ? 'status-danger' : 'text-normal',
            children: a
          })
        ]
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: m.rightContainer,
    children: [
      t,
      d,
      l ? (0, s.jsx)(r.Button, {
        className: m.cta,
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.OUTLINED,
        onClick: c,
        children: T.Z.Messages.EDIT
      }) : (0, s.jsxs)(r.Button, {
        className: m.cta,
        innerClassName: m.ctaInner,
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: c,
        children: [
          T.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_SET_UP,
          (0, s.jsx)(r.ArrowSmallRightIcon, {
            size: 'xxs',
            color: 'currentColor'
          })
        ]
      })
    ]
  })
]
  });
}

function S(e) {
  let t = (0, i.e7)([l.Z], () => l.Z.getDefaultChannelIds(e)),
n = a.useMemo(() => new Set(t), [t]),
[s, r] = (0, o.VF)(e, n);
  return r.length >= E.md && s.length >= E.X;
}

function h(e) {
  let t = S(e),
n = (0, I.O4)(e);
  return t || n;
}

function g(e) {
  var t, n, c, d;
  let {
guildId: u,
onEdit: _,
disableGoodStatus: h
  } = e, g = (0, i.Wu)([l.Z], () => l.Z.getDefaultChannelIds(u)), C = (0, i.e7)([l.Z], () => (0, o.kl)(u, l.Z.getDefaultChannelIds(u), l.Z.getOnboardingPrompts(u)).length), x = a.useMemo(() => new Set(g), [g]), [, p] = (0, o.VF)(u, x), R = p.length, f = S(u), L = (0, I.O4)(u), O = (0, i.e7)([l.Z], () => l.Z.isAdvancedMode(u));
  let A = (t = f, n = O, c = R, d = C, n ? T.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS_ADVANCED.format({
numDefaultChannels: c,
numFromQuestions: d - c
  }) : t ? T.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS.format({
numDefaultChannels: c
  }) : T.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NOT_ENOUGH_DEFAULT_CHANNELS.format({
numDefaultChannels: E.md,
numChattableChannels: E.X
  }));
  return (0, s.jsx)(N, {
title: O ? T.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_ADVANCED : T.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS,
description: A,
icon: (0, s.jsx)(r.TextIcon, {
  size: 'md',
  color: 'currentColor',
  className: m.channelIcon
}),
hasStarted: R > 0 || O,
status: f || L ? h ? 'none' : 'good' : 'required',
onEdit: _
  });
}

function C(e) {
  let {
guildId: t,
onEdit: n,
disableGoodStatus: a
  } = e, c = (0, i.Wu)([l.Z], () => l.Z.getDefaultChannelIds(t)), d = (0, i.Wu)([l.Z], () => l.Z.getOnboardingPrompts(t)), u = d.length, [_, I] = (0, o.dF)(t, d, c), E = _.length, S = _.length + I.length, h = E / S * 100, g = (0, i.e7)([l.Z], () => l.Z.isAdvancedMode(t)), C = u > 0, x = 'none';
  return C && (h >= 85 && !a ? x = 'good' : h < 85 && (x = 'warning')), (0, s.jsx)(N, {
title: g ? T.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : T.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER,
description: T.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE.format({
  numChannels: E,
  numTotalChannels: S,
  channelsHook: (e, t) => (0, s.jsx)('span', {
    style: {
      color: h > 85 ? 'var(--header-primary)' : 'var(--status-warning)'
    },
    children: e
  }, t)
}),
icon: (0, s.jsx)(r.FriendsIcon, {
  size: 'md',
  color: 'currentColor',
  className: m.channelIcon
}),
hasStarted: C,
status: x,
onEdit: n
  });
}

function x(e) {
  let {
guildId: t,
onEdit: n,
disableGoodStatus: o
  } = e, I = (0, i.e7)([_.Z], () => _.Z.getSettings()), E = (0, i.e7)([l.Z], () => l.Z.getEnabled(t)), {
serverGuideOptional: S
  } = (0, d.hl)(t), h = (0, c.uo)(I), g = I.enabled, C = a.useCallback(() => {
(0, u.To)(t, !g);
  }, [
t,
g
  ]), x = !(0, c.av)(I), p = 'none';
  x && (h && !o ? p = 'good' : !h && (p = 'required'));
  let R = T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_DESCRIPTION;
  h ? !x && (R = T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_NOT_STARTED_DESCRIPTION) : R = T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_INVALID_DESCRIPTION;
  let f = null;
  return x && S && E && (f = (0, s.jsx)(r.Switch, {
className: m.inlineSwitch,
checked: g,
onChange: C,
disabled: !h
  })), (0, s.jsx)(N, {
title: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_TITLE,
description: R,
icon: (0, s.jsx)(r.SignPostIcon, {
  size: 'md',
  color: 'currentColor',
  className: m.channelIcon
}),
hasStarted: x,
status: p,
onEdit: n,
extra: f
  });
}