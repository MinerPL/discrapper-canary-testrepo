s.r(a), s.d(a, {
  default: function() {
return u;
  }
}), s(47120);
var t = s(735250),
  n = s(470079),
  r = s(442837),
  o = s(481060),
  _ = s(430824),
  i = s(496675),
  c = s(153124),
  l = s(228392),
  d = s(941848),
  M = s(710352),
  E = s(981631),
  m = s(921944),
  g = s(689938),
  T = s(851158);
let S = () => [{
id: 0,
name: g.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_1
  },
  {
id: 1,
name: g.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_2
  },
  {
id: 2,
name: g.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_3
  }
];

function u(e) {
  let {
guildId: a,
shouldUpsellCreation: u,
transitionState: O,
onClose: L
  } = e, x = (0, r.e7)([_.Z], () => _.Z.getGuild(a), [a]), h = (0, r.e7)([i.Z], () => i.Z.can(E.Plq.MANAGE_CHANNELS, x)), R = S(), [A, p] = n.useState(0), N = (0, c.Dt)();
  return (0, t.jsxs)(o.ModalRoot, {
transitionState: O,
'aria-labelledby': N,
size: o.ModalSize.LARGE,
children: [
  (0, t.jsxs)(o.ModalHeader, {
    separator: !1,
    className: T.header,
    children: [
      (0, t.jsx)(o.Heading, {
        variant: 'heading-xl/semibold',
        children: g.Z.Messages.FORUM_UPSELL_MODAL_HEADER
      }),
      (0, t.jsx)(o.ModalCloseButton, {
        onClick: () => L()
      })
    ]
  }),
  (0, t.jsx)(o.ModalContent, {
    children: (0, t.jsxs)('div', {
      className: T.content,
      children: [
        (0, t.jsx)(o.Text, {
          color: 'header-secondary',
          variant: 'text-md/normal',
          children: g.Z.Messages.FORUM_UPSELL_MODAL_BODY
        }),
        (0, t.jsx)('div', {
          className: T.tabBar,
          children: (0, t.jsx)(o.TabBar, {
            selectedItem: A,
            type: 'top',
            onItemSelect: e => {
              p(e), (0, l.ws)({
                forumDemoId: e
              });
            },
            className: T.tags,
            children: R.map((e, a) => (0, t.jsx)(o.TabBar.Item, {
              id: a,
              children: e.name
            }, a))
          })
        }),
        (0, t.jsx)(d.Z, {
          id: A
        })
      ]
    })
  }),
  h && (0, t.jsxs)(o.ModalFooter, {
    className: T.footer,
    children: [
      (0, t.jsxs)('div', {
        className: T.buttons,
        children: [
          (0, t.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            color: o.Button.Colors.PRIMARY,
            onClick: () => L(m.L.SECONDARY),
            className: T.button,
            children: u ? g.Z.Messages.MAYBE_LATER : g.Z.Messages.GOT_IT
          }),
          u && (0, t.jsx)(o.Button, {
            onClick: () => {
              (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([
                  s.e('45094'),
                  s.e('33574')
                ]).then(s.bind(s, 218613));
                return s => (0, t.jsx)(e, {
                  ...s,
                  channelType: E.d4z.GUILD_FORUM,
                  guildId: a,
                  prefillChannelName: u ? g.Z.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER : void 0
                });
              }), L(m.L.PRIMARY);
            },
            children: g.Z.Messages.CREATE_FORUM_CHANNEL
          })
        ]
      }),
      (0, t.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.LINK,
        onClick: () => {
          open(M.V8);
        },
        children: g.Z.Messages.LEARN_MORE
      })
    ]
  })
]
  });
}