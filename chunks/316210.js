t.r(s), t.d(s, {
  default: function() {
return u;
  }
});
var a = t(735250),
  o = t(470079),
  n = t(481060),
  i = t(285952),
  r = t(63063),
  l = t(113434),
  c = t(497505),
  d = t(918701),
  S = t(46140),
  _ = t(981631),
  m = t(689938),
  E = t(712381),
  T = t(708901);

function u(e) {
  let {
transitionState: s,
onClose: t,
questContent: l,
quest: u
  } = e, U = (0, d.zK)(u, S.S7.IN_HOUSE_CONSOLE_QUEST), x = o.useMemo(() => U ? l === c.jn.QUEST_BAR || l === c.jn.QUEST_BAR_V2 ? m.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : m.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE : l === c.jn.QUEST_BAR || l === c.jn.QUEST_BAR_V2 ? m.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({
gamePublisher: U ? 'Discord' : u.config.messages.gamePublisher
  }) : m.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
gamePublisher: u.config.messages.gamePublisher,
gameTitle: u.config.messages.gameTitle
  }), [
u,
l,
U
  ]);
  return (0, a.jsxs)(n.ModalRoot, {
transitionState: s,
size: n.ModalSize.DYNAMIC,
className: E.modalRoot,
children: [
  (0, a.jsxs)(n.ModalHeader, {
    direction: i.Z.Direction.VERTICAL,
    separator: !1,
    className: E.modalHeader,
    children: [
      (0, a.jsxs)('div', {
        className: E.modalTop,
        children: [
          (0, a.jsx)('div', {
            className: E.iconFrame,
            children: (0, a.jsx)('img', {
              className: E.icon,
              alt: '',
              src: T
            })
          }),
          (0, a.jsx)(n.ModalCloseButton, {
            className: E.closeBtn,
            onClick: t
          })
        ]
      }),
      (0, a.jsx)(n.Heading, {
        variant: 'heading-xl/bold',
        children: m.Z.Messages.QUESTS_DISCLOSURE_LABEL
      })
    ]
  }),
  (0, a.jsxs)(n.ModalContent, {
    className: E.modalContent,
    children: [
      (0, a.jsx)(n.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        className: E.upperBodyText,
        children: x
      }),
      (0, a.jsx)(g, {
        quest: u,
        questContent: l
      }),
      (0, a.jsx)(n.Text, {
        variant: 'text-xs/medium',
        color: 'text-muted',
        children: m.Z.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
          privacySettingsUrl: r.Z.getArticleURL(_.BhN.QUESTS_PRIVACY_CONTROLS)
        })
      })
    ]
  }),
  (0, a.jsx)(n.ModalFooter, {
    className: E.footer,
    children: (0, a.jsx)(n.Button, {
      onClick: t,
      children: m.Z.Messages.CLOSE
    })
  })
]
  });
}

function U(e) {
  let {
location: s,
age: t,
activity: o
  } = e;
  return (0, a.jsxs)('ul', {
className: E.targetList,
children: [
  s && (0, a.jsx)(x, {
    icon: n.GlobeEarthIcon,
    children: m.Z.Messages.QUESTS_DISCLOSURE_LOCATION
  }),
  t && (0, a.jsx)(x, {
    icon: n.UserIcon,
    children: m.Z.Messages.QUESTS_DISCLOSURE_AGE
  }),
  o && (0, a.jsx)(x, {
    icon: n.GameControllerIcon,
    children: m.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY
  })
]
  });
}

function g(e) {
  var s;
  let {
questContent: t,
quest: o
  } = e, n = (0, d.Mi)(o, c.jn.GIFT_INVENTORY_FOR_YOU), i = (0, l.tP)(o), r = (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null;
  return t !== c.jn.QUEST_BAR && t !== c.jn.QUEST_BAR_V2 && (t !== c.jn.QUEST_HOME_DESKTOP || !n || i || r) ? t === c.jn.ACTIVITY_PANEL || t === c.jn.QUESTS_EMBED || t === c.jn.QUEST_LIVE_STREAM ? (0, a.jsx)(U, {
activity: !0
  }) : null : (0, a.jsx)(U, {
location: !0,
age: !0,
activity: !0
  });
}

function x(e) {
  let {
icon: s,
children: t
  } = e;
  return (0, a.jsxs)(n.Text, {
variant: 'text-sm/medium',
tag: 'li',
className: E.targetItem,
children: [
  (0, a.jsx)(s, {
    size: 'xs',
    color: 'currentColor'
  }),
  t
]
  });
}