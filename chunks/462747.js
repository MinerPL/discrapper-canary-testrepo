t.d(n, {
    Z: function () {
        return L;
    }
});
var i = t(735250);
t(470079);
var l = t(120356), a = t.n(l), r = t(442837), o = t(481060), c = t(239091), s = t(129861), d = t(939863), u = t(484459), _ = t(103575), f = t(314897), g = t(158776), v = t(885110), h = t(594174), b = t(315416), I = t(765305), m = t(689938), p = t(590311);
function x(e) {
    let {children: n} = e;
    return (0, i.jsxs)('div', {
        className: p.emptyContainer,
        children: [
            (0, i.jsx)(d.Z, {
                children: (0, i.jsx)('div', {
                    className: p.circle,
                    children: (0, i.jsx)(o.GroupIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: p.icon
                    })
                })
            }),
            n
        ]
    });
}
function E() {
    return (0, i.jsx)(x, {
        children: (0, i.jsx)(o.Heading, {
            color: 'header-primary',
            variant: 'heading-xl/semibold',
            className: p.title,
            children: m.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
        })
    });
}
function N() {
    return (0, i.jsx)(x, {
        children: (0, i.jsx)(o.Heading, {
            color: 'header-secondary',
            variant: 'heading-md/semibold',
            className: p.errorTitle,
            children: m.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
        })
    });
}
function C(e) {
    let {count: n} = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: p.listRow,
            children: [
                (0, i.jsx)('div', {
                    className: a()(p.listRowCircle, p.listAvatar),
                    children: (0, i.jsx)(o.GroupIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 14,
                        width: 14,
                        className: p.icon
                    })
                }),
                (0, i.jsx)(o.Text, {
                    color: 'text-normal',
                    variant: 'text-md/normal',
                    children: m.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({ userRemainCount: n })
                })
            ]
        })
    });
}
function T(e) {
    let {
            eventUser: n,
            guildId: t,
            onContextMenu: l
        } = e, c = (0, r.e7)([h.default], () => h.default.getUser(n.user_id)), d = (0, r.e7)([
            v.Z,
            g.Z,
            f.default
        ], () => n.user_id === f.default.getId() ? v.Z.getStatus() : g.Z.getStatus(n.user_id, t), [
            n.user_id,
            t
        ]);
    return null == c ? null : (0, i.jsx)(o.Popout, {
        preload: () => (0, u.W)(c.id, c.getAvatarURL(t, 80), { guildId: t }),
        renderPopout: e => (0, i.jsx)(_.Z, {
            ...e,
            location: 'EventDetailRsvpTab',
            userId: n.user_id,
            guildId: t
        }),
        position: 'left',
        spacing: 16,
        children: (e, r) => {
            var u;
            let {isShown: _} = r;
            return (0, i.jsxs)(o.Clickable, {
                className: a()(p.listRow, p.interactiveRow, { [p.selected]: _ }),
                onContextMenu: e => l(e, c),
                ...e,
                children: [
                    (0, i.jsx)(o.Avatar, {
                        src: c.getAvatarURL(t, 24),
                        'aria-label': c.username,
                        size: o.AvatarSizes.SIZE_24,
                        className: p.listAvatar,
                        status: d
                    }),
                    (0, i.jsx)(s.Z, {
                        user: c,
                        className: p.listName,
                        discriminatorClass: p.listDiscriminator,
                        nick: null === (u = n.member) || void 0 === u ? void 0 : u.nick
                    })
                ]
            });
        }
    });
}
function Z(e) {
    let {
        eventUsers: n,
        guildId: t,
        usersNotShownCount: l = 0,
        onContextMenu: a
    } = e;
    return (0, i.jsxs)(o.ScrollerThin, {
        className: p.listScroller,
        children: [
            n.map(e => (0, i.jsx)(T, {
                guildId: t,
                eventUser: e,
                onContextMenu: a
            }, e.user_id)),
            l > 0 && (0, i.jsx)(C, { count: l })
        ]
    });
}
function j(e) {
    let {
        children: n,
        style: t
    } = e;
    return (0, i.jsx)('div', {
        className: p.container,
        style: null != t ? t : {},
        children: n
    });
}
function S(e) {
    let {
        children: n,
        height: t
    } = e;
    return (0, i.jsx)(j, {
        style: { height: t },
        children: n
    });
}
function L(e) {
    let {
            guildEvent: n,
            recurrenceId: l,
            eventUsers: a,
            loading: r,
            error: s,
            containerHeight: d
        } = e, u = (0, b.Z)(n.guild_id, n.id, l);
    if (r && 0 === a.length)
        return (0, i.jsx)(S, {
            height: d,
            children: (0, i.jsx)(o.Spinner, {
                type: o.Spinner.Type.SPINNING_CIRCLE,
                className: p.spinner
            })
        });
    if (null != s && 0 === a.length)
        return (0, i.jsx)(S, {
            height: d,
            children: (0, i.jsx)(N, {})
        });
    let _ = 0;
    return a.length >= I.rC && u > I.rC && (_ = Math.max(u - a.length, 0)), 0 === a.length ? (0, i.jsx)(S, {
        height: d,
        children: (0, i.jsx)(E, {})
    }) : (0, i.jsx)(j, {
        children: (0, i.jsx)(Z, {
            eventUsers: a,
            guildId: n.guild_id,
            onContextMenu: function (e, n) {
                (0, c.jW)(e, async () => {
                    let {default: e} = await Promise.all([
                        t.e('79695'),
                        t.e('17400'),
                        t.e('13660')
                    ]).then(t.bind(t, 881351));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        user: n
                    });
                });
            },
            usersNotShownCount: _
        })
    });
}
