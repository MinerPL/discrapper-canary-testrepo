l.d(n, {
    Z: function () {
        return E;
    },
    k: function () {
        return j;
    }
}), l(789020);
var a = l(735250), r = l(470079), i = l(442837), t = l(481060), s = l(933557), d = l(471445), o = l(592125), c = l(271383), u = l(430824), h = l(496675), m = l(186523), g = l(768581), C = l(630388), x = l(526120), f = l(563534), I = l(846121), Z = l(305762), _ = l(981631), v = l(372897), p = l(689938), N = l(336324);
function j(e) {
    let {
            title: n,
            emojiId: l,
            emojiName: r,
            icon: i,
            completed: s,
            Icon: d,
            ...o
        } = e, c = 'channel' === o.variant ? o.channelId : null, u = 'static' === o.variant ? o.subtitle : o.channelName, h = null != c ? g.ZP.getNewMemberActionIconURL({
            channelId: c,
            icon: i
        }) : null;
    return (0, a.jsxs)('div', {
        className: N.action,
        children: [
            null != h ? (0, a.jsx)('img', {
                src: h,
                className: N.icon,
                width: 32,
                height: 32,
                alt: '',
                'aria-hidden': !0
            }) : (0, a.jsx)(Z.Z, {
                emojiId: l,
                emojiName: r,
                size: Z.R.LARGE,
                defaultComponent: (0, a.jsx)('div', {
                    className: N.channelIconContainer,
                    children: (0, a.jsx)(d, {
                        className: N.channelIcon,
                        color: 'currentColor'
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: N.actionInfo,
                children: [
                    (0, a.jsx)(t.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != u ? (0, a.jsx)(t.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u
                    }) : null
                ]
            }),
            s ? (0, a.jsx)(t.CircleCheckIcon, {
                size: 'md',
                color: 'currentColor',
                secondaryColor: '#fff',
                className: N.checkCircleCompleted
            }) : (0, a.jsx)(m.Z, {
                className: N.checkCircle,
                width: 24,
                height: 24
            })
        ]
    });
}
function b(e) {
    var n;
    let {
            action: l,
            completed: c
        } = e, {
            channelId: u,
            title: m,
            emoji: g,
            icon: C
        } = l, {
            id: f,
            name: I
        } = null != g ? g : {}, Z = (0, i.e7)([o.Z], () => o.Z.getChannel(u)), v = (0, s.ZP)(Z, !0), p = (0, i.e7)([h.Z], () => h.Z.can(_.Plq.VIEW_CHANNEL, Z)), b = r.useCallback(() => {
            if (null == Z)
                return null;
            (0, x.gp)(Z.guild_id, Z.id);
        }, [Z]);
    if (null == Z || !p)
        return null;
    let E = null !== (n = (0, d.KS)(Z)) && void 0 !== n ? n : t.TextIcon;
    return (0, a.jsx)(t.Clickable, {
        className: N.clickableAction,
        onClick: b,
        children: (0, a.jsx)(j, {
            variant: 'channel',
            channelId: u,
            title: m,
            channelName: v,
            emojiId: f,
            emojiName: I,
            icon: C,
            completed: c,
            Icon: E
        })
    });
}
function E(e) {
    let {guildId: n} = e, l = (0, i.e7)([f.Z], () => f.Z.getNewMemberActions(n), [n]), s = (0, i.e7)([I.Z], () => I.Z.getCompletedActions(n)), d = (0, i.e7)([c.ZP], () => c.ZP.getSelfMember(n)), o = (0, i.e7)([u.Z], () => u.Z.getGuild(n));
    r.useEffect(() => {
        var e;
        null == s && (null == d ? void 0 : d.flags) != null && (0, C.yE)(null !== (e = d.flags) && void 0 !== e ? e : 0, v.q.STARTED_HOME_ACTIONS) && (0, x.Fg)(n);
    }, [
        s,
        n,
        null == d ? void 0 : d.flags
    ]);
    let h = r.useCallback(() => {
        null != o && null != o.rulesChannelId && (0, x.gp)(o.id, o.rulesChannelId);
    }, [o]);
    return null == d || null == l || 0 === l.length ? null : (0, a.jsxs)('div', {
        className: N.container,
        children: [
            (0, a.jsx)(t.Heading, {
                variant: 'heading-lg/bold',
                color: 'header-primary',
                children: p.Z.Messages.GET_STARTED
            }),
            l.map(e => (0, a.jsx)(b, {
                action: e,
                completed: (null == s ? void 0 : s[e.channelId]) === !0,
                guildId: n
            }, e.channelId)),
            (null == o ? void 0 : o.rulesChannelId) != null && (0, a.jsxs)(t.Clickable, {
                className: N.action,
                onClick: h,
                children: [
                    (0, a.jsx)('div', {
                        className: N.rulesIconContainer,
                        children: (0, a.jsx)(t.BookCheckIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: N.rulesIcon
                        })
                    }),
                    (0, a.jsx)('div', {
                        className: N.actionInfo,
                        children: (0, a.jsx)(t.Text, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: p.Z.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
                        })
                    })
                ]
            })
        ]
    });
}
