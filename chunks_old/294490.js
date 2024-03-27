"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var a, n = s("37983"),
  l = s("884691"),
  i = s("414456"),
  r = s.n(i),
  o = s("49111"),
  d = s("814480");
a = class extends l.Component {
  render() {
    let {
      className: e,
      videoID: t,
      videoClassName: s
    } = this.props;
    return (0, n.jsx)("div", {
      className: r(e, d.videoWrapper),
      children: (0, n.jsx)("iframe", {
        className: r(s, d.video),
        src: "https://www.youtube.com/embed/".concat(t, "?rel=0&showinfo=0&controls=1&origin=https://").concat(o.PRIMARY_DOMAIN),
        allowFullScreen: !0,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      })
    })
  }
}