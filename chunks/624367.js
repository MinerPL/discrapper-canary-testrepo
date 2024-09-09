n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120),
    n(789020);
var i = n(735250);
n(470079);
var s = n(613828),
    a = n(442837),
    r = n(477690),
    l = n(481060),
    o = n(668781),
    c = n(2052),
    u = n(100527),
    d = n(906732),
    _ = n(895924),
    E = n(835473),
    I = n(522474),
    m = n(523746),
    T = n(592125),
    h = n(594174),
    N = n(630388),
    C = n(823379),
    f = n(624138),
    p = n(317381),
    g = n(638880),
    S = n(122613),
    A = n(147865),
    R = n(778569),
    O = n(884338),
    x = n(403404),
    M = n(701488),
    v = n(981631),
    L = n(689938),
    Z = n(671487);
let P = (0, f.Mg)(r.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function D(e) {
    var t, n, r, f;
    let { applicationId: D, message: b } = e,
        { analyticsLocations: j } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK),
        U = (0, c.O)(),
        y = b.channel_id,
        B = (0, a.e7)([T.Z], () => T.Z.getChannel(y), [y]),
        k = null == B ? void 0 : B.guild_id,
        G = null != B && (B.isGuildVoice() || B.isPrivate()),
        F = (0, a.e7)([p.ZP], () => p.ZP.getSelfEmbeddedActivityForChannel(y)),
        w = (null == F ? void 0 : F.applicationId) === D,
        [V] = (0, E.Z)([D, null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : '']),
        H = (0, A.ZP)(null !== (r = null == V ? void 0 : V.maxParticipants) && void 0 !== r ? r : 0),
        [Y] = (0, a.Wu)([p.ZP], () => (G ? p.ZP.getEmbeddedActivitiesForChannel(y).filter((e) => e.applicationId === D) : []), [D, y, G]),
        W = Array.from(null !== (f = null == Y ? void 0 : Y.userIds) && void 0 !== f ? f : []),
        K = (0, a.Wu)([h.default], () => W.map((e) => h.default.getUser(e)).filter(C.lm), [W]),
        z = (0, R.Z)({
            applicationId: D,
            size: P,
            names: ['embedded_cover']
        }),
        Q = I.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT),
        q = K.length > 0 ? L.Z.Messages.JOIN : L.Z.Messages.START,
        X = async () => {
            if (G) {
                if (null != Y && K.length > 0)
                    await (0, g.Z)({
                        applicationId: Y.applicationId,
                        activityChannelId: y,
                        locationObject: U.location,
                        analyticsLocations: j,
                        commandOrigin: _.bB.ACTIVITY_BOOKMARK_EMBED
                    });
                else {
                    let e = B.isPrivate() && !m.Z.isCallActive(y),
                        t = async () =>
                            await (0, S.Z)({
                                targetApplicationId: D,
                                channelId: y,
                                analyticsLocations: j,
                                commandOrigin: _.bB.ACTIVITY_BOOKMARK_EMBED
                            });
                    e
                        ? o.Z.show({
                              title: L.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
                              cancelText: L.Z.Messages.CANCEL,
                              confirmText: L.Z.Messages.CONFIRM,
                              onConfirm: () => t(),
                              body: L.Z.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
                          })
                        : t();
                }
            } else
                (0, x.Z)({
                    guildId: k,
                    locationObject: U.location,
                    openInPopout: Q,
                    initialSelectedApplicationId: D,
                    initialSlide: M.ag.SELECT_CHANNEL,
                    analyticsLocations: j
                });
        };
    return null != V && (0, N.yE)(V.flags, v.udG.EMBEDDED)
        ? (0, i.jsx)(d.Gt, {
              value: j,
              children: (0, i.jsxs)('div', {
                  className: Z.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: Z.imgContainer,
                          children: (0, i.jsx)('img', {
                              className: Z.img,
                              alt: V.name,
                              src: z.url
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: Z.content,
                          children: [
                              (0, i.jsx)(l.Heading, {
                                  className: Z.heading,
                                  variant: 'heading-xl/semibold',
                                  children: V.name
                              }),
                              (0, i.jsx)(l.Heading, {
                                  className: Z.description,
                                  variant: 'heading-sm/medium',
                                  children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
                              }),
                              (0, i.jsx)(l.Heading, {
                                  className: Z.learnMore,
                                  variant: 'heading-sm/medium',
                                  children: (0, i.jsx)(s.rU, {
                                      to: v.Z5c.ACTIVITY_DETAILS(D),
                                      children: L.Z.Messages.LEARN_MORE
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: Z.cta,
                                  children: [
                                      K.length > 0
                                          ? (0, i.jsx)('div', {
                                                className: Z.avatars,
                                                children: (0, i.jsx)(O.Z, {
                                                    guildId: k,
                                                    users: K,
                                                    max: 4
                                                })
                                            })
                                          : (0, i.jsxs)('div', {
                                                className: Z.maxParticipants,
                                                children: [
                                                    (0, i.jsx)(l.GroupIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: Z.peopleIcon
                                                    }),
                                                    (0, i.jsx)(l.Text, {
                                                        variant: 'text-xs/semibold',
                                                        children: H
                                                    })
                                                ]
                                            }),
                                      (0, i.jsx)('div', {
                                          className: Z.buttonWrapper,
                                          children: (0, i.jsx)(l.Button, {
                                              onClick: X,
                                              className: Z.button,
                                              color: l.ButtonColors.GREEN,
                                              disabled: w,
                                              children: q
                                          })
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
