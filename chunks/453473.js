n.d(t, {
    P: function () {
        return w;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    _ = n(91192),
    E = n(442837),
    I = n(524437),
    m = n(481060),
    T = n(239091),
    h = n(724757),
    N = n(213609),
    C = n(294218),
    f = n(373662),
    p = n(703656),
    g = n(695346),
    S = n(675478),
    A = n(581883),
    R = n(592125),
    O = n(626135),
    x = n(585483),
    M = n(70956),
    v = n(324701),
    L = n(768943),
    Z = n(686478),
    P = n(175006),
    D = n(767893),
    b = n(206697),
    j = n(74551),
    U = n(981631),
    y = n(689938),
    B = n(80706);
let k = {
        offset: {
            left: 4,
            right: -12
        }
    },
    G = (e) => {
        S.hW.updateAsync(
            'forLater',
            (t) => {
                if (t.currentTab === e) return !1;
                t.currentTab = e;
            },
            S.fy.FREQUENT_USER_ACTION
        );
    };
function F(e) {
    let { closePopout: t, throttledNow: n } = e,
        s = (0, E.e7)([A.Z], () => {
            var e, t;
            return null !== (t = null === (e = A.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : I.Pr.ALL;
        }),
        a = (0, E.e7)([L.Z, A.Z], () => {
            var e, t;
            let n = null !== (t = null === (e = A.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : I.Pr.ALL;
            return n === I.Pr.ALL ? L.Z.getSavedMessages() : n === I.Pr.BOOKMARKS ? L.Z.getMessageBookmarks() : L.Z.getMessageReminders();
        }),
        r = (0, E.e7)([L.Z], () => L.Z.getOverdueMessageReminderCount());
    return (
        (0, N.Z)(
            {
                type: d.ImpressionTypes.POPOUT,
                name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
                properties: {
                    tab: s,
                    total_count: a.length,
                    overdue_count: r
                }
            },
            {},
            [s]
        ),
        (0, i.jsx)(m.Dialog, {
            'aria-label': y.Z.Messages.FOR_LATER,
            children: (0, i.jsxs)('div', {
                className: B.popoutContainer,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)('div', {
                                className: B.headerTitle,
                                children: [
                                    (0, i.jsx)(m.BookmarkIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: B.headerTitleIcon
                                    }),
                                    (0, i.jsx)(m.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: y.Z.Messages.FOR_LATER
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsxs)(m.TabBar, {
                                    type: 'top',
                                    look: 'brand',
                                    selectedItem: s,
                                    onItemSelect: G,
                                    className: B.tabBar,
                                    children: [
                                        (0, i.jsx)(m.TabBar.Item, {
                                            id: I.Pr.ALL,
                                            className: B.tabBarItem,
                                            children: y.Z.Messages.FOR_LATER_TAB_ALL
                                        }),
                                        (0, i.jsx)(m.TabBar.Item, {
                                            id: I.Pr.BOOKMARKS,
                                            className: B.tabBarItem,
                                            children: y.Z.Messages.FOR_LATER_TAB_SAVED
                                        }),
                                        (0, i.jsx)(m.TabBar.Item, {
                                            id: I.Pr.REMINDERS,
                                            className: B.tabBarItem,
                                            children: 0 === r ? y.Z.Messages.FOR_LATER_TAB_REMINDERS : y.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: r })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    0 !== a.length && (0, P.Z)()
                        ? (0, i.jsx)(V, {
                              savedMessages: a,
                              closePopout: t,
                              throttledNow: n
                          })
                        : (0, i.jsx)(b.w, { tab: s })
                ]
            })
        })
    );
}
function w(e) {
    let { onOpen: t, onClose: n, children: a, popoutPosition: r, popoutAlign: l } = e,
        [o, c] = s.useState(!1),
        u = s.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        d = s.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    s.useEffect(() => (x.S.subscribe(U.CkL.TOGGLE_FOR_LATER, d), () => void x.S.unsubscribe(U.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let [_, I] = s.useState(new Date());
    s.useEffect(() => {
        let e = setInterval(() => I(new Date()), M.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let T = (0, E.e7)([L.Z], () => L.Z.hasOverdueReminder(_), [_]);
    return (0, i.jsx)(m.Popout, {
        animation: m.Popout.Animation.NONE,
        position: r,
        align: l,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: u,
        renderPopout: function () {
            return (0, i.jsx)(F, {
                closePopout: u,
                throttledNow: _
            });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return a(d, n, e, T);
        }
    });
}
function V(e) {
    let { savedMessages: t, closePopout: n, throttledNow: a } = e,
        r = s.useRef(null),
        l = (0, h.Z)('for-later', r);
    return (0, i.jsx)(_.bG, {
        navigator: l,
        children: (0, i.jsx)(_.SJ, {
            children: (e) => {
                let { ref: s, ...l } = e;
                return (0, i.jsx)(m.AdvancedScrollerThin, {
                    ref: (e) => {
                        var t;
                        (r.current = e), (s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                    },
                    className: B.messagesScroller,
                    ...l,
                    children: t.map((e) =>
                        (0, i.jsx)(
                            H,
                            {
                                savedMessage: e,
                                closePopout: n,
                                throttledNow: a
                            },
                            ''.concat(e.saveData.messageId)
                        )
                    )
                });
            }
        })
    });
}
function H(e) {
    let { savedMessage: t, closePopout: n, throttledNow: a } = e,
        l = (0, E.e7)([R.Z], () => R.Z.getChannel(t.saveData.channelId)),
        o = s.useCallback(
            (e) => {
                var i;
                !e.shiftKey && n(),
                    (0, p.uL)(U.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.saveData.channelId, t.saveData.messageId)),
                    O.default.track(U.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (i = t.message) || void 0 === i ? void 0 : i.author.id,
                        type: null != t.saveData.dueAt ? Z._l.REMINDER : Z._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, l]
        );
    return null == l || null == t.message
        ? (0, i.jsxs)('div', {
              className: r()(B.messageContainer, B.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: B.deleteIcon,
                      children: (0, i.jsx)(m.CircleWarningIcon, {
                          size: 'xxs',
                          color: m.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(m.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? y.Z.Messages.FOR_LATER_REMINDER_DELETED : y.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(f.ZP, {
                      className: B.hoverBar,
                      children: (0, i.jsx)(
                          f.sF,
                          {
                              label: y.Z.Messages.FOR_LATER_REMOVE,
                              icon: m.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, v.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: B.messageContainer,
              children: [
                  (0, i.jsx)(m.Clickable, {
                      className: B.clickableMessageBackground,
                      onClick: o,
                      'aria-label': y.Z.Messages.JUMP_TO_MESSAGE
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(j.Z, {
                            reminder: t,
                            throttledNow: a
                        })
                      : null,
                  (0, i.jsx)(D.Z, { channel: l }),
                  (0, i.jsx)(
                      C.Z,
                      {
                          message: t.message,
                          channel: l,
                          className: B.message,
                          compact: g.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: k,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(f.ZP, {
                      className: B.hoverBar,
                      children: (0, i.jsx)(Y, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          });
}
function Y(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      f.sF,
                      {
                          label: y.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: m.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, v.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      f.sF,
                      {
                          label: y.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: m.PencilIcon,
                          onClick: (e) =>
                              (0, T.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: y.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(f.fO, {}),
                  (0, i.jsx)(
                      f.sF,
                      {
                          label: y.Z.Messages.JUMP_TO_MESSAGE,
                          icon: m.ArrowLargeRightIcon,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      f.sF,
                      {
                          label: y.Z.Messages.FOR_LATER_REMOVE,
                          icon: m.BookmarkOutlineIcon,
                          onClick: () => (0, v.x)(t.saveData),
                          dangerous: !0
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      f.sF,
                      {
                          label: y.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: m.ClockIcon,
                          onClick: (e) =>
                              (0, T.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: y.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      f.sF,
                      {
                          label: y.Z.Messages.JUMP_TO_MESSAGE,
                          icon: m.ArrowLargeRightIcon,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      f.sF,
                      {
                          label: y.Z.Messages.FOR_LATER_REMOVE,
                          icon: m.BookmarkOutlineIcon,
                          onClick: () => (0, v.x)(t.saveData),
                          dangerous: !0
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
