n.r(t), n.d(t, {
  default: function() {
return j;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  o = n(120356),
  r = n.n(o),
  l = n(990547),
  i = n(442837),
  c = n(481060),
  d = n(393238),
  u = n(215292),
  _ = n(382086),
  f = n(996453),
  p = n(446706),
  m = n(594174),
  h = n(285952),
  E = n(153124),
  N = n(626135),
  T = n(792125),
  x = n(179645),
  A = n(436046),
  v = n(963209),
  b = n(436457),
  C = n(877758),
  I = n(701476),
  g = n(785997),
  M = n(981631),
  O = n(834891),
  S = n(675999),
  G = n(689938),
  R = n(310747);

function j(e) {
  let t;
  let n = (0, E.Dt)(),
{
  onSlideChange: o,
  ...j
} = e,
{
  onClose: F
} = j,
[y, D] = a.useState(!1),
Z = (0, i.e7)([m.default], () => m.default.getCurrentUser()),
L = null != Z && null == Z.nsfwAllowed,
[k, B] = a.useState(L ? g.F.AGE_GATE : g.F.CHOOSE_TEMPLATE),
[U, w] = a.useState(null);
  a.useEffect(() => {
o(y ? g.F.COMPLETE : k);
  }, [
o,
k,
y
  ]);
  let [P, H] = a.useState(null), [V, Y] = a.useState(null), [z, J] = a.useState(!1), W = (0, i.e7)([x.Z], () => x.Z.getType() === I.M5.INVITE_UNCLAIMED), K = a.useCallback(e => {
Y(e), B(g.F.CREATION_INTENT), N.default.track(M.rMx.GUILD_TEMPLATE_SELECTED, {
  template_name: e.label,
  template_code: e.code
});
  }, [
Y,
B
  ]), {
content: X,
footer: q
  } = (0, _.v)({
hasFooter: !1,
onBack: () => {
  Y(null), B(g.F.CHOOSE_TEMPLATE);
},
onCreationIntentChosen: e => {
  J(e === S.lr.COMMUNITY), B(g.F.CUSTOMIZE_GUILD);
}
  }), {
content: Q,
footer: $
  } = (0, f.G)({
guildTemplate: V,
titleClassName: R.customizeGuildTitle,
hasFooter: !1,
onGuildCreated: e => {
  H(e), (null == V ? void 0 : V.id) === O.l.CREATE ? B(g.F.CHANNEL_PROMPT) : D(!0);
},
onBack: () => {
  B(g.F.CREATION_INTENT);
},
isSlideReady: U === g.F.CUSTOMIZE_GUILD,
isCommunity: z
  }), {
content: ee,
footer: et
  } = (0, u.F)({
createdGuildId: P,
hasFooter: !1,
onChannelPromptCompleted: () => {
  D(!0);
},
isSlideReady: U === g.F.CHANNEL_PROMPT
  }), {
content: en,
footer: es
  } = (0, b.Z)({
onBack: () => B(g.F.CHOOSE_TEMPLATE),
onComplete: () => {
  F();
},
onConnect: F,
isSlideReady: U === g.F.JOIN_GUILD
  });
  switch (k) {
case g.F.CUSTOMIZE_GUILD:
  t = $;
  break;
case g.F.CHANNEL_PROMPT:
  t = et;
  break;
case g.F.JOIN_GUILD:
  t = es;
  break;
case g.F.CREATION_INTENT:
  t = q;
  }
  let {
ref: ea,
width: eo
  } = (0, d.Z)();
  if (y)
return (0, s.jsx)(c.ModalRoot, {
  ...j,
  size: c.ModalSize.MEDIUM,
  className: r()(R.modal, R.completed),
  'aria-labelledby': n,
  children: (0, s.jsx)(v.Z, {
    onComplete: F
  })
});
  let er = {
impression_group: l.ImpressionGroups.GUILD_ADD_NUF
  };
  return (0, s.jsxs)(c.ModalRoot, {
...j,
size: c.ModalSize.MEDIUM,
className: R.modal,
'aria-labelledby': n,
children: [
  (0, s.jsx)('div', {
    className: R.sidebar,
    children: (0, s.jsx)(C.Z, {
      step: k
    })
  }),
  (0, s.jsxs)('div', {
    className: r()(R.content, (0, T.Q)(M.BRd.LIGHT)),
    ref: ea,
    children: [
      (0, s.jsx)('div', {
        className: R.slidesContainer,
        children: (0, s.jsxs)(c.Slides, {
          activeSlide: k,
          onSlideReady: e => w(e),
          centered: !1,
          width: eo,
          children: [
            (0, s.jsx)(c.Slide, {
              id: g.F.AGE_GATE,
              children: (0, s.jsx)('div', {
                className: R.container,
                children: (0, s.jsx)(A.Z, {
                  onComplete: () => {
                    W ? F() : B(g.F.CHOOSE_TEMPLATE);
                  },
                  onClose: F
                })
              })
            }),
            (0, s.jsx)(c.Slide, {
              id: g.F.CHOOSE_TEMPLATE,
              impressionName: l.ImpressionNames.GUILD_ADD_LANDING,
              impressionProperties: er,
              children: (0, s.jsx)('div', {
                className: r()(R.container, R.shortFooter),
                children: (0, s.jsx)(p.Z, {
                  className: R.templates,
                  onChooseTemplate: K,
                  isNewUser: !0
                })
              })
            }),
            (0, s.jsx)(c.Slide, {
              id: g.F.CREATION_INTENT,
              impressionName: l.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
              impressionProperties: er,
              children: (0, s.jsx)('div', {
                className: r()(R.container, R.standardFooter),
                children: X
              })
            }),
            (0, s.jsx)(c.Slide, {
              id: g.F.CUSTOMIZE_GUILD,
              impressionName: l.ImpressionNames.GUILD_ADD_CUSTOMIZE,
              impressionProperties: er,
              children: (0, s.jsx)('div', {
                className: r()(R.container, R.standardFooter),
                children: Q
              })
            }),
            (0, s.jsx)(c.Slide, {
              id: g.F.CHANNEL_PROMPT,
              impressionName: l.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
              impressionProperties: er,
              children: (0, s.jsx)('div', {
                className: r()(R.container, R.standardFooter),
                children: ee
              })
            }),
            (0, s.jsx)(c.Slide, {
              id: g.F.JOIN_GUILD,
              impressionName: l.ImpressionNames.GUILD_ADD_JOIN,
              impressionProperties: er,
              children: (0, s.jsx)('div', {
                className: r()(R.container, R.standardFooter),
                children: en
              })
            })
          ]
        })
      }),
      k !== g.F.AGE_GATE ? (0, s.jsx)(c.ModalCloseButton, {
        onClick: F,
        className: R.closeButton
      }) : null,
      k === g.F.CHOOSE_TEMPLATE ? (0, s.jsx)(c.ModalFooter, {
        justify: h.Z.Justify.BETWEEN,
        className: r()(R.footer, R.join),
        children: (0, s.jsx)(c.Anchor, {
          className: R.joinCTA,
          onClick: () => {
            B(g.F.JOIN_GUILD);
          },
          children: (0, s.jsxs)(c.Text, {
            variant: 'text-sm/medium',
            className: R.joinCTA,
            children: [
              G.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY,
              ' ',
              G.Z.Messages.JOIN_SERVER_BUTTON_CTA
            ]
          })
        })
      }) : null,
      null != t ? (0, s.jsx)(c.ModalFooter, {
        justify: h.Z.Justify.BETWEEN,
        className: R.footer,
        children: t
      }) : null
    ]
  })
]
  });
}