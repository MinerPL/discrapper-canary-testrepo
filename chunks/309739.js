t.d(s, {
    Z: function () {
        return A;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(921801),
    r = t(430824),
    o = t(63063),
    l = t(358085),
    c = t(709054),
    d = t(695346),
    _ = t(726985),
    u = t(981631),
    E = t(689938),
    T = t(113207);
function S() {
    let e = d.G6.useSetting(),
        s = d.Wz.useSetting(),
        t = l.isPlatformEmbedded ? E.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED : E.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC,
        S = (e) => {
            d.Wz.updateSetting(e),
                !(function (e) {
                    let s = () => {
                        d.SE.updateSetting(e ? c.default.keys(r.Z.getGuilds()) : []);
                    };
                    (0, a.openModal)((e) =>
                        (0, n.jsx)(a.ConfirmModal, {
                            header: E.Z.Messages.USER_DM_SETTINGS_TITLE,
                            confirmText: E.Z.Messages.NO_TEXT,
                            cancelText: E.Z.Messages.YES_TEXT,
                            onCancel: s,
                            confirmButtonColor: a.Button.Colors.BRAND,
                            ...e,
                            children: (0, n.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: E.Z.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
                            })
                        })
                    );
                })(e);
        };
    return (0, n.jsx)(i.F, {
        setting: _.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, n.jsxs)(a.FormSection, {
            className: T.marginBottom40,
            children: [
                (0, n.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    className: T.marginBottom8,
                    children: E.Z.Messages.ACTIVITY_STATUS
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: e,
                    onChange: (e) => d.G6.updateSetting(e),
                    note: t,
                    children: E.Z.Messages.SHOW_CURRENT_ACTIVITY
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: !s,
                    note: E.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({ helpdeskArticle: o.Z.getArticleURL(u.BhN.ACTIVITY_STATUS_SETTINGS) }),
                    onChange: (e) => S(!e),
                    children: E.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT
                })
            ]
        })
    });
}
function I() {
    let e = d.cP.useSetting(),
        s = d.Ou.useSetting();
    return (0, n.jsx)(i.F, {
        setting: _.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, n.jsxs)(a.FormSection, {
            className: T.marginBottom40,
            children: [
                (0, n.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    className: T.marginBottom8,
                    children: E.Z.Messages.ACTIVITY_PARTY_PRIVACY
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: e,
                    note: E.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
                    onChange: (e) => d.cP.updateSetting(e),
                    children: E.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: s,
                    note: E.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
                    onChange: (e) => d.Ou.updateSetting(e),
                    children: E.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
                })
            ]
        })
    });
}
function N() {
    return (0, n.jsx)(i.F, {
        setting: _.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, n.jsx)(a.FormSection, {
            className: T.marginBottom40,
            children: (0, n.jsx)(a.FormNotice, {
                type: a.FormNotice.Types.PRIMARY,
                body: E.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
                    termsLink: u.EYA.TERMS,
                    privacyLink: u.EYA.PRIVACY
                })
            })
        })
    });
}
function A(e) {
    let { className: s, showHeader: t = !0 } = e;
    return (0, n.jsxs)(a.FormSection, {
        className: s,
        tag: a.FormTitleTags.H1,
        title: t ? E.Z.Messages.ACTIVITY_PRIVACY : null,
        children: [(0, n.jsx)(S, {}), (0, n.jsx)(I, {}), (0, n.jsx)(N, {})]
    });
}
