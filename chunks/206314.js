"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var r = a("735250"),
  n = a("470079"),
  i = a("803997"),
  l = a.n(i),
  s = a("692547"),
  o = a("481060"),
  d = a("285952"),
  u = a("4912"),
  c = a("299552");
let m = ["firCount", "nackCount"];
class f extends n.PureComponent {
  renderValueIcon() {
    let {
      label: e
    } = this.props;
    return m.includes(e) ? (0, r.jsx)(u.default, {
      color: s.default.unsafe_rawColors.YELLOW_300.css,
      className: c.valueIcon
    }) : null
  }
  render() {
    let {
      children: e,
      className: t,
      valueRendered: a,
      section: n,
      label: i,
      renderGraph: s
    } = this.props;
    return (0, r.jsxs)(d.default, {
      className: l()(c.item, t),
      direction: d.default.Direction.VERTICAL,
      basis: "50%",
      children: [(0, r.jsxs)(d.default, {
        className: c.kvContainer,
        align: d.default.Align.START,
        children: [(0, r.jsx)(d.default.Child, {
          children: (0, r.jsx)(o.H, {
            className: c.title,
            children: e
          })
        }), Array.isArray(a) ? (0, r.jsx)(d.default.Child, {
          grow: 1,
          children: a
        }) : (0, r.jsxs)(d.default.Child, {
          grow: 0,
          shrink: 0,
          children: [this.renderValueIcon(), (0, r.jsx)("span", {
            className: c.itemValue,
            title: a,
            children: a
          })]
        })]
      }), null !== s && (0, r.jsx)(d.default.Child, {
        className: c.graph,
        children: (0, r.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: s
        })
      }, null != n ? "".concat(n, "-").concat(i) : i), (0, r.jsx)(o.FormDivider, {
        className: c.divider
      })]
    })
  }
}