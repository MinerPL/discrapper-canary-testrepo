t.d(n, {
    EQ: function () {
        return b;
    },
    T5: function () {
        return L;
    },
    ZP: function () {
        return E;
    }
}),
    t(47120),
    t(789020);
var i = t(735250),
    a = t(470079),
    c = t(442837),
    o = t(481060),
    s = t(92114),
    r = t(221259),
    d = t(113449),
    _ = t(686660),
    l = t(9156),
    u = t(621600),
    g = t(981631),
    S = t(490897),
    h = t(526761),
    N = t(689938);
function E(e) {
    let n = b(e);
    return e.type === g.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'channel_notification_settings',
              label: N.Z.Messages.NOTIFICATIONS,
              children: n
          });
}
function b(e) {
    let n = (0, r.ZA)(e),
        t = (0, r.yN)(e),
        d = n.preset === _.s8.CUSTOM && !t.inherited,
        [u, S] = a.useState(d),
        [h, E] = a.useState(!1),
        b = h ? _.s8.CUSTOM : n.preset,
        M = L(e, () => E(!1)),
        f = (0, c.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
        I = 'parent' === t.inheritedFrom ? N.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : N.Z.Messages.FORM_LABEL_DEFAULT;
    return e.type === g.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(o.MenuGroup, {
              children: [
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_default',
                      label: I,
                      checked: t.inherited,
                      group: 'channel_notification_settings',
                      subtext: n.notification === g.bL.NO_MESSAGES ? N.Z.Messages.FORM_LABEL_NOTHING : N.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                      action: () => (0, r.JK)(e.guild_id, e.id)
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !t.inherited && n.notification !== g.bL.NO_MESSAGES,
                      label: N.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                      action: () => (0, r.ft)(e.guild_id, e.id, g.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: N.Z.Messages.FORM_LABEL_NOTHING,
                      checked: !t.inherited && n.notification === g.bL.NO_MESSAGES,
                      action: () => (0, r.ft)(e.guild_id, e.id, g.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.MenuCheckboxItem, {
                                    id: 'new-forum-threads-created',
                                    label: N.Z.Messages.FORUM_NEW_POSTS_CREATED,
                                    checked: f,
                                    action: () => s.Z.setForumThreadsCreated(e, !f)
                                }),
                                (0, i.jsx)(o.MenuSeparator, {})
                            ]
                        })
                      : null,
                  (0, i.jsxs)(o.MenuGroup, {
                      children: [
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_default',
                              label: I,
                              group: 'channel_notification_settings',
                              checked: t.inherited && !h,
                              subtext: t.inheritedPreset,
                              action: () => ((0, r.JK)(e.guild_id, e.id), E(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: N.Z.Messages.NOTIFICATION_PRESET_1,
                              checked: !t.inherited && b === _.s8.ALL_MESSAGES,
                              action: () => ((0, r._m)(e.guild_id, e.id, _.s8.ALL_MESSAGES), E(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: N.Z.Messages.NOTIFICATION_PRESET_2,
                              checked: !t.inherited && b === _.s8.MENTIONS,
                              action: () => ((0, r._m)(e.guild_id, e.id, _.s8.MENTIONS), E(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: N.Z.Messages.NOTIFICATION_PRESET_3,
                              checked: !t.inherited && b === _.s8.NOTHING,
                              action: () => ((0, r._m)(e.guild_id, e.id, _.s8.NOTHING), E(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: N.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
                              checked: h || (!t.inherited && b === _.s8.CUSTOM),
                              action: () => (S(!0), E(!0))
                          })
                      ]
                  }),
                  (u || d) && M
              ]
          });
}
function L(e, n) {
    let { notification: t, unread: a } = (0, r.ZA)(e),
        c = (e) => {
            e(), n();
        },
        _ = (n) => {
            let t = { message_notifications: n };
            n === g.bL.ALL_MESSAGES && a !== S.i.ALL_MESSAGES && (t.flags = (0, d.pq)(l.ZP.getChannelIdFlags(e.guild_id, e.id), h.ic.UNREADS_ALL_MESSAGES)), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, u.UE.notifications(n));
        };
    return (0, i.jsxs)(o.MenuGroup, {
        children: [
            (0, i.jsxs)(
                o.MenuItem,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, i.jsx)(o.MenuRadioItem, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: a === S.i.ALL_MESSAGES,
                            label: N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => c(() => (0, r.IG)(e.guild_id, e.id, S.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: a === S.i.ONLY_MENTIONS,
                            label: N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES,
                            subtext: a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES ? N.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => c(() => (0, r.IG)(e.guild_id, e.id, S.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, i.jsxs)(
                o.MenuItem,
                {
                    id: 'push_settings',
                    label: N.Z.Messages.NOTIFICATIONS,
                    children: [
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: t === g.bL.ALL_MESSAGES,
                            subtext: a !== S.i.ALL_MESSAGES && t !== g.bL.ALL_MESSAGES ? N.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => c(() => _(g.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: t === g.bL.ONLY_MENTIONS,
                            label: N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => c(() => _(g.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: t === g.bL.NO_MESSAGES,
                            action: () => c(() => _(g.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
