"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007");
var a, l, i = s("37983"),
  n = s("884691"),
  r = s("414456"),
  d = s.n(r),
  o = s("446674"),
  u = s("77078"),
  c = s("145131"),
  C = s("476263"),
  m = s("433487"),
  f = s("209397"),
  E = s("175703"),
  T = s("782340"),
  x = s("285526"),
  _ = s("631662"),
  I = s("529861");

function L(e) {
  let {
    guild: t,
    onClick: s
  } = e;
  return (0, i.jsxs)(u.Clickable, {
    className: x.clickableGuildRow,
    onClick: s,
    children: [(0, i.jsx)(C.default, {
      guild: t,
      size: C.default.Sizes.MEDIUM,
      active: !0
    }), (0, i.jsx)(u.Text, {
      className: x.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), (0, i.jsx)("img", {
      className: x.arrow,
      alt: "",
      src: I
    })]
  })
}

function h(e) {
  let {
    directoryChannelId: t,
    guild: s
  } = e, a = (0, o.useStateFromStores)([f.default], () => f.default.getDirectoryEntry(t, s.id));
  return (0, i.jsxs)("div", {
    className: x.guildRow,
    children: [(0, i.jsx)(C.default, {
      guild: s,
      size: C.default.Sizes.MEDIUM,
      active: !0
    }), (0, i.jsx)(u.Text, {
      className: x.guildName,
      variant: "text-md/normal",
      children: s.name
    }), (0, i.jsx)(E.default, {
      entry: a,
      forceLightTheme: !0,
      children: e => (0, i.jsx)(m.default, {
        ...e,
        className: x.overflowIcon
      })
    })]
  })
}

function g(e) {
  let t, {
      directoryChannelId: s,
      onClose: a,
      onGuildChosen: l,
      handleChooseCreate: r,
      directoryGuildName: o,
      availableGuilds: C,
      addedGuilds: m,
      loading: f
    } = e,
    [E, I] = n.useState(0);
  return t = f ? (0, i.jsx)("div", {
    className: x.emptyContainer,
    children: (0, i.jsx)(u.Spinner, {})
  }) : 0 === E ? 0 === C.length ? (0, i.jsxs)("div", {
    className: x.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: _,
      alt: "",
      className: x.emptyImage
    }), (0, i.jsx)(u.Text, {
      className: x.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: T.default.Messages.HUB_CHOOSE_GUILD_EMPTY
    })]
  }) : C.map(e => (0, i.jsx)(L, {
    guild: e,
    onClick: () => l(e)
  }, e.id)) : 0 === m.length ? (0, i.jsxs)("div", {
    className: x.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: _,
      alt: "",
      className: x.emptyImage
    }), (0, i.jsx)(u.Text, {
      className: x.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: T.default.Messages.HUB_CHOOSE_GUILD_ADDED_EMPTY
    })]
  }) : m.map(e => (0, i.jsx)(h, {
    directoryChannelId: s,
    guild: e
  }, e.id)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(u.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [null != a && (0, i.jsx)(u.ModalCloseButton, {
        className: x.closeButton,
        onClick: a
      }), (0, i.jsx)(u.Heading, {
        className: x.title,
        variant: "heading-xl/semibold",
        children: T.default.Messages.HUB_CHOOSE_GUILD_TITLE.format({
          guildName: o
        })
      }), (0, i.jsx)(u.Text, {
        className: x.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: T.default.Messages.HUB_CHOOSE_GUILD_SUBTITLE
      }), (0, i.jsxs)(u.TabBar, {
        className: x.tabBar,
        selectedItem: E,
        onItemSelect: I,
        type: "top",
        look: "brand",
        children: [(0, i.jsx)(u.TabBar.Item, {
          className: d(x.tabBarItem, {
            [x.selectedTab]: 0 === E
          }),
          id: 0,
          children: T.default.Messages.HUB_CHOOSE_GUILD_CHOOSE_TAB
        }), (0, i.jsx)(u.TabBar.Item, {
          className: d(x.tabBarItem, {
            [x.selectedTab]: 1 === E
          }),
          id: 1,
          children: T.default.Messages.HUB_CHOOSE_GUILD_ADDED_TAB
        })]
      })]
    }), (0, i.jsx)(u.ModalContent, {
      className: x.guildList,
      paddingFix: !1,
      children: t
    }), (0, i.jsxs)(u.ModalFooter, {
      className: x.footer,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        className: x.footerTitle,
        children: T.default.Messages.HUB_CREATE_GUILD_LABEL
      }), (0, i.jsx)(u.Button, {
        className: x.footerButton,
        color: u.Button.Colors.PRIMARY,
        onClick: r,
        children: T.default.Messages.HUB_CREATE_GUILD_CTA
      })]
    })]
  })
}(l = a || (a = {}))[l.AVAILABLE = 0] = "AVAILABLE", l[l.ADDED = 1] = "ADDED"