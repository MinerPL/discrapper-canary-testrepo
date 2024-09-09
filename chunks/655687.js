n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(933557),
    a = n(981631),
    s = n(689938);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.ZP)(e, !0),
        l = (0, i.ZP)(e, !1);
    if (null == e || null == n)
        return {
            placeholder: '',
            accessibilityLabel: ''
        };
    if (t)
        return {
            placeholder: s.Z.Messages.READ_ONLY_CHANNEL,
            accessibilityLabel: s.Z.Messages.READ_ONLY_CHANNEL
        };
    if (e.isForumPost())
        return {
            placeholder: s.Z.Messages.FORUM_POST_TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: s.Z.Messages.TEXTAREA_FORUM_POST_A11Y_LABEL.format({ channel: l })
        };
    if (a.TPd.THREADS.has(e.type))
        return {
            placeholder: s.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: s.Z.Messages.TEXTAREA_THREAD_A11Y_LABEL.format({ channel: l })
        };
    if (e.type === a.d4z.DM)
        return {
            placeholder: s.Z.Messages.DM_TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: s.Z.Messages.TEXTAREA_TEXT_DM_A11Y_LABEL.format({ channel: l })
        };
    return {
        placeholder: s.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: n }),
        accessibilityLabel: s.Z.Messages.TEXTAREA_TEXT_CHANNEL_A11Y_LABEL.format({ channel: l })
    };
}
