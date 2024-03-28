"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120"), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("693546"),
  r = n("937111"),
  o = n("914010"),
  u = n("729565"),
  d = n("289090"),
  c = n("727258"),
  f = n("234383"),
  h = n("179809"),
  C = n("588275"),
  p = n("689938"),
  m = n("303335");

function g() {
  let [e, t] = a.useState(!1), n = (0, s.useStateFromStores)([o.default], () => o.default.getGuildId()), g = (0, s.useStateFromStores)([r.default], () => r.default.hasFetchedRequestToJoinGuilds), E = (0, f.default)(), S = a.useMemo(() => {
    let t = (0, c.createFolderNode)({
      folderId: d.SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: p.default.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
      expanded: e,
      guildIds: []
    });
    for (let e of E) t.children.push((0, c.createGuildNode)(e, t.id));
    return t
  }, [E, e]);
  if (a.useEffect(() => {
      e && !g && i.default.fetchRequestToJoinGuilds()
    }, [e, g]), 0 === E.length) return null;
  let _ = null != n && E.includes(n);
  return (0, l.jsx)(h.default, {
    folderNode: S,
    expanded: e,
    useCircleMask: !e && !_,
    selected: _,
    draggable: !1,
    sorting: !1,
    onExpandCollapse: () => t(!e),
    folderIconContent: (0, l.jsx)("div", {
      className: m.__invalid_expandedFolderIconWrapper,
      children: (0, l.jsx)(u.default, {
        width: 24,
        height: 24,
        className: m.pendingIcon
      })
    }),
    renderChildNode: function(e) {
      return e.type !== c.GuildsNodeType.GUILD ? null : (0, l.jsx)(C.default, {
        guildNode: e
      })
    }
  })
}