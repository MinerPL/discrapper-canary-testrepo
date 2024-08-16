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
        return j;
    },
    hX: function () {
        return q;
    },
    iT: function () {
        return $;
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
        return J;
    }
}),
    n(47120);
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(374470),
    _ = n(442837),
    E = n(481060),
    f = n(904245),
    h = n(45114),
    p = n(431279),
    m = n(794295),
    I = n(593472),
    T = n(110924),
    g = n(858644),
    S = n(249458),
    A = n(313201),
    N = n(688465),
    v = n(425886),
    O = n(80966),
    R = n(593545),
    C = n(479313),
    y = n(765104),
    D = n(505953),
    L = n(695346),
    b = n(201542),
    M = n(306680),
    P = n(594174),
    U = n(259580),
    w = n(626135),
    x = n(823379),
    G = n(589530),
    k = n(709054),
    B = n(217702),
    F = n(981631),
    V = n(420212),
    H = n(814249),
    Z = n(689938),
    Y = n(437495);
let j = {
        delay: 300,
        position: 'top'
    },
    W = (e) => (t) => {
        null == e || e(t), (0, G.jA)(t);
    },
    K = (e) => (t) => {
        null == e || e(t), (0, G.Zj)(t);
    };
function z(e) {
    let { onVolumeChange: t, onMute: n, volume: r, autoMute: i, alt: o, renderAdjacentContent: l, renderOverlayContent: u, ...c } = e,
        d = W(t),
        _ = K(n);
    return (
        (r = null == r ? G.FC : r),
        (i = null == i ? G.rs : i),
        (0, a.jsxs)(s.Fragment, {
            children: [
                (0, a.jsx)(O.Z, {
                    ...c,
                    alt: o,
                    volume: r,
                    autoMute: i,
                    onVolumeChange: d,
                    onMute: _,
                    renderLinkComponent: $,
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
        (n = null == n ? G.FC : n),
        (0, a.jsxs)(s.Fragment, {
            children: [
                (0, a.jsx)(v.Z, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: i,
                    onVolumeHide: o,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: $
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
        (n = null == n ? G.FC : n),
        (0, a.jsx)(b.Z, {
            ...i,
            onVolumeChange: s,
            onMute: o,
            volume: n
        })
    );
}
function X(e) {
    let { alt: t, hiddenSpoilers: n, renderAdjacentContent: r, containerClassName: i, imageContainerClassName: o, disableAltTextDisplay: u = !1, mediaLayoutType: c, imageContainerStyle: d, renderForwardComponent: _ } = e,
        f = c === B.hV.MOSAIC,
        h = !u && L.H1.getSetting() && null != t && '' !== t && !0 !== n,
        m = (e) => {
            let { altText: t } = e;
            return (0, a.jsxs)(E.Dialog, {
                'aria-label': Z.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                className: Y.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === V.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null === (e = I.current) || void 0 === e ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, a.jsx)('span', {
                        className: Y.mediaMosaicAltTextPopoutTitle,
                        children: Z.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
                    }),
                    (0, a.jsx)('span', {
                        className: Y.mediaMosaicAltTextPopoutDescription,
                        children: t
                    })
                ]
            });
        },
        I = s.createRef();
    return (0, a.jsxs)('div', {
        className: l()(Y.imageContent, i),
        children: [
            (0, a.jsxs)('div', {
                className: l()(Y.imageContainer, o),
                style: d,
                children: [
                    (0, a.jsx)(p.Z, {
                        ...e,
                        renderLinkComponent: $,
                        renderForwardComponent: null != _ ? _ : F.VqG
                    }),
                    null != r && r()
                ]
            }),
            f &&
                h &&
                (0, a.jsx)('div', {
                    className: Y.mediaMosaicAltTextContainer,
                    children: (0, a.jsx)(E.Popout, {
                        animation: E.Popout.Animation.FADE,
                        renderPopout: () => (0, a.jsx)(m, { altText: t }),
                        children: (e) =>
                            (0, a.jsx)(E.FocusRing, {
                                offset: 4,
                                children: (0, a.jsx)('button', {
                                    ...e,
                                    type: 'button',
                                    ref: I,
                                    'aria-label': Z.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                                    className: Y.mediaMosaicAltText,
                                    children: Z.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
                                })
                            })
                    })
                }),
            !f &&
                h &&
                (0, a.jsx)('span', {
                    className: Y.altText,
                    children: t
                })
        ]
    });
}
function $(e) {
    return (0, a.jsx)(m.Z, { ...e });
}
function J(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsx)(R.Z, { ...n }), null != t && t()]
    });
}
function ee(e) {
    return (0, a.jsx)(g.Z, { ...e });
}
((i = r || (r = {}))[(i.OLD_MESSAGES = 0)] = 'OLD_MESSAGES'), (i[(i.REPLY = 1)] = 'REPLY');
let et = (e) => {
        let { type: t = 0, onClick: n } = e;
        return (0, a.jsx)(S.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, a.jsxs)('div', {
                          className: Y.jumpToPresentBar,
                          children: [
                              (0, a.jsx)(E.FocusRing, {
                                  offset: 4,
                                  children: (0, a.jsx)('button', {
                                      type: 'button',
                                      onClick: n,
                                      className: Y.barButtonMain,
                                      children: (function (e) {
                                          switch (e) {
                                              case 0:
                                                  return Z.Z.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                                              case 1:
                                                  return Z.Z.Messages.JUMP_BAR_VIEWING_REPLY;
                                              default:
                                                  return (0, x.vE)(e);
                                          }
                                      })(t)
                                  })
                              }),
                              null != n
                                  ? (0, a.jsx)(E.FocusRing, {
                                        offset: 4,
                                        children: (0, a.jsxs)('button', {
                                            type: 'button',
                                            onClick: n,
                                            className: Y.barButtonAlt,
                                            children: [
                                                (function (e) {
                                                    switch (e) {
                                                        case 0:
                                                            return Z.Z.Messages.JUMP_TO_PRESENT;
                                                        case 1:
                                                            return Z.Z.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                                                        default:
                                                            return (0, x.vE)(e);
                                                    }
                                                })(t),
                                                (0, a.jsx)(U.Z, { className: Y.barButtonIcon })
                                            ]
                                        })
                                    })
                                  : (0, a.jsx)(E.Spinner, {
                                        type: E.Spinner.Type.PULSING_ELLIPSIS,
                                        className: Y.spinner,
                                        itemClassName: Y.spinnerItem
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
                    : (0, a.jsxs)(E.Clickable, {
                          className: Y.messagesErrorBar,
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
                                  className: Y.barButtonMain,
                                  children: Z.Z.Messages.MESSAGES_FAILED_TO_LOAD
                              }),
                              n
                                  ? (0, a.jsx)(E.Spinner, {
                                        type: E.Spinner.Type.PULSING_ELLIPSIS,
                                        className: Y.spinner,
                                        itemClassName: Y.spinnerItem
                                    })
                                  : (0, a.jsx)('div', {
                                        className: Y.barButtonAlt,
                                        children: Z.Z.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
                                    })
                          ]
                      })
        });
    };
function er(e) {
    let { content: t, channelId: n } = e,
        [r] = s.useState(() => (0, A.hQ)('NewMessagesBarJumpToNewMessages_')),
        i = s.useCallback(() => {
            let e = M.ZP.ackMessageId(n);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: n,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : f.Z.jumpToMessage({
                      channelId: n,
                      messageId: k.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, h.In)(n);
        }, [n]),
        { disableInteractions: u } = s.useContext(S.G);
    return u
        ? null
        : (0, a.jsxs)('div', {
              className: l()(Y.newMessagesBar, { [Y.disableInteractions]: u }),
              children: [
                  (0, a.jsx)(E.FocusRing, {
                      offset: 4,
                      children: (0, a.jsx)('button', {
                          type: 'button',
                          className: Y.barButtonMain,
                          onClick: i,
                          'aria-label': Z.Z.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                          'aria-describedby': r,
                          children: (0, a.jsx)('span', {
                              id: r,
                              className: Y.span,
                              children: t
                          })
                      })
                  }),
                  (0, a.jsx)(E.FocusRing, {
                      offset: 4,
                      children: (0, a.jsxs)('button', {
                          type: 'button',
                          onClick: o,
                          className: Y.barButtonAlt,
                          children: [
                              Z.Z.Messages.MARK_AS_READ,
                              (0, a.jsx)(E.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: Y.barButtonIcon
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
        { disableInteractions: p } = s.useContext(S.G),
        [m, g] = s.useState(null),
        A = s.useRef(null),
        [v, O] = s.useState(null),
        R = s.useRef(null),
        L = (0, _.Wu)(
            [y.Z],
            () => {
                var e;
                return null !== (e = y.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        b = (0, T.Z)(L);
    s.useEffect(() => {
        !c().isEqual(b, L) &&
            w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: L.length,
                message_counts: L.map((e) => e.count),
                start_message_ids: L.map((e) => e.startId),
                end_message_ids: L.map((e) => e.endId),
                num_participants: L.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [L, b, i.guild_id, i.id, i.type]);
    let G = (0, _.e7)(
            [P.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == L
                            ? void 0
                            : L.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = P.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(x.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [L],
            ea
        ),
        B = null !== (n = (0, _.e7)([y.Z], () => y.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        V = null == L ? void 0 : null === (t = L[B]) || void 0 === t ? void 0 : t.topic;
    null == V && null == m && (null == L ? void 0 : L.length) >= 1 && (V = null === (r = L[0]) || void 0 === r ? void 0 : r.topic);
    let j = s.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    g(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [g]
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
                W(), j(e);
            },
            [j, W]
        ),
        [z, q] = s.useState(!1),
        Q = s.useCallback(() => {
            w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: L.length,
                message_counts: L.map((e) => e.count),
                start_message_ids: L.map((e) => e.startId),
                end_message_ids: L.map((e) => e.endId),
                num_participants: L.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                q(!z);
        }, [z, L, q, i]),
        X = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.DZ.PILL_DROPDOWN,
                    n = L[e];
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
                    w.default.track(F.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    f.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: I.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [L, i, K, u]
        ),
        $ = s.useCallback((e) => {
            var t;
            q(e);
            let n = null === (t = R.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && O(n);
        }, []);
    s.useEffect(() => {
        if (null != v && z) {
            var e;
            null === (e = R.current) || void 0 === e || e.scrollTo({ top: v });
        }
    }, [v, z]);
    let J = s.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = A.current) || void 0 === t ? void 0 : t.contains(e.target))))
                z &&
                    w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: L.length,
                        message_counts: L.map((e) => e.count),
                        start_message_ids: L.map((e) => e.startId),
                        end_message_ids: L.map((e) => e.endId),
                        num_participants: L.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    $(!1);
        },
        [z, L, i, $]
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
                document.addEventListener('mousedown', J),
                () => {
                    document.removeEventListener('mousedown', J);
                }
            ),
            [J]
        );
    let ee = s.useMemo(
            () =>
                (0, a.jsx)(D.Z, {
                    channel: i,
                    summaries: L,
                    summariesMembers: G,
                    selectTopic: X,
                    setOpen: $
                }),
            [L, G, X, $, i]
        ),
        et = s.useCallback(() => {
            let e = M.ZP.ackMessageId(i.id);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : f.Z.jumpToMessage({
                      channelId: i.id,
                      messageId: k.default.castChannelIdAsMessageId(i.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [i.id]),
        en = s.useCallback(() => {
            (0, h.In)(i.id);
        }, [i.id]),
        er = Z.Z.Messages.SUMMARIES_NO_SUMMARIES;
    return (
        L.length > 0 && (er = '' === V || null == V ? Z.Z.Messages.SUMMARIES_VIEW_ALL : V),
        p
            ? null
            : (0, a.jsxs)('div', {
                  ref: A,
                  className: l()(Y.newTopicsBarContainer, Y.containerMarginTop),
                  children: [
                      (0, a.jsx)('div', {
                          className: l()(Y.newTopicsBarTopicSection),
                          children: (0, a.jsx)(E.Clickable, {
                              className: Y.newTopicsBarTextClickable,
                              'aria-label': Z.Z.Messages.SUMMARY_PILL,
                              onClick: Q,
                              children: (0, a.jsxs)('div', {
                                  className: l()({
                                      [Y.newTopicsBarTextUnselected]: !z,
                                      [Y.newTopicsBarTextSelected]: z
                                  }),
                                  children: [
                                      (0, a.jsx)(E.TopicsIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: Y.newTopicsBarIcon
                                      }),
                                      (0, a.jsx)(E.Text, {
                                          variant: 'text-sm/medium',
                                          className: l()(Y.newTopicsBarCompact, Y.newTopicsBarText),
                                          children: er
                                      }),
                                      (0, a.jsx)(U.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: U.Z.Directions.DOWN,
                                          className: Y.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, a.jsx)(E.Clickable, {
                          onClick: et,
                          className: l()(Y.barButtonMain, Y.newTopicsBarInitial),
                          children: o
                      }),
                      (0, a.jsxs)(E.Clickable, {
                          onClick: en,
                          className: l()(Y.barButtonAlt, Y.flexEnd),
                          children: [
                              (0, a.jsx)('div', {
                                  className: Y.newTopicsBarCompact,
                                  children: Z.Z.Messages.MARK_AS_READ
                              }),
                              (0, a.jsx)(E.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: Y.barButtonIcon
                              })
                          ]
                      }),
                      z &&
                          (0, a.jsxs)('div', {
                              className: Y.topicsDropdown,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: Y.topicsDropdownHeading,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: Y.topicsDropdownHeadingText,
                                              children: [
                                                  (0, a.jsx)(E.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: Y.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(E.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: Z.Z.Messages.SUMMARIES
                                                  }),
                                                  (0, a.jsx)(N.Z, { className: Y.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(E.Clickable, {
                                              'aria-label': Z.Z.Messages.CLOSE,
                                              onClick: Q,
                                              className: Y.topicsDropdownClose,
                                              children: (0, a.jsx)(E.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(E.Scroller, {
                                      ref: R,
                                      className: Y.topicsScroller,
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
        [h, p] = s.useState(null),
        m = s.useRef(null),
        [g, A] = s.useState(null),
        v = s.useRef(null),
        O = (0, _.Wu)(
            [y.Z],
            () => {
                var e;
                return null !== (e = y.Z.summaries(i.id)) && void 0 !== e ? e : [];
            },
            [i]
        ),
        R = (0, T.Z)(O);
    s.useEffect(() => {
        !c().isEqual(R, O) &&
            w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            });
    }, [O, R, i.guild_id, i.id, i.type]);
    let L = (0, _.e7)(
            [P.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == O
                            ? void 0
                            : O.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = P.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(x.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [O],
            ea
        ),
        b = null !== (n = (0, _.e7)([y.Z], () => y.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        M = null == O ? void 0 : null === (t = O[b]) || void 0 === t ? void 0 : t.topic;
    null == M && null == h && (null == O ? void 0 : O.length) >= 1 && (M = null === (r = O[0]) || void 0 === r ? void 0 : r.topic);
    let G = s.useMemo(() => c().get(O, b - 1), [b, O]),
        k = s.useMemo(() => c().get(O, b + 1), [b, O]),
        B = s.useMemo(
            () =>
                c().debounce((e) => {
                    var t;
                    p(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [p]
        ),
        V = s.useMemo(
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
        j = s.useCallback(
            (e) => {
                V(), B(e);
            },
            [B, V]
        ),
        [W, K] = s.useState(!1),
        z = s.useCallback(() => {
            w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !W,
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }),
                K(!W);
        }, [W, O, K, i]),
        q = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.DZ.PILL_DROPDOWN,
                    n = O[e];
                if (null == n) return;
                (0, C.wv)(i.id, n.id), (0, C.yK)(i.id, n.id);
                let r = () => {
                    o.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            o.addAutomaticAnchorCallback(j, !1);
                        }, 100);
                };
                o.removeAutomaticAnchorCallback(j),
                    o.addScrollCompleteCallback(r),
                    w.default.track(F.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    f.Z.jumpToMessage({
                        channelId: i.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: I.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [O, i, j, o]
        ),
        Q = s.useCallback(() => {
            q(b - 1, H.DZ.PILL_NEXT_ARROW);
        }, [q, b]),
        X = s.useCallback(() => {
            q(b + 1, H.DZ.PILL_PREVIOUS_ARROW);
        }, [b, q]),
        $ = s.useCallback((e) => {
            var t;
            K(e);
            let n = null === (t = v.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && A(n);
        }, []);
    s.useEffect(() => {
        if (null != g && W) {
            var e;
            null === (e = v.current) || void 0 === e || e.scrollTo({ top: g });
        }
    }, [g, W]);
    let J = s.useCallback(
        (e) => {
            var t;
            if (!((0, d.k)(e.target) && (null === (t = m.current) || void 0 === t ? void 0 : t.contains(e.target))))
                W &&
                    w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: O.length,
                        message_counts: O.map((e) => e.count),
                        start_message_ids: O.map((e) => e.startId),
                        end_message_ids: O.map((e) => e.endId),
                        num_participants: O.map((e) => e.people.length),
                        guild_id: i.guild_id,
                        channel_id: i.id,
                        channel_type: i.type
                    }),
                    $(!1);
        },
        [W, O, i, $]
    );
    s.useEffect(
        () => (
            o.addAutomaticAnchorCallback(j),
            () => {
                o.removeAutomaticAnchorCallback(j);
            }
        ),
        [o, j]
    ),
        s.useEffect(() => {
            (0, C.G1)(i.id);
        }, [i.id]),
        s.useEffect(
            () => (
                document.addEventListener('mousedown', J),
                () => {
                    document.removeEventListener('mousedown', J);
                }
            ),
            [J]
        );
    let ee = s.useMemo(
        () =>
            (0, a.jsx)(D.Z, {
                channel: i,
                summaries: O,
                summariesMembers: L,
                selectTopic: q,
                setOpen: $
            }),
        [O, L, q, $, i]
    );
    if (!(0, _.e7)([y.Z], () => y.Z.shouldShowTopicsBar())) return null;
    let et = Z.Z.Messages.SUMMARIES_NO_SUMMARIES;
    return (
        O.length > 0 && (et = '' === M || null == M ? Z.Z.Messages.SUMMARIES_VIEW_ALL : M),
        u
            ? null
            : (0, a.jsxs)('div', {
                  ref: m,
                  className: l()(Y.topicsPillContainer, Y.containerMarginTop),
                  children: [
                      (0, a.jsxs)('div', {
                          className: Y.topicsPill,
                          children: [
                              (0, a.jsx)(E.Clickable, {
                                  className: Y.topicsPillText,
                                  'aria-label': Z.Z.Messages.SUMMARY_PILL,
                                  onClick: z,
                                  children: (0, a.jsxs)('div', {
                                      className: l()({
                                          [Y.topicsPillTextUnselected]: !W,
                                          [Y.topicsPillTextSelected]: W
                                      }),
                                      children: [
                                          (0, a.jsx)(E.TopicsIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: Y.topicsPillSummaryIcon
                                          }),
                                          (0, a.jsx)(E.Text, {
                                              className: Y.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: et
                                          }),
                                          (0, a.jsx)(U.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: U.Z.Directions.DOWN,
                                              className: Y.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  className: Y.topicsPillCarets,
                                  children: [
                                      (0, a.jsx)(E.Clickable, {
                                          'aria-label': Z.Z.Messages.SUMMARY_PILL_NEXT,
                                          onClick: X,
                                          className: l()(Y.topicsPillCaret, Y.topicsCaretLeft, { [Y.topicsPillCaretDisabled]: null == k }),
                                          children: (0, a.jsx)(U.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: U.Z.Directions.UP
                                          })
                                      }),
                                      (0, a.jsx)(E.Clickable, {
                                          'aria-label': Z.Z.Messages.SUMMARY_PILL_PREVIOUS,
                                          onClick: Q,
                                          className: l()(Y.topicsPillCaret, Y.topicsCaretRight, { [Y.topicsPillCaretDisabled]: null == G }),
                                          children: (0, a.jsx)(U.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: U.Z.Directions.DOWN
                                          })
                                      })
                                  ]
                              })
                          ]
                      }),
                      W &&
                          (0, a.jsxs)('div', {
                              className: Y.topicsDropdown,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: Y.topicsDropdownHeading,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: Y.topicsDropdownHeadingText,
                                              children: [
                                                  (0, a.jsx)(E.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: Y.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, a.jsx)(E.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: Z.Z.Messages.SUMMARIES
                                                  }),
                                                  (0, a.jsx)(N.Z, { className: Y.summariesBetaTag })
                                              ]
                                          }),
                                          (0, a.jsx)(E.Clickable, {
                                              'aria-label': Z.Z.Messages.CLOSE,
                                              onClick: z,
                                              className: Y.topicsDropdownClose,
                                              children: (0, a.jsx)(E.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, a.jsx)(E.Scroller, {
                                      ref: v,
                                      className: Y.topicsScroller,
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
            className: Y.tooltip,
            children: [
                (0, a.jsx)(E.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: Y.tooltipEmojiName,
                    children: e
                }),
                t &&
                    (0, a.jsx)(E.Text, {
                        className: Y.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: Z.Z.Messages.EMOJI_TOOLTIP_CLICK_CTA
                    })
            ]
        });
    },
    el = (e) => {
        let { children: t, className: n } = e;
        return (0, a.jsx)('div', {
            className: l()(Y.popoutContainer, n),
            children: t
        });
    },
    eu = (e) => {
        let { className: t } = e;
        return (0, a.jsx)(el, {
            className: t,
            children: (0, a.jsx)('div', {
                className: Y.popoutLoadingBackground,
                children: (0, a.jsx)('div', { className: Y.popoutLoadingForeground })
            })
        });
    };
