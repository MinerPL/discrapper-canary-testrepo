"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("465670"),
  u = n("998951"),
  d = n("702346"),
  c = n("534469"),
  f = n("511010"),
  h = n("981631"),
  m = n("689938"),
  p = n("331225"),
  E = n("264558");

function C(e) {
  let {
    expanded: t,
    onClick: n,
    count: l,
    compact: s,
    collapsedReason: i
  } = e;
  return (0, a.jsx)(u.default, {
    compact: s,
    role: "group",
    childrenMessageContent: (0, a.jsx)(d.default, {
      compact: s,
      className: p.blockedSystemMessage,
      iconNode: (0, a.jsx)(o.default, {
        className: p.blockedIcon
      }),
      children: (0, a.jsxs)("div", {
        className: p.blockedMessageText,
        children: [i.format({
          count: l
        }), " —", " ", (0, a.jsx)(r.Clickable, {
          tag: "span",
          onClick: n,
          className: p.blockedAction,
          children: t ? m.default.Messages.BLOCKED_MESSAGES_HIDE.format({
            count: l
          }) : m.default.Messages.BLOCKED_MESSAGES_SHOW.format({
            count: l
          })
        })]
      })
    })
  })
}
t.default = l.memo(function(e) {
  var t;
  let {
    messages: n,
    channel: s,
    compact: r = !1,
    unreadId: o,
    collapsedReason: u
  } = e, {
    hasJumpTarget: d = !1
  } = n, [m, g] = l.useState(d), S = l.useCallback(() => g(e => !e), []), _ = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, a.jsxs)("div", {
    className: i()({
      [E.groupStart]: !0,
      [p.expanded]: m
    }),
    children: [n.hasUnread && (!m || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === h.ChannelStreamTypes.DIVIDER) ? (0, a.jsx)(f.default, {
      isUnread: !0,
      id: o
    }, "divider") : null, (0, a.jsx)(C, {
      count: _,
      compact: r,
      expanded: m,
      onClick: S,
      collapsedReason: u
    }, "collapsed-message-item"), m ? n.content.map((e, t) => {
      if (e.type === h.ChannelStreamTypes.DIVIDER && t > 0) {
        var l, i;
        let e = null !== (i = null === (l = n.content[t + 1]) || void 0 === l ? void 0 : l.isGroupStart) && void 0 !== i && i;
        return (0, a.jsx)(f.default, {
          isUnread: !0,
          isBeforeGroup: e,
          id: o
        }, "divider")
      }
      if (e.type === h.ChannelStreamTypes.MESSAGE || e.type === h.ChannelStreamTypes.THREAD_STARTER_MESSAGE) {
        let t = e.type === h.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? c.ThreadStarterChatMessage : c.default;
        return (0, a.jsx)(t, {
          className: p.__invalid_blocked,
          compact: r,
          channel: s,
          message: e.content,
          groupId: e.groupId,
          flashKey: e.flashKey,
          isLastItem: !1,
          renderContentOnly: !1
        }, e.content.id)
      }
    }) : null]
  })
})