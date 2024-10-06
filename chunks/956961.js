n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(913527),
    o = n.n(r),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    _ = n(239091),
    E = n(294218),
    I = n(703656),
    m = n(324701),
    T = n(768943),
    N = n(695346),
    h = n(592125),
    C = n(655354),
    p = n(324081),
    f = n(791914),
    g = n(981631),
    A = n(689938),
    S = n(816396),
    M = n(42967);
let x = {
    offset: {
        left: 4,
        right: -12
    }
};
function O(e) {
    let { setTab: t, closePopout: n } = e,
        s = (0, c.e7)([T.Z], () => T.Z.getMessageReminders()),
        [l, r] = a.useState(!1),
        o = a.useMemo(() => s.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [s]),
        _ = l ? s : o;
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(f.Z, {
                tab: d.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, i.jsxs)('div', {
                className: S.headerText,
                children: [
                    (0, i.jsx)(u.Heading, {
                        variant: 'heading-lg/bold',
                        children: l ? A.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : A.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                    }),
                    (0, i.jsx)(u.Anchor, {
                        onClick: () => r(!l),
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: l ? A.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({ count: o.length }) : A.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({ count: s.length })
                        })
                    })
                ]
            }),
            0 === _.length ? (0, i.jsx)(v, {}) : (0, i.jsx)(u.AdvancedScrollerThin, { children: _.map((e) => (0, i.jsx)(R, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function R(e) {
    let t,
        { messageReminder: a } = e,
        s = a.saveData,
        r = a.message,
        d = (0, c.e7)([h.Z], () => h.Z.getChannel(s.channelId)),
        T = () => {
            (0, I.uL)(g.Z5c.CHANNEL(null == d ? void 0 : d.getGuildId(), s.channelId, s.messageId));
        },
        f = null;
    return (null != s.dueAt &&
        (s.dueAt > new Date()
            ? ((t = 'text-muted'),
              (f = A.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                  duration: o()
                      .duration(s.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (f = A.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                  duration: o()
                      .duration(Date.now() - s.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == r || null == d)
        ? null
        : (0, i.jsxs)('div', {
              className: M.container,
              children: [
                  (0, i.jsx)(p.Z, {
                      channel: d,
                      gotoChannel: T,
                      children: (0, i.jsxs)('div', {
                          className: S.reminderActions,
                          children: [
                              null != a.saveData.notes && a.saveData.notes.length > 0
                                  ? (0, i.jsxs)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: S.notes,
                                        selectable: !0,
                                        children: [
                                            (0, i.jsx)(u.FileIcon, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            a.saveData.notes
                                        ]
                                    })
                                  : null,
                              null != f
                                  ? (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: f
                                    })
                                  : null,
                              (0, i.jsx)(u.TooltipContainer, {
                                  text: A.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
                                  children: (0, i.jsx)(u.Clickable, {
                                      onClick: (e) =>
                                          (0, _.jW)(e, async () => {
                                              let { default: e } = await n.e('6045').then(n.bind(n, 883150));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      message: r
                                                  });
                                          }),
                                      className: S.clock,
                                      children: (0, i.jsx)(u.ClockIcon, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, i.jsx)(u.TooltipContainer, {
                                  text: A.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
                                  children: (0, i.jsx)(u.Clickable, {
                                      onClick: () => (0, m.x)(s),
                                      className: S.delete,
                                      children: (0, i.jsx)(u.TrashIcon, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsxs)('div', {
                      className: l()(M.messageContainer, S.unloadedMessage),
                      children: [
                          (0, i.jsx)(C.Z, {
                              className: M.jumpMessageButton,
                              onJump: T
                          }),
                          (0, i.jsx)(
                              E.Z,
                              {
                                  message: r,
                                  channel: d,
                                  className: M.message,
                                  compact: N.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: x,
                                  trackAnnouncementViews: !0
                              },
                              r.id
                          )
                      ]
                  })
              ]
          });
}
function v() {
    return null;
}
