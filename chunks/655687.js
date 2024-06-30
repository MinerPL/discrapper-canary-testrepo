n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(933557), a = n(981631), l = n(689938);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = (0, i.ZP)(e, !0), s = (0, i.ZP)(e, !1);
    if (null == e || null == n)
        return {
            placeholder: '',
            accessibilityLabel: ''
        };
    if (t)
        return {
            placeholder: l.Z.Messages.READ_ONLY_CHANNEL,
            accessibilityLabel: l.Z.Messages.READ_ONLY_CHANNEL
        };
    if (e.isForumPost())
        return {
            placeholder: l.Z.Messages.FORUM_POST_TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: l.Z.Messages.TEXTAREA_FORUM_POST_A11Y_LABEL.format({ channel: s })
        };
    if (a.TPd.THREADS.has(e.type))
        return {
            placeholder: l.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: l.Z.Messages.TEXTAREA_THREAD_A11Y_LABEL.format({ channel: s })
        };
    if (e.type === a.d4z.DM)
        return {
            placeholder: l.Z.Messages.DM_TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: l.Z.Messages.TEXTAREA_TEXT_DM_A11Y_LABEL.format({ channel: s })
        };
    return {
        placeholder: l.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: n }),
        accessibilityLabel: l.Z.Messages.TEXTAREA_TEXT_CHANNEL_A11Y_LABEL.format({ channel: s })
    };
}
