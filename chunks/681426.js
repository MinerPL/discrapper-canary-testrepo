"use strict";
n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(481060),
  d = n(285952),
  c = n(550118);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).SINGLE_AVATAR = "1", s.MULTIPLE_AVATAR = "2";
let I = {
  [_.AvatarSizes.SIZE_32]: c.avatarSmall,
  [_.AvatarSizes.SIZE_40]: c.avatarLarge
};
class T extends(r = a.Component) {
  render() {
    let {
      type: e,
      avatarSize: t,
      className: n
    } = this.props;
    return "2" === e ? (0, o.jsxs)("div", {
      className: u()(c.multiplePlaceholder, n),
      children: [(0, o.jsxs)(d.Z, {
        children: [(0, o.jsx)("div", {
          className: u()(c.placeholderAvatar, I[t], c.avatarMasked)
        }), (0, o.jsx)("div", {
          className: u()(c.placeholderAvatar, I[t], c.avatarMasked)
        }), (0, o.jsx)("div", {
          className: u()(c.placeholderAvatar, I[t])
        })]
      }), (0, o.jsx)(d.Z, {
        grow: 1,
        className: c.mulitplePlaceholderUsername,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    }) : (0, o.jsxs)(d.Z, {
      className: u()(c.placeholder, n),
      children: [(0, o.jsx)("div", {
        className: u()(c.placeholderAvatar, I[t])
      }), (0, o.jsx)(d.Z, {
        grow: 1,
        className: c.placeholderUsername,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "placeholderMaxWidth", "".concat(Math.floor(40 * Math.random()) + 40, "%"))
  }
}
E(T, "defaultProps", {
  type: "1"
}), E(T, "Types", i), t.Z = T