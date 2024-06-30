s.d(t, {
    Z: function () {
        return O;
    },
    c: function () {
        return d;
    }
});
var n = s(735250);
s(470079);
var a = s(442837), i = s(481060), _ = s(92114), l = s(729052), L = s(9156), u = s(621600), E = s(981631), r = s(689938);
function M(e) {
    var t, s, n;
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e.type) {
    case E.d4z.GUILD_VOICE:
        ;
        return a ? (t = e, [
            {
                setting: E.bL.NULL,
                label: null != t.parent_id ? r.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.Z.Messages.FORM_LABEL_DEFAULT
            },
            {
                setting: E.bL.ALL_MESSAGES,
                label: r.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
            },
            {
                setting: E.bL.ONLY_MENTIONS,
                label: r.Z.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
            },
            {
                setting: E.bL.NO_MESSAGES,
                label: r.Z.Messages.FORM_LABEL_NOTHING
            }
        ]) : null;
    case E.d4z.GUILD_STAGE_VOICE:
        ;
        return s = e, [
            {
                setting: E.bL.NULL,
                label: null != s.parent_id ? r.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.Z.Messages.FORM_LABEL_DEFAULT
            },
            {
                setting: E.bL.ONLY_MENTIONS,
                label: r.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY
            },
            {
                setting: E.bL.NO_MESSAGES,
                label: r.Z.Messages.FORM_LABEL_NOTHING
            }
        ];
    default:
        ;
        return n = e, [
            {
                setting: E.bL.NULL,
                label: null != n.parent_id ? r.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.Z.Messages.FORM_LABEL_DEFAULT
            },
            {
                setting: E.bL.ALL_MESSAGES,
                label: r.Z.Messages.FORM_LABEL_ALL_MESSAGES
            },
            {
                setting: E.bL.ONLY_MENTIONS,
                label: r.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
            },
            {
                setting: E.bL.NO_MESSAGES,
                label: r.Z.Messages.FORM_LABEL_NOTHING
            }
        ];
    }
}
function d(e) {
    let t = e.getGuildId(), s = e.id, d = (0, a.e7)([L.ZP], () => {
            let s = E.bL.NULL;
            return null != e.parent_id && (s = L.ZP.getChannelMessageNotifications(t, e.parent_id)), s !== E.bL.NULL ? s : L.ZP.getMessageNotifications(t);
        }, [
            t,
            e.parent_id
        ]), O = (0, a.e7)([L.ZP], () => L.ZP.getNewForumThreadsCreated(e)), N = (0, a.e7)([L.ZP], () => L.ZP.getChannelOverrides(t)[s], [
            t,
            s
        ]), c = null == N ? E.bL.NULL : N.message_notifications, A = (0, l.p2)(e), o = M(e, A);
    return null == o ? null : (0, n.jsxs)(n.Fragment, {
        children: [
            e.isForumLikeChannel() ? (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(i.MenuCheckboxItem, {
                        id: 'new-forum-threads-created',
                        label: r.Z.Messages.FORUM_NEW_POSTS_CREATED,
                        checked: O,
                        action: () => _.Z.setForumThreadsCreated(e, !O)
                    }),
                    (0, n.jsx)(i.MenuSeparator, {})
                ]
            }) : null,
            o.map(a => {
                let {
                    setting: l,
                    label: L
                } = a;
                return (0, n.jsx)(i.MenuRadioItem, {
                    group: 'channel-notifications',
                    id: ''.concat(l),
                    label: L,
                    subtext: l === E.bL.NULL ? function (e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        switch (e) {
                        case E.bL.ALL_MESSAGES:
                            return t.type === E.d4z.GUILD_VOICE && s ? r.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : r.Z.Messages.FORM_LABEL_ALL_MESSAGES;
                        case E.bL.ONLY_MENTIONS:
                            return r.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                        case E.bL.NO_MESSAGES:
                            return r.Z.Messages.FORM_LABEL_NOTHING;
                        case E.bL.NULL:
                        default:
                            return;
                        }
                    }(d, e, A) : void 0,
                    action: () => {
                        var e;
                        return e = l, void (null != t && _.Z.updateChannelOverrideSettings(t, s, { message_notifications: e }, u.UE.notifications(e)));
                    },
                    checked: l === c
                }, l);
            })
        ]
    });
}
function O(e) {
    var t, s;
    let _ = d(e), u = (0, a.e7)([L.ZP], () => L.ZP.resolvedMessageNotifications(e), [e]), O = (0, a.e7)([L.ZP], () => L.ZP.getChannelOverrides(e.guild_id)[e.id], [
            e.guild_id,
            e.id
        ]), N = null == O ? E.bL.NULL : O.message_notifications, c = (0, l.p2)(e), A = N === E.bL.NULL && e.isGuildStageVoice() ? r.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (s = M(e, c)) || void 0 === s ? void 0 : null === (t = s.find(e => {
            let {setting: t} = e;
            return t === u;
        })) || void 0 === t ? void 0 : t.label;
    return null != _ ? (0, n.jsx)(i.MenuItem, {
        id: 'channel-notifications',
        label: r.Z.Messages.NOTIFICATION_SETTINGS,
        subtext: A,
        children: _
    }) : null;
}
