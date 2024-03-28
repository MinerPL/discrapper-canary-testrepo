"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("860738"),
  r = n("117447"),
  o = n("481060"),
  u = n("433355"),
  d = n("974029"),
  c = n("189432"),
  f = n("356778"),
  h = n("776767"),
  m = n("50493"),
  p = n("689938"),
  E = n("196958");

function C(e) {
  let {
    userId: t,
    guildId: n
  } = e, C = (0, s.useStateFromStores)([u.default], () => u.default.getGuildSidebarState(n), [n]), {
    messagesCount: g,
    linksCount: S,
    mediaCount: _
  } = (0, f.useServerActivityCountsForUser)(t, n), T = new Intl.NumberFormat(p.default.getLocale()).format(g), I = new Intl.NumberFormat(p.default.getLocale()).format(S), A = new Intl.NumberFormat(p.default.getLocale()).format(_), v = l.useCallback(async e => {
    if (null == C) return;
    let a = (0, f.getSearchQueryForUser)(t, e);
    await (0, c.openGuildMemberModViewSidebar)(n, t, C.baseChannelId, {
      modViewPanel: m.ModViewPanel.MESSAGE_HISTORY,
      additionalSearchQuery: a
    })
  }, [n, C, t]);
  return (0, a.jsx)(o.FormItem, {
    title: p.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE,
    titleClassName: E.infoTitle,
    children: (0, a.jsxs)(h.UserModInfoItemContainer, {
      children: [(0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(d.default, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.MESSAGES
        }),
        description: g === f.HAS_NO_COUNT ? (0, a.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: T
        }),
        onNavigate: g > 0 ? () => v(f.SearchKeyType.MESSAGES) : void 0
      }), (0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(r.LinkIcon, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.QUICKSEARCH_LINKS
        }),
        description: S === f.HAS_NO_COUNT ? (0, a.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: I
        }),
        onNavigate: S > 0 ? () => v(f.SearchKeyType.LINKS) : void 0
      }), (0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(i.ImagesIcon, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.QUICKSEARCH_MEDIA
        }),
        description: _ === f.HAS_NO_COUNT ? (0, a.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: A
        }),
        onNavigate: _ > 0 ? () => v(f.SearchKeyType.MEDIA) : void 0
      })]
    })
  })
}