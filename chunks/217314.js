n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250);
n(470079);
var a = n(399606),
    s = n(481060),
    l = n(210975),
    r = n(158776),
    o = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(984370),
    h = n(689938),
    m = n(625032);
function p(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        p = (0, a.e7)([c.default], () => c.default.getUser(t)),
        _ = (0, a.e7)([r.Z], () => r.Z.getStatus(t)),
        E = (0, a.e7)([r.Z], () => r.Z.isMobileOnline(t)),
        f = (0, a.e7)([o.Z], () => o.Z.getNickname(t)),
        C = u.ZP.useUserTag(p),
        g = (0, l.m$)({
            channelId: e.channel.id,
            location: 'HeaderBarDirectMessageV2'
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.HiddenVisually, { children: h.Z.Messages.DIRECT_MESSAGE }),
            null != p &&
                !n &&
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(s.Avatar, {
                        status: _,
                        isMobile: E,
                        className: m.avatar,
                        size: s.AvatarSizes.SIZE_24,
                        'aria-label': u.ZP.getName(p),
                        src: p.getAvatarURL(void 0, 24)
                    })
                }),
            (0, i.jsx)(d.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? m.cursorPointer : null,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.TooltipContainer, {
                            text: C,
                            position: 'bottom',
                            children: null != f ? f : u.ZP.getName(p)
                        }),
                        g &&
                            (0, i.jsx)(s.Tooltip, {
                                text: h.Z.Messages.E2EE_CALL_VERIFIED_TOOLTIP,
                                children: (e) =>
                                    (0, i.jsx)(s.ShieldLockIcon, {
                                        ...e,
                                        size: 'xs',
                                        'aria-label': h.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
                                        color: s.tokens.colors.INTERACTIVE_NORMAL,
                                        className: m.secureFramesIcon
                                    })
                            })
                    ]
                })
            })
        ]
    });
}
