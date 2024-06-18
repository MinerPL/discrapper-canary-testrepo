"use strict";
n.d(t, {
  E: function() {
    return _
  }
}), n(47120), n(724458), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(658722),
  o = n.n(s),
  a = n(481060),
  l = n(683976);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class _ extends r.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      popoutProps: n,
      renderValue: r,
      className: s
    } = this.props;
    return (0, i.jsx)(a.Popout, {
      ...n,
      renderPopout: this.renderPopout,
      children: n => (0, i.jsx)(a.Clickable, {
        ...n,
        className: s,
        children: (0, i.jsx)(l.F, {
          label: e,
          value: t,
          renderValue: r
        })
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "renderItems", e => {
      let {
        items: t,
        renderItem: n
      } = this.props;
      return t.reduce((t, i, r) => (o()(e.toLowerCase(), i.label.toLowerCase()) && t.push(n(i, r)), t), [])
    }), u(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        placeholder: n,
        popoutClassName: r,
        onChange: s,
        value: o
      } = this.props;
      return (0, i.jsx)(a.ComboboxPopout, {
        className: r,
        placeholder: n,
        value: new Set([o.value]),
        onChange: s,
        onClose: t,
        children: e => this.renderItems(e)
      })
    })
  }
}