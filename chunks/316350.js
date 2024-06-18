"use strict";
t.d(s, {
  Z: function() {
    return p
  }
}), t(47120);
var n, i, l, a, r = t(735250),
  o = t(470079),
  c = t(120356),
  d = t.n(c),
  u = t(920906),
  E = t(481060),
  _ = t(119331),
  I = t(597043),
  T = t(171042),
  N = t(402766),
  m = t(696202),
  S = t(630641),
  h = t(267642),
  g = t(981631),
  x = t(689938),
  C = t(961414);
let R = {
    tension: 200,
    friction: 20
  },
  L = {
    ...R,
    clamp: !0
  };

function O(e) {
  let [s, t] = o.useState(0), {
    numUnlocked: n,
    numRequired: i
  } = e, l = () => {
    t(1)
  }, a = () => {
    t(2)
  }, c = 2 === s, _ = 1 === s;
  if (!(!(n >= i) && n / i >= .8) || c) return null;
  let I = _ || c ? C.hidden : null,
    N = _ ? T.Z.Stages.FLYING : T.Z.Stages.HOVERING;
  return (0, r.jsx)(u.Spring, {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: L,
    children: e => (0, r.jsxs)(u.animated.div, {
      className: C.tierClose,
      style: e,
      children: [(0, r.jsx)(T.Z, {
        className: C.tierCloseMechaWumpus,
        stage: N,
        onFlyingComplete: a
      }), (0, r.jsx)("div", {
        className: d()(C.tierCloseHint, I),
        children: x.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_CLOSE_HINT.format({
          numLeft: i - n
        })
      }), (0, r.jsx)(E.Clickable, {
        onClick: l,
        className: d()(C.tierCloseClose, I),
        children: (0, r.jsx)(m.Z, {
          className: C.tierCloseCloseIcon
        })
      })]
    })
  })
}

function A(e) {
  let {
    withCardBody: s,
    isAnimatedTo: t,
    hasAnimatedUnlocked: n,
    onSetRef: i,
    tier: l,
    showHeaderLockStatus: a,
    headerButton: c = null,
    subscriptionsRequired: E,
    subscriptionCount: _,
    className: I
  } = e, T = e => {
    null == i || i(e)
  }, [m, S] = o.useState(0);
  return o.useLayoutEffect(() => {
    t && S(1)
  }, [t]), (0, r.jsx)(u.Spring, {
    from: {
      unlockedTranslateY: 50
    },
    to: {
      unlockedTranslateY: 0 === m ? 50 : 0
    },
    config: R,
    children: e => (0, r.jsx)("div", {
      className: d()({
        [C.tierHeaderWithoutCardBody]: !s,
        [C.tierHeaderUnlocked]: n,
        [C.tierHeaderLocked]: !n
      }, I),
      ref: T,
      children: (0, r.jsxs)("div", {
        className: C.tierHeaderContent,
        children: [(0, r.jsx)(N.Z, {
          tier: l.tier,
          className: d()(C.tierIcon, {
            [C.tierIconLocked]: !n
          })
        }), (0, r.jsx)("div", {
          className: d()(C.tierTitle, {
            [C.tierTitleActive]: n
          }),
          children: l.title
        }), a ? (0, r.jsx)(M, {
          transform: null == e ? void 0 : e.unlockedTranslateY.to(e => "translate3d(0, ".concat(e, "px, 0)")),
          headerButton: c,
          subscriptionsRequired: E,
          hasAnimatedUnlocked: n
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
    children: s,
    subscriptionCount: t,
    onSetRef: n,
    tier: i,
    isAnimatedTo: l,
    hasBottomMargin: a,
    headerButton: o = null,
    withCardBody: c = !0,
    guildId: u,
    showHeaderLockStatus: T = !0
  } = e, N = (0, h.vn)(u)[i.tier], m = l && t >= N, S = i.tier !== g.Eu4.NONE && i.tier !== g.Eu4.TIER_1, R = (e, s) => {
    let {
      icon: t,
      className: n
    } = (0, _.t)(e.icon, s);
    return (0, r.jsxs)("div", {
      className: C.perk,
      children: [(0, r.jsx)(I.Z, {
        name: String(e.icon),
        icon: t,
        className: C.perkIcon,
        iconClassName: n
      }), (0, r.jsxs)("div", {
        className: C.perkText,
        children: [(0, r.jsxs)("div", {
          className: C.perkTitle,
          children: [e.title, e.isNew ? (0, r.jsx)(E.TextBadge, {
            className: C.newBadge,
            text: x.Z.Messages.NEW
          }) : null]
        }), (0, r.jsx)("div", {
          className: C.perkDescription,
          children: e.description
        })]
      })]
    }, e.title)
  };
  return (0, r.jsxs)("div", {
    className: d()(C.tier, {
      [C.tierBottomMargin]: a
    }),
    children: [(0, r.jsx)(A, {
      subscriptionCount: t,
      tier: i,
      headerButton: o,
      showHeaderLockStatus: T,
      onSetRef: e => {
        null != n && n(e, i)
      },
      withCardBody: c,
      guildId: u,
      hasBottomMargin: a,
      subscriptionsRequired: N,
      hasAnimatedUnlocked: m,
      isAnimatedTo: l
    }), (0, r.jsx)("div", {
      className: d()({
        [C.tierBody]: c
      }),
      children: null != s ? s : (0, r.jsxs)(r.Fragment, {
        children: [S ? (0, r.jsx)("div", {
          className: C.previousPerks,
          children: x.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_PREVIOUS_PERKS
        }) : null, null != i.perks && (0, r.jsx)("div", {
          className: C.perks,
          children: i.perks.map(e => R(e, m))
        })]
      })
    })]
  }, i.tier)
}(l = n || (n = {}))[l.OPEN = 0] = "OPEN", l[l.CLOSING = 1] = "CLOSING", l[l.CLOSED = 2] = "CLOSED", (a = i || (i = {}))[a.NONE = 0] = "NONE", a[a.UNLOCKED_SLIDE = 1] = "UNLOCKED_SLIDE";
let M = e => {
    let {
      transform: s,
      hasAnimatedUnlocked: t,
      headerButton: n,
      subscriptionsRequired: i
    } = e;
    return null !== n ? n : t ? (0, r.jsx)(f, {
      transform: s
    }) : (0, r.jsx)(v, {
      subscriptionsRequired: i
    })
  },
  f = e => {
    let {
      transform: s
    } = e;
    return (0, r.jsx)(u.animated.div, {
      style: {
        transform: s
      },
      className: C.tierUnlocked,
      children: x.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_UNLOCKED
    })
  },
  v = e => {
    let {
      subscriptionsRequired: s
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: C.tierRequirement,
        children: x.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TIER_REQUIREMENT.format({
          required: s
        })
      }), (0, r.jsx)(S.Z, {
        className: C.tierLock
      })]
    })
  }