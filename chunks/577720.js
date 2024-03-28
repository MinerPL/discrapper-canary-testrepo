"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("981631"),
  o = s("587345");
class d extends n.Component {
  render() {
    let {
      className: e,
      videoID: t,
      videoClassName: s
    } = this.props;
    return (0, a.jsx)("div", {
      className: i()(e, o.videoWrapper),
      children: (0, a.jsx)("iframe", {
        className: i()(s, o.video),
        src: "https://www.youtube.com/embed/".concat(t, "?rel=0&showinfo=0&controls=1&origin=https://").concat(r.PRIMARY_DOMAIN),
        allowFullScreen: !0,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      })
    })
  }
}