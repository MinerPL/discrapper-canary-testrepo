n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(404975), l = n(317179), u = n(785717), c = n(689938), d = n(517117);
function _(e) {
    let {
            isHovering: t,
            location: n,
            className: i
        } = e, {trackUserProfileAction: _} = (0, u.KZ)(), {statusReactReplyEnabled: E} = (0, l.t)({ location: n });
    return E ? (0, r.jsxs)(s.ZP, {
        className: a()(i, d.popover, { [d.visible]: t }),
        children: [
            (0, r.jsx)(o.TooltipContainer, {
                text: c.Z.Messages.USER_PROFILE_SEND_REACTION,
                children: (0, r.jsx)(s.zx, {
                    className: d.button,
                    'aria-label': c.Z.Messages.USER_PROFILE_SEND_REACTION,
                    onClick: () => {
                        _({ action: 'PRESS_REACT' });
                    },
                    children: (0, r.jsx)(o.ReactionIcon, { className: d.icon })
                })
            }),
            (0, r.jsx)(o.TooltipContainer, {
                text: c.Z.Messages.USER_PROFILE_REPLY,
                children: (0, r.jsx)(s.zx, {
                    className: d.button,
                    'aria-label': c.Z.Messages.USER_PROFILE_REPLY,
                    onClick: () => {
                        _({ action: 'PRESS_REPLY' });
                    },
                    children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, { className: d.icon })
                })
            })
        ]
    }) : null;
}
