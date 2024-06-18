"use strict";
n.d(t, {
  u: function() {
    return A
  }
}), n(653041), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(512722),
  u = n.n(l),
  _ = n(481060),
  d = n(484459),
  c = n(103575),
  E = n(598077),
  I = n(594174),
  T = n(632184),
  h = n(426563),
  S = n(806519),
  f = n(881867);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = {
  SIZE_16: 16,
  SIZE_24: 24,
  SIZE_32: 32,
  SIZE_56: 56
};

function m(e, t) {
  let n = e instanceof E.Z ? e : null != e ? e.user : null;
  return null != n ? n.id : "user-".concat(t)
}
class O extends(i = s.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      size: i,
      extraDetail: s
    } = this.props, o = [], a = e.length === t ? e.length : t - 1, l = this.renderMoreUsers(a), u = 0;
    for (; u < a && u < e.length;) {
      var _;
      let t = null == l && null == s && u === e.length - 1,
        a = n(e[u], t, u);
      o.push(t ? (0, r.jsx)("div", {
        className: f.avatarContainer,
        children: a
      }, m(null !== (_ = e[u]) && void 0 !== _ ? _ : null, u)) : (0, r.jsx)(S.ZP, {
        className: f.avatarContainerMasked,
        height: i,
        width: i,
        mask: S.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
        children: a
      }, m(e[u], u))), u++
    }
    return null != s ? o.push(s) : null != l && o.push(l), o
  }
  renderMoreUsers(e) {
    let {
      max: t,
      count: n,
      hideMoreUsers: i,
      renderMoreUsers: o,
      users: a
    } = this.props, l = Math.min(e, a.length);
    if (!i) {
      if (null != n) {
        if (n >= t) return (0, r.jsx)(s.Fragment, {
          children: o("".concat(t, "+"), t)
        }, "more-users");
        if (n > a.length) {
          let e = n - a.length;
          return (0, r.jsx)(s.Fragment, {
            children: o("+".concat(e), e)
          }, "more-users")
        }
      } else if (l < a.length) {
        let e = Math.min(a.length - l, 99);
        return (0, r.jsx)(s.Fragment, {
          children: o("+".concat(e), e)
        }, "more-users")
      }
    }
  }
  renderIcon() {
    return this.props.renderIcon ? (0, r.jsx)(T.Z, {
      foreground: f.__invalid_foreground,
      className: f.icon
    }) : null
  }
  render() {
    let {
      className: e,
      size: t,
      users: n,
      guildId: i,
      showUserPopout: s,
      useFallbackUserForPopout: o
    } = this.props, {
      popoutUserId: l
    } = this.state, E = n.find(e => null != e && e.id === l), T = o && null == I.default.getUser(l);
    return (0, r.jsx)(_.Popout, {
      position: "right",
      preload: null == E ? void 0 : () => (0, d.W)(E.id, E.getAvatarURL(i, 80), {
        guildId: i
      }),
      shouldShow: !0 === s && null != l,
      fixed: !0,
      renderPopout: e => (u()(null != l, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(c.Z, {
        ...this.props,
        location: "UserSummaryItem",
        user: T && null != E ? E : void 0,
        ...e,
        userId: l,
        guildId: this.props.guildId
      })),
      onRequestClose: () => this.setState({
        popoutUserId: null
      }),
      children: n => (0, r.jsxs)("div", {
        className: a()(e, f.container, function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.SIZE_24;
          switch (e) {
            case A.SIZE_16:
              return f.size16;
            case A.SIZE_24:
              return f.size24;
            case A.SIZE_32:
              return f.size32;
            case A.SIZE_56:
              return f.size56;
            default:
              return f.size24
          }
        }(t)),
        ref: this._ref,
        ...n,
        children: [this.renderIcon(), this.renderUsers()]
      })
    })
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      popoutUserId: null
    }), N(this, "_ref", s.createRef()), N(this, "defaultRenderUser", (e, t, n) => {
      let {
        showUserPopout: i,
        guildId: s,
        size: o
      } = this.props;
      if (null == e) {
        if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
          className: f.emptyUser
        });
        {
          let e = (null != n ? n : 0) % h.Z.DEFAULT_AVATARS.length,
            t = h.Z.DEFAULT_AVATARS[e];
          return (0, r.jsx)("img", {
            src: t,
            alt: "",
            className: f.avatar
          })
        }
      }
      let a = (0, r.jsx)("img", {
        src: e.getAvatarURL(s, o),
        alt: e.username,
        className: f.avatar
      }, e.id);
      return i ? (0, r.jsx)(_.Clickable, {
        className: f.clickableAvatar,
        onClick: () => {
          null != this._ref.current && null != e && this.setState({
            popoutUserId: e.id
          })
        },
        tabIndex: -1,
        children: a
      }, e.id) : a
    })
  }
}
N(O, "defaultProps", {
  max: 10,
  renderMoreUsers: function(e) {
    return (0, r.jsx)("div", {
      className: f.moreUsers,
      children: e
    })
  },
  renderIcon: !1,
  showDefaultAvatarsForNullUsers: !1,
  size: A.SIZE_24
}), t.Z = O