i.d(n, {
    Z: function () {
        return N;
    }
});
var t = i(735250), o = i(470079), s = i(442837), l = i(481060), a = i(666520), r = i(580552), c = i(169559), d = i(369077), u = i(706454), I = i(246946), E = i(785717), _ = i(648067), f = i(588822), Z = i(900927), m = i(652853), S = i(335191), v = i(988246), x = i(689938), h = i(420990);
function N(e) {
    var n;
    let {
            user: i,
            displayProfile: N,
            autoFocusNote: g = !1,
            scrollToConnections: C = !1
        } = e, {trackUserProfileAction: p} = (0, E.KZ)(), R = (0, s.e7)([I.Z], () => I.Z.hidePersonalInformation), {theme: T} = (0, m.z)(), M = (0, s.e7)([u.default], () => u.default.locale), j = (0, c.Z)('user_profile'), A = (null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== '' || (0, r.Z)(i.id), P = (0, _.Z)(i.id), U = o.useRef(null);
    return (o.useLayoutEffect(() => {
        if (C) {
            var e;
            null == U || null === (e = U.current) || void 0 === e || e.scrollIntoView();
        }
    }, [C]), R) ? (0, t.jsx)(v.Z, {}) : (0, t.jsxs)(l.ScrollerThin, {
        fade: !0,
        className: h.infoScroller,
        children: [
            (0, t.jsxs)('div', {
                className: h.userInfoSection,
                children: [
                    A && (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_ABOUT_ME
                            }),
                            (0, t.jsx)(f.Z, {
                                className: h.userInfoText,
                                userBio: null !== (n = null == N ? void 0 : N.bio) && void 0 !== n ? n : '',
                                userId: i.id
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        children: [
                            (0, t.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
                            }),
                            (0, t.jsx)(Z.Z, {
                                userId: i.id,
                                textClassName: h.userInfoText
                            })
                        ]
                    }),
                    j && (0, t.jsx)('div', {
                        className: h.clans,
                        children: (0, t.jsx)('div', {
                            className: h.userInfoText,
                            children: (0, t.jsx)(d.Gd, { userId: i.id })
                        })
                    }),
                    !i.isNonUserBot() && (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.NOTE
                            }),
                            (0, t.jsx)(a.Z, {
                                userId: i.id,
                                autoFocus: g,
                                className: h.note,
                                onUpdate: () => p({ action: 'SET_NOTE' })
                            })
                        ]
                    })
                ]
            }),
            (0, t.jsx)(S.OA, {
                ref: U,
                connectedAccounts: P,
                theme: T,
                locale: M,
                className: h.userInfoSection,
                userId: i.id
            })
        ]
    });
}
