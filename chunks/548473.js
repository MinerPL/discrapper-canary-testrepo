"use strict";
x.r(i), x.d(i, {
  LeftIslands: function() {
    return g
  },
  MainIsland: function() {
    return v
  },
  RightIslands: function() {
    return S
  },
  default: function() {
    return T
  }
});
var r = x("735250"),
  k = x("470079"),
  t = x("803997"),
  s = x.n(t),
  o = x("500923"),
  n = x.n(o),
  m = x("442837"),
  e = x("481060"),
  p = x("607070"),
  l = x("367907"),
  h = x("626135"),
  d = x("768581"),
  c = x("956664"),
  y = x("45966"),
  f = x("819553"),
  u = x("487533"),
  G = x("279876"),
  A = x("180504"),
  E = x("614725"),
  D = x("535170"),
  B = x("981631"),
  V = x("689938"),
  b = x("289448");

function F(a) {
  let i = (0, m.useStateFromStores)([p.default], () => p.default.useReducedMotion),
    x = k.useRef(null);
  return k.useEffect(() => {
    let r;
    return null != x.current && (r = n().loadAnimation({
      container: x.current,
      renderer: "svg",
      loop: !0,
      autoplay: !i,
      animationData: JSON.parse(JSON.stringify(a))
    })), () => {
      null == r || r.destroy()
    }
  }, [x, i, a]), x
}

function g() {
  let a = (0, m.useStateFromStores)([p.default], () => p.default.useReducedMotion),
    i = F(A);
  return (0, r.jsx)("div", {
    className: s()(b.leftArt, {
      [b.altFloat]: !a
    }),
    children: (0, r.jsx)("div", {
      ref: i,
      className: b.grillingIsland
    })
  })
}

function S() {
  let a = (0, m.useStateFromStores)([p.default], () => p.default.useReducedMotion),
    i = F(D);
  return (0, r.jsx)("div", {
    className: s()(b.rightArt, {
      [b.altFloat]: !a
    }),
    children: (0, r.jsx)("div", {
      ref: i,
      className: b.waffleIsland
    })
  })
}

function v(a) {
  let {
    guild: i,
    mainIslandClassName: x,
    balloonDogClassName: t
  } = a, o = (0, m.useStateFromStores)([p.default], () => p.default.useReducedMotion), e = k.useRef(null), l = F(G), h = d.default.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 96
  });
  return k.useEffect(() => {
    let a;
    return null != e.current && null != h ? (0, c.getPaletteForAvatar)(h).then(i => {
      let x = (0, u.default)(JSON.parse(JSON.stringify(E)), h, i[0]);
      a = n().loadAnimation({
        container: e.current,
        renderer: "svg",
        loop: !0,
        autoplay: !o,
        animationData: x
      })
    }) : null != e.current && (a = n().loadAnimation({
      container: e.current,
      renderer: "svg",
      loop: !0,
      autoplay: !o,
      animationData: JSON.parse(JSON.stringify(E))
    })), () => {
      null == a || a.destroy()
    }
  }, [h, e, o]), (0, r.jsxs)("div", {
    className: s()(b.centerArt, {
      [b.float]: !o
    }),
    children: [(0, r.jsx)("div", {
      className: s()(b.balloonDog, t),
      ref: l
    }), (0, r.jsx)("div", {
      className: s()(b.mainIsland, x),
      ref: e
    })]
  })
}

function T(a) {
  let {
    guild: i,
    onStart: x,
    onboardingStatus: t,
    headerId: s,
    disableTracking: o
  } = a, n = (0, m.useStateFromStores)([y.default], () => y.default.isLoading()), p = k.useRef(!1);
  k.useEffect(() => {
    if (!o) return h.default.track(B.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
      ...(0, l.collectGuildAnalyticsMetadata)(i.id),
      step: -1,
      required: !0
    }), () => {
      h.default.track(B.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
        ...(0, l.collectGuildAnalyticsMetadata)(i.id),
        step: -1,
        skipped: !p.current,
        is_final_step: !1,
        in_onboarding: !0
      })
    }
  }, [i.id, p, o]);
  let d = () => {
    p.current = !0, x()
  };
  return k.useEffect(() => {
    setTimeout(() => {
      d()
    }, 3e3)
  }, []), (0, r.jsx)(r.Fragment, {
    children: (0, r.jsx)("div", {
      className: b.coverContainer,
      children: (0, r.jsxs)("div", {
        className: b.centerContent,
        children: [(0, r.jsx)(v, {
          guild: i
        }), (0, r.jsxs)("div", {
          className: b.coverContent,
          children: [(0, r.jsx)(e.Text, {
            className: b.coverTitle,
            variant: "text-md/medium",
            color: "always-white",
            id: s,
            children: V.default.Messages.WELCOME_CTA_TITLE_MOBILE.format({
              guildName: null == i ? void 0 : i.name
            })
          }), n ? (0, r.jsx)(e.Spinner, {
            className: b.__invalid_subtitle
          }) : t === f.GuildOnboardingStatus.NOT_APPLICABLE ? (0, r.jsx)(e.Heading, {
            className: b.__invalid_subtitle,
            variant: "heading-xl/semibold",
            color: "always-white",
            children: V.default.Messages.ONBOARDING_NO_PROMPTS
          }) : (0, r.jsx)(e.Heading, {
            className: b.__invalid_subtitle,
            variant: "heading-xl/semibold",
            color: "always-white",
            children: V.default.Messages.ONBOARDING_COVER_WELCOME_SUBTITLE
          })]
        })]
      })
    })
  })
}