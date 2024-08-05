n.d(t, {
  P: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(91192),
  o = n(873011),
  c = n(442837),
  u = n(524437),
  d = n(481060),
  _ = n(724757),
  E = n(294218),
  I = n(373662),
  m = n(240126),
  T = n(703656),
  h = n(695346),
  N = n(675478),
  C = n(581883),
  f = n(592125),
  p = n(768943),
  g = n(43690),
  S = n(962796),
  A = n(767893),
  R = n(981631),
  O = n(689938),
  x = n(144754);
let M = {
offset: {
  left: 4,
  right: -12
}
  },
  v = e => {
N.hW.updateAsync('forLater', t => {
  if (t.currentTab === e)
    return !1;
  t.currentTab = e;
}, N.fy.FREQUENT_USER_ACTION);
  };

function L(e) {
  let {
closePopout: t
  } = e, n = (0, c.e7)([C.Z], () => {
var e, t;
return null !== (t = null === (e = C.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : u.Pr.ALL;
  }), a = (0, c.Wu)([
p.Z,
C.Z
  ], () => {
var e, t;
let n = p.Z.getMessageReminders(),
  i = p.Z.getMessageBookmarks(),
  s = null !== (t = null === (e = C.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : u.Pr.ALL;
return s === u.Pr.ALL ? [
  ...n,
  ...i
] : s === u.Pr.BOOKMARKS ? i : n;
  }), r = (0, c.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount());
  return s.useEffect(() => () => {
(0, S.Mf)();
  }, []), (0, i.jsx)(d.Dialog, {
'aria-label': O.Z.Messages.FOR_LATER,
children: (0, i.jsxs)('div', {
  className: x.popoutContainer,
  children: [
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsxs)('div', {
          className: x.headerTitle,
          children: [
            (0, i.jsx)(d.BookmarkIcon, {
              size: 'md',
              color: 'currentColor',
              className: x.headerTitleIcon
            }),
            (0, i.jsx)(d.Heading, {
              variant: 'heading-lg/semibold',
              children: O.Z.Messages.FOR_LATER
            })
          ]
        }),
        (0, i.jsx)('div', {
          children: (0, i.jsxs)(d.TabBar, {
            type: 'top',
            look: 'brand',
            selectedItem: n,
            onItemSelect: v,
            className: x.tabBar,
            children: [
              (0, i.jsx)(d.TabBar.Item, {
                id: u.Pr.ALL,
                className: x.tabBarItem,
                children: O.Z.Messages.FOR_LATER_TAB_ALL
              }),
              (0, i.jsx)(d.TabBar.Item, {
                id: u.Pr.BOOKMARKS,
                className: x.tabBarItem,
                children: O.Z.Messages.MESSAGE_BOOKMARKS_HEADER
              }),
              (0, i.jsx)(d.TabBar.Item, {
                id: u.Pr.REMINDERS,
                className: x.tabBarItem,
                children: O.Z.Messages.FOR_LATER_TAB_REMINDERS.format({
                  count: r
                })
              })
            ]
          })
        })
      ]
    }),
    (0, i.jsx)(P, {
      savedMessages: a,
      closePopout: t
    })
  ]
})
  });
}

function Z(e) {
  let {
onOpen: t,
onClose: n,
children: a,
popoutPosition: r,
popoutAlign: l
  } = e, [o, c] = s.useState(!1), u = s.useCallback(() => {
c(!1), o && (null == n || n());
  }, [
n,
o
  ]), _ = s.useCallback(() => {
c(!o), o ? null == n || n() : null == t || t();
  }, [
n,
t,
o
  ]);
  return (0, i.jsx)(d.Popout, {
animation: d.Popout.Animation.NONE,
position: r,
align: l,
autoInvert: !1,
shouldShow: o,
onRequestClose: u,
renderPopout: function() {
  return (0, i.jsx)(L, {
    closePopout: u
  });
},
ignoreModalClicks: !0,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return a(_, n, e);
}
  });
}

function P(e) {
  let {
savedMessages: t,
closePopout: n
  } = e, a = s.useRef(null), r = (0, _.Z)('for-later', a);
  return 0 === t.length ? (0, i.jsx)(j, {}) : (0, i.jsx)(l.bG, {
navigator: r,
children: (0, i.jsx)(l.SJ, {
  children: e => {
    let {
      ref: s,
      ...r
    } = e;
    return (0, i.jsx)(d.AdvancedScrollerThin, {
      ref: e => {
        var t;
        a.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
      },
      className: x.messagesScroller,
      ...r,
      children: t.map(e => (0, i.jsx)(D, {
        savedMessage: e,
        closePopout: n
      }, ''.concat(e.saveData.messageId, '-').concat(e.saveData.type)))
    });
  }
})
  });
}

function D(e) {
  let {
savedMessage: t,
closePopout: n
  } = e, a = (0, c.e7)([f.Z], () => f.Z.getChannel(t.saveData.channelId)), l = s.useCallback(e => {
!e.shiftKey && n(), (0, T.uL)(R.Z5c.CHANNEL(null == a ? void 0 : a.getGuildId(), t.saveData.channelId, t.saveData.messageId));
  }, [
n,
t,
a
  ]);
  return null == a || null == t.message ? (0, i.jsxs)('div', {
className: r()(x.messageContainer, x.deletedMessage),
children: [
  (0, i.jsx)('div', {
    className: x.deleteIcon,
    children: (0, i.jsx)(d.TrashIcon, {
      size: 'xs'
    })
  }),
  (0, i.jsx)(d.Text, {
    variant: 'text-md/normal',
    color: 'text-secondary',
    children: O.Z.Messages.FOR_LATER_MESSAGE_DELETED
  }),
  (0, i.jsx)(I.Z, {
    className: x.hoverBar,
    children: (0, i.jsx)(I.s, {
      label: t.saveData.type === o.J.REMINDER ? O.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : O.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
      icon: d.TrashIcon,
      dangerous: !0,
      onClick: () => t.saveData.type === o.J.REMINDER ? (0, S.bn)(t.saveData) : (0, g.h)(t.saveData)
    }, 'delete')
  })
]
  }) : (0, i.jsxs)('div', {
className: x.messageContainer,
children: [
  (0, i.jsx)(A.Z, {
    channel: a,
    jumpToMessage: l
  }),
  (0, i.jsx)(E.Z, {
    message: t.message,
    channel: a,
    className: r()(x.message, t.complete ? x.disabledMessage : null),
    compact: h.jU.getSetting(),
    animateAvatar: !1,
    focusProps: M,
    trackAnnouncementViews: !0
  }, t.message.id),
  (0, i.jsx)(I.Z, {
    className: x.hoverBar,
    children: (0, i.jsx)(b, {
      savedMessage: t,
      jumpToMessage: l
    })
  })
]
  });
}

function b(e) {
  let {
savedMessage: t,
jumpToMessage: n
  } = e;
  return t.saveData.type === o.J.REMINDER ? (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(I.s, {
    label: O.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
    onClick: () => (0, S.Y_)(t.saveData.messageId, !t.complete),
    children: (0, i.jsx)(d.Checkbox, {
      type: d.Checkbox.Types.INVERTED,
      value: t.complete,
      size: 20
    })
  }, 'mark-complete'),
  (0, i.jsx)(I.s, {
    label: O.Z.Messages.MESSAGE_REMINDERS_EDIT,
    icon: d.ClockIcon,
    onClick: () => null
  }, 'edit-reminder'),
  (0, i.jsx)(I.s, {
    label: O.Z.Messages.JUMP_TO_MESSAGE,
    icon: d.ArrowLargeRightIcon,
    onClick: e => n(e)
  }, 'jump-to-message')
]
  }) : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(I.s, {
    label: O.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
    icon: d.ClockIcon,
    onClick: () => null
  }, 'add-reminder'),
  (0, i.jsx)(I.s, {
    label: O.Z.Messages.JUMP_TO_MESSAGE,
    icon: d.ArrowLargeRightIcon,
    onClick: e => n(e)
  }, 'jump-to-message'),
  (0, i.jsx)(I.s, {
    label: O.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
    icon: d.TrashIcon,
    dangerous: !0,
    onClick: () => (0, g.h)(t.saveData)
  }, 'delete-bookmark')
]
  });
}

function j() {
  return (0, i.jsx)(m.Z, {
Icon: d.DoubleCheckmarkLargeIcon,
header: O.Z.Messages.FOR_LATER_EMPTY,
tip: O.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}