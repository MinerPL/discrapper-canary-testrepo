n.d(t, {
    Z: function () {
        return b;
    }
}), n(47120), n(789020);
var i = n(735250);
n(470079);
var a = n(613828), s = n(442837), l = n(477690), r = n(481060), o = n(668781), c = n(2052), d = n(100527), u = n(906732), _ = n(835473), E = n(522474), m = n(523746), I = n(592125), T = n(594174), h = n(602623), N = n(630388), f = n(823379), p = n(624138), C = n(317381), g = n(638880), S = n(146936), A = n(147865), x = n(778569), O = n(513202), R = n(403404), M = n(701488), v = n(981631), L = n(689938), Z = n(337533);
let P = (0, p.Mg)(l.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function b(e) {
    var t, n, l, p;
    let {
            applicationId: b,
            message: D
        } = e, {analyticsLocations: j} = (0, u.ZP)(d.Z.ACTIVITY_BOOKMARK), U = (0, c.O)(), y = D.channel_id, B = (0, s.e7)([I.Z], () => I.Z.getChannel(y), [y]), k = null == B ? void 0 : B.guild_id, G = null != B && (B.isGuildVoice() || B.isPrivate()), F = (0, s.e7)([C.ZP], () => C.ZP.getSelfEmbeddedActivityForChannel(y)), w = (null == F ? void 0 : F.applicationId) === b, [V, H] = (0, _.Z)([
            b,
            null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : ''
        ]), Y = (0, A.Z)(null !== (l = null == V ? void 0 : V.maxParticipants) && void 0 !== l ? l : 0), [W] = (0, s.Wu)([C.ZP], () => G ? C.ZP.getEmbeddedActivitiesForChannel(y).filter(e => e.applicationId === b) : [], [
            b,
            y,
            G
        ]), z = Array.from(null !== (p = null == W ? void 0 : W.userIds) && void 0 !== p ? p : []), K = (0, s.Wu)([T.default], () => z.map(e => T.default.getUser(e)).filter(f.lm), [z]), Q = (0, x.Z)({
            applicationId: b,
            size: P,
            names: ['embedded_cover']
        }), q = E.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT), X = K.length > 0 ? L.Z.Messages.JOIN : L.Z.Messages.START, J = async () => {
            if (G) {
                if (null != W && K.length > 0)
                    await (0, g.Z)({
                        applicationId: W.applicationId,
                        currentEmbeddedApplication: H,
                        activityChannelId: y,
                        embeddedActivitiesManager: O.Z,
                        locationObject: U.location,
                        analyticsLocations: j
                    });
                else {
                    let e = B.isPrivate() && !m.Z.isCallActive(y), t = () => (0, S.Z)({
                            targetApplicationId: b,
                            currentEmbeddedApplication: H,
                            channelId: y,
                            guildId: k,
                            embeddedActivitiesManager: O.Z,
                            analyticsLocations: j
                        });
                    e ? o.Z.show({
                        title: L.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
                        cancelText: L.Z.Messages.CANCEL,
                        confirmText: L.Z.Messages.CONFIRM,
                        onConfirm: () => t(),
                        body: L.Z.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
                    }) : t();
                }
            } else
                (0, R.Z)({
                    guildId: k,
                    locationObject: U.location,
                    openInPopout: q,
                    initialSelectedApplicationId: b,
                    initialSlide: M.ag.SELECT_CHANNEL,
                    analyticsLocations: j
                });
        };
    return null != V && (0, N.yE)(V.flags, v.udG.EMBEDDED) ? (0, i.jsx)(u.Gt, {
        value: j,
        children: (0, i.jsxs)('div', {
            className: Z.container,
            children: [
                (0, i.jsx)('div', {
                    className: Z.imgContainer,
                    children: (0, i.jsx)('img', {
                        className: Z.img,
                        alt: V.name,
                        src: Q.url
                    })
                }),
                (0, i.jsxs)('div', {
                    className: Z.content,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            className: Z.heading,
                            variant: 'heading-xl/semibold',
                            children: V.name
                        }),
                        (0, i.jsx)(r.Heading, {
                            className: Z.description,
                            variant: 'heading-sm/medium',
                            children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
                        }),
                        (0, i.jsx)(r.Heading, {
                            className: Z.learnMore,
                            variant: 'heading-sm/medium',
                            children: (0, i.jsx)(a.rU, {
                                to: v.Z5c.ACTIVITY_DETAILS(b),
                                children: L.Z.Messages.LEARN_MORE
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.cta,
                            children: [
                                K.length > 0 ? (0, i.jsx)('div', {
                                    className: Z.avatars,
                                    children: (0, i.jsx)(h.Z, {
                                        guildId: k,
                                        users: K,
                                        max: 4
                                    })
                                }) : (0, i.jsxs)('div', {
                                    className: Z.maxParticipants,
                                    children: [
                                        (0, i.jsx)(r.GroupIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: Z.peopleIcon
                                        }),
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-xs/semibold',
                                            children: Y
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', {
                                    className: Z.buttonWrapper,
                                    children: (0, i.jsx)(r.Button, {
                                        onClick: J,
                                        className: Z.button,
                                        color: r.ButtonColors.GREEN,
                                        disabled: w,
                                        children: X
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }) : null;
}
