"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("37983");
s("884691");
var a = s("414456"),
  l = s.n(a),
  i = s("77078"),
  r = s("232259"),
  o = s("680986"),
  u = s("782340"),
  d = s("159177"),
  c = e => {
    var t, s;
    let {
      message: a,
      channel: c,
      renderColon: h,
      hasUnreads: f
    } = e, {
      user: m,
      author: g
    } = (0, o.useForumPostAuthor)(c), p = null !== (s = null !== (t = null == g ? void 0 : g.nick) && void 0 !== t ? t : null == m ? void 0 : m.username) && void 0 !== s ? s : "", S = (0, r.useUsernameHook)({
      user: null == a ? void 0 : a.author,
      channelId: c.id,
      guildId: c.guild_id,
      messageId: null == a ? void 0 : a.id,
      stopPropagation: !0,
      ariaLabel: u.default.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({
        name: p
      })
    })(null != g ? g : void 0)((0, n.jsx)(n.Fragment, {
      children: p
    }), c.id);
    return (0, n.jsxs)(i.Text, {
      tag: "span",
      className: l(d.author, {
        [d.hasUnreads]: f
      }),
      variant: "text-sm/semibold",
      children: [S, !0 === h ? ": " : null]
    })
  }