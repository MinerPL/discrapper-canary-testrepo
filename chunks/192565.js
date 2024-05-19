"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("442837"),
  r = n("481060"),
  o = n("224706"),
  u = n("607070"),
  d = n("931240"),
  c = n("650461"),
  f = n("94963"),
  E = n("745628"),
  h = n("950279"),
  _ = n("796918"),
  C = n("513532"),
  m = n("741595"),
  S = n("974842"),
  p = n("359380"),
  g = n("308083"),
  I = n("689938"),
  T = n("590190");
let A = {
    mass: 1,
    tension: 300,
    friction: 60,
    clamp: !0
  },
  N = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
  };

function v(e) {
  let t = (0, c.useDefaultClanProgress)(),
    {
      progress: n,
      errors: a
    } = (0, i.useStateFromStoresObject)([c.default], () => {
      var n;
      let a = c.default.getStateForGuild(e);
      return {
        progress: null !== (n = a.progress) && void 0 !== n ? n : t,
        errors: a.errors
      }
    });
  return {
    progress: n,
    errors: a,
    handleClanUpdate: s.useCallback(t => d.updateClanSetup(e, t), [e])
  }
}
let R = {
  [g.ClanSetupSteps.GAMES]: function(e) {
    let {
      guildId: t
    } = e;
    s.useEffect(() => {
      o.default.getDetectableGames()
    }, []);
    let {
      progress: n,
      errors: l,
      handleClanUpdate: i
    } = v(t);
    return (0, a.jsx)(h.default, {
      title: I.default.Messages.CLAN_SETUP_GAMES_TITLE,
      description: I.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
      handleUpdate: e => i({
        gameApplicationIds: e
      }),
      gameApplicationIds: n.gameApplicationIds,
      requiredGameId: n.requiredGameId,
      error: null == l ? void 0 : l.gameApplicationIds
    })
  },
  [g.ClanSetupSteps.PLAYSTYLE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = v(t);
    return (0, a.jsx)(m.default, {
      title: I.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
      description: I.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
      handleUpdate: e => l({
        playstyle: e
      }),
      playstyle: n.playstyle,
      error: null == s ? void 0 : s.playstyle
    })
  },
  [g.ClanSetupSteps.UTILITY_TRAITS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: s
    } = v(t);
    return (0, a.jsx)(p.default, {
      guildId: t,
      title: I.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
      description: I.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
      handleUpdate: e => s({
        interests: e
      }),
      requiredGameId: n.requiredGameId,
      progress: n
    })
  },
  [g.ClanSetupSteps.INTERESTS]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = v(t);
    return (0, a.jsx)(_.default, {
      guildId: t,
      handleUpdate: l,
      progress: n,
      error: null == s ? void 0 : s.interests
    })
  },
  [g.ClanSetupSteps.DESCRIPTION]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = v(t);
    return (0, a.jsx)(E.default, {
      guildId: t,
      handleUpdate: l,
      progress: n,
      errors: s
    })
  },
  [g.ClanSetupSteps.CUSTOMIZE_TAG_BADGE]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      errors: s,
      handleClanUpdate: l
    } = v(t);
    return (0, a.jsx)(S.default, {
      handleUpdate: l,
      tag: n.tag,
      error: null == s ? void 0 : s.tag,
      badge: n.badgeKind,
      primaryColor: n.badgePrimaryColor,
      secondaryColor: n.badgeSecondaryColor,
      furthestStep: n.furthestStep
    })
  },
  [g.ClanSetupSteps.CUSTOMIZE_BANNER]: function(e) {
    let {
      guildId: t
    } = e, {
      progress: n,
      handleClanUpdate: s
    } = v(t);
    return (0, a.jsx)(f.default, {
      handleUpdate: s,
      progress: n,
      guildId: t
    })
  },
  [g.ClanSetupSteps.MEMBER_APPLICATION]: function(e) {
    let {
      guildId: t
    } = e;
    return (0, a.jsx)(C.default, {
      guildId: t
    })
  }
};

function O(e) {
  var t, n, o, d;
  let {
    item: c,
    state: f,
    direction: E,
    cleanUp: h
  } = e, _ = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  let C = (0, l.useSpring)((t = f, n = E, o = h, d = _, t === r.TransitionStates.MOUNTED ? {
      from: {
        opacity: 0,
        transform: "translateY(40px) translateX(0px)"
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) translateX(0px)"
      },
      config: A,
      delay: 500,
      immediate: d
    } : t === r.TransitionStates.ENTERED ? {
      from: {
        opacity: 0,
        transform: "translateY(0px) translateX(".concat(-1 === n ? -40 : 40, "px)")
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) translateX(0px)"
      },
      config: N,
      delay: 500,
      immediate: d
    } : {
      from: {
        opacity: 1,
        transform: "translateY(0px) translateX(0px)"
      },
      to: {
        opacity: 0,
        transform: "translateY(0px) translateX(".concat(-1 === n ? 40 : -40, "px))")
      },
      config: N,
      immediate: d,
      onRest: () => {
        o()
      }
    })),
    m = s.useMemo(() => R[c.currentStep], [c.currentStep]);
  return (0, a.jsx)(l.animated.div, {
    style: C,
    className: T.step,
    children: (0, a.jsx)(r.ScrollerThin, {
      className: T.scroller,
      children: (0, a.jsx)(m, {
        guildId: c.guildId
      })
    })
  })
}

function L(e) {
  return e.currentStep.toString()
}

function M(e) {
  let {
    guildId: t
  } = e, n = (0, c.useDefaultClanProgress)(), l = (0, i.useStateFromStores)([c.default], () => {
    var e, a, s;
    return null !== (s = null === (a = c.default.getStateForGuild(t)) || void 0 === a ? void 0 : null === (e = a.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== s ? s : n.currentStep
  }), o = s.useRef(l - 1);
  s.useEffect(() => {
    o.current = l
  }, [l]);
  let u = s.useMemo(() => [{
      previousStep: o,
      currentStep: l,
      guildId: t
    }], [l, t]),
    d = s.useMemo(() => null == o.current || l === o.current ? 0 : o.current < l ? 1 : -1, [l]),
    f = s.useCallback((e, t, n, s) => (0, a.jsx)(O, {
      item: t,
      direction: d,
      state: n,
      cleanUp: s
    }, e), [d]);
  return (0, a.jsx)("div", {
    className: T.stepsTransitionGroup,
    children: (0, a.jsx)(r.TransitionGroup, {
      items: u,
      renderItem: f,
      getItemKey: L
    })
  })
}