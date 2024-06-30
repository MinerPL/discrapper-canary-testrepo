n.d(t, {
    h: function () {
        return Z;
    }
});
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(704215), o = n(692547), c = n(481060), u = n(2052), d = n(127255), h = n(5200), p = n(403404), m = n(100527), _ = n(906732), f = n(605236), E = n(448239), C = n(626135), g = n(792125), I = n(607187), x = n(981631), T = n(701488), N = n(689938), v = n(882338), S = n(334732);
function Z(e) {
    let {
        channel: t,
        guild: n,
        width: a,
        inPopout: l,
        handleClose: s,
        userParticipantCount: r
    } = e;
    return a < 250 ? (0, i.jsx)(A, {
        channel: t,
        guild: n,
        width: a,
        inPopout: l,
        handleClose: s,
        userParticipantCount: r
    }) : r > 1 ? (0, i.jsx)(R, {
        channel: t,
        guild: n,
        width: a,
        inPopout: l,
        handleClose: s,
        userParticipantCount: r
    }) : (0, i.jsx)(M, {
        channel: t,
        guild: n,
        width: a,
        inPopout: l
    });
}
function A(e) {
    let {
            channel: t,
            inPopout: n,
            handleClose: a
        } = e, {analyticsLocations: l} = (0, _.ZP)(m.Z.VC_TILE_ACTIVITY_SHELF_BUTTON), r = (0, u.O)(), d = () => {
            (0, p.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: r.location,
                openInPopout: n,
                analyticsLocations: l,
                opensAppLauncherModal: !0
            });
        };
    return (0, i.jsx)(_.Gt, {
        value: l,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Tooltip, {
                    text: N.Z.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, i.jsx)(c.Clickable, {
                            ...n,
                            className: v.clickableTile,
                            onClick: () => {
                                null == t || t(), d();
                            },
                            children: (0, i.jsx)(I.Z, {
                                className: v.root,
                                children: (0, i.jsx)('div', {
                                    className: v.iconContainer,
                                    children: (0, i.jsx)(c.ActivitiesPlusIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 40,
                                        height: 40
                                    })
                                })
                            })
                        });
                    }
                }),
                (0, i.jsx)(c.Clickable, {
                    onClick: a,
                    className: s()((0, g.Q)(x.BRd.DARK), v.shelfButtonCloseButton),
                    children: (0, i.jsx)(c.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.closeButtonIcon,
                        secondaryColor: o.Z.colors.INTERACTIVE_NORMAL.css
                    })
                })
            ]
        })
    });
}
function M(e) {
    let {
        channel: t,
        guild: l,
        inPopout: s,
        width: r
    } = e;
    a.useEffect(() => {
        C.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let o = (0, u.O)(), {analyticsLocations: d} = (0, _.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE);
    return (0, i.jsx)(_.Gt, {
        value: d,
        children: (0, i.jsxs)(I.Z, {
            className: v.root,
            children: [
                r > 400 ? (0, i.jsx)('img', {
                    src: S,
                    className: v.art,
                    alt: N.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
                }) : null,
                (0, i.jsx)(c.Text, {
                    className: v.heading,
                    variant: 'text-md/semibold',
                    color: 'always-white',
                    children: N.Z.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_INVITE
                }),
                (0, i.jsxs)('div', {
                    className: v.buttonContainer,
                    children: [
                        (0, i.jsxs)(c.Button, {
                            size: c.Button.Sizes.LARGE,
                            color: c.Button.Colors.PRIMARY,
                            className: v.button,
                            innerClassName: v.buttonContents,
                            onClick: function () {
                                (0, c.openModalLazy)(async () => {
                                    let {default: e} = await Promise.all([
                                        n.e('7654'),
                                        n.e('17520')
                                    ]).then(n.bind(n, 560114));
                                    return n => (0, i.jsx)(e, {
                                        ...n,
                                        guild: l,
                                        channel: t,
                                        source: x.t4x.ACTIVITY_ENTRY_POINT_TILE
                                    });
                                }, { contextKey: s ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT });
                            },
                            children: [
                                (0, i.jsx)(c.FriendsIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                N.Z.Messages.INVITE_FRIENDS
                            ]
                        }),
                        (0, i.jsxs)(c.Button, {
                            size: c.Button.Sizes.LARGE,
                            className: v.button,
                            innerClassName: v.buttonContents,
                            onClick: function () {
                                (0, p.Z)({
                                    channel: t,
                                    guildId: t.guild_id,
                                    locationObject: o.location,
                                    openInPopout: s,
                                    analyticsLocations: d,
                                    opensAppLauncherModal: !0
                                });
                            },
                            children: [
                                (0, i.jsx)(c.ActivitiesIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                N.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_ENTRY_POINT_TILE_CHOOSE_AN_ACTIVITY
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
let b = e => {
    let {
            userParticipantCount: t,
            guildId: n,
            channel: i
        } = e, a = (0, d.Z)({
            guildId: n,
            channel: i
        });
    if (2 === t) {
        let e = [], t = function () {
                return [
                    T.jT,
                    T.f9,
                    T.fE
                ].filter(Boolean).slice(0, 3);
            }();
        return a.forEach(n => {
            let i = t.indexOf(n.application.id);
            !(i < 0) && (e[i] = n);
        }), e;
    }
    return a.slice(0, 3);
};
function R(e) {
    let {
        channel: t,
        guild: n,
        handleClose: l,
        width: o,
        userParticipantCount: u
    } = e;
    a.useEffect(() => {
        C.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: u
        });
    }, []);
    let d = b({
            userParticipantCount: u,
            guildId: n.id,
            channel: t
        }), {analyticsLocations: p} = (0, _.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION);
    return (0, i.jsx)(_.Gt, {
        value: p,
        children: (0, i.jsxs)(I.Z, {
            className: v.root,
            children: [
                o > 480 ? (0, i.jsx)('img', {
                    className: v.art,
                    src: S,
                    alt: N.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
                }) : null,
                o > 300 ? (0, i.jsx)(c.Text, {
                    className: v.heading,
                    variant: o > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                    children: N.Z.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_TITLE
                }) : null,
                (0, i.jsx)('div', {
                    className: s()(v.activitiesContainer, { [v.activitiesContainerSmol]: o <= 300 }),
                    children: d.map(e => (0, i.jsx)(h.Y, {
                        channel: t,
                        activityItem: e,
                        aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
                        animatedDivClass: v.activitySuggestion
                    }, e.application.id))
                }),
                (0, i.jsxs)(c.Clickable, {
                    className: v.checkboxContainer,
                    onClick: function () {
                        C.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: u
                        }), (0, f.EW)(r.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(E.Z, {}),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: N.Z.Messages.DONT_SHOW_AGAIN
                        })
                    ]
                }),
                (0, i.jsx)(c.Clickable, {
                    className: v.closeButtonContainer,
                    onClick: function () {
                        C.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: u
                        }), l();
                    },
                    children: (0, i.jsx)(c.CloseSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.closeButton
                    })
                })
            ]
        })
    });
}
