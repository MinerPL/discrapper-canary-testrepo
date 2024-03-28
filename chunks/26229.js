"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079");
class l extends a.PureComponent {
  render() {
    let {
      layout: e,
      layoutSize: t,
      className: n,
      renderWidget: a
    } = this.props;
    return null != e ? (0, i.jsx)("div", {
      className: n,
      style: {
        width: t.width,
        height: t.height
      },
      children: e.widgets.map(e => a(e, t))
    }) : null
  }
}
t.default = l