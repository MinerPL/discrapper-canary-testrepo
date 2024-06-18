"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(829307),
  u = n(464854),
  c = n(246072),
  l = n(578709),
  d = n(847979),
  f = n(484837),
  p = n(330174),
  h = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(),
  m = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && ("object" == typeof t || "function" == typeof t) ? t : e
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return n.state = {
        currentColor: e.hex
      }, n
    }
    return ! function(e, t) {
      if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, e), h(t, [{
      key: "render",
      value: function() {
        var e = this.props,
          t = e.styles,
          n = e.className,
          i = (0, o.default)((0, s.Z)({
            default: {
              picker: {
                background: "#DCDCDC",
                borderRadius: "4px",
                boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                boxSizing: "initial",
                width: "513px"
              },
              head: {
                backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                borderBottom: "1px solid #B1B1B1",
                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                height: "23px",
                lineHeight: "24px",
                borderRadius: "4px 4px 0 0",
                fontSize: "13px",
                color: "#4D4D4D",
                textAlign: "center"
              },
              body: {
                padding: "15px 15px 0",
                display: "flex"
              },
              saturation: {
                width: "256px",
                height: "256px",
                position: "relative",
                border: "2px solid #B3B3B3",
                borderBottom: "2px solid #F0F0F0",
                overflow: "hidden"
              },
              hue: {
                position: "relative",
                height: "256px",
                width: "19px",
                marginLeft: "10px",
                border: "2px solid #B3B3B3",
                borderBottom: "2px solid #F0F0F0"
              },
              controls: {
                width: "180px",
                marginLeft: "10px"
              },
              top: {
                display: "flex"
              },
              previews: {
                width: "60px"
              },
              actions: {
                flex: "1",
                marginLeft: "20px"
              }
            }
          }, void 0 === t ? {} : t));
        return r.createElement("div", {
          style: i.picker,
          className: "photoshop-picker " + (void 0 === n ? "" : n)
        }, r.createElement("div", {
          style: i.head
        }, this.props.header), r.createElement("div", {
          style: i.body,
          className: "flexbox-fix"
        }, r.createElement("div", {
          style: i.saturation
        }, r.createElement(u.OQ, {
          hsl: this.props.hsl,
          hsv: this.props.hsv,
          pointer: l.Z,
          onChange: this.props.onChange
        })), r.createElement("div", {
          style: i.hue
        }, r.createElement(u.PS, {
          direction: "vertical",
          hsl: this.props.hsl,
          pointer: d.Z,
          onChange: this.props.onChange
        })), r.createElement("div", {
          style: i.controls
        }, r.createElement("div", {
          style: i.top,
          className: "flexbox-fix"
        }, r.createElement("div", {
          style: i.previews
        }, r.createElement(p.Z, {
          rgb: this.props.rgb,
          currentColor: this.state.currentColor
        })), r.createElement("div", {
          style: i.actions
        }, r.createElement(f.C, {
          label: "OK",
          onClick: this.props.onAccept,
          active: !0
        }), r.createElement(f.C, {
          label: "Cancel",
          onClick: this.props.onCancel
        }), r.createElement(c.Z, {
          onChange: this.props.onChange,
          rgb: this.props.rgb,
          hsv: this.props.hsv,
          hex: this.props.hex
        }))))))
      }
    }]), t
  }(r.Component);
m.propTypes = {
  header: a().string,
  styles: a().object
}, m.defaultProps = {
  header: "Color Picker",
  styles: {}
}, (0, u.t1)(m)