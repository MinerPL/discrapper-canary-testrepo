"use strict";
n.r(t), n("47120");
var i, r = n("735250"),
  s = n("470079"),
  a = n("803997"),
  l = n.n(a),
  o = n("481060"),
  u = n("37234"),
  c = n("230711"),
  d = n("981631"),
  f = n("689938"),
  p = n("130168");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends(i = s.Component) {
  render() {
    return (0, r.jsxs)("div", {
      className: p.streamerModeEnabled,
      children: [(0, r.jsx)("div", {
        className: p.streamerModeEnabledImage
      }), (0, r.jsx)(o.Clickable, {
        className: l()(p.streamerModeEnabledBtn, {
          [p.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "handleClick", () => {
      !this.props.disableButton && ((0, u.pushLayer)(d.Layers.USER_SETTINGS), c.default.setSection(d.UserSettingsSections.STREAMER_MODE))
    })
  }
}
_(E, "defaultProps", {
  disableButton: !1
}), t.default = E