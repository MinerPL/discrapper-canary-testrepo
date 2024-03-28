"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a, l, i = s("735250"),
  n = s("470079"),
  d = s("803997"),
  r = s.n(d),
  o = s("442837"),
  u = s("481060"),
  c = s("285952"),
  C = s("346656"),
  m = s("808268"),
  f = s("273387"),
  T = s("16853"),
  _ = s("689938"),
  E = s("734216"),
  x = s("36705"),
  I = s("216019");

function L(e) {
  let {
    guild: t,
    onClick: s
  } = e;
  return (0, i.jsxs)(u.Clickable, {
    className: E.clickableGuildRow,
    onClick: s,
    children: [(0, i.jsx)(C.default, {
      guild: t,
      size: C.default.Sizes.MEDIUM,
      active: !0
    }), (0, i.jsx)(u.Text, {
      className: E.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), (0, i.jsx)("img", {
      className: E.__invalid_arrow,
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
    className: E.guildRow,
    children: [(0, i.jsx)(C.default, {
      guild: s,
      size: C.default.Sizes.MEDIUM,
      active: !0
    }), (0, i.jsx)(u.Text, {
      className: E.guildName,
      variant: "text-md/normal",
      children: s.name
    }), (0, i.jsx)(T.default, {
      entry: a,
      forceLightTheme: !0,
      children: e => (0, i.jsx)(m.default, {
        ...e,
        className: E.overflowIcon
      })
    })]
  })
}

function g(e) {
  let t, {
      directoryChannelId: s,
      onClose: a,
      onGuildChosen: l,
      handleChooseCreate: d,
      directoryGuildName: o,
      availableGuilds: C,
      addedGuilds: m,
      loading: f
    } = e,
    [T, I] = n.useState(0);
  return t = f ? (0, i.jsx)("div", {
    className: E.emptyContainer,
    children: (0, i.jsx)(u.Spinner, {})
  }) : 0 === T ? 0 === C.length ? (0, i.jsxs)("div", {
    className: E.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: x,
      alt: "",
      className: E.emptyImage
    }), (0, i.jsx)(u.Text, {
      className: E.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: _.default.Messages.HUB_CHOOSE_GUILD_EMPTY
    })]
  }) : C.map(e => (0, i.jsx)(L, {
    guild: e,
    onClick: () => l(e)
  }, e.id)) : 0 === m.length ? (0, i.jsxs)("div", {
    className: E.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: x,
      alt: "",
      className: E.emptyImage
    }), (0, i.jsx)(u.Text, {
      className: E.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: _.default.Messages.HUB_CHOOSE_GUILD_ADDED_EMPTY
    })]
  }) : m.map(e => (0, i.jsx)(h, {
    directoryChannelId: s,
    guild: e
  }, e.id)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(u.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: E.header,
      separator: !1,
      children: [null != a && (0, i.jsx)(u.ModalCloseButton, {
        className: E.closeButton,
        onClick: a
      }), (0, i.jsx)(u.Heading, {
        className: E.title,
        variant: "heading-xl/semibold",
        children: _.default.Messages.HUB_CHOOSE_GUILD_TITLE.format({
          guildName: o
        })
      }), (0, i.jsx)(u.Text, {
        className: E.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: _.default.Messages.HUB_CHOOSE_GUILD_SUBTITLE
      }), (0, i.jsxs)(u.TabBar, {
        className: E.tabBar,
        selectedItem: T,
        onItemSelect: I,
        type: "top",
        look: "brand",
        children: [(0, i.jsx)(u.TabBar.Item, {
          className: r()(E.tabBarItem, {
            [E.selectedTab]: 0 === T
          }),
          id: 0,
          children: _.default.Messages.HUB_CHOOSE_GUILD_CHOOSE_TAB
        }), (0, i.jsx)(u.TabBar.Item, {
          className: r()(E.tabBarItem, {
            [E.selectedTab]: 1 === T
          }),
          id: 1,
          children: _.default.Messages.HUB_CHOOSE_GUILD_ADDED_TAB
        })]
      })]
    }), (0, i.jsx)(u.ModalContent, {
      className: E.guildList,
      paddingFix: !1,
      children: t
    }), (0, i.jsxs)(u.ModalFooter, {
      className: E.footer,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        className: E.footerTitle,
        children: _.default.Messages.HUB_CREATE_GUILD_LABEL
      }), (0, i.jsx)(u.Button, {
        className: E.footerButton,
        color: u.Button.Colors.PRIMARY,
        onClick: d,
        children: _.default.Messages.HUB_CREATE_GUILD_CTA
      })]
    })]
  })
}(l = a || (a = {}))[l.AVAILABLE = 0] = "AVAILABLE", l[l.ADDED = 1] = "ADDED"