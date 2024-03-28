"use strict";
n.r(t), n.d(t, {
  ArchivedLockedThreadNotice: function() {
    return p
  },
  LockedThreadNotice: function() {
    return E
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("367907"),
  u = n("626135"),
  d = n("346479"),
  c = n("665906"),
  f = n("981631"),
  h = n("689938"),
  m = n("17315");

function p(e) {
  let {
    channel: t,
    narrow: n
  } = e, s = (0, c.useCanUnarchiveThread)(t);
  return l.useEffect(() => {
    u.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
      ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
      ...(0, o.collectChannelAnalyticsMetadata)(t),
      banner_type: "thread"
    })
  }, [t]), (0, a.jsxs)("div", {
    className: i()(m.chatHeaderBar, {
      [m.narrow]: n
    }),
    children: [(0, a.jsx)(r.Text, {
      className: m.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? h.default.Messages.FORUM_POST_HEADER_NOTICE_LOCKED : h.default.Messages.THREAD_HEADER_NOTICE_LOCKED
    }), s ? (0, a.jsx)(r.Button, {
      size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
      className: m.chatHeaderBarButton,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        u.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
          ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
          ...(0, o.collectChannelAnalyticsMetadata)(t),
          banner_type: "thread",
          cta_type: "unarchive"
        }), d.default.unarchiveThread(t, !1)
      },
      children: h.default.Messages.UNARCHIVE
    }) : null]
  })
}

function E(e) {
  let {
    channel: t,
    narrow: n
  } = e, s = (0, c.useIsThreadModerator)(t);
  return l.useEffect(() => {
    u.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
      ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
      ...(0, o.collectChannelAnalyticsMetadata)(t),
      banner_type: "thread"
    })
  }, [t]), (0, a.jsxs)("div", {
    className: i()(m.chatHeaderBar, {
      [m.narrow]: n
    }),
    children: [(0, a.jsx)(r.Text, {
      className: m.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? h.default.Messages.FORUM_POST_HEADER_NOTICE_ACTIVE_LOCKED : h.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
    }), s ? (0, a.jsx)(r.Button, {
      size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
      className: m.chatHeaderBarButton,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        u.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
          ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
          ...(0, o.collectChannelAnalyticsMetadata)(t),
          banner_type: "thread",
          cta_type: "unlock"
        }), d.default.unlockThread(t)
      },
      children: h.default.Messages.UNLOCK
    }) : null]
  })
}