"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("761414"),
  u = n("590739"),
  d = n("792304"),
  c = n("319643"),
  f = n("481060"),
  h = n("210887"),
  C = n("19780"),
  p = n("72416"),
  m = n("476221"),
  g = n("236756"),
  E = n("981631"),
  S = n("601738");
let _ = {
    [E.RTCConnectionQuality.UNKNOWN]: f.Tooltip.Colors.BLACK,
    [E.RTCConnectionQuality.BAD]: f.Tooltip.Colors.RED,
    [E.RTCConnectionQuality.AVERAGE]: f.Tooltip.Colors.YELLOW,
    [E.RTCConnectionQuality.FINE]: f.Tooltip.Colors.GREEN
  },
  I = {
    [E.ConnectionStatus.CONNECTED]: S.rtcConnectionStatusConnected,
    [E.ConnectionStatus.CONNECTING]: S.rtcConnectionStatusConnecting,
    [E.ConnectionStatus.ERROR]: S.rtcConnectionStatusError
  },
  N = {
    [E.RTCConnectionQuality.FINE]: S.rtcConnectionQualityFine,
    [E.RTCConnectionQuality.AVERAGE]: S.rtcConnectionQualityAverage,
    [E.RTCConnectionQuality.BAD]: S.rtcConnectionQualityBad,
    [E.RTCConnectionQuality.UNKNOWN]: null
  },
  T = r.default.connectStores([C.default, h.default], () => ({
    theme: h.default.theme,
    connectionState: C.default.getState(),
    hostname: C.default.getHostname(),
    averagePing: C.default.getAveragePing(),
    lastPing: C.default.getLastPing(),
    outboundLossRate: C.default.getOutboundLossRate(),
    pings: C.default.getPings()
  }))(g.default);
class A extends a.PureComponent {
  renderPopoutTarget(e) {
    return (0, l.jsx)(f.Popout, {
      renderPopout: this.renderPopout,
      position: "top",
      children: e
    })
  }
  renderStatus() {
    let {
      statusTextClassName: e,
      hasVideo: t,
      state: n
    } = this.props, {
      connectionStatus: a,
      connectionStatusText: s
    } = m.default.getStatus(n, t);
    return this.renderPopoutTarget(t => {
      let {
        onClick: n
      } = t;
      return (0, l.jsx)(f.Button, {
        look: f.Button.Looks.BLANK,
        size: f.Button.Sizes.NONE,
        className: i()(e, I[a]),
        onClick: n,
        children: s
      })
    })
  }
  render() {
    let e;
    let {
      quality: t,
      smallPing: n,
      lastPing: a,
      state: s,
      className: r,
      children: o
    } = this.props;
    return s === E.RTCConnectionStates.RTC_CONNECTED && (e = (0, l.jsx)(f.Tooltip, {
      text: t !== E.RTCConnectionQuality.UNKNOWN && null != a ? "".concat(a.toFixed(0), " ms") : null,
      color: _[t],
      children: e => (0, l.jsx)(L, {
        quality: t,
        smallPing: n,
        ...e
      })
    })), (0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: i()(S.rtcConnectionStatus, N[t], r),
        children: [e, (0, l.jsx)("div", {
          className: S.labelWrapper,
          children: this.renderStatus()
        })]
      }), o]
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "renderPopout", a = e => (0, l.jsx)(T, {
      ...e
    }), n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}

function L(e) {
  let {
    quality: t,
    smallPing: n,
    ...a
  } = e;
  if (!(0, f.useRedesignIconContext)().enabled) return (0, l.jsx)(p.default, {
    className: i()(S.ping, {
      [S.smallPing]: n
    }),
    foreground: S.pingForeground
  });
  {
    let e = {
      [E.RTCConnectionQuality.FINE]: d.ConnectionFineIcon,
      [E.RTCConnectionQuality.AVERAGE]: o.ConnectionAverageIcon,
      [E.RTCConnectionQuality.BAD]: u.ConnectionBadIcon,
      [E.RTCConnectionQuality.UNKNOWN]: c.ConnectionUnknownIcon
    } [t];
    return (0, l.jsx)(e, {
      className: i()(S.ping, {
        [S.smallPing]: n
      }),
      ...a
    })
  }
}
t.default = A