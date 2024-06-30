n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(58540), r = n(905405), o = n(937889), c = n(123145), d = n(699516), u = n(512665), _ = n(768760), E = n(250050);
function m(e) {
    let {
            message: t,
            channel: n
        } = e, m = (0, s.e7)([d.Z], () => d.Z.isBlockedForMessage(t)), I = (0, r.p)(), T = a.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [
            n.guild_id,
            t.author.id
        ]);
    (0, l.$)(T);
    let h = a.useMemo(() => null != t.content && '' !== t.content ? (0, o.ZP)(t, {
        formatInline: !0,
        shouldFilterKeywords: I
    }).content : null, [
        t,
        I
    ]);
    return (0, i.jsxs)('div', {
        className: E.threadMessageAccessory,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: E.threadMessageAccessoryAvatar
            }),
            (0, i.jsx)(c.Z, {
                message: t,
                channel: n,
                compact: !0
            }),
            (0, i.jsx)('div', {
                className: E.threadMessageAccessoryPreview,
                children: function (e, t, n) {
                    let {
                        contentPlaceholder: a,
                        renderedContent: s,
                        leadingIcon: l,
                        trailingIcon: r
                    } = (0, u.f)(e, t, n, E.threadMessageAccessoryContent, {
                        trailingIconClass: E.threadMessageAccessoryContentTrailingIcon,
                        leadingIconClass: E.threadMessageAccessoryContentLeadingIcon,
                        iconSize: _.WW
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            l,
                            null != s ? s : (0, i.jsx)('span', {
                                className: E.threadMessageAccessoryPlaceholder,
                                children: a
                            }),
                            r
                        ]
                    });
                }(t, h, m)
            })
        ]
    });
}
