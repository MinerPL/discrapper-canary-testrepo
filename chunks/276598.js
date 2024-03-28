"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("524437"),
  r = n("481060"),
  o = n("358221"),
  u = n("243778"),
  d = n("390322"),
  c = n("871499"),
  f = n("819640"),
  h = n("797258"),
  m = n("446226"),
  p = n("937393"),
  E = n("43982"),
  C = n("721351"),
  g = n("420529"),
  S = n("927923"),
  _ = n("981631"),
  T = n("921944"),
  I = n("689938"),
  A = n("639199");

function v(e) {
  let {
    onClose: t,
    channel: n
  } = e, l = (0, g.default)(n);
  return (0, a.jsx)(r.Menu, {
    onClose: t,
    onSelect: () => null,
    navId: "transfer-menu",
    "aria-label": I.default.Messages.TRANSFER,
    children: l
  })
}

function N(e) {
  let {
    channel: t,
    showLeftDivider: n = !1,
    ...g
  } = e, N = (0, m.default)(), x = (0, s.useStateFromStores)([h.default], () => {
    var e, t;
    return null === (e = h.default.getSessionById(null !== (t = null == N ? void 0 : N.sessionId) && void 0 !== t ? t : "")) || void 0 === e ? void 0 : e.clientInfo.os
  }), M = (0, s.useStateFromStores)([f.default], () => f.default.hasLayers()), [R, L] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.getMode(t.id), o.default.getLayout(t.id)]), y = (0, r.useModalsStore)(r.hasAnyModalOpenSelector), O = (0, p.default)(), j = O.filter(e => e.twoWayLink), [P, D] = l.useState(!1);
  if (null == N && 0 === O.length || t.isBroadcastChannel()) return null;
  let b = _.ChannelModes.VOICE !== R && [_.ChannelLayouts.NO_CHAT, _.ChannelLayouts.FULL_SCREEN].includes(L) ? "top" : "bottom",
    U = [];
  return j.length > 0 && U.push(i.DismissibleContent.DONUT_DESKTOP_NUX), (0, a.jsx)(u.default, {
    contentTypes: U,
    children: e => {
      let {
        visibleContent: l,
        markAsDismissed: s
      } = e, o = l === i.DismissibleContent.DONUT_DESKTOP_NUX;
      return (0, a.jsxs)(a.Fragment, {
        children: [n ? (0, a.jsx)("div", {
          className: A.leftDivider
        }) : null, (0, a.jsx)(r.Popout, {
          position: b,
          spacing: o ? 16 : void 0,
          positionKey: "".concat(R, ":").concat(L),
          onRequestClose: () => D(!1),
          shouldShow: (o || P) && !M && !y,
          renderPopout: e => {
            let {
              closePopout: n
            } = e;
            return (0, a.jsx)(d.default, {
              children: o ? (0, a.jsx)(E.default, {
                popoutPosition: b,
                onDismiss: () => s(T.ContentDismissActionType.UNKNOWN),
                onAccept: () => {
                  s(T.ContentDismissActionType.UNKNOWN), D(!0)
                },
                gameConsoleAccounts: j
              }) : (0, a.jsx)(v, {
                onClose: () => {
                  n()
                },
                channel: t
              })
            })
          },
          children: e => {
            var t;
            return (0, a.jsx)(c.default, {
              ...e,
              ...g,
              onClick: () => D(!0),
              label: null != (t = x) ? t === S.GameConsoleTypes.XBOX ? I.default.Messages.XBOX_REMOTE_CONNECTED_RAW : I.default.Messages.PLAYSTATION_REMOTE_CONNECTED_RAW : I.default.Messages.CONSOLE_TRANSFER,
              iconComponent: (0, C.default)(x)
            })
          }
        })]
      })
    }
  })
}