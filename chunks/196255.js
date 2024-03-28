"use strict";
i.r(t);
var n = i("735250");
i("470079");
var a = i("803997"),
  s = i.n(a),
  l = i("481060"),
  o = i("942951"),
  r = i("456269"),
  u = i("689938"),
  d = i("163196");
t.default = e => {
  var t, i;
  let {
    message: a,
    channel: c,
    renderColon: h,
    hasUnreads: f
  } = e, {
    user: m,
    author: p
  } = (0, r.useForumPostAuthor)(c), g = null !== (i = null !== (t = null == p ? void 0 : p.nick) && void 0 !== t ? t : null == m ? void 0 : m.username) && void 0 !== i ? i : "", T = (0, o.useUsernameHook)({
    user: null == a ? void 0 : a.author,
    channelId: c.id,
    guildId: c.guild_id,
    messageId: null == a ? void 0 : a.id,
    stopPropagation: !0,
    ariaLabel: u.default.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({
      name: g
    })
  })(null != p ? p : void 0)((0, n.jsx)(n.Fragment, {
    children: g
  }), c.id);
  return (0, n.jsxs)(l.Text, {
    tag: "span",
    className: s()(d.author, {
      [d.hasUnreads]: f
    }),
    variant: "text-sm/semibold",
    children: [T, !0 === h ? ": " : null]
  })
}