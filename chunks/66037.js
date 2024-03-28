"use strict";
n.r(t), n("411104"), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("539528"),
  i = n("786876");
class r extends l.Component {
  render() {
    let {
      to: e,
      from: t,
      isNavLink: n,
      children: l,
      tabIndex: a = 0,
      role: r,
      className: o
    } = this.props;
    if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
    let c = "string" == typeof e ? e : e.pathname,
      u = "string" == typeof e ? "" : e.hash,
      d = "string" == typeof e ? "" : e.search;
    return n ? (0, s.jsx)(i.NavLink, {
      className: o,
      tabIndex: a,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: u,
        search: d,
        state: {
          previousLinkLocation: t
        }
      },
      role: r,
      children: l
    }) : (0, s.jsx)(i.Link, {
      className: o,
      tabIndex: a,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: u,
        search: d,
        state: {
          previousLinkLocation: t
        }
      },
      role: r,
      children: l
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "handleOnClick", s = () => {
      let {
        to: e,
        avoidRouter: t,
        onClick: n,
        history: s
      } = this.props;
      if (null != n) n();
      else if (t) {
        let t = "string" == typeof e ? (0, a.createLocation)(e, null, void 0, s.location) : e,
          n = s.createHref(t);
        window.location = n
      }
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}
t.default = (0, i.withRouter)(r)