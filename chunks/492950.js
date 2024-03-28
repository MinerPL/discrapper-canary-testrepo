"use strict";
a.r(t), a.d(t, {
  default: function() {
    return k
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("718017"),
  r = a("780384"),
  u = a("481060"),
  o = a("410030"),
  c = a("199140"),
  f = a("996753"),
  m = a("465670"),
  h = a("300138"),
  g = a("689938"),
  E = a("631224"),
  _ = a("230583"),
  I = a("68095"),
  x = a("879128"),
  S = a("992322"),
  v = a("353161"),
  C = a("717160"),
  N = a("721072"),
  p = a("336882"),
  T = a("145774"),
  A = a("262200"),
  j = a("602551"),
  M = a("782702"),
  D = a("735646"),
  F = a("353714"),
  L = a("860132"),
  R = a("496426");
let b = [{
  light: F,
  dark: D,
  selected: L,
  value: h.GuildFeedbackRating.TERRIBLE,
  altDescription: () => g.default.Messages.GUILD_FEED_FEEDBACK_RATING_TERRIBLE,
  description: () => g.default.Messages.GUILD_FEED_FEEDBACK_RATING_TERRIBLE
}, {
  light: I,
  dark: _,
  selected: x,
  value: h.GuildFeedbackRating.BAD,
  altDescription: () => g.default.Messages.GUILD_FEED_FEEDBACK_RATING_BAD
}, {
  light: j,
  dark: A,
  selected: M,
  value: h.GuildFeedbackRating.OKAY,
  altDescription: () => g.default.Messages.GUILD_FEED_FEEDBACK_RATING_OKAY
}, {
  light: p,
  dark: N,
  selected: T,
  value: h.GuildFeedbackRating.GOOD,
  altDescription: () => g.default.Messages.GUILD_FEED_FEEDBACK_RATING_GOOD
}, {
  light: v,
  dark: S,
  selected: C,
  value: h.GuildFeedbackRating.EXCELLENT,
  altDescription: () => g.default.Messages.GUILD_FEED_FEEDBACK_RATING_EXCELLENT,
  description: () => g.default.Messages.GUILD_FEED_FEEDBACK_RATING_EXCELLENT
}];

function G(e) {
  let {
    defaultSrc: t,
    selectedSrc: a,
    selected: s,
    disableAnimation: i,
    alt: r
  } = e, [u, o] = (0, d.useSpring)(() => ({
    from: {
      opacity: 1
    },
    config: {
      duration: i ? 0 : h.GUILD_FEED_FEEDBACK_ANIMATION_DURATION
    }
  }), [s, i]), [c, f] = (0, d.useSpring)(() => ({
    from: {
      opacity: 0
    },
    config: {
      duration: i ? 0 : h.GUILD_FEED_FEEDBACK_ANIMATION_DURATION
    }
  }), [s, i]);
  return n.useEffect(() => {
    s ? (o({
      opacity: 0
    }), f({
      opacity: 1
    })) : (o({
      opacity: 1
    }), f({
      opacity: 0
    }))
  }, [s, i, o, f]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(d.animated.img, {
      style: {
        opacity: c.opacity
      },
      src: a,
      width: 40,
      height: 40,
      alt: r
    }), (0, l.jsx)(d.animated.img, {
      className: E.ratingInner,
      style: {
        opacity: u.opacity
      },
      src: t,
      width: 40,
      height: 40,
      alt: r
    })]
  })
}

function O(e) {
  let {
    selectedRating: t,
    setSelectedRating: a,
    disableAnimation: n
  } = e, s = (0, o.default)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      children: g.default.Messages.GUILD_FEED_FEEDBACK_SECTION_1_TITLE
    }), (0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      children: g.default.Messages.GUILD_FEED_FEEDBACK_SECTION_1_SUBTITLE
    }), (0, l.jsx)("div", {
      className: E.ratingsContainer,
      children: b.map(e => (0, l.jsxs)("div", {
        className: E.ratingContainer,
        children: [(0, l.jsx)(u.Clickable, {
          className: E.rating,
          onClick: () => {
            a(e.value)
          },
          children: (0, l.jsx)(G, {
            defaultSrc: (0, r.isThemeDark)(s) ? e.dark : e.light,
            selectedSrc: e.selected,
            selected: t === e.value,
            alt: e.altDescription(),
            disableAnimation: n
          })
        }), null != e.description ? (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: e.altDescription()
        }) : null]
      }, e.value))
    })]
  })
}

function y(e) {
  var t;
  let {
    selectedRating: a,
    selectedReasons: n,
    onSelectedReasons: s,
    onUserFeedbackChanged: d,
    onSubmitPressed: r,
    canSubmit: o
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      children: g.default.Messages.GUILD_FEED_FEEDBACK_SECTION_2_TITLE.format({
        rating: a.toLowerCase()
      })
    }), (0, l.jsx)("div", {
      className: E.pillContainer,
      children: (null !== (t = (0, h.GUILD_FEED_FEEDBACK_REASONS)[a]) && void 0 !== t ? t : []).map(e => (0, l.jsx)(u.Clickable, {
        onClick: () => s(e),
        className: i()(E.pill, n.has(e) ? E.pillSelected : null),
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          children: (0, c.getDescriptionFromReason)(e)
        })
      }, e))
    }), n.has(h.GuildFeedFeedbackReason.OTHER) ? (0, l.jsx)(u.TextInput, {
      autoFocus: !0,
      className: E.textInput,
      onChange: d,
      placeholder: g.default.Messages.GUILD_FEED_FEEDBACK_OTHER_PLACEHOLDER
    }) : null, (0, l.jsx)(u.Button, {
      className: E.button,
      disabled: !o,
      onClick: r,
      children: g.default.Messages.SUBMIT
    })]
  })
}

function H() {
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)("img", {
      src: R,
      width: 75,
      height: 75,
      alt: ""
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      children: g.default.Messages.GUILD_FEED_FEEDBACK_SECTION_3_TITLE
    })]
  })
}

function k(e) {
  let t, a;
  let {
    selectedRating: n,
    setSelectedRating: s,
    selectedReasons: d,
    setSelectedReasons: r,
    setUserFeedback: o,
    backPressed: h,
    onSubmitPressed: g,
    onBackPressed: _,
    onClosePressed: I,
    showSubmitted: x,
    canSubmit: S,
    isAnimating: v,
    useReducedMotion: C
  } = (0, c.useGuildFeedFeedback)(e);
  return x ? (a = !1, t = (0, l.jsx)(H, {})) : null == n || h || v ? (a = !1, t = (0, l.jsx)(O, {
    disableAnimation: h || C,
    selectedRating: n,
    setSelectedRating: s
  })) : (a = !0, t = (0, l.jsx)(y, {
    selectedRating: n,
    selectedReasons: d,
    onSelectedReasons: r,
    onUserFeedbackChanged: o,
    onBackPressed: _,
    onSubmitPressed: g,
    canSubmit: S
  })), (0, l.jsx)("div", {
    className: E.parentContainer,
    onClick: e => e.stopPropagation(),
    children: (0, l.jsxs)("div", {
      className: i()(E.container, E.containerDivider),
      children: [t, a ? (0, l.jsx)(u.Clickable, {
        className: i()(E.icon, E.back),
        onClick: _,
        children: (0, l.jsx)(f.default, {
          direction: f.default.Directions.LEFT
        })
      }) : null, (0, l.jsx)(u.Clickable, {
        className: i()(E.icon, E.close),
        onClick: I,
        children: (0, l.jsx)(m.default, {})
      })]
    })
  })
}