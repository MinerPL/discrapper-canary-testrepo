"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("69678"),
  u = s("372283"),
  c = s("380710"),
  E = s("837648"),
  _ = s("461380"),
  I = s("673220"),
  T = s("228220"),
  S = s("449008"),
  f = s("653274"),
  m = s("330724"),
  N = s("136278"),
  g = s("594523"),
  h = s("653138"),
  C = s("782340"),
  R = s("218308");
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
    onPromptDragReset: G
  } = e, {
    dropdownsAllowed: j
  } = (0, E.useOnboardingDropdownExperiment)(s.id), U = (0, r.useStateFromStores)([f.default], () => f.default.editedDefaultChannelIds), P = j ? h.DROPDOWN_MAX_NUM_OPTIONS : h.MULTIPLE_CHOICE_MAX_NUM_OPTIONS, {
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
    onDragReset: G
  }), H = (0, r.useStateFromStoresObject)([N.default], () => {
    var e;
    return null !== (e = N.default.errors[g]) && void 0 !== e ? e : x
  }), [k, w] = l.useState(!1), [V, Y] = l.useState(!1), W = null !== (t = H.options) && void 0 !== t ? t : H.optionErrors.filter(S.isNotNullish)[0], z = H.config, K = j && n.options.length >= h.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD, Z = (0, c.getMinimumSetOfDefaultChannelIds)(s.id, Array.from(U), [n]).length - U.size, X = l.useRef(null);
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
      className: i(R.container, {
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
      className: i(R.container, {
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