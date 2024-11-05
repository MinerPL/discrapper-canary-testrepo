n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(789020);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(860719),
    s = n(63063),
    o = n(49012),
    c = n(981631),
    d = n(388032),
    u = n(915817);
let h = s.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
function m(e) {
    let { application: t } = e,
        { hasMessageContent: n, hasGuildPresences: s, hasGuildMembers: c, hasIntents: m } = (0, l.w)({ flags: null == t ? void 0 : t.flags }),
        g = r.useCallback(() => {
            null != t.privacy_policy_url && (0, o.q)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, i.jsxs)('div', {
        className: u.sectionContainer,
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.QzDgMj)
            }),
            (0, i.jsxs)('div', {
                className: u.contentContainer,
                children: [
                    m &&
                        (0, i.jsxs)('ul', {
                            className: u.intentsList,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-secondary',
                                    children: d.intl.string(d.t.U6KH5e)
                                }),
                                n &&
                                    (0, i.jsx)(p, {
                                        icon: a.ChatIcon,
                                        heading: d.intl.string(d.t.gJpBOz),
                                        body: d.intl.string(d.t['L+QVbm'])
                                    }),
                                s &&
                                    (0, i.jsx)(p, {
                                        icon: a.UserCircleStatusIcon,
                                        heading: d.intl.string(d.t.jo0oj4),
                                        body: d.intl.string(d.t.Dm0jq6)
                                    }),
                                c &&
                                    (0, i.jsx)(p, {
                                        icon: a.GroupIcon,
                                        heading: d.intl.string(d.t.QZql7O),
                                        body: d.intl.string(d.t['ez/N/f'])
                                    })
                            ]
                        }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d.intl.format(d.t.b6nqk5, { helpCenterUrl: h })
                    }),
                    null != t.privacy_policy_url &&
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            className: u.privacyPolicy,
                            children: d.intl.format(d.t.agYVY2, { onClick: g })
                        })
                ]
            })
        ]
    });
}
function p(e) {
    let { icon: t, heading: n, body: r } = e;
    return (0, i.jsxs)('li', {
        className: u.intentContainer,
        children: [
            (0, i.jsx)(t, {
                color: 'currentColor',
                size: 'md'
            }),
            (0, i.jsxs)('div', {
                className: u.intentTextContainer,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-secondary',
                        children: n
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: r
                    })
                ]
            })
        ]
    });
}
