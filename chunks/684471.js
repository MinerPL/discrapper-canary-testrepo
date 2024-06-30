n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(735250);
n(470079);
var o = n(481060), r = n(442837), a = n(594174), i = n(51144), c = n(473092), E = n(955708), N = n(850165), u = n(689938), I = n(897583), T = n(282668);
function l(e) {
    let {
            senderId: t,
            trackAnalyticsEvent: n,
            onNavigate: l
        } = e, _ = (0, r.e7)([a.default], () => {
            let e = a.default.getUser(t);
            return i.ZP.getName(e);
        });
    return (0, s.jsx)(N.Z, {
        header: u.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER,
        description: u.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format({ username: _ }),
        heroImageSrc: T,
        heroImageAlt: u.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
        children: (0, s.jsxs)('div', {
            className: I.buttonContainer,
            children: [
                (0, s.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.LARGE,
                    className: I.button,
                    onClick: () => {
                        l(E.InappropriateConversationModalSlideKeys.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                    children: u.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION
                }),
                (0, s.jsx)(o.Button, {
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.LARGE,
                    className: I.button,
                    onClick: () => {
                        l(E.InappropriateConversationModalSlideKeys.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                    children: u.Z.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS
                })
            ]
        })
    });
}
