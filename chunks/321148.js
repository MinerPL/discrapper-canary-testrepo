"use strict";
n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(129861),
  _ = n(730749),
  d = n(484459),
  c = n(103575),
  E = n(285952),
  I = n(981631),
  T = n(21782);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class S extends(i = s.Component) {
  render() {
    let {
      popoutOpen: e
    } = this.state, {
      user: t,
      analyticsContext: n,
      disablePopout: i,
      guildId: s
    } = this.props, o = {
      location: {
        ...n.location,
        object: I.qAy.LIST_ITEM
      }
    };
    return (0, r.jsx)(l.Popout, {
      preload: () => (0, d.W)(t.id, t.getAvatarURL(s, 80), {
        guildId: s
      }),
      renderPopout: e => (0, r.jsx)(c.Z, {
        ...e,
        location: "UserListItem",
        guildId: s,
        userId: t.id,
        analyticsParams: o
      }),
      position: "left",
      onRequestClose: this.handleUserPopoutClose,
      shouldShow: !i && e,
      children: e => this.renderUserPopout(e)
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      popoutOpen: !1
    }), h(this, "handleClickUser", () => {
      let {
        onPopoutOpen: e
      } = this.props;
      this.setState({
        popoutOpen: !this.state.popoutOpen
      }), null == e || e()
    }), h(this, "handleUserPopoutClose", () => {
      let {
        onPopoutClose: e
      } = this.props;
      this.setState({
        popoutOpen: !1
      }), null == e || e()
    }), h(this, "renderUserPopout", e => {
      let {
        className: t,
        disablePopout: n,
        onContextMenu: i,
        user: s,
        status: o,
        textClassName: _,
        nick: d,
        guildId: c
      } = this.props;
      return (0, r.jsxs)(E.Z, {
        align: E.Z.Align.CENTER,
        className: a()(T.memberListItem, t, {
          [T.popoutDisabled]: n
        }),
        onContextMenu: i,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        onClick: this.handleClickUser,
        children: [(0, r.jsx)(l.Avatar, {
          src: s.getAvatarURL(c, 24),
          className: T.avatar,
          "aria-label": s.username,
          size: l.AvatarSizes.SIZE_24,
          status: o
        }), (0, r.jsx)(l.Text, {
          className: a()(T.memberListItemTag, _),
          variant: "text-sm/normal",
          children: (0, r.jsx)(u.Z, {
            user: s,
            nick: d,
            usernameClass: T.username,
            hideDiscriminator: !0
          })
        })]
      })
    })
  }
}
h(S, "defaultProps", {
  disablePopout: !1
}), t.Z = (0, _.Z)(S)