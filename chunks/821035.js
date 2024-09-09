t.d(s, {
    P: function () {
        return C;
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
    d = t(3957),
    _ = t(279743),
    u = t(838436),
    E = t(526761),
    T = t(726985),
    S = t(981631),
    I = t(689938),
    N = t(81138),
    m = t(365320);
function C() {
    var e;
    let s = null === (e = (0, l.Z)()) || void 0 === e || e,
        { explicitContentGuilds: t, explicitContentFriendDm: C, explicitContentNonFriendDm: A } = (0, o.B)(),
        g = (0, d.a)(E.to.DM_SAFETY_ALERTS),
        h = [
            {
                value: a.Q4.BLUR,
                label: I.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
            },
            {
                value: a.Q4.BLOCK,
                label: I.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
            }
        ],
        O = [
            {
                value: a.Q4.BLUR,
                label: I.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
            }
        ],
        p = {
            value: a.Q4.SHOW,
            label: I.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
        };
    return (
        s && (h.unshift(p), O.unshift(p)),
        (0, n.jsxs)(u.U, {
            setting: T.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            className: N.settingsBackgroundFlashElement,
            children: [
                (0, n.jsx)(u.H, {
                    header: I.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
                    description: I.Z.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({ learnMoreLink: c.Z.getArticleURL(S.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, n.jsx)(i.FormItem, {
                    ref: g,
                    tag: i.FormTitleTags.H3,
                    title: I.Z.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
                    titleClassName: m.selectItemTitle,
                    children: (0, n.jsx)(i.SingleSelect, {
                        options: h,
                        value: C,
                        onChange: (e) => (0, r.zj)({ explicitContentFriendDm: e })
                    })
                }),
                (0, n.jsx)(i.FormItem, {
                    tag: i.FormTitleTags.H3,
                    title: I.Z.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
                    titleClassName: m.selectItemTitle,
                    children: (0, n.jsx)(i.SingleSelect, {
                        options: h,
                        value: A,
                        onChange: (e) => (0, r.zj)({ explicitContentNonFriendDm: e })
                    })
                }),
                s &&
                    (0, n.jsx)(i.FormItem, {
                        tag: i.FormTitleTags.H3,
                        title: I.Z.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
                        titleClassName: m.selectItemTitle,
                        children: (0, n.jsx)(i.SingleSelect, {
                            options: O,
                            value: t,
                            onChange: (e) => (0, r.zj)({ explicitContentGuilds: e })
                        })
                    }),
                (0, n.jsx)(_.Z, { scrollPosition: E.to.EXPLICIT_MEDIA_REDACTION })
            ]
        })
    );
}
