r.d(t, {
  S: function() {
return u;
  }
});
var n = r(573654),
  o = r(139883);

function i(e, t) {
  for (var r = 0; r < t.length; r++) {
var n = t[r];
n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}

function s(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
value: r,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = r, e;
}
var a = [
'canDrop',
'hover',
'drop'
  ],
  c = function() {
var e, t, r;

function n(e, t, r) {
  ! function(e, t) {
    if (!(e instanceof t))
      throw TypeError('Cannot call a class as a function');
  }(this, n), s(this, 'props', null), s(this, 'spec', void 0), s(this, 'monitor', void 0), s(this, 'ref', void 0), this.spec = e, this.monitor = t, this.ref = r;
}
return e = n, t = [{
    key: 'receiveProps',
    value: function(e) {
      this.props = e;
    }
  },
  {
    key: 'receiveMonitor',
    value: function(e) {
      this.monitor = e;
    }
  },
  {
    key: 'canDrop',
    value: function() {
      return !this.spec.canDrop || this.spec.canDrop(this.props, this.monitor);
    }
  },
  {
    key: 'hover',
    value: function() {
      if (!!this.spec.hover && !!this.props)
        this.spec.hover(this.props, this.monitor, (0, o.Al)(this.ref));
    }
  },
  {
    key: 'drop',
    value: function() {
      if (!!this.spec.drop) {
        var e = this.spec.drop(this.props, this.monitor, this.ref.current);
        return e;
      }
    }
  }
], i(e.prototype, t), n;
  }();

function u(e) {
  return Object.keys(e).forEach(function(t) {
  (0, n.k)(a.indexOf(t) > -1, 'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', a.join(', '), t), (0, n.k)('function' == typeof e[t], 'Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t, t, e[t]);
}),
function(t, r) {
  return new c(e, t, r);
};
}