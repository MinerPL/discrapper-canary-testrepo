"use strict";
a.r(t), a.d(t, {
  default: function() {
    return R
  }
}), a("47120");
var s, l, n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  c = a.n(r),
  o = a("108131"),
  d = a.n(o),
  u = a("718017"),
  m = a("902190"),
  x = a("25752"),
  h = a("149020"),
  p = a("331650"),
  C = a("481060"),
  N = a("442837"),
  j = a("607070"),
  v = a("594174"),
  T = a("153124"),
  g = a("975667"),
  E = a("626135"),
  k = a("792125"),
  S = a("547280"),
  f = a("678513"),
  y = a("445507"),
  I = a("981631"),
  _ = a("689938"),
  M = a("301009");
let b = (0, k.getThemeClass)(I.ThemeTypes.DARK);

function P(e) {
  let {
    selectedOption: t,
    targetKey: a,
    dismissibleContent: s,
    data: l,
    handleGoToNextFormGroup: r
  } = e, [c, o] = i.useState(""), [d, u] = i.useState(null), [m, x] = i.useState(null), [h, p] = i.useState(!1), [N, j] = i.useState(!1), v = i.useCallback(e => {
    let {
      value: t
    } = e;
    null != l.current && (l.current.playstyle = t, x(t), r(6))
  }, [l, x, r]), T = i.useCallback(() => {
    if (null != l.current) {
      let e = !h;
      p(e), l.current.acknowledgeCap = e, e && N && r(8)
    }
  }, [N, h, p, l, r]), g = i.useCallback(() => {
    if (null != l.current) {
      let e = !N;
      j(e), l.current.acknowledgeScreen = e, e && h && r(8)
    }
  }, [h, N, j, l, r]), E = i.useCallback(e => {
    null != l.current && (l.current.email = e, o(e), u(null))
  }, [l, u]), k = i.useCallback(() => {
    if (null != t && null != l.current) {
      if (c.length < 3 || -1 === c.indexOf("@")) {
        u(_.default.Messages.SIGNUP_EMAIL_ERROR);
        return
      }(0, S.completeSignUp)({
        targetKey: a,
        dismissibleContent: s,
        data: l.current,
        completed: !0
      })
    }
  }, [a, s, c, t, u, l]);
  return null == t ? null : "email" === t.type ? (0, n.jsxs)("div", {
    className: M.emailContainer,
    children: [(0, n.jsx)(C.Text, {
      variant: "text-lg/medium",
      color: "header-primary",
      children: _.default.Messages.SIGNUP_EMAIL_PROMPT
    }), (0, n.jsxs)("div", {
      className: M.emailForm,
      children: [(0, n.jsx)(C.TextInput, {
        className: M.emailInput,
        value: c,
        onChange: E,
        placeholder: _.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
        error: d
      }), (0, n.jsx)(C.Button, {
        onClick: k,
        children: (0, n.jsx)(C.Text, {
          variant: "text-sm/medium",
          color: "interactive-active",
          children: _.default.Messages.SIGNUP_COMPLETE_CTA
        })
      })]
    })]
  }) : "clan" === t.type ? (0, n.jsxs)("div", {
    className: M.form,
    children: [(0, n.jsxs)("div", {
      className: M.formGroup,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(C.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: _.default.Messages.SIGNUP_CLAN_PLAYSTYLE_TITLE
        }), (0, n.jsx)(C.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: _.default.Messages.SIGNUP_CLAN_PLAYSTYLE_DESCRIPTION
        })]
      }), (0, n.jsx)("div", {
        className: M.options,
        children: (0, y.getClanOptions)(_.default).map(e => (0, n.jsx)(L, {
          option: e,
          isSelected: e.value === m,
          onOptionSelected: v
        }, e.value))
      })]
    }), (0, n.jsxs)("div", {
      className: M.formGroup,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(C.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: _.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENTS_TITLE
        }), (0, n.jsx)(C.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: _.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENTS_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: M.acknowledgements,
        children: [(0, n.jsxs)(C.Clickable, {
          className: M.acknowledgement,
          onClick: T,
          children: [(0, n.jsx)(C.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: _.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENT_CAP
          }), (0, n.jsx)("div", {
            className: M.checkboxWrapper,
            children: (0, n.jsx)(C.Checkbox, {
              displayOnly: !0,
              type: C.Checkbox.Types.INVERTED,
              value: h
            })
          })]
        }), (0, n.jsxs)(C.Clickable, {
          className: M.acknowledgement,
          onClick: g,
          children: [(0, n.jsx)(C.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: _.default.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENT_APPROVAL
          }), (0, n.jsx)("div", {
            className: M.checkboxWrapper,
            children: (0, n.jsx)(C.Checkbox, {
              displayOnly: !0,
              type: C.Checkbox.Types.INVERTED,
              value: N
            })
          })]
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: M.formGroup,
      children: [(0, n.jsx)(C.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: _.default.Messages.SIGNUP_EMAIL_PROMPT
      }), (0, n.jsxs)("div", {
        className: M.emailForm,
        children: [(0, n.jsx)(C.TextInput, {
          className: M.emailInput,
          value: c,
          onChange: E,
          placeholder: _.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
          error: d
        }), (0, n.jsx)(C.Button, {
          onClick: k,
          children: (0, n.jsx)(C.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: _.default.Messages.SIGNUP_COMPLETE_CTA
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
        className: M.icon
      });
      break;
    case "gamepad":
      a = (0, n.jsx)(g.default, {
        className: M.icon
      });
      break;
    case "controller":
      a = (0, n.jsx)(h.GameControllerIcon, {
        className: M.icon
      });
      break;
    case "microphone":
      a = (0, n.jsx)(p.MicrophoneIcon, {
        className: M.icon
      });
      break;
    default:
      a = null
  }
  return (0, n.jsx)("div", {
    className: M.iconContainer,
    children: a
  })
}

function L(e) {
  let {
    option: t,
    icon: a,
    isSelected: s,
    onOptionSelected: l
  } = e, [r, o] = i.useState(!1), d = (0, C.useToken)(C.tokens.colors.BACKGROUND_TERTIARY).hsl({
    opacity: r && !s ? .9 : .8
  }), u = i.useCallback(() => {
    l(t)
  }, [l, t]);
  return (0, n.jsxs)(C.Clickable, {
    className: c()(M.option, {
      [M.selectedOption]: s
    }),
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    style: {
      backgroundColor: d
    },
    onClick: u,
    children: [a, (0, n.jsxs)("div", {
      className: M.optionContent,
      children: [(0, n.jsx)(C.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: t.title
      }), (0, n.jsx)(C.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: t.description
      })]
    })]
  })
}

function A(e) {
  let {
    option: t,
    selectedOption: a,
    setSelectedOption: s
  } = e, l = t.key === (null == a ? void 0 : a.key);
  return (0, n.jsx)(L, {
    option: t,
    icon: (0, n.jsx)(O, {
      iconName: t.icon
    }),
    isSelected: l,
    onOptionSelected: s
  })
}

function G(e) {
  let {
    target: t,
    selectedOption: a,
    handleSetSelectedOption: s,
    data: l
  } = e, r = (0, N.useStateFromStores)([j.default], () => j.default.useReducedMotion), [{
    state: c
  }, o] = (0, u.useSpring)(() => ({
    state: 0
  }), []), m = (0, N.useStateFromStores)([v.default], () => v.default.getCurrentUser()), h = c.to({
    range: [0, 1],
    output: [1, 0]
  }), p = c.to({
    range: [0, 1],
    output: [0, 1]
  }), T = c.to({
    range: [0, 10],
    output: [0, -700]
  }), g = i.useCallback(e => {
    s(e), o({
      state: "email" === e.type ? 2 : 3,
      immediate: r
    })
  }, [s, o, r]), E = i.useCallback(e => {
    o({
      state: e,
      immediate: r
    })
  }, [o, r]);
  return null == m ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.animated.div, {
      className: M.header,
      style: {
        opacity: h
      },
      children: [(0, n.jsxs)("div", {
        className: M.eyebrow,
        children: [(0, n.jsx)(x.EnvelopeIcon, {
          height: 12,
          width: 12,
          color: "currentColor"
        }), (0, n.jsx)(C.Text, {
          variant: "text-xs/semibold",
          color: "none",
          children: _.default.Messages.SIGNUP_NOTICE_EYEBROW
        })]
      }), (0, n.jsx)(C.Heading, {
        variant: "heading-xxl/medium",
        color: "header-primary",
        children: t.title
      }), (0, n.jsx)(C.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t.subtitle
      })]
    }), (0, n.jsxs)(u.animated.div, {
      className: M.question,
      style: {
        transform: T.to(e => "translateY(".concat(e, "px)")),
        marginTop: t.questionMargin
      },
      children: [(0, n.jsx)(C.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        children: t.question
      }), (0, n.jsx)("div", {
        className: M.options,
        children: (function(e, t) {
          let a = e.slice();
          return a.sort((e, a) => {
            let s = d().v3("".concat(e.key).concat(t));
            return s - d().v3("".concat(a.key).concat(t))
          }), a
        })(t.options, m.id).map(e => (0, n.jsx)(A, {
          option: e,
          selectedOption: a,
          setSelectedOption: g
        }, e.key))
      })]
    }), (0, n.jsx)(u.animated.div, {
      style: {
        transform: T.to(e => "translateY(".concat(e, "px)")),
        opacity: p
      },
      children: (0, n.jsx)(P, {
        selectedOption: a,
        targetKey: t.key,
        dismissibleContent: t.dismissibleContent,
        data: l,
        handleGoToNextFormGroup: E
      })
    })]
  })
}

function R(e) {
  let {
    target: t,
    guildId: a,
    transitionState: s,
    onClose: l
  } = e, r = (0, T.useUID)(), o = i.useRef({
    guildId: a
  }), [d, u] = i.useState(null), m = (0, N.useStateFromStores)([f.default], () => f.default.hasCompletedTarget(t.key)) ? 1 : 0;
  i.useEffect(() => {
    E.default.track(I.AnalyticEvents.SIGNUP_VIEWED, {
      target_key: t.key,
      guild_id: a
    });
    let e = o.current;
    return () => {
      (0, S.completeSignUp)({
        targetKey: t.key,
        dismissibleContent: t.dismissibleContent,
        data: e,
        completed: !1
      })
    }
  }, [t.key, t.dismissibleContent, o, a]);
  let x = i.useCallback(e => {
      null != o.current && (o.current.selectedOptionKey = e.key, u(e))
    }, [u, o]),
    h = "url(".concat(t.backgroundAssetUrl, ") black top / cover no-repeat"),
    p = null;
  switch (m) {
    case 0:
      p = (0, n.jsx)(G, {
        target: t,
        selectedOption: d,
        handleSetSelectedOption: x,
        data: o
      });
      break;
    case 1:
      p = (0, n.jsxs)("div", {
        className: M.completedContainer,
        children: [(0, n.jsx)(C.Text, {
          variant: "text-lg/medium",
          color: "header-primary",
          children: _.default.Messages.SIGNUP_COMPLETED_TITLE
        }), (0, n.jsx)(C.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: _.default.Messages.SIGNUP_COMPLETED_DESCRIPTION
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(C.Button, {
            onClick: l,
            children: (0, n.jsx)(C.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: _.default.Messages.CLOSE
            })
          })
        })]
      })
  }
  return (0, n.jsx)(C.ThemeContextProvider, {
    theme: I.ThemeTypes.DARK,
    children: (0, n.jsxs)(C.ModalRoot, {
      transitionState: s,
      "aria-labelledby": r,
      size: C.ModalSize.LARGE,
      className: c()(M.modal, b),
      children: [(0, n.jsxs)(C.Scroller, {
        className: M.content,
        children: [(0, n.jsx)("div", {
          style: {
            background: h,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }
        }), (0, n.jsx)("div", {
          className: M.contentInner,
          children: (0, n.jsx)(C.Sequencer, {
            animationMotionType: "lift",
            fillParent: !0,
            step: m,
            steps: [0, 1],
            children: p
          })
        })]
      }), (0, n.jsx)("div", {
        className: M.closeButtonContainer,
        children: (0, n.jsx)(C.ModalCloseButton, {
          onClick: l
        })
      })]
    })
  })
}(l = s || (s = {}))[l.OPTIONS = 0] = "OPTIONS", l[l.COMPLETED = 1] = "COMPLETED"