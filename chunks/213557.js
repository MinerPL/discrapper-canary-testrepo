"use strict";
a.r(t), a.d(t, {
  default: function() {
    return b
  }
}), a("653041");
var l = a("735250"),
  n = a("470079"),
  s = a("442837"),
  i = a("239091"),
  d = a("561472"),
  r = a("36311"),
  u = a("367907"),
  o = a("188471"),
  c = a("541716"),
  f = a("526120"),
  m = a("563534"),
  h = a("736052"),
  E = a("442336"),
  g = a("910611"),
  _ = a("41776"),
  I = a("703656"),
  x = a("6025"),
  S = a("592125"),
  v = a("703558"),
  C = a("731290"),
  N = a("430824"),
  p = a("375954"),
  T = a("594174"),
  A = a("465670"),
  j = a("502568"),
  M = a("933557"),
  D = a("287746"),
  F = a("981631"),
  L = a("689938"),
  R = a("838190");

function b(e) {
  let {
    channelId: t,
    baseChannelId: b,
    channelViewSource: G = "Split View",
    isResourceChannelView: O
  } = e, y = (0, s.useStateFromStores)([S.default], () => S.default.getChannel(t)), H = (0, s.useStateFromStores)([N.default], () => N.default.getGuild(null == y ? void 0 : y.getGuildId())), k = (0, s.useStateFromStores)([T.default], () => T.default.getCurrentUser()), U = (0, s.useStateFromStores)([C.default], () => C.default.didAgree(null == y ? void 0 : y.guild_id)), w = (null == k ? void 0 : k.nsfwAllowed) === !0, P = (0, M.default)(y), B = (0, s.useStateFromStores)([_.default], () => (null == H ? void 0 : H.id) != null && _.default.isLurking(H.id), [H]), V = (0, h.default)(t), W = (0, s.useStateFromStores)([m.default], () => {
    var e;
    return null === (e = m.default.getResourceForChannel(null == H ? void 0 : H.id, t)) || void 0 === e ? void 0 : e.title
  }), K = n.useRef(!1);
  if (n.useEffect(() => {
      null != y && !K.current && (K.current = !0, (0, u.trackWithMetadata)(F.AnalyticEvents.CHANNEL_OPENED, {
        ...(0, u.getChannelOpenedMetadata)(y.id),
        channel_view: G
      }), (0, o.trackClickstream)(F.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: y.id
      }))
    }, [y, G]), null == y || null == H) return null;
  let z = [];
  return (!B && z.push((0, l.jsx)(E.default, {
    channel: y
  }, "notifications")), z.push((0, l.jsx)(j.default.Icon, {
    icon: A.default,
    tooltip: L.default.Messages.CLOSE,
    onClick: () => x.default.closeChannelSidebar(b)
  }, "close")), !y.isNSFW() || w && U) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(d.default, {
      channel: y,
      draftType: v.DraftType.ChannelMessage
    }), (0, l.jsx)(j.default, {
      toolbar: z,
      "aria-label": L.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, g.renderTitle)({
        channel: y,
        channelName: V ? W : P,
        guild: H,
        inSidebar: !0,
        handleContextMenu: e => {
          (0, i.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("24783")]).then(a.bind(a, "439635"));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: y,
              guild: H
            })
          })
        },
        handleClick: () => {
          let e = p.default.getMessages(y.id);
          if (O) {
            (0, I.transitionTo)(F.Routes.CHANNEL(y.guild_id, y.id)), (0, f.selectHomeResourceChannel)(y.guild_id, null);
            return
          }(0, I.transitionToGuild)(y.guild_id, y.id, e.jumpTargetId)
        }
      })
    }), (0, l.jsx)("div", {
      className: R.chat,
      children: (0, l.jsx)(D.default, {
        channel: y,
        guild: H,
        chatInputType: c.ChatInputTypes.SIDEBAR
      }, t)
    })]
  }) : (0, l.jsx)(r.default, {
    guild: H
  })
}