"use strict";
a.r(t), a("411104");
var r = a("735250"),
  n = a("470079"),
  i = a("442837"),
  l = a("481060"),
  s = a("271383"),
  o = a("19780"),
  d = a("226961"),
  u = a("594174"),
  c = a("51144"),
  m = a("481250"),
  f = a("689938");
class p extends n.PureComponent {
  render() {
    let {
      streams: e,
      userId: t,
      mediaEngineConnectionId: a,
      videoStreams: n
    } = this.props;
    if (null == t || null == e || 0 === e.length) return (0, r.jsx)(l.Spinner, {
      type: l.Spinner.Type.SPINNING_CIRCLE
    });
    let i = o.default.getGuildId(),
      d = u.default.getUser(t),
      p = s.default.getNick(i, t),
      h = null == d ? f.default.Messages.RTC_DEBUG_RTP_INBOUND : "".concat(f.default.Messages.RTC_DEBUG_RTP_INBOUND, " — ").concat(null != p ? p : c.default.getName(d));
    return (0, r.jsx)(l.FormSection, {
      tag: l.FormTitleTags.H2,
      title: h,
      children: (0, m.renderStreams)(e, a, t, n)
    })
  }
}
t.default = i.default.connectStores([d.default], e => {
  let {
    context: t,
    index: a,
    videoStreams: r
  } = e, n = d.default.getAllStats(t)[a], {
    section: i
  } = (0, d.parseSection)(d.default.getSection());
  if (null == i) throw Error("Unrecognized section format");
  let l = null;
  if (null != n && null != n.rtp.inbound) {
    var s;
    l = null !== (s = n.rtp.inbound[i]) && void 0 !== s ? s : []
  }
  return {
    mediaEngineConnectionId: null == n ? void 0 : n.mediaEngineConnectionId,
    userId: i,
    streams: l,
    videoStreams: r
  }
})(p)