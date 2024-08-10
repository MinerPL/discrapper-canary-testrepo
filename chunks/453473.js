n.d(t, {
  P: function() {
return U;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(91192),
  u = n(873011),
  d = n(442837),
  _ = n(524437),
  E = n(481060),
  I = n(239091),
  m = n(724757),
  T = n(294218),
  h = n(373662),
  N = n(240126),
  f = n(703656),
  C = n(695346),
  p = n(675478),
  g = n(581883),
  S = n(592125),
  A = n(70956),
  R = n(768943),
  x = n(43690),
  O = n(962796),
  M = n(767893),
  v = n(74551),
  L = n(981631),
  Z = n(689938),
  P = n(144754);
let b = {
offset: {
  left: 4,
  right: -12
}
  },
  D = e => {
p.hW.updateAsync('forLater', t => {
  if (t.currentTab === e)
    return !1;
  t.currentTab = e;
}, p.fy.FREQUENT_USER_ACTION);
  };

function j(e) {
  let {
closePopout: t
  } = e, n = (0, d.e7)([g.Z], () => {
var e, t;
return null !== (t = null === (e = g.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : _.Pr.ALL;
  }), s = (0, d.Wu)([
R.Z,
g.Z
  ], () => {
var e, t;
let n = R.Z.getMessageReminders(),
  i = R.Z.getMessageBookmarks(),
  a = null !== (t = null === (e = g.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : _.Pr.ALL;
return a === _.Pr.ALL ? [
  ...n,
  ...i
] : a === _.Pr.BOOKMARKS ? i : n;
  }), r = (0, d.e7)([R.Z], () => R.Z.getOverdueMessageReminderCount()), [l, o] = a.useState(new Date());
  return a.useEffect(() => {
let e = setInterval(() => o(new Date()), A.Z.Millis.MINUTE);
return () => {
  (0, O.Mf)(), clearInterval(e);
};
  }, []), (0, i.jsx)(E.Dialog, {
'aria-label': Z.Z.Messages.FOR_LATER,
children: (0, i.jsxs)('div', {
  className: P.popoutContainer,
  children: [
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsxs)('div', {
          className: P.headerTitle,
          children: [
            (0, i.jsx)(E.BookmarkIcon, {
              size: 'md',
              color: 'currentColor',
              className: P.headerTitleIcon
            }),
            (0, i.jsx)(E.Heading, {
              variant: 'heading-lg/semibold',
              children: Z.Z.Messages.FOR_LATER
            })
          ]
        }),
        (0, i.jsx)('div', {
          children: (0, i.jsxs)(E.TabBar, {
            type: 'top',
            look: 'brand',
            selectedItem: n,
            onItemSelect: D,
            className: P.tabBar,
            children: [
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.ALL,
                className: P.tabBarItem,
                children: Z.Z.Messages.FOR_LATER_TAB_ALL
              }),
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.BOOKMARKS,
                className: P.tabBarItem,
                children: Z.Z.Messages.FOR_LATER_TAB_SAVED
              }),
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.REMINDERS,
                className: P.tabBarItem,
                children: 0 === r ? Z.Z.Messages.FOR_LATER_TAB_REMINDERS : Z.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({
                  count: r
                })
              })
            ]
          })
        })
      ]
    }),
    (0, i.jsx)(y, {
      savedMessages: s,
      closePopout: t,
      throttledNow: l
    })
  ]
})
  });
}

function U(e) {
  let {
onOpen: t,
onClose: n,
children: s,
popoutPosition: r,
popoutAlign: l
  } = e, [o, c] = a.useState(!1), u = a.useCallback(() => {
c(!1), o && (null == n || n());
  }, [
n,
o
  ]), d = a.useCallback(() => {
c(!o), o ? null == n || n() : null == t || t();
  }, [
n,
t,
o
  ]);
  return (0, i.jsx)(E.Popout, {
animation: E.Popout.Animation.NONE,
position: r,
align: l,
autoInvert: !1,
shouldShow: o,
onRequestClose: u,
renderPopout: function() {
  return (0, i.jsx)(j, {
    closePopout: u
  });
},
ignoreModalClicks: !0,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return s(d, n, e);
}
  });
}

function y(e) {
  let {
savedMessages: t,
closePopout: n,
throttledNow: s
  } = e, r = a.useRef(null), l = (0, m.Z)('for-later', r);
  return 0 === t.length ? (0, i.jsx)(G, {}) : (0, i.jsx)(c.bG, {
navigator: l,
children: (0, i.jsx)(c.SJ, {
  children: e => {
    let {
      ref: a,
      ...l
    } = e;
    return (0, i.jsx)(E.AdvancedScrollerThin, {
      ref: e => {
        var t;
        r.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
      },
      className: P.messagesScroller,
      ...l,
      children: t.map(e => (0, i.jsx)(B, {
        savedMessage: e,
        closePopout: n,
        throttledNow: s
      }, ''.concat(e.saveData.messageId, '-').concat(e.saveData.type)))
    });
  }
})
  });
}

function B(e) {
  let {
savedMessage: t,
closePopout: n,
throttledNow: s
  } = e, l = (0, d.e7)([S.Z], () => S.Z.getChannel(t.saveData.channelId)), o = a.useCallback(e => {
!e.shiftKey && n(), (0, f.uL)(L.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.saveData.channelId, t.saveData.messageId));
  }, [
n,
t,
l
  ]);
  return null == l || null == t.message ? (0, i.jsxs)('div', {
className: r()(P.messageContainer, P.deletedMessage),
children: [
  (0, i.jsx)('div', {
    className: P.deleteIcon,
    children: (0, i.jsx)(E.CircleWarningIcon, {
      size: 'xxs',
      color: E.tokens.colors.INTERACTIVE_ACTIVE
    })
  }),
  (0, i.jsx)(E.Heading, {
    variant: 'text-md/semibold',
    color: 'header-secondary',
    children: Z.Z.Messages.FOR_LATER_MESSAGE_DELETED
  }),
  (0, i.jsx)(h.ZP, {
    className: P.hoverBar,
    children: (0, i.jsx)(h.sF, {
      label: Z.Z.Messages.FOR_LATER_REMOVE,
      icon: E.TrashIcon,
      dangerous: !0,
      onClick: () => t.saveData.type === u.J.REMINDER ? (0, O.bn)(t.saveData) : (0, x.h)(t.saveData)
    }, 'delete')
  })
]
  }) : (0, i.jsxs)('div', {
className: P.messageContainer,
children: [
  t.saveData.type === u.J.REMINDER ? (0, i.jsx)(v.Z, {
    reminder: t,
    throttledNow: s
  }) : null,
  (0, i.jsx)(M.Z, {
    channel: l,
    jumpToMessage: o
  }),
  (0, i.jsx)(T.Z, {
    message: t.message,
    channel: l,
    className: r()(P.message, t.complete ? P.disabledMessage : null),
    compact: C.jU.getSetting(),
    animateAvatar: !1,
    focusProps: b,
    trackAnnouncementViews: !0
  }, t.message.id),
  (0, i.jsx)(h.ZP, {
    className: P.hoverBar,
    children: (0, i.jsx)(k, {
      savedMessage: t,
      jumpToMessage: o,
      throttledNow: s
    })
  })
]
  });
}

function k(e) {
  let {
savedMessage: t,
jumpToMessage: a,
throttledNow: s
  } = e;
  if (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), t.saveData.type === u.J.REMINDER && null != t.saveData.dueAt) {
let e = t.saveData.dueAt < s;
return (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(h.sF, {
      label: Z.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
      icon: E.CheckmarkLargeIcon,
      onClick: () => (0, O.Y_)(t.saveData.messageId, !t.complete)
    }, 'mark-complete'),
    e ? (0, i.jsx)(h.sF, {
      label: Z.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
      icon: E.ClockIcon,
      onClick: e => (0, I.jW)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await n.e('69818').then(n.bind(n, 898150));
        return n => (0, i.jsx)(e, {
          ...n,
          label: Z.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
          message: t.message,
          isSnooze: !0
        });
      })
    }, 'snooze-reminder') : (0, i.jsx)(h.sF, {
      label: Z.Z.Messages.MESSAGE_REMINDERS_EDIT,
      icon: E.PencilIcon,
      onClick: e => (0, I.jW)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await n.e('69818').then(n.bind(n, 898150));
        return n => (0, i.jsx)(e, {
          ...n,
          label: Z.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
          message: t.message
        });
      })
    }, 'edit-reminder'),
    (0, i.jsx)(h.fO, {}),
    (0, i.jsx)(h.sF, {
      label: Z.Z.Messages.JUMP_TO_MESSAGE,
      icon: E.ArrowLargeRightIcon,
      onClick: e => a(e)
    }, 'jump-to-message'),
    (0, i.jsx)(h.sF, {
      label: Z.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
      icon: E.TrashIcon,
      dangerous: !0,
      onClick: () => (0, O.bn)(t.saveData)
    }, 'remove-reminder')
  ]
});
  }
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(h.sF, {
    label: Z.Z.Messages.MESSAGE_REMINDERS_CREATE,
    icon: E.ClockIcon,
    onClick: e => (0, I.jW)(e, async () => {
      let {
        MessageReminderEditMenu: e
      } = await n.e('69818').then(n.bind(n, 898150));
      return n => (0, i.jsx)(e, {
        ...n,
        label: Z.Z.Messages.MESSAGE_REMINDERS_CREATE,
        message: t.message
      });
    })
  }, 'create-reminder'),
  (0, i.jsx)(h.sF, {
    label: Z.Z.Messages.JUMP_TO_MESSAGE,
    icon: E.ArrowLargeRightIcon,
    onClick: e => a(e)
  }, 'jump-to-message'),
  (0, i.jsx)(h.sF, {
    label: Z.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
    icon: E.TrashIcon,
    dangerous: !0,
    onClick: () => (0, x.h)(t.saveData)
  }, 'remove-bookmark')
]
  });
}

function G() {
  return (0, i.jsx)(N.Z, {
Icon: E.DoubleCheckmarkIcon,
header: Z.Z.Messages.FOR_LATER_EMPTY,
tip: Z.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}