"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("718017"),
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
  S = n("328363"),
  _ = n("473725");
let T = 16 / 9,
  I = 8 + E.PARTICIPANTS_HEIGHT;

function A(e) {
  let t, {
      onSelectParticipant: n,
      onContextMenuParticipant: s,
      onFullscreenParticipant: A,
      participants: v,
      filteredParticipants: N,
      popoutWindow: x,
      inCall: M,
      channel: R,
      selectedParticipant: L,
      showParticipants: y = !0,
      className: O,
      paused: j,
      width: P,
      height: D,
      layout: b,
      idle: U
    } = e,
    F = null != x,
    w = c.default.getVideoComponent(),
    k = d.default.getId(),
    [H, B] = l.useState(null),
    [G, V] = l.useState(!0),
    [W, Y] = l.useState(!1),
    z = L.type === g.ParticipantTypes.ACTIVITY,
    Z = !z && null != L.streamId,
    K = Z && null != H && H.width > 0 && H.height > 0 ? H.width / H.height : T,
    X = D <= 2 * I + 144,
    q = y && !X,
    Q = (0, o.default)(q),
    J = 0;
  (z || q) && (J += 72), z && !q && (J += 48), q && (J += .5 * I + 8);
  let $ = D - 2 * J,
    ee = $ * K,
    et = Math.floor(Math.min(P, ee) / K),
    en = D > P / K + 72 + I + 8;
  t = q || z ? q ? -16 : -8 : 40 + Math.max(0, 72 - (D - et) / 2), l.useEffect(() => {
    let e = setTimeout(() => {
      V(!1)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let ea = (0, r.useSpring)({
      value: q ? 1 : 0,
      delay: en || !q ? 0 : 100,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      onStart: () => Y(!0),
      onChange: () => f.ComponentDispatch.dispatch(C.ComponentActions.REMEASURE_TARGET),
      onRest: () => {
        Y(!1), f.ComponentDispatch.dispatch(C.ComponentActions.REMEASURE_TARGET)
      }
    }),
    el = (0, r.useSpring)({
      value: q ? 1 : 0,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    es = (0, r.useSpring)({
      value: ee,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      immediate: Q === q && el.value.idle
    }),
    ei = (0, r.useSpring)({
      value: t,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    er = (0, r.useTransition)(L, {
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
    eo = l.useCallback(e => {
      B(e), V(!1)
    }, []),
    eu = q || j ? [] : (0, p.getPipParticipants)(v, L, k),
    {
      visibleParticipants: ed,
      participantTileWidth: ec
    } = (0, E.useVisibleParticipants)(P, N);
  return (0, a.jsxs)("div", {
    className: i()(_.root, S.flexCenter, O),
    children: [(0, a.jsxs)("div", {
      className: _.tileWrapper,
      style: {
        opacity: Z && G ? 0 : 1
      },
      children: [(0, a.jsxs)(r.animated.div, {
        className: _.videoFrame,
        style: {
          top: el.value.to(e => -e * I / 2)
        },
        children: [(0, a.jsx)(r.animated.div, {
          style: {
            width: es.value
          },
          className: _.videoWrapper,
          children: (0, a.jsx)("div", {
            className: i()(S.videoSizer),
            style: {
              aspectRatio: K
            },
            children: er((e, t, l) => {
              let {
                key: i
              } = l;
              return null != t ? (0, a.jsx)(r.animated.div, {
                className: S.videoWrapperAnimated,
                style: e,
                children: (0, a.jsx)(h.default, {
                  focused: !0,
                  noBorder: ee >= P || $ >= D,
                  channel: R,
                  className: S.focusedVideo,
                  videoComponent: w,
                  paused: j,
                  width: P,
                  participant: t,
                  onClick: n,
                  onDoubleClick: A,
                  onContextMenu: s,
                  onVideoResize: eo,
                  inCall: M,
                  inPopout: F
                })
              }, i) : null
            })
          })
        }), X || b === C.ChannelLayouts.MINIMUM || b === C.ChannelLayouts.NORMAL ? null : (0, a.jsx)(r.animated.div, {
          className: i()(_.actionRow, {
            [_.idle]: U
          }),
          style: {
            bottom: ei.value
          },
          children: (0, a.jsx)(u.default, {
            channelId: R.id,
            isParticipantsOpen: y,
            isVertical: !0
          })
        })]
      }), (0, a.jsx)(r.animated.div, {
        className: _.participantsWrapperAnimated,
        style: {
          translateY: ea.value.to(e => e * I / 2),
          opacity: ea.value,
          visibility: ea.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, a.jsx)(E.default, {
          channel: R,
          onClick: n,
          onContextMenu: s,
          onDoubleClick: A,
          participants: ed,
          participantTileWidth: ec,
          selectedParticipantId: L.id,
          inCall: M,
          paused: j || W || !y,
          popoutWindow: x
        })
      })]
    }), eu.length > 0 ? (0, a.jsx)(m.default, {
      onContextMenuParticipant: s,
      width: P,
      height: D,
      channel: R,
      participants: eu
    }) : null]
  })
}