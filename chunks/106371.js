var n = t(818083);
let a = (0, n.B)({
    kind: 'user',
    id: '2024-08_reaction_push_notifications_user',
    label: 'In App Notifications for Reactions',
    defaultConfig: {
        enableInAppNotifications: !1,
        enableNotificationsForAllReactions: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable In App Notifications for Reactions (First Reaction)',
            config: {
                enableInAppNotifications: !0,
                enableNotificationsForAllReactions: !1
            }
        },
        {
            id: 2,
            label: 'Enable In App Notifications for Reactions (All Reactions)',
            config: {
                enableInAppNotifications: !0,
                enableNotificationsForAllReactions: !0
            }
        }
    ]
});
(0, n.B)({
    kind: 'guild',
    id: '2024-08_reaction_push_notifications_guild',
    label: 'In App Notifications for Reactions (Guild)',
    defaultConfig: { enableInAppNotifications: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable In App Notifications for Reactions',
            config: { enableInAppNotifications: !0 }
        }
    ]
}),
    (s.Z = a);
