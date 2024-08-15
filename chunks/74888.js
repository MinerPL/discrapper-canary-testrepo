t.d(s, {
  Z: function() {
return T;
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(11352),
  d = t(610617),
  c = t(413684),
  u = t(298812),
  h = t(200115),
  N = t(406205),
  S = t(689938),
  E = t(331550);

function g(e) {
  return (0, n.jsx)('div', {
className: E.sectionHeader,
children: (0, n.jsx)(r.Heading, {
  variant: 'text-xs/bold',
  className: E.sectionHeaderTitle,
  color: 'text-muted',
  children: e.title
})
  });
}

function m(e) {
  return (0, n.jsxs)('div', {
children: [
  null != e.title && (0, n.jsx)(g, {
    title: e.title
  }),
  (0, n.jsx)('div', {
    className: a()(E.sectionContent, {
      [E.sectionContentPadding]: !0 !== e.noPadding
    }),
    children: e.children
  })
]
  });
}

function _(e) {
  let {
onClose: s
  } = e;
  return (0, n.jsxs)(r.ModalHeader, {
className: E.header,
children: [
  (0, n.jsxs)('div', {
    className: E.headerLeft,
    children: [
      (0, n.jsx)(r.BellIcon, {
        size: 'md',
        color: 'currentColor',
        className: E.headerBell
      }),
      (0, n.jsx)(r.Heading, {
        variant: 'heading-lg/semibold',
        children: S.Z.Messages.NOTIFICATION_SETTINGS
      })
    ]
  }),
  (0, n.jsx)(r.ModalCloseButton, {
    onClick: s
  })
]
  });
}

function T(e) {
  let s = i.useRef(null),
t = o.Y.useExperiment({
  location: 'notification_settings_modal_redesign'
}, {
  autoTrackExposure: !0
}).enabled;
  return (0, n.jsxs)(r.ModalRoot, {
size: r.ModalSize.MEDIUM,
transitionState: e.transitionState,
'aria-label': S.Z.Messages.NOTIFICATION_SETTINGS,
children: [
  (0, n.jsx)(_, {
    onClose: e.onClose
  }),
  (0, n.jsxs)(r.ModalContent, {
    className: E.content,
    scrollerRef: s,
    children: [
      (0, n.jsx)(m, {
        children: (0, n.jsx)(h.Z, {
          guildId: e.guildId
        })
      }),
      (0, n.jsx)(m, {
        title: S.Z.Messages.NOTIFICATION_SETTINGS_PRESETS,
        noPadding: !0,
        children: (0, n.jsx)(N.Z, {
          guildId: e.guildId
        })
      }),
      t && (0, n.jsx)(m, {
        children: (0, n.jsx)(d.Z, {
          onClose: e.onClose,
          guildId: e.guildId,
          isRedesign: !0
        })
      }),
      (0, n.jsx)(m, {
        title: S.Z.Messages.NOTIFICATION_SETTINGS_ADVANCED,
        children: (0, n.jsx)(c.Z, {
          guildId: e.guildId
        })
      }),
      (0, n.jsx)(g, {
        title: S.Z.Messages.CHANNEL_NOTIFICATION_OVERRIDES
      }),
      (0, n.jsx)(u.Z, {
        guildId: e.guildId,
        requestScrollToBottom: () => {
          null != s && null != s.current && s.current.scrollToBottom({
            animate: !0
          });
        }
      })
    ]
  })
]
  });
}