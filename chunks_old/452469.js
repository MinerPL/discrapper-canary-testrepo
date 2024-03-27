"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var s = n("653564"),
  l = n("987317"),
  i = n("713726"),
  r = n("754493"),
  o = n("374021"),
  u = n("649275"),
  d = n("751661"),
  c = n("734019"),
  f = n("962541"),
  E = n("782340");

function h(e) {
  let {
    tooltipText: t,
    onClick: n
  } = e, l = (0, s.useEndCallLottie)();
  return (0, a.jsx)(f.default, {
    tooltipText: t,
    onClick: n,
    ...l.events,
    icon: l.Component
  })
}

function _() {
  return (0, a.jsx)(h, {
    tooltipText: E.default.Messages.DISCONNECT_SELF,
    onClick: () => {
      (0, i.stopBroadcast)(), l.default.disconnect()
    }
  })
}

function C(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsx)(h, {
    tooltipText: E.default.Messages.AUDIENCE_DISCONNECT,
    onClick: () => {
      if ((0, c.default)(t)) {
        (0, d.openEndStageModal)(t);
        return
      }
      l.default.disconnect()
    }
  })
}

function S(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsx)(h, {
    tooltipText: E.default.Messages.DISCONNECT_SELF,
    onClick: () => {
      if ((0, u.default)(t)) {
        (0, o.openEndEventModal)(t);
        return
      }
      l.default.disconnect()
    }
  })
}

function I(e) {
  let {
    channel: t
  } = e, n = (0, r.default)();
  return t.isGuildStageVoice() ? (0, a.jsx)(C, {
    channel: t
  }) : n && t.isBroadcastChannel() ? (0, a.jsx)(_, {}) : (0, a.jsx)(S, {
    channel: t
  })
}