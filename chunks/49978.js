n.d(t, {
    Z: function () {
        return L;
    },
    q: function () {
        return O;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(442837), s = n(481060), r = n(153867), o = n(607070), c = n(100527), d = n(906732), u = n(740492), g = n(592125), p = n(430824), v = n(496675), m = n(944486), x = n(368874), I = n(810090), f = n(566620), _ = n(317381), h = n(146936), T = n(678173), C = n(696068), E = n(361213), S = n(952561), j = n(778569), N = n(513202), b = n(412019), A = n(981631), M = n(689938), Z = n(380121);
function y(e) {
    return (0, l.e7)([
        p.Z,
        v.Z
    ], () => {
        let t = p.Z.getGuild(e);
        return null != t && v.Z.can(A.Plq.CREATE_INSTANT_INVITE, t);
    }, [e]);
}
let D = ['embedded_background'];
function L(e) {
    var t, n;
    let {
            applicationId: c,
            guildId: d,
            selectedChannelId: v,
            setSelectedChannelId: _,
            enableSelectedTextChannelInvite: h
        } = e, S = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), N = (0, l.e7)([g.Z], () => g.Z.getChannel(v)), A = (0, T.T)(null != d ? d : null, null != c ? c : '', N), [L, O] = a.useState(h && !u.ZP.disableInviteWithTextChannelActivityLaunch), B = (0, C.F)(d);
    a.useEffect(() => {
        var e;
        f.w1({ guildId: d }), _(null !== (e = (0, C.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [
        d,
        _
    ]);
    let V = null == A ? void 0 : A.activity.activity_preview_video_asset_id, R = null != V ? (0, E.Z)(null !== (t = null == A ? void 0 : A.application.id) && void 0 !== t ? t : '', V) : null, {url: k} = (0, j.Z)({
            applicationId: null !== (n = null == A ? void 0 : A.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: D
        }), H = (0, l.e7)([p.Z], () => p.Z.getGuild(d)), P = (0, l.e7)([
            g.Z,
            m.Z
        ], () => g.Z.getChannel(m.Z.getChannelId())), F = y(null != d ? d : void 0);
    if ((null == A ? void 0 : A.application) == null || null == H)
        return null;
    let U = (null == P ? void 0 : P.name) == null || (null == P ? void 0 : P.name) === '' ? M.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(P.name);
    return (0, i.jsxs)(s.Scroller, {
        className: Z.scroll,
        children: [
            null != R || null != k ? (0, i.jsx)(x.Z, {
                aspectRatio: 16 / 9,
                className: Z.imageContainer,
                children: (0, i.jsx)(I.Z, {
                    className: Z.video,
                    src: R,
                    loop: !0,
                    autoPlay: !S,
                    poster: k,
                    muted: !0
                })
            }) : null,
            (0, i.jsxs)('div', {
                className: Z.descriptionArea,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: null == A ? void 0 : A.application.name
                    }),
                    (0, i.jsx)(s.Text, {
                        className: Z.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == A ? void 0 : A.application.description
                    })
                ]
            }),
            (0, i.jsx)(s.Select, {
                placeholder: M.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                optionClassName: Z.__invalid_option,
                options: B,
                isSelected: e => {
                    let {channel: t} = e;
                    return t.id === v;
                },
                select: e => {
                    let {channel: t} = e;
                    return _(t.id);
                },
                serialize: e => {
                    let {channel: t} = e;
                    return t.id;
                },
                renderOptionValue: () => {
                    let e = B.find(e => e.value.channel.id === v);
                    return null == e ? null : (0, i.jsx)(b.O, {
                        channel: e.value.channel,
                        users: e.value.users
                    });
                },
                renderOptionLabel: e => {
                    let {
                        value: {
                            channel: t,
                            users: n
                        }
                    } = e;
                    return (0, i.jsx)(b.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            F && h ? (0, i.jsxs)(s.Clickable, {
                className: Z.checkboxContainer,
                onClick: () => {
                    let e = !L;
                    r.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), O(e);
                },
                children: [
                    (0, i.jsx)(s.Checkbox, {
                        type: s.Checkbox.Types.INVERTED,
                        className: Z.checkbox,
                        value: L,
                        displayOnly: !0
                    }),
                    (0, i.jsxs)(s.Text, {
                        variant: 'text-sm/normal',
                        children: [
                            M.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
                            ' ',
                            (0, i.jsx)('strong', { children: U })
                        ]
                    })
                ]
            }) : null
        ]
    });
}
function O(e) {
    let {
            applicationId: t,
            guildId: n,
            locationObject: a,
            onBack: r,
            onClose: o,
            selectedChannelId: p,
            enableSelectedTextChannelInvite: v
        } = e, {analyticsLocations: x} = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR), I = (0, l.e7)([g.Z], () => g.Z.getChannel(p)), C = (0, T.T)(null != n ? n : null, null != t ? t : null, I), E = (0, S.Z)(), j = (0, l.e7)([
            g.Z,
            m.Z
        ], () => g.Z.getChannel(m.Z.getChannelId())), b = (0, l.e7)([u.ZP], () => v && !u.ZP.disableInviteWithTextChannelActivityLaunch), D = (0, l.e7)([_.ZP], () => null != p && '' !== p && _.ZP.getEmbeddedActivitiesForChannel(p).some(e => e.applicationId === t)), L = y(n), O = async () => {
            var e;
            if (null != p && '' !== p && null != C && null != n && '' !== n)
                await (0, h.Z)({
                    targetApplicationId: null === (e = C.application) || void 0 === e ? void 0 : e.id,
                    currentEmbeddedApplication: E,
                    locationObject: a,
                    channelId: p,
                    guildId: n,
                    embeddedActivitiesManager: N.Z,
                    analyticsLocations: x
                }) && (o(), null != j && L && b && await f.sN({
                    activityChannelId: p,
                    invitedChannelId: j.id,
                    applicationId: C.application.id,
                    location: A.Sbl.ACTIVITY_SHELF
                }));
        };
    return (0, i.jsx)(d.Gt, {
        value: x,
        children: (0, i.jsxs)('div', {
            className: Z.footerContainer,
            children: [
                (0, i.jsx)(s.Clickable, {
                    onClick: r,
                    className: Z.backToBrowse,
                    children: (0, i.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: M.Z.Messages.BACK
                    })
                }),
                null == p ? (0, i.jsx)('div', {}) : (0, i.jsx)(s.Button, {
                    className: Z.launchButton,
                    onClick: O,
                    color: D ? s.Button.Colors.GREEN : void 0,
                    fullWidth: !0,
                    children: D ? M.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : M.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
                })
            ]
        })
    });
}
