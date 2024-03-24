"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  u = n("913144"),
  o = n("272030"),
  d = n("264732"),
  c = n("716241"),
  f = n("701916"),
  h = n("918105"),
  m = n("679653"),
  p = n("176347"),
  E = n("850391"),
  g = n("557809"),
  S = n("144491"),
  C = n("42203"),
  _ = n("474643"),
  I = n("305961"),
  T = n("800762"),
  v = n("664336"),
  x = n("503220"),
  N = n("648564"),
  A = n("49111"),
  M = n("782340"),
  R = n("370835");

function j(e) {
  let {
    channelId: t,
    baseChannelId: s,
    channelViewSource: j = "Split View"
  } = e, L = (0, r.useStateFromStores)([C.default], () => C.default.getChannel(t)), y = (0, r.useStateFromStores)([I.default], () => I.default.getGuild(null == L ? void 0 : L.getGuildId())), O = (0, m.default)(L);
  (function(e) {
    let t = (0, r.useStateFromStores)([T.default], () => null != e && !i.isEmpty(T.default.getVoiceStatesForChannel(e.id)));
    l.useEffect(() => {
      t && null != e && (u.default.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e.parent_id
      }), (0, S.transitionToThread)(e, N.OpenThreadAnalyticsLocations.VOICE_AUTO_OPEN))
    }, [t, e])
  })(L);
  let P = l.useRef(!1);
  if (l.useEffect(() => {
      if (null == L || P.current) return;
      P.current = !0;
      let e = (0, f.collectThreadMetadata)(C.default.getChannel(L.id), !0);
      (0, c.trackWithMetadata)(A.AnalyticEvents.CHANNEL_OPENED, {
        ...e,
        ...(0, c.getChannelOpenedMetadata)(L.id),
        channel_view: j
      }), (0, h.trackClickstream)(A.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: L.id
      })
    }, [L, j]), null == L || null == y) return null;
  let D = (0, a.jsx)(x.default, {
    channel: L,
    baseChannelId: s
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.default, {
      channel: L,
      draftType: _.DraftType.ChannelMessage
    }), (0, a.jsx)(v.default, {
      toolbar: D,
      "aria-label": M.default.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
      children: (0, g.renderTitle)({
        channel: L,
        channelName: O,
        guild: y,
        inSidebar: !0,
        handleContextMenu: function(e) {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await n.el("994827").then(n.bind(n, "994827"));
            return t => (0, a.jsx)(e, {
              ...t,
              channel: L
            })
          })
        },
        handleClick: function() {
          null != L && (0, S.transitionToChannel)(L.id)
        }
      })
    }), (0, a.jsx)("div", {
      className: R.chat,
      children: (0, a.jsx)(p.default, {
        channel: L,
        guild: y,
        chatInputType: E.ChatInputTypes.SIDEBAR
      }, t)
    })]
  })
}