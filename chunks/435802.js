var r = n(599295),
  i = n(781212),
  a = n(919499);
n(476400);
var o = n(898061),
  s = n(862127),
  l = n(470079),
  u = n(73793),
  c = function(e, t) {
return e && t && t.split(' ').forEach(function(t) {
  return (0, s.Z)(e, t);
});
  },
  d = function(e) {
function t() {
  for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
    appear: {},
    enter: {},
    exit: {}
  }, t.onEnter = function(e, n) {
    t.removeClasses(e, 'exit'), t.addClass(e, n ? 'appear' : 'enter', 'base'), t.props.onEnter && t.props.onEnter(e, n);
  }, t.onEntering = function(e, n) {
    t.addClass(e, n ? 'appear' : 'enter', 'active'), t.props.onEntering && t.props.onEntering(e, n);
  }, t.onEntered = function(e, n) {
    var r = n ? 'appear' : 'enter';
    t.removeClasses(e, r), t.addClass(e, r, 'done'), t.props.onEntered && t.props.onEntered(e, n);
  }, t.onExit = function(e) {
    t.removeClasses(e, 'appear'), t.removeClasses(e, 'enter'), t.addClass(e, 'exit', 'base'), t.props.onExit && t.props.onExit(e);
  }, t.onExiting = function(e) {
    t.addClass(e, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
  }, t.onExited = function(e) {
    t.removeClasses(e, 'exit'), t.addClass(e, 'exit', 'done'), t.props.onExited && t.props.onExited(e);
  }, t.getClassNames = function(e) {
    var n = t.props.classNames,
      r = 'string' == typeof n,
      i = r && n ? n + '-' : '',
      a = r ? '' + i + e : n[e],
      o = r ? a + '-active' : n[e + 'Active'],
      s = r ? a + '-done' : n[e + 'Done'];
    return {
      baseClassName: a,
      activeClassName: o,
      doneClassName: s
    };
  }, t;
}
(0, a.Z)(t, e);
var n = t.prototype;
return n.addClass = function(e, t, n) {
  var r, i, a = this.getClassNames(t)[n + 'ClassName'];
  'appear' === t && 'done' === n && (a += ' ' + this.getClassNames('enter').doneClassName), 'active' === n && e && e.scrollTop, this.appliedClasses[t][n] = a, r = e, i = a, r && i && i.split(' ').forEach(function(e) {
    return (0, o.Z)(r, e);
  });
}, n.removeClasses = function(e, t) {
  var n = this.appliedClasses[t],
    r = n.base,
    i = n.active,
    a = n.done;
  this.appliedClasses[t] = {}, r && c(e, r), i && c(e, i), a && c(e, a);
}, n.render = function() {
  var e = this.props,
    t = (e.classNames, (0, i.Z)(e, ['classNames']));
  return l.createElement(u.ZP, (0, r.Z)({}, t, {
    onEnter: this.onEnter,
    onEntered: this.onEntered,
    onEntering: this.onEntering,
    onExit: this.onExit,
    onExiting: this.onExiting,
    onExited: this.onExited
  }));
}, t;
  }(l.Component);
d.defaultProps = {
  classNames: ''
}, d.propTypes = {}, t.Z = d;