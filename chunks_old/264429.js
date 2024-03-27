"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("463848"),
  d = n("750560"),
  c = n("632710"),
  f = n("76393"),
  h = n("373469"),
  m = n("271938"),
  p = n("305961"),
  E = n("957255"),
  g = n("824563"),
  S = n("800762"),
  C = n("822332"),
  _ = n("599110"),
  I = n("223913"),
  T = n("582415"),
  v = n("795026"),
  x = n("673527"),
  N = n("49111"),
  A = n("782340"),
  M = n("430868");
class R extends l.PureComponent {
  componentDidMount() {
    let {
      user: e,
      streamApplication: t
    } = this.props;
    _.default.track(N.AnalyticEvents.OPEN_POPOUT, {
      type: "Stream Preview",
      other_user_id: e.id,
      application_id: null != t ? t.id : null,
      application_name: null != t ? t.name : null,
      game_id: null != t ? t.id : null,
      is_streaming: !0
    })
  }
  renderPreview(e) {
    let {
      onWatch: t,
      activeStream: n,
      currentUserId: l,
      canWatch: s,
      unavailableReason: i
    } = this.props;
    return (0, a.jsxs)(u.Clickable, {
      onClick: t,
      className: M.previewContainer,
      children: [(0, a.jsx)(x.default, {
        className: M.previewImage,
        stream: e
      }), s ? (0, a.jsx)("div", {
        className: M.previewHover,
        children: (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: M.white,
          children: (0, v.default)(e, n, l, i)
        })
      }) : null]
    })
  }
  render() {
    let {
      activity: e,
      user: t,
      stream: n,
      previewIsOpen: l
    } = this.props;
    return null == n ? null : (0, a.jsx)("div", {
      className: i(M.streamPreviewWrapper, {
        [M.mounted]: l
      }),
      children: (0, a.jsxs)("div", {
        className: M.streamPreview,
        children: [this.renderPreview(n), (0, a.jsxs)("div", {
          className: M.body,
          children: [null != e ? (0, a.jsx)(o.default, {
            hideHeader: !0,
            type: o.UserActivityTypes.STREAM_PREVIEW,
            activity: e,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            analyticsParams: {
              location: {
                page: N.AnalyticsPages.GO_LIVE_MODAL,
                section: N.AnalyticsSections.STREAM_VIEWER_POPOUT
              }
            }
          }) : (0, a.jsx)(c.default, {
            type: o.UserActivityTypes.STREAM_PREVIEW,
            applicationStream: n,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            className: M.activityActions,
            color: M.watchButton
          }), (0, a.jsx)(C.default, {
            type: C.default.Types.INLINE,
            className: M.protip,
            children: __OVERLAY__ ? A.default.Messages.WATCH_STREAM_IN_APP : A.default.Messages.WATCH_STREAM_TIP
          })]
        })]
      })
    })
  }
}

function j(e) {
  let {
    user: t,
    channel: n,
    ...s
  } = e, [i, u] = (0, r.useStateFromStoresArray)([S.default, p.default, E.default, f.default], () => (0, I.canWatchStream)(n, S.default, p.default, E.default, f.default)), o = (0, r.useStateFromStores)([h.default], () => h.default.getStreamForUser(t.id, n.getGuildId())), c = (0, r.useStateFromStores)([h.default], () => h.default.getActiveStreamForApplicationStream(o)), C = (0, r.useStateFromStores)([m.default], () => m.default.getId()), _ = (0, T.useGetStreamApplication)(o), v = (0, r.useStateFromStores)([g.default], () => (0, T.getStreamerActivity)(o, g.default)), x = l.useMemo(() => ({
    [n.guild_id]: [t.id]
  }), [n.guild_id, t.id]);
  return (0, d.useSubscribeGuildMembers)(x), (0, a.jsx)(R, {
    ...s,
    canWatch: i,
    unavailableReason: u,
    user: t,
    streamApplication: _,
    stream: o,
    activeStream: c,
    currentUserId: C,
    activity: v
  })
}