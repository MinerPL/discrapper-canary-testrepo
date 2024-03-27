"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  a = n.n(s),
  l = n("77078"),
  o = n("145131"),
  u = n("461380"),
  c = n("361466");
class d extends i.PureComponent {
  handleClick(e) {
    let {
      onBreadcrumbClick: t
    } = this.props;
    null != t && t(e)
  }
  render() {
    let {
      breadcrumbs: e,
      className: t
    } = this.props, n = e.map(this.renderBreadcrumb);
    return (0, r.jsx)(o.default, {
      justify: o.default.Justify.START,
      className: a(c.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    super(...e), this.renderBreadcrumb = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: i,
        breadcrumbs: s,
        renderCustomBreadcrumb: o,
        separatorClassName: d
      } = this.props, f = e.id === n, p = t === s.length - 1, _ = null != o ? o(e, f) : (0, r.jsx)("span", {
        className: a(c.breadcrumb, {
          [c.activeBreadcrumb]: f,
          [c.interactiveBreadcrumb]: null != i
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: a(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: p
        }),
        children: [null != i ? (0, r.jsx)(l.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: _
        }) : _, p ? null : (0, r.jsx)(u.default, {
          className: a(c.breadcrumbArrow, d),
          direction: u.default.Directions.RIGHT
        })]
      }, e.id)
    }
  }
}
var f = d