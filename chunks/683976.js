"use strict";
n.d(t, {
  F: function() {
    return I
  },
  n: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(924826),
  u = n(481060),
  _ = n(285952),
  d = n(153124),
  c = n(736439);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I extends r.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: r
    } = this.props;
    return (0, i.jsxs)(_.Z, {
      className: o()(c.quickSelect, r),
      align: _.Z.Align.CENTER,
      children: [(0, i.jsx)("div", {
        className: c.quickSelectLabel,
        children: e
      }), (0, i.jsxs)(_.Z, {
        align: _.Z.Align.CENTER,
        className: c.quickSelectClick,
        children: [(0, i.jsx)("div", {
          className: c.quickSelectValue,
          children: null != n ? n(t) : t.label
        }), (0, i.jsx)("div", {
          className: c.quickSelectArrow
        })]
      })]
    })
  }
}
class T extends r.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: n
    } = this.props;
    return (0, i.jsx)(a.mh, {
      id: n.key,
      children: r => (0, i.jsx)(u.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: o()(c.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick,
        ...r,
        role: "option",
        children: t(n, e)
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleClick", () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}

function h(e) {
  let {
    options: t,
    value: n,
    scroller: r,
    renderOption: s,
    onChange: _,
    className: E
  } = e, I = o()(c.quickSelectPopout, E, {
    [c.quickSelectPopoutScroll]: r
  }), h = t.map(e => {
    let t = null != n && e.value === n.value,
      r = t ? void 0 : _;
    return (0, i.jsx)(T, {
      className: c.quickSelectPopoutOption,
      renderOption: s,
      option: e,
      onChange: r,
      selected: t
    }, e.key || e.value)
  }), S = (0, d.Dt)(), f = (0, l.ZP)({
    id: S,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: N,
    ...A
  } = f.containerProps;
  return (0, u.useFocusLock)(N), (0, i.jsx)(a.bG, {
    navigator: f,
    children: (0, i.jsx)("div", {
      ref: N,
      className: I,
      ...A,
      role: "listbox",
      children: r ? (0, i.jsx)(u.Scroller, {
        className: c.quickSelectScroller,
        children: h
      }) : h
    })
  })
}
class S extends r.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: r,
      popoutProps: s
    } = this.props;
    return (0, i.jsx)(u.Popout, {
      ...s,
      renderPopout: this.renderPopout,
      children: (s, o) => {
        let {
          isShown: a
        } = o;
        return (0, i.jsx)(u.Clickable, {
          ...s,
          className: r,
          "aria-haspopup": "listbox",
          "aria-expanded": a,
          children: (0, i.jsx)(I, {
            label: e,
            value: t,
            renderValue: n
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), E(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        options: n,
        value: r,
        renderOption: s,
        popoutClassName: o,
        scroller: a
      } = this.props;
      return (0, i.jsx)(h, {
        scroller: !!a,
        className: o,
        options: n,
        value: r,
        renderOption: s,
        onChange: e => {
          this.handleChange(e), t()
        }
      })
    }), E(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}