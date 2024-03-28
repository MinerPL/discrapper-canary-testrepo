"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("239091"),
  r = n("561472"),
  o = n("933557"),
  u = n("287746"),
  d = n("541716"),
  c = n("910611"),
  f = n("703656"),
  h = n("664342"),
  m = n("592125"),
  p = n("703558"),
  E = n("430824"),
  C = n("502568"),
  g = n("228392"),
  S = n("689938"),
  _ = n("702654");

function T(e) {
  let {
    channelId: t
  } = e, T = (0, s.useStateFromStores)([m.default], () => m.default.getChannel(t)), I = (0, s.useStateFromStores)([m.default], () => m.default.getChannel(null == T ? void 0 : T.parent_id)), A = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(null == T ? void 0 : T.getGuildId())), v = (0, o.default)(T), N = l.useRef(!1);
  if (l.useEffect(() => {
      null != T && !N.current && (N.current = !0, (0, g.trackForumPostSidebarViewed)(T))
    }, [T]), null == T || null == A) return null;
  let x = (0, a.jsx)(h.default, {
    channel: T
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.default, {
      channel: T,
      draftType: p.DraftType.ChannelMessage
    }), (0, a.jsx)(C.default, {
      toolbar: x,
      "aria-label": S.default.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
      children: (0, c.renderTitle)({
        channel: T,
        parentChannel: I,
        channelName: v,
        guild: A,
        inSidebar: !0,
        handleContextMenu: function(e) {
          (0, i.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await n.e("78650").then(n.bind(n, "422200"));
            return t => (0, a.jsx)(e, {
              ...t,
              channel: T
            })
          })
        },
        handleClick: function() {
          null != T && (0, f.transitionToGuild)(T.guild_id, T.id)
        }
      })
    }), (0, a.jsx)("div", {
      className: _.chat,
      children: (0, a.jsx)(u.default, {
        channel: T,
        guild: A,
        chatInputType: d.ChatInputTypes.SIDEBAR
      }, t)
    })]
  })
}