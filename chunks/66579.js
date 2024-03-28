"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("803997"),
  a = n.n(s),
  l = n("481060"),
  o = n("285952"),
  u = n("259580"),
  c = n("680641");
class d extends r.PureComponent {
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
    return (0, i.jsx)(o.default, {
      justify: o.default.Justify.START,
      className: a()(c.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    var t, n, r;
    super(...e), t = this, n = "renderBreadcrumb", r = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: r,
        breadcrumbs: s,
        renderCustomBreadcrumb: o,
        separatorClassName: d
      } = this.props, f = e.id === n, p = t === s.length - 1, _ = null != o ? o(e, f) : (0, i.jsx)("span", {
        className: a()(c.breadcrumb, {
          [c.activeBreadcrumb]: f,
          [c.interactiveBreadcrumb]: null != r
        }),
        children: e.label
      });
      return (0, i.jsxs)("div", {
        className: a()(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: p
        }),
        children: [null != r ? (0, i.jsx)(l.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: _
        }) : _, p ? null : (0, i.jsx)(u.default, {
          className: a()(c.breadcrumbArrow, d),
          direction: u.default.Directions.RIGHT
        })]
      }, e.id)
    }, n in t ? Object.defineProperty(t, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = r
  }
}
t.default = d