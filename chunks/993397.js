n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(481060),
  o = n(702346),
  c = n(492593),
  u = n(534469),
  d = n(511010),
  h = n(981631),
  p = n(689938),
  m = n(985359),
  _ = n(848509);

function f(e) {
  let {
expanded: t,
onClick: n,
count: a,
compact: s,
collapsedReason: l
  } = e;
  return (0, i.jsx)(c.Z, {
compact: s,
role: 'group',
childrenMessageContent: (0, i.jsx)(o.Z, {
  compact: s,
  className: m.blockedSystemMessage,
  iconNode: (0, i.jsx)(r.CloseSmallIcon, {
    size: 'md',
    color: 'currentColor',
    className: m.blockedIcon
  }),
  children: (0, i.jsxs)('div', {
    className: m.blockedMessageText,
    children: [
      l.format({
        count: a
      }),
      ' \u2014',
      ' ',
      (0, i.jsx)(r.Clickable, {
        tag: 'span',
        onClick: n,
        className: m.blockedAction,
        children: t ? p.Z.Messages.BLOCKED_MESSAGES_HIDE.format({
          count: a
        }) : p.Z.Messages.BLOCKED_MESSAGES_SHOW.format({
          count: a
        })
      })
    ]
  })
})
  });
}
t.Z = a.memo(function(e) {
  var t;
  let {
messages: n,
channel: s,
compact: r = !1,
unreadId: o,
collapsedReason: c
  } = e, {
hasJumpTarget: p = !1
  } = n, [E, g] = a.useState(p), C = a.useCallback(() => g(e => !e), []), I = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, i.jsxs)('div', {
className: l()({
  [_.groupStart]: !0,
  [m.expanded]: E
}),
children: [
  n.hasUnread && (!E || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === h.ys_.DIVIDER) ? (0, i.jsx)(d.Z, {
    isUnread: !0,
    id: o
  }, 'divider') : null,
  (0, i.jsx)(f, {
    count: I,
    compact: r,
    expanded: E,
    onClick: C,
    collapsedReason: c
  }, 'collapsed-message-item'),
  E ? n.content.map((e, t) => {
    if (e.type === h.ys_.DIVIDER && t > 0) {
      var a, l;
      let e = null !== (l = null === (a = n.content[t + 1]) || void 0 === a ? void 0 : a.isGroupStart) && void 0 !== l && l;
      return (0, i.jsx)(d.Z, {
        isUnread: !0,
        isBeforeGroup: e,
        id: o
      }, 'divider');
    }
    if (e.type === h.ys_.MESSAGE || e.type === h.ys_.THREAD_STARTER_MESSAGE) {
      let t = e.type === h.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
      return (0, i.jsx)(t, {
        className: m.__invalid_blocked,
        compact: r,
        channel: s,
        message: e.content,
        groupId: e.groupId,
        flashKey: e.flashKey,
        isLastItem: !1,
        renderContentOnly: !1
      }, e.content.id);
    }
  }) : null
]
  });
});