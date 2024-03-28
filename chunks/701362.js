"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("717881"),
  d = n("58540"),
  c = n("850827"),
  f = n("258609"),
  h = n("199902"),
  m = n("314897"),
  p = n("430824"),
  E = n("496675"),
  C = n("158776"),
  g = n("979651"),
  S = n("387204"),
  _ = n("626135"),
  T = n("102172"),
  I = n("687516"),
  A = n("718805"),
  v = n("871118"),
  N = n("981631"),
  x = n("689938"),
  M = n("447285");
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
    return (0, a.jsxs)(o.Clickable, {
      onClick: t,
      className: M.previewContainer,
      children: [(0, a.jsx)(v.default, {
        className: M.previewImage,
        stream: e
      }), s ? (0, a.jsx)("div", {
        className: M.previewHover,
        children: (0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: M.white,
          children: (0, A.default)(e, n, l, i)
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
      className: i()(M.streamPreviewWrapper, {
        [M.mounted]: l
      }),
      children: (0, a.jsxs)("div", {
        className: M.streamPreview,
        children: [this.renderPreview(n), (0, a.jsxs)("div", {
          className: M.body,
          children: [null != e ? (0, a.jsx)(u.default, {
            hideHeader: !0,
            type: u.UserActivityTypes.STREAM_PREVIEW,
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
            type: u.UserActivityTypes.STREAM_PREVIEW,
            applicationStream: n,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            className: M.activityActions,
            color: M.watchButton
          }), (0, a.jsx)(S.default, {
            type: S.default.Types.INLINE,
            className: M.protip,
            children: __OVERLAY__ ? x.default.Messages.WATCH_STREAM_IN_APP : x.default.Messages.WATCH_STREAM_TIP
          })]
        })]
      })
    })
  }
}

function L(e) {
  let {
    user: t,
    channel: n,
    ...s
  } = e, [i, o] = (0, r.useStateFromStoresArray)([g.default, p.default, E.default, f.default], () => (0, T.canWatchStream)(n, g.default, p.default, E.default, f.default)), u = (0, r.useStateFromStores)([h.default], () => h.default.getStreamForUser(t.id, n.getGuildId())), c = (0, r.useStateFromStores)([h.default], () => h.default.getActiveStreamForApplicationStream(u)), S = (0, r.useStateFromStores)([m.default], () => m.default.getId()), _ = (0, I.useGetStreamApplication)(u), A = (0, r.useStateFromStores)([C.default], () => (0, I.getStreamerActivity)(u, C.default)), v = l.useMemo(() => ({
    [n.guild_id]: [t.id]
  }), [n.guild_id, t.id]);
  return (0, d.useSubscribeGuildMembers)(v), (0, a.jsx)(R, {
    ...s,
    canWatch: i,
    unavailableReason: o,
    user: t,
    streamApplication: _,
    stream: u,
    activeStream: c,
    currentUserId: S,
    activity: A
  })
}