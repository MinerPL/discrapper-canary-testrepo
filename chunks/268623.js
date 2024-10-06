t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    s = t(442837),
    l = t(481060),
    r = t(436774),
    o = t(2818),
    u = t(324701),
    d = t(575016),
    c = t(768943),
    E = t(175006),
    M = t(742989),
    g = t(898150),
    m = t(70956),
    f = t(689938);
function I(e) {
    let { enabled: n } = o.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        { showReminders: t } = M.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        I = (0, s.e7)([c.Z], () => c.Z.getSavedMessage(e.channel_id, e.id)),
        _ = (function (e) {
            let { message: n, savedMessage: t } = e,
                [s, r] = a.useState(new Date());
            a.useEffect(() => {
                let e = setInterval(() => r(new Date()), m.Z.Millis.MINUTE);
                return () => {
                    clearInterval(e);
                };
            }, []);
            let o = a.useCallback(
                    (e) =>
                        (0, u.z)({
                            channelId: n.channel_id,
                            messageId: n.id,
                            dueAt: e,
                            displayToast: !0
                        }),
                    [n.channel_id, n.id]
                ),
                c = (0, g.useMessageReminderDurationSuggestions)({ createReminder: o }),
                { dueInText: E } = (0, d.AT)({
                    dueAt: null == t ? void 0 : t.saveData.dueAt,
                    now: s,
                    type: d.hQ.LONG
                });
            return (null == t ? void 0 : t.saveData.dueAt) == null
                ? (0, i.jsx)(l.MenuGroup, {
                      label: f.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                      children: c
                  })
                : (0, i.jsxs)(l.MenuGroup, {
                      label: E,
                      children: [
                          (0, i.jsx)(l.MenuItem, {
                              id: 'mark-complete',
                              label: f.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                              icon: l.CheckmarkSmallIcon,
                              action: () =>
                                  (0, u.z)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      dueAt: void 0
                                  })
                          }),
                          (0, i.jsx)(l.MenuItem, {
                              id: 'edit-reminder',
                              label: f.Z.Messages.MESSAGE_REMINDERS_EDIT,
                              children: c
                          })
                      ]
                  });
        })({
            message: e,
            savedMessage: I
        });
    return n || t
        ? null != I || (0, E.Z)()
            ? (0, i.jsxs)(l.MenuItem, {
                  id: 'save-for-later',
                  label: f.Z.Messages.FOR_LATER_SAVE,
                  action: () =>
                      null == I
                          ? (0, u.z)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0
                            })
                          : (0, u.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: I.saveData.dueAt,
                                displayToast: !0
                            }),
                  children: [
                      null != I
                          ? (0, i.jsx)(l.MenuItem, {
                                id: 'remove-from-for-later',
                                label: f.Z.Messages.FOR_LATER_REMOVE,
                                icon: l.BookmarkIcon,
                                action: () =>
                                    (0, u.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: I.saveData.dueAt,
                                        displayToast: !0
                                    })
                            })
                          : (0, i.jsx)(l.MenuItem, {
                                id: 'create-bookmark',
                                label: f.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                                icon: l.BookmarkOutlineIcon,
                                action: () =>
                                    (0, u.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0
                                    })
                            }),
                      (0, i.jsx)(l.MenuSeparator, {}),
                      _
                  ]
              })
            : (0, i.jsx)(l.MenuItem, {
                  id: 'save-for-later-upsell',
                  label: f.Z.Messages.FOR_LATER_SAVE,
                  icon: l.NitroWheelIcon,
                  iconProps: { color: r.JX.PREMIUM_TIER_2 },
                  action: () =>
                      (0, u.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0
                      })
              })
        : null;
}
