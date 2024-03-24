"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var i = s("37983"),
  n = s("884691"),
  a = s("414456"),
  l = s.n(a),
  r = s("77078"),
  d = s("660279"),
  o = s("149943"),
  u = s("784905"),
  c = s("489618"),
  h = s("205382"),
  N = s("782340"),
  S = s("266219");

function g(e) {
  return (0, i.jsx)("div", {
    className: S.sectionHeader,
    children: (0, i.jsx)(r.Heading, {
      variant: "text-xs/bold",
      className: S.sectionHeaderTitle,
      color: "text-muted",
      children: e.title
    })
  })
}

function f(e) {
  return (0, i.jsxs)("div", {
    children: [null != e.title && (0, i.jsx)(g, {
      title: e.title
    }), (0, i.jsx)("div", {
      className: l(S.sectionContent, {
        [S.sectionContentPadding]: !0 !== e.noPadding
      }),
      children: e.children
    })]
  })
}

function E(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)(r.ModalHeader, {
    className: S.header,
    children: [(0, i.jsxs)("div", {
      className: S.headerLeft,
      children: [(0, i.jsx)(d.default, {
        className: S.headerBell
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: N.default.Messages.NOTIFICATION_SETTINGS
      })]
    }), (0, i.jsx)(r.ModalCloseButton, {
      onClick: t
    })]
  })
}

function m(e) {
  let t = n.useRef(null);
  return (0, i.jsxs)(r.ModalRoot, {
    size: r.ModalSize.MEDIUM,
    transitionState: e.transitionState,
    "aria-label": N.default.Messages.NOTIFICATION_SETTINGS,
    children: [(0, i.jsx)(E, {
      onClose: e.onClose
    }), (0, i.jsxs)(r.ModalContent, {
      className: S.content,
      scrollerRef: t,
      children: [(0, i.jsx)(f, {
        children: (0, i.jsx)(c.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(f, {
        title: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
        noPadding: !0,
        children: (0, i.jsx)(h.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(f, {
        title: N.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
        children: (0, i.jsx)(o.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(g, {
        title: N.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
      }), (0, i.jsx)(u.default, {
        guildId: e.guildId,
        requestScrollToBottom: () => {
          null != t && null != t.current && t.current.scrollToBottom({
            animate: !0
          })
        }
      })]
    })]
  })
}