n.d(t, {
  $: function() {
return d;
  }
}), n(47120), n(411104);
var r, i = n(470079),
  a = n(772848),
  s = n(324404);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let l = (0, a.Z)(),
  u = new Map(),
  c = new Map();
class d extends(r = i.Component) {
  componentDidMount() {
if (this.props.active) {
  let e = this.getVisibilityObserver();
  e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible);
}
  }
  componentDidUpdate(e) {
let t = this.getVisibilityObserver(),
  n = t.isVisible(this);
this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n;
  }
  componentWillUnmount() {
this.getVisibilityObserver().unobserve(this);
  }
  getVisibilityObserverId() {
let {
  rootMargin: e,
  threshold: t
} = this.props;
return ''.concat(this.elementId, ' ').concat(e, ' ').concat(t);
  }
  getVisibilityObserver() {
let e = this.getVisibilityObserverId(),
  t = c.get(e);
if (!t)
  throw Error('Visibility sensor with id '.concat(e, ' not found.'));
return t;
  }
  render() {
return i.Children.only(this.props.children);
  }
  constructor(e) {
super(e), o(this, 'elementId', void 0), o(this, 'isVisible', !1);
let {
  root: t,
  rootMargin: n,
  threshold: r
} = e;
t ? u.has(t) ? this.elementId = u.get(t) || '' : u.set(t, (0, a.Z)()) : this.elementId = l;
let i = this.getVisibilityObserverId();
!c.has(i) && c.set(i, new s.Z({
  root: t,
  rootMargin: n,
  threshold: r
}));
  }
}
o(d, 'defaultProps', {
  active: !0,
  children: i.createElement('span'),
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: [
0,
Number.MIN_VALUE
  ]
});