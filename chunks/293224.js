n.d(t, {
    L: function () {
        return ed;
    },
    N3: function () {
        return er;
    },
    Ox: function () {
        return ei;
    },
    SE: function () {
        return eo;
    },
    aG: function () {
        return es;
    },
    c_: function () {
        return ea;
    },
    sm: function () {
        return el;
    }
});
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    a = n(685072),
    u = n(400354),
    c = n(652844),
    d = n(864094),
    h = n(582019),
    f = n(75735),
    p = n(481060),
    m = n(846027),
    v = n(239091),
    g = n(287734),
    E = n(40851),
    _ = n(100527),
    C = n(906732),
    S = n(571250),
    x = n(628581),
    Z = n(659580),
    I = n(793865),
    y = n(55311),
    b = n(575175),
    N = n(933557),
    O = n(471445),
    T = n(74299),
    L = n(803647),
    k = n(565138),
    A = n(917405),
    w = n(603074),
    R = n(879815),
    j = n(189771),
    M = n(294629),
    z = n(67844),
    D = n(544384),
    P = n(892807),
    U = n(560688),
    V = n(199902),
    W = n(592125),
    B = n(430824),
    F = n(131951),
    H = n(19780),
    G = n(944486),
    Y = n(594174),
    K = n(979651),
    Q = n(823379),
    X = n(388627),
    J = n(46145),
    q = n(981631),
    $ = n(388032),
    ee = n(474263);
function et(e) {
    let t = o.useRef(null);
    return (
        o.useEffect(() => {
            if (e) {
                var n;
                null === (n = t.current) || void 0 === n || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function en(e) {
    let { isToggled: t, disabled: n, cutoutIcon: o, icon: r, tooltip: s, defaultColor: a = p.Button.Colors.TRANSPARENT, highlightedColor: u = p.Button.Colors.WHITE, onClick: c, onCutoutClick: d, onMouseEnter: h, onMouseLeave: f, onContextMenu: m } = e;
    return (0, i.jsx)(p.Tooltip, {
        text: s,
        'aria-label': !1,
        children: (e) => {
            let { onMouseEnter: s, onMouseLeave: v, ...g } = e;
            return (0, i.jsxs)(p.Button, {
                ...g,
                onClick: c,
                size: p.Button.Sizes.SMALL,
                color: t ? u : a,
                className: ee.button,
                disabled: n,
                onMouseEnter: (e) => {
                    null == s || s(), null == h || h(e);
                },
                onMouseLeave: (e) => {
                    null == v || v(), null == f || f(e);
                },
                onContextMenu: m,
                children: [
                    r,
                    null != o &&
                        (0, i.jsx)(p.Clickable, {
                            onClick: (e) => {
                                e.stopPropagation(), e.preventDefault(), null == d || d(e);
                            },
                            className: l()(ee.cutoutContainer, t && ee.toggledCutoutContainer),
                            children: o
                        })
                ]
            });
        }
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: r, selfMute: l, mute: s } = (0, M.Z)(t),
        a = l || s || r,
        u = (0, x.Z)(l, s, r, !1),
        { Component: d, play: h, events: f } = (0, c.O)(a ? 'unmute' : 'mute');
    o.useEffect(() => () => h(), [h, a]);
    let m = et(n);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
                onClose: m(t),
                renderInputDevices: !0,
                renderOutputDevices: !0,
                renderInputModes: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(d, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: u,
                isToggled: !a,
                onClick: () => (0, b.Z)(s, r, q.jXE.OVERLAY),
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: () => {
                    f.onMouseEnter();
                },
                onMouseLeave: () => {
                    f.onMouseLeave();
                },
                cutoutIcon: o
                    ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                    : (0, i.jsx)(p.ChevronSmallDownIcon, {
                          color: 'currentColor',
                          size: 'sm'
                      })
            });
        }
    });
}
function eo(e) {
    let { voiceChannel: t } = e,
        { selfDeaf: r, deaf: l } = (0, R.Z)(t),
        s = r || l,
        {
            Component: a,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, u.l)(s ? 'undeafen' : 'deafen'),
        f = l ? p.HeadphonesDenyIcon : a,
        { analyticsLocations: m } = (0, C.ZP)(_.Z.OVERLAY);
    return (
        o.useEffect(() => () => c(), [s, c]),
        (0, i.jsx)(en, {
            icon: (0, i.jsx)(f, {
                color: 'currentColor',
                size: 'sm'
            }),
            tooltip: (0, S.Z)(r, l, !1),
            isToggled: s,
            onClick: () => {
                (0, y.Z)(l, q.jXE.OVERLAY);
            },
            onCutoutClick: (e) => {
                (0, v.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(C.Gt, {
                            value: m,
                            children: (0, i.jsx)(e, {
                                onClose: v.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            },
            onMouseEnter: d,
            onMouseLeave: h
        })
    );
}
function er(e) {
    var t;
    let { voiceChannel: n, locked: r } = e,
        l = (0, s.e7)([F.Z], () => F.Z.isVideoEnabled()),
        a = (0, s.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
        u = null === (t = null == a ? void 0 : a.disabled) || void 0 === t || t,
        c = !1 === u,
        d = (0, j.Z)(n),
        h = (e) => {
            m.Z.setVideoEnabled(e);
        },
        v = () => {
            c ? h(!0) : (0, U.Z)();
        },
        g = u ? () => v() : () => h(!l),
        {
            Component: E,
            play: _,
            events: { onMouseEnter: C, onMouseLeave: S }
        } = (0, f.o)(l ? 'disable' : 'enable'),
        x =
            null != n
                ? (0, z.X)({
                      enabled: l,
                      cameraUnavailable: u,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    o.useEffect(() => () => _(), [l, _]);
    let Z = et(r),
        y = null == n || !d;
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.Z, { onClose: Z(t) });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(E, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: x,
                onClick: g,
                isToggled: l,
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: C,
                onMouseLeave: S,
                cutoutIcon: y
                    ? null
                    : o
                      ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        })
                      : (0, i.jsx)(p.ChevronSmallDownIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        }),
                disabled: y
            });
        }
    });
}
function el(e) {
    let t,
        { voiceChannel: r, locked: l } = e,
        a = null == r ? void 0 : r.id,
        u = (0, s.e7)([Y.default], () => Y.default.getCurrentUser()),
        c = (0, j.Z)(r),
        h = (0, s.cj)([F.Z], () => (0, T.Z)(F.Z)),
        f = (0, s.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
        m = (0, E.bp)(),
        v = null == r ? void 0 : r.getGuildId(),
        g = o.useCallback(() => {
            h &&
                null != a &&
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('46746'), n.e('19942')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: v,
                            analyticsLocation: q.Sbl.UNLOCKED_OVERLAY
                        });
                });
        }, [h, v, a]),
        _ = null != f;
    if (_) t = $.intl.string($.t.S5anIS);
    else if (null != r) {
        let e = (0, X.pL)();
        t = c ? (null != e ? $.intl.format($.t.AB5gT0, { game: e.name }) : $.intl.string($.t.FeUKeH)) : $.intl.string($.t.uQn9Bw);
    }
    let C = () => {
            if (_) return (0, L.Z)(f, !1);
            g();
        },
        {
            Component: S,
            events: { onMouseEnter: x, onMouseLeave: Z },
            play: I
        } = (0, d.P)(_ ? 'disable' : 'enable');
    o.useEffect(() => () => I(), [_, I]);
    let y = et(l);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != r
                ? (0, i.jsx)(D.Z, {
                      channel: r,
                      currentUser: u,
                      activeStreams: null != f ? [f] : [],
                      handleGoLive: g,
                      onClose: y(t),
                      appContext: m
                  })
                : (0, i.jsx)(i.Fragment, {});
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: o } = e,
                { isShown: r } = n;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(S, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: t,
                isToggled: _,
                cutoutIcon:
                    null != f
                        ? r
                            ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(p.ChevronSmallDownIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : null,
                onClick: C,
                onCutoutClick: o,
                onContextMenu: o,
                onMouseEnter: x,
                onMouseLeave: Z,
                disabled: !h || !c
            });
        }
    });
}
function es(e) {
    var t;
    let { voiceChannel: o, locked: r } = e,
        l = null !== (t = null == o ? void 0 : o.getGuildId()) && void 0 !== t ? t : null,
        { mute: a, suppress: u } = (0, M.Z)(o),
        c = (0, s.e7)([F.Z], () => F.Z.isDeaf()),
        d = null == o || a || u || c;
    function f(e) {
        null != l &&
            (0, v.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: l,
                        ...t
                    });
            });
    }
    let {
            Component: m,
            events: { onClick: g, onMouseEnter: E, onMouseLeave: _ }
        } = (0, h.j)(),
        C = et(r);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == o
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(w.Z, {
                      guildId: l,
                      channel: o,
                      onClose: C(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(m, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: (function () {
                    if (a) return $.intl.string($.t['Ox4/zc']);
                    if (u) return $.intl.string($.t['+YBKYG']);
                    if (c) return $.intl.string($.t.X1lQlp);
                })(),
                onClick: (e) => {
                    g(), n(e);
                },
                onContextMenu: f,
                onMouseEnter: E,
                onMouseLeave: _,
                isToggled: o,
                disabled: d
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        o = (0, s.e7)([G.Z], () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        r = (0, s.Wu)([J.Z, W.Z], () =>
            J.Z.getChannelHistory()
                .map((e) => W.Z.getChannel(e))
                .filter(Q.lm)
                .filter((e) => e.isVocal())
        ),
        l = () => {
            o && g.default.disconnect();
        },
        u = (e) => {
            g.default.selectVoiceChannel(e.id);
        },
        {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, a.K)(),
        f = et(n);
    return (0, i.jsx)(p.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return r.length > 0
                ? (0, i.jsx)(P.Z, {
                      recentVoiceChannels: r,
                      currentVoiceChannel: t,
                      onClose: f(n),
                      onSelect: u
                  })
                : (0, i.jsx)(i.Fragment, {});
        },
        align: 'center',
        position: 'top',
        animation: p.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: s } = n;
            return (0, i.jsx)(en, {
                icon: (0, i.jsx)(c, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: null != t ? $.intl.string($.t['6vrfgo']) : $.intl.string($.t.S0W8Z2),
                onClick: o ? l : r,
                defaultColor: o ? p.Button.Colors.RED : p.Button.Colors.TRANSPARENT,
                onMouseEnter: d,
                onMouseLeave: h,
                onContextMenu: r,
                isToggled: s
            });
        }
    });
}
function eu(e) {
    let { voiceChannel: t } = e,
        n = (0, s.e7)([B.Z], () => B.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: ee.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: ee.guildIconContainer,
                        children: [
                            (0, i.jsx)(k.Z, {
                                guild: n,
                                size: k.Z.Sizes.SMOL,
                                className: ee.guildIcon
                            }),
                            (0, i.jsx)(p.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                children: n.name
                            })
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = (0, O.KS)(t),
        o = (0, N.ZP)(t);
    return (0, i.jsxs)('div', {
        className: ee.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(p.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: ee.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
            (0, i.jsx)(p.Text, {
                variant: 'text-xs/semibold',
                color: 'text-muted',
                className: ee.channelName,
                children: o
            })
        ]
    });
}
function ed(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        o = (0, s.cj)([H.Z], () => ({
            channelId: H.Z.getChannelId(),
            quality: H.Z.getQuality(),
            state: H.Z.getState(),
            lastPing: H.Z.getLastPing()
        })),
        r = null != n,
        l = (0, s.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
    return (
        r &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(A.Z, {
                    ...o,
                    hasVideo: l
                }),
                (0, i.jsx)(eu, { voiceChannel: t }),
                (0, i.jsx)('div', { className: ee.separatorDot }),
                (0, i.jsx)(ec, { voiceChannel: t })
            ]
        })
    );
}
