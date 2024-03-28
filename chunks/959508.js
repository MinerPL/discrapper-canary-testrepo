"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("603211"),
  u = s("710344"),
  c = s("637853"),
  E = s("107862"),
  _ = s("259580"),
  I = s("548343"),
  T = s("740727"),
  S = s("823379"),
  f = s("889369"),
  m = s("570961"),
  N = s("208665"),
  g = s("976983"),
  h = s("290511"),
  C = s("689938"),
  R = s("532561");
let x = {
  optionErrors: []
};

function L(e) {
  var t;
  let {
    guild: s,
    prompt: n,
    disableAutofocus: u,
    promptIndex: g,
    dragIndex: L,
    includeCount: p,
    singleColumn: M,
    onPromptDragComplete: D,
    onPromptDragStart: v,
    onPromptDragReset: j
  } = e, {
    dropdownsAllowed: G
  } = (0, E.useOnboardingDropdownExperiment)(s.id), U = (0, r.useStateFromStores)([f.default], () => f.default.editedDefaultChannelIds), P = G ? h.DROPDOWN_MAX_NUM_OPTIONS : h.MULTIPLE_CHOICE_MAX_NUM_OPTIONS, {
    drag: b,
    dragSourcePosition: B,
    drop: y,
    setIsDraggable: F
  } = (0, d.default)({
    type: "ONBOARDING_PROMPT_CARD",
    index: L,
    optionId: n.id,
    onDragStart: v,
    onDragComplete: D,
    onDragReset: j
  }), H = (0, r.useStateFromStoresObject)([N.default], () => {
    var e;
    return null !== (e = N.default.errors[g]) && void 0 !== e ? e : x
  }), [k, w] = l.useState(!1), [V, Y] = l.useState(!1), W = null !== (t = H.options) && void 0 !== t ? t : H.optionErrors.filter(S.isNotNullish)[0], z = H.config, K = G && n.options.length >= h.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD, Z = (0, c.getMinimumSetOfDefaultChannelIds)(s.id, Array.from(U), [n]).length - U.size, X = l.useRef(null);
  return (l.useLayoutEffect(() => {
    setTimeout(() => {
      if (0 === g && !u) {
        var e;
        null === (e = X.current) || void 0 === e || e.focus()
      }
    }, 0)
  }, [u]), k) ? (0, a.jsx)(o.FocusRing, {
    children: (0, a.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => Y(!0),
      onBlur: () => Y(!1),
      onMouseLeave: () => Y(!1),
      className: i()(R.container, {
        [R.dropIndicatorBefore]: null != B && g < B,
        [R.dropIndicatorAfter]: null != B && g > B,
        [R.containerFocused]: V
      }),
      ref: e => b(y(e)),
      children: [(0, a.jsx)("div", {
        className: R.dragContainer,
        onMouseEnter: () => F(!0),
        onMouseLeave: () => F(!1),
        children: (0, a.jsx)(I.default, {
          className: R.dragIcon
        })
      }), (0, a.jsx)(o.Text, {
        className: R.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: C.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: g + 1
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-lg/semibold",
        color: "text-normal",
        children: n.title
      }), (0, a.jsx)(o.Clickable, {
        className: R.collapseButton,
        onClick: () => w(!1),
        children: (0, a.jsx)(_.default, {
          direction: _.default.Directions.DOWN,
          height: 16,
          width: 16
        })
      }), (0, a.jsx)(o.TooltipContainer, {
        text: C.default.Messages.ONBOARDING_PROMPT_DELETE,
        className: R.removeButton,
        children: (0, a.jsx)(o.Clickable, {
          className: R.closeIcon,
          onClick: () => (0, m.deleteGuildOnboardingPrompt)(s, n.id),
          children: (0, a.jsx)(T.default, {
            height: 16,
            width: 16
          })
        })
      })]
    })
  }) : (0, a.jsx)(o.FocusRing, {
    children: (0, a.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => Y(!0),
      onBlur: () => Y(!1),
      className: i()(R.container, {
        [R.dropIndicatorBefore]: null != B && g < B,
        [R.dropIndicatorAfter]: null != B && g > B,
        [R.containerFocused]: V
      }),
      ref: e => b(y(e)),
      children: [(0, a.jsx)("div", {
        className: R.dragContainer,
        onMouseEnter: () => F(!0),
        onMouseLeave: () => F(!1),
        children: (0, a.jsx)(I.default, {
          className: R.dragIcon
        })
      }), (0, a.jsx)(o.Text, {
        className: R.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: C.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: g + 1
        })
      }), (0, a.jsx)(o.TextInput, {
        className: R.title,
        inputClassName: R.titleInput,
        inputRef: X,
        value: n.title,
        onChange: e => (0, m.editGuildOnboardingPrompt)(s, n.id, {
          title: e
        }),
        placeholder: C.default.Messages.ONBOARDING_PROMPT_TITLE_PLACEHOLDER,
        maxLength: h.MAX_PROMPT_TITLE_LENGTH,
        error: H.title
      }), (0, a.jsx)(O, {
        prompt: n,
        guild: s
      }), (0, a.jsx)(o.Text, {
        className: R.optionsHeader,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: K ? C.default.Messages.ONBOARDING_PROMPT_DROPDOWN_OPTIONS_HEADER.format({
          count: n.options.length,
          total: P
        }) : C.default.Messages.ONBOARDING_PROMPT_OPTIONS_HEADER.format({
          count: n.options.length,
          total: P
        })
      }), (0, a.jsx)(A, {
        guild: s,
        prompt: n,
        promptIndex: g,
        errors: H,
        singleColumn: M
      }), null != W ? (0, a.jsx)(o.InputError, {
        error: W
      }) : null, (0, a.jsxs)("div", {
        className: R.buttons,
        children: [(0, a.jsxs)("div", {
          className: R.checkboxes,
          children: [(0, a.jsx)(o.Checkbox, {
            size: 20,
            type: o.Checkbox.Types.INVERTED,
            value: !n.singleSelect,
            onChange: (e, t) => (0, m.editGuildOnboardingPrompt)(s, n.id, {
              singleSelect: !t
            }),
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: C.default.Messages.ONBOARDING_PROMPT_ALLOW_MULTIPLE_LABEL
            })
          }), n.inOnboarding ? (0, a.jsx)(o.Checkbox, {
            size: 20,
            type: o.Checkbox.Types.INVERTED,
            value: n.inOnboarding && n.required,
            onChange: (e, t) => (0, m.editGuildOnboardingPrompt)(s, n.id, {
              required: t
            }),
            disabled: !n.inOnboarding,
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: p ? C.default.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL_WITH_COUNT.format({
                count: Z
              }) : C.default.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
            })
          }) : null]
        }), (0, a.jsx)(o.Clickable, {
          className: R.collapseButton,
          onClick: () => w(!0),
          children: (0, a.jsx)(_.default, {
            direction: _.default.Directions.UP,
            height: 16,
            width: 16
          })
        }), (0, a.jsx)(o.TooltipContainer, {
          text: C.default.Messages.ONBOARDING_PROMPT_DELETE,
          className: R.removeButton,
          children: (0, a.jsx)(o.Clickable, {
            className: R.closeIcon,
            onClick: () => (0, m.deleteGuildOnboardingPrompt)(s, n.id),
            children: (0, a.jsx)(T.default, {
              height: 16,
              width: 16
            })
          })
        })]
      }), null != z ? (0, a.jsx)(o.InputError, {
        error: z
      }) : null]
    })
  })
}

function O(e) {
  let {
    prompt: t,
    guild: s
  } = e, [n, i] = l.useState(!1);
  if (l.useEffect(() => {
      !n && t.title.length > 0 && i(!0)
    }, [n, t]), n) return null;

  function r(e) {
    return (0, a.jsx)(o.Clickable, {
      className: R.example,
      onClick: () => (0, m.editGuildOnboardingPrompt)(s, t.id, {
        title: e
      }),
      children: (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: e
      })
    })
  }
  return (0, a.jsxs)("div", {
    className: R.examplesSection,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: C.default.Messages.ONBOARDING_PROMPT_EXAMPLES_HEADER
    }), (0, a.jsxs)("div", {
      className: R.examples,
      children: [r(C.default.Messages.ONBOARDING_PROMPT_EXAMPLES_1), r(C.default.Messages.ONBOARDING_PROMPT_EXAMPLES_2), r(C.default.Messages.ONBOARDING_PROMPT_EXAMPLES_3), r(C.default.Messages.ONBOARDING_PROMPT_EXAMPLES_4)]
    })]
  })
}

function A(e) {
  let {
    guild: t,
    prompt: s,
    promptIndex: l,
    singleColumn: n,
    errors: i
  } = e, {
    dropdownsAllowed: r
  } = (0, E.useOnboardingDropdownExperiment)(t.id), o = r ? h.DROPDOWN_MAX_NUM_OPTIONS : h.MULTIPLE_CHOICE_MAX_NUM_OPTIONS, {
    handleDragStart: d,
    handleDragReset: c,
    handleDragComplete: _
  } = (0, u.default)(s.options, e => (0, m.editGuildOnboardingPrompt)(t, s.id, {
    options: e
  }));
  return (0, a.jsxs)("div", {
    className: R.options,
    children: [s.options.map((e, r) => (0, a.jsx)(g.default, {
      guild: t,
      prompt: s,
      promptIndex: l,
      singleColumn: n,
      option: e,
      onDragStart: d,
      onDragComplete: _,
      onDragReset: c,
      hasError: null != i.optionErrors[r]
    }, e.id)), s.options.length < o ? (0, a.jsx)(g.AddOptionCard, {
      guild: t,
      prompt: s,
      promptIndex: l,
      singleColumn: n
    }) : null]
  })
}