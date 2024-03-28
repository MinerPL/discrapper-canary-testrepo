"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n.n(a),
  i = n("803997"),
  r = n.n(i),
  o = n("46973"),
  u = n("481060"),
  d = n("304680"),
  c = n("706619"),
  f = n("695346"),
  h = n("131951"),
  C = n("757206"),
  p = n("441957"),
  m = n("630641"),
  g = n("626135"),
  E = n("572004"),
  S = n("63063"),
  _ = n("476221"),
  I = n("981631"),
  N = n("65154"),
  T = n("689938"),
  A = n("171030");
let L = () => {
  h.default.getMediaEngine().once(o.MediaEngineEvent.ConnectionStats, e => {
    let t = Object.values(N.MediaEngineContextTypes).map(t => {
      let n = e.filter(e => {
        let {
          connection: n
        } = e;
        return n.context === t
      }).map((e, n) => {
        let l = e.stats;
        return l.context = t, l.index = n, l
      });
      for (let e of n) {
        var l;
        (null == e ? void 0 : null === (l = e.transport) || void 0 === l ? void 0 : l.localAddress) != null && (e.transport.localAddress = "(redacted)")
      }
      return n
    }).filter(e => e.length > 0);
    (0, E.copy)(JSON.stringify(t, null, 2)), (0, u.showToast)((0, u.createToast)(T.default.Messages.COPIED, u.ToastType.SUCCESS))
  })
};
t.default = function(e) {
  (0, a.useEffect)(() => {
    g.default.track(I.AnalyticEvents.OPEN_POPOUT, {
      type: "RTC Connection"
    })
  }, []);
  let t = (0, a.useCallback)(() => {
      let {
        closePopout: t
      } = e;
      null != t && t(), d.open()
    }, [e]),
    n = (0, a.useCallback)(() => {
      let {
        hostname: t,
        averagePing: n,
        lastPing: a,
        outboundLossRate: i
      } = e, o = f.DeveloperMode.getSetting();
      return (0, l.jsxs)(s().Fragment, {
        children: [o && (0, l.jsxs)("div", {
          children: [(0, l.jsx)("div", {
            className: A.graphContainer,
            children: (0, l.jsx)(c.default, {
              dataPoints: e.pings,
              width: 258,
              height: 80
            })
          }), (0, l.jsx)("div", {
            className: A.popoutText,
            children: (0, l.jsx)("strong", {
              children: _.default.getShortHostname(t)
            })
          })]
        }), (0, l.jsx)("div", {
          className: A.popoutText,
          children: T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_AVERAGE_PING.format({
            averagePing: n.toFixed(0)
          })
        }), null != a ? (0, l.jsx)("div", {
          className: A.popoutText,
          children: T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LAST_PING.format({
            lastPing: a.toFixed(0)
          })
        }) : null, null != i ? (0, l.jsx)("div", {
          className: A.popoutText,
          children: T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LOSS_VALUE.format({
            outboundLossRate: i.toFixed(1)
          })
        }) : null, (0, l.jsxs)("div", {
          className: r()(A.popoutText, A.popoutTextDetails),
          children: [null == i ? T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS.format({
            badPing: 250
          }) : null, null != i ? T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS_WITH_LOSS.format({
            badPing: 250,
            badLossRate: 10
          }) : null]
        })]
      })
    }, [e]),
    {
      connectionState: i
    } = e,
    o = f.DeveloperMode.getSetting(),
    E = {
      [I.RTCConnectionStates.AWAITING_ENDPOINT]: T.default.Messages.RTC_CONNECTION_STATE_AWAITING_ENDPOINT.format({
        url: I.Links.STATUS
      }),
      [I.RTCConnectionStates.CONNECTING]: T.default.Messages.RTC_CONNECTION_STATE_CONNECTING,
      [I.RTCConnectionStates.AUTHENTICATING]: T.default.Messages.RTC_CONNECTION_STATE_AUTHENTICATING,
      [I.RTCConnectionStates.DISCONNECTED]: T.default.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
      [I.RTCConnectionStates.RTC_CONNECTING]: T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTING,
      [I.RTCConnectionStates.ICE_CHECKING]: T.default.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
        url: S.default.getArticleURL(I.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
      }),
      [I.RTCConnectionStates.DTLS_CONNECTING]: T.default.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
        url: S.default.getArticleURL(I.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
      }),
      [I.RTCConnectionStates.RTC_CONNECTED]: n,
      [I.RTCConnectionStates.NO_ROUTE]: T.default.Messages.RTC_CONNECTION_STATE_NO_ROUTE.format({
        url: S.default.getArticleURL(I.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
      }),
      [I.RTCConnectionStates.RTC_DISCONNECTED]: T.default.Messages.RTC_CONNECTION_STATE_DISCONNECTED
    } [i];
  return (0, l.jsx)("div", {
    className: A.container,
    children: (0, l.jsxs)("section", {
      className: A.section,
      children: ["function" == typeof E ? E() : (0, l.jsx)("p", {
        className: r()(A.popoutText, A.popoutTextDetails),
        children: E
      }), (0, l.jsx)("hr", {
        className: A.separator
      }), (0, l.jsxs)("div", {
        className: A.popoutBottom,
        children: [(0, l.jsxs)("span", {
          className: r()(A.secured, A.textWithIcon),
          children: [(0, l.jsx)(m.default, {
            width: 12,
            height: 12,
            color: u.tokens.colors.TEXT_POSITIVE.css,
            className: A.__invalid_icon
          }), T.default.Messages.SECURE_CONNECTION]
        }), o && h.default.supports(N.Features.DIAGNOSTICS) && !__OVERLAY__ && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsxs)(u.Anchor, {
            className: r()(A.debugButton, A.textWithIcon),
            onClick: t,
            children: [T.default.Messages.DEBUG, (0, l.jsx)(p.default, {
              className: A.__invalid_icon,
              width: 12,
              height: 12
            })]
          }), (0, l.jsxs)(u.Anchor, {
            className: r()(A.copyStatsButton, A.textWithIcon),
            onClick: L,
            title: "Copy to clipboard",
            children: [T.default.Messages.COPY_STATS, (0, l.jsx)(C.default, {
              className: A.__invalid_icon,
              width: 12,
              height: 12
            })]
          })]
        }), !o && !__OVERLAY__ && (0, l.jsx)(u.Anchor, {
          className: A.debugButton,
          href: S.default.getArticleURL(I.HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING),
          children: T.default.Messages.LEARN_MORE
        })]
      })]
    })
  })
}