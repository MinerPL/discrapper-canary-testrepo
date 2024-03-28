"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var i = s("735250"),
  a = s("470079"),
  n = s("803997"),
  l = s.n(n),
  r = s("481060"),
  d = s("808602"),
  o = s("413684"),
  u = s("298812"),
  c = s("200115"),
  h = s("406205"),
  S = s("689938"),
  N = s("75217");

function g(e) {
  return (0, i.jsx)("div", {
    className: N.sectionHeader,
    children: (0, i.jsx)(r.Heading, {
      variant: "text-xs/bold",
      className: N.sectionHeaderTitle,
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
      className: l()(N.sectionContent, {
        [N.sectionContentPadding]: !0 !== e.noPadding
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
    className: N.header,
    children: [(0, i.jsxs)("div", {
      className: N.headerLeft,
      children: [(0, i.jsx)(d.default, {
        className: N.headerBell
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: S.default.Messages.NOTIFICATION_SETTINGS
      })]
    }), (0, i.jsx)(r.ModalCloseButton, {
      onClick: t
    })]
  })
}

function m(e) {
  let t = a.useRef(null);
  return (0, i.jsxs)(r.ModalRoot, {
    size: r.ModalSize.MEDIUM,
    transitionState: e.transitionState,
    "aria-label": S.default.Messages.NOTIFICATION_SETTINGS,
    children: [(0, i.jsx)(E, {
      onClose: e.onClose
    }), (0, i.jsxs)(r.ModalContent, {
      className: N.content,
      scrollerRef: t,
      children: [(0, i.jsx)(f, {
        children: (0, i.jsx)(c.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(f, {
        title: S.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
        noPadding: !0,
        children: (0, i.jsx)(h.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(f, {
        title: S.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
        children: (0, i.jsx)(o.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(g, {
        title: S.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
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