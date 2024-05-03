"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("493683"),
  i = n("239091"),
  r = n("730749"),
  o = n("430824");

function u(e) {
  return (0, r.default)(class extends s.Component {
    render() {
      return (0, a.jsx)(e, {
        ...this.props,
        onMessageUser: this.handleMessageUser,
        onUserContextMenu: this.handleUserContextMenu,
        onGuildContextMenu: this.handleGuildContextMenu,
        onChannelContextMenu: this.handleChannelContextMenu
      })
    }
    handleMessageUser(e, t) {
      return l.default.openPrivateChannel(t.id)
    }
    handleUserContextMenu(e, t, s) {
      (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("64409")]).then(n.bind(n, "881351"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      }, {
        onClose: s
      })
    }
    handleGuildContextMenu(e, t) {
      (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("58227"), n.e("85093"), n.e("85552"), n.e("43502"), n.e("69760"), n.e("33213")]).then(n.bind(n, "545135"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
    handleChannelContextMenu(e, t) {
      let s = o.default.getGuild(t.getGuildId());
      if (null == s) return null;
      (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("40283").then(n.bind(n, "428108"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          guild: s
        })
      })
    }
  })
}