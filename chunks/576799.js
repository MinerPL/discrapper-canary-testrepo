n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(58540),
    l = n(905405),
    o = n(937889),
    c = n(267128),
    u = n(123145),
    d = n(699516),
    _ = n(217702),
    E = n(438379);
function I(e) {
    let { message: t, channel: n } = e,
        I = (0, s.e7)([d.Z], () => d.Z.isBlockedForMessage(t)),
        m = (0, l.p)(),
        T = a.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, r.$)(T);
    let h = a.useMemo(
        () =>
            null != t.content && '' !== t.content
                ? (0, o.ZP)(t, {
                      formatInline: !0,
                      shouldFilterKeywords: m
                  }).content
                : null,
        [t, m]
    );
    return (0, i.jsxs)('div', {
        className: E.threadMessageAccessory,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: E.threadMessageAccessoryAvatar
            }),
            (0, i.jsx)(u.Z, {
                message: t,
                channel: n,
                compact: !0
            }),
            (0, i.jsx)('div', {
                className: E.threadMessageAccessoryPreview,
                children: (function (e, t, n) {
                    let {
                        contentPlaceholder: a,
                        renderedContent: s,
                        leadingIcon: r,
                        trailingIcon: l
                    } = (0, c.f)(e, t, n, E.threadMessageAccessoryContent, {
                        trailingIconClass: E.threadMessageAccessoryContentTrailingIcon,
                        leadingIconClass: E.threadMessageAccessoryContentLeadingIcon,
                        iconSize: _.WW
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            r,
                            null != s
                                ? s
                                : (0, i.jsx)('span', {
                                      className: E.threadMessageAccessoryPlaceholder,
                                      children: a
                                  }),
                            l
                        ]
                    });
                })(t, h, I)
            })
        ]
    });
}
