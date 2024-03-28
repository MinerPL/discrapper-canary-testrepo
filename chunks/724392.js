"use strict";
a.r(t);
var r = a("735250"),
  n = a("470079"),
  i = a("442837"),
  l = a("481060"),
  s = a("226961"),
  o = a("481250"),
  d = a("689938");
class u extends n.PureComponent {
  render() {
    let {
      outbound: e
    } = this.props;
    return null == e ? (0, r.jsx)(l.Spinner, {
      type: l.Spinner.Type.SPINNING_CIRCLE
    }) : (0, r.jsx)(l.FormSection, {
      tag: l.FormTitleTags.H2,
      title: d.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
      children: (0, o.renderStreams)(e)
    })
  }
}
t.default = i.default.connectStores([s.default], e => {
  let {
    context: t,
    index: a
  } = e, r = s.default.getAllStats(t)[a];
  return {
    outbound: null != r ? r.rtp.outbound : null
  }
})(u)