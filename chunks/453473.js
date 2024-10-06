n.d(t, {
    K: function () {
        return k;
    },
    P: function () {
        return G;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(512722),
    o = n.n(r),
    c = n(913527),
    d = n.n(c),
    u = n(990547),
    _ = n(91192),
    E = n(442837),
    I = n(481060),
    m = n(239091),
    T = n(494404),
    N = n(724757),
    h = n(213609),
    C = n(294218),
    p = n(373662),
    f = n(695346),
    g = n(496675),
    A = n(626135),
    S = n(585483),
    M = n(70956),
    x = n(324701),
    O = n(575016),
    R = n(768943),
    v = n(686478),
    L = n(664559),
    Z = n(767893),
    P = n(206697),
    D = n(74551),
    b = n(981631),
    j = n(689938),
    U = n(982138);
let y = {
    offset: {
        left: 4,
        right: -12
    }
};
function B(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(I.Dialog, {
        'aria-label': j.Z.Messages.FOR_LATER,
        children: (0, i.jsxs)('div', {
            className: U.popoutContainer,
            children: [
                (0, i.jsx)(T.h4, {
                    icon: I.BookmarkIcon,
                    title: j.Z.Messages.FOR_LATER
                }),
                (0, i.jsx)(k, { closePopout: t })
            ]
        })
    });
}
function k(e) {
    let { closePopout: t } = e,
        n = (0, L.Z)();
    return ((0, h.Z)(
        {
            type: u.ImpressionTypes.POPOUT,
            name: u.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: R.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [n.length]
    ),
    0 === n.length)
        ? (0, i.jsx)(P.w, {})
        : (0, i.jsx)(F, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function G(e) {
    let { onOpen: t, onClose: n, children: s, popoutPosition: l, popoutAlign: r } = e,
        [o, c] = a.useState(!1),
        d = a.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        u = a.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    a.useEffect(() => (S.S.subscribe(b.CkL.TOGGLE_FOR_LATER, u), () => void S.S.unsubscribe(b.CkL.TOGGLE_FOR_LATER, u)), [u]);
    let _ = (0, E.e7)([R.Z], () => R.Z.hasOverdueReminder(), []);
    return (0, i.jsx)(I.Popout, {
        animation: I.Popout.Animation.NONE,
        position: l,
        align: r,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, i.jsx)(B, { closePopout: d });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return s(u, n, e, _);
        }
    });
}
function F(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        s = a.useRef(null),
        l = (0, N.Z)('for-later', s),
        [r, o] = a.useState(new Date());
    return (
        a.useEffect(() => {
            let e = setInterval(() => o(new Date()), M.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, i.jsx)(_.bG, {
            navigator: l,
            children: (0, i.jsx)(_.SJ, {
                children: (e) => {
                    let { ref: a, ...l } = e;
                    return (0, i.jsx)(I.AdvancedScrollerThin, {
                        ref: (e) => {
                            var t;
                            (s.current = e), (a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                        },
                        className: U.messagesScroller,
                        ...l,
                        children: t.map((e) =>
                            (0, i.jsx)(
                                V,
                                {
                                    savedMessageKey: e,
                                    closePopout: n,
                                    throttledNow: r
                                },
                                e.messageId
                            )
                        )
                    });
                }
            })
        })
    );
}
function w(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        r = (0, O.gr)(t),
        o = a.useCallback(
            async (e) => {
                var i;
                await (0, O.fC)(t, r),
                    !e.shiftKey && n(),
                    A.default.track(b.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (i = t.message) || void 0 === i ? void 0 : i.author.id,
                        type: null != t.saveData.dueAt ? v._l.REMINDER : v._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? d()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, r]
        ),
        c = (0, E.e7)([g.Z], () => !!((null == r ? void 0 : r.type) === b.d4z.UNKNOWN || (null == r ? void 0 : r.isPrivate())) || g.Z.can(b.Plq.VIEW_CHANNEL, r));
    return null != r && null != t.message && c
        ? (0, i.jsxs)('div', {
              className: U.messageContainer,
              children: [
                  (0, i.jsx)(I.Clickable, {
                      className: U.clickableMessageBackground,
                      onClick: o,
                      'aria-label': j.Z.Messages.JUMP_TO_MESSAGE
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(D.Z, {
                            reminder: t,
                            throttledNow: s
                        })
                      : null,
                  (0, i.jsx)(Z.Z, { channel: r }),
                  (0, i.jsx)(
                      C.Z,
                      {
                          message: t.message,
                          channel: r,
                          className: U.message,
                          compact: f.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: y,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(p.ZP, {
                      className: U.hoverBar,
                      children: (0, i.jsx)(H, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: l()(U.messageContainer, U.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: U.deleteIcon,
                      children: (0, i.jsx)(I.CircleWarningIcon, {
                          size: 'xxs',
                          color: I.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(I.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? j.Z.Messages.FOR_LATER_REMINDER_DELETED : j.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(p.ZP, {
                      className: U.hoverBar,
                      children: (0, i.jsx)(
                          p.sF,
                          {
                              label: j.Z.Messages.FOR_LATER_REMOVE,
                              icon: I.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, x.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function V(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: a } = e,
        s = (0, E.e7)([R.Z], () => R.Z.getSavedMessage(t.channelId, t.messageId));
    return null == s
        ? null
        : (0, i.jsx)(w, {
              savedMessage: s,
              closePopout: n,
              throttledNow: a
          });
}
function H(e) {
    let { savedMessage: t, jumpToMessage: a } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: I.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, x.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: I.PencilIcon,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: j.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(p.fO, {}),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.JUMP_TO_MESSAGE,
                          icon: I.ArrowLargeRightIcon,
                          onClick: (e) => a(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.FOR_LATER_REMOVE,
                          icon: I.BookmarkIcon,
                          onClick: () => (0, x.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: I.ClockIcon,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: j.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.JUMP_TO_MESSAGE,
                          icon: I.ArrowLargeRightIcon,
                          onClick: (e) => a(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.FOR_LATER_REMOVE,
                          icon: I.BookmarkIcon,
                          onClick: () => (0, x.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
