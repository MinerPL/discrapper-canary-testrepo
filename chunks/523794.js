o.r(e), o.d(e, {
    default: function () {
        return M;
    }
});
var s = o(735250);
o(470079);
var i = o(481060), a = o(623624), n = o(430824), l = o(496675), d = o(285952), r = o(626135), u = o(565799), c = o(501655), _ = o(146085), T = o(981631), S = o(474936), E = o(689938), L = o(499352);
function M(t) {
    var e;
    let o, {
            channel: M,
            transitionState: I,
            onClose: B
        } = t, g = n.Z.getGuild(M.guild_id), h = null !== (e = null == g ? void 0 : g.maxStageVideoChannelUsers) && void 0 !== e ? e : 0, O = !!(null == g ? void 0 : g.isCommunity()), C = E.Z.Messages.STAGE_FULL_TITLE, f = O ? h < T.TU7 : (null == g ? void 0 : g.premiumTier) !== T.Eu4.TIER_3 && h <= T.eez, m = l.Z.can(_.yP, M);
    o = O && (null == g ? void 0 : g.premiumTier) === T.Eu4.TIER_3 ? h <= T.TU7 ? E.Z.Messages.STAGE_FULL_BOOST_MORE_BODY : E.Z.Messages.STAGE_FULL_MAX_BODY : f ? E.Z.Messages.STAGE_FULL_BODY : E.Z.Messages.STAGE_FULL_MAX_BODY;
    let p = () => {
            B(), r.default.track(T.rMx.BOOSTING_UPSELL_CLICKED, {
                guild_id: M.guild_id,
                type: S.cd.VIDEO_STAGE_LIMIT,
                is_moderator: m,
                action: S.T7.DISMISS
            });
        }, x = u.Z.getMutableParticipants(M.id, c.pV.SPEAKER).filter(t => t.type === c.Ui.VOICE).length, A = u.Z.getParticipantCount(M.id, c.pV.AUDIENCE);
    return r.default.track(T.rMx.BOOSTING_UPSELL_VIEWED, {
        guild_id: M.guild_id,
        type: S.cd.VIDEO_STAGE_LIMIT,
        is_moderator: m,
        listener_count: x + A
    }), (0, s.jsxs)(i.ModalRoot, {
        size: i.ModalSize.SMALL,
        transitionState: I,
        'aria-label': C,
        children: [
            (0, s.jsxs)(i.ModalHeader, {
                justify: d.Z.Justify.END,
                separator: !1,
                className: L.header,
                children: [
                    (0, s.jsx)('div', { className: L.fullArt }),
                    (0, s.jsx)(i.ModalCloseButton, { onClick: B })
                ]
            }),
            (0, s.jsxs)(i.ModalContent, {
                className: L.content,
                children: [
                    (0, s.jsx)(i.Heading, {
                        variant: 'heading-xl/bold',
                        children: C
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-md/medium',
                        children: o
                    })
                ]
            }),
            (0, s.jsx)(i.ModalFooter, {
                className: L.footer,
                children: f ? (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(i.Button, {
                            look: i.ButtonLooks.LINK,
                            className: L.noThanksButton,
                            color: i.ButtonColors.CUSTOM,
                            size: i.ButtonSizes.SMALL,
                            onClick: p,
                            children: E.Z.Messages.NO_THANKS
                        }),
                        (0, s.jsx)(i.ShinyButton, {
                            onClick: () => {
                                B(), (0, a.f)({
                                    guildId: M.guild_id,
                                    location: { section: T.jXE.STAGE_VIDEO_LIMIT }
                                }), r.default.track(T.rMx.BOOSTING_UPSELL_CLICKED, {
                                    guild_id: M.guild_id,
                                    type: S.cd.VIDEO_STAGE_LIMIT,
                                    is_moderator: m,
                                    action: S.T7.BOOST
                                });
                            },
                            size: i.ButtonSizes.SMALL,
                            className: L.boostButton,
                            children: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })
                    ]
                }) : (0, s.jsx)(i.Button, {
                    onClick: p,
                    size: i.ButtonSizes.SMALL,
                    color: i.ButtonColors.CUSTOM,
                    className: L.boostButton,
                    children: E.Z.Messages.GOT_IT
                })
            })
        ]
    });
}
