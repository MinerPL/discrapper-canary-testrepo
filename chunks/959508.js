"use strict";
t.d(s, {
  Z: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(603211),
  d = t(710344),
  u = t(637853),
  E = t(107862),
  _ = t(259580),
  I = t(548343),
  T = t(740727),
  N = t(823379),
  m = t(889369),
  S = t(570961),
  h = t(208665),
  g = t(976983),
  x = t(290511),
  C = t(689938),
  R = t(428391);
let L = {
  optionErrors: []
};

function O(e) {
  var s;
  let {
    guild: t,
    prompt: l,
    disableAutofocus: d,
    promptIndex: g,
    dragIndex: O,
    includeCount: M,
    singleColumn: f,
    onPromptDragComplete: v,
    onPromptDragStart: D,
    onPromptDragReset: Z
  } = e, {
    dropdownsAllowed: j
  } = (0, E.Ug)(t.id), U = (0, r.e7)([m.Z], () => m.Z.editedDefaultChannelIds), G = j ? x.qm : x.M$, {
    drag: P,
    dragSourcePosition: b,
    drop: B,
    setIsDraggable: y
  } = (0, c.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: O,
    optionId: l.id,
    onDragStart: D,
    onDragComplete: v,
    onDragReset: Z
  }), F = (0, r.cj)([h.Z], () => {
    var e;
    return null !== (e = h.Z.errors[g]) && void 0 !== e ? e : L
  }), [w, k] = i.useState(!1), [H, V] = i.useState(!1), Y = null !== (s = F.options) && void 0 !== s ? s : F.optionErrors.filter(N.lm)[0], W = F.config, K = j && l.options.length >= x.fY, z = (0, u.kl)(t.id, Array.from(U), [l]).length - U.size, q = i.useRef(null);
  return (i.useLayoutEffect(() => {
    setTimeout(() => {
      if (0 === g && !d) {
        var e;
        null === (e = q.current) || void 0 === e || e.focus()
      }
    }, 0)
  }, [d]), w) ? (0, n.jsx)(o.FocusRing, {
    children: (0, n.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => V(!0),
      onBlur: () => V(!1),
      onMouseLeave: () => V(!1),
      className: a()(R.container, {
        [R.dropIndicatorBefore]: null != b && g < b,
        [R.dropIndicatorAfter]: null != b && g > b,
        [R.containerFocused]: H
      }),
      ref: e => P(B(e)),
      children: [(0, n.jsx)("div", {
        className: R.dragContainer,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1),
        children: (0, n.jsx)(I.Z, {
          className: R.dragIcon
        })
      }), (0, n.jsx)(o.Text, {
        className: R.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: C.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: g + 1
        })
      }), (0, n.jsx)(o.Text, {
        variant: "text-lg/semibold",
        color: "text-normal",
        children: l.title
      }), (0, n.jsx)(o.Clickable, {
        className: R.collapseButton,
        onClick: () => k(!1),
        children: (0, n.jsx)(_.Z, {
          direction: _.Z.Directions.DOWN,
          height: 16,
          width: 16
        })
      }), (0, n.jsx)(o.TooltipContainer, {
        text: C.Z.Messages.ONBOARDING_PROMPT_DELETE,
        className: R.removeButton,
        children: (0, n.jsx)(o.Clickable, {
          className: R.closeIcon,
          onClick: () => (0, S.fi)(t, l.id),
          children: (0, n.jsx)(T.Z, {
            height: 16,
            width: 16
          })
        })
      })]
    })
  }) : (0, n.jsx)(o.FocusRing, {
    children: (0, n.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => V(!0),
      onBlur: () => V(!1),
      className: a()(R.container, {
        [R.dropIndicatorBefore]: null != b && g < b,
        [R.dropIndicatorAfter]: null != b && g > b,
        [R.containerFocused]: H
      }),
      ref: e => P(B(e)),
      children: [(0, n.jsx)("div", {
        className: R.dragContainer,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1),
        children: (0, n.jsx)(I.Z, {
          className: R.dragIcon
        })
      }), (0, n.jsx)(o.Text, {
        className: R.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: C.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: g + 1
        })
      }), (0, n.jsx)(o.TextInput, {
        className: R.title,
        inputClassName: R.titleInput,
        inputRef: q,
        value: l.title,
        onChange: e => (0, S.Kk)(t, l.id, {
          title: e
        }),
        placeholder: C.Z.Messages.ONBOARDING_PROMPT_TITLE_PLACEHOLDER,
        maxLength: x.iU,
        error: F.title
      }), (0, n.jsx)(A, {
        prompt: l,
        guild: t
      }), (0, n.jsx)(o.Text, {
        className: R.optionsHeader,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: K ? C.Z.Messages.ONBOARDING_PROMPT_DROPDOWN_OPTIONS_HEADER.format({
          count: l.options.length,
          total: G
        }) : C.Z.Messages.ONBOARDING_PROMPT_OPTIONS_HEADER.format({
          count: l.options.length,
          total: G
        })
      }), (0, n.jsx)(p, {
        guild: t,
        prompt: l,
        promptIndex: g,
        errors: F,
        singleColumn: f
      }), null != Y ? (0, n.jsx)(o.InputError, {
        error: Y
      }) : null, (0, n.jsxs)("div", {
        className: R.buttons,
        children: [(0, n.jsxs)("div", {
          className: R.checkboxes,
          children: [(0, n.jsx)(o.Checkbox, {
            size: 20,
            type: o.Checkbox.Types.INVERTED,
            value: !l.singleSelect,
            onChange: (e, s) => (0, S.Kk)(t, l.id, {
              singleSelect: !s
            }),
            children: (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: C.Z.Messages.ONBOARDING_PROMPT_ALLOW_MULTIPLE_LABEL
            })
          }), l.inOnboarding ? (0, n.jsx)(o.Checkbox, {
            size: 20,
            type: o.Checkbox.Types.INVERTED,
            value: l.inOnboarding && l.required,
            onChange: (e, s) => (0, S.Kk)(t, l.id, {
              required: s
            }),
            disabled: !l.inOnboarding,
            children: (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: M ? C.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL_WITH_COUNT.format({
                count: z
              }) : C.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
            })
          }) : null]
        }), (0, n.jsx)(o.Clickable, {
          className: R.collapseButton,
          onClick: () => k(!0),
          children: (0, n.jsx)(_.Z, {
            direction: _.Z.Directions.UP,
            height: 16,
            width: 16
          })
        }), (0, n.jsx)(o.TooltipContainer, {
          text: C.Z.Messages.ONBOARDING_PROMPT_DELETE,
          className: R.removeButton,
          children: (0, n.jsx)(o.Clickable, {
            className: R.closeIcon,
            onClick: () => (0, S.fi)(t, l.id),
            children: (0, n.jsx)(T.Z, {
              height: 16,
              width: 16
            })
          })
        })]
      }), null != W ? (0, n.jsx)(o.InputError, {
        error: W
      }) : null]
    })
  })
}

function A(e) {
  let {
    prompt: s,
    guild: t
  } = e, [l, a] = i.useState(!1);
  if (i.useEffect(() => {
      !l && s.title.length > 0 && a(!0)
    }, [l, s]), l) return null;

  function r(e) {
    return (0, n.jsx)(o.Clickable, {
      className: R.example,
      onClick: () => (0, S.Kk)(t, s.id, {
        title: e
      }),
      children: (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: e
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: R.examplesSection,
    children: [(0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: C.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_HEADER
    }), (0, n.jsxs)("div", {
      className: R.examples,
      children: [r(C.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_1), r(C.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_2), r(C.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_3), r(C.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_4)]
    })]
  })
}

function p(e) {
  let {
    guild: s,
    prompt: t,
    promptIndex: i,
    singleColumn: l,
    errors: a
  } = e, {
    dropdownsAllowed: r
  } = (0, E.Ug)(s.id), o = r ? x.qm : x.M$, {
    handleDragStart: c,
    handleDragReset: u,
    handleDragComplete: _
  } = (0, d.Z)(t.options, e => (0, S.Kk)(s, t.id, {
    options: e
  }));
  return (0, n.jsxs)("div", {
    className: R.options,
    children: [t.options.map((e, r) => (0, n.jsx)(g.Z, {
      guild: s,
      prompt: t,
      promptIndex: i,
      singleColumn: l,
      option: e,
      onDragStart: c,
      onDragComplete: _,
      onDragReset: u,
      hasError: null != a.optionErrors[r]
    }, e.id)), t.options.length < o ? (0, n.jsx)(g.B, {
      guild: s,
      prompt: t,
      promptIndex: i,
      singleColumn: l
    }) : null]
  })
}