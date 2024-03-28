"use strict";
s.r(t), s("47120"), s("724458"), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("658722"),
  i = s.n(n),
  r = s("481060"),
  o = s("291004");

function d(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class u extends l.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      popoutProps: s,
      renderValue: l,
      className: n
    } = this.props;
    return (0, a.jsx)(r.Popout, {
      ...s,
      renderPopout: this.renderPopout,
      children: s => (0, a.jsx)(r.Clickable, {
        ...s,
        className: n,
        children: (0, a.jsx)(o.default, {
          label: e,
          value: t,
          renderValue: l
        })
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "renderItems", e => {
      let {
        items: t,
        renderItem: s
      } = this.props;
      return t.reduce((t, a, l) => (i()(e.toLowerCase(), a.label.toLowerCase()) && t.push(s(a, l)), t), [])
    }), d(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        placeholder: s,
        popoutClassName: l,
        onChange: n,
        value: i
      } = this.props;
      return (0, a.jsx)(r.ComboboxPopout, {
        className: l,
        placeholder: s,
        value: new Set([i.value]),
        onChange: n,
        onClose: t,
        children: e => this.renderItems(e)
      })
    })
  }
}
t.default = u