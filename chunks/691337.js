"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(285952),
  u = n(259580),
  _ = n(287805);
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
    return (0, i.jsx)(l.Z, {
      justify: l.Z.Justify.START,
      className: o()(_.breadcrumbs, t),
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
        renderCustomBreadcrumb: l,
        separatorClassName: d
      } = this.props, c = e.id === n, E = t === s.length - 1, I = null != l ? l(e, c) : (0, i.jsx)("span", {
        className: o()(_.breadcrumb, {
          [_.activeBreadcrumb]: c,
          [_.interactiveBreadcrumb]: null != r
        }),
        children: e.label
      });
      return (0, i.jsxs)("div", {
        className: o()(_.breadcrumbWrapper, {
          [_.breadcrumbFinalWrapper]: E
        }),
        children: [null != r ? (0, i.jsx)(a.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: _.breadcrumbClickWrapper,
          children: I
        }) : I, E ? null : (0, i.jsx)(u.Z, {
          className: o()(_.breadcrumbArrow, d),
          direction: u.Z.Directions.RIGHT
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
t.Z = d