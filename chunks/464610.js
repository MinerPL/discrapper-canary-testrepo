n.d(t, {
  Z: function() {
return N;
  }
}), n(536091);
var s = n(735250),
  a = n(470079),
  i = n(481060),
  r = n(727072),
  l = n(85960),
  o = n(676317),
  c = n(823379),
  d = n(84613),
  u = n(740903),
  _ = n(598622),
  I = n(689938),
  E = n(434805);

function T() {
  let e = '\u2022 ';
  return (0, s.jsxs)('div', {
className: E.changelog,
children: [
  (0, s.jsx)('img', {
    className: E.changelogImage,
    src: n(531945),
    alt: 'changelog'
  }),
  (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-md/semibold',
        color: 'header-primary',
        className: E.updatesHeader,
        children: I.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_HEADER
      }),
      (0, s.jsx)(i.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        className: E.updatesDescription,
        children: I.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_LINE_1
      }),
      (0, s.jsx)(i.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        className: E.updatesDescription,
        children: I.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_LINE_2
      }),
      (0, s.jsxs)(i.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: [
          e,
          I.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_1
        ]
      }),
      (0, s.jsxs)(i.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: [
          e,
          I.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_2
        ]
      }),
      (0, s.jsxs)(i.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: [
          e,
          I.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_3
        ]
      }),
      (0, s.jsxs)(i.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: [
          e,
          I.Z.Messages.GUILD_SETTINGS_SAFETY_UPDATES_ITEM_4
        ]
      })
    ]
  })
]
  });
}

function m(e) {
  let {
title: t,
subtitle: n,
icon: a,
page: r
  } = e;
  return (0, s.jsxs)('div', {
className: E.safetyStepRow,
children: [
  (0, s.jsxs)('div', {
    className: E.safetyStepContent,
    children: [
      (0, s.jsx)(i.Avatar, {
        src: a,
        size: i.AvatarSizes.SIZE_40,
        'aria-label': t
      }),
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(i.Heading, {
            variant: 'heading-md/semibold',
            color: 'header-primary',
            children: t
          }),
          (0, s.jsx)(i.Text, {
            variant: 'text-xs/medium',
            color: 'header-secondary',
            children: n
          })
        ]
      })
    ]
  }),
  (0, s.jsx)(i.Button, {
    className: E.__invalid_editButton,
    size: i.Button.Sizes.SMALL,
    color: i.Button.Colors.PRIMARY,
    look: i.Button.Looks.OUTLINED,
    onClick: () => (0, d.K)(r),
    children: I.Z.Messages.EDIT
  })
]
  });
}

function N(e) {
  let {
guild: t,
hideChangelog: d
  } = e;
  (0, r.RD)(t.id);
  let N = (0, l.Z6)(t.id),
{
  rulesByTriggerType: S
} = (0, r.pH)(t.id),
{
  numEnabledRules: h,
  numRules: g
} = a.useMemo(() => {
  let e = 0,
    t = 0;
  return null == S ? {
    numEnabledRules: e,
    numRules: t
  } : (Object.values(N).flat().forEach(n => {
    var s;
    let a = null === (s = S[n]) || void 0 === s ? void 0 : s.filter(c.lm);
    if (null == a || 0 === a.length) {
      t++;
      return;
    }
    a.forEach(n => {
      n.enabled && e++, t++;
    });
  }), {
    numEnabledRules: e,
    numRules: t
  });
}, [
  N,
  S
]),
C = (0, _.Q)(t),
x = C[u.u.CAPTCHA_AND_RAID_PROTECTION],
p = C[u.u.DM_AND_SPAM_PROTECTION],
R = C[u.u.PERMISSIONS],
f = (0, o.pr)(t.id);
  return (0, s.jsxs)('div', {
children: [
  (0, s.jsx)(i.Heading, {
    variant: 'heading-lg/semibold',
    color: 'header-primary',
    className: E.header,
    children: I.Z.Messages.GUILD_SETTINGS_SAFETY_SETUP_HEADER
  }),
  !d && (0, s.jsx)(T, {}),
  (0, s.jsxs)('div', {
    className: E.safetyChecklist,
    children: [
      (0, s.jsx)(m, {
        icon: n(14215),
        title: I.Z.Messages.GUILD_SETTINGS_SAFETY_CAPTCHA_RAID_PROTECTION,
        subtitle: I.Z.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: x.filter(e => e.enabled).length,
          total: x.length
        }),
        page: u.u.CAPTCHA_AND_RAID_PROTECTION
      }),
      (0, s.jsx)('div', {
        className: E.divider
      }),
      (0, s.jsx)(m, {
        icon: n(128724),
        title: I.Z.Messages.GUILD_SETTINGS_SAFETY_DM_SPAM_PROTECTION,
        subtitle: I.Z.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: p.filter(e => e.enabled).length,
          total: p.length
        }),
        page: u.u.DM_AND_SPAM_PROTECTION
      }),
      (0, s.jsx)('div', {
        className: E.divider
      }),
      f && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(m, {
            icon: n(145136),
            title: I.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
            subtitle: I.Z.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
              enabled: h,
              total: g
            }),
            page: u.u.AUTOMOD
          }),
          (0, s.jsx)('div', {
            className: E.divider
          })
        ]
      }),
      (0, s.jsx)(m, {
        icon: n(913414),
        title: I.Z.Messages.PERMISSIONS,
        subtitle: I.Z.Messages.GUILD_SETTINGS_SAFETY_OVERVIEW_NUM_ENABLED.format({
          enabled: R.filter(e => e.enabled).length,
          total: R.length
        }),
        page: u.u.PERMISSIONS
      })
    ]
  })
]
  });
}