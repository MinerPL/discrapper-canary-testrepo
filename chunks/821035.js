t.d(s, {
    P: function () {
        return I;
    }
}),
    t(733860);
var n = t(735250);
t(470079);
var a = t(524437),
    i = t(481060),
    r = t(163268),
    o = t(294602),
    l = t(880257),
    c = t(63063),
    d = t(838436),
    _ = t(526761),
    u = t(726985),
    E = t(981631),
    T = t(689938),
    S = t(256166);
function I() {
    var e;
    let s = null === (e = (0, l.Z)()) || void 0 === e || e,
        { explicitContentGuilds: t, explicitContentFriendDm: I, explicitContentNonFriendDm: N } = (0, o.B)(),
        A = [
            {
                value: a.Q4.BLUR,
                label: T.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
            },
            {
                value: a.Q4.BLOCK,
                label: T.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
            }
        ],
        C = [
            {
                value: a.Q4.BLUR,
                label: T.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
            }
        ],
        m = {
            value: a.Q4.SHOW,
            label: T.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
        };
    return (
        s && (A.unshift(m), C.unshift(m)),
        (0, n.jsxs)(d.U, {
            setting: u.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: _.to.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, n.jsx)(d.H, {
                    header: T.Z.Messages.USER_SETTINGS_SENSITIVE_MEDIA_TITLE,
                    description: T.Z.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({ learnMoreLink: c.Z.getArticleURL(E.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, n.jsx)(i.FormItem, {
                    tag: i.FormTitleTags.H3,
                    title: T.Z.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
                    titleClassName: S.selectItemTitle,
                    children: (0, n.jsx)(i.SingleSelect, {
                        options: A,
                        value: I,
                        onChange: (e) => (0, r.zj)({ explicitContentFriendDm: e })
                    })
                }),
                (0, n.jsx)(i.FormItem, {
                    tag: i.FormTitleTags.H3,
                    title: T.Z.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
                    titleClassName: S.selectItemTitle,
                    children: (0, n.jsx)(i.SingleSelect, {
                        options: A,
                        value: N,
                        onChange: (e) => (0, r.zj)({ explicitContentNonFriendDm: e })
                    })
                }),
                s &&
                    (0, n.jsx)(i.FormItem, {
                        tag: i.FormTitleTags.H3,
                        title: T.Z.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
                        titleClassName: S.selectItemTitle,
                        children: (0, n.jsx)(i.SingleSelect, {
                            options: C,
                            value: t,
                            onChange: (e) => (0, r.zj)({ explicitContentGuilds: e })
                        })
                    })
            ]
        })
    );
}
