var i = t(735250);
t(470079);
var r = t(780384), o = t(481060), a = t(410030), s = t(204197), l = t(51144), d = t(105759), c = t(898969), C = t(703614), u = t(182294), _ = t(689938), p = t(734449);
n.Z = () => {
    let e = (0, d.Z)(), {
            avatarSrc: n,
            eventHandlers: t
        } = (0, s.Z)({
            user: e,
            size: u.EF.SIZE_32,
            animateOnHover: !0
        }), f = (0, a.Fg)(), x = (0, r.ap)(f), h = l.ZP.getName(e), b = x ? c.Z : C.Z;
    return null == e ? null : (0, i.jsxs)('div', {
        className: p.attributionBannerContainer,
        children: [
            (0, i.jsx)('div', {
                className: p.avatarContainer,
                children: (0, i.jsx)(o.Avatar, {
                    src: n,
                    'aria-label': e.username,
                    size: u.EF.SIZE_32,
                    ...t
                })
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/bold',
                className: p.bannerHeader,
                children: _.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({ userName: h })
            }),
            (0, i.jsx)(b, { className: p.bannerIcon })
        ]
    });
};
