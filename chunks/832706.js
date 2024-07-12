var r = n(781212),
  i = n(599295),
  a = n(919499),
  o = n(15393);
n(476400);
var s = n(470079),
  l = n(717588),
  u = n(46121),
  c = Object.values || function(e) {
return Object.keys(e).map(function(t) {
  return e[t];
});
  },
  d = function(e) {
function t(t, n) {
  var r, i = (r = e.call(this, t, n) || this).handleExited.bind((0, o.Z)((0, o.Z)(r)));
  return r.state = {
    contextValue: {
      isMounting: !0
    },
    handleExited: i,
    firstRender: !0
  }, r;
}
(0, a.Z)(t, e);
var n = t.prototype;
return n.componentDidMount = function() {
  this.mounted = !0, this.setState({
    contextValue: {
      isMounting: !1
    }
  });
}, n.componentWillUnmount = function() {
  this.mounted = !1;
}, t.getDerivedStateFromProps = function(e, t) {
  var n = t.children,
    r = t.handleExited;
  return {
    children: t.firstRender ? (0, u.Kg)(e, r) : (0, u.Rp)(e, n, r),
    firstRender: !1
  };
}, n.handleExited = function(e, t) {
  var n = (0, u.n)(this.props.children);
  !(e.key in n) && (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
    var n = (0, i.Z)({}, t.children);
    return delete n[e.key], {
      children: n
    };
  }));
}, n.render = function() {
  var e = this.props,
    t = e.component,
    n = e.childFactory,
    i = (0, r.Z)(e, [
      'component',
      'childFactory'
    ]),
    a = this.state.contextValue,
    o = c(this.state.children).map(n);
  return (delete i.appear, delete i.enter, delete i.exit, null === t) ? s.createElement(l.Z.Provider, {
    value: a
  }, o) : s.createElement(l.Z.Provider, {
    value: a
  }, s.createElement(t, i, o));
}, t;
  }(s.Component);
d.propTypes = {}, d.defaultProps = {
  component: 'div',
  childFactory: function(e) {
return e;
  }
}, t.Z = d;