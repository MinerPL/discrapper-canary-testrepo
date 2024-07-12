n.d(t, {
  Z: function() {
return R;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(442837),
  l = n(524437),
  o = n(481060),
  c = n(904245),
  d = n(294218),
  u = n(703656),
  _ = n(43690),
  E = n(115219),
  I = n(682417),
  m = n(695346),
  T = n(375954),
  h = n(324081),
  N = n(240126),
  f = n(791914),
  p = n(981631),
  C = n(689938),
  g = n(166311),
  S = n(699723);
let A = {
  offset: {
left: 4,
right: -12
  }
};

function R(e) {
  let {
setTab: t,
closePopout: n
  } = e, a = (0, r.e7)([E.Z], () => E.Z.getMessageBookmarks());
  return (0, i.jsxs)('div', {
className: g.container,
children: [
  (0, i.jsx)(f.Z, {
    tab: l.X.BOOKMARKS,
    setTab: t,
    closePopout: n
  }),
  0 === a.length ? (0, i.jsx)(O, {}) : (0, i.jsx)(o.AdvancedScrollerThin, {
    children: a.map(e => (0, i.jsx)(x, {
      savedMessage: e
    }, e.messageId))
  })
]
  });
}

function x(e) {
  let {
savedMessage: t
  } = e, n = (0, r.e7)([T.Z], () => T.Z.getMessage(t.channelId, t.messageId)), {
message: a,
channel: l
  } = (0, I.p)(t), E = () => {
(0, u.uL)(p.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.channelId, t.messageId));
  };
  return (0, i.jsxs)('div', {
className: S.container,
children: [
  (0, i.jsx)(h.Z, {
    channel: l,
    gotoChannel: E,
    children: (0, i.jsx)(o.CircleIconButton, {
      className: S.closeButton,
      tooltip: C.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
      color: o.CircleIconButtonColors.TERTIARY,
      icon: (0, i.jsx)(o.CloseSmallIcon, {
        size: 'xs',
        color: 'currentColor'
      }),
      onClick: () => (0, _.h)(t.messageId)
    })
  }),
  (0, i.jsxs)('div', {
    className: s()(S.messageContainer, g.unloadedMessage),
    children: [
      (0, i.jsx)(d.Z, {
        message: a,
        channel: l,
        className: S.message,
        compact: m.jU.getSetting(),
        animateAvatar: !1,
        focusProps: A,
        trackAnnouncementViews: !0
      }, a.id),
      (0, i.jsxs)('div', {
        className: g.actions,
        children: [
          null == n ? (0, i.jsx)(o.Button, {
            onClick: () => {
              c.Z.fetchMessages({
                channelId: t.channelId,
                limit: 1,
                jump: {
                  messageId: t.messageId,
                  flash: !1,
                  offset: 1
                }
              });
            },
            size: o.Button.Sizes.MIN,
            color: o.Button.Colors.TRANSPARENT,
            className: g.loadButton,
            children: (0, i.jsx)(o.Text, {
              variant: 'text-xs/normal',
              children: 'Load'
            })
          }) : null,
          (0, i.jsx)(o.Button, {
            onClick: E,
            size: o.Button.Sizes.MIN,
            color: o.Button.Colors.TRANSPARENT,
            className: g.loadButton,
            children: (0, i.jsx)(o.Text, {
              variant: 'text-xs/normal',
              children: C.Z.Messages.JUMP
            })
          })
        ]
      })
    ]
  })
]
  });
}

function O() {
  return (0, i.jsx)(N.Z, {
Icon: o.DoubleCheckmarkLargeIcon,
header: C.Z.Messages.MESSAGE_BOOKMARKS_EMPTY,
tip: C.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}