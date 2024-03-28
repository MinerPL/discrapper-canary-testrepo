"use strict";
n.r(t), n.d(t, {
  TOGGLE_CATEGORY_COLLAPSED: function() {
    return s
  }
});
var i = n("211739"),
  o = n("680089"),
  l = n("984933"),
  u = n("914010"),
  a = n("981631");
let s = {
  binds: ["mod+shift+a"],
  comboKeysBindGlobal: !0,
  action() {
    let e = u.default.getGuildId();
    return null != e && (l.default.getChannels(e)[a.ChannelTypes.GUILD_CATEGORY].some(e => {
      let {
        channel: t
      } = e;
      return "null" !== t.id && !o.default.isCollapsed(t.id)
    }) ? (0, i.categoryCollapseAll)(e) : (0, i.categoryExpandAll)(e), !1)
  }
}