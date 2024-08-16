n.d(t, {
    Af: function () {
        return P;
    },
    An: function () {
        return H;
    },
    E6: function () {
        return V;
    },
    EE: function () {
        return w;
    },
    Gk: function () {
        return K;
    },
    Gt: function () {
        return i;
    },
    OV: function () {
        return U;
    },
    PZ: function () {
        return z;
    },
    Rg: function () {
        return W;
    },
    U9: function () {
        return Y;
    },
    XF: function () {
        return x;
    },
    Yl: function () {
        return j;
    },
    ej: function () {
        return M;
    },
    f: function () {
        return F;
    },
    m7: function () {
        return b;
    },
    n8: function () {
        return Z;
    },
    pQ: function () {
        return k;
    },
    v1: function () {
        return B;
    },
    wO: function () {
        return G;
    }
});
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(876215),
    _ = n(884439),
    E = n(705512),
    f = n(442837),
    h = n(481060),
    p = n(70956),
    m = n(823379),
    I = n(709054),
    T = n(719247),
    g = n(26033),
    S = n(22211),
    A = n(561308),
    N = n(797342),
    v = n(371991),
    O = n(206583),
    R = n(689938),
    C = n(119369);
let y = {
    [d.s.TOP_ARTIST]: [H],
    [d.s.PLAYED_GAME]: [U, w, P, Y, G, F, Z, B, k],
    [d.s.TOP_GAME]: [V],
    [d.s.WATCHED_MEDIA]: [j, W],
    [d.s.LAUNCHED_ACTIVITY]: [U, P, k]
};
((r = i || (i = {}))[(r.CARD = 0)] = 'CARD'), (r[(r.POPOUT = 1)] = 'POPOUT'), (r[(r.GAME_PROFILE = 2)] = 'GAME_PROFILE'), (r[(r.USER_PROFILE = 3)] = 'USER_PROFILE'), (r[(r.EMBED = 4)] = 'EMBED');
let D = s.createContext({});
function L() {
    return s.useContext(D);
}
function b(e) {
    let { children: t, ...n } = e;
    return (0, a.jsx)('div', {
        className: C.badgeContainer,
        ...n,
        children: t
    });
}
function M(e) {
    let { Icon: t, text: n, iconColor: r, tooltipText: i, showTooltip: s } = e,
        { defaultTextColor: o, defaultIconColor: l, location: u } = L();
    return (0, a.jsx)(h.Tooltip, {
        text: i,
        shouldShow: s,
        children: (e) =>
            (0, a.jsxs)(b, {
                ...e,
                children: [
                    (0, a.jsx)(t, {
                        size: 'xxs',
                        color: null != r ? r : l
                    }),
                    (0, a.jsx)(h.Text, {
                        variant: 'text-xs/normal',
                        color: o,
                        className: C.badgeLabel,
                        scaleFontToUserSetting: 4 === u,
                        children: n
                    })
                ]
            })
    });
}
function P(e) {
    let { entry: t } = e,
        { channel: n } = (0, S.Z)(t),
        { location: r } = L();
    return null == n || (0, m.Hi)(r, [1, 2, 3])
        ? null
        : (0, a.jsx)(M, {
              Icon: h.VoiceNormalIcon,
              text: n.name
          });
}
function U(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: i, location: s } = L(),
        o = (0, A.kr)(t) && (0, m.Hi)(s, [0, 3]),
        l = o ? h.tokens.colors.TEXT_POSITIVE : i,
        { streamPreviewUrl: u } = (0, S.Z)(t),
        c = null != u ? h.ScreenArrowIcon : (0, g.Mq)(t) ? h.ActivitiesIcon : h.GameControllerIcon;
    return (0, a.jsxs)(b, {
        children: [
            2 === s
                ? null
                : (0, a.jsx)(c, {
                      size: 'xxs',
                      color: l
                  }),
            (0, a.jsx)(v.ZP, {
                entry: t,
                textColor: o ? 'text-positive' : r,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 4 === s
            })
        ]
    });
}
function w(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: r } = L(),
        { state: i, party: s, inExperiment: o } = (0, N.n)(t);
    if (!o) return null;
    let l = (0, A.bT)(i, s);
    return null == l
        ? null
        : (0, a.jsxs)(b, {
              children: [
                  (0, a.jsx)(h.GroupIcon, {
                      size: 'xxs',
                      color: r
                  }),
                  (0, a.jsx)(h.Text, {
                      variant: 'text-xs/normal',
                      color: n,
                      lineClamp: 1,
                      children: l
                  })
              ]
          });
}
function x(e) {
    var t;
    let { entry: n, hovered: r } = e,
        { defaultTextColor: i, defaultIconColor: s, location: o } = L(),
        l = (0, f.e7)([T.Z], () => T.Z.getMatchingActivity(n));
    if ((null == l ? void 0 : l.timestamps) == null) return null;
    let u = (0, m.Hi)(o, [0, 3]),
        c = u ? h.tokens.colors.TEXT_POSITIVE : s,
        d = null === (t = l.timestamps) || void 0 === t ? void 0 : t.start;
    return (0, a.jsxs)('div', {
        className: C.badgeContainer,
        children: [
            (0, a.jsx)(h.RecordPlayerIcon, {
                size: 'xxs',
                color: c
            }),
            (0, a.jsx)(v.x3, {
                entry: null != d ? { start: d } : n,
                textColor: u ? 'text-positive' : i,
                hovered: r,
                bold: !0
            })
        ]
    });
}
function G(e) {
    let { entry: t } = e,
        { location: n } = L(),
        r = (0, m.Hi)(n, [0, 2]) ? h.tokens.colors.STATUS_POSITIVE : void 0;
    return (0, A.Ol)(t)
        ? (0, a.jsx)(M, {
              Icon: h.NewUserSimpleIcon,
              text: R.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              iconColor: r
          })
        : null;
}
function k(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (!(0, A.V5)(t)) return null;
    let r = (0, A.kr)(t),
        { text: i, tooltipText: s } = (0, A.zo)(t);
    return (0, a.jsx)(M, {
        Icon: h.TimerIcon,
        text: i,
        tooltipText: s,
        showTooltip: 0 === n && !r
    });
}
function B(e) {
    let { entry: t } = e,
        { location: n } = L(),
        r = 0 !== n,
        i = (0, A.dw)(t);
    if (null == i) return null;
    let s = (0, A.GE)(i);
    return (0, a.jsx)(M, {
        Icon: h.RetryIcon,
        showTooltip: !r,
        tooltipText: s,
        text: r ? s : R.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
    });
}
function F(e) {
    let { entry: t } = e,
        { location: n } = L(),
        r = (0, A.vU)(t);
    return (0, A.q_)(t)
        ? (0, a.jsx)(M, {
              Icon: h.FlashIcon,
              showTooltip: 0 === n,
              text: R.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({ days: r }),
              tooltipText: R.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({ days: r })
          })
        : null;
}
function V(e) {
    let { entry: t } = e,
        { location: n } = L(),
        r = 0 !== n,
        i = (0, A.yA)(t);
    if (null == i) return null;
    let s = r ? R.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : R.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
    return (0, a.jsx)(M, {
        Icon: h.TrophyIcon,
        text: (0, a.jsxs)(a.Fragment, {
            children: [R.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, r ? ' \u2014 ' : ': ', s.format({ hours: Math.round(i / p.Z.Seconds.HOUR) })]
        })
    });
}
function H(e) {
    var t;
    let { entry: n } = e,
        { location: r } = L(),
        i = null === (t = (0, A.PJ)(n, _.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
    if (null == i) return null;
    let s = (0, m.Hi)(r, [1, 4]) ? R.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({ count: i }) : R.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({ count: i });
    return (0, a.jsx)(M, {
        Icon: h.TrophyIcon,
        text: s
    });
}
function Z(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (2 === n) return null;
    let r = (0, A.ig)(t);
    return null == r || r === E.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, a.jsx)(M, {
              Icon: h.FireIcon,
              text: R.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
          });
}
function Y(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (2 === n) return null;
    let r = I.default.extractTimestamp(t.extra.application_id);
    return c()().diff(c()(r), 'days') > O.G
        ? null
        : (0, a.jsx)(M, {
              Icon: h.StarShootingIcon,
              text: R.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
          });
}
function j(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: i, location: s } = L(),
        o = (0, A.kr)(t) && 3 === s,
        l = o ? h.tokens.colors.TEXT_POSITIVE : i;
    return (0, a.jsxs)('div', {
        className: C.badgeContainer,
        children: [
            (0, a.jsx)(h.TvIcon, {
                size: 'xxs',
                color: l
            }),
            (0, a.jsx)(v.ZP, {
                entry: t,
                textColor: o ? 'text-positive' : r,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function W(e) {
    let { entry: t } = e,
        n = (0, A.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, a.jsx)(M, {
              Icon: h.TopicsIcon,
              text: n
          });
}
function K(e) {
    let t,
        { location: n, children: r, className: i } = e;
    return (
        (t = (0, m.Hi)(n, [1, 4])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: h.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
              }
            : 2 === n
              ? { defaultTextColor: 'text-muted' }
              : { defaultTextColor: 'text-secondary' }),
        (0, a.jsx)(D.Provider, {
            value: {
                location: n,
                ...t
            },
            children: (0, a.jsx)('div', {
                className: l()(
                    C.badgesContainer,
                    {
                        [C.badgesContainerCard]: 0 === n,
                        [C.badgesContainerPopout]: 1 === n,
                        [C.badgesContainerGameProfile]: 2 === n
                    },
                    i
                ),
                children: r
            })
        })
    );
}
function z(e) {
    let { entry: t, location: n, className: r } = e,
        i = (function (e) {
            switch (e.content_type) {
                case d.s.TOP_ARTIST:
                    return y[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                case d.s.PLAYED_GAME:
                    return y[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                case d.s.TOP_GAME:
                    return y[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                case d.s.WATCHED_MEDIA:
                    return y[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                case d.s.LAUNCHED_ACTIVITY:
                    return y[e.content_type].map((t, n) => (0, a.jsx)(t, { entry: e }, n));
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, a.jsx)(K, {
              location: n,
              className: r,
              children: i
          });
}
