"use strict";
n.r(t), n.d(t, {
  transformAssetURL: function() {
    return c
  },
  default: function() {
    return g
  }
}), n("424973"), n("222007");
var s = n("37983"),
  a = n("884691"),
  i = n("77078"),
  r = n("700468"),
  l = n("439437"),
  o = n("180612"),
  d = n("75576"),
  u = n("49111"),
  h = n("782340");

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
    super(...e), this.handleCurrentItemClick = (e, t) => {
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
    }
  }
}
var g = m