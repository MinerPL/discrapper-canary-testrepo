t.r(n), t.d(n, {
    default: function () {
        return c;
    }
});
var a = t(735250);
t(470079);
var s = t(703558), o = t(403182), _ = t(127654), E = t(98278), L = t(790527), M = t(474936), r = t(981631), i = t(689938);
function c(e) {
    var n;
    let {
        channel: c,
        onClose: l,
        content: A,
        ...u
    } = e;
    function O() {
        l(), (0, E.z)(!0);
    }
    return (0, a.jsx)(L.Z, {
        artURL: t(990158),
        type: M.cd.MESSAGE_LENGTH_UPSELL,
        title: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
        body: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
            maxLength: r.J6R,
            onLearnMore: O
        }),
        context: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({ maxLength: r.J6R }),
        glowUp: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({ onLearnMore: O }),
        analyticsSource: { page: (null == (n = c) ? void 0 : n.getGuildId()) != null ? r.ZY5.GUILD_CHANNEL : (null == n ? void 0 : n.isGroupDM()) || (null == n ? void 0 : n.isPrivate()) ? r.ZY5.DM_CHANNEL : null },
        analyticsLocation: {
            section: r.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: r.qAy.BUTTON_CTA
        },
        onClose: l,
        secondaryCTA: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
        onSecondaryClick: function () {
            l();
            let e = new Blob([A], { type: 'text/plain' });
            (0, _.d)([(0, o.dp)(e, 'message.txt')], c, s.d.ChannelMessage, {
                requireConfirm: !0,
                showLargeMessageDialog: !0
            });
        },
        ...u
    });
}
