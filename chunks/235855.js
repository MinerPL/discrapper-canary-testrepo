"use strict";
n.r(t), n.d(t, {
  VisibilitySensor: function() {
    return u
  }
}), n("222007"), n("70102");
var r = n("884691"),
  i = n("748820"),
  s = n("157590");
let o = (0, i.v4)(),
  a = new Map,
  l = new Map;
class u extends r.Component {
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
      t = l.get(e);
    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
    return t
  }
  render() {
    return r.Children.only(this.props.children)
  }
  constructor(e) {
    super(e), this.isVisible = !1;
    let {
      root: t,
      rootMargin: n,
      threshold: r
    } = e;
    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, i.v4)()) : this.elementId = o;
    let u = this.getVisibilityObserverId();
    !l.has(u) && l.set(u, new s.VisibilityObserver({
      root: t,
      rootMargin: n,
      threshold: r
    }))
  }
}
u.defaultProps = {
  active: !0,
  children: r.createElement("span"),
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0, Number.MIN_VALUE]
}