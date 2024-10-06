n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120),
    n(789020);
var i = n(735250);
n(470079);
var a = n(613828),
    s = n(442837),
    l = n(477690),
    r = n(481060),
    o = n(668781),
    c = n(2052),
    d = n(100527),
    u = n(906732),
    _ = n(895924),
    E = n(835473),
    I = n(522474),
    m = n(523746),
    T = n(592125),
    N = n(594174),
    h = n(630388),
    C = n(823379),
    p = n(624138),
    f = n(317381),
    g = n(638880),
    A = n(122613),
    S = n(147865),
    M = n(778569),
    x = n(884338),
    O = n(403404),
    R = n(701488),
    v = n(981631),
    L = n(689938),
    Z = n(896219);
let P = (0, p.Mg)(l.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function D(e) {
    var t, n, l, p;
    let { applicationId: D, message: b } = e,
        { analyticsLocations: j } = (0, u.ZP)(d.Z.ACTIVITY_BOOKMARK),
        U = (0, c.O)(),
        y = b.channel_id,
        B = (0, s.e7)([T.Z], () => T.Z.getChannel(y), [y]),
        k = null == B ? void 0 : B.guild_id,
        G = null != B && (B.isGuildVoice() || B.isPrivate()),
        F = (0, s.e7)([f.ZP], () => f.ZP.getSelfEmbeddedActivityForChannel(y)),
        w = (null == F ? void 0 : F.applicationId) === D,
        [V] = (0, E.Z)([D, null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : '']),
        H = (0, S.ZP)(null !== (l = null == V ? void 0 : V.maxParticipants) && void 0 !== l ? l : 0),
        [Y] = (0, s.Wu)([f.ZP], () => (G ? f.ZP.getEmbeddedActivitiesForChannel(y).filter((e) => e.applicationId === D) : []), [D, y, G]),
        W = Array.from(null !== (p = null == Y ? void 0 : Y.userIds) && void 0 !== p ? p : []),
        K = (0, s.Wu)([N.default], () => W.map((e) => N.default.getUser(e)).filter(C.lm), [W]),
        z = (0, M.Z)({
            applicationId: D,
            size: P,
            names: ['embedded_cover']
        }),
        X = I.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT),
        Q = K.length > 0 ? L.Z.Messages.JOIN : L.Z.Messages.START,
        J = async () => {
            if (G) {
                if (null != Y && K.length > 0)
                    await (0, g.Z)({
                        applicationId: Y.applicationId,
                        activityChannelId: y,
                        locationObject: U.location,
                        analyticsLocations: j
                    });
                else {
                    let e = B.isPrivate() && !m.Z.isCallActive(y),
                        t = async () =>
                            await (0, A.Z)({
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
                (0, O.Z)({
                    guildId: k,
                    locationObject: U.location,
                    openInPopout: X,
                    initialSelectedApplicationId: D,
                    initialSlide: R.ag.SELECT_CHANNEL,
                    analyticsLocations: j
                });
        };
    return null != V && (0, h.yE)(V.flags, v.udG.EMBEDDED)
        ? (0, i.jsx)(u.Gt, {
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
                              (0, i.jsx)(r.Heading, {
                                  className: Z.heading,
                                  variant: 'heading-xl/semibold',
                                  children: V.name
                              }),
                              (0, i.jsx)(r.Heading, {
                                  className: Z.description,
                                  variant: 'heading-sm/medium',
                                  children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
                              }),
                              (0, i.jsx)(r.Heading, {
                                  className: Z.learnMore,
                                  variant: 'heading-sm/medium',
                                  children: (0, i.jsx)(a.rU, {
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
                                                children: (0, i.jsx)(x.Z, {
                                                    guildId: k,
                                                    users: K,
                                                    max: 4
                                                })
                                            })
                                          : (0, i.jsxs)('div', {
                                                className: Z.maxParticipants,
                                                children: [
                                                    (0, i.jsx)(r.GroupIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: Z.peopleIcon
                                                    }),
                                                    (0, i.jsx)(r.Text, {
                                                        variant: 'text-xs/semibold',
                                                        children: H
                                                    })
                                                ]
                                            }),
                                      (0, i.jsx)('div', {
                                          className: Z.buttonWrapper,
                                          children: (0, i.jsx)(r.Button, {
                                              onClick: J,
                                              className: Z.button,
                                              color: r.ButtonColors.GREEN,
                                              disabled: w,
                                              children: Q
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
