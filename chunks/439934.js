n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    r = n(481060),
    c = n(239091),
    d = n(434650),
    u = n(213459),
    g = n(895924),
    m = n(70097),
    v = n(695346),
    p = n(594174),
    I = n(695103),
    x = n(880448),
    f = n(823379),
    _ = n(5192),
    T = n(624138),
    h = n(115130),
    C = n(147865),
    E = n(542094),
    S = n(665811),
    N = n(182906),
    j = n(556505),
    b = n(513202),
    A = n(884338),
    M = n(823531),
    y = n(689938),
    Z = n(325428),
    D = n(969728);
function L(e) {
    let { value: t, icon: n } = e;
    return (0, a.jsxs)(r.Text, {
        className: Z.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, f.lm)(n) ? (0, a.jsx)(n, { className: Z.icon }) : null, t]
    });
}
function O(e) {
    let { activity: t, application: n, channel: i, guildId: l, large: s = !1 } = e,
        c = (0, o.Wu)([p.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return p.default.getUser(t);
                })
                .filter(f.lm);
        }),
        d = _.ZP.getName(l, null == i ? void 0 : i.id, null == c ? void 0 : c[0]);
    if (((d = (0, T.aF)(d, 15)), null == t || 0 === c.length)) {
        var u, g;
        let e = ''.concat((0, C.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return (
            s && (e = null !== (g = n.description) && void 0 !== g ? g : ''),
            (0, a.jsx)(r.Text, {
                className: Z.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, a.jsxs)('div', {
        className: Z.activitySubtitleText,
        children: [
            (0, a.jsx)(r.Text, {
                className: Z.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    c.length > 1
                        ? y.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                              username: d,
                              count: c.length - 1
                          })
                        : y.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: d })
            }),
            (0, a.jsx)(A.Z, {
                size: s ? A.u.SIZE_24 : A.u.SIZE_16,
                guildId: l,
                users: c,
                max: 6
            })
        ]
    });
}
function B(e) {
    var t;
    let { activityItem: n, channel: l, guildId: p, locationObject: f, onActivityItemVisible: _, onActivityItemSelected: T, large: A = !1 } = e,
        {
            imageBackground: B,
            videoUrl: R,
            activityAction: V,
            joinableEmbeddedApp: P,
            onActivityItemSelected: k,
            labelType: H,
            staffReleasePhase: F
        } = (0, E.ZP)({
            activityItem: n,
            channel: l,
            guildId: p,
            locationObject: f,
            onActivityItemVisible: _,
            onActivityItemSelected: T,
            embeddedActivitiesManager: b.Z,
            commandOrigin: g.bB.APPLICATION_LAUNCHER
        }),
        U = (0, o.e7)([h.Z, I.Z], () => h.Z.inDevModeForApplication(n.application.id) || I.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: Y } = n,
        w = i.useCallback((e) => e && (null == _ ? void 0 : _({ applicationId: n.application.id })), [n.application.id, _]),
        G = (0, d.O)(w, 0.8, !0),
        [W, z] = i.useState(!1),
        [q, J] = i.useState(W);
    i.useEffect(() => {
        W && J(!0);
    }, [W]);
    let K = () => z(!0),
        X = () => z(!1),
        $ = v.Sb.useSetting(),
        Q = i.useCallback(() => {
            null == k || k(), u.ZP.maybeQueryForInstallLessApps(Y.id, null == l ? void 0 : l.id);
        }, [Y.id, null == l ? void 0 : l.id, k]);
    return (0, a.jsxs)(r.Clickable, {
        onClick: V === E.JS.START ? Q : void 0,
        onContextMenu: $
            ? (e) => {
                  (0, c.vq)(e, (e) =>
                      (0, a.jsx)(M.Z, {
                          application: Y,
                          ...e
                      })
                  );
              }
            : void 0,
        className: s()(Z.activityItem, {
            [Z.large]: !0 === A,
            [Z.disabled]: V !== E.JS.START
        }),
        children: [
            (0, a.jsxs)('div', {
                ref: G,
                className: s()(Z.activityImageContainer, { [Z.large]: !0 === A }),
                onMouseEnter: K,
                onFocus: K,
                onMouseLeave: X,
                onBlur: X,
                children: [
                    (0, a.jsx)(N.Z, {
                        imageBackground: B,
                        applicationName: Y.name,
                        imageClassName: s()(Z.activityImage, { [Z.large]: !0 === A }),
                        imageNotFoundClassName: Z.brokenImageIconWrapper
                    }),
                    null != R && q && V === E.JS.START
                        ? (0, a.jsx)('div', {
                              className: s()(Z.activityVideo, { [Z.videoFadeOut]: !W }),
                              onAnimationEnd: () => (W ? null : J(!1)),
                              children: (0, a.jsx)(m.Z, {
                                  className: Z.activityVideo,
                                  src: R,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    V !== E.JS.START
                        ? (0, a.jsx)(S.U, {
                              action: V,
                              onClick: Q
                          })
                        : null,
                    (0, a.jsx)('div', {
                        className: Z.overlayBadge,
                        children: (0, a.jsx)('div', {
                            className: Z.badgeContainer,
                            children: (0, a.jsx)(j.Z, {
                                name: Y.name,
                                labelType: H
                            })
                        })
                    }),
                    U
                        ? (0, a.jsx)(r.Tooltip, {
                              text: y.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                              children: (e) =>
                                  (0, a.jsx)('div', {
                                      className: Z.devShelfBadge,
                                      ...e,
                                      children: (0, a.jsx)(x.Z, { className: Z.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: s()(Z.activityTextContainer, { [Z.large]: A }),
                children: [
                    A
                        ? (0, a.jsx)(r.Text, {
                              className: Z.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, C.ZP)(null !== (t = Y.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, a.jsxs)('div', {
                        className: Z.activityName,
                        children: [
                            (0, a.jsx)(r.Heading, {
                                className: Z.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: Y.name
                            }),
                            null != F
                                ? (0, a.jsx)(r.Tooltip, {
                                      text: F,
                                      children: (e) =>
                                          (0, a.jsx)('img', {
                                              className: Z.staffBadge,
                                              alt: F,
                                              src: D,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(O, {
                        activity: null == P ? void 0 : P.embeddedActivity,
                        application: Y,
                        channel: l,
                        guildId: p,
                        large: A
                    }),
                    (0, a.jsx)('div', {
                        className: Z.activityTagsContainer,
                        children: Y.tags.slice(0, 3).map((e) => (0, a.jsx)(L, { value: e }, 'activity-tag-'.concat(Y.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
