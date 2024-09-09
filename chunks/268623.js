t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var a = t(735250),
    i = t(470079),
    l = t(442837),
    r = t(481060),
    s = t(324701),
    o = t(575016),
    u = t(768943),
    d = t(121254),
    c = t(742989),
    E = t(898150),
    M = t(70956),
    I = t(689938);
function m(e) {
    let { showReminders: n } = c.Z.useExperiment({ location: 'useForLaterItem' }, { autoTrackExposure: !1 }),
        { enabled: t } = d.Z.useExperiment({ location: 'useForLaterItem' }, { autoTrackExposure: !1 }),
        m = (0, l.e7)([u.Z], () => u.Z.getSavedMessage(e.channel_id, e.id)),
        g = (function (e) {
            let { message: n, savedMessage: t } = e,
                [l, u] = i.useState(new Date());
            i.useEffect(() => {
                let e = setInterval(() => u(new Date()), M.Z.Millis.MINUTE);
                return () => {
                    clearInterval(e);
                };
            }, []);
            let d = i.useCallback(
                    (e) =>
                        (0, s.z)({
                            channelId: n.channel_id,
                            messageId: n.id,
                            dueAt: e,
                            displayToast: !0
                        }),
                    [n.channel_id, n.id]
                ),
                c = (0, E.useMessageReminderDurationSuggestions)({ createReminder: d }),
                { dueInText: m } = (0, o.A)({
                    dueAt: null == t ? void 0 : t.saveData.dueAt,
                    now: l,
                    type: o.h.LONG
                });
            return (null == t ? void 0 : t.saveData.dueAt) == null
                ? (0, a.jsx)(r.MenuGroup, {
                      label: I.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                      children: c
                  })
                : (0, a.jsxs)(r.MenuGroup, {
                      label: m,
                      children: [
                          (0, a.jsx)(r.MenuItem, {
                              id: 'mark-complete',
                              label: I.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                              icon: r.CheckmarkSmallIcon,
                              action: () =>
                                  (0, s.z)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      dueAt: void 0
                                  })
                          }),
                          (0, a.jsx)(r.MenuItem, {
                              id: 'edit-reminder',
                              label: I.Z.Messages.MESSAGE_REMINDERS_EDIT,
                              children: c
                          })
                      ]
                  });
        })({
            message: e,
            savedMessage: m
        });
    return n || t
        ? (0, a.jsxs)(r.MenuItem, {
              id: 'save-for-later',
              label: I.Z.Messages.FOR_LATER_SAVE,
              action: () =>
                  (0, s.z)({
                      channelId: e.channel_id,
                      messageId: e.id,
                      displayToast: !0
                  }),
              children: [
                  null != m
                      ? (0, a.jsx)(r.MenuItem, {
                            id: 'remove-from-for-later',
                            label: I.Z.Messages.FOR_LATER_REMOVE,
                            action: () =>
                                (0, s.x)({
                                    channelId: e.channel_id,
                                    messageId: e.id,
                                    dueAt: m.saveData.dueAt,
                                    displayToast: !0
                                }),
                            color: 'danger'
                        })
                      : (0, a.jsx)(r.MenuItem, {
                            id: 'create-bookmark',
                            label: I.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                            icon: r.BookmarkOutlineIcon,
                            action: () =>
                                (0, s.z)({
                                    channelId: e.channel_id,
                                    messageId: e.id,
                                    displayToast: !0
                                })
                        }),
                  (0, a.jsx)(r.MenuSeparator, {}),
                  g
              ]
          })
        : null;
}
