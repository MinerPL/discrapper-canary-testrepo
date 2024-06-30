i.d(n, {
    Z: function () {
        return f;
    }
}), i(789020);
var t = i(735250), a = i(470079), r = i(120356), o = i.n(r), l = i(481060), s = i(860719), c = i(63063), d = i(49012), u = i(981631), _ = i(689938), p = i(419611);
let m = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
function I(e) {
    let {
        icon: n,
        heading: i,
        body: a
    } = e;
    return (0, t.jsxs)('li', {
        className: p.intentContainer,
        children: [
            (0, t.jsx)('div', {
                children: (0, t.jsx)(n, {
                    color: 'currentColor',
                    size: 'md'
                })
            }),
            (0, t.jsxs)('div', {
                className: p.intentTextContainer,
                children: [
                    (0, t.jsx)('div', {
                        children: (0, t.jsx)(l.Heading, {
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: i
                        })
                    }),
                    (0, t.jsx)('div', {
                        className: p.intentBody,
                        children: (0, t.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: a
                        })
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let {application: n} = e, {
            hasMessageContent: i,
            hasGuildPresences: r,
            hasGuildMembers: c,
            hasIntents: u
        } = (0, s.w)({ flags: null == n ? void 0 : n.flags }), f = a.useCallback(() => {
            (null == n ? void 0 : n.privacy_policy_url) != null && (0, d.q)({ href: n.privacy_policy_url });
        }, [null == n ? void 0 : n.privacy_policy_url]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            u && (0, t.jsx)('div', {
                className: p.intentsListHeading,
                children: (0, t.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
                })
            }),
            (0, t.jsxs)('div', {
                className: p.intentsContainer,
                children: [
                    u && (0, t.jsxs)('ul', {
                        className: p.intentsList,
                        children: [
                            i && (0, t.jsx)(I, {
                                icon: l.ChatIcon,
                                heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                                body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
                            }),
                            r && (0, t.jsx)(I, {
                                icon: l.UserCircleStatusIcon,
                                heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                                body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
                            }),
                            c && (0, t.jsx)(I, {
                                icon: l.GroupIcon,
                                heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                                body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: o()({ [p.hasSeparator]: u }),
                        children: [
                            (0, t.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: m })
                            }),
                            (null == n ? void 0 : n.privacy_policy_url) != null && (0, t.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                className: p.privacyPolicy,
                                children: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({ onClick: f })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
