"use strict";
s.r(t), s.d(t, {
  QuickSelectPopout: function() {
    return o
  }
}), s("47120");
var E = s("735250"),
  _ = s("470079"),
  a = s("803997"),
  n = s.n(a),
  T = s("924826"),
  i = s("481060"),
  u = s("285952"),
  A = s("153124"),
  l = s("570832");
class I extends _.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: s,
      className: _
    } = this.props;
    return (0, E.jsxs)(u.default, {
      className: n()(l.quickSelect, _),
      align: u.default.Align.CENTER,
      children: [(0, E.jsx)("div", {
        className: l.quickSelectLabel,
        children: e
      }), (0, E.jsxs)(u.default, {
        align: u.default.Align.CENTER,
        className: l.quickSelectClick,
        children: [(0, E.jsx)("div", {
          className: l.quickSelectValue,
          children: null != s ? s(t) : t.label
        }), (0, E.jsx)("div", {
          className: l.quickSelectArrow
        })]
      })]
    })
  }
}
class r extends _.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: s
    } = this.props;
    return (0, E.jsx)(T.ListNavigatorItem, {
      id: s.key,
      children: _ => (0, E.jsx)(i.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: n()(l.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick,
        ..._,
        role: "option",
        children: t(s, e)
      })
    })
  }
  constructor(...e) {
    var t, s, E;
    super(...e), t = this, s = "handleClick", E = () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    }, s in t ? Object.defineProperty(t, s, {
      value: E,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = E
  }
}

function o(e) {
  let {
    options: t,
    value: s,
    scroller: _,
    renderOption: a,
    onChange: u,
    className: I
  } = e, o = n()(l.quickSelectPopout, I, {
    [l.quickSelectPopoutScroll]: _
  }), L = t.map(e => {
    let t = null != s && e.value === s.value,
      _ = t ? void 0 : u;
    return (0, E.jsx)(r, {
      className: l.quickSelectPopoutOption,
      renderOption: a,
      option: e,
      onChange: _,
      selected: t
    }, e.key || e.value)
  }), d = (0, A.useUID)(), N = (0, T.default)({
    id: d,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: S,
    ...g
  } = N.containerProps;
  return (0, i.useFocusLock)(S), (0, E.jsx)(T.ListNavigatorProvider, {
    navigator: N,
    children: (0, E.jsx)("div", {
      ref: S,
      className: o,
      ...g,
      role: "listbox",
      children: _ ? (0, E.jsx)(i.Scroller, {
        className: l.quickSelectScroller,
        children: L
      }) : L
    })
  })
}
t.default = I