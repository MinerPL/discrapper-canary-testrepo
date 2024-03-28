"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("291004");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o extends l.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: l,
      popoutProps: r
    } = this.props;
    return (0, a.jsx)(s.Popout, {
      ...r,
      renderPopout: this.renderPopout,
      children: (r, o) => {
        let {
          isShown: u
        } = o;
        return (0, a.jsx)(s.Clickable, {
          ...r,
          className: l,
          "aria-haspopup": "listbox",
          "aria-expanded": u,
          children: (0, a.jsx)(i.default, {
            label: e,
            value: t,
            renderValue: n
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), r(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        options: n,
        value: l,
        renderOption: s,
        popoutClassName: r,
        scroller: o
      } = this.props;
      return (0, a.jsx)(i.QuickSelectPopout, {
        scroller: !!o,
        className: r,
        options: n,
        value: l,
        renderOption: s,
        onChange: e => {
          this.handleChange(e), t()
        }
      })
    }), r(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}
t.default = o