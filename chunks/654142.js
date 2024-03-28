"use strict";
n.r(t), n("653041"), n("47120"), n("724458");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("239091"),
  r = n("749210"),
  o = n("905423"),
  u = n("664915"),
  d = n("888369"),
  c = n("430824"),
  f = n("823379"),
  h = n("179809"),
  C = n("652376"),
  p = n("981631");
t.default = a.memo(function(e) {
  let {
    folderNode: t,
    ...m
  } = e, {
    id: g,
    name: E,
    color: S,
    children: _
  } = t, I = _.map(e => e.id), N = (0, o.default)(e => e.guildId), T = (0, s.useStateFromStores)([u.default], () => u.default.isFolderExpanded(g)), A = function(e) {
    let t = e.children.map(e => {
        let t = e.id,
          n = c.default.getGuild(t);
        return null != n ? n.name : null
      }).filter(f.isNotNullish),
      n = 2 * p.MAX_GUILD_FOLDER_NAME_LENGTH,
      l = [];
    for (let e of t)(e.length < n || 0 === l.length) && (l.push(e), n -= e.length);
    return "".concat(l.join(", ")).concat(l.length < t.length ? ", ..." : "")
  }(t), L = (0, C.default)(t), {
    mentionCount: v,
    unread: x
  } = (0, s.useStateFromStoresObject)([d.default], () => ({
    mentionCount: I.map(e => d.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
    unread: I.some(e => d.default.hasUnread(e))
  })), R = a.useCallback(() => {
    r.default.toggleGuildFolderExpand(g)
  }, [g]), M = a.useCallback(e => {
    (0, i.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("52590").then(n.bind(n, "205784"));
      return t => (0, l.jsx)(e, {
        ...t,
        folderId: g,
        folderName: E,
        folderColor: S,
        unread: x || v > 0
      })
    })
  }, [g, E, S, x, v]);
  return (0, l.jsx)(h.default, {
    ...m,
    folderNode: t,
    expanded: T,
    selected: null != N && I.includes(N),
    mentionCount: v,
    unread: x,
    mediaState: L,
    defaultFolderName: A,
    onExpandCollapse: R,
    onContextMenu: M
  })
})