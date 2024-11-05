n.d(t, {
    A7: function () {
        return r;
    },
    BO: function () {
        return es;
    },
    DR: function () {
        return et;
    },
    G5: function () {
        return ei;
    },
    LE: function () {
        return er;
    },
    Rp: function () {
        return en;
    },
    SE: function () {
        return eu;
    },
    W_: function () {
        return el;
    },
    Y: function () {
        return eo;
    },
    Yi: function () {
        return X;
    },
    b_: function () {
        return Y;
    },
    hX: function () {
        return q;
    },
    iT: function () {
        return J;
    },
    lV: function () {
        return z;
    },
    ur: function () {
        return ee;
    },
    wj: function () {
        return Q;
    },
    xi: function () {
        return $;
    }
}),
    n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(374470),
    f = n(442837),
    _ = n(481060),
    h = n(904245),
    p = n(45114),
    m = n(431279),
    g = n(794295),
    E = n(593472),
    v = n(110924),
    I = n(858644),
    S = n(249458),
    T = n(313201),
    b = n(688465),
    y = n(425886),
    A = n(80966),
    N = n(593545),
    C = n(479313),
    R = n(765104),
    O = n(505953),
    D = n(695346),
    L = n(201542),
    x = n(306680),
    w = n(594174),
    M = n(259580),
    P = n(626135),
    k = n(823379),
    U = n(589530),
    G = n(709054),
    B = n(217702),
    Z = n(981631),
    F = n(420212),
    V = n(814249),
    j = n(388032),
    H = n(650968);
let Y = {
        delay: 300,
        position: 'top'
    },
    W = (e) => (t) => {
        null == e || e(t), (0, U.jA)(t);
    },
    K = (e) => (t) => {
        null == e || e(t), (0, U.Zj)(t);
    };
function z(e) {
    let { onVolumeChange: t, onMute: n, volume: r, autoMute: i, alt: o, renderAdjacentContent: l, renderOverlayContent: u, ...c } = e,
        d = W(t),
        f = K(n);
    return (
        (r = null == r ? U.FC : r),
        (i = null == i ? U.rs : i),
        (0, a.jsxs)(s.Fragment, {
            children: [
                (0, a.jsx)(A.Z, {
                    ...c,
                    alt: o,
                    volume: r,
                    autoMute: i,
                    onVolumeChange: d,
                    onMute: f,
                    renderLinkComponent: J,
                    renderOverlayContent: u
                }),
                null != l && l()
            ]
        })
    );
}
function q(e) {
    let { onVolumeChange: t, volume: n, onMute: r, onVolumeShow: i, onVolumeHide: o, renderAdjacentContent: l, ...u } = e,
        c = W(t),
        d = K(r);
    return (
        (n = null == n ? U.FC : n),
        (0, a.jsxs)(s.Fragment, {
            children: [
                (0, a.jsx)(y.Z, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: i,
                    onVolumeHide: o,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: J
                }),
                null != l && l()
            ]
        })
    );
}
function Q(e) {
    let { onVolumeChange: t, volume: n, onMute: r, ...i } = e,
        s = W(t),
        o = K(r);
    return (
        (n = null == n ? U.FC : n),
        (0, a.jsx)(L.Z, {
            ...i,
            onVolumeChange: s,
            onMute: o,
            volume: n
        })
    );
}
function X(e) {
    var t;
    let { alt: n, hiddenSpoilers: r, renderAdjacentContent: i, containerClassName: o, imageContainerClassName: u, disableAltTextDisplay: c = !1, mediaLayoutType: d, imageContainerStyle: f } = e,
        h = d === B.hV.MOSAIC,
        p = !c && D.H1.getSetting() && null != n && '' !== n && !0 !== r,
        g = (e) => {
            let { altText: t } = e;
            return (0, a.jsxs)(_.Dialog, {
                'aria-label': j.intl.string(j.t.fSiQ3N),
                className: H.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === F.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null === (e = E.current) || void 0 === e ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, a.jsx)('span', {
                        className: H.mediaMosaicAltTextPopoutTitle,
                        children: j.intl.string(j.t.fSiQ3N)
                    }),
                    (0, a.jsx)('span', {
                        className: H.mediaMosaicAltTextPopoutDescription,
                        children: t
                    })
                ]
            });
        },
        E = s.createRef(),
        v = (null === (t = platform) || void 0 === t ? void 0 : t.name) === 'Safari';
    return (0, a.jsxs)('div', {
        className: l()(
            {
                [H.imageContentSafari]: v,
                [H.imageContent]: !v
            },
            o
        ),
        children: [
            (0, a.jsxs)('div', {
                className: l()(H.imageContainer, u),
                style: f,
                children: [(0, a.jsx)(m.Z, { ...e }), null != i && i()]
            }),
            h &&
                p &&
                (0, a.jsx)('div', {
                    className: H.mediaMosaicAltTextContainer,
                    children: (0, a.jsx)(_.Popout, {
                        animation: _.Popout.Animation.FADE,
                        renderPopout: () => (0, a.jsx)(g, { altText: n }),
                        children: (e) =>
                            (0, a.jsx)(_.FocusRing, {
                                offset: 4,
                                children: (0, a.jsx)('button', {
                                    ...e,
                                    type: 'button',
                                    ref: E,
                                    'aria-label': j.intl.string(j.t.fSiQ3N),
                                    className: H.mediaMosaicAltText,
                                    children: j.intl.string(j.t.jCV1T0)
                                })
                            })
                    })
                }),
            !h &&
                p &&
                (0, a.jsx)('span', {
                    className: H.altText,
                    children: n
                })
        ]
    });
}
function J(e) {
    return (0, a.jsx)(g.Z, { ...e });
}
function $(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsx)(N.Z, { ...n }), null != t && t()]
    });
}
function ee(e) {
    return (0, a.jsx)(I.Z, { ...e });
}
((i = r || (r = {}))[(i.OLD_MESSAGES = 0)] = 'OLD_MESSAGES'), (i[(i.REPLY = 1)] = 'REPLY');
let et = (e) => {
        let { type: t = 0, onClick: n } = e;
        return (0, a.jsx)(S.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)('div', {
                          className: H.jumpToPresentBar,
                          children: [
                              (0, a.jsx)(_.FocusRing, {
                                  offset: 4,
                                  children: (0, a.jsx)('button', {
                                      type: 'button',
                                      onClick: n,
                                      className: H.barButtonMain,
                                      children: (function (e) {
                                          switch (e) {
                                              case 0:
                                                  return j.intl.string(j.t['4EvBb2']);
                                              case 1:
                                                  return j.intl.string(j.t['1J6Xq6']);
                                              default:
                                                  return (0, k.vE)(e);
                                          }
                                      })(t)
                                  })
                              }),
                              null != n
                                  ? (0, a.jsx)(_.FocusRing, {
                                        offset: 4,
                                        children: (0, a.jsxs)('button', {
                                            type: 'button',
                                            onClick: n,
                                            className: H.barButtonAlt,
                                            children: [
                                                (function (e) {
                                                    switch (e) {
                                                        case 0:
                                                            return j.intl.string(j.t.gpoQsL);
                                                        case 1:
                                                            return j.intl.string(j.t['k3RM8/']);
                                                        default:
                                                            return (0, k.vE)(e);
                                                    }
                                                })(t),
                                                (0, a.jsx)(M.Z, { className: H.barButtonIcon })
                                            ]
                                        })
                                    })
                                  : (0, a.jsx)(_.Spinner, {
                                        type: _.Spinner.Type.PULSING_ELLIPSIS,
                                        className: H.spinner,
                                        itemClassName: H.spinnerItem
                                    })
                          ]
                      })
        });
    },
    en = (e) => {
        let { onClick: t, loading: n } = e;
        return (0, a.jsx)(S.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)(_.Clickable, {
                          className: H.messagesErrorBar,
                          onClick: t,
                          focusProps: {
                              offset: {
                                  top: 4,
                                  right: 4,
                                  bottom: 12,
                                  left: 4
                              }
                          },
                          children: [
                              (0, a.jsx)('div', {
                                  className: H.barButtonMain,
                                  children: j.intl.string(j.t['1zUvl5'])
                              }),
                              n
                                  ? (0, a.jsx)(_.Spinner, {
                                        type: _.Spinner.Type.PULSING_ELLIPSIS,
                                        className: H.spinner,
                                        itemClassName: H.spinnerItem
                                    })
                                  : (0, a.jsx)('div', {
                                        className: H.barButtonAlt,
                                        children: j.intl.string(j.t.TdQXAw)
                                    })
                          ]
                      })
        });
    };
function er(e) {
    let { content: t, channelId: n } = e,
        [r] = s.useState(() => (0, T.hQ)('NewMessagesBarJumpToNewMessages_')),
        i = s.useCallback(() => {
            let e = x.ZP.ackMessageId(n);
            null != e
                ? h.Z.jumpToMessage({
                      channelId: n,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : h.Z.jumpToMessage({
                      channelId: n,
                      messageId: G.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, p.In)(n);
        }, [n]),
        { disableInteractions: u } = s.useContext(S.G);
    return u
        ? null
        : (0, a.jsxs)('div', {
              className: l()(H.newMessagesBar, { [H.disableInteractions]: u }),
              children: [
                  (0, a.jsx)(_.FocusRing, {
                      offset: 4,
                      children: (0, a.jsx)('button', {
                          type: 'button',
                          className: H.barButtonMain,
                          onClick: i,
                          'aria-label': j.intl.string(j.t.z0Mkp6),
                          'aria-describedby': r,
                          children: (0, a.jsx)('span', {
                              id: r,
                              className: H.span,
                              children: t
                          })
                      })
                  }),
                  (0, a.jsx)(_.FocusRing, {
                      offset: 4,
                      children: (0, a.jsxs)('button', {
                          type: 'button',
                          onClick: o,
                          className: H.barButtonAlt,
                          children: [
                              j.intl.string(j.t.e6RscX),
                              (0, a.jsx)(_.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: H.barButtonIcon
                              })
                          ]
                      })
                  })
              ]
          });
}
function ei(e) {
    var t, n, r;
    let { channel: i, content: o, scrollManager: u } = e,
        { disableInteractions: m } = s.useContext(S.G),
        [g, I] = s.useState(null),
        T = s.useRef(null),
        [y, A] = s.useState(null),
        N = s.useRef(null),
        D = (0, f.Wu)(
            [R.Z],
            () => {
                var e;
                return null !== (e = R.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        L = (0, v.Z)(D);
    s.useEffect(() => {
        !c().isEqual(L, D) &&
            P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: D.length,
                message_counts: D.map((e) => e.count),
                start_message_ids: D.map((e) => e.startId),
                end_message_ids: D.map((e) => e.endId),
                num_participants: D.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [D, L, i.guild_id, i.id, i.type]);
    let U = (0, f.e7)(
            [w.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == D
                            ? void 0
                            : D.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = w.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(k.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [D],
            ea
        ),
        B = null !== (n = (0, f.e7)([R.Z], () => R.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        F = null == D ? void 0 : null === (t = D[B]) || void 0 === t ? void 0 : t.topic;
    null == F && null == g && (null == D ? void 0 : D.length) >= 1 && (F = null === (r = D[0]) || void 0 === r ? void 0 : r.topic);
    let Y = s.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    I(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [I]
        ),
        W = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, C.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        K = s.useCallback(
            (e) => {
                W(), Y(e);
            },
            [Y, W]
        ),
        [z, q] = s.useState(!1),
        Q = s.useCallback(() => {
            P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: D.length,
                message_counts: D.map((e) => e.count),
                start_message_ids: D.map((e) => e.startId),
                end_message_ids: D.map((e) => e.endId),
                num_participants: D.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                q(!z);
        }, [z, D, q, i]),
        X = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.DZ.PILL_DROPDOWN,
                    n = D[e];
                if (null == n) return;
                (0, C.wv)(i.id, n.id), (0, C.yK)(i.id, n.id);
                let r = () => {
                    u.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            u.addAutomaticAnchorCallback(K, !1);
                        }, 100);
                };
                u.removeAutomaticAnchorCallback(K),
                    u.addScrollCompleteCallback(r),
                    P.default.track(Z.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    h.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: E.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [D, i, K, u]
        ),
        J = s.useCallback((e) => {
            var t;
            q(e);
            let n = null === (t = N.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && A(n);
        }, []);
    s.useEffect(() => {
        if (null != y && z) {
            var e;
            null === (e = N.current) || void 0 === e || e.scrollTo({ top: y });
        }
    }, [y, z]);
    let $ = s.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = T.current) || void 0 === t ? void 0 : t.contains(e.target))))
                z &&
                    P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: D.length,
                        message_counts: D.map((e) => e.count),
                        start_message_ids: D.map((e) => e.startId),
                        end_message_ids: D.map((e) => e.endId),
                        num_participants: D.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    J(!1);
        },
        [z, D, i, J]
    );
    s.useEffect(
        () => (
            u.addAutomaticAnchorCallback(K),
            () => {
                u.removeAutomaticAnchorCallback(K);
            }
        ),
        [u, K]
    ),
        s.useEffect(() => {
            (0, C.G1)(i.id);
        }, [i.id]),
        s.useEffect(
            () => (
                document.addEventListener('mousedown', $),
                () => {
                    document.removeEventListener('mousedown', $);
                }
            ),
            [$]
        );
    let ee = s.useMemo(
            () =>
                (0, a.jsx)(O.Z, {
                    channel: i,
                    summaries: D,
                    summariesMembers: U,
                    selectTopic: X,
                    setOpen: J
                }),
            [D, U, X, J, i]
        ),
        et = s.useCallback(() => {
            let e = x.ZP.ackMessageId(i.id);
            null != e
                ? h.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : h.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: G.default.castChannelIdAsMessageId(i.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [i.id]),
        en = s.useCallback(() => {
            (0, p.In)(i.id);
        }, [i.id]),
        er = j.intl.string(j.t['38qwgI']);
    return (
        D.length > 0 && (er = '' === F || null == F ? j.intl.string(j.t.DwnFuL) : F),
        m
            ? null
            : (0, a.jsxs)('div', {
                  ref: T,
                  className: l()(H.newTopicsBarContainer, H.containerMarginTop),
                  children: [
                      (0, a.jsx)('div', {
                          className: l()(H.newTopicsBarTopicSection),
                          children: (0, a.jsx)(_.Clickable, {
                              className: H.newTopicsBarTextClickable,
                              'aria-label': j.intl.string(j.t.RT3MPz),
                              onClick: Q,
                              children: (0, a.jsxs)('div', {
                                  className: l()({
                                      [H.newTopicsBarTextUnselected]: !z,
                                      [H.newTopicsBarTextSelected]: z
                                  }),
                                  children: [
                                      (0, a.jsx)(_.TopicsIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: H.newTopicsBarIcon
                                      }),
                                      (0, a.jsx)(_.Text, {
                                          variant: 'text-sm/medium',
                                          className: l()(H.newTopicsBarCompact, H.newTopicsBarText),
                                          children: er
                                      }),
                                      (0, a.jsx)(M.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: M.Z.Directions.DOWN,
                                          className: H.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, a.jsx)(_.Clickable, {
                          onClick: et,
                          className: l()(H.barButtonMain, H.newTopicsBarInitial),
                          children: o
                      }),
                      (0, a.jsxs)(_.Clickable, {
                          onClick: en,
                          className: l()(H.barButtonAlt, H.flexEnd),
                          children: [
                              (0, a.jsx)('div', {
                                  className: H.newTopicsBarCompact,
                                  children: j.intl.string(j.t.e6RscX)
                              }),
                              (0, a.jsx)(_.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: H.barButtonIcon
                              })
                          ]
                      }),
                      z &&
                          (0, a.jsxs)('div', {
                              className: H.topicsDropdown,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: H.topicsDropdownHeading,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: H.topicsDropdownHeadingText,
                                              children: [
                                                  (0, a.jsx)(_.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: H.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(_.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: j.intl.string(j.t.q21fUl)
                                                  }),
                                                  (0, a.jsx)(b.Z, { className: H.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(_.Clickable, {
                                              'aria-label': j.intl.string(j.t.cpT0Cg),
                                              onClick: Q,
                                              className: H.topicsDropdownClose,
                                              children: (0, a.jsx)(_.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(_.Scroller, {
                                      ref: N,
                                      className: H.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
function ea(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var r, i;
            return (r = e), null == (i = t[n]) || r.length !== i.length || !!r.some((e, t) => i[t] !== e);
        })
    );
}
function es(e) {
    var t, n, r;
    let { channel: i, scrollManager: o } = e,
        { disableInteractions: u } = s.useContext(S.G),
        [p, m] = s.useState(null),
        g = s.useRef(null),
        [I, T] = s.useState(null),
        y = s.useRef(null),
        A = (0, f.Wu)(
            [R.Z],
            () => {
                var e;
                return null !== (e = R.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        N = (0, v.Z)(A);
    s.useEffect(() => {
        !c().isEqual(N, A) &&
            P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [A, N, i.guild_id, i.id, i.type]);
    let D = (0, f.e7)(
            [w.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == A
                            ? void 0
                            : A.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = w.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(k.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [A],
            ea
        ),
        L = null !== (n = (0, f.e7)([R.Z], () => R.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        x = null == A ? void 0 : null === (t = A[L]) || void 0 === t ? void 0 : t.topic;
    null == x && null == p && (null == A ? void 0 : A.length) >= 1 && (x = null === (r = A[0]) || void 0 === r ? void 0 : r.topic);
    let U = s.useMemo(() => c().get(A, L - 1), [L, A]),
        G = s.useMemo(() => c().get(A, L + 1), [L, A]),
        B = s.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    m(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [m]
        ),
        F = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, C.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        Y = s.useCallback(
            (e) => {
                F(), B(e);
            },
            [B, F]
        ),
        [W, K] = s.useState(!1),
        z = s.useCallback(() => {
            P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !W,
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                K(!W);
        }, [W, A, K, i]),
        q = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.DZ.PILL_DROPDOWN,
                    n = A[e];
                if (null == n) return;
                (0, C.wv)(i.id, n.id), (0, C.yK)(i.id, n.id);
                let r = () => {
                    o.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            o.addAutomaticAnchorCallback(Y, !1);
                        }, 100);
                };
                o.removeAutomaticAnchorCallback(Y),
                    o.addScrollCompleteCallback(r),
                    P.default.track(Z.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    h.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: E.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [A, i, Y, o]
        ),
        Q = s.useCallback(() => {
            q(L - 1, V.DZ.PILL_NEXT_ARROW);
        }, [q, L]),
        X = s.useCallback(() => {
            q(L + 1, V.DZ.PILL_PREVIOUS_ARROW);
        }, [L, q]),
        J = s.useCallback((e) => {
            var t;
            K(e);
            let n = null === (t = y.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && T(n);
        }, []);
    s.useEffect(() => {
        if (null != I && W) {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollTo({ top: I });
        }
    }, [I, W]);
    let $ = s.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target))))
                W &&
                    P.default.track(Z.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: A.length,
                        message_counts: A.map((e) => e.count),
                        start_message_ids: A.map((e) => e.startId),
                        end_message_ids: A.map((e) => e.endId),
                        num_participants: A.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    J(!1);
        },
        [W, A, i, J]
    );
    s.useEffect(
        () => (
            o.addAutomaticAnchorCallback(Y),
            () => {
                o.removeAutomaticAnchorCallback(Y);
            }
        ),
        [o, Y]
    ),
        s.useEffect(() => {
            (0, C.G1)(i.id);
        }, [i.id]),
        s.useEffect(
            () => (
                document.addEventListener('mousedown', $),
                () => {
                    document.removeEventListener('mousedown', $);
                }
            ),
            [$]
        );
    let ee = s.useMemo(
        () =>
            (0, a.jsx)(O.Z, {
                channel: i,
                summaries: A,
                summariesMembers: D,
                selectTopic: q,
                setOpen: J
            }),
        [A, D, q, J, i]
    );
    if (!(0, f.e7)([R.Z], () => R.Z.shouldShowTopicsBar())) return null;
    let et = j.intl.string(j.t['38qwgI']);
    return (
        A.length > 0 && (et = '' === x || null == x ? j.intl.string(j.t.DwnFuL) : x),
        u
            ? null
            : (0, a.jsxs)('div', {
                  ref: g,
                  className: l()(H.topicsPillContainer, H.containerMarginTop),
                  children: [
                      (0, a.jsxs)('div', {
                          className: H.topicsPill,
                          children: [
                              (0, a.jsx)(_.Clickable, {
                                  className: H.topicsPillText,
                                  'aria-label': j.intl.string(j.t.RT3MPz),
                                  onClick: z,
                                  children: (0, a.jsxs)('div', {
                                      className: l()({
                                          [H.topicsPillTextUnselected]: !W,
                                          [H.topicsPillTextSelected]: W
                                      }),
                                      children: [
                                          (0, a.jsx)(_.TopicsIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: H.topicsPillSummaryIcon
                                          }),
                                          (0, a.jsx)(_.Text, {
                                              className: H.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: et
                                          }),
                                          (0, a.jsx)(M.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: M.Z.Directions.DOWN,
                                              className: H.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  className: H.topicsPillCarets,
                                  children: [
                                      (0, a.jsx)(_.Clickable, {
                                          'aria-label': j.intl.string(j.t['4huCnJ']),
                                          onClick: X,
                                          className: l()(H.topicsPillCaret, H.topicsCaretLeft, { [H.topicsPillCaretDisabled]: null == G }),
                                          children: (0, a.jsx)(M.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: M.Z.Directions.UP
                                          })
                                      }),
                                      (0, a.jsx)(_.Clickable, {
                                          'aria-label': j.intl.string(j.t['58KOoK']),
                                          onClick: Q,
                                          className: l()(H.topicsPillCaret, H.topicsCaretRight, { [H.topicsPillCaretDisabled]: null == U }),
                                          children: (0, a.jsx)(M.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: M.Z.Directions.DOWN
                                          })
                                      })
                                  ]
                              })
                          ]
                      }),
                      W &&
                          (0, a.jsxs)('div', {
                              className: H.topicsDropdown,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: H.topicsDropdownHeading,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: H.topicsDropdownHeadingText,
                                              children: [
                                                  (0, a.jsx)(_.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: H.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(_.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: j.intl.string(j.t.q21fUl)
                                                  }),
                                                  (0, a.jsx)(b.Z, { className: H.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(_.Clickable, {
                                              'aria-label': j.intl.string(j.t.cpT0Cg),
                                              onClick: z,
                                              className: H.topicsDropdownClose,
                                              children: (0, a.jsx)(_.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(_.Scroller, {
                                      ref: y,
                                      className: H.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
let eo = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, a.jsxs)('div', {
            className: H.tooltip,
            children: [
                (0, a.jsx)(_.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: H.tooltipEmojiName,
                    children: e
                }),
                t &&
                    (0, a.jsx)(_.Text, {
                        className: H.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: j.intl.string(j.t['515vjI'])
                    })
            ]
        });
    },
    el = (e) => {
        let { children: t, className: n } = e;
        return (0, a.jsx)('div', {
            className: l()(H.popoutContainer, n),
            children: t
        });
    },
    eu = (e) => {
        let { className: t } = e;
        return (0, a.jsx)(el, {
            className: t,
            children: (0, a.jsx)('div', {
                className: H.popoutLoadingBackground,
                children: (0, a.jsx)('div', { className: H.popoutLoadingForeground })
            })
        });
    };
