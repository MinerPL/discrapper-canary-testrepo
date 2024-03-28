"use strict";
a.r(t), a.d(t, {
  default: function() {
    return R
  }
}), a("47120");
var l, s, n = a("735250"),
  r = a("470079"),
  i = a("803997"),
  c = a.n(i),
  o = a("505578"),
  d = a.n(o),
  u = a("718017"),
  m = a("902190"),
  x = a("149020"),
  h = a("481060"),
  p = a("442837"),
  j = a("607070"),
  v = a("594174"),
  k = a("153124"),
  y = a("975667"),
  C = a("626135"),
  g = a("792125"),
  T = a("547280"),
  f = a("678513"),
  N = a("445507"),
  S = a("981631"),
  b = a("689938"),
  E = a("720871");
let I = (0, g.getThemeClass)(S.ThemeTypes.DARK);

function M(e) {
  let {
    selectedOption: t,
    targetKey: a,
    data: l,
    handleGoToNextFormGroup: s
  } = e, [i, c] = r.useState(""), [o, d] = r.useState(null), [u, m] = r.useState(null), [x, p] = r.useState(!1), [j, v] = r.useState(!1), k = r.useCallback(e => {
    let {
      value: t
    } = e;
    null != l.current && (l.current.playstyle = t, m(t), s(6))
  }, [l, m, s]), y = r.useCallback(() => {
    if (null != l.current) {
      let e = !x;
      p(e), l.current.acknowledgeCap = e, e && j && s(8)
    }
  }, [j, x, p, l, s]), C = r.useCallback(() => {
    if (null != l.current) {
      let e = !j;
      v(e), l.current.acknowledgeScreen = e, e && x && s(8)
    }
  }, [x, j, v, l, s]), g = r.useCallback(e => {
    null != l.current && (l.current.email = e, c(e), d(null))
  }, [l, d]), f = r.useCallback(() => {
    if (null != t && null != l.current) {
      if (i.length < 3 || -1 === i.indexOf("@")) {
        d(b.default.Messages.SIGNUP_EMAIL_ERROR);
        return
      }(0, T.completeSignUp)({
        targetKey: a,
        data: l.current,
        completed: !0
      })
    }
  }, [a, i, t, d, l]);
  return null == t ? null : "email" === t.type ? (0, n.jsxs)("div", {
    className: E.emailContainer,
    children: [(0, n.jsx)(h.Text, {
      variant: "text-lg/medium",
      color: "header-primary",
      children: b.default.Messages.SIGNUP_EMAIL_PROMPT
    }), (0, n.jsxs)("div", {
      className: E.emailForm,
      children: [(0, n.jsx)(h.TextInput, {
        className: E.emailInput,
        value: i,
        onChange: g,
        placeholder: b.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
        error: o
      }), (0, n.jsx)(h.Button, {
        onClick: f,
        children: (0, n.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: "interactive-active",
          children: b.default.Messages.SIGNUP_COMPLETE_CTA
        })
      })]
    })]
  }) : "clan" === t.type ? (0, n.jsxs)("div", {
    className: E.form,
    children: [(0, n.jsxs)("div", {
      className: E.formGroup,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(h.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: "What's your server's playstyle?"
        }), (0, n.jsx)(h.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: "Let potential members know what kind of gaming you do."
        })]
      }), (0, n.jsx)("div", {
        className: E.options,
        children: (0, N.getClanOptions)(b.default).map(e => (0, n.jsx)(P, {
          option: e,
          isSelected: e.value === u,
          onOptionSelected: k
        }, e.value))
      })]
    }), (0, n.jsxs)("div", {
      className: E.formGroup,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(h.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: "Here are some additional information about Clans."
        }), (0, n.jsx)(h.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: "Select all the checkbox to acknowledge and continue."
        })]
      }), (0, n.jsxs)("div", {
        className: E.acknowledgements,
        children: [(0, n.jsxs)(h.Clickable, {
          className: E.acknowledgement,
          onClick: y,
          children: [(0, n.jsx)(h.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: "Clans are capped to 200 members max."
          }), (0, n.jsx)("div", {
            className: E.checkboxWrapper,
            children: (0, n.jsx)(h.Checkbox, {
              displayOnly: !0,
              type: h.Checkbox.Types.INVERTED,
              value: x
            })
          })]
        }), (0, n.jsxs)(h.Clickable, {
          className: E.acknowledgement,
          onClick: C,
          children: [(0, n.jsx)(h.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: "New members must be approved by you in order to join."
          }), (0, n.jsx)("div", {
            className: E.checkboxWrapper,
            children: (0, n.jsx)(h.Checkbox, {
              displayOnly: !0,
              type: h.Checkbox.Types.INVERTED,
              value: j
            })
          })]
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: E.formGroup,
      children: [(0, n.jsx)(h.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: b.default.Messages.SIGNUP_EMAIL_PROMPT
      }), (0, n.jsxs)("div", {
        className: E.emailForm,
        children: [(0, n.jsx)(h.TextInput, {
          className: E.emailInput,
          value: i,
          onChange: g,
          placeholder: b.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
          error: o
        }), (0, n.jsx)(h.Button, {
          onClick: f,
          children: (0, n.jsx)(h.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: b.default.Messages.SIGNUP_COMPLETE_CTA
          })
        })]
      })]
    })]
  }) : (0, n.jsx)("div", {})
}

function O(e) {
  let {
    iconName: t
  } = e, a = null;
  switch (t) {
    case "compass":
      a = (0, n.jsx)(m.CompassIcon, {
        className: E.icon
      });
      break;
    case "gamepad":
      a = (0, n.jsx)(y.default, {
        className: E.icon
      });
      break;
    case "controller":
      a = (0, n.jsx)(x.GameControllerIcon, {
        className: E.icon
      });
      break;
    default:
      a = null
  }
  return (0, n.jsx)("div", {
    className: E.iconContainer,
    children: a
  })
}

function P(e) {
  let {
    option: t,
    icon: a,
    isSelected: l,
    onOptionSelected: s
  } = e, [i, o] = r.useState(!1), d = (0, h.useToken)(h.tokens.colors.BACKGROUND_TERTIARY).hsl({
    opacity: i && !l ? .9 : .8
  }), u = r.useCallback(() => {
    s(t)
  }, [s, t]);
  return (0, n.jsxs)(h.Clickable, {
    className: c()(E.option, {
      [E.selectedOption]: l
    }),
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    style: {
      backgroundColor: d
    },
    onClick: u,
    children: [a, (0, n.jsxs)("div", {
      className: E.optionContent,
      children: [(0, n.jsx)(h.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: t.title
      }), (0, n.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: t.description
      })]
    })]
  })
}

function _(e) {
  let {
    option: t,
    selectedOption: a,
    setSelectedOption: l
  } = e, s = t.key === (null == a ? void 0 : a.key);
  return (0, n.jsx)(P, {
    option: t,
    icon: (0, n.jsx)(O, {
      iconName: t.icon
    }),
    isSelected: s,
    onOptionSelected: l
  })
}

function L(e) {
  let {
    target: t,
    selectedOption: a,
    handleSetSelectedOption: l,
    data: s
  } = e, i = (0, p.useStateFromStores)([j.default], () => j.default.useReducedMotion), [{
    state: c
  }, o] = (0, u.useSpring)(() => ({
    state: 0
  }), []), m = (0, p.useStateFromStores)([v.default], () => v.default.getCurrentUser()), x = c.to({
    range: [0, 1],
    output: [1, 0]
  }), k = c.to({
    range: [0, 1],
    output: [0, 1]
  }), y = c.to({
    range: [0, 10],
    output: [0, -700]
  }), C = r.useCallback(e => {
    l(e), o({
      state: "email" === e.type ? 2 : 3,
      immediate: i
    })
  }, [l, o, i]), g = r.useCallback(e => {
    o({
      state: e,
      immediate: i
    })
  }, [o, i]);
  return null == m ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.animated.div, {
      className: E.header,
      style: {
        opacity: x
      },
      children: [(0, n.jsx)(h.Heading, {
        variant: "heading-xxl/medium",
        color: "header-primary",
        children: t.title
      }), (0, n.jsx)(h.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t.subtitle
      })]
    }), (0, n.jsxs)(u.animated.div, {
      className: E.question,
      style: {
        transform: y.to(e => "translateY(".concat(e, "px)"))
      },
      children: [(0, n.jsx)(h.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: t.question
      }), (0, n.jsx)("div", {
        className: E.options,
        children: (function(e, t) {
          let a = e.slice();
          return a.sort((e, a) => {
            let l = d().v3("".concat(e.key).concat(t));
            return l - d().v3("".concat(a.key).concat(t))
          }), a
        })(t.options, m.id).map(e => (0, n.jsx)(_, {
          option: e,
          selectedOption: a,
          setSelectedOption: C
        }, e.key))
      })]
    }), (0, n.jsx)(u.animated.div, {
      style: {
        transform: y.to(e => "translateY(".concat(e, "px)")),
        opacity: k
      },
      children: (0, n.jsx)(M, {
        selectedOption: a,
        targetKey: t.key,
        data: s,
        handleGoToNextFormGroup: g
      })
    })]
  })
}

function R(e) {
  let {
    target: t,
    guildId: a,
    transitionState: l,
    onClose: s
  } = e, i = (0, k.useUID)(), o = r.useRef({
    guildId: a
  }), [d, u] = r.useState(null), m = (0, p.useStateFromStores)([f.default], () => f.default.hasCompletedTarget(t.key)) ? 1 : 0;
  r.useEffect(() => {
    C.default.track(S.AnalyticEvents.SIGNUP_VIEWED, {
      target_key: t.key
    });
    let e = o.current;
    return () => {
      (0, T.completeSignUp)({
        targetKey: t.key,
        data: e,
        completed: !1
      })
    }
  }, [t.key, o]);
  let x = r.useCallback(e => {
      null != o.current && (o.current.selectedOptionKey = e.key, u(e))
    }, [u, o]),
    j = "url(".concat(t.backgroundAssetUrl, ") black top / cover no-repeat"),
    v = null;
  switch (m) {
    case 0:
      v = (0, n.jsx)(L, {
        target: t,
        selectedOption: d,
        handleSetSelectedOption: x,
        data: o
      });
      break;
    case 1:
      v = (0, n.jsxs)("div", {
        className: E.completedContainer,
        children: [(0, n.jsx)(h.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: b.default.Messages.SIGNUP_COMPLETED_TITLE
        }), (0, n.jsx)(h.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: b.default.Messages.SIGNUP_COMPLETED_DESCRIPTION
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(h.Button, {
            onClick: s,
            children: (0, n.jsx)(h.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: b.default.Messages.DISMISS
            })
          })
        })]
      })
  }
  return (0, n.jsx)(h.ThemeContextProvider, {
    theme: S.ThemeTypes.DARK,
    children: (0, n.jsxs)(h.ModalRoot, {
      transitionState: l,
      "aria-labelledby": i,
      size: h.ModalSize.LARGE,
      className: c()(E.modal, I),
      children: [(0, n.jsxs)(h.Scroller, {
        className: E.content,
        children: [(0, n.jsx)("div", {
          style: {
            background: j,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }
        }), (0, n.jsx)("div", {
          className: E.contentInner,
          children: (0, n.jsx)(h.Sequencer, {
            animationMotionType: "lift",
            fillParent: !0,
            step: m,
            steps: [0, 1],
            children: v
          })
        })]
      }), (0, n.jsx)("div", {
        className: E.closeButtonContainer,
        children: (0, n.jsx)(h.ModalCloseButton, {
          onClick: s
        })
      })]
    })
  })
}(s = l || (l = {}))[s.OPTIONS = 0] = "OPTIONS", s[s.COMPLETED = 1] = "COMPLETED"