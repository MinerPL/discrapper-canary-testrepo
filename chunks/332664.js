"use strict";
a.r(t), a.d(t, {
  RatingsSelector: function() {
    return A
  },
  default: function() {
    return p
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  n = a("803997"),
  r = a.n(n),
  u = a("392711"),
  o = a.n(u),
  i = a("481060"),
  d = a("110924"),
  c = a("67866"),
  R = a("285952"),
  E = a("153124"),
  f = a("863840"),
  _ = a("63063"),
  m = a("957115"),
  S = a("531578"),
  T = a("689938"),
  O = a("87545");
let M = [{
  className: O.emojiSad,
  rating: S.FeedbackRating.BAD,
  classNameSelected: O.selected
}, {
  className: O.emojiNeutral,
  rating: S.FeedbackRating.NEUTRAL,
  classNameSelected: O.selected
}, {
  className: O.emojiHappy,
  rating: S.FeedbackRating.GOOD,
  classNameSelected: O.selected
}];

function A(e) {
  let {
    className: t,
    selectedRating: a,
    ratingConfigs: l,
    onChangeRating: n
  } = e;
  return (0, s.jsx)(R.default, {
    justify: R.default.Justify.BETWEEN,
    align: R.default.Align.CENTER,
    className: r()(O.ratingsSelector, t),
    children: (null != l ? l : M).map(e => {
      let {
        rating: t,
        className: l,
        classNameSelected: u
      } = e;
      return (0, s.jsx)(i.Clickable, {
        onClick: () => n(t),
        "aria-label": t,
        children: (0, s.jsx)("div", {
          className: r()(l, a === t ? u : null)
        })
      }, t)
    })
  })
}

function g() {
  return (0, s.jsx)(i.Text, {
    className: O.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: T.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
      helpdeskURL: _.default.getSubmitRequestURL()
    })
  })
}

function p(e) {
  let {
    header: t,
    body: a,
    problemTitle: n,
    problems: u,
    transitionState: _,
    ratingConfigs: M,
    feedbackProblems: p = [],
    otherKey: N,
    ratingsSelectorClassName: h,
    hideDontShowCheckbox: x,
    startRating: I = null,
    onSubmit: b,
    onClose: D
  } = e, P = (0, d.default)(u), [C, L] = l.useState(!1), [v, j] = l.useState(I), [B, k] = l.useState(null), [G, U] = l.useState(o().shuffle(u)), [F, y] = l.useState(""), H = (0, E.useUID)(), Y = (0, f.default)(v), K = (0, f.default)(C), w = (0, f.default)(B), z = (0, f.default)(b), q = (0, f.default)(F), W = null != B && p.includes(B);
  return l.useEffect(() => {
    !o().isEqual(P, u) && U((0, m.shuffleProblems)(u, N))
  }, [u, P, N]), l.useEffect(() => () => {
    z.current({
      rating: Y.current,
      problem: w.current,
      dontShowAgain: K.current,
      feedback: q.current
    })
  }, []), (0, s.jsxs)(i.ModalRoot, {
    transitionState: _,
    className: O.__invalid_modalRoot,
    "aria-labelledby": H,
    children: [(0, s.jsxs)(i.ModalHeader, {
      separator: !1,
      className: O.headerContainer,
      children: [(0, s.jsx)(i.Heading, {
        id: H,
        variant: "heading-xl/extrabold",
        color: "none",
        children: t
      }), (0, s.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "none",
        className: O.ratingBody,
        children: a
      }), W ? null : (0, s.jsx)(A, {
        className: r()(O.emojis, h),
        selectedRating: v,
        onChangeRating: function(e) {
          j(e), e === S.FeedbackRating.GOOD && D()
        },
        ratingConfigs: M
      })]
    }), (0, s.jsxs)(i.ModalContent, {
      className: O.__invalid_content,
      children: [null == v || v === S.FeedbackRating.GOOD || W ? null : (0, s.jsx)(i.FormItem, {
        title: n,
        className: O.problemInfo,
        children: (0, s.jsx)(c.default, {
          options: G,
          onClick: function(e) {
            let {
              value: t
            } = e;
            k(t), !p.includes(t) && D()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !p.includes(t)
          }
        })
      }), W ? (0, s.jsxs)(i.FormItem, {
        title: T.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: O.problemInfo,
        children: [(0, s.jsx)(i.TextArea, {
          value: F,
          maxLength: S.FEEDBACK_FREEFORM_LENGTH,
          onChange: y
        }), (0, s.jsx)(g, {})]
      }) : null]
    }), (W || !x) && (0, s.jsx)(i.ModalFooter, {
      className: O.footer,
      direction: R.default.Direction.HORIZONTAL,
      children: W ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(i.Button, {
          size: i.Button.Sizes.SMALL,
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: () => {
            k(null), y("")
          },
          children: T.default.Messages.BACK
        }), (0, s.jsx)(i.Button, {
          size: i.Button.Sizes.SMALL,
          onClick: D,
          children: T.default.Messages.SUBMIT
        })]
      }) : (0, s.jsx)(i.Checkbox, {
        type: i.Checkbox.Types.INVERTED,
        size: 18,
        value: C,
        onChange: () => L(!C),
        children: (0, s.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: T.default.Messages.DONT_SHOW_AGAIN
        })
      })
    })]
  })
}