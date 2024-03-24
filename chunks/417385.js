"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var a, l, n, i, r = s("37983"),
  o = s("884691"),
  d = s("414456"),
  u = s.n(d),
  c = s("146606"),
  E = s("77078"),
  _ = s("983065"),
  I = s("160604"),
  T = s("879473"),
  S = s("912702"),
  f = s("381546"),
  m = s("45029"),
  N = s("956089"),
  g = s("427459"),
  h = s("49111"),
  C = s("782340"),
  R = s("69339");
let x = {
    tension: 200,
    friction: 20
  },
  L = {
    ...x,
    clamp: !0
  };

function O(e) {
  let [t, s] = o.useState(0), {
    numUnlocked: a,
    numRequired: l
  } = e, n = () => {
    s(1)
  }, i = () => {
    s(2)
  }, d = 2 === t, _ = 1 === t;
  if (!(!(a >= l) && a / l >= .8) || d) return null;
  let I = _ || d ? R.hidden : null,
    S = _ ? T.default.Stages.FLYING : T.default.Stages.HOVERING;
  return (0, r.jsx)(c.Spring, {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: L,
    children: e => (0, r.jsxs)(c.animated.div, {
      className: R.tierClose,
      style: e,
      children: [(0, r.jsx)(T.default, {
        className: R.tierCloseMechaWumpus,
        stage: S,
        onFlyingComplete: i
      }), (0, r.jsx)("div", {
        className: u(R.tierCloseHint, I),
        children: C.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_CLOSE_HINT.format({
          numLeft: l - a
        })
      }), (0, r.jsx)(E.Clickable, {
        onClick: n,
        className: u(R.tierCloseClose, I),
        children: (0, r.jsx)(f.default, {
          className: R.tierCloseCloseIcon
        })
      })]
    })
  })
}

function A(e) {
  let {
    withCardBody: t,
    isAnimatedTo: s,
    hasAnimatedUnlocked: a,
    onSetRef: l,
    tier: n,
    showHeaderLockStatus: i,
    headerButton: d = null,
    subscriptionsRequired: E,
    subscriptionCount: _,
    className: I
  } = e, T = e => {
    null == l || l(e)
  }, [f, m] = o.useState(0);
  return o.useLayoutEffect(() => {
    s && m(1)
  }, [s]), (0, r.jsx)(c.Spring, {
    from: {
      unlockedTranslateY: 50
    },
    to: {
      unlockedTranslateY: 0 === f ? 50 : 0
    },
    config: x,
    children: e => (0, r.jsx)("div", {
      className: u({
        [R.tierHeaderWithoutCardBody]: !t,
        [R.tierHeaderUnlocked]: a,
        [R.tierHeaderLocked]: !a
      }, I),
      ref: T,
      children: (0, r.jsxs)("div", {
        className: R.tierHeaderContent,
        children: [(0, r.jsx)(S.default, {
          tier: n.tier,
          className: u(R.tierIcon, {
            [R.tierIconLocked]: !a
          })
        }), (0, r.jsx)("div", {
          className: u(R.tierTitle, {
            [R.tierTitleActive]: a
          }),
          children: n.title
        }), i ? (0, r.jsx)(M, {
          transform: null == e ? void 0 : e.unlockedTranslateY.to(e => "translate3d(0, ".concat(e, "px, 0)")),
          headerButton: d,
          subscriptionsRequired: E,
          hasAnimatedUnlocked: a
        }) : null, (0, r.jsx)(O, {
          numUnlocked: _,
          numRequired: E
        })]
      })
    })
  })
}

function p(e) {
  let {
    children: t,
    subscriptionCount: s,
    onSetRef: a,
    tier: l,
    isAnimatedTo: n,
    hasBottomMargin: i,
    headerButton: o = null,
    withCardBody: d = !0,
    guildId: c,
    showHeaderLockStatus: E = !0
  } = e, T = (0, g.getAppliedGuildBoostsRequired)(c)[l.tier], S = n && s >= T, f = l.tier !== h.BoostedGuildTiers.NONE && l.tier !== h.BoostedGuildTiers.TIER_1, m = (e, t) => {
    let {
      icon: s,
      className: a
    } = (0, _.getPerkIcon)(e.icon, t);
    return (0, r.jsxs)("div", {
      className: R.perk,
      children: [(0, r.jsx)(I.default, {
        name: String(e.icon),
        icon: s,
        className: R.perkIcon,
        iconClassName: a
      }), (0, r.jsxs)("div", {
        className: R.perkText,
        children: [(0, r.jsxs)("div", {
          className: R.perkTitle,
          children: [e.title, e.isNew ? (0, r.jsx)(N.TextBadge, {
            className: R.newBadge,
            text: C.default.Messages.NEW
          }) : null]
        }), (0, r.jsx)("div", {
          className: R.perkDescription,
          children: e.description
        })]
      })]
    }, e.title)
  };
  return (0, r.jsxs)("div", {
    className: u(R.tier, {
      [R.tierBottomMargin]: i
    }),
    children: [(0, r.jsx)(A, {
      subscriptionCount: s,
      tier: l,
      headerButton: o,
      showHeaderLockStatus: E,
      onSetRef: e => {
        null != a && a(e, l)
      },
      withCardBody: d,
      guildId: c,
      hasBottomMargin: i,
      subscriptionsRequired: T,
      hasAnimatedUnlocked: S,
      isAnimatedTo: n
    }), (0, r.jsx)("div", {
      className: u({
        [R.tierBody]: d
      }),
      children: null != t ? t : (0, r.jsxs)(r.Fragment, {
        children: [f ? (0, r.jsx)("div", {
          className: R.previousPerks,
          children: C.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_PREVIOUS_PERKS
        }) : null, null != l.perks && (0, r.jsx)("div", {
          className: R.perks,
          children: l.perks.map(e => m(e, S))
        })]
      })
    })]
  }, l.tier)
}(n = a || (a = {}))[n.OPEN = 0] = "OPEN", n[n.CLOSING = 1] = "CLOSING", n[n.CLOSED = 2] = "CLOSED", (i = l || (l = {}))[i.NONE = 0] = "NONE", i[i.UNLOCKED_SLIDE = 1] = "UNLOCKED_SLIDE";
let M = e => {
    let {
      transform: t,
      hasAnimatedUnlocked: s,
      headerButton: a,
      subscriptionsRequired: l
    } = e;
    return null !== a ? a : s ? (0, r.jsx)(D, {
      transform: t
    }) : (0, r.jsx)(v, {
      subscriptionsRequired: l
    })
  },
  D = e => {
    let {
      transform: t
    } = e;
    return (0, r.jsx)(c.animated.div, {
      style: {
        transform: t
      },
      className: R.tierUnlocked,
      children: C.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_UNLOCKED
    })
  },
  v = e => {
    let {
      subscriptionsRequired: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: R.tierRequirement,
        children: C.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TIER_REQUIREMENT.format({
          required: t
        })
      }), (0, r.jsx)(m.default, {
        className: R.tierLock
      })]
    })
  }