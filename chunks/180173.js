n.d(t, {
  Z: function() {
return A;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(442837),
  l = n(524437),
  o = n(481060),
  c = n(294218),
  u = n(703656),
  d = n(768943),
  _ = n(43690),
  E = n(695346),
  I = n(592125),
  m = n(655354),
  T = n(324081),
  h = n(240126),
  N = n(791914),
  C = n(981631),
  f = n(689938),
  p = n(645962),
  g = n(699723);
let S = {
  offset: {
left: 4,
right: -12
  }
};

function A(e) {
  let {
setTab: t,
closePopout: n
  } = e, s = (0, r.e7)([d.Z], () => d.Z.getMessageBookmarks());
  return (0, i.jsxs)('div', {
className: p.container,
children: [
  (0, i.jsx)(N.Z, {
    tab: l.X.BOOKMARKS,
    setTab: t,
    closePopout: n
  }),
  0 === s.length ? (0, i.jsx)(O, {}) : (0, i.jsx)(o.AdvancedScrollerThin, {
    children: s.map(e => (0, i.jsx)(R, {
      savedMessage: e
    }, e.saveData.messageId))
  })
]
  });
}

function R(e) {
  let {
savedMessage: t
  } = e, n = (0, r.e7)([I.Z], () => I.Z.getChannel(t.saveData.channelId)), s = () => {
(0, u.uL)(C.Z5c.CHANNEL(null == n ? void 0 : n.getGuildId(), t.saveData.channelId, t.saveData.messageId));
  };
  return (0, i.jsx)('div', {
className: g.container,
children: null != n && null != t.message ? (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(T.Z, {
      channel: n,
      gotoChannel: s,
      children: (0, i.jsx)(o.CircleIconButton, {
        className: g.closeButton,
        tooltip: f.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
        color: o.CircleIconButtonColors.TERTIARY,
        icon: (0, i.jsx)(o.CloseSmallIcon, {
          size: 'xs',
          color: 'currentColor'
        }),
        onClick: () => (0, _.h)(t.saveData)
      })
    }),
    (0, i.jsxs)('div', {
      className: a()(g.messageContainer, p.unloadedMessage),
      children: [
        (0, i.jsx)(m.Z, {
          className: g.jumpMessageButton,
          onJump: s
        }),
        (0, i.jsx)(c.Z, {
          message: t.message,
          channel: n,
          className: g.message,
          compact: E.jU.getSetting(),
          animateAvatar: !1,
          focusProps: S,
          trackAnnouncementViews: !0
        }, t.message.id)
      ]
    })
  ]
}) : (0, i.jsx)('div', {
  children: 'The message isn\'t accessible. We will deal with this later.'
})
  });
}

function O() {
  return (0, i.jsx)(h.Z, {
Icon: o.DoubleCheckmarkLargeIcon,
header: f.Z.Messages.MESSAGE_BOOKMARKS_EMPTY,
tip: f.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}