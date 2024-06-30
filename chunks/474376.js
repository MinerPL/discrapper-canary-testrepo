n.d(t, {
    g: function () {
        return T;
    }
}), n(653041);
var i = n(735250);
n(470079);
var s = n(442837), a = n(481060), r = n(44315), l = n(598077), o = n(246946), c = n(594174), d = n(626135), u = n(51144), _ = n(480387), E = n(726745), h = n(251423), I = n(383832), m = n(981631), p = n(689938), g = n(886085);
function T() {
    let e = (0, s.e7)([c.default], () => c.default.getCurrentUser()), t = (0, s.e7)([o.Z], () => o.Z.hidePersonalInformation), {multiAccountUsers: n} = (0, h.L)(), T = t => {
            if (t !== (null == e ? void 0 : e.id))
                d.default.track(m.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: m.jXE.PROFILE_POPOUT } }), _.yD(t);
        }, S = n.map(n => {
            let s = new l.Z(n), o = s.id === (null == e ? void 0 : e.id), c = n.tokenStatus === E.q.INVALID, d = t ? null : '#'.concat(s.discriminator);
            return (0, i.jsx)(a.MenuItem, {
                id: s.id,
                focusedClassName: g.focused,
                label: e => {
                    let {isFocused: l} = e;
                    return (0, i.jsxs)('div', {
                        className: g.userMenuItem,
                        children: [
                            (0, i.jsx)(a.Avatar, {
                                src: s.getAvatarURL(void 0, 40),
                                size: a.AvatarSizes.SIZE_24,
                                'aria-label': n.username
                            }),
                            (0, i.jsxs)('div', {
                                className: g.userMenuUsername,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        className: g.userMenuText,
                                        variant: 'text-sm/normal',
                                        children: u.ZP.getUserTag(s, {
                                            mode: 'username',
                                            identifiable: t ? 'never' : 'always'
                                        })
                                    }),
                                    !s.isPomelo() && (0, i.jsx)(a.Text, {
                                        className: g.userMenuDiscriminator,
                                        variant: 'text-sm/normal',
                                        children: d
                                    })
                                ]
                            }),
                            o && (0, i.jsx)(a.CircleCheckIcon, {
                                size: 'sm',
                                color: (0, r.Lq)(l ? m.Ilk.WHITE_500 : m.Ilk.BRAND_500),
                                secondaryColor: (0, r.Lq)(l ? m.Ilk.BRAND_500 : m.Ilk.WHITE_500),
                                className: g.activeIcon
                            }),
                            c && (0, i.jsx)(a.CircleExclamationPointIcon, {
                                color: (0, r.Lq)(m.Ilk.RED_400),
                                secondaryColor: (0, r.Lq)(m.Ilk.WHITE_500),
                                size: 'xs',
                                className: g.activeIcon
                            })
                        ]
                    });
                },
                action: () => {
                    c ? (0, I.Z)() : T(s.id);
                }
            }, s.id);
        });
    return S.push((0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.MenuSeparator, {}),
            (0, i.jsx)(a.MenuItem, {
                id: 'manage-accounts',
                label: p.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                action: I.Z
            })
        ]
    })), S;
}
