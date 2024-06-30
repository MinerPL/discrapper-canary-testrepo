n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(920906), o = n(442837), c = n(692547), u = n(481060), d = n(607070), h = n(492162), p = n(451478), _ = n(409216), f = n(934415), m = n(968847), g = n(689938), C = n(953248);
let I = {
    friction: 30,
    tension: 300
};
function E(e) {
    var t;
    let {
            guildChannels: n,
            jumpToVoiceChannels: r
        } = e, s = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, h.Z)(n.id), d = l.useCallback(e => {
            e.preventDefault(), e.stopPropagation(), r();
        }, [r]), p = null !== (t = null == s ? void 0 : s.getChannelRecords()) && void 0 !== t ? t : [], m = (0, f.c4)({
            channels: p,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: o
        });
    return (0, i.jsxs)(u.Clickable, {
        className: a()(C.bar),
        onClick: d,
        children: [
            (0, i.jsx)(u.VoiceNormalIcon, {
                size: 'custom',
                className: C.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: c.Z.unsafe_rawColors.GREEN_330.css
            }),
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/semibold',
                color: 'text-positive',
                className: C.barText,
                children: g.Z.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({ count: m.length })
            }),
            (0, i.jsx)(_.Z, {
                guildId: n.id,
                className: C.voiceChannelsUsers,
                users: m.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: u.AvatarSizes.SIZE_16
            })
        ]
    });
}
function N(e) {
    let {
            position: t,
            guildChannels: n,
            guildChannelsVersion: r,
            jumpToVoiceChannels: c,
            jumpToChannel: h
        } = e, {
            bottomBar: _,
            topBar: f
        } = (0, o.cj)([m.Z], () => m.Z.getUnreadStateForGuildId(n.id)), N = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), x = (0, o.e7)([p.Z], () => p.Z.isFocused()), {
            mode: S,
            mentionCount: Z,
            targetChannelId: v
        } = 'bottom' === t ? _ : f, T = S === m.x.HIDDEN, L = (0, s.useSpring)({
            to: { transform: T ? 'bottom' === t ? 'translateY(180%)' : 'translateY(-180%)' : 'translateY(0%)' },
            config: I,
            immediate: N || !x
        }), A = l.useCallback(e => {
            e.preventDefault(), e.stopPropagation(), null != v && h(v);
        }, [
            h,
            v
        ]);
    return (0, i.jsx)('div', {
        className: a()(C.container, {
            [C.top]: 'top' === t,
            [C.bottom]: 'bottom' === t
        }),
        children: (0, i.jsx)(s.animated.div, {
            className: C.containerPadding,
            style: L,
            'aria-hidden': T,
            children: S === m.x.HIDDEN ? (0, i.jsx)('div', { className: a()(C.bar, C.emptyBar) }) : S === m.x.UNREAD ? (0, i.jsxs)(u.Clickable, {
                className: C.bar,
                onClick: A,
                children: [
                    'bottom' === t ? (0, i.jsx)(u.ChevronSmallDownIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: C.unreadIcon,
                        height: 14,
                        width: 14
                    }) : (0, i.jsx)(u.ChevronSmallUpIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: C.unreadIcon,
                        height: 14,
                        width: 14
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: 'text-xs/semibold',
                        color: 'interactive-normal',
                        className: C.barText,
                        children: g.Z.Messages.NEW_UNREADS
                    })
                ]
            }) : S === m.x.MENTIONS ? (0, i.jsx)(u.Clickable, {
                className: a()(C.bar, C.mentionsBar),
                onClick: A,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    color: 'status-danger-text',
                    className: C.barText,
                    children: g.Z.Messages.NEW_MENTIONS_COUNT.format({ count: Z })
                })
            }) : S === m.x.VOICE_CHANNELS ? (0, i.jsx)(E, {
                jumpToVoiceChannels: c,
                guildChannels: n,
                guildChannelsVersion: r
            }) : void 0
        })
    });
}
