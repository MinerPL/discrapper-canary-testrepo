n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    r = n(481060),
    c = n(239091),
    d = n(434650),
    u = n(895924),
    v = n(70097),
    I = n(695346),
    _ = n(594174),
    T = n(695103),
    m = n(880448),
    C = n(823379),
    E = n(5192),
    x = n(624138),
    h = n(115130),
    g = n(147865),
    p = n(542094),
    f = n(665811),
    N = n(182906),
    S = n(556505),
    A = n(513202),
    j = n(884338),
    D = n(823531),
    b = n(689938),
    Z = n(440775),
    M = n(969728);
function y(e) {
    let { value: t, icon: n } = e;
    return (0, i.jsxs)(r.Text, {
        className: Z.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, C.lm)(n) ? (0, i.jsx)(n, { className: Z.icon }) : null, t]
    });
}
function L(e) {
    let { activity: t, application: n, channel: a, guildId: l, large: s = !1 } = e,
        c = (0, o.Wu)([_.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return _.default.getUser(t);
                })
                .filter(C.lm);
        }),
        d = E.ZP.getName(l, null == a ? void 0 : a.id, null == c ? void 0 : c[0]);
    if (((d = (0, x.aF)(d, 15)), null == t || 0 === c.length)) {
        var u, v;
        let e = ''.concat((0, g.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return (
            s && (e = null !== (v = n.description) && void 0 !== v ? v : ''),
            (0, i.jsx)(r.Text, {
                className: Z.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, i.jsxs)('div', {
        className: Z.activitySubtitleText,
        children: [
            (0, i.jsx)(r.Text, {
                className: Z.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    c.length > 1
                        ? b.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                              username: d,
                              count: c.length - 1
                          })
                        : b.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: d })
            }),
            (0, i.jsx)(j.Z, {
                size: s ? j.u.SIZE_24 : j.u.SIZE_16,
                guildId: l,
                users: c,
                max: 6
            })
        ]
    });
}
function O(e) {
    var t;
    let { activityItem: n, channel: l, guildId: _, locationObject: C, onActivityItemVisible: E, onActivityItemSelected: x, large: j = !1 } = e,
        {
            imageBackground: O,
            videoUrl: B,
            activityAction: R,
            joinableEmbeddedApp: V,
            onActivityItemSelected: k,
            labelType: H,
            staffReleasePhase: P
        } = (0, p.ZP)({
            activityItem: n,
            channel: l,
            guildId: _,
            locationObject: C,
            onActivityItemVisible: E,
            onActivityItemSelected: x,
            embeddedActivitiesManager: A.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER
        }),
        F = (0, o.e7)([h.Z, T.Z], () => h.Z.inDevModeForApplication(n.application.id) || T.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: Y } = n,
        w = a.useCallback((e) => e && (null == E ? void 0 : E({ applicationId: n.application.id })), [n.application.id, E]),
        W = (0, d.O)(w, 0.8, !0),
        [G, U] = a.useState(!1),
        [q, z] = a.useState(G);
    a.useEffect(() => {
        G && z(!0);
    }, [G]);
    let J = () => U(!0),
        K = () => U(!1),
        X = I.Sb.useSetting(),
        $ = a.useCallback(() => {
            null == k || k();
        }, [k]);
    return (0, i.jsxs)(r.Clickable, {
        onClick: R === p.JS.START ? $ : void 0,
        onContextMenu: X
            ? (e) => {
                  (0, c.vq)(e, (e) =>
                      (0, i.jsx)(D.Z, {
                          application: Y,
                          ...e
                      })
                  );
              }
            : void 0,
        className: s()(Z.activityItem, {
            [Z.large]: !0 === j,
            [Z.disabled]: R !== p.JS.START
        }),
        children: [
            (0, i.jsxs)('div', {
                ref: W,
                className: s()(Z.activityImageContainer, { [Z.large]: !0 === j }),
                onMouseEnter: J,
                onFocus: J,
                onMouseLeave: K,
                onBlur: K,
                children: [
                    (0, i.jsx)(N.Z, {
                        imageBackground: O,
                        applicationName: Y.name,
                        imageClassName: s()(Z.activityImage, { [Z.large]: !0 === j }),
                        imageNotFoundClassName: Z.brokenImageIconWrapper
                    }),
                    null != B && q && R === p.JS.START
                        ? (0, i.jsx)('div', {
                              className: s()(Z.activityVideo, { [Z.videoFadeOut]: !G }),
                              onAnimationEnd: () => (G ? null : z(!1)),
                              children: (0, i.jsx)(v.Z, {
                                  className: Z.activityVideo,
                                  src: B,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    R !== p.JS.START
                        ? (0, i.jsx)(f.U, {
                              action: R,
                              onClick: $
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: Z.overlayBadge,
                        children: (0, i.jsx)('div', {
                            className: Z.badgeContainer,
                            children: (0, i.jsx)(S.Z, {
                                name: Y.name,
                                labelType: H
                            })
                        })
                    }),
                    F
                        ? (0, i.jsx)(r.Tooltip, {
                              text: b.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: Z.devShelfBadge,
                                      ...e,
                                      children: (0, i.jsx)(m.Z, { className: Z.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: s()(Z.activityTextContainer, { [Z.large]: j }),
                children: [
                    j
                        ? (0, i.jsx)(r.Text, {
                              className: Z.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, g.ZP)(null !== (t = Y.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: Z.activityName,
                        children: [
                            (0, i.jsx)(r.Heading, {
                                className: Z.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: Y.name
                            }),
                            null != P
                                ? (0, i.jsx)(r.Tooltip, {
                                      text: P,
                                      children: (e) =>
                                          (0, i.jsx)('img', {
                                              className: Z.staffBadge,
                                              alt: P,
                                              src: M,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(L, {
                        activity: null == V ? void 0 : V.embeddedActivity,
                        application: Y,
                        channel: l,
                        guildId: _,
                        large: j
                    }),
                    (0, i.jsx)('div', {
                        className: Z.activityTagsContainer,
                        children: Y.tags.slice(0, 3).map((e) => (0, i.jsx)(y, { value: e }, 'activity-tag-'.concat(Y.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
