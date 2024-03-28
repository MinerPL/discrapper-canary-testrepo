"use strict";
n.r(t), n.d(t, {
  transformAssetURL: function() {
    return c
  }
}), n("653041"), n("47120");
var s = n("735250"),
  a = n("470079"),
  i = n("481060"),
  r = n("33122"),
  l = n("761705"),
  o = n("9807"),
  d = n("843445"),
  u = n("981631"),
  h = n("689938");

function c(e) {
  return "".concat(e.split("?")[0], "?size=").concat(2048)
}
let p = e => {
  let {
    index: t,
    items: n,
    ...a
  } = e, i = n[t], r = 0, o = [];
  for (let e of n)
    if (e.type === u.CarouselMediaTypes.IMG) {
      let {
        width: t,
        height: n,
        src: s
      } = e;
      e === i && (r = o.length), o.push({
        src: c(s),
        width: t,
        height: n
      })
    } return (0, s.jsx)(l.default, {
    ...a,
    items: o,
    startWith: r
  })
};
class m extends a.Component {
  render() {
    let {
      pageSize: e,
      ...t
    } = this.props, n = e === d.PageSizes.SMALL ? o.default : r.default;
    return (0, s.jsx)(n, {
      ...t,
      onCurrentItemClick: this.handleCurrentItemClick
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "handleCurrentItemClick", a = (e, t) => {
      e.type === u.CarouselMediaTypes.IMG && !(0, i.hasAnyModalOpen)() && (0, i.openModal)(e => (0, s.jsx)(i.ModalRoot, {
        size: i.ModalSize.DYNAMIC,
        "aria-label": h.default.Messages.IMAGE,
        ...e,
        children: (0, s.jsx)(p, {
          ...e,
          index: t,
          items: this.props.items
        })
      }))
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}
t.default = m