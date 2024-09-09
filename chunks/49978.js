n.d(t, {
    Z: function () {
        return D;
    },
    q: function () {
        return L;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(442837),
    s = n(481060),
    o = n(153867),
    r = n(607070),
    c = n(100527),
    d = n(906732),
    u = n(895924),
    g = n(264165),
    m = n(70097),
    v = n(740492),
    p = n(592125),
    I = n(430824),
    x = n(496675),
    f = n(944486),
    _ = n(566620),
    T = n(317381),
    h = n(122613),
    C = n(678173),
    E = n(696068),
    S = n(361213),
    N = n(778569),
    j = n(412019),
    b = n(981631),
    A = n(689938),
    M = n(617010);
function y(e) {
    return (0, l.e7)(
        [I.Z, x.Z],
        () => {
            let t = I.Z.getGuild(e);
            return null != t && x.Z.can(b.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let Z = ['embedded_background'];
function D(e) {
    var t, n;
    let { applicationId: c, guildId: d, selectedChannelId: u, setSelectedChannelId: x, enableSelectedTextChannelInvite: T } = e,
        h = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        b = (0, C.T)(null != d ? d : null, null != c ? c : null),
        [D, L] = i.useState(T && !v.ZP.disableInviteWithTextChannelActivityLaunch),
        O = (0, E.F)(d);
    i.useEffect(() => {
        var e;
        _.w1({ guildId: d }), x(null !== (e = (0, E.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, x]);
    let B = null == b ? void 0 : b.activity.activity_preview_video_asset_id,
        R = null != B ? (0, S.Z)(null !== (t = null == b ? void 0 : b.application.id) && void 0 !== t ? t : '', B) : null,
        { url: V } = (0, N.Z)({
            applicationId: null !== (n = null == b ? void 0 : b.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: Z
        }),
        P = (0, l.e7)([I.Z], () => I.Z.getGuild(d)),
        k = (0, l.e7)([p.Z, f.Z], () => p.Z.getChannel(f.Z.getChannelId())),
        H = y(null != d ? d : void 0);
    if ((null == b ? void 0 : b.application) == null || null == P) return null;
    let F = (null == k ? void 0 : k.name) == null || (null == k ? void 0 : k.name) === '' ? A.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(k.name);
    return (0, a.jsxs)(s.Scroller, {
        className: M.scroll,
        children: [
            null != R || null != V
                ? (0, a.jsx)(g.Z, {
                      aspectRatio: 16 / 9,
                      className: M.imageContainer,
                      children: (0, a.jsx)(m.Z, {
                          className: M.video,
                          src: R,
                          loop: !0,
                          autoPlay: !h,
                          poster: V,
                          muted: !0
                      })
                  })
                : null,
            (0, a.jsxs)('div', {
                className: M.descriptionArea,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: null == b ? void 0 : b.application.name
                    }),
                    (0, a.jsx)(s.Text, {
                        className: M.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == b ? void 0 : b.application.description
                    })
                ]
            }),
            (0, a.jsx)(s.Select, {
                placeholder: A.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                optionClassName: M.__invalid_option,
                options: O,
                isSelected: (e) => {
                    let { channel: t } = e;
                    return t.id === u;
                },
                select: (e) => {
                    let { channel: t } = e;
                    return x(t.id);
                },
                serialize: (e) => {
                    let { channel: t } = e;
                    return t.id;
                },
                renderOptionValue: () => {
                    let e = O.find((e) => e.value.channel.id === u);
                    return null == e
                        ? null
                        : (0, a.jsx)(j.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, a.jsx)(j.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            H && T
                ? (0, a.jsxs)(s.Clickable, {
                      className: M.checkboxContainer,
                      onClick: () => {
                          let e = !D;
                          o.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), L(e);
                      },
                      children: [
                          (0, a.jsx)(s.Checkbox, {
                              type: s.Checkbox.Types.INVERTED,
                              className: M.checkbox,
                              value: D,
                              displayOnly: !0
                          }),
                          (0, a.jsxs)(s.Text, {
                              variant: 'text-sm/normal',
                              children: [A.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, ' ', (0, a.jsx)('strong', { children: F })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function L(e) {
    let { applicationId: t, guildId: n, locationObject: i, onBack: o, onClose: r, selectedChannelId: g, enableSelectedTextChannelInvite: m } = e,
        { analyticsLocations: I } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
        x = (0, C.T)(null != n ? n : null, null != t ? t : null),
        E = (0, l.e7)([p.Z, f.Z], () => p.Z.getChannel(f.Z.getChannelId())),
        S = (0, l.e7)([v.ZP], () => m && !v.ZP.disableInviteWithTextChannelActivityLaunch),
        N = (0, l.e7)([T.ZP], () => null != g && '' !== g && T.ZP.getEmbeddedActivitiesForChannel(g).some((e) => e.applicationId === t)),
        j = y(n),
        Z = async () => {
            var e;
            if (null != g && '' !== g && null != x && null != n && '' !== n)
                (await (0, h.Z)({
                    targetApplicationId: null === (e = x.application) || void 0 === e ? void 0 : e.id,
                    locationObject: i,
                    channelId: g,
                    analyticsLocations: I,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                    (r(),
                    null != E &&
                        j &&
                        S &&
                        (await _.sN({
                            activityChannelId: g,
                            invitedChannelId: E.id,
                            applicationId: x.application.id,
                            location: b.Sbl.ACTIVITY_SHELF
                        })));
        };
    return (0, a.jsx)(d.Gt, {
        value: I,
        children: (0, a.jsxs)('div', {
            className: M.footerContainer,
            children: [
                (0, a.jsx)(s.Clickable, {
                    onClick: o,
                    className: M.backToBrowse,
                    children: (0, a.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: A.Z.Messages.BACK
                    })
                }),
                null == g
                    ? (0, a.jsx)('div', {})
                    : (0, a.jsx)(s.Button, {
                          className: M.launchButton,
                          onClick: Z,
                          color: N ? s.Button.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: N ? A.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : A.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
                      })
            ]
        })
    });
}
