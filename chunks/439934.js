n.d(t, {
    Z: function () {
        return O;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(442837), o = n(481060), c = n(239091), d = n(434650), u = n(213459), g = n(695346), p = n(594174), v = n(695103), m = n(880448), x = n(602623), I = n(810090), f = n(823379), _ = n(5192), h = n(624138), T = n(115130), C = n(147865), E = n(542094), S = n(665811), j = n(182906), N = n(556505), b = n(513202), A = n(823531), M = n(689938), Z = n(398831), y = n(969728);
function D(e) {
    let {
        value: t,
        icon: n
    } = e;
    return (0, i.jsxs)(o.Text, {
        className: Z.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [
            (0, f.lm)(n) ? (0, i.jsx)(n, { className: Z.icon }) : null,
            t
        ]
    });
}
function L(e) {
    let {
            activity: t,
            application: n,
            channel: a,
            guildId: l,
            large: s = !1
        } = e, c = (0, r.Wu)([p.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
                let [t] = e;
                return p.default.getUser(t);
            }).filter(f.lm);
        }), d = _.ZP.getName(l, null == a ? void 0 : a.id, null == c ? void 0 : c[0]);
    if (d = (0, h.aF)(d, 15), null == t || 0 === c.length) {
        var u, g;
        let e = ''.concat((0, C.Z)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return s && (e = null !== (g = n.description) && void 0 !== g ? g : ''), (0, i.jsx)(o.Text, {
            className: Z.activitySubtitleText,
            variant: 'text-xs/normal',
            color: 'interactive-normal',
            children: e
        });
    }
    return (0, i.jsxs)('div', {
        className: Z.activitySubtitleText,
        children: [
            (0, i.jsx)(o.Text, {
                className: Z.usersArePlayingText,
                variant: 'text-xs/normal',
                children: c.length > 1 ? M.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                    username: d,
                    count: c.length - 1
                }) : M.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: d })
            }),
            (0, i.jsx)(x.Z, {
                size: s ? x.u.SIZE_24 : x.u.SIZE_16,
                guildId: l,
                users: c,
                max: 6
            })
        ]
    });
}
function O(e) {
    var t;
    let {
            activityItem: n,
            channel: l,
            guildId: p,
            locationObject: x,
            onActivityItemVisible: f,
            onActivityItemSelected: _,
            large: h = !1
        } = e, {
            imageBackground: O,
            videoUrl: B,
            activityAction: V,
            joinableEmbeddedApp: R,
            onActivityItemSelected: k,
            labelType: H,
            staffReleasePhase: P
        } = (0, E.ZP)({
            activityItem: n,
            channel: l,
            guildId: p,
            locationObject: x,
            onActivityItemVisible: f,
            onActivityItemSelected: _,
            embeddedActivitiesManager: b.Z
        }), F = (0, r.e7)([
            T.Z,
            v.Z
        ], () => T.Z.inDevModeForApplication(n.application.id) || v.Z.inTestModeForApplication(n.application.id), [n.application.id]), {application: U} = n, Y = a.useCallback(e => e && (null == f ? void 0 : f({ applicationId: n.application.id })), [
            n.application.id,
            f
        ]), w = (0, d.O)(Y, 0.8, !0), [G, W] = a.useState(!1), [z, q] = a.useState(G);
    a.useEffect(() => {
        G && q(!0);
    }, [G]);
    let J = () => W(!0), K = () => W(!1), X = g.Sb.useSetting(), $ = a.useCallback(() => {
            null == k || k(), u.ZP.maybeQueryForInstallLessApps(U.id, null == l ? void 0 : l.id);
        }, [
            U.id,
            null == l ? void 0 : l.id,
            k
        ]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: V === E.JS.START ? $ : void 0,
        onContextMenu: X ? e => {
            (0, c.vq)(e, e => (0, i.jsx)(A.Z, {
                application: U,
                ...e
            }));
        } : void 0,
        className: s()(Z.activityItem, {
            [Z.large]: !0 === h,
            [Z.disabled]: V !== E.JS.START
        }),
        children: [
            (0, i.jsxs)('div', {
                ref: w,
                className: s()(Z.activityImageContainer, { [Z.large]: !0 === h }),
                onMouseEnter: J,
                onFocus: J,
                onMouseLeave: K,
                onBlur: K,
                children: [
                    (0, i.jsx)(j.Z, {
                        imageBackground: O,
                        applicationName: U.name,
                        imageClassName: s()(Z.activityImage, { [Z.large]: !0 === h }),
                        imageNotFoundClassName: Z.brokenImageIconWrapper
                    }),
                    null != B && z && V === E.JS.START ? (0, i.jsx)('div', {
                        className: s()(Z.activityVideo, { [Z.videoFadeOut]: !G }),
                        onAnimationEnd: () => G ? null : q(!1),
                        children: (0, i.jsx)(I.Z, {
                            className: Z.activityVideo,
                            src: B,
                            loop: !0,
                            autoPlay: !0,
                            muted: !0
                        })
                    }) : null,
                    V !== E.JS.START ? (0, i.jsx)(S.U, {
                        action: V,
                        onClick: $
                    }) : null,
                    (0, i.jsx)('div', {
                        className: Z.overlayBadge,
                        children: (0, i.jsx)('div', {
                            className: Z.badgeContainer,
                            children: (0, i.jsx)(N.Z, {
                                name: U.name,
                                labelType: H
                            })
                        })
                    }),
                    F ? (0, i.jsx)(o.Tooltip, {
                        text: M.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                        children: e => (0, i.jsx)('div', {
                            className: Z.devShelfBadge,
                            ...e,
                            children: (0, i.jsx)(m.Z, { className: Z.devShelfIcon })
                        })
                    }) : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: s()(Z.activityTextContainer, { [Z.large]: h }),
                children: [
                    h ? (0, i.jsx)(o.Text, {
                        className: Z.activityMaxParticipantsLarge,
                        variant: 'text-xs/normal',
                        color: 'interactive-normal',
                        children: (0, C.Z)(null !== (t = U.maxParticipants) && void 0 !== t ? t : 0)
                    }) : null,
                    (0, i.jsxs)('div', {
                        className: Z.activityName,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: Z.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: U.name
                            }),
                            null != P ? (0, i.jsx)(o.Tooltip, {
                                text: P,
                                children: e => (0, i.jsx)('img', {
                                    className: Z.staffBadge,
                                    alt: P,
                                    src: y,
                                    ...e
                                })
                            }) : null
                        ]
                    }),
                    (0, i.jsx)(L, {
                        activity: null == R ? void 0 : R.embeddedActivity,
                        application: U,
                        channel: l,
                        guildId: p,
                        large: h
                    }),
                    (0, i.jsx)('div', {
                        className: Z.activityTagsContainer,
                        children: U.tags.slice(0, 3).map(e => (0, i.jsx)(D, { value: e }, 'activity-tag-'.concat(U.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
