"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  i = n(481060),
  r = n(933557),
  o = n(995123),
  u = n(602623),
  c = n(5192),
  d = n(689938),
  m = n(322838);

function E(e) {
  let {
    channel: t,
    users: n,
    selected: s = !1
  } = e, E = (0, r.ZP)(t), _ = null;
  null != n && n.length > 0 && (_ = (0, l.jsx)(u.Z, {
    guildId: t.guild_id,
    className: m.voiceUserList,
    users: n,
    renderUser: e => {
      if (null == e) return null;
      let n = c.ZP.getName(t.guild_id, t.id, e),
        s = e.getAvatarURL(t.guild_id, 24);
      return (0, l.jsx)(i.TooltipContainer, {
        text: n,
        children: (0, l.jsx)("img", {
          src: null != s ? s : void 0,
          "aria-label": e.username,
          alt: "",
          className: m.avatar
        })
      })
    },
    renderMoreUsers: e => {
      let s = function(e, t) {
        let n = t.id,
          l = t.guild_id;
        return e.length <= 1 ? null : 2 === e.length ? d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
          nickname0: c.ZP.getName(l, n, e[0]),
          nickname1: c.ZP.getName(l, n, e[1])
        }) : 3 === e.length ? d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
          nickname0: c.ZP.getName(l, n, e[0]),
          nickname1: c.ZP.getName(l, n, e[1]),
          nickname2: c.ZP.getName(l, n, e[2])
        }) : d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
          nickname0: c.ZP.getName(l, n, e[0]),
          nickname1: c.ZP.getName(l, n, e[1]),
          remainingCount: e.length - 2
        })
      }(n.slice(4), t);
      return (0, l.jsx)("div", {
        children: (0, l.jsx)(i.TooltipContainer, {
          text: s,
          children: (0, l.jsx)("div", {
            className: m.userListOverflow,
            children: e
          })
        })
      })
    },
    max: 5,
    showUserPopout: !1
  }));
  let S = (0, o.Z)(t);
  return (0, l.jsxs)("div", {
    className: a()(m.channelInfo, {
      [m.selected]: s
    }),
    children: [(0, l.jsx)(S, {
      className: m.channelIcon
    }), (0, l.jsx)("div", {
      className: m.channelName,
      children: E
    }), _]
  })
}