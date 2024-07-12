t.r(a), t.d(a, {
  default: function() {
return _;
  }
});
var s = t(735250);
t(470079);
var n = t(481060),
  o = t(547972),
  r = t(63063),
  d = t(981631),
  i = t(332325),
  l = t(689938),
  c = t(755546),
  E = t(83173);

function _(e) {
  let {
transitionState: a,
onClose: t
  } = e;
  return (0, s.jsxs)(n.ModalRoot, {
transitionState: a,
size: n.ModalSize.DYNAMIC,
className: c.modalRoot,
children: [
  (0, s.jsxs)(n.ModalHeader, {
    separator: !1,
    className: c.modalHeader,
    children: [
      (0, s.jsx)('div', {
        className: c.imageFrame,
        children: (0, s.jsx)('img', {
          alt: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_ALT,
          src: E,
          className: c.heroImage
        })
      }),
      (0, s.jsx)('div', {
        className: c.headerWrapper,
        children: (0, s.jsx)(n.Heading, {
          variant: 'heading-xl/bold',
          children: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_HEADER
        })
      })
    ]
  }),
  (0, s.jsxs)(n.ModalContent, {
    className: c.modalContent,
    children: [
      (0, s.jsxs)('div', {
        className: c.modalContentFrame,
        children: [
          (0, s.jsx)(n.Text, {
            variant: 'text-md/medium',
            color: 'header-secondary',
            children: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DESCRIPTION
          }),
          (0, s.jsx)(N, {})
        ]
      }),
      (0, s.jsxs)('div', {
        className: c.modalFooter,
        children: [
          (0, s.jsx)(n.Button, {
            onClick: t,
            className: c.button,
            children: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_GOT_IT
          }),
          (0, s.jsx)(n.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            className: c.disclosureText,
            children: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DISCLOSURE.format({
              recentActivityURL: r.Z.getArticleURL(d.BhN.MEMBER_LIST_ACTIVITY_FEED),
              handleActivityPrivacyClick: () => {
                t(), (0, o.Z)(i.Z.ACTIVITY_PRIVACY);
              }
            })
          })
        ]
      })
    ]
  })
]
  });
}
let N = () => {
  let e = [{
  icon: (0, s.jsx)(n.FriendsIcon, {
    className: c.icon
  }),
  text: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_FRIEND_NOTE
},
{
  icon: (0, s.jsx)(n.GameControllerIcon, {
    className: c.icon
  }),
  text: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_PLAYED_NOTE
},
{
  icon: (0, s.jsx)(n.ChatIcon, {
    className: c.icon
  }),
  text: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_REPLY_NOTE
}
  ];
  return (0, s.jsx)('div', {
className: c.notes,
children: e.map((e, a) => {
  let {
    icon: t,
    text: o
  } = e;
  return (0, s.jsxs)('div', {
    className: c.badgeNote,
    children: [
      (0, s.jsx)('div', {
        className: c.badge,
        children: t
      }),
      (0, s.jsx)(n.Text, {
        variant: 'text-sm/medium',
        children: o
      })
    ]
  }, 'memberlist-learn-more-note-'.concat(a));
})
  });
};