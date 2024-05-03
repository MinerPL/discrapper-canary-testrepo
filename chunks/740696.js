"use strict";
s.r(a), s.d(a, {
  default: function() {
    return g
  }
}), s("47120");
var t = s("735250"),
  n = s("470079"),
  r = s("442837"),
  l = s("481060"),
  _ = s("430824"),
  i = s("496675"),
  o = s("153124"),
  d = s("228392"),
  c = s("941848"),
  u = s("710352"),
  M = s("981631"),
  E = s("921944"),
  m = s("689938"),
  T = s("460252");
let S = () => [{
  id: 0,
  name: m.default.Messages.FORUM_UPSELL_DEMO_TAG_NAME_1
}, {
  id: 1,
  name: m.default.Messages.FORUM_UPSELL_DEMO_TAG_NAME_2
}, {
  id: 2,
  name: m.default.Messages.FORUM_UPSELL_DEMO_TAG_NAME_3
}];

function g(e) {
  let {
    guildId: a,
    shouldUpsellCreation: g,
    transitionState: O,
    onClose: f
  } = e, L = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(a), [a]), x = (0, r.useStateFromStores)([i.default], () => i.default.can(M.Permissions.MANAGE_CHANNELS, L)), h = S(), [A, R] = n.useState(0), U = (0, o.useUID)();
  return (0, t.jsxs)(l.ModalRoot, {
    transitionState: O,
    "aria-labelledby": U,
    size: l.ModalSize.LARGE,
    children: [(0, t.jsxs)(l.ModalHeader, {
      separator: !1,
      className: T.header,
      children: [(0, t.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        children: m.default.Messages.FORUM_UPSELL_MODAL_HEADER
      }), (0, t.jsx)(l.ModalCloseButton, {
        onClick: () => f()
      })]
    }), (0, t.jsx)(l.ModalContent, {
      children: (0, t.jsxs)("div", {
        className: T.content,
        children: [(0, t.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          children: m.default.Messages.FORUM_UPSELL_MODAL_BODY
        }), (0, t.jsx)("div", {
          className: T.tabBar,
          children: (0, t.jsx)(l.TabBar, {
            selectedItem: A,
            type: "top",
            onItemSelect: e => {
              R(e), (0, d.trackForumUpsellModalClicked)({
                forumDemoId: e
              })
            },
            className: T.tags,
            children: h.map((e, a) => (0, t.jsx)(l.TabBar.Item, {
              id: a,
              children: e.name
            }, a))
          })
        }), (0, t.jsx)(c.default, {
          id: A
        })]
      })
    }), x && (0, t.jsxs)(l.ModalFooter, {
      className: T.footer,
      children: [(0, t.jsxs)("div", {
        className: T.buttons,
        children: [(0, t.jsx)(l.Button, {
          look: l.Button.Looks.BLANK,
          color: l.Button.Colors.PRIMARY,
          onClick: () => f(E.ContentDismissActionType.SECONDARY),
          className: T.button,
          children: g ? m.default.Messages.MAYBE_LATER : m.default.Messages.GOT_IT
        }), g && (0, t.jsx)(l.Button, {
          onClick: () => {
            (0, l.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([s.e("99387"), s.e("90508"), s.e("7590"), s.e("45094"), s.e("76688")]).then(s.bind(s, "218613"));
              return s => (0, t.jsx)(e, {
                ...s,
                channelType: M.ChannelTypes.GUILD_FORUM,
                guildId: a,
                prefillChannelName: g ? m.default.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER : void 0
              })
            }), f(E.ContentDismissActionType.PRIMARY)
          },
          children: m.default.Messages.CREATE_FORUM_CHANNEL
        })]
      }), (0, t.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.LINK,
        onClick: () => {
          open(u.COMMUNITY_PORTAL_FORUM_PAGE)
        },
        children: m.default.Messages.LEARN_MORE
      })]
    })]
  })
}