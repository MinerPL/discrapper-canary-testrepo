"use strict";
n.d(t, {
  $: function() {
    return d
  }
}), n(47120), n(411104);
var i, r = n(470079),
  s = n(772848),
  o = n(324404);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = (0, s.Z)(),
  u = new Map,
  _ = new Map;
class d extends(i = r.Component) {
  componentDidMount() {
    if (this.props.active) {
      let e = this.getVisibilityObserver();
      e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
    }
  }
  componentDidUpdate(e) {
    let t = this.getVisibilityObserver(),
      n = t.isVisible(this);
    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
  }
  componentWillUnmount() {
    this.getVisibilityObserver().unobserve(this)
  }
  getVisibilityObserverId() {
    let {
      rootMargin: e,
      threshold: t
    } = this.props;
    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
  }
  getVisibilityObserver() {
    let e = this.getVisibilityObserverId(),
      t = _.get(e);
    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
    return t
  }
  render() {
    return r.Children.only(this.props.children)
  }
  constructor(e) {
    super(e), a(this, "elementId", void 0), a(this, "isVisible", !1);
    let {
      root: t,
      rootMargin: n,
      threshold: i
    } = e;
    t ? u.has(t) ? this.elementId = u.get(t) || "" : u.set(t, (0, s.Z)()) : this.elementId = l;
    let r = this.getVisibilityObserverId();
    !_.has(r) && _.set(r, new o.Z({
      root: t,
      rootMargin: n,
      threshold: i
    }))
  }
}
a(d, "defaultProps", {
  active: !0,
  children: r.createElement("span"),
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0, Number.MIN_VALUE]
})