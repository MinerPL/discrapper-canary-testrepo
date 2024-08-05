n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var s, a, i, r, l = n(735250),
  o = n(470079),
  c = n(120356),
  d = n.n(c),
  u = n(338545),
  _ = n(481060),
  I = n(205641),
  E = n(119331),
  T = n(902807),
  m = n(402766),
  N = n(267642),
  S = n(981631),
  h = n(689938),
  g = n(740626);
let C = {
tension: 200,
friction: 20
  },
  x = {
...C,
clamp: !0
  };

function p(e) {
  let [t, n] = o.useState(0), {
numUnlocked: s,
numRequired: a
  } = e, i = () => {
n(1);
  }, r = () => {
n(2);
  }, c = 2 === t, E = 1 === t;
  if (!(!(s >= a) && s / a >= 0.8) || c)
return null;
  let T = E || c ? g.hidden : null,
m = E ? I.Z.Stages.FLYING : I.Z.Stages.HOVERING;
  return (0, l.jsx)(_.Spring, {
from: {
  opacity: 0
},
to: {
  opacity: 1
},
config: x,
shouldAnimate: 'animate-always',
children: e => (0, l.jsxs)(u.animated.div, {
  className: g.tierClose,
  style: e,
  children: [
    (0, l.jsx)(I.Z, {
      className: g.tierCloseMechaWumpus,
      stage: m,
      onFlyingComplete: r
    }),
    (0, l.jsx)('div', {
      className: d()(g.tierCloseHint, T),
      children: h.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_CLOSE_HINT.format({
        numLeft: a - s
      })
    }),
    (0, l.jsx)(_.Clickable, {
      onClick: i,
      className: d()(g.tierCloseClose, T),
      children: (0, l.jsx)(_.CircleXIcon, {
        size: 'md',
        color: 'currentColor',
        className: g.tierCloseCloseIcon
      })
    })
  ]
})
  });
}

function R(e) {
  let {
withCardBody: t,
isAnimatedTo: n,
hasAnimatedUnlocked: s,
onSetRef: a,
tier: i,
showHeaderLockStatus: r,
headerButton: c = null,
subscriptionsRequired: u,
subscriptionCount: I,
className: E
  } = e, T = e => {
null == a || a(e);
  }, [N, S] = o.useState(0);
  return o.useLayoutEffect(() => {
n && S(1);
  }, [n]), (0, l.jsx)(_.Spring, {
from: {
  unlockedTranslateY: 50
},
to: {
  unlockedTranslateY: 0 === N ? 50 : 0
},
config: C,
children: e => (0, l.jsx)('div', {
  className: d()({
    [g.tierHeaderWithoutCardBody]: !t,
    [g.tierHeaderUnlocked]: s,
    [g.tierHeaderLocked]: !s
  }, E),
  ref: T,
  children: (0, l.jsxs)('div', {
    className: g.tierHeaderContent,
    children: [
      (0, l.jsx)(m.Z, {
        tier: i.tier,
        className: d()(g.tierIcon, {
          [g.tierIconLocked]: !s
        })
      }),
      (0, l.jsx)('div', {
        className: d()(g.tierTitle, {
          [g.tierTitleActive]: s
        }),
        children: i.title
      }),
      r ? (0, l.jsx)(L, {
        transform: null == e ? void 0 : e.unlockedTranslateY.to(e => 'translate3d(0, '.concat(e, 'px, 0)')),
        headerButton: c,
        subscriptionsRequired: u,
        hasAnimatedUnlocked: s
      }) : null,
      (0, l.jsx)(p, {
        numUnlocked: I,
        numRequired: u
      })
    ]
  })
})
  });
}

function f(e) {
  let {
children: t,
subscriptionCount: n,
onSetRef: s,
tier: a,
isAnimatedTo: i,
hasBottomMargin: r,
headerButton: o = null,
withCardBody: c = !0,
guildId: u,
showHeaderLockStatus: I = !0
  } = e, m = (0, N.vn)(u)[a.tier], C = i && n >= m, x = a.tier !== S.Eu4.NONE && a.tier !== S.Eu4.TIER_1, p = (e, t) => {
let {
  icon: n,
  className: s
} = (0, E.t)(e.icon, t);
return (0, l.jsxs)('div', {
  className: g.perk,
  children: [
    (0, l.jsx)(T.Z, {
      name: String(e.icon),
      icon: n,
      className: g.perkIcon,
      iconClassName: s
    }),
    (0, l.jsxs)('div', {
      className: g.perkText,
      children: [
        (0, l.jsxs)('div', {
          className: g.perkTitle,
          children: [
            e.title,
            e.isNew ? (0, l.jsx)(_.TextBadge, {
              className: g.newBadge,
              text: h.Z.Messages.NEW
            }) : null
          ]
        }),
        (0, l.jsx)('div', {
          className: g.perkDescription,
          children: e.description
        })
      ]
    })
  ]
}, e.title);
  };
  return (0, l.jsxs)('div', {
className: d()(g.tier, {
  [g.tierBottomMargin]: r
}),
children: [
  (0, l.jsx)(R, {
    subscriptionCount: n,
    tier: a,
    headerButton: o,
    showHeaderLockStatus: I,
    onSetRef: e => {
      null != s && s(e, a);
    },
    withCardBody: c,
    guildId: u,
    hasBottomMargin: r,
    subscriptionsRequired: m,
    hasAnimatedUnlocked: C,
    isAnimatedTo: i
  }),
  (0, l.jsx)('div', {
    className: d()({
      [g.tierBody]: c
    }),
    children: null != t ? t : (0, l.jsxs)(l.Fragment, {
      children: [
        x ? (0, l.jsx)('div', {
          className: g.previousPerks,
          children: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_PREVIOUS_PERKS
        }) : null,
        null != a.perks && (0, l.jsx)('div', {
          className: g.perks,
          children: a.perks.map(e => p(e, C))
        })
      ]
    })
  })
]
  }, a.tier);
}
(i = s || (s = {}))[i.OPEN = 0] = 'OPEN', i[i.CLOSING = 1] = 'CLOSING', i[i.CLOSED = 2] = 'CLOSED', (r = a || (a = {}))[r.NONE = 0] = 'NONE', r[r.UNLOCKED_SLIDE = 1] = 'UNLOCKED_SLIDE';
let L = e => {
let {
  transform: t,
  hasAnimatedUnlocked: n,
  headerButton: s,
  subscriptionsRequired: a
} = e;
return null !== s ? s : n ? (0, l.jsx)(O, {
  transform: t
}) : (0, l.jsx)(A, {
  subscriptionsRequired: a
});
  },
  O = e => {
let {
  transform: t
} = e;
return (0, l.jsx)(u.animated.div, {
  style: {
    transform: t
  },
  className: g.tierUnlocked,
  children: h.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_UNLOCKED
});
  },
  A = e => {
let {
  subscriptionsRequired: t
} = e;
return (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsx)('div', {
      className: g.tierRequirement,
      children: h.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TIER_REQUIREMENT.format({
        required: t
      })
    }),
    (0, l.jsx)(_.LockIcon, {
      size: 'md',
      color: 'currentColor',
      className: g.tierLock
    })
  ]
});
  };