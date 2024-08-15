n.r(t), n.d(t, {
  default: function() {
return x;
  }
}), n(47120);
var a = n(735250),
  s = n(470079),
  o = n(481060),
  l = n(313201),
  r = n(332664),
  i = n(429506),
  c = n(981631),
  d = n(531578),
  u = n(689938),
  m = n(551315);
let b = [{
className: m.emojiThumbsUp,
rating: d.aZ.GOOD,
classNameSelected: m.selected
  },
  {
className: m.emojiThumbsDown,
rating: d.aZ.BAD,
classNameSelected: m.selected
  }
];

function x(e) {
  let [t, d] = s.useState(null), x = (0, l.Dt)();
  return (0, a.jsxs)(o.ModalRoot, {
transitionState: e.transitionState,
'aria-labelledby': x,
children: [
  (0, a.jsxs)(o.ModalHeader, {
    separator: !1,
    className: m.headerContainer,
    children: [
      (0, a.jsx)(o.Heading, {
        id: x,
        variant: 'heading-xl/extrabold',
        color: 'none',
        children: u.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_PROMPT
      }),
      (0, a.jsx)(o.Text, {
        variant: 'text-md/normal',
        className: m.ratingBody,
        children: u.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_SUBHEADER
      })
    ]
  }),
  (0, a.jsx)(o.ModalContent, {
    className: m.modalBody,
    children: (0, a.jsx)(r.L, {
      ratingConfigs: b,
      className: m.ratingsSelector,
      selectedRating: t,
      onChangeRating: function(t) {
        d(t), ! function(t) {
          if (null != t)
            (0, i.Z)({
              rating: t
            }), e.onClose(), (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await n.e('14466').then(n.bind(n, 729328));
              return t => (0, a.jsx)(e, {
                body: u.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_CONFIRMATION,
                ...t
              });
            });
        }(t);
      }
    })
  }),
  (0, a.jsx)(o.ModalFooter, {
    className: m.ratingsFooter,
    children: (0, a.jsx)(o.Text, {
      variant: 'text-md/normal',
      children: u.Z.Messages.SAFETY_USER_SENTIMENT_FOOTER.format({
        safetyCenterUrl: c.EYA.SAFETY_CENTER
      })
    })
  })
]
  });
}