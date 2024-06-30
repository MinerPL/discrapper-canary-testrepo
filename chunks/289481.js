n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(920906), o = n(442837), c = n(481060), d = n(570140), u = n(45114), _ = n(367907), E = n(717680), m = n(703656), I = n(592125), T = n(259580), h = n(617379), N = n(324081), f = n(305248), p = n(520116), C = n(981631), g = n(689938), S = n(385190);
let A = a.memo(function (e) {
    let {
            channel: t,
            deleteChannel: n
        } = e, s = a.useRef(null), [[l, o], c] = a.useState([
            0,
            0
        ]), d = t.deleted && l > 0;
    if (t.deleted && 0 === l && null != s.current) {
        let e = s.current.offsetHeight, t = s.current.offsetTop, n = s.current.parentElement.scrollTop, i = n > t ? e - (n - t) : e;
        c([
            e,
            e - i
        ]);
    }
    let {
            opacity: u,
            size: _
        } = (0, r.useSpring)({
            config: {
                clamp: !0,
                friction: 18,
                tension: 200
            },
            opacity: d ? 0 : 1,
            size: d ? 0 : 1,
            onRest: () => {
                n(t.channelId);
            }
        }), E = {
            opacity: u,
            height: _.to(e => d ? function (e, t, n) {
                return t + (e - t) * n;
            }(l, o, e) : 'auto')
        };
    return (0, i.jsx)(r.animated.div, {
        ref: s,
        style: E,
        children: (0, i.jsx)(x, { ...e })
    });
});
t.Z = A;
let x = a.memo(function (e) {
    let {
            channel: t,
            onJump: n,
            deleteChannel: s,
            toggle: l
        } = e, r = (0, o.e7)([I.Z], () => I.Z.getChannel(t.channelId));
    if (a.useEffect(() => {
            null != r && t.isFullyLoaded && !t.hasError && !t.collapsed && 'messages' === t.type && 0 === t.messages.length && d.Z.wait(() => {
                (0, u.In)(t.channelId, !0), s(t.channelId);
            });
        }), null == r || !t.hasLoadedAnything)
        return null;
    let E = (e, i) => {
        (0, _.yw)(C.rMx.INBOX_CHANNEL_CLICKED, {
            channel_id: t.channelId,
            guild_id: t.guildId
        });
        let a = null != i ? i : t.oldestUnreadMessageId;
        (0, m.uL)(C.Z5c.CHANNEL(t.guildId, t.channelId, 'forum' === t.type ? null : a)), n(e);
    };
    return (0, i.jsx)('div', {
        className: S.channel,
        children: (0, i.jsx)(c.HeadingLevel, {
            component: (0, i.jsxs)(N.Z, {
                channel: r,
                gotoChannel: E,
                mentionCount: t.mentionCount,
                toggleCollapsed: l,
                channelState: t,
                children: [
                    (0, i.jsx)(h.Z, { channel: r }),
                    (0, i.jsx)(O, { ...e }),
                    'nsfw' === t.type ? null : (0, i.jsx)(R, { ...e })
                ]
            }),
            children: t.collapsed ? null : 'messages' === t.type ? (0, i.jsx)(p.Z, {
                channel: t,
                channelRecord: r,
                gotoChannel: E
            }) : 'forum' === t.type ? (0, i.jsx)(f.Z, {
                channel: t,
                channelRecord: r,
                deleteChannel: s
            }) : null
        })
    });
});
function O(e) {
    let {
            channel: t,
            markChannelRead: n,
            markGuildRead: a,
            getNumUnreadChannels: s
        } = e, l = (0, E.Z)() && null != t.guildId;
    return (0, i.jsx)(c.CircleIconButton, {
        className: S.markReadButton,
        tooltip: l ? g.Z.Messages.MARK_GUILD_AS_READ : g.Z.Messages.MARK_AS_READ,
        color: c.CircleIconButtonColors.TERTIARY,
        icon: l ? (0, i.jsx)(c.DoubleCheckmarkLargeIcon, {
            size: 'xs',
            color: 'currentColor'
        }) : (0, i.jsx)(c.CheckmarkLargeIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        onClick: function () {
            l && null != t.guildId ? a(t.guildId) : n(t), (0, _.yw)(C.rMx.INBOX_CHANNEL_ACKED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                marked_all_channels_as_read: !1,
                num_unread_channels_remaining: s() - 1
            });
        }
    });
}
function R(e) {
    let {
        channel: t,
        toggle: n,
        getNumUnreadChannels: a
    } = e;
    function s() {
        n(t), (0, _.yw)(C.rMx.INBOX_CHANNEL_COLLAPSED, {
            channel_id: t.channelId,
            guild_id: t.guildId,
            num_unread_channels_remaining: a(),
            is_now_collapsed: !t.collapsed
        });
    }
    return (0, i.jsx)(c.Tooltip, {
        text: g.Z.Messages.COLLAPSE,
        children: e => (0, i.jsx)(c.Clickable, {
            ...e,
            className: l()(S.collapseButton, { [S.collapsed]: t.collapsed }),
            onClick: s,
            children: (0, i.jsx)(T.Z, {
                width: 16,
                height: 16
            })
        })
    });
}
