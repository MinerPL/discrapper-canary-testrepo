"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("151426"),
  i = n("77078"),
  r = n("402309"),
  o = n("599110"),
  u = n("991170"),
  d = n("580362"),
  c = n("49111"),
  f = n("994428"),
  E = n("695838"),
  h = n("69741");

function _(e) {
  var t;
  let _ = (0, r.useCanCurrentUserViewDisableUnsafeGuildSettingsNotice)(e),
    C = h.MODERATOR_PERMISSIONS.some(t => (null == e ? void 0 : e.id) !== E.FAVORITES_RAW_GUILD_ID && u.canEveryone(t, e)),
    S = (null == e ? void 0 : e.defaultMessageNotifications) === c.UserNotificationSettings.ALL_MESSAGES,
    I = (0, d.useIsContentDismissed)(l.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID),
    m = _ && (C || S) && !I,
    p = s.useCallback(() => {
      var t;
      (0, d.markContentAsDismissed)(l.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID, !0, f.ContentDismissActionType.DISMISS)
    }, [e]),
    T = s.useRef(!1);
  s.useEffect(() => {
    if (m && !T.current) {
      var t;
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("675454").then(n.bind(n, "675454"));
        return n => (0, a.jsx)(t, {
          guild: e,
          canEveryoneModerate: C,
          isDefaultNotificationsAllMessages: S,
          ...n
        })
      }, {
        onCloseCallback: p
      }), o.default.track(c.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
        type: l.DismissibleGuildContent[l.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
        guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID
      }), T.current = !0
    }
  }, [C, e, p, S, m])
}