"use strict";
l.r(t), l.d(t, {
  default: function() {
    return D
  }
}), l("424973");
var n = l("37983"),
  a = l("884691"),
  s = l("446674"),
  i = l("272030"),
  r = l("264732"),
  d = l("738073"),
  o = l("716241"),
  u = l("918105"),
  c = l("850391"),
  h = l("347895"),
  f = l("698882"),
  m = l("934288"),
  C = l("353054"),
  N = l("557809"),
  x = l("267567"),
  g = l("393414"),
  p = l("208021"),
  S = l("42203"),
  E = l("474643"),
  I = l("247013"),
  _ = l("305961"),
  T = l("377253"),
  v = l("697218"),
  A = l("945330"),
  O = l("664336"),
  R = l("679653"),
  j = l("176347"),
  b = l("49111"),
  L = l("782340"),
  M = l("264594");

function D(e) {
  let {
    channelId: t,
    baseChannelId: D,
    channelViewSource: y = "Split View",
    isResourceChannelView: B
  } = e, w = (0, s.useStateFromStores)([S.default], () => S.default.getChannel(t)), H = (0, s.useStateFromStores)([_.default], () => _.default.getGuild(null == w ? void 0 : w.getGuildId())), F = (0, s.useStateFromStores)([v.default], () => v.default.getCurrentUser()), U = (0, s.useStateFromStores)([I.default], () => I.default.didAgree(null == w ? void 0 : w.guild_id)), k = (null == F ? void 0 : F.nsfwAllowed) === !0, P = (0, R.default)(w), G = (0, s.useStateFromStores)([x.default], () => (null == H ? void 0 : H.id) != null && x.default.isLurking(H.id), [H]), W = (0, m.default)(t), z = (0, s.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getResourceForChannel(null == H ? void 0 : H.id, t)) || void 0 === e ? void 0 : e.title
  }), V = a.useRef(!1);
  if (a.useEffect(() => {
      null != w && !V.current && (V.current = !0, (0, o.trackWithMetadata)(b.AnalyticEvents.CHANNEL_OPENED, {
        ...(0, o.getChannelOpenedMetadata)(w.id),
        channel_view: y
      }), (0, u.trackClickstream)(b.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: w.id
      }))
    }, [w, y]), null == w || null == H) return null;
  let Y = [];
  return (!G && Y.push((0, n.jsx)(C.default, {
    channel: w
  }, "notifications")), Y.push((0, n.jsx)(O.default.Icon, {
    icon: A.default,
    tooltip: L.default.Messages.CLOSE,
    onClick: () => p.default.closeChannelSidebar(D)
  }, "close")), !w.isNSFW() || k && U) ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.default, {
      channel: w,
      draftType: E.DraftType.ChannelMessage
    }), (0, n.jsx)(O.default, {
      toolbar: Y,
      "aria-label": L.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, N.renderTitle)({
        channel: w,
        channelName: W ? z : P,
        guild: H,
        inSidebar: !0,
        handleContextMenu: e => {
          (0, i.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await l.el("229233").then(l.bind(l, "229233"));
            return t => (0, n.jsx)(e, {
              ...t,
              channel: w,
              guild: H
            })
          })
        },
        handleClick: () => {
          let e = T.default.getMessages(w.id);
          if (B) {
            (0, g.transitionTo)(b.Routes.CHANNEL(w.guild_id, w.id)), (0, h.selectHomeResourceChannel)(w.guild_id, null);
            return
          }(0, g.transitionToGuild)(w.guild_id, w.id, e.jumpTargetId)
        }
      })
    }), (0, n.jsx)("div", {
      className: M.chat,
      children: (0, n.jsx)(j.default, {
        channel: w,
        guild: H,
        chatInputType: c.ChatInputTypes.SIDEBAR
      }, t)
    })]
  }) : (0, n.jsx)(d.default, {
    guild: H
  })
}