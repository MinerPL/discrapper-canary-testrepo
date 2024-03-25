"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("77078"),
  i = n("272030"),
  r = n("145079"),
  o = n("145131"),
  u = n("361724");
class d extends s.PureComponent {
  handleContextMenu(e, t) {
    (0, i.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("406784").then(n.bind(n, "406784"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t
      })
    })
  }
  renderUser(e) {
    return null == e ? null : (0, a.jsxs)(o.default, {
      className: u.user,
      align: o.default.Align.CENTER,
      onContextMenu: t => {
        null != e && this.handleContextMenu(t, e)
      },
      children: [(0, a.jsx)(l.Avatar, {
        src: e.getAvatarURL(void 0, 24),
        "aria-label": e.username,
        size: l.AvatarSizes.SIZE_24,
        className: u.avatar
      }), (0, a.jsx)(r.default, {
        user: e,
        className: u.tag,
        usernameClass: u.username,
        discriminatorClass: u.discriminator
      })]
    }, e.id)
  }
  render() {
    let {
      party: e,
      header: t
    } = this.props, n = e.map(e => this.renderUser(e));
    return (0, a.jsxs)("div", {
      className: u.userList,
      children: [(0, a.jsx)("div", {
        className: u.header,
        children: t
      }), (0, a.jsx)(l.ScrollerThin, {
        className: u.content,
        fade: !0,
        children: n
      })]
    })
  }
}
var c = d