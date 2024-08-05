a.d(s, {
  Z: function() {
return c;
  },
  v: function() {
return I;
  }
});
var n = a(735250);
a(470079);
var E = a(120356),
  t = a.n(E),
  _ = a(481060),
  l = a(285952),
  i = a(626135),
  d = a(109983),
  T = a(675999),
  M = a(981631),
  L = a(689938),
  r = a(156058),
  o = a(43236),
  C = a(142390);
let A = 0.5 > Math.random();

function I(e) {
  let {
onClose: s,
onBack: a,
onCreationIntentChosen: E,
hasFooter: I = !0
  } = e, c = (0, n.jsx)(n.Fragment, {
children: (0, n.jsx)(_.Button, {
  className: r.backButton,
  look: _.Button.Looks.BLANK,
  size: _.Button.Sizes.MIN,
  onClick: a,
  children: L.Z.Messages.BACK
})
  });

  function N(e) {
i.default.track(M.rMx.GUILD_CREATION_INTENT_SELECTED, {
  skipped: null == e,
  is_community: e === T.lr.COMMUNITY
}), E(e);
  }
  return {
content: (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsxs)(_.ModalHeader, {
      direction: l.Z.Direction.VERTICAL,
      className: r.header,
      separator: !1,
      children: [
        (0, n.jsx)(_.Heading, {
          className: t()(r.title),
          variant: 'heading-xl/semibold',
          children: L.Z.Messages.CREATION_INTENT_TITLE
        }),
        (0, n.jsx)(_.Text, {
          className: r.subtitle,
          color: 'header-secondary',
          variant: 'text-md/normal',
          children: L.Z.Messages.CREATION_INTENT_DESCRIPTION
        }),
        null != s && (0, n.jsx)(_.ModalCloseButton, {
          className: r.closeButton,
          onClick: s
        })
      ]
    }),
    (0, n.jsxs)(_.ModalContent, {
      className: r.optionsList,
      children: [
        A ? (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.Z, {
              icon: o,
              message: L.Z.Messages.CREATION_INTENT_OPTION_FRIENDS,
              onClick: () => N(T.lr.FRIENDS)
            }),
            (0, n.jsx)(d.Z, {
              icon: C,
              message: L.Z.Messages.CREATION_INTENT_OPTION_COMMUNITY,
              onClick: () => N(T.lr.COMMUNITY)
            })
          ]
        }) : (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.Z, {
              icon: C,
              message: L.Z.Messages.CREATION_INTENT_OPTION_COMMUNITY,
              onClick: () => N(T.lr.COMMUNITY)
            }),
            (0, n.jsx)(d.Z, {
              icon: o,
              message: L.Z.Messages.CREATION_INTENT_OPTION_FRIENDS,
              onClick: () => N(T.lr.FRIENDS)
            })
          ]
        }),
        (0, n.jsx)(_.Text, {
          className: r.skip,
          color: 'header-secondary',
          variant: 'text-sm/normal',
          children: L.Z.Messages.CREATION_INTENT_SKIP.format({
            onSkip: () => N(null)
          })
        })
      ]
    }),
    I && (0, n.jsx)(_.ModalFooter, {
      justify: l.Z.Justify.BETWEEN,
      children: c
    })
  ]
}),
footer: c
  };
}

function c(e) {
  let {
content: s
  } = I(e);
  return s;
}