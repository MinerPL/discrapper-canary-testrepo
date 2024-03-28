"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  r = a.n(s),
  o = a("525769"),
  i = a("263568"),
  u = a("481060"),
  d = a("213609"),
  c = a("542383"),
  E = a("682864"),
  _ = a("153124"),
  A = a("729285"),
  m = a("79390"),
  f = a("728076"),
  L = a("2466"),
  R = a("485168"),
  C = a("309081"),
  N = a("185306"),
  T = a("759970"),
  h = a("489887"),
  O = a("20281"),
  P = a("689938"),
  I = a("956217");
let g = (0, _.uid)(),
  x = (0, _.uid)();

function p(e) {
  let {
    question: t,
    onChange: a,
    error: s,
    inputRef: o
  } = e, [i, d] = n.useState(!1);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.FormTitle, {
      tag: u.FormTitleTags.LABEL,
      htmlFor: x,
      children: P.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL
    }), (0, l.jsx)(u.TextArea, {
      inputRef: o,
      id: x,
      placeholder: P.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
      value: t,
      className: r()(I.questionInput, {
        [I.hasError]: null != s
      }),
      onChange: a,
      maxLength: h.MAX_POLL_QUESTION_LENGTH,
      error: s,
      onFocus: () => d(!0),
      onBlur: () => d(!1),
      showCharacterCount: i,
      showCharacterCountFullPadding: !0,
      showRemainingCharacterCount: i,
      rows: 1,
      autosize: !0,
      autoFocus: !0
    })]
  })
}

function M(e) {
  let {
    selectedDuration: t,
    onSelect: a
  } = e, n = (0, L.default)(), s = n[t];
  return (0, l.jsxs)("div", {
    className: I.duration,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": !0,
      children: P.default.Messages.CREATE_POLL_DURATION_LABEL
    }), (0, l.jsx)(u.Select, {
      "aria-label": P.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
        duration: s
      }),
      className: I.durationSelect,
      options: Object.entries(n).map(e => {
        let [t, a] = e;
        return {
          label: a,
          value: parseInt(t)
        }
      }),
      isSelected: e => e === t,
      select: a,
      serialize: e => "".concat(e),
      renderOptionLabel: e => (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: e.label
      }),
      popoutPosition: "top"
    })]
  })
}

function S(e) {
  let {
    channel: t,
    transitionState: a,
    onClose: s
  } = e, _ = (0, m.useCanPostImagePolls)();
  (0, d.default)({
    type: O.ImpressionTypes.MODAL,
    name: o.ImpressionNames.POLL_EDITOR_VIEWED
  });
  let L = n.useRef(null),
    x = n.useRef([]),
    v = n.useRef([]),
    j = n.useRef(null),
    D = n.useRef([]),
    b = n.useCallback(e => {
      var t, a, l, n;
      let {
        indexToRemove: s,
        numberOfAnswers: r
      } = e;
      r === h.MIN_NUMBER_OF_ANSWERS_PER_POLL + 1 ? null === (a = j.current) || void 0 === a || null === (t = a.ref) || void 0 === t || t.focus() : null === (n = D.current[s === r - 1 ? s - 1 : s + 1]) || void 0 === n || null === (l = n.ref) || void 0 === l || l.focus()
    }, []),
    {
      answers: w,
      question: U,
      selectedLayoutType: y,
      setSelectedLayoutType: k,
      allowMultiSelect: B,
      setAllowMultiSelect: F,
      duration: H,
      setDuration: G,
      handleQuestionChange: W,
      handleAnswerTextChange: K,
      handleEmojiSelect: Y,
      canAddMoreAnswers: V,
      handleRemoveAnswerImage: z,
      canRemoveMoreAnswers: X,
      handleAddAnswer: q,
      handleRemoveAnswer: J,
      createPollError: Q,
      handleSubmitPoll: Z,
      fieldErrors: $,
      submitting: ee,
      shouldFocusOnInvalidField: et,
      setShouldFocusOnInvalidField: ea
    } = (0, f.default)(t, s, b),
    {
      trackPollCreationCancelled: el
    } = (0, R.useTrackPollCreationEvents)(w, B, y),
    en = n.useRef(w.length),
    es = y === i.PollLayoutTypes.DEFAULT,
    er = n.useCallback(() => {
      el(), s()
    }, [s, el]),
    eo = n.useCallback(() => {
      if ((0, m.isPollCreationEmpty)(U, w, y)) er();
      else {
        (0, T.default)({
          title: P.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
          body: P.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
          cta: P.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
          closeLabel: P.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
          onConfirm: () => {
            er()
          }
        });
        return
      }
    }, [er, w, U, y]);
  n.useEffect(() => {
    (0, u.updateModal)(h.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(S, {
      ...e,
      channel: t
    }), eo)
  }, [eo, t]), n.useEffect(() => {
    if (w.length > en.current) {
      var e;
      null === (e = v.current[w.length - 1]) || void 0 === e || e.focus()
    }
    en.current = w.length
  }, [w.length]), n.useEffect(() => {
    if (et) {
      var e, t;
      if ((null == $ ? void 0 : $.question) != null) null === (e = L.current) || void 0 === e || e.focus();
      else {
        let e = w.findIndex(e => $["answer-".concat(e.localCreationAnswerId)]); - 1 !== e && (null === (t = v.current[e]) || void 0 === t || t.focus())
      }
      ea(!1)
    }
  }, [$, w, et, ea, v, x]);
  let ei = (0, c.default)({
    disabled: ee,
    onSubmit: Z
  });
  return (0, l.jsxs)(u.ModalRoot, {
    size: u.ModalSize.MEDIUM,
    className: I.container,
    transitionState: a,
    "aria-labelledby": g,
    children: [(0, l.jsxs)(u.ModalHeader, {
      className: I.header,
      separator: !1,
      children: [(0, l.jsx)(u.Heading, {
        color: "interactive-normal",
        variant: "text-lg/semibold",
        className: I.headerText,
        id: g,
        children: P.default.Messages.CREATE_POLL_HEADING
      }), (0, l.jsx)(u.ModalCloseButton, {
        onClick: eo
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: I.content,
      onKeyDown: ei,
      children: [null != Q && (0, l.jsx)(u.FormErrorBlock, {
        className: I.apiErrorBlock,
        children: Q.getAnyErrorMessage()
      }), (0, l.jsx)(p, {
        question: U,
        onChange: W,
        error: null == $ ? void 0 : $.question,
        inputRef: L
      }), _ && (0, l.jsx)(N.default, {
        selectedLayoutType: y,
        onSelectedLayoutType: k
      }), (0, l.jsx)(E.default, {
        size: 26
      }), (0, l.jsxs)("fieldset", {
        className: r()(I.answerInputsContainer, es ? I.defaultContainer : I.imageOnlyContainer),
        children: [(0, l.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.LEGEND,
          children: P.default.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL
        }), w.map((e, a) => (0, l.jsx)(C.default, {
          answer: e,
          channelId: t.id,
          index: a,
          isLastAnswer: a === w.length - 1,
          onEmojiSelect: Y,
          onEmojiRemove: z,
          layout: y,
          onAnswerTextChange: K,
          onRemoveAnswer: J,
          addAnswer: q,
          submitPoll: Z,
          answerTextInputRefs: v,
          error: null == $ ? void 0 : $["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: X,
          ref: e => x.current[a] = e,
          inputRef: e => v.current[a] = e,
          deleteButtonRef: e => D.current[a] = e
        }, e.localCreationAnswerId)), V && (0, l.jsxs)(u.Clickable, {
          className: r()(es ? I.addAnswerButtonDefault : I.addAnswerButtonImageOnly, {
            [I.canRemoveMoreAnswers]: X
          }),
          onClick: V ? q : void 0,
          "aria-label": P.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          ref: j,
          children: [(0, l.jsx)(A.default, {
            className: es ? I.addAnswerIconDefault : I.addAnswerIconImageOnly
          }), es && (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: I.addAnswerButtonLabel,
            children: P.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, l.jsx)(E.default, {
        size: 18
      }), (0, l.jsx)(M, {
        selectedDuration: H,
        onSelect: G
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      className: I.footer,
      children: [(0, l.jsx)(u.Checkbox, {
        className: I.checkbox,
        type: u.Checkbox.Types.INVERTED,
        size: 24,
        value: B,
        checkboxColor: (0, u.useToken)(u.tokens.colors.INTERACTIVE_NORMAL).hex(),
        onChange: (e, t) => F(t),
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: P.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, l.jsx)(u.Button, {
        look: u.ButtonLooks.FILLED,
        size: u.Button.Sizes.MEDIUM,
        className: I.postButton,
        onClick: Z,
        submitting: ee,
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/semibold",
          className: I.postButtonText,
          children: P.default.Messages.CREATE_POLL_POST
        })
      })]
    })]
  })
}