n.d(t, {
  A7: function() {
return r;
  },
  BO: function() {
return eo;
  },
  DR: function() {
return et;
  },
  G5: function() {
return ei;
  },
  LE: function() {
return er;
  },
  Rp: function() {
return en;
  },
  SE: function() {
return eu;
  },
  W_: function() {
return el;
  },
  Y: function() {
return es;
  },
  Yi: function() {
return X;
  },
  b_: function() {
return j;
  },
  hX: function() {
return q;
  },
  iT: function() {
return $;
  },
  lV: function() {
return z;
  },
  ur: function() {
return ee;
  },
  wj: function() {
return Q;
  },
  xi: function() {
return J;
  }
}), n(47120);
var r, i, a = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
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
  g = n(688465),
  S = n(479313),
  A = n(765104),
  N = n(505953),
  v = n(695346),
  O = n(201542),
  R = n(306680),
  C = n(594174),
  y = n(130208),
  D = n(992665),
  L = n(133910),
  b = n(145196),
  M = n(153124),
  P = n(278297),
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
  Y = n(338935);
let j = {
delay: 300,
position: 'top'
  },
  W = e => t => {
null == e || e(t), (0, G.jA)(t);
  },
  K = e => t => {
null == e || e(t), (0, G.Zj)(t);
  };

function z(e) {
  let {
onVolumeChange: t,
onMute: n,
volume: r,
autoMute: i,
alt: s,
renderAdjacentContent: l,
renderOverlayContent: u,
...c
  } = e, d = W(t), _ = K(n);
  return r = null == r ? G.FC : r, i = null == i ? G.rs : i, (0, a.jsxs)(o.Fragment, {
children: [
  (0, a.jsx)(L.Z, {
    ...c,
    alt: s,
    volume: r,
    autoMute: i,
    onVolumeChange: d,
    onMute: _,
    renderLinkComponent: $,
    renderOverlayContent: u
  }),
  null != l && l()
]
  });
}

function q(e) {
  let {
onVolumeChange: t,
volume: n,
onMute: r,
onVolumeShow: i,
onVolumeHide: s,
renderAdjacentContent: l,
...u
  } = e, c = W(t), d = K(r);
  return n = null == n ? G.FC : n, (0, a.jsxs)(o.Fragment, {
children: [
  (0, a.jsx)(D.Z, {
    ...u,
    onVolumeChange: c,
    onMute: d,
    onVolumeShow: i,
    onVolumeHide: s,
    volume: n,
    autoMute: () => !1,
    renderLinkComponent: $
  }),
  null != l && l()
]
  });
}

function Q(e) {
  let {
onVolumeChange: t,
volume: n,
onMute: r,
...i
  } = e, o = W(t), s = K(r);
  return n = null == n ? G.FC : n, (0, a.jsx)(O.Z, {
...i,
onVolumeChange: o,
onMute: s,
volume: n
  });
}

function X(e) {
  let {
alt: t,
hiddenSpoilers: n,
renderAdjacentContent: r,
containerClassName: i,
imageContainerClassName: s,
disableAltTextDisplay: u = !1,
mediaLayoutType: c,
imageContainerStyle: d,
renderForwardComponent: _
  } = e, f = c === B.hV.MOSAIC, h = !u && v.H1.getSetting() && null != t && '' !== t && !0 !== n, m = e => {
let {
  altText: t
} = e;
return (0, a.jsxs)(E.Dialog, {
  'aria-label': Z.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
  className: Y.mediaMosaicAltTextPopout,
  onKeyDown: e => {
    e.key === V.mR.Escape && setTimeout(() => {
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
  }, I = o.createRef();
  return (0, a.jsxs)('div', {
className: l()(Y.imageContent, i),
children: [
  (0, a.jsxs)('div', {
    className: l()(Y.imageContainer, s),
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
  f && h && (0, a.jsx)('div', {
    className: Y.mediaMosaicAltTextContainer,
    children: (0, a.jsx)(E.Popout, {
      animation: E.Popout.Animation.FADE,
      renderPopout: () => (0, a.jsx)(m, {
        altText: t
      }),
      children: e => (0, a.jsx)(E.FocusRing, {
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
  !f && h && (0, a.jsx)('span', {
    className: Y.altText,
    children: t
  })
]
  });
}

function $(e) {
  return (0, a.jsx)(m.Z, {
...e
  });
}

function J(e) {
  let {
renderAdjacentContent: t,
...n
  } = e;
  return (0, a.jsxs)(o.Fragment, {
children: [
  (0, a.jsx)(b.Z, {
    ...n
  }),
  null != t && t()
]
  });
}

function ee(e) {
  return (0, a.jsx)(y.Z, {
...e
  });
}
(i = r || (r = {}))[i.OLD_MESSAGES = 0] = 'OLD_MESSAGES', i[i.REPLY = 1] = 'REPLY';
let et = e => {
let {
  type: t = 0,
  onClick: n
} = e;
return (0, a.jsx)(P.G.Consumer, {
  children: e => e.disableInteractions ? null : (0, a.jsxs)('div', {
    className: Y.jumpToPresentBar,
    children: [
      (0, a.jsx)(E.FocusRing, {
        offset: 4,
        children: (0, a.jsx)('button', {
          type: 'button',
          onClick: n,
          className: Y.barButtonMain,
          children: function(e) {
            switch (e) {
              case 0:
                return Z.Z.Messages.YOURE_VIEWING_OLDER_MESSAGES;
              case 1:
                return Z.Z.Messages.JUMP_BAR_VIEWING_REPLY;
              default:
                return (0, x.vE)(e);
            }
          }(t)
        })
      }),
      null != n ? (0, a.jsx)(E.FocusRing, {
        offset: 4,
        children: (0, a.jsxs)('button', {
          type: 'button',
          onClick: n,
          className: Y.barButtonAlt,
          children: [
            function(e) {
              switch (e) {
                case 0:
                  return Z.Z.Messages.JUMP_TO_PRESENT;
                case 1:
                  return Z.Z.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                default:
                  return (0, x.vE)(e);
              }
            }(t),
            (0, a.jsx)(U.Z, {
              className: Y.barButtonIcon
            })
          ]
        })
      }) : (0, a.jsx)(E.Spinner, {
        type: E.Spinner.Type.PULSING_ELLIPSIS,
        className: Y.spinner,
        itemClassName: Y.spinnerItem
      })
    ]
  })
});
  },
  en = e => {
let {
  onClick: t,
  loading: n
} = e;
return (0, a.jsx)(P.G.Consumer, {
  children: e => e.disableInteractions ? null : (0, a.jsxs)(E.Clickable, {
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
      n ? (0, a.jsx)(E.Spinner, {
        type: E.Spinner.Type.PULSING_ELLIPSIS,
        className: Y.spinner,
        itemClassName: Y.spinnerItem
      }) : (0, a.jsx)('div', {
        className: Y.barButtonAlt,
        children: Z.Z.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
      })
    ]
  })
});
  };

function er(e) {
  let {
content: t,
channelId: n
  } = e, [r] = o.useState(() => (0, M.hQ)('NewMessagesBarJumpToNewMessages_')), i = o.useCallback(() => {
let e = R.ZP.ackMessageId(n);
null != e ? f.Z.jumpToMessage({
  channelId: n,
  messageId: e,
  offset: 1,
  context: 'Mark As Read'
}) : f.Z.jumpToMessage({
  channelId: n,
  messageId: k.default.castChannelIdAsMessageId(n),
  offset: 1,
  context: 'Mark As Read'
});
  }, [n]), s = o.useCallback(() => {
(0, h.In)(n);
  }, [n]), {
disableInteractions: u
  } = o.useContext(P.G);
  return u ? null : (0, a.jsxs)('div', {
className: l()(Y.newMessagesBar, {
  [Y.disableInteractions]: u
}),
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
      onClick: s,
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
  let {
channel: i,
content: s,
scrollManager: u
  } = e, {
disableInteractions: p
  } = o.useContext(P.G), [m, v] = o.useState(null), O = o.useRef(null), [y, D] = o.useState(null), L = o.useRef(null), b = (0, _.Wu)([A.Z], () => {
var e;
return null !== (e = A.Z.summaries(i.id)) && void 0 !== e ? e : [];
  }, [i]), M = (0, T.Z)(b);
  o.useEffect(() => {
!c().isEqual(M, b) && w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
  num_summaries: b.length,
  message_counts: b.map(e => e.count),
  start_message_ids: b.map(e => e.startId),
  end_message_ids: b.map(e => e.endId),
  num_participants: b.map(e => e.people.length),
  guild_id: i.guild_id,
  channel_id: i.id,
  channel_type: i.type
});
  }, [
b,
M,
i.guild_id,
i.id,
i.type
  ]);
  let G = (0, _.e7)([C.default], () => {
  var e;
  return null !== (e = null == b ? void 0 : b.map(e => {
    var t;
    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
      var t;
      return null !== (t = C.default.getUser(e)) && void 0 !== t ? t : null;
    }).filter(x.lm);
  })) && void 0 !== e ? e : [];
}, [b], ea),
B = null !== (n = (0, _.e7)([A.Z], () => A.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
V = null == b ? void 0 : null === (t = b[B]) || void 0 === t ? void 0 : t.topic;
  null == V && null == m && (null == b ? void 0 : b.length) >= 1 && (V = null === (r = b[0]) || void 0 === r ? void 0 : r.topic);
  let j = o.useMemo(() => c().debounce(e => {
  var t;
  v(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
}, 64), [v]),
W = o.useMemo(() => c().throttle(() => {
  (0, S.yK)(null);
}, 1200, {
  trailing: !1
}), []),
K = o.useCallback(e => {
  W(), j(e);
}, [
  j,
  W
]),
[z, q] = o.useState(!1),
Q = o.useCallback(() => {
  w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
    topics_dropdown_open: !z,
    num_summaries: b.length,
    message_counts: b.map(e => e.count),
    start_message_ids: b.map(e => e.startId),
    end_message_ids: b.map(e => e.endId),
    num_participants: b.map(e => e.people.length),
    guild_id: i.guild_id,
    channel_id: i.id,
    channel_type: i.type
  }), q(!z);
}, [
  z,
  b,
  q,
  i
]),
X = o.useCallback(function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.DZ.PILL_DROPDOWN,
    n = b[e];
  if (null == n)
    return;
  (0, S.wv)(i.id, n.id), (0, S.yK)(i.id, n.id);
  let r = () => {
    u.removeScrollCompleteCallback(r), setTimeout(() => {
      u.addAutomaticAnchorCallback(K, !1);
    }, 100);
  };
  u.removeAutomaticAnchorCallback(K), u.addScrollCompleteCallback(r), w.default.track(F.rMx.SUMMARIES_TOPIC_CLICKED, {
    source: t,
    message_id: n.startId,
    guild_id: i.guild_id,
    channel_id: i.id,
    channel_type: i.type
  }), f.Z.jumpToMessage({
    channelId: i.id,
    messageId: n.startId,
    flash: !0,
    offset: 0,
    jumpType: I.SR.ANIMATED,
    context: 'Summary Jump'
  });
}, [
  b,
  i,
  K,
  u
]),
$ = o.useCallback(e => {
  var t;
  q(e);
  let n = null === (t = L.current) || void 0 === t ? void 0 : t.scrollTop;
  null != n && D(n);
}, []);
  o.useEffect(() => {
if (null != y && z) {
  var e;
  null === (e = L.current) || void 0 === e || e.scrollTo({
    top: y
  });
}
  }, [
y,
z
  ]);
  let J = o.useCallback(e => {
var t;
if (!((0, d.k)(e.target) && (null === (t = O.current) || void 0 === t ? void 0 : t.contains(e.target))))
  z && w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
    topics_dropdown_open: !1,
    num_summaries: b.length,
    message_counts: b.map(e => e.count),
    start_message_ids: b.map(e => e.startId),
    end_message_ids: b.map(e => e.endId),
    num_participants: b.map(e => e.people.length),
    guild_id: i.guild_id,
    channel_id: i.id,
    channel_type: i.type
  }), $(!1);
  }, [
z,
b,
i,
$
  ]);
  o.useEffect(() => (u.addAutomaticAnchorCallback(K), () => {
u.removeAutomaticAnchorCallback(K);
  }), [
u,
K
  ]), o.useEffect(() => {
(0, S.G1)(i.id);
  }, [i.id]), o.useEffect(() => (document.addEventListener('mousedown', J), () => {
document.removeEventListener('mousedown', J);
  }), [J]);
  let ee = o.useMemo(() => (0, a.jsx)(N.Z, {
  channel: i,
  summaries: b,
  summariesMembers: G,
  selectTopic: X,
  setOpen: $
}), [
  b,
  G,
  X,
  $,
  i
]),
et = o.useCallback(() => {
  let e = R.ZP.ackMessageId(i.id);
  null != e ? f.Z.jumpToMessage({
    channelId: i.id,
    messageId: e,
    offset: 1,
    context: 'Mark As Read'
  }) : f.Z.jumpToMessage({
    channelId: i.id,
    messageId: k.default.castChannelIdAsMessageId(i.id),
    offset: 1,
    context: 'Mark As Read'
  });
}, [i.id]),
en = o.useCallback(() => {
  (0, h.In)(i.id);
}, [i.id]),
er = Z.Z.Messages.SUMMARIES_NO_SUMMARIES;
  return b.length > 0 && (er = '' === V || null == V ? Z.Z.Messages.SUMMARIES_VIEW_ALL : V), p ? null : (0, a.jsxs)('div', {
ref: O,
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
    children: s
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
  z && (0, a.jsxs)('div', {
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
              (0, a.jsx)(g.Z, {
                className: Y.summariesBetaTag
              })
            ]
          }),
          (0, a.jsx)(E.Clickable, {
            'aria-label': Z.Z.Messages.CLOSE,
            onClick: Q,
            className: Y.topicsDropdownClose,
            children: (0, a.jsx)(E.CloseSmallIcon, {
              size: 'md',
              color: 'currentColor'
            })
          })
        ]
      }),
      (0, a.jsx)(E.Scroller, {
        ref: L,
        className: Y.topicsScroller,
        fade: !0,
        children: ee
      })
    ]
  })
]
  });
}

function ea(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => {
var r, i;
return r = e, null == (i = t[n]) || r.length !== i.length || !!r.some((e, t) => i[t] !== e);
  });
}

function eo(e) {
  var t, n, r;
  let {
channel: i,
scrollManager: s
  } = e, {
disableInteractions: u
  } = o.useContext(P.G), [h, p] = o.useState(null), m = o.useRef(null), [v, O] = o.useState(null), R = o.useRef(null), y = (0, _.Wu)([A.Z], () => {
var e;
return null !== (e = A.Z.summaries(i.id)) && void 0 !== e ? e : [];
  }, [i]), D = (0, T.Z)(y);
  o.useEffect(() => {
!c().isEqual(D, y) && w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
  num_summaries: y.length,
  message_counts: y.map(e => e.count),
  start_message_ids: y.map(e => e.startId),
  end_message_ids: y.map(e => e.endId),
  num_participants: y.map(e => e.people.length),
  guild_id: i.guild_id,
  channel_id: i.id,
  channel_type: i.type
});
  }, [
y,
D,
i.guild_id,
i.id,
i.type
  ]);
  let L = (0, _.e7)([C.default], () => {
  var e;
  return null !== (e = null == y ? void 0 : y.map(e => {
    var t;
    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
      var t;
      return null !== (t = C.default.getUser(e)) && void 0 !== t ? t : null;
    }).filter(x.lm);
  })) && void 0 !== e ? e : [];
}, [y], ea),
b = null !== (n = (0, _.e7)([A.Z], () => A.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
M = null == y ? void 0 : null === (t = y[b]) || void 0 === t ? void 0 : t.topic;
  null == M && null == h && (null == y ? void 0 : y.length) >= 1 && (M = null === (r = y[0]) || void 0 === r ? void 0 : r.topic);
  let G = o.useMemo(() => c().get(y, b - 1), [
  b,
  y
]),
k = o.useMemo(() => c().get(y, b + 1), [
  b,
  y
]),
B = o.useMemo(() => c().debounce(e => {
  var t;
  p(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
}, 64), [p]),
V = o.useMemo(() => c().throttle(() => {
  (0, S.yK)(null);
}, 1200, {
  trailing: !1
}), []),
j = o.useCallback(e => {
  V(), B(e);
}, [
  B,
  V
]),
[W, K] = o.useState(!1),
z = o.useCallback(() => {
  w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
    topics_dropdown_open: !W,
    num_summaries: y.length,
    message_counts: y.map(e => e.count),
    start_message_ids: y.map(e => e.startId),
    end_message_ids: y.map(e => e.endId),
    num_participants: y.map(e => e.people.length),
    guild_id: i.guild_id,
    channel_id: i.id,
    channel_type: i.type
  }), K(!W);
}, [
  W,
  y,
  K,
  i
]),
q = o.useCallback(function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.DZ.PILL_DROPDOWN,
    n = y[e];
  if (null == n)
    return;
  (0, S.wv)(i.id, n.id), (0, S.yK)(i.id, n.id);
  let r = () => {
    s.removeScrollCompleteCallback(r), setTimeout(() => {
      s.addAutomaticAnchorCallback(j, !1);
    }, 100);
  };
  s.removeAutomaticAnchorCallback(j), s.addScrollCompleteCallback(r), w.default.track(F.rMx.SUMMARIES_TOPIC_CLICKED, {
    source: t,
    message_id: n.startId,
    guild_id: i.guild_id,
    channel_id: i.id,
    channel_type: i.type
  }), f.Z.jumpToMessage({
    channelId: i.id,
    messageId: n.startId,
    flash: !0,
    offset: 0,
    jumpType: I.SR.ANIMATED,
    context: 'Summary Jump'
  });
}, [
  y,
  i,
  j,
  s
]),
Q = o.useCallback(() => {
  q(b - 1, H.DZ.PILL_NEXT_ARROW);
}, [
  q,
  b
]),
X = o.useCallback(() => {
  q(b + 1, H.DZ.PILL_PREVIOUS_ARROW);
}, [
  b,
  q
]),
$ = o.useCallback(e => {
  var t;
  K(e);
  let n = null === (t = R.current) || void 0 === t ? void 0 : t.scrollTop;
  null != n && O(n);
}, []);
  o.useEffect(() => {
if (null != v && W) {
  var e;
  null === (e = R.current) || void 0 === e || e.scrollTo({
    top: v
  });
}
  }, [
v,
W
  ]);
  let J = o.useCallback(e => {
var t;
if (!((0, d.k)(e.target) && (null === (t = m.current) || void 0 === t ? void 0 : t.contains(e.target))))
  W && w.default.track(F.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
    topics_dropdown_open: !1,
    num_summaries: y.length,
    message_counts: y.map(e => e.count),
    start_message_ids: y.map(e => e.startId),
    end_message_ids: y.map(e => e.endId),
    num_participants: y.map(e => e.people.length),
    guild_id: i.guild_id,
    channel_id: i.id,
    channel_type: i.type
  }), $(!1);
  }, [
W,
y,
i,
$
  ]);
  o.useEffect(() => (s.addAutomaticAnchorCallback(j), () => {
s.removeAutomaticAnchorCallback(j);
  }), [
s,
j
  ]), o.useEffect(() => {
(0, S.G1)(i.id);
  }, [i.id]), o.useEffect(() => (document.addEventListener('mousedown', J), () => {
document.removeEventListener('mousedown', J);
  }), [J]);
  let ee = o.useMemo(() => (0, a.jsx)(N.Z, {
channel: i,
summaries: y,
summariesMembers: L,
selectTopic: q,
setOpen: $
  }), [
y,
L,
q,
$,
i
  ]);
  if (!(0, _.e7)([A.Z], () => A.Z.shouldShowTopicsBar()))
return null;
  let et = Z.Z.Messages.SUMMARIES_NO_SUMMARIES;
  return y.length > 0 && (et = '' === M || null == M ? Z.Z.Messages.SUMMARIES_VIEW_ALL : M), u ? null : (0, a.jsxs)('div', {
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
            className: l()(Y.topicsPillCaret, Y.topicsCaretLeft, {
              [Y.topicsPillCaretDisabled]: null == k
            }),
            children: (0, a.jsx)(U.Z, {
              width: 16,
              height: 16,
              direction: U.Z.Directions.UP
            })
          }),
          (0, a.jsx)(E.Clickable, {
            'aria-label': Z.Z.Messages.SUMMARY_PILL_PREVIOUS,
            onClick: Q,
            className: l()(Y.topicsPillCaret, Y.topicsCaretRight, {
              [Y.topicsPillCaretDisabled]: null == G
            }),
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
  W && (0, a.jsxs)('div', {
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
              (0, a.jsx)(g.Z, {
                className: Y.summariesBetaTag
              })
            ]
          }),
          (0, a.jsx)(E.Clickable, {
            'aria-label': Z.Z.Messages.CLOSE,
            onClick: z,
            className: Y.topicsDropdownClose,
            children: (0, a.jsx)(E.CloseSmallIcon, {
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
  });
}
let es = function(e) {
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
    t && (0, a.jsx)(E.Text, {
      className: Y.clickCTA,
      color: 'text-muted',
      variant: 'text-sm/normal',
      children: Z.Z.Messages.EMOJI_TOOLTIP_CLICK_CTA
    })
  ]
});
  },
  el = e => {
let {
  children: t,
  className: n
} = e;
return (0, a.jsx)('div', {
  className: l()(Y.popoutContainer, n),
  children: t
});
  },
  eu = e => {
let {
  className: t
} = e;
return (0, a.jsx)(el, {
  className: t,
  children: (0, a.jsx)('div', {
    className: Y.popoutLoadingBackground,
    children: (0, a.jsx)('div', {
      className: Y.popoutLoadingForeground
    })
  })
});
  };