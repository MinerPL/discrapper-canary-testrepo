n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    l = n(442837),
    r = n(704215),
    o = n(481060),
    c = n(570140),
    u = n(230711),
    d = n(607070),
    h = n(367907),
    m = n(243778),
    p = n(543241),
    _ = n(633302),
    f = n(970731),
    E = n(594174),
    g = n(176354),
    C = n(823379),
    I = n(74538),
    x = n(401062),
    T = n(696900),
    N = n(456631),
    v = n(963838),
    S = n(535879),
    Z = n(310892),
    A = n(12168),
    M = n(353368),
    b = n(981631),
    R = n(354459),
    j = n(185923),
    L = n(474936),
    P = n(526761),
    O = n(689938),
    y = n(172108);
let D = j.Hz.CHAT,
    k = {
        section: b.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'voice_channel_effect_emoji_picker'
    },
    U = [_.ZP.getByName('thumbsup'), _.ZP.getByName('eyes'), _.ZP.getByName('laughing'), _.ZP.getByName('watermelon'), _.ZP.getByName('fork_and_knife'), _.ZP.getByName('yum')].filter(C.lm);
function w(e) {
    var t;
    let { channel: n, closePopout: _, onFocus: C } = e,
        j = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        B = I.ZP.canUseFancyVoiceChannelReactions(w),
        H = (0, l.e7)([T.Z], () => T.Z.getState().animationType),
        G = a.useRef(!1),
        V = (0, p.wC)(n.guild_id),
        F = (0, s.uniqBy)([...V, ...U], 'name')
            .filter(
                (e) =>
                    !g.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: n,
                        intention: D
                    })
            )
            .slice(0, R.e5),
        W = (null !== (t = N.Z.recentlyUsedEmojis) && void 0 !== t ? t : []).filter((e) => !F.slice(0, R.e5 - 1).some((t) => t.name === e.name));
    W.length > 0 && F.splice(F.length - 1, 1, W[0]);
    let z = (0, v.Iu)(H),
        Y = (e) => {
            c.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_RECENT_EMOJI',
                emoji: e
            }),
                (0, x.Lx)({
                    channel: n,
                    emoji: e,
                    location: x.yX.EMOJI_PICKER,
                    animationType: H,
                    animationId: z,
                    isPremium: B
                });
        },
        K = () => {
            (0, Z.openEffectsUpsellModal)({
                analytics: {
                    type: L.cd.EMOJI_PICKER_EMOJI_CLICKED,
                    object: b.qAy.BUTTON_CTA,
                    section: b.jXE.VOICE_CHANNEL_EFFECTS_BAR
                }
            });
        },
        q = (e) => {
            (G.current = e),
                e &&
                    h.ZP.trackWithMetadata(b.rMx.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
                        channel_id: X,
                        guild_id: Q
                    });
        },
        { id: X, guild_id: Q } = n;
    a.useEffect(() => {
        h.ZP.trackWithMetadata(b.rMx.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
            channel_id: X,
            guild_id: Q
        });
    }, [X, Q]);
    let J = j ? [r.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
        $ = H === M.q.PREMIUM;
    return (0, i.jsx)(m.ZP, {
        contentTypes: J,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e,
                s = j && t === r.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
            return (0, i.jsx)(o.Popout, {
                position: 'left',
                'aria-label': O.Z.Messages.VOICE_CHANNEL_EFFECTS_MORE,
                shouldShow: s,
                renderPopout: () =>
                    (0, i.jsx)('div', {
                        onMouseEnter: C,
                        children: (0, i.jsx)(f.ZP, {
                            className: y.reducedMotionTooltip,
                            header: O.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_TITLE,
                            content: O.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_BODY,
                            onClick: () => {
                                u.Z.open(b.oAB.ACCESSIBILITY, null, { scrollPosition: P.rP.REDUCED_MOTION }), _();
                            },
                            markAsDismissed: a,
                            buttonCTA: O.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CONFIRM,
                            secondaryButtonCTA: O.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CANCEL,
                            caretPosition: f.DF.RIGHT_CENTER
                        })
                    }),
                children: () =>
                    (0, i.jsx)(A.Z, {
                        title: O.Z.Messages.VOICE_CHANNEL_EFFECTS_HOTBAR_TITLE,
                        channel: n,
                        closePopout: _,
                        onSelectEmoji: Y,
                        onSelectDisabledEmoji: K,
                        onFocus: C,
                        onExpandedToggle: q,
                        analyticsOverride: k,
                        emojiSearchProps: {
                            accessory: (0, i.jsx)(S.Z, {
                                labelText: O.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                value: $,
                                onChange: () => {
                                    if (B)
                                        return (
                                            h.ZP.trackWithMetadata(b.rMx.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                                                channel_id: X,
                                                guild_id: Q,
                                                enabled: !$
                                            }),
                                            c.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE' })
                                        );
                                },
                                onShowUpsell: () =>
                                    (0, Z.openEffectsUpsellModal)({
                                        analytics: {
                                            type: G.current ? L.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : L.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                                            object: b.qAy.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                            section: G.current ? b.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : b.jXE.VOICE_CHANNEL_EFFECTS_BAR
                                        }
                                    })
                            })
                        },
                        recentlyUsedEmojis: W
                    })
            });
        }
    });
}
