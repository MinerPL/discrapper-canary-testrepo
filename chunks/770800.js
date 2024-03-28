"use strict";
a.r(t), a("571269"), a("298267");
var r = a("735250"),
  n = a("470079"),
  i = a("392711"),
  l = a.n(i),
  s = a("442837"),
  o = a("481060"),
  d = a("19780"),
  u = a("226961"),
  c = a("914010"),
  m = a("959457"),
  f = a("246946"),
  p = a("594174"),
  h = a("285952"),
  g = a("5192"),
  C = a("476221"),
  S = a("481250"),
  v = a("206314"),
  y = a("513547"),
  R = a("65154"),
  D = a("689938"),
  E = a("299552"),
  T = a("794711");
class F extends n.PureComponent {
  render() {
    let {
      transport: e,
      mediaSessionId: t,
      hidePersonalInformation: a,
      hostname: n
    } = this.props;
    if (null == e) return (0, r.jsx)(o.Spinner, {
      type: o.Spinner.Type.SPINNING_CIRCLE
    });
    let i = {
        ...e,
        hostname: n
      },
      s = l().map(i, (e, t) => {
        if ("receiverReports" !== t && (!a || "localAddress" !== t)) return (0, r.jsx)(y.Item, {
          label: t,
          value: e
        }, t)
      }),
      d = l().map(i.receiverReports, e => {
        let t = Array.isArray(e.bitrate) ? null === (l = e.bitrate.at(-1)) || void 0 === l ? void 0 : l.value : e,
          a = (0, r.jsxs)(h.default, {
            id: "bitrate-".concat(e.id),
            justify: h.default.Justify.BETWEEN,
            children: [(0, r.jsx)("span", {
              children: "Bitrate:"
            }), (0, r.jsxs)("span", {
              children: [(t / 1e3).toFixed(2), " Kbps"]
            })]
          }),
          n = (0, r.jsxs)(h.default, {
            id: "lost-".concat(e.id),
            justify: h.default.Justify.BETWEEN,
            children: [(0, r.jsx)("span", {
              children: "Packet Loss:"
            }), (0, r.jsxs)("span", {
              children: [(100 * e.fractionLost / 256).toFixed(0), "%"]
            })]
          }),
          i = p.default.getUser(e.id);
        var l, s = g.default.getNickname(c.default.getGuildId(), void 0, i);
        return null == s && (s = null != i ? i.username : e.id), (0, r.jsx)(v.default, {
          label: e.id,
          valueRendered: [a, n],
          children: s
        }, e.id)
      });
    return (0, r.jsxs)(o.FormSection, {
      tag: o.FormTitleTags.H2,
      title: D.default.Messages.RTC_DEBUG_TRANSPORT + (null != t ? " - " + t : ""),
      className: E.allowSelection,
      children: [(0, S.renderTwoColumns)(s), 0 === d.length ? null : (0, r.jsx)(o.FormDivider, {
        className: T.marginBottom20
      }), (0, S.renderTwoColumns)(d)]
    })
  }
}
t.default = s.default.connectStores([u.default, d.default, f.default, m.default], e => {
  let {
    context: t,
    index: a
  } = e, r = u.default.getAllStats(t)[a], n = t === R.MediaEngineContextTypes.STREAM ? m.default.getHostname(m.default.getActiveStreamKey()) : d.default.getHostname();
  return {
    hidePersonalInformation: f.default.hidePersonalInformation,
    transport: null != r ? r.transport : null,
    mediaSessionId: d.default.getMediaSessionId(),
    hostname: C.default.getShortHostname(n)
  }
})(F)