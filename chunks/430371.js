"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("920906"),
  o = n("110924"),
  u = n("157813"),
  d = n("314897"),
  c = n("131951"),
  f = n("585483"),
  h = n("27457"),
  m = n("111248"),
  p = n("312703"),
  E = n("796638"),
  C = n("981631"),
  g = n("354459"),
  S = n("825532"),
  _ = n("16869");
let T = 16 / 9,
  I = 8 + E.PARTICIPANTS_HEIGHT;

function A(e) {
  let t, {
      onSelectParticipant: n,
      onContextMenuParticipant: s,
      onFullscreenParticipant: A,
      participants: N,
      filteredParticipants: v,
      popoutWindow: x,
      inCall: M,
      channel: R,
      selectedParticipant: y,
      showParticipants: L = !0,
      className: O,
      paused: j,
      width: P,
      height: D,
      layout: b,
      idle: U,
      forceShowToggleParticipants: F
    } = e,
    w = null != x,
    k = c.default.getVideoComponent(),
    B = d.default.getId(),
    [H, G] = l.useState(null),
    [V, W] = l.useState(!0),
    [Y, z] = l.useState(!1),
    K = y.type === g.ParticipantTypes.ACTIVITY,
    Z = !K && null != y.streamId,
    q = Z && null != H && H.width > 0 && H.height > 0 ? H.width / H.height : T,
    X = D <= 2 * I + 144,
    Q = L && !X,
    J = (0, o.default)(Q),
    $ = 0;
  (K || Q) && ($ += 72), K && !Q && ($ += 48), Q && ($ += .5 * I + 8);
  let ee = D - 2 * $,
    et = ee * q,
    en = Math.floor(Math.min(P, et) / q),
    ea = D > P / q + 72 + I + 8;
  t = Q || K ? Q ? -16 : -8 : 40 + Math.max(0, 72 - (D - en) / 2), l.useEffect(() => {
    let e = setTimeout(() => {
      W(!1)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let el = (0, r.useSpring)({
      value: Q ? 1 : 0,
      delay: ea || !Q ? 0 : 100,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      onStart: () => z(!0),
      onChange: () => f.ComponentDispatch.dispatch(C.ComponentActions.REMEASURE_TARGET),
      onRest: () => {
        z(!1), f.ComponentDispatch.dispatch(C.ComponentActions.REMEASURE_TARGET)
      }
    }),
    es = (0, r.useSpring)({
      value: Q ? 1 : 0,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    ei = (0, r.useSpring)({
      value: et,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      immediate: J === Q && es.value.idle
    }),
    er = (0, r.useSpring)({
      value: t,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    eo = (0, r.useTransition)(y, {
      keys: e => null == e ? void 0 : e.id,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      initial: null,
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    }),
    eu = l.useCallback(e => {
      G(e), W(!1)
    }, []),
    ed = Q || j ? [] : (0, p.getPipParticipants)(N, y, B),
    {
      visibleParticipants: ec,
      participantTileWidth: ef
    } = (0, E.useVisibleParticipants)(P, v);
  return (0, a.jsxs)("div", {
    className: i()(_.root, S.flexCenter, O),
    children: [(0, a.jsxs)("div", {
      className: _.tileWrapper,
      style: {
        opacity: Z && V ? 0 : 1
      },
      children: [(0, a.jsxs)(r.animated.div, {
        className: _.videoFrame,
        style: {
          top: es.value.to(e => -e * I / 2)
        },
        children: [(0, a.jsx)(r.animated.div, {
          style: {
            width: ei.value
          },
          className: _.videoWrapper,
          children: (0, a.jsx)("div", {
            className: i()(S.videoSizer),
            style: {
              aspectRatio: q
            },
            children: eo((e, t, l) => {
              let {
                key: i
              } = l;
              return null != t ? (0, a.jsx)(r.animated.div, {
                className: S.videoWrapperAnimated,
                style: e,
                children: (0, a.jsx)(h.default, {
                  focused: !0,
                  noBorder: et >= P || ee >= D,
                  channel: R,
                  className: S.focusedVideo,
                  videoComponent: k,
                  paused: j,
                  width: P,
                  participant: t,
                  onClick: n,
                  onDoubleClick: A,
                  onContextMenu: s,
                  onVideoResize: eu,
                  inCall: M,
                  inPopout: w
                })
              }, i) : null
            })
          })
        }), F || !X && b !== C.ChannelLayouts.MINIMUM && b !== C.ChannelLayouts.NORMAL ? (0, a.jsx)(r.animated.div, {
          className: i()(_.actionRow, {
            [_.idle]: U
          }),
          style: {
            bottom: er.value
          },
          children: (0, a.jsx)(u.default, {
            channelId: R.id,
            isParticipantsOpen: L,
            isVertical: !0
          })
        }) : null]
      }), (0, a.jsx)(r.animated.div, {
        className: _.participantsWrapperAnimated,
        style: {
          translateY: el.value.to(e => e * I / 2),
          opacity: el.value,
          visibility: el.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, a.jsx)(E.default, {
          channel: R,
          onClick: n,
          onContextMenu: s,
          onDoubleClick: A,
          participants: ec,
          participantTileWidth: ef,
          selectedParticipantId: y.id,
          inCall: M,
          paused: j || Y || !L,
          popoutWindow: x
        })
      })]
    }), ed.length > 0 ? (0, a.jsx)(m.default, {
      onContextMenuParticipant: s,
      width: P,
      height: D,
      channel: R,
      participants: ed
    }) : null]
  })
}