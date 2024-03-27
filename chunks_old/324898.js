"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("717837"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("819689"),
  f = n("260526"),
  h = n("619259"),
  C = n("865343"),
  p = n("148337"),
  m = n("701909"),
  E = n("124297"),
  g = n("497880"),
  S = n("587904"),
  T = n("49111"),
  A = n("782340"),
  _ = n("328692"),
  M = n("919163"),
  I = n("356296");
let N = a.memo(function(e) {
  let {
    message: t,
    notice: n,
    compact: a = !1,
    onDismiss: l
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: i(_.blockedNoticeContainer, {
        [_.compact]: a
      }),
      children: [(0, s.jsx)("div", {
        className: _.blockedNoticeIcon,
        children: (0, s.jsx)(p.default, {
          className: _.shieldIcon,
          width: 16,
          height: 16
        })
      }), (0, s.jsx)("div", {
        className: _.blockedNotice,
        children: (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: n
        })
      })]
    }), (0, s.jsx)("div", {
      className: i(_.ephemeralAccessories, {
        [_.compact]: a
      }),
      children: (0, s.jsx)(E.default, {
        message: t,
        onDeleteMessage: l,
        children: (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "interactive-normal",
          tag: "span",
          className: _.learnMore,
          children: A.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format({
            helpUrl: m.default.getArticleURL(T.HelpdeskArticles.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })
      })
    })]
  })
});
var v = a.memo(function(e) {
  var t, n;
  let {
    className: l,
    compact: r,
    message: d,
    children: p,
    content: m,
    onUpdate: E
  } = e, T = null === (t = d.editedTimestamp) || void 0 === t ? void 0 : t.toString(), v = a.useRef(!1), x = (0, u.useStateFromStores)([h.default], () => h.default.getMessage(d.id), [d.id]), L = a.useCallback(() => {
    (null == x ? void 0 : x.isBlockedEdit) ? (0, f.removeAutomodMessageNotice)(d.id) : c.default.deleteMessage(d.channel_id, d.id, !0)
  }, [d, x]);
  return a.useLayoutEffect(() => {
    v.current ? null != E && E() : v.current = !0
  }, [E, d.content, m, T, p]), (0, s.jsxs)("div", {
    id: (0, C.getMessageContentId)(d),
    className: i(l, M.markup, {
      [I.messageContent]: !0,
      [I.markupRtl]: "rtl" === o(d.content),
      [_.blockedEdit]: null == x ? void 0 : x.isBlockedEdit,
      [_.blockedSend]: !(null == x ? void 0 : x.isBlockedEdit)
    }),
    children: [null != p ? p : (0, g.getContent)(d, m), (null == x ? void 0 : x.isBlockedEdit) && null != d.timestamp && (0, s.jsxs)(s.Fragment, {
      children: [" ", (0, s.jsx)(S.default, {
        timestamp: d.timestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, s.jsxs)("span", {
          className: I.edited,
          children: ["(", A.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX, ")"]
        })
      })]
    }), (0, s.jsx)(N, {
      notice: null !== (n = null == x ? void 0 : x.errorMessage) && void 0 !== n ? n : A.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
      message: d,
      compact: r,
      onDismiss: L
    })]
  })
}, g.memoizeMessageProps)