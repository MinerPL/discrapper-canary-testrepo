"use strict";
a.r(t);
var r = a("735250"),
  n = a("470079"),
  i = a("392711"),
  l = a.n(i),
  s = a("481060"),
  o = a("481250"),
  d = a("513547"),
  u = a("689938");
class c extends n.PureComponent {
  render() {
    let {
      screenshare: e
    } = this.props;
    if (null == e) return (0, r.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE
    });
    let t = l().map(e, (e, t) => {
      if (!(d.hidden[t] || void 0 === e)) return (0, r.jsx)(d.Item, {
        label: t,
        value: e
      }, t)
    });
    return (0, r.jsx)(s.FormSection, {
      tag: s.FormTitleTags.H2,
      title: u.default.Messages.RTC_DEBUG_SCREENSHARE,
      children: (0, o.renderTwoColumns)(t)
    })
  }
}
t.default = c