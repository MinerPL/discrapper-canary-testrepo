"use strict";
s.r(t), s.d(t, {
  default: function() {
    return q
  }
}), s("47120");
var a, n, l, i, r = s("735250"),
  o = s("470079"),
  d = s("392711"),
  u = s("442837"),
  c = s("692547"),
  S = s("481060"),
  E = s("37234"),
  T = s("607070"),
  _ = s("301822"),
  f = s("206895"),
  m = s("692437"),
  g = s("783539"),
  h = s("585483"),
  N = s("557177"),
  I = s("57562"),
  p = s("955204"),
  C = s("64078"),
  A = s("351780"),
  O = s("954794"),
  x = s("112843"),
  R = s("524484"),
  M = s("981631"),
  v = s("689938"),
  D = s("604637");
let L = {
    enabled: !0,
    combosEnabled: !0,
    screenshakeEnabled: !1,
    confettiEnabled: !1
  },
  P = (0, d.range)(0, 11),
  j = (0, d.range)(0, 2.25, .25),
  b = (0, d.range)(1, 11),
  U = (0, d.range)(1, 26);
(l = a || (a = {}))[l.CONFETTI = 0] = "CONFETTI", l[l.SHAKE = 1] = "SHAKE", (i = n || (n = {}))[i.USER_SETTINGS = 0] = "USER_SETTINGS", i[i.ACHIEVEMENT_LIST = 1] = "ACHIEVEMENT_LIST";
let y = () => [{
    location: R.ConfettiLocation.CHAT_INPUT,
    title: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED,
    description: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
  }, {
    location: R.ConfettiLocation.REACTION,
    title: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED,
    description: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED_DESCRIPTION
  }, {
    location: R.ConfettiLocation.MEMBER_USER,
    title: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED,
    description: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED_DESCRIPTION
  }, {
    location: R.ConfettiLocation.CALL_TILE,
    title: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED,
    description: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED_DESCRIPTION
  }],
  B = () => [{
    location: R.ShakeLocation.CHAT_INPUT,
    title: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED,
    description: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
  }, {
    location: R.ShakeLocation.VOICE_USER,
    title: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED,
    description: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED_DESCRIPTION
  }, {
    location: R.ShakeLocation.MENTION,
    title: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED,
    description: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED_DESCRIPTION
  }];

function F(e) {
  let {
    disabled: t,
    locations: s,
    settingsLocations: a,
    onChange: n
  } = e, l = s.map(e => (0, r.jsx)(S.FormSwitch, {
    disabled: t,
    value: a[e.location],
    note: e.description,
    onChange: t => n({
      ...a,
      [e.location]: t
    }),
    children: e.title
  }, e.location));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S.FormTitle, {
      children: v.default.Messages.POGGERMODE_LOCATIONS
    }), l]
  })
}

function G(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(S.Text, {
    className: D.sliderDescription,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: t
  })
}

function k(e) {
  let {
    settings: {
      enabled: t,
      warningSeen: s
    },
    updateSettings: a
  } = e, n = (0, u.useStateFromStores)([T.default], () => T.default.useReducedMotion);
  return (0, r.jsx)(S.FormSwitch, {
    value: t,
    note: v.default.Messages.POGGERMODE_ENABLE_DESCRIPTION,
    onChange: e => {
      !e && (0, I.unlockAchievement)(p.PoggermodeAchievementId.DISABLE_POGGERMODE), e && (!s || n) ? (0, S.openModal)(e => (0, r.jsx)(S.ConfirmModal, {
        header: n ? v.default.Messages.POGGERMODE_WARNING_TITLE_REDUCED_MOTION : v.default.Messages.POGGERMODE_WARNING_TITLE,
        confirmText: v.default.Messages.ENABLE,
        cancelText: v.default.Messages.CANCEL,
        onConfirm: () => a(n ? L : {
          enabled: !0,
          warningSeen: !0
        }),
        ...e,
        children: (0, r.jsx)(S.Text, {
          variant: "text-md/normal",
          children: n ? v.default.Messages.POGGERMODE_WARNING_BODY_REDUCED_MOTION : v.default.Messages.POGGERMODE_WARNING_BODY
        })
      })) : a({
        enabled: e
      })
    },
    children: v.default.Messages.POGGERMODE_ENABLE
  })
}

function H(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: s,
      confettiCount: a,
      confettiSize: n,
      confettiEnabledLocations: l
    },
    updateSettings: i
  } = e, o = !t || !s;
  return (0, r.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: v.default.Messages.POGGERMODE_CONFETTI_CUSTOMIZATION,
    children: [(0, r.jsx)(S.FormSwitch, {
      disabled: !t,
      value: s,
      note: v.default.Messages.POGGERMODE_CONFETTI_ENABLED_DESCRIPTION,
      onChange: e => i({
        confettiEnabled: e
      }, 0),
      children: v.default.Messages.POGGERMODE_CONFETTI_ENABLED
    }), (0, r.jsxs)(S.FormItem, {
      disabled: o,
      title: v.default.Messages.POGGERMODE_CONFETTI_COUNT,
      className: D.formItem,
      children: [(0, r.jsx)(G, {
        children: v.default.Messages.POGGERMODE_CONFETTI_COUNT_DESCRIPTION
      }), (0, r.jsx)(S.Slider, {
        disabled: o,
        markers: b,
        stickToMarkers: !0,
        minValue: b[0],
        maxValue: b[b.length - 1],
        initialValue: a,
        onValueChange: e => i({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsxs)(S.FormItem, {
      disabled: o,
      title: v.default.Messages.POGGERMODE_CONFETTI_SIZE,
      className: D.formItem,
      children: [(0, r.jsx)(G, {
        children: v.default.Messages.POGGERMODE_CONFETTI_SIZE_DESCRIPTION
      }), (0, r.jsx)(S.Slider, {
        disabled: o,
        markers: U,
        stickToMarkers: !0,
        minValue: U[0],
        maxValue: U[U.length - 1],
        initialValue: n,
        onValueChange: e => i({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(F, {
      disabled: o,
      locations: y(),
      settingsLocations: l,
      onChange: e => i({
        confettiEnabledLocations: e
      }, 0)
    })]
  })
}

function w(e) {
  let {
    settings: {
      enabled: t,
      combosEnabled: s,
      comboSoundsEnabled: a,
      combosRequiredCount: n
    },
    updateSettings: l
  } = e, i = !t || !s;
  return (0, r.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: v.default.Messages.POGGERMODE_COMBOS_CUSTOMIZATION,
    children: [(0, r.jsx)(S.FormSwitch, {
      disabled: !t,
      value: s,
      note: v.default.Messages.POGGERMODE_COMBOS_ENABLED_DESCRIPTION,
      onChange: e => l({
        combosEnabled: e
      }),
      children: v.default.Messages.POGGERMODE_COMBOS_ENABLED
    }), (0, r.jsx)(S.FormSwitch, {
      disabled: !t,
      value: a,
      note: v.default.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED_DESCRIPTION,
      onChange: e => l({
        comboSoundsEnabled: e
      }),
      children: v.default.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED
    }), (0, r.jsxs)(S.FormItem, {
      disabled: i,
      title: v.default.Messages.POGGERMODE_COMBOS_REQUIRED,
      className: D.formItem,
      children: [(0, r.jsx)(G, {
        children: v.default.Messages.POGGERMODE_COMBOS_REQUIRED_DESCRIPTION
      }), (0, r.jsx)(S.Slider, {
        disabled: i,
        markers: P,
        stickToMarkers: !0,
        minValue: P[0],
        maxValue: P[P.length - 1],
        initialValue: n,
        onValueChange: e => l({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(S.FormDivider, {
      className: D.divider
    })]
  })
}

function V(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: s,
      shakeIntensity: a,
      screenshakeEnabledLocations: n
    },
    updateSettings: l
  } = e, i = (0, u.useStateFromStores)([T.default], () => T.default.useReducedMotion), o = !t || !s || i, d = (e, t) => {
    null != e.shakeIntensity && e.shakeIntensity > a && (0, I.unlockAchievement)(p.PoggermodeAchievementId.MORE), l(e, t)
  };
  return (0, r.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: v.default.Messages.POGGERMODE_SCREENSHAKE_CUSTOMIZATION,
    children: [(0, r.jsx)(S.FormSwitch, {
      disabled: !t || i,
      tooltipNote: i ? v.default.Messages.POGGERMODE_SCREENSHAKE_DISABLED_REDUCED_MOTION : null,
      value: s && !i,
      note: v.default.Messages.POGGERMODE_SCREENSHAKE_ENABLED_DESCRIPTION,
      onChange: e => l({
        screenshakeEnabled: e
      }, 1),
      children: v.default.Messages.POGGERMODE_SCREENSHAKE_ENABLED
    }), (0, r.jsxs)(S.FormItem, {
      disabled: o,
      title: v.default.Messages.POGGERMODE_SCREENSHAKE,
      className: D.formItem,
      children: [(0, r.jsx)(G, {
        children: v.default.Messages.POGGERMODE_SCREENSHAKE_DESCRIPTION
      }), (0, r.jsx)(S.Slider, {
        disabled: o,
        markers: j,
        equidistant: !0,
        stickToMarkers: !0,
        minValue: j[0],
        maxValue: j[j.length - 1],
        initialValue: a,
        onValueChange: e => d({
          shakeIntensity: e
        }, 1),
        onMarkerRender: e => e === j[j.length - 1] ? v.default.Messages.POGGERMODE_SCREENSHAKE_MAX : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(F, {
      disabled: o,
      locations: B(),
      settingsLocations: n,
      onChange: e => l({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function Y(e) {
  let {
    updateSettings: t
  } = e;
  return (0, r.jsx)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: v.default.Messages.POGGERMODE_SETTINGS_CUSTOMIZATION,
    children: (0, r.jsxs)(S.FormItem, {
      className: D.formItem,
      children: [(0, r.jsx)(S.FormText, {
        className: D.formItem,
        children: v.default.Messages.POGGERMODE_HIDE_SETTINGS_DESCRIPTION
      }), (0, r.jsx)(S.Button, {
        className: D.hideButton,
        size: S.Button.Sizes.SMALL,
        onClick: () => {
          t({
            enabled: !1,
            settingsVisible: !1
          }), (0, E.popLayer)()
        },
        children: v.default.Messages.POGGERMODE_HIDE_SETTINGS
      })]
    })
  })
}

function K(e) {
  let {
    onChangePage: t
  } = e;
  return (0, r.jsxs)(S.FormSection, {
    children: [(0, r.jsxs)(S.Clickable, {
      onClick: () => t(1),
      className: D.achievementContainer,
      children: [(0, r.jsx)("div", {
        className: D.achievementIconContainer,
        children: (0, r.jsx)(g.default, {
          color: c.default.unsafe_rawColors.ORANGE_345.css
        })
      }), (0, r.jsxs)("div", {
        className: D.achievementTextContainer,
        children: [(0, r.jsx)(S.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: v.default.Messages.POGGERMODE_ACHIEVEMENT_TITLE
        }), (0, r.jsx)(S.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: v.default.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
        })]
      }), (0, r.jsx)(m.default, {
        width: 16,
        className: D.rightCaretIcon
      })]
    }), (0, r.jsx)(S.FormDivider, {
      className: D.divider
    })]
  })
}
let W = () => s.e("20467").then(s.t.bind(s, "205663", 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function z(e) {
  let {
    onChangePage: t,
    setShowEnableAnimation: s
  } = e, a = (0, u.useStateFromStoresObject)([A.default], () => A.default.getState()), [n, l] = o.useState({
    x: 0,
    y: 0
  }), i = (0, x.default)();

  function d(e, t, s, a) {
    return (null != t ? t : e) && (null != a ? a : s)
  }
  let c = e => {
      if (e.enabled && !1 === a.enabled) {
        var t;
        s(!0), (0, N.playSound)("poggermode_enabled"), h.ComponentDispatch.dispatch(M.ComponentActions.SHAKE_APP, {
          duration: 2e3,
          intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : a.shakeIntensity
        })
      }
    },
    E = (e, t) => {
      if (c(e), (0, C.updatePoggermodeSettings)(e), null == t) return;
      let s = d(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
      0 === t && s && i.fire(n.x, n.y, {
        settings: e
      });
      let l = d(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
      if (1 === t && l) {
        var r;
        h.ComponentDispatch.dispatch(M.ComponentActions.SHAKE_APP, {
          duration: 1e3,
          intensity: null !== (r = e.shakeIntensity) && void 0 !== r ? r : a.shakeIntensity
        })
      }
    },
    T = e => {
      l({
        x: e.clientX,
        y: e.clientY
      })
    };
  return o.useEffect(() => (window.addEventListener("mousemove", T), () => window.removeEventListener("mousemove", T)), []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S.Heading, {
      variant: "heading-lg/semibold",
      className: D.title,
      children: v.default.Messages.POGGERMODE
    }), (0, r.jsx)(k, {
      settings: a,
      updateSettings: E
    }), (0, r.jsx)(K, {
      onChangePage: t
    }), (0, r.jsx)(w, {
      settings: a,
      updateSettings: E
    }), (0, r.jsx)(V, {
      settings: a,
      updateSettings: E
    }), (0, r.jsx)(H, {
      settings: a,
      updateSettings: E
    }), (0, r.jsx)(Y, {
      updateSettings: E
    })]
  })
}
let Q = (e, t, s) => {
    let a = e => () => {
      t(e)
    };
    switch (e) {
      case 0:
        return (0, r.jsx)(z, {
          onChangePage: a(1),
          setShowEnableAnimation: s
        });
      case 1:
        return (0, r.jsx)(O.default, {
          onBackClick: a(0)
        });
      default:
        return null
    }
  },
  X = e => 0 === e ? f.SlideDirection.LEFT : f.SlideDirection.RIGHT;

function q() {
  let [e, t] = o.useState(0), [s, a] = o.useState(X(e)), [n, l] = o.useState(!1), i = (0, u.useStateFromStores)([T.default], () => T.default.useReducedMotion), d = n && !i;
  return o.useEffect(() => {
    let t = setTimeout(() => {
      a(X(e))
    }, 500);
    return () => clearTimeout(t)
  }, [e]), o.useEffect(() => {
    Math.random() > .99 && (0, I.unlockAchievement)(p.PoggermodeAchievementId.VISITOR_100)
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.default, {
      className: D.slideAnimator,
      step: e,
      direction: s,
      children: Q(e, t, l)
    }), (0, r.jsx)("div", {
      className: d ? D.enableAnimationOverlayVisible : D.enableAnimationOverlayHidden,
      children: (0, r.jsx)(_.default, {
        className: D.enableAnimation,
        importData: W,
        shouldAnimate: d,
        autoplay: !1,
        resetOnPlay: !0,
        loop: !1,
        onComplete: () => l(!1)
      })
    })]
  })
}