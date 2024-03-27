"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var r = n("37983"),
  l = n("884691"),
  s = n("414456"),
  a = n.n(s),
  i = n("77078"),
  o = n("145131"),
  u = n("461380"),
  c = n("361466");
class d extends l.PureComponent {
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
        onBreadcrumbClick: l,
        breadcrumbs: s,
        renderCustomBreadcrumb: o,
        separatorClassName: d
      } = this.props, E = e.id === n, _ = t === s.length - 1, f = null != o ? o(e, E) : (0, r.jsx)("span", {
        className: a(c.breadcrumb, {
          [c.activeBreadcrumb]: E,
          [c.interactiveBreadcrumb]: null != l
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: a(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: _
        }),
        children: [null != l ? (0, r.jsx)(i.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: f
        }) : f, _ ? null : (0, r.jsx)(u.default, {
          className: a(c.breadcrumbArrow, d),
          direction: u.default.Directions.RIGHT
        })]
      }, e.id)
    }
  }
}
var E = d