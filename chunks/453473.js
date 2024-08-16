n.d(t, {
    P: function () {
        return j;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(91192),
    u = n(442837),
    d = n(524437),
    _ = n(481060),
    E = n(239091),
    I = n(724757),
    m = n(294218),
    T = n(373662),
    h = n(240126),
    N = n(703656),
    f = n(695346),
    C = n(675478),
    p = n(581883),
    g = n(592125),
    S = n(585483),
    A = n(70956),
    R = n(324701),
    x = n(768943),
    O = n(767893),
    M = n(74551),
    v = n(981631),
    L = n(689938),
    Z = n(80706);
let P = {
        offset: {
            left: 4,
            right: -12
        }
    },
    b = (e) => {
        C.hW.updateAsync(
            'forLater',
            (t) => {
                if (t.currentTab === e) return !1;
                t.currentTab = e;
            },
            C.fy.FREQUENT_USER_ACTION
        );
    };
function D(e) {
    let { closePopout: t, throttledNow: n } = e,
        a = (0, u.e7)([p.Z], () => {
            var e, t;
            return null !== (t = null === (e = p.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : d.Pr.ALL;
        }),
        [s] = (0, u.Wu)([x.Z, p.Z], () => {
            var e, t;
            let n = null !== (t = null === (e = p.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : d.Pr.ALL;
            return [n === d.Pr.ALL ? x.Z.getSavedMessages() : n === d.Pr.BOOKMARKS ? x.Z.getMessageBookmarks() : x.Z.getMessageReminders(), x.Z.getVersion()];
        }),
        r = (0, u.e7)([x.Z], () => x.Z.getOverdueMessageReminderCount());
    return (0, i.jsx)(_.Dialog, {
        'aria-label': L.Z.Messages.FOR_LATER,
        children: (0, i.jsxs)('div', {
            className: Z.popoutContainer,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.headerTitle,
                            children: [
                                (0, i.jsx)(_.BookmarkIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: Z.headerTitleIcon
                                }),
                                (0, i.jsx)(_.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: L.Z.Messages.FOR_LATER
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsxs)(_.TabBar, {
                                type: 'top',
                                look: 'brand',
                                selectedItem: a,
                                onItemSelect: b,
                                className: Z.tabBar,
                                children: [
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.ALL,
                                        className: Z.tabBarItem,
                                        children: L.Z.Messages.FOR_LATER_TAB_ALL
                                    }),
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.BOOKMARKS,
                                        className: Z.tabBarItem,
                                        children: L.Z.Messages.FOR_LATER_TAB_SAVED
                                    }),
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.REMINDERS,
                                        className: Z.tabBarItem,
                                        children: 0 === r ? L.Z.Messages.FOR_LATER_TAB_REMINDERS : L.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: r })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(U, {
                    savedMessages: s,
                    closePopout: t,
                    throttledNow: n
                })
            ]
        })
    });
}
function j(e) {
    let { onOpen: t, onClose: n, children: s, popoutPosition: r, popoutAlign: l } = e,
        [o, c] = a.useState(!1),
        d = a.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        E = a.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    a.useEffect(() => (S.S.subscribe(v.CkL.TOGGLE_FOR_LATER, E), () => void S.S.unsubscribe(v.CkL.TOGGLE_FOR_LATER, E)), [E]);
    let [I, m] = a.useState(new Date());
    a.useEffect(() => {
        let e = setInterval(() => m(new Date()), A.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let T = (0, u.e7)([x.Z], () => x.Z.hasOverdueReminder(I), [I]);
    return (0, i.jsx)(_.Popout, {
        animation: _.Popout.Animation.NONE,
        position: r,
        align: l,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, i.jsx)(D, {
                closePopout: d,
                throttledNow: I
            });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return s(E, n, e, T);
        }
    });
}
function U(e) {
    let { savedMessages: t, closePopout: n, throttledNow: s } = e,
        r = a.useRef(null),
        l = (0, I.Z)('for-later', r);
    return 0 === t.length
        ? (0, i.jsx)(k, {})
        : (0, i.jsx)(c.bG, {
              navigator: l,
              children: (0, i.jsx)(c.SJ, {
                  children: (e) => {
                      let { ref: a, ...l } = e;
                      return (0, i.jsx)(_.AdvancedScrollerThin, {
                          ref: (e) => {
                              var t;
                              (r.current = e), (a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                          },
                          className: Z.messagesScroller,
                          ...l,
                          children: t.map((e) =>
                              (0, i.jsx)(
                                  y,
                                  {
                                      savedMessage: e,
                                      closePopout: n,
                                      throttledNow: s
                                  },
                                  ''.concat(e.saveData.messageId)
                              )
                          )
                      });
                  }
              })
          });
}
function y(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, u.e7)([g.Z], () => g.Z.getChannel(t.saveData.channelId)),
        o = a.useCallback(
            (e) => {
                !e.shiftKey && n(), (0, N.uL)(v.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.saveData.channelId, t.saveData.messageId));
            },
            [n, t, l]
        );
    return null == l || null == t.message
        ? (0, i.jsxs)('div', {
              className: r()(Z.messageContainer, Z.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: Z.deleteIcon,
                      children: (0, i.jsx)(_.CircleWarningIcon, {
                          size: 'xxs',
                          color: _.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(_.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: L.Z.Messages.FOR_LATER_MESSAGE_DELETED
                  }),
                  (0, i.jsx)(T.ZP, {
                      className: Z.hoverBar,
                      children: (0, i.jsx)(
                          T.sF,
                          {
                              label: L.Z.Messages.FOR_LATER_REMOVE,
                              icon: _.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, R.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: Z.messageContainer,
              children: [
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(M.Z, {
                            reminder: t,
                            throttledNow: s
                        })
                      : null,
                  (0, i.jsx)(O.Z, {
                      channel: l,
                      jumpToMessage: o
                  }),
                  (0, i.jsx)(
                      m.Z,
                      {
                          message: t.message,
                          channel: l,
                          className: Z.message,
                          compact: f.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: P,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(T.ZP, {
                      className: Z.hoverBar,
                      children: (0, i.jsx)(B, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          });
}
function B(e) {
    let { savedMessage: t, jumpToMessage: a } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: L.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: _.CheckmarkLargeIcon,
                          onClick: () => (0, R.x)(t.saveData)
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: L.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: _.PencilIcon,
                          onClick: (e) =>
                              (0, E.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: L.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(T.fO, {}),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: L.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                          icon: _.BookmarkOutlineIcon,
                          onClick: () =>
                              (0, R.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'create-bookmark'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: L.Z.Messages.JUMP_TO_MESSAGE,
                          icon: _.ArrowLargeRightIcon,
                          onClick: (e) => a(e)
                      },
                      'jump-to-message'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: L.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: _.ClockIcon,
                          onClick: (e) =>
                              (0, E.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: L.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: L.Z.Messages.MESSAGE_BOOKMARKS_REMOVE,
                          icon: _.BookmarkIcon,
                          onClick: () => (0, R.x)(t.saveData)
                      },
                      'remove-bookmark'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: L.Z.Messages.JUMP_TO_MESSAGE,
                          icon: _.ArrowLargeRightIcon,
                          onClick: (e) => a(e)
                      },
                      'jump-to-message'
                  )
              ]
          });
}
function k() {
    return (0, i.jsx)(h.Z, {
        Icon: _.DoubleCheckmarkIcon,
        header: L.Z.Messages.FOR_LATER_EMPTY,
        tip: L.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
    });
}
