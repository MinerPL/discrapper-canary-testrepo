s.d(t, {
    Z: function () {
        return g;
    }
}), s(47120);
var n = s(735250);
s(470079);
var a = s(481060), i = s(787740), r = s(134598), o = s(921801), l = s(430824), c = s(63063), d = s(358085), _ = s(709054), E = s(695346), u = s(726985), T = s(981631), I = s(689938), S = s(707534), N = s(331651);
function C() {
    let e = E.G6.useSetting(), t = E.Wz.useSetting(), s = d.isPlatformEmbedded ? I.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED : I.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC, i = e => {
            E.Wz.updateSetting(e), !function (e) {
                let t = () => {
                    E.SE.updateSetting(e ? _.default.keys(l.Z.getGuilds()) : []);
                };
                (0, a.openModal)(e => (0, n.jsx)(a.ConfirmModal, {
                    header: I.Z.Messages.USER_DM_SETTINGS_TITLE,
                    confirmText: I.Z.Messages.NO_TEXT,
                    cancelText: I.Z.Messages.YES_TEXT,
                    onCancel: t,
                    confirmButtonColor: a.Button.Colors.BRAND,
                    ...e,
                    children: (0, n.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: I.Z.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
                    })
                }));
            }(e);
        };
    return (0, n.jsx)(o.F, {
        setting: u.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, n.jsxs)(a.FormSection, {
            className: N.marginBottom40,
            children: [
                (0, n.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    className: N.marginBottom8,
                    children: I.Z.Messages.ACTIVITY_STATUS
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: e,
                    onChange: e => E.G6.updateSetting(e),
                    note: s,
                    children: I.Z.Messages.SHOW_CURRENT_ACTIVITY
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: !t,
                    note: I.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({ helpdeskArticle: c.Z.getArticleURL(T.BhN.ACTIVITY_STATUS_SETTINGS) }),
                    onChange: e => i(!e),
                    children: I.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT
                })
            ]
        })
    });
}
function m() {
    let e = E.cP.useSetting(), t = E.Ou.useSetting();
    return (0, n.jsx)(o.F, {
        setting: u.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, n.jsxs)(a.FormSection, {
            className: N.marginBottom40,
            children: [
                (0, n.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    className: N.marginBottom8,
                    children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: e,
                    note: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
                    onChange: e => E.cP.updateSetting(e),
                    children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: t,
                    note: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
                    onChange: e => E.Ou.updateSetting(e),
                    children: I.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
                })
            ]
        })
    });
}
function A() {
    return (0, n.jsx)(o.F, {
        setting: u.s6.ACTIVITY_PRIVACY_BROADCASTING,
        children: (0, n.jsxs)(a.FormSection, {
            className: N.marginBottom40,
            children: [
                (0, n.jsxs)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    className: N.marginBottom8,
                    children: [
                        I.Z.Messages.BROADCASTING_SETTINGS,
                        (0, n.jsx)(i.Z, { className: S.betaTag })
                    ]
                }),
                (0, n.jsx)(a.FormText, {
                    type: a.FormText.Types.DESCRIPTION,
                    className: N.marginBottom20,
                    children: I.Z.Messages.BROADCASTING_SETTINGS_DESCRIPTION
                }),
                (0, n.jsx)(a.FormItem, {
                    children: (0, n.jsx)(a.Button, {
                        onClick: () => (0, r.X)(),
                        size: a.ButtonSizes.SMALL,
                        children: I.Z.Messages.BROADCASTING_SETTINGS_CTA
                    })
                })
            ]
        })
    });
}
function h() {
    return (0, n.jsx)(o.F, {
        setting: u.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, n.jsx)(a.FormSection, {
            className: N.marginBottom40,
            children: (0, n.jsx)(a.FormNotice, {
                type: a.FormNotice.Types.PRIMARY,
                body: I.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
                    termsLink: T.EYA.TERMS,
                    privacyLink: T.EYA.PRIVACY
                })
            })
        })
    });
}
function g(e) {
    let {
        className: t,
        showHeader: s = !0
    } = e;
    return (0, n.jsxs)(a.FormSection, {
        className: t,
        tag: a.FormTitleTags.H1,
        title: s ? I.Z.Messages.ACTIVITY_PRIVACY : null,
        children: [
            (0, n.jsx)(C, {}),
            (0, n.jsx)(m, {}),
            (0, n.jsx)(A, {}),
            (0, n.jsx)(h, {})
        ]
    });
}
