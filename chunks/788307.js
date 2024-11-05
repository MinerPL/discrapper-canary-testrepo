n.d(t, {
    DD: function () {
        return D;
    },
    Iv: function () {
        return O;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(596454),
    c = n(122810),
    d = n(74433),
    f = n(750881),
    _ = n(44315),
    h = n(633302),
    p = n(574176),
    m = n(106301),
    g = n(223135),
    E = n(695346),
    v = n(314897),
    I = n(592125),
    S = n(496675),
    T = n(699516),
    b = n(979651),
    y = n(6074),
    A = n(626135),
    N = n(981631),
    C = n(23952);
let R = '14px';
function O(e) {
    let { emoji: t, className: n, animate: i = !0, hideTooltip: a, tooltipDelay: o } = e,
        c = E.Yk.useSetting(),
        d = null != t.id ? ':'.concat(t.name, ':') : h.ZP.translateSurrogatesToInlineEmoji(t.name),
        f = {
            className: s()(C.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && c && i)
        };
    return a
        ? (0, r.jsx)(u.Z, { ...f })
        : (0, r.jsx)(l.Tooltip, {
              text: d,
              delay: o,
              children: (e) =>
                  (0, r.jsx)(u.Z, {
                      ...e,
                      ...f
                  })
          });
}
let D = (e) => {
    let { className: t, text: n } = e,
        a = i.useRef(null),
        o = i.useRef(null),
        [u, c] = i.useState(!1);
    return (
        i.useLayoutEffect(() => {
            let { current: e } = a,
                { current: t } = o;
            if (null != e && null != t) c(!(e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight));
        }, [n]),
        (0, r.jsx)(l.Tooltip, {
            text: u || null == n || '' === n ? null : n,
            delay: 150,
            'aria-label': !1,
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            ...e,
                            className: t,
                            ref: a,
                            children: n
                        }),
                        (0, r.jsx)('div', {
                            className: s()(C.textRuler, t),
                            ref: o,
                            'aria-hidden': !0,
                            children: n
                        })
                    ]
                })
        })
    );
};
t.ZP = (e) => {
    let { activities: t, applicationStream: n, className: a, textClassName: s, emojiClassName: u, animate: h = !0, hideTooltip: E = !1, hideEmoji: L = !1, user: x, hasQuest: w } = e,
        M = null != t ? t.find((e) => e.type === N.IIU.CUSTOM_STATUS) : null,
        P = (0, o.e7)([v.default], () => v.default.getId() === (null == x ? void 0 : x.id)),
        k = (0, o.e7)([m.Z], () => (P ? m.Z.getHangStatusActivity() : null != t ? t.find((e) => e.type === N.IIU.HANG_STATUS) : null)),
        U = (0, o.e7)([b.Z, I.Z], () => {
            var e;
            return null != k && null != x ? I.Z.getChannel(null === (e = b.Z.getVoiceStateForUser(x.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        { enableHangStatus: G } = p.n.useExperiment(
            {
                guildId: null == U ? void 0 : U.guild_id,
                location: 'ActivityStatus'
            },
            { autoTrackExposure: !1 }
        ),
        B = (0, _.Sl)(N.Ilk.BRAND_345),
        Z = null,
        F = G && null != k && S.Z.can(N.Plq.CONNECT, U);
    F
        ? (Z = (0, r.jsx)(g.Z, {
              className: u,
              hangStatusActivity: k
          }))
        : null != M &&
          null != M.emoji &&
          !L &&
          (Z = (0, r.jsx)(O, {
              emoji: M.emoji,
              animate: h,
              hideTooltip: E,
              className: u
          }));
    let { blockeeExperimentEnabled: V, blockerExperimentEnabled: j, analyticsEligible: H } = (0, f.NR)('activity-status-web'),
        Y = (0, o.e7)([T.Z], () => (null != x ? T.Z.getRelationshipType(x.id) : N.OGo.NONE)),
        W = (0, d.Z)(t, n, void 0, F, V),
        K = (0, d.Z)(t, n, void 0, F, !1);
    i.useEffect(() => {
        if (null != K && null == K.activity && null != n && H) {
            var e;
            A.default.track(N.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: null == x ? void 0 : x.id,
                discoverable: null === (e = n.discoverable) || void 0 === e || e,
                surface: 'activity-status-web',
                relationship_type: Y,
                treatment: (V && !1 === n.discoverable) || (j && Y === N.OGo.BLOCKED) ? f.h9.HIDE : f.h9.SHOW
            });
        }
    }, [V, j, H, x, n, K, Y]);
    let z = null == W ? void 0 : W.activityText,
        q = null != z && '' !== z;
    return (j && Y === N.OGo.BLOCKED) || (null == Z && !q)
        ? null
        : (0, r.jsxs)('div', {
              className: a,
              children: [
                  Z,
                  (0, r.jsx)(D, {
                      text: z,
                      className: s
                  }),
                  w &&
                      (0, r.jsx)(l.QuestsIcon, {
                          size: 'custom',
                          className: C.questsIcon,
                          height: R,
                          width: R,
                          color: B.hex
                      }),
                  null != t && t.some((e) => (0, c.Z)(e, F))
                      ? (0, r.jsx)(y.Z, {
                            width: 16,
                            height: 16,
                            className: C.icon
                        })
                      : null
              ]
          });
};
