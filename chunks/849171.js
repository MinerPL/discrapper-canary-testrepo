n.d(t, {
    OV: function () {
        return k;
    },
    ZP: function () {
        return w;
    }
}), n(47120);
var i, a, l = n(735250), s = n(470079), r = n(120356), o = n.n(r), c = n(442837), u = n(481060), d = n(2052), h = n(317381), p = n(638880), m = n(613611), _ = n(527805), f = n(716600), E = n(952561), C = n(778569), g = n(563218), I = n(513202), x = n(318891), T = n(719296), N = n(958185), v = n(100527), S = n(906732), Z = n(835473), A = n(522474), M = n(314897), b = n(819640), R = n(594174), j = n(602623), L = n(823379), P = n(5192), O = n(689938), y = n(270486);
(a = i || (i = {}))[a.SMALL = 0] = 'SMALL', a[a.MEDIUM = 1] = 'MEDIUM', a[a.LARGE = 2] = 'LARGE';
let D = ['embedded_background'];
function k(e) {
    let {
            avatarSize: t,
            guildId: n,
            channelId: i,
            users: a
        } = e, s = null != t ? t : u.AvatarSizes.SIZE_32, r = (0, u.getAvatarSize)(s);
    return (0, l.jsx)(j.Z, {
        size: r,
        guildId: n,
        users: a,
        max: 4,
        renderUser: e => {
            if (null == e)
                return null;
            let t = P.ZP.getName(n, i, e);
            return (0, l.jsx)(u.TooltipContainer, {
                text: t,
                color: u.TooltipColors.GREY,
                children: (0, l.jsx)('img', {
                    src: e.getAvatarURL(n, r),
                    alt: t,
                    className: y.avatar
                }, e.id)
            }, e.id);
        }
    });
}
function U(e) {
    var t, n, i, a;
    let {
        participants: s,
        application: r,
        currentEmbeddedApplication: f,
        channel: E,
        width: C
    } = e;
    let g = (i = C) > 400 ? 2 : i > 300 ? 1 : 0;
    let [x] = (a = C) > 400 ? [
            u.AvatarSizes.SIZE_56,
            56
        ] : a > 300 ? [
            u.AvatarSizes.SIZE_32,
            32
        ] : [
            u.AvatarSizes.SIZE_24,
            24
        ], T = (0, c.Wu)([
            R.default,
            M.default
        ], () => Array.from(s).map(e => (0, m.J)(e, M.default) ? null : R.default.getUser(e.userId)).filter(L.lm)), N = (0, c.e7)([h.ZP], () => h.ZP.getEmbeddedActivitiesForChannel(E.id).find(e => e.applicationId === r.id)), {analyticsLocations: v} = (0, S.ZP)(), Z = (0, d.O)(), A = P.ZP.getName(E.getGuildId(), E.id, null == T ? void 0 : T[0]), b = (0, _.s5)({
            userId: null === (t = R.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
            channelId: E.id,
            application: r
        }) === _.Fw.CAN_JOIN, j = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0;
    return (0, l.jsxs)('div', {
        className: y.splash,
        children: [
            (0, l.jsx)(k, {
                avatarSize: x,
                guildId: j,
                channelId: E.id,
                users: T
            }),
            (0, l.jsx)(u.Text, {
                className: o()(y.subheader, {
                    [y.small]: 0 === g,
                    [y.medium]: 1 === g
                }),
                variant: 'text-sm/normal',
                children: T.length > 1 ? O.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                    username: A,
                    count: T.length - 1
                }) : O.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: A })
            }),
            (0, l.jsx)(u.Text, {
                className: o()(y.header, {
                    [y.small]: 0 === g,
                    [y.medium]: 1 === g
                }),
                variant: 'text-sm/normal',
                children: r.name
            }),
            (0, l.jsx)('div', {
                className: y.buttons,
                children: b ? (0, l.jsx)(u.Button, {
                    onClick: function (e) {
                        if (e.stopPropagation(), null != N)
                            (0, p.Z)({
                                applicationId: N.applicationId,
                                currentEmbeddedApplication: f,
                                activityChannelId: E.id,
                                locationObject: Z.location,
                                embeddedActivitiesManager: I.Z,
                                analyticsLocations: v
                            });
                    },
                    size: function (e) {
                        switch (e) {
                        case 2:
                            return u.Button.Sizes.LARGE;
                        case 1:
                            return u.Button.Sizes.MEDIUM;
                        case 0:
                            return u.Button.Sizes.SMALL;
                        }
                    }(g),
                    className: y.button,
                    color: u.Button.Colors.PRIMARY,
                    children: O.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
                }) : null
            })
        ]
    });
}
function w(e) {
    let {
            participant: t,
            width: n,
            selected: i,
            interactible: a,
            channel: r
        } = e, {analyticsLocations: o} = (0, S.ZP)(v.Z.ACTIVITY_TILE), {id: u} = t, d = (0, f.Z)(), h = (null == d ? void 0 : d.channelId) === r.id && d.applicationId === u, p = (0, E.Z)(), [m] = (0, Z.Z)([u]), {url: _} = (0, C.Z)({
            applicationId: u,
            names: D,
            size: 1024
        }), I = !i && h, M = !h, R = !h && !i, j = (0, c.e7)([
            b.Z,
            A.Z
        ], () => (0, N.Z)({
            LayerStore: b.Z,
            PopoutWindowStore: A.Z
        }));
    return s.useEffect(() => {
        if (I && null != d && !j) {
            let e = (0, T.Z)(d.channelId, d.applicationId);
            (0, x.jy)(e);
        }
    }, [
        I,
        d,
        j
    ]), (0, l.jsx)(S.Gt, {
        value: o,
        children: (0, l.jsx)('div', {
            className: y.container,
            children: (0, l.jsxs)(l.Fragment, {
                children: [
                    I && (0, l.jsx)(g.Z, {
                        className: y.iframe,
                        embedId: (0, T.Z)(r.id, u)
                    }),
                    M && null != m && null != _ && '' !== _ ? (0, l.jsx)('img', {
                        className: y.splashImage,
                        alt: m.name,
                        src: _
                    }) : null,
                    R && null != m && (0, l.jsx)(U, {
                        width: n,
                        channel: r,
                        participants: t.participants,
                        application: m,
                        currentEmbeddedApplication: p
                    }),
                    a || M ? null : (0, l.jsx)('div', { className: y.clickShield })
                ]
            })
        })
    });
}
