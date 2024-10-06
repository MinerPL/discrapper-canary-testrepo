n.d(t, {
    OV: function () {
        return D;
    },
    ZP: function () {
        return k;
    }
}),
    n(47120);
var i,
    s,
    a = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(442837),
    u = n(481060),
    d = n(2052),
    h = n(317381),
    p = n(638880),
    m = n(613611),
    _ = n(527805),
    f = n(716600),
    E = n(778569),
    g = n(563218),
    C = n(318891),
    I = n(884338),
    T = n(719296),
    x = n(958185),
    S = n(100527),
    v = n(906732),
    N = n(890280),
    A = n(835473),
    Z = n(522474),
    M = n(314897),
    b = n(819640),
    R = n(594174),
    L = n(823379),
    j = n(5192),
    P = n(689938),
    O = n(456608);
((s = i || (i = {}))[(s.SMALL = 0)] = 'SMALL'), (s[(s.MEDIUM = 1)] = 'MEDIUM'), (s[(s.LARGE = 2)] = 'LARGE');
let y = ['embedded_background'];
function D(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: s } = e,
        l = null != t ? t : u.AvatarSizes.SIZE_32,
        r = (0, u.getAvatarSize)(l);
    return (0, a.jsx)(I.Z, {
        size: r,
        guildId: n,
        users: s,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = j.ZP.getName(n, i, e);
            return (0, a.jsx)(
                u.TooltipContainer,
                {
                    text: t,
                    color: u.TooltipColors.GREY,
                    children: (0, a.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, r),
                            alt: t,
                            className: O.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function U(e) {
    var t, n, i, s;
    let { participants: r, application: f, channel: E, width: g } = e;
    let C = (i = g) > 400 ? 2 : i > 300 ? 1 : 0;
    let [I] = (s = g) > 400 ? [u.AvatarSizes.SIZE_56, 56] : s > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24],
        T = (0, c.Wu)([R.default, M.default], () =>
            Array.from(r)
                .map((e) => ((0, m.J)(e, M.default) ? null : R.default.getUser(e.userId)))
                .filter(L.lm)
        ),
        x = (0, c.e7)([h.ZP], () => h.ZP.getEmbeddedActivitiesForChannel(E.id).find((e) => e.applicationId === f.id)),
        { analyticsLocations: S } = (0, v.ZP)(),
        A = (0, d.O)(),
        Z = j.ZP.getName(E.getGuildId(), E.id, null == T ? void 0 : T[0]),
        b =
            (0, _.s5)({
                userId: null === (t = R.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: E.id,
                application: f
            }) === _.Fw.CAN_JOIN,
        y = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0,
        U = l.useId(),
        k = E.id,
        w = f.id,
        { submitting: B } = (0, N.Z)({
            applicationId: w,
            channelId: k,
            launchingComponentId: U
        });
    return (0, a.jsxs)('div', {
        className: O.splash,
        children: [
            (0, a.jsx)(D, {
                avatarSize: I,
                guildId: y,
                channelId: E.id,
                users: T
            }),
            (0, a.jsx)(u.Text, {
                className: o()(O.subheader, {
                    [O.small]: 0 === C,
                    [O.medium]: 1 === C
                }),
                variant: 'text-sm/normal',
                children:
                    T.length > 1
                        ? P.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                              username: Z,
                              count: T.length - 1
                          })
                        : P.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: Z })
            }),
            (0, a.jsx)(u.Text, {
                className: o()(O.header, {
                    [O.small]: 0 === C,
                    [O.medium]: 1 === C
                }),
                variant: 'text-sm/normal',
                children: f.name
            }),
            (0, a.jsx)('div', {
                className: O.buttons,
                children: b
                    ? (0, a.jsx)(u.Button, {
                          onClick: function (e) {
                              if ((e.stopPropagation(), null != x))
                                  (0, p.Z)({
                                      applicationId: x.applicationId,
                                      activityChannelId: E.id,
                                      locationObject: A.location,
                                      analyticsLocations: S,
                                      componentId: U
                                  });
                          },
                          submitting: B,
                          size: (function (e) {
                              switch (e) {
                                  case 2:
                                      return u.Button.Sizes.LARGE;
                                  case 1:
                                      return u.Button.Sizes.MEDIUM;
                                  case 0:
                                      return u.Button.Sizes.SMALL;
                              }
                          })(C),
                          className: O.button,
                          color: u.Button.Colors.PRIMARY,
                          children: P.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
                      })
                    : null
            })
        ]
    });
}
function k(e) {
    let { participant: t, width: n, selected: i, interactible: s, channel: r } = e,
        { analyticsLocations: o } = (0, v.ZP)(S.Z.ACTIVITY_TILE),
        { id: u } = t,
        d = (0, f.Z)(),
        h = (null == d ? void 0 : d.channelId) === r.id && d.applicationId === u,
        [p] = (0, A.Z)([u]),
        { url: m } = (0, E.Z)({
            applicationId: u,
            names: y,
            size: 1024
        }),
        _ = !i && h,
        I = !h,
        N = !h && !i,
        M = (0, c.e7)([b.Z, Z.Z], () =>
            (0, x.Z)({
                LayerStore: b.Z,
                PopoutWindowStore: Z.Z
            })
        );
    return (
        l.useEffect(() => {
            if (_ && null != d && !M) {
                let e = (0, T.Z)(d.channelId, d.applicationId);
                (0, C.jy)(e);
            }
        }, [_, d, M]),
        (0, a.jsx)(v.Gt, {
            value: o,
            children: (0, a.jsx)('div', {
                className: O.container,
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        _ &&
                            (0, a.jsx)(g.Z, {
                                className: O.iframe,
                                embedId: (0, T.Z)(r.id, u)
                            }),
                        I && null != p && null != m && '' !== m
                            ? (0, a.jsx)('img', {
                                  className: O.splashImage,
                                  alt: p.name,
                                  src: m
                              })
                            : null,
                        N &&
                            null != p &&
                            (0, a.jsx)(U, {
                                width: n,
                                channel: r,
                                participants: t.participants,
                                application: p
                            }),
                        s || I ? null : (0, a.jsx)('div', { className: O.clickShield })
                    ]
                })
            })
        })
    );
}
