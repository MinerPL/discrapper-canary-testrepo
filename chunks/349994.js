"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  r = a("332664"),
  i = a("153124"),
  c = a("429506"),
  o = a("981631"),
  d = a("531578"),
  u = a("689938"),
  f = a("723410");
let m = [{
  className: f.emojiThumbsUp,
  rating: d.FeedbackRating.GOOD,
  classNameSelected: f.selected
}, {
  className: f.emojiThumbsDown,
  rating: d.FeedbackRating.BAD,
  classNameSelected: f.selected
}];

function x(e) {
  let [t, d] = s.useState(null), x = (0, i.useUID)();
  return (0, n.jsxs)(l.ModalRoot, {
    transitionState: e.transitionState,
    "aria-labelledby": x,
    children: [(0, n.jsxs)(l.ModalHeader, {
      separator: !1,
      className: f.headerContainer,
      children: [(0, n.jsx)(l.Heading, {
        id: x,
        variant: "heading-xl/extrabold",
        color: "none",
        children: u.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_PROMPT
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        className: f.ratingBody,
        children: u.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_SUBHEADER
      })]
    }), (0, n.jsx)(l.ModalContent, {
      className: f.modalBody,
      children: (0, n.jsx)(r.RatingsSelector, {
        ratingConfigs: m,
        className: f.ratingsSelector,
        selectedRating: t,
        onChangeRating: function(t) {
          var s;
          d(t), null != (s = t) && ((0, c.default)({
            rating: s
          }), e.onClose(), (0, l.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, "729328"));
            return t => (0, n.jsx)(e, {
              body: u.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_CONFIRMATION,
              ...t
            })
          }))
        }
      })
    }), (0, n.jsx)(l.ModalFooter, {
      className: f.ratingsFooter,
      children: (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: u.default.Messages.SAFETY_USER_SENTIMENT_FOOTER.format({
          safetyCenterUrl: o.MarketingURLs.SAFETY_CENTER
        })
      })
    })]
  })
}