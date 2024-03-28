"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("392711"),
  u = s.n(n),
  r = s("481060"),
  o = s("110924"),
  i = s("111810"),
  E = s("67866"),
  d = s("285952"),
  c = s("153124"),
  f = s("863840"),
  I = s("154921"),
  C = s("63063"),
  _ = s("957115"),
  A = s("531578"),
  L = s("689938"),
  D = s("87545");

function T() {
  return (0, a.jsx)(r.Text, {
    className: D.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: L.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
      helpdeskURL: C.default.getSubmitRequestURL()
    })
  })
}

function N(e) {
  let {
    header: t,
    body: s,
    problems: n,
    transitionState: C,
    feedbackProblems: N = [],
    otherKey: m,
    hasCloseButton: R,
    onSubmit: x,
    onClose: h,
    canDismissForever: v = !0,
    showHelpdeskLink: M = !0
  } = e, O = (0, o.default)(n), [S, U] = l.useState(!1), [B, g] = l.useState(null), [b, V] = l.useState(u().shuffle(n)), [p, F] = l.useState(""), G = (0, c.useUID)(), j = (0, f.default)(S), k = (0, f.default)(B), K = (0, f.default)(x), y = (0, f.default)(p), P = null != B && N.includes(B);
  return l.useEffect(() => {
    !u().isEqual(O, n) && V((0, _.shuffleProblems)(n, m))
  }, [n, O, m]), l.useEffect(() => () => {
    K.current({
      problem: k.current,
      dontShowAgain: j.current,
      feedback: y.current
    })
  }, []), (0, a.jsxs)(r.ModalRoot, {
    transitionState: C,
    className: D.__invalid_modalRoot,
    "aria-labelledby": G,
    children: [(0, a.jsx)(i.default, {}), (0, a.jsxs)(r.ModalHeader, {
      separator: !1,
      className: D.headerContainer,
      children: [(0, a.jsx)(I.default, {
        id: G,
        className: D.header,
        color: I.default.Colors.CUSTOM,
        size: I.default.Sizes.SIZE_24,
        children: t
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "none",
        className: D.ratingBody,
        children: s
      }), R ? (0, a.jsx)(r.ModalCloseButton, {
        className: D.modalCloseButton,
        onClick: h
      }) : null]
    }), (0, a.jsxs)(r.ModalContent, {
      className: D.__invalid_content,
      children: [P ? null : (0, a.jsx)(r.FormItem, {
        className: D.problemInfo,
        children: (0, a.jsx)(E.default, {
          options: b,
          onClick: function(e) {
            let {
              value: t
            } = e;
            g(t), !N.includes(t) && h()
          }
        })
      }), P ? (0, a.jsxs)(r.FormItem, {
        title: L.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: D.problemInfo,
        children: [(0, a.jsx)(r.TextArea, {
          value: p,
          maxLength: A.FEEDBACK_FREEFORM_LENGTH,
          onChange: F
        }), M ? (0, a.jsx)(T, {}) : null]
      }) : null]
    }), v || P ? (0, a.jsx)(r.ModalFooter, {
      className: D.footer,
      direction: d.default.Direction.HORIZONTAL,
      children: P ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          onClick: () => {
            g(null), F("")
          },
          children: L.default.Messages.BACK
        }), (0, a.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          onClick: h,
          children: L.default.Messages.SUBMIT
        })]
      }) : v ? (0, a.jsx)(r.Checkbox, {
        size: 18,
        type: r.Checkbox.Types.INVERTED,
        value: S,
        onChange: () => U(!S),
        children: (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: L.default.Messages.DONT_SHOW_AGAIN
        })
      }) : null
    }) : null]
  })
}