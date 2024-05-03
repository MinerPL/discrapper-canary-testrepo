"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var i = s("735250"),
  a = s("470079"),
  n = s("120356"),
  l = s.n(n),
  r = s("481060"),
  o = s("11352"),
  d = s("610617"),
  u = s("808602"),
  c = s("413684"),
  h = s("298812"),
  S = s("200115"),
  N = s("406205"),
  g = s("689938"),
  f = s("952091");

function m(e) {
  return (0, i.jsx)("div", {
    className: f.sectionHeader,
    children: (0, i.jsx)(r.Heading, {
      variant: "text-xs/bold",
      className: f.sectionHeaderTitle,
      color: "text-muted",
      children: e.title
    })
  })
}

function E(e) {
  return (0, i.jsxs)("div", {
    children: [null != e.title && (0, i.jsx)(m, {
      title: e.title
    }), (0, i.jsx)("div", {
      className: l()(f.sectionContent, {
        [f.sectionContentPadding]: !0 !== e.noPadding
      }),
      children: e.children
    })]
  })
}

function T(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)(r.ModalHeader, {
    className: f.header,
    children: [(0, i.jsxs)("div", {
      className: f.headerLeft,
      children: [(0, i.jsx)(u.default, {
        className: f.headerBell
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: g.default.Messages.NOTIFICATION_SETTINGS
      })]
    }), (0, i.jsx)(r.ModalCloseButton, {
      onClick: t
    })]
  })
}

function _(e) {
  let t = a.useRef(null),
    s = o.CustomNotificationSoundExperiment.useExperiment({
      location: "notification_settings_modal_redesign"
    }, {
      autoTrackExposure: !0
    }).enabled;
  return (0, i.jsxs)(r.ModalRoot, {
    size: r.ModalSize.MEDIUM,
    transitionState: e.transitionState,
    "aria-label": g.default.Messages.NOTIFICATION_SETTINGS,
    children: [(0, i.jsx)(T, {
      onClose: e.onClose
    }), (0, i.jsxs)(r.ModalContent, {
      className: f.content,
      scrollerRef: t,
      children: [(0, i.jsx)(E, {
        children: (0, i.jsx)(S.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(E, {
        title: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
        noPadding: !0,
        children: (0, i.jsx)(N.default, {
          guildId: e.guildId
        })
      }), s && (0, i.jsx)(E, {
        children: (0, i.jsx)(d.default, {
          onClose: e.onClose,
          guildId: e.guildId,
          isRedesign: !0
        })
      }), (0, i.jsx)(E, {
        title: g.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
        children: (0, i.jsx)(c.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(m, {
        title: g.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
      }), (0, i.jsx)(h.default, {
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