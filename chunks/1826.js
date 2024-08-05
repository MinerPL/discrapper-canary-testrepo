var r = n(470079),
  i = n(844303),
  a = function() {
function e(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
return function(t, n, r) {
  return n && e(t.prototype, n), r && e(t, r), t;
};
  }(),
  s = [
38,
40
  ],
  o = 1,
  l = function(e) {
function t(e) {
  ! function(e, t) {
    if (!(e instanceof t))
      throw TypeError('Cannot call a class as a function');
  }(this, t);
  var n = function(e, t) {
    if (!e)
      throw ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
  }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
  return n.handleBlur = function() {
    n.state.blurValue && n.setState({
      value: n.state.blurValue,
      blurValue: null
    });
  }, n.handleChange = function(e) {
    n.setUpdatedValue(e.target.value, e);
  }, n.handleKeyDown = function(e) {
    var t, r = Number(String(e.target.value).replace(/%/g, ''));
    if (!isNaN(r) && (t = e.keyCode, s.indexOf(t) > -1)) {
      var i = n.getArrowOffset(),
        a = 38 === e.keyCode ? r + i : r - i;
      n.setUpdatedValue(a, e);
    }
  }, n.handleDrag = function(e) {
    if (n.props.dragLabel) {
      var t = Math.round(n.props.value + e.movementX);
      t >= 0 && t <= n.props.dragMax && n.props.onChange && n.props.onChange(n.getValueObjectWithLabel(t), e);
    }
  }, n.handleMouseDown = function(e) {
    n.props.dragLabel && (e.preventDefault(), n.handleDrag(e), window.addEventListener('mousemove', n.handleDrag), window.addEventListener('mouseup', n.handleMouseUp));
  }, n.handleMouseUp = function() {
    n.unbindEventListeners();
  }, n.unbindEventListeners = function() {
    window.removeEventListener('mousemove', n.handleDrag), window.removeEventListener('mouseup', n.handleMouseUp);
  }, n.state = {
    value: String(e.value).toUpperCase(),
    blurValue: String(e.value).toUpperCase()
  }, n.inputId = 'rc-editable-input-' + o++, n;
}
return ! function(e, t) {
  if ('function' != typeof t && null !== t)
    throw TypeError('Super expression must either be null or a function, not ' + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}(t, e), a(t, [{
    key: 'componentDidUpdate',
    value: function(e, t) {
      this.props.value !== this.state.value && (e.value !== this.props.value || t.value !== this.state.value) && (this.input === document.activeElement ? this.setState({
        blurValue: String(this.props.value).toUpperCase()
      }) : this.setState({
        value: String(this.props.value).toUpperCase(),
        blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
      }));
    }
  },
  {
    key: 'componentWillUnmount',
    value: function() {
      this.unbindEventListeners();
    }
  },
  {
    key: 'getValueObjectWithLabel',
    value: function(e) {
      var t, n, r;
      return t = {}, n = this.props.label, r = e, n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = r, t;
    }
  },
  {
    key: 'getArrowOffset',
    value: function() {
      return this.props.arrowOffset || 1;
    }
  },
  {
    key: 'setUpdatedValue',
    value: function(e, t) {
      var n = this.props.label ? this.getValueObjectWithLabel(e) : e;
      this.props.onChange && this.props.onChange(n, t), this.setState({
        value: e
      });
    }
  },
  {
    key: 'render',
    value: function() {
      var e = this,
        t = (0, i.default)({
          default: {
            wrap: {
              position: 'relative'
            }
          },
          'user-override': {
            wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
            input: this.props.style && this.props.style.input ? this.props.style.input : {},
            label: this.props.style && this.props.style.label ? this.props.style.label : {}
          },
          'dragLabel-true': {
            label: {
              cursor: 'ew-resize'
            }
          }
        }, {
          'user-override': !0
        }, this.props);
      return r.createElement('div', {
        style: t.wrap
      }, r.createElement('input', {
        id: this.inputId,
        style: t.input,
        ref: function(t) {
          return e.input = t;
        },
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        placeholder: this.props.placeholder,
        spellCheck: 'false'
      }), this.props.label && !this.props.hideLabel ? r.createElement('label', {
        htmlFor: this.inputId,
        style: t.label,
        onMouseDown: this.handleMouseDown
      }, this.props.label) : null);
    }
  }
]), t;
  }(r.PureComponent || r.Component);
t.Z = l;