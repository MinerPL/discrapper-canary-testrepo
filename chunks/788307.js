n.d(t, {
    I: function () {
        return L;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(596454),
    c = n(122810),
    d = n(74433),
    _ = n(750881),
    E = n(44315),
    f = n(633302),
    h = n(574176),
    p = n(106301),
    I = n(223135),
    m = n(695346),
    T = n(314897),
    S = n(592125),
    g = n(496675),
    A = n(158776),
    N = n(979651),
    O = n(6074),
    R = n(981631),
    v = n(23952);
let C = '14px';
function L(e) {
    let { emoji: t, className: n, animate: i = !0, hideTooltip: a, tooltipDelay: o } = e,
        c = m.Yk.useSetting(),
        d = null != t.id ? ':'.concat(t.name, ':') : f.ZP.translateSurrogatesToInlineEmoji(t.name),
        _ = {
            className: s()(v.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && c && i)
        };
    return a
        ? (0, r.jsx)(u.Z, { ..._ })
        : (0, r.jsx)(l.Tooltip, {
              text: d,
              delay: o,
              children: (e) =>
                  (0, r.jsx)(u.Z, {
                      ...e,
                      ..._
                  })
          });
}
let y = (e) => {
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
                            className: s()(v.textRuler, t),
                            ref: o,
                            'aria-hidden': !0,
                            children: n
                        })
                    ]
                })
        })
    );
};
t.Z = (e) => {
    let { activities: t, applicationStream: n, className: i, textClassName: a, emojiClassName: s, animate: u = !0, hideTooltip: f = !1, hideEmoji: m = !1, user: D, hasQuest: b } = e,
        M = null != t ? t.find((e) => e.type === R.IIU.CUSTOM_STATUS) : null,
        P = (0, o.e7)([T.default], () => T.default.getId() === (null == D ? void 0 : D.id)),
        U = (0, o.e7)([p.Z], () => (P ? p.Z.getHangStatusActivity() : null != t ? t.find((e) => e.type === R.IIU.HANG_STATUS) : null)),
        w = (0, o.e7)([N.Z, S.Z], () => {
            var e;
            return null != U && null != D ? S.Z.getChannel(null === (e = N.Z.getVoiceStateForUser(D.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        { enableHangStatus: x } = h.n.useExperiment(
            {
                guildId: null == w ? void 0 : w.guild_id,
                location: 'ActivityStatus'
            },
            { autoTrackExposure: !1 }
        ),
        G = (0, E.Sl)(R.Ilk.BRAND_345),
        k = null,
        B = x && null != U && g.Z.can(R.Plq.CONNECT, w);
    B
        ? (k = (0, r.jsx)(I.Z, {
              className: s,
              hangStatusActivity: U
          }))
        : null != M &&
          null != M.emoji &&
          !m &&
          (k = (0, r.jsx)(L, {
              emoji: M.emoji,
              animate: u,
              hideTooltip: f,
              className: s
          }));
    let F = (0, _.aK)('activity-status-web'),
        V = (0, o.e7)([A.Z], () => (null != D ? A.Z.getStatus(D.id) : null)),
        H = null !== V && [R.Skl.OFFLINE, R.Skl.INVISIBLE].includes(V),
        Z = (0, d.Z)(t, n, void 0, B, F),
        Y = null == Z ? void 0 : Z.activityText,
        j = null != Y && '' !== Y;
    return H || (null == k && !j)
        ? null
        : (0, r.jsxs)('div', {
              className: i,
              children: [
                  k,
                  (0, r.jsx)(y, {
                      text: Y,
                      className: a
                  }),
                  b &&
                      (0, r.jsx)(l.QuestsIcon, {
                          size: 'custom',
                          className: v.questsIcon,
                          height: C,
                          width: C,
                          color: G.hex
                      }),
                  null != t && t.some((e) => (0, c.Z)(e, B))
                      ? (0, r.jsx)(O.Z, {
                            width: 16,
                            height: 16,
                            className: v.icon
                        })
                      : null
              ]
          });
};
