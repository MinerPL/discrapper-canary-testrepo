n.d(s, {
  Z: function() {
return c;
  },
  v: function() {
return I;
  }
});
var a = n(735250);
n(470079);
var E = n(120356),
  t = n.n(E),
  _ = n(481060),
  l = n(285952),
  i = n(626135),
  d = n(109983),
  T = n(675999),
  M = n(981631),
  L = n(689938),
  r = n(156058),
  o = n(43236),
  C = n(142390);
let A = 0.5 > Math.random();

function I(e) {
  let {
onClose: s,
onBack: n,
onCreationIntentChosen: E,
hasFooter: I = !0
  } = e, c = (0, a.jsx)(a.Fragment, {
children: (0, a.jsx)(_.Button, {
  className: r.backButton,
  look: _.Button.Looks.BLANK,
  size: _.Button.Sizes.MIN,
  onClick: n,
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
content: (0, a.jsxs)(a.Fragment, {
  children: [
    (0, a.jsxs)(_.ModalHeader, {
      direction: l.Z.Direction.VERTICAL,
      className: r.header,
      separator: !1,
      children: [
        (0, a.jsx)(_.Heading, {
          className: t()(r.title),
          variant: 'heading-xl/semibold',
          children: L.Z.Messages.CREATION_INTENT_TITLE
        }),
        (0, a.jsx)(_.Text, {
          className: r.subtitle,
          color: 'header-secondary',
          variant: 'text-md/normal',
          children: L.Z.Messages.CREATION_INTENT_DESCRIPTION
        }),
        null != s && (0, a.jsx)(_.ModalCloseButton, {
          className: r.closeButton,
          onClick: s
        })
      ]
    }),
    (0, a.jsxs)(_.ModalContent, {
      className: r.optionsList,
      children: [
        A ? (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(d.Z, {
              icon: o,
              message: L.Z.Messages.CREATION_INTENT_OPTION_FRIENDS,
              onClick: () => N(T.lr.FRIENDS)
            }),
            (0, a.jsx)(d.Z, {
              icon: C,
              message: L.Z.Messages.CREATION_INTENT_OPTION_COMMUNITY,
              onClick: () => N(T.lr.COMMUNITY)
            })
          ]
        }) : (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(d.Z, {
              icon: C,
              message: L.Z.Messages.CREATION_INTENT_OPTION_COMMUNITY,
              onClick: () => N(T.lr.COMMUNITY)
            }),
            (0, a.jsx)(d.Z, {
              icon: o,
              message: L.Z.Messages.CREATION_INTENT_OPTION_FRIENDS,
              onClick: () => N(T.lr.FRIENDS)
            })
          ]
        }),
        (0, a.jsx)(_.Text, {
          className: r.skip,
          color: 'header-secondary',
          variant: 'text-sm/normal',
          children: L.Z.Messages.CREATION_INTENT_SKIP.format({
            onSkip: () => N(null)
          })
        })
      ]
    }),
    I && (0, a.jsx)(_.ModalFooter, {
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