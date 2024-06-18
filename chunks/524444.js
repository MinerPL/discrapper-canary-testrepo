"use strict";
n.d(t, {
  A7: function() {
    return i
  },
  BO: function() {
    return eu
  },
  DR: function() {
    return er
  },
  G5: function() {
    return ea
  },
  LE: function() {
    return eo
  },
  Rp: function() {
    return es
  },
  SE: function() {
    return ec
  },
  W_: function() {
    return ed
  },
  Y: function() {
    return e_
  },
  Yi: function() {
    return ee
  },
  b_: function() {
    return z
  },
  hX: function() {
    return J
  },
  iT: function() {
    return et
  },
  lV: function() {
    return Q
  },
  ur: function() {
    return ei
  },
  wj: function() {
    return $
  },
  xi: function() {
    return en
  }
}), n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  d = n(374470),
  c = n(442837),
  E = n(481060),
  I = n(904245),
  T = n(45114),
  h = n(431279),
  S = n(794295),
  f = n(593472),
  N = n(110924),
  A = n(688465),
  m = n(479313),
  O = n(765104),
  R = n(505953),
  C = n(695346),
  p = n(201542),
  g = n(306680),
  L = n(594174),
  v = n(130208),
  D = n(992665),
  M = n(133910),
  P = n(145196),
  y = n(153124),
  U = n(278297),
  b = n(259580),
  G = n(386103),
  w = n(465670),
  k = n(839523),
  B = n(626135),
  x = n(823379),
  V = n(589530),
  Z = n(709054),
  H = n(981631),
  F = n(420212),
  Y = n(814249),
  j = n(768760),
  W = n(689938),
  K = n(59369);
let z = {
    delay: 300,
    position: "top"
  },
  q = e => t => {
    null == e || e(t), (0, V.jA)(t)
  },
  X = e => t => {
    null == e || e(t), (0, V.Zj)(t)
  };

function Q(e) {
  let {
    onVolumeChange: t,
    onMute: n,
    volume: i,
    autoMute: r,
    alt: a,
    renderAdjacentContent: l,
    renderOverlayContent: u,
    ..._
  } = e, d = q(t), c = X(n);
  return i = null == i ? V.FC : i, r = null == r ? V.rs : r, (0, s.jsxs)(o.Fragment, {
    children: [(0, s.jsx)(M.Z, {
      ..._,
      alt: a,
      volume: i,
      autoMute: r,
      onVolumeChange: d,
      onMute: c,
      renderLinkComponent: et,
      renderOverlayContent: u
    }), null != l && l()]
  })
}

function J(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: i,
    onVolumeShow: r,
    onVolumeHide: a,
    renderAdjacentContent: l,
    ...u
  } = e, _ = q(t), d = X(i);
  return n = null == n ? V.FC : n, (0, s.jsxs)(o.Fragment, {
    children: [(0, s.jsx)(D.Z, {
      ...u,
      onVolumeChange: _,
      onMute: d,
      onVolumeShow: r,
      onVolumeHide: a,
      volume: n,
      autoMute: () => !1,
      renderLinkComponent: et
    }), null != l && l()]
  })
}

function $(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: i,
    ...r
  } = e, o = q(t), a = X(i);
  return n = null == n ? V.FC : n, (0, s.jsx)(p.Z, {
    ...r,
    onVolumeChange: o,
    onMute: a,
    volume: n
  })
}

function ee(e) {
  let {
    alt: t,
    hiddenSpoilers: n,
    renderAdjacentContent: i,
    containerClassName: r,
    imageContainerClassName: a,
    disableAltTextDisplay: u = !1,
    mediaLayoutType: _,
    imageContainerStyle: d,
    renderForwardComponent: c
  } = e, I = _ === j.hV.MOSAIC, T = !u && C.H1.getSetting() && null != t && "" !== t && !0 !== n, S = e => {
    let {
      altText: t
    } = e;
    return (0, s.jsxs)(E.Dialog, {
      "aria-label": W.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
      className: K.mediaMosaicAltTextPopout,
      onKeyDown: e => {
        e.key === F.mR.Escape && setTimeout(() => {
          var e;
          return null === (e = f.current) || void 0 === e ? void 0 : e.focus()
        }, 0)
      },
      children: [(0, s.jsx)("span", {
        className: K.mediaMosaicAltTextPopoutTitle,
        children: W.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
      }), (0, s.jsx)("span", {
        className: K.mediaMosaicAltTextPopoutDescription,
        children: t
      })]
    })
  }, f = o.createRef();
  return (0, s.jsxs)("div", {
    className: l()(K.imageContent, r),
    children: [(0, s.jsxs)("div", {
      className: l()(K.imageContainer, a),
      style: d,
      children: [(0, s.jsx)(h.Z, {
        ...e,
        renderLinkComponent: et,
        renderForwardComponent: null != c ? c : H.VqG
      }), null != i && i()]
    }), I && T && (0, s.jsx)("div", {
      className: K.mediaMosaicAltTextContainer,
      children: (0, s.jsx)(E.Popout, {
        animation: E.Popout.Animation.FADE,
        renderPopout: () => (0, s.jsx)(S, {
          altText: t
        }),
        children: e => (0, s.jsx)(E.FocusRing, {
          offset: 4,
          children: (0, s.jsx)("button", {
            ...e,
            type: "button",
            ref: f,
            "aria-label": W.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
            className: K.mediaMosaicAltText,
            children: W.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
          })
        })
      })
    }), !I && T && (0, s.jsx)("span", {
      className: K.altText,
      children: t
    })]
  })
}

function et(e) {
  return (0, s.jsx)(S.Z, {
    ...e
  })
}

function en(e) {
  let {
    renderAdjacentContent: t,
    ...n
  } = e;
  return (0, s.jsxs)(o.Fragment, {
    children: [(0, s.jsx)(P.Z, {
      ...n
    }), null != t && t()]
  })
}

function ei(e) {
  return (0, s.jsx)(v.Z, {
    ...e
  })
}(r = i || (i = {}))[r.OLD_MESSAGES = 0] = "OLD_MESSAGES", r[r.REPLY = 1] = "REPLY";
let er = e => {
    let {
      type: t = 0,
      onClick: n
    } = e;
    return (0, s.jsx)(U.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, s.jsxs)("div", {
        className: K.jumpToPresentBar,
        children: [(0, s.jsx)(E.FocusRing, {
          offset: 4,
          children: (0, s.jsx)("button", {
            type: "button",
            onClick: n,
            className: K.barButtonMain,
            children: function(e) {
              switch (e) {
                case 0:
                  return W.Z.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                case 1:
                  return W.Z.Messages.JUMP_BAR_VIEWING_REPLY;
                default:
                  return (0, x.vE)(e)
              }
            }(t)
          })
        }), null != n ? (0, s.jsx)(E.FocusRing, {
          offset: 4,
          children: (0, s.jsxs)("button", {
            type: "button",
            onClick: n,
            className: K.barButtonAlt,
            children: [function(e) {
              switch (e) {
                case 0:
                  return W.Z.Messages.JUMP_TO_PRESENT;
                case 1:
                  return W.Z.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                default:
                  return (0, x.vE)(e)
              }
            }(t), (0, s.jsx)(b.Z, {
              className: K.barButtonIcon
            })]
          })
        }) : (0, s.jsx)(E.Spinner, {
          type: E.Spinner.Type.PULSING_ELLIPSIS,
          className: K.spinner,
          itemClassName: K.spinnerItem
        })]
      })
    })
  },
  es = e => {
    let {
      onClick: t,
      loading: n
    } = e;
    return (0, s.jsx)(U.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, s.jsxs)(E.Clickable, {
        className: K.messagesErrorBar,
        onClick: t,
        focusProps: {
          offset: {
            top: 4,
            right: 4,
            bottom: 12,
            left: 4
          }
        },
        children: [(0, s.jsx)("div", {
          className: K.barButtonMain,
          children: W.Z.Messages.MESSAGES_FAILED_TO_LOAD
        }), n ? (0, s.jsx)(E.Spinner, {
          type: E.Spinner.Type.PULSING_ELLIPSIS,
          className: K.spinner,
          itemClassName: K.spinnerItem
        }) : (0, s.jsx)("div", {
          className: K.barButtonAlt,
          children: W.Z.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
        })]
      })
    })
  };

function eo(e) {
  let {
    content: t,
    channelId: n
  } = e, [i] = o.useState(() => (0, y.hQ)("NewMessagesBarJumpToNewMessages_")), r = o.useCallback(() => {
    let e = g.ZP.ackMessageId(n);
    null != e ? I.Z.jumpToMessage({
      channelId: n,
      messageId: e,
      offset: 1,
      context: "Mark As Read"
    }) : I.Z.jumpToMessage({
      channelId: n,
      messageId: Z.default.castChannelIdAsMessageId(n),
      offset: 1,
      context: "Mark As Read"
    })
  }, [n]), a = o.useCallback(() => {
    (0, T.In)(n)
  }, [n]), {
    disableInteractions: u
  } = o.useContext(U.G);
  return u ? null : (0, s.jsxs)("div", {
    className: l()(K.newMessagesBar, {
      [K.disableInteractions]: u
    }),
    children: [(0, s.jsx)(E.FocusRing, {
      offset: 4,
      children: (0, s.jsx)("button", {
        type: "button",
        className: K.barButtonMain,
        onClick: r,
        "aria-label": W.Z.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
        "aria-describedby": i,
        children: (0, s.jsx)("span", {
          id: i,
          className: K.span,
          children: t
        })
      })
    }), (0, s.jsx)(E.FocusRing, {
      offset: 4,
      children: (0, s.jsxs)("button", {
        type: "button",
        onClick: a,
        className: K.barButtonAlt,
        children: [W.Z.Messages.MARK_AS_READ, (0, s.jsx)(G.Z, {
          className: K.barButtonIcon
        })]
      })
    })]
  })
}

function ea(e) {
  var t, n, i;
  let {
    channel: r,
    content: a,
    scrollManager: u
  } = e, {
    disableInteractions: h
  } = o.useContext(U.G), [S, C] = o.useState(null), p = o.useRef(null), [v, D] = o.useState(null), M = o.useRef(null), P = (0, c.Wu)([O.Z], () => {
    var e;
    return null !== (e = O.Z.summaries(r.id)) && void 0 !== e ? e : []
  }, [r]), y = (0, N.Z)(P);
  o.useEffect(() => {
    !_().isEqual(y, P) && B.default.track(H.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: P.length,
      message_counts: P.map(e => e.count),
      start_message_ids: P.map(e => e.startId),
      end_message_ids: P.map(e => e.endId),
      num_participants: P.map(e => e.people.length),
      guild_id: r.guild_id,
      channel_id: r.id,
      channel_type: r.type
    })
  }, [P, y, r.guild_id, r.id, r.type]);
  let V = (0, c.e7)([L.default], () => {
      var e;
      return null !== (e = null == P ? void 0 : P.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = L.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(x.lm)
      })) && void 0 !== e ? e : []
    }, [P], el),
    F = null !== (n = (0, c.e7)([O.Z], () => O.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    j = null == P ? void 0 : null === (t = P[F]) || void 0 === t ? void 0 : t.topic;
  null == j && null == S && (null == P ? void 0 : P.length) >= 1 && (j = null === (i = P[0]) || void 0 === i ? void 0 : i.topic);
  let z = o.useMemo(() => _().debounce(e => {
      var t;
      C(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [C]),
    q = o.useMemo(() => _().throttle(() => {
      (0, m.yK)(null)
    }, 1200, {
      trailing: !1
    }), []),
    X = o.useCallback(e => {
      q(), z(e)
    }, [z, q]),
    [Q, J] = o.useState(!1),
    $ = o.useCallback(() => {
      B.default.track(H.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !Q,
        num_summaries: P.length,
        message_counts: P.map(e => e.count),
        start_message_ids: P.map(e => e.startId),
        end_message_ids: P.map(e => e.endId),
        num_participants: P.map(e => e.people.length),
        guild_id: r.guild_id,
        channel_id: r.id,
        channel_type: r.type
      }), J(!Q)
    }, [Q, P, J, r]),
    ee = o.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y.DZ.PILL_DROPDOWN,
        n = P[e];
      if (null == n) return;
      (0, m.wv)(r.id, n.id), (0, m.yK)(r.id, n.id);
      let i = () => {
        u.removeScrollCompleteCallback(i), setTimeout(() => {
          u.addAutomaticAnchorCallback(X, !1)
        }, 100)
      };
      u.removeAutomaticAnchorCallback(X), u.addScrollCompleteCallback(i), B.default.track(H.rMx.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: r.guild_id,
        channel_id: r.id,
        channel_type: r.type
      }), I.Z.jumpToMessage({
        channelId: r.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: f.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [P, r, X, u]),
    et = o.useCallback(e => {
      var t;
      J(e);
      let n = null === (t = M.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && D(n)
    }, []);
  o.useEffect(() => {
    if (null != v && Q) {
      var e;
      null === (e = M.current) || void 0 === e || e.scrollTo({
        top: v
      })
    }
  }, [v, Q]);
  let en = o.useCallback(e => {
    var t;
    if (!((0, d.k)(e.target) && (null === (t = p.current) || void 0 === t ? void 0 : t.contains(e.target)))) Q && B.default.track(H.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: P.length,
      message_counts: P.map(e => e.count),
      start_message_ids: P.map(e => e.startId),
      end_message_ids: P.map(e => e.endId),
      num_participants: P.map(e => e.people.length),
      guild_id: r.guild_id,
      channel_id: r.id,
      channel_type: r.type
    }), et(!1)
  }, [Q, P, r, et]);
  o.useEffect(() => (u.addAutomaticAnchorCallback(X), () => {
    u.removeAutomaticAnchorCallback(X)
  }), [u, X]), o.useEffect(() => {
    (0, m.G1)(r.id)
  }, [r.id]), o.useEffect(() => (document.addEventListener("mousedown", en), () => {
    document.removeEventListener("mousedown", en)
  }), [en]);
  let ei = o.useMemo(() => (0, s.jsx)(R.Z, {
      channel: r,
      summaries: P,
      summariesMembers: V,
      selectTopic: ee,
      setOpen: et
    }), [P, V, ee, et, r]),
    er = o.useCallback(() => {
      let e = g.ZP.ackMessageId(r.id);
      null != e ? I.Z.jumpToMessage({
        channelId: r.id,
        messageId: e,
        offset: 1,
        context: "Mark As Read"
      }) : I.Z.jumpToMessage({
        channelId: r.id,
        messageId: Z.default.castChannelIdAsMessageId(r.id),
        offset: 1,
        context: "Mark As Read"
      })
    }, [r.id]),
    es = o.useCallback(() => {
      (0, T.In)(r.id)
    }, [r.id]),
    eo = W.Z.Messages.SUMMARIES_NO_SUMMARIES;
  return P.length > 0 && (eo = "" === j || null == j ? W.Z.Messages.SUMMARIES_VIEW_ALL : j), h ? null : (0, s.jsxs)("div", {
    ref: p,
    className: l()(K.newTopicsBarContainer, K.containerMarginTop),
    children: [(0, s.jsx)("div", {
      className: l()(K.newTopicsBarTopicSection),
      children: (0, s.jsx)(E.Clickable, {
        className: K.newTopicsBarTextClickable,
        "aria-label": W.Z.Messages.SUMMARY_PILL,
        onClick: $,
        children: (0, s.jsxs)("div", {
          className: l()({
            [K.newTopicsBarTextUnselected]: !Q,
            [K.newTopicsBarTextSelected]: Q
          }),
          children: [(0, s.jsx)(k.Z, {
            className: K.newTopicsBarIcon,
            width: 16,
            height: 16
          }), (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            className: l()(K.newTopicsBarCompact, K.newTopicsBarText),
            children: eo
          }), (0, s.jsx)(b.Z, {
            width: 16,
            height: 16,
            direction: b.Z.Directions.DOWN,
            className: K.newTopicsBarCaret
          })]
        })
      })
    }), (0, s.jsx)(E.Clickable, {
      onClick: er,
      className: l()(K.barButtonMain, K.newTopicsBarInitial),
      children: a
    }), (0, s.jsxs)(E.Clickable, {
      onClick: es,
      className: l()(K.barButtonAlt, K.flexEnd),
      children: [(0, s.jsx)("div", {
        className: K.newTopicsBarCompact,
        children: W.Z.Messages.MARK_AS_READ
      }), (0, s.jsx)(G.Z, {
        className: K.barButtonIcon
      })]
    }), Q && (0, s.jsxs)("div", {
      className: K.topicsDropdown,
      children: [(0, s.jsxs)("div", {
        className: K.topicsDropdownHeading,
        children: [(0, s.jsxs)("div", {
          className: K.topicsDropdownHeadingText,
          children: [(0, s.jsx)(k.Z, {
            className: K.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, s.jsx)(E.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: W.Z.Messages.SUMMARIES
          }), (0, s.jsx)(A.Z, {
            className: K.summariesBetaTag
          })]
        }), (0, s.jsx)(E.Clickable, {
          "aria-label": W.Z.Messages.CLOSE,
          onClick: $,
          className: K.topicsDropdownClose,
          children: (0, s.jsx)(w.Z, {})
        })]
      }), (0, s.jsx)(E.Scroller, {
        ref: M,
        className: K.topicsScroller,
        fade: !0,
        children: ei
      })]
    })]
  })
}

function el(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => {
    var i, r;
    return i = e, null == (r = t[n]) || i.length !== r.length || !!i.some((e, t) => r[t] !== e)
  })
}

function eu(e) {
  var t, n, i;
  let {
    channel: r,
    scrollManager: a
  } = e, {
    disableInteractions: u
  } = o.useContext(U.G), [T, h] = o.useState(null), S = o.useRef(null), [C, p] = o.useState(null), g = o.useRef(null), v = (0, c.Wu)([O.Z], () => {
    var e;
    return null !== (e = O.Z.summaries(r.id)) && void 0 !== e ? e : []
  }, [r]), D = (0, N.Z)(v);
  o.useEffect(() => {
    !_().isEqual(D, v) && B.default.track(H.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: v.length,
      message_counts: v.map(e => e.count),
      start_message_ids: v.map(e => e.startId),
      end_message_ids: v.map(e => e.endId),
      num_participants: v.map(e => e.people.length),
      guild_id: r.guild_id,
      channel_id: r.id,
      channel_type: r.type
    })
  }, [v, D, r.guild_id, r.id, r.type]);
  let M = (0, c.e7)([L.default], () => {
      var e;
      return null !== (e = null == v ? void 0 : v.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = L.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(x.lm)
      })) && void 0 !== e ? e : []
    }, [v], el),
    P = null !== (n = (0, c.e7)([O.Z], () => O.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    y = null == v ? void 0 : null === (t = v[P]) || void 0 === t ? void 0 : t.topic;
  null == y && null == T && (null == v ? void 0 : v.length) >= 1 && (y = null === (i = v[0]) || void 0 === i ? void 0 : i.topic);
  let G = o.useMemo(() => _().get(v, P - 1), [P, v]),
    V = o.useMemo(() => _().get(v, P + 1), [P, v]),
    Z = o.useMemo(() => _().debounce(e => {
      var t;
      h(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [h]),
    F = o.useMemo(() => _().throttle(() => {
      (0, m.yK)(null)
    }, 1200, {
      trailing: !1
    }), []),
    j = o.useCallback(e => {
      F(), Z(e)
    }, [Z, F]),
    [z, q] = o.useState(!1),
    X = o.useCallback(() => {
      B.default.track(H.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !z,
        num_summaries: v.length,
        message_counts: v.map(e => e.count),
        start_message_ids: v.map(e => e.startId),
        end_message_ids: v.map(e => e.endId),
        num_participants: v.map(e => e.people.length),
        guild_id: r.guild_id,
        channel_id: r.id,
        channel_type: r.type
      }), q(!z)
    }, [z, v, q, r]),
    Q = o.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y.DZ.PILL_DROPDOWN,
        n = v[e];
      if (null == n) return;
      (0, m.wv)(r.id, n.id), (0, m.yK)(r.id, n.id);
      let i = () => {
        a.removeScrollCompleteCallback(i), setTimeout(() => {
          a.addAutomaticAnchorCallback(j, !1)
        }, 100)
      };
      a.removeAutomaticAnchorCallback(j), a.addScrollCompleteCallback(i), B.default.track(H.rMx.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: r.guild_id,
        channel_id: r.id,
        channel_type: r.type
      }), I.Z.jumpToMessage({
        channelId: r.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: f.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [v, r, j, a]),
    J = o.useCallback(() => {
      Q(P - 1, Y.DZ.PILL_NEXT_ARROW)
    }, [Q, P]),
    $ = o.useCallback(() => {
      Q(P + 1, Y.DZ.PILL_PREVIOUS_ARROW)
    }, [P, Q]),
    ee = o.useCallback(e => {
      var t;
      q(e);
      let n = null === (t = g.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && p(n)
    }, []);
  o.useEffect(() => {
    if (null != C && z) {
      var e;
      null === (e = g.current) || void 0 === e || e.scrollTo({
        top: C
      })
    }
  }, [C, z]);
  let et = o.useCallback(e => {
    var t;
    if (!((0, d.k)(e.target) && (null === (t = S.current) || void 0 === t ? void 0 : t.contains(e.target)))) z && B.default.track(H.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: v.length,
      message_counts: v.map(e => e.count),
      start_message_ids: v.map(e => e.startId),
      end_message_ids: v.map(e => e.endId),
      num_participants: v.map(e => e.people.length),
      guild_id: r.guild_id,
      channel_id: r.id,
      channel_type: r.type
    }), ee(!1)
  }, [z, v, r, ee]);
  o.useEffect(() => (a.addAutomaticAnchorCallback(j), () => {
    a.removeAutomaticAnchorCallback(j)
  }), [a, j]), o.useEffect(() => {
    (0, m.G1)(r.id)
  }, [r.id]), o.useEffect(() => (document.addEventListener("mousedown", et), () => {
    document.removeEventListener("mousedown", et)
  }), [et]);
  let en = o.useMemo(() => (0, s.jsx)(R.Z, {
    channel: r,
    summaries: v,
    summariesMembers: M,
    selectTopic: Q,
    setOpen: ee
  }), [v, M, Q, ee, r]);
  if (!(0, c.e7)([O.Z], () => O.Z.shouldShowTopicsBar())) return null;
  let ei = W.Z.Messages.SUMMARIES_NO_SUMMARIES;
  return v.length > 0 && (ei = "" === y || null == y ? W.Z.Messages.SUMMARIES_VIEW_ALL : y), u ? null : (0, s.jsxs)("div", {
    ref: S,
    className: l()(K.topicsPillContainer, K.containerMarginTop),
    children: [(0, s.jsxs)("div", {
      className: K.topicsPill,
      children: [(0, s.jsx)(E.Clickable, {
        className: K.topicsPillText,
        "aria-label": W.Z.Messages.SUMMARY_PILL,
        onClick: X,
        children: (0, s.jsxs)("div", {
          className: l()({
            [K.topicsPillTextUnselected]: !z,
            [K.topicsPillTextSelected]: z
          }),
          children: [(0, s.jsx)(k.Z, {
            className: K.topicsPillSummaryIcon,
            width: 16,
            height: 16
          }), (0, s.jsx)(E.Text, {
            className: K.topicsPillTextTitle,
            variant: "text-sm/medium",
            children: ei
          }), (0, s.jsx)(b.Z, {
            width: 16,
            height: 16,
            direction: b.Z.Directions.DOWN,
            className: K.topicsPillDropdownCaret
          })]
        })
      }), (0, s.jsxs)("div", {
        className: K.topicsPillCarets,
        children: [(0, s.jsx)(E.Clickable, {
          "aria-label": W.Z.Messages.SUMMARY_PILL_NEXT,
          onClick: $,
          className: l()(K.topicsPillCaret, K.topicsCaretLeft, {
            [K.topicsPillCaretDisabled]: null == V
          }),
          children: (0, s.jsx)(b.Z, {
            width: 16,
            height: 16,
            direction: b.Z.Directions.UP
          })
        }), (0, s.jsx)(E.Clickable, {
          "aria-label": W.Z.Messages.SUMMARY_PILL_PREVIOUS,
          onClick: J,
          className: l()(K.topicsPillCaret, K.topicsCaretRight, {
            [K.topicsPillCaretDisabled]: null == G
          }),
          children: (0, s.jsx)(b.Z, {
            width: 16,
            height: 16,
            direction: b.Z.Directions.DOWN
          })
        })]
      })]
    }), z && (0, s.jsxs)("div", {
      className: K.topicsDropdown,
      children: [(0, s.jsxs)("div", {
        className: K.topicsDropdownHeading,
        children: [(0, s.jsxs)("div", {
          className: K.topicsDropdownHeadingText,
          children: [(0, s.jsx)(k.Z, {
            className: K.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, s.jsx)(E.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: W.Z.Messages.SUMMARIES
          }), (0, s.jsx)(A.Z, {
            className: K.summariesBetaTag
          })]
        }), (0, s.jsx)(E.Clickable, {
          "aria-label": W.Z.Messages.CLOSE,
          onClick: X,
          className: K.topicsDropdownClose,
          children: (0, s.jsx)(w.Z, {})
        })]
      }), (0, s.jsx)(E.Scroller, {
        ref: g,
        className: K.topicsScroller,
        fade: !0,
        children: en
      })]
    })]
  })
}
let e_ = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.jsxs)("div", {
      className: K.tooltip,
      children: [(0, s.jsx)(E.Text, {
        color: "none",
        variant: "text-sm/semibold",
        lineClamp: 1,
        className: K.tooltipEmojiName,
        children: e
      }), t && (0, s.jsx)(E.Text, {
        className: K.clickCTA,
        color: "text-muted",
        variant: "text-sm/normal",
        children: W.Z.Messages.EMOJI_TOOLTIP_CLICK_CTA
      })]
    })
  },
  ed = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, s.jsx)("div", {
      className: l()(K.popoutContainer, n),
      children: t
    })
  },
  ec = e => {
    let {
      className: t
    } = e;
    return (0, s.jsx)(ed, {
      className: t,
      children: (0, s.jsx)("div", {
        className: K.popoutLoadingBackground,
        children: (0, s.jsx)("div", {
          className: K.popoutLoadingForeground
        })
      })
    })
  }