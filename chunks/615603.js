s(653041);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(607070),
  d = s(158153),
  _ = s(760558),
  E = s(401786),
  u = s(450468),
  T = s(98278),
  I = s(314684),
  S = s(594174),
  N = s(78839),
  C = s(267642),
  m = s(74538),
  A = s(283029),
  h = s(357956),
  g = s(275909),
  O = s(981631),
  p = s(735825),
  R = s(689938),
  x = s(281281);

function M(e) {
  let {
guildBoostSlot: t,
isCancellable: s,
onCancel: i,
onUncancel: r,
premiumSubscription: o,
useReducedMotion: c
  } = e, d = a.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), _ = (0, C.tl)(t);
  return (0, n.jsxs)('li', {
className: x.unappliedGuildBoostSlot,
children: [
  (0, n.jsxs)('div', {
    className: x.unappliedGuildBoostSlotContentPrimary,
    children: [
      (0, n.jsx)(g.Z, {
        className: x.unappliedGuildBoostSlotIcon,
        hasCooldown: t.isOnCooldown(),
        isCanceled: _,
        useReducedMotion: c
      }),
      _ && null != o ? (0, n.jsx)(l.Text, {
        color: 'text-muted',
        variant: 'text-sm/medium',
        children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: o.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != d ? (0, n.jsx)(h.Z, {
        cooldown: d.getTime()
      }) : (0, n.jsx)(l.Text, {
        className: x.__invalid_unappliedGuildBoostSlotDescription,
        color: 'text-muted',
        variant: 'text-sm/medium',
        children: R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
      })
    ]
  }),
  (0, n.jsxs)('div', {
    className: x.unappliedGuildBoostSlotContentSecondary,
    children: [
      s && !_ && (0, n.jsx)(l.Button, {
        className: x.unappliedGuildBoostSlotCta,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        onClick: () => i(t),
        size: l.Button.Sizes.NONE,
        children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
      }),
      _ && (0, n.jsx)(l.Button, {
        className: x.unappliedGuildBoostSlotCta,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        onClick: () => r(t),
        size: l.Button.Sizes.NONE,
        children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
      })
    ]
  })
]
  }, t.id);
}

function D(e) {
  (0, l.openModalLazy)(async () => t => (0, n.jsx)(E.default, {
...t,
guildBoostSlot: e
  }));
}

function f(e) {
  (0, l.openModalLazy)(async () => t => (0, n.jsx)(u.default, {
...t,
guildBoostSlotId: e.id
  }));
}
t.Z = function(e) {
  let t, s;
  let {
guildBoostSlots: i
  } = e, E = (0, o.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()), u = (null == E ? void 0 : E.isPausedOrPausePending) === !0, h = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), g = (0, o.e7)([S.default], () => S.default.getCurrentUser()), P = (0, I.Vp)(), {
appliedGuildBoostSlots: L,
unappliedGuildBoostSlots: Z,
numActiveGuildBoostSlots: b,
hasCooldownBoosts: v,
allGuildBoostsAreOnCooldown: j
  } = a.useMemo(() => {
let e = [],
  t = [],
  s = 0,
  n = !1,
  a = !0;
return i.forEach(i => {
  !(0, C.tl)(i) && s++, i.isOnCooldown() ? n = !0 : a = !1, null != i.premiumGuildSubscription ? e.push(i) : t.push(i);
}), {
  appliedGuildBoostSlots: e,
  unappliedGuildBoostSlots: t,
  numActiveGuildBoostSlots: s,
  hasCooldownBoosts: n,
  allGuildBoostsAreOnCooldown: a
};
  }, [i]), B = null != E ? (0, d.G)(E, P) : 0, U = Math.max(0, B - L.length), G = b > B, F = B === i.length, y = F ? U : 1, V = a.useMemo(() => {
let e = [];
for (let t = 0; t < y; t++)
  e.push((0, n.jsx)(A.Z, {
    className: x.headerBoostGem,
    useReducedMotion: h
  }, t));
return e;
  }, [
y,
h
  ]), Y = null != P, w = a.useMemo(() => Z.find(e => e.isAvailable()), [Z]);
  if (0 === Z.length)
return null;
  let k = Z.length;
  if (t = F ? 1 === k && Y ? R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : (j ? R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOSTS_ALL_COOLDOWN : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION).format({
  numUnappliedGuildBoostSlots: k
}) : (j ? R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOSTS_ALL_COOLDOWN : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2).format({
  numUnappliedGuildBoostSlots: k
}), m.ZP.isPremium(g)) {
if (F && 1 === k && Y)
  s = P.skuId === p.Ft.FREE_GUILD_BOOST_1_MONTH ? R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT;
else {
  let e = (e, t) => (0, n.jsx)(l.Clickable, {
    className: x.headerLearnMoreLink,
    tag: 'span',
    onClick: () => {
      (0, T.z)();
    },
    children: e
  }, t);
  s = j ? R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION_ALL_COOLDOWN.format({
    learnMoreHook: e
  }) : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: k,
    learnMoreHook: e
  });
}
  } else
s = j ? R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_ALL_COOLDOWN : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
  numUnappliedGuildBoostSlots: k
});
  return (0, n.jsxs)('div', {
className: x.wrapper,
children: [
  Y && (0, n.jsxs)('div', {
    className: x.specialHeader,
    children: [
      (0, n.jsx)(l.Text, {
        variant: 'text-xs/semibold',
        className: x.pill,
        children: R.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
      }),
      (0, n.jsx)(l.Heading, {
        color: 'header-primary',
        variant: 'heading-md/semibold',
        children: R.Z.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
      })
    ]
  }),
  (0, n.jsxs)('div', {
    className: r()(x.content, {
      [x.headerWithBoost]: Y,
      [x.headerWithoutSpecialHeader]: !Y
    }),
    children: [
      (0, n.jsxs)('div', {
        className: x.header,
        children: [
          (0, n.jsxs)('div', {
            className: x.headerContentPrimary,
            children: [
              (0, n.jsx)('div', {
                className: x.headerBoostGems,
                children: V
              }),
              (0, n.jsxs)('div', {
                className: x.__invalid_headerCopy,
                children: [
                  (0, n.jsx)(l.Heading, {
                    className: x.headerHeading,
                    variant: 'heading-lg/bold',
                    children: t
                  }),
                  (0, n.jsx)(l.Text, {
                    className: x.__invalid_headerSubheading,
                    color: 'text-primary',
                    variant: 'text-sm/normal',
                    children: s
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)('div', {
            className: x.headerContentSecondary,
            children: (0, n.jsx)(l.Tooltip, {
              shouldShow: null == w || u,
              text: u ? R.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
              children: e => (0, n.jsx)(l.Button, {
                ...e,
                disabled: null == w || u,
                onClick: null != w ? () => {
                  var e;
                  return e = w, void(0, l.openModalLazy)(async () => t => (0, n.jsx)(_.default, {
                    ...t,
                    guildBoostSlots: [e],
                    locationSection: O.jXE.SETTINGS_PREMIUM
                  }));
                } : void 0,
                children: R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
              })
            })
          })
        ]
      }),
      (!F || v) && (0, n.jsx)('ul', {
        className: x.unappliedBoostSlots,
        children: Z.map(e => (0, n.jsx)(M, {
          guildBoostSlot: e,
          isCancellable: G,
          onCancel: D,
          onUncancel: f,
          premiumSubscription: E,
          useReducedMotion: h
        }, e.id))
      })
    ]
  })
]
  });
};