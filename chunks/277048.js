"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("653603"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("904245"),
  f = n("232961"),
  h = n("223606"),
  m = n("453687"),
  p = n("833571"),
  E = n("63063"),
  C = n("727779"),
  g = n("113039"),
  S = n("534761"),
  _ = n("981631"),
  T = n("689938"),
  I = n("366055"),
  A = n("990291"),
  N = n("904335");
let v = l.memo(function(e) {
  let {
    message: t,
    notice: n,
    compact: l = !1,
    onDismiss: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(I.blockedNoticeContainer, {
        [I.compact]: l
      }),
      children: [(0, a.jsx)("div", {
        className: I.blockedNoticeIcon,
        children: (0, a.jsx)(p.default, {
          className: I.shieldIcon,
          width: 16,
          height: 16
        })
      }), (0, a.jsx)("div", {
        className: I.blockedNotice,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: n
        })
      })]
    }), (0, a.jsx)("div", {
      className: i()(I.ephemeralAccessories, {
        [I.compact]: l
      }),
      children: (0, a.jsx)(C.default, {
        message: t,
        onDeleteMessage: s,
        children: (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "interactive-normal",
          tag: "span",
          className: I.learnMore,
          children: T.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format({
            helpUrl: E.default.getArticleURL(_.HelpdeskArticles.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })
      })
    })]
  })
});
t.default = l.memo(function(e) {
  var t, n;
  let {
    className: s,
    compact: r,
    message: d,
    children: p,
    content: E,
    onUpdate: C
  } = e, _ = null === (t = d.editedTimestamp) || void 0 === t ? void 0 : t.toString(), x = l.useRef(!1), M = (0, u.useStateFromStores)([h.default], () => h.default.getMessage(d.id), [d.id]), R = l.useCallback(() => {
    (null == M ? void 0 : M.isBlockedEdit) ? (0, f.removeAutomodMessageNotice)(d.id) : c.default.deleteMessage(d.channel_id, d.id, !0)
  }, [d, M]);
  return l.useLayoutEffect(() => {
    x.current ? null != C && C() : x.current = !0
  }, [C, d.content, E, _, p]), (0, a.jsxs)("div", {
    id: (0, m.getMessageContentId)(d),
    className: i()(s, A.markup, {
      [N.messageContent]: !0,
      [N.markupRtl]: "rtl" === o()(d.content),
      [I.blockedEdit]: null == M ? void 0 : M.isBlockedEdit,
      [I.blockedSend]: !(null == M ? void 0 : M.isBlockedEdit)
    }),
    children: [null != p ? p : (0, g.getContent)(d, E), (null == M ? void 0 : M.isBlockedEdit) && null != d.timestamp && (0, a.jsxs)(a.Fragment, {
      children: [" ", (0, a.jsx)(S.default, {
        timestamp: d.timestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, a.jsxs)("span", {
          className: N.edited,
          children: ["(", T.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX, ")"]
        })
      })]
    }), (0, a.jsx)(v, {
      notice: null !== (n = null == M ? void 0 : M.errorMessage) && void 0 !== n ? n : T.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
      message: d,
      compact: r,
      onDismiss: R
    })]
  })
}, g.memoizeMessageProps)