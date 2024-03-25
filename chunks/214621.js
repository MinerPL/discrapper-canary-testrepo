"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("70845"),
  d = n("95045"),
  c = n("845579"),
  f = n("957255"),
  E = n("27618"),
  h = n("505684"),
  _ = n("93427"),
  C = n("389495"),
  S = n("49111"),
  I = n("719347"),
  m = n("782340"),
  p = n("196417"),
  T = n("919163");
let g = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: g
  } = (0, C.useMessageRequestPreview)(t), A = (0, r.useStateFromStores)([E.default], () => null != g && E.default.isBlocked(g.author.id), [g]), N = (0, r.useStateFromStores)([f.default], () => f.default.can(S.Permissions.MANAGE_MESSAGES, t)), R = c.RenderSpoilers.useSetting(), {
    content: O
  } = s.useMemo(() => (null == g ? void 0 : g.content) != null && "" !== g.content ? (0, d.default)(g, {
    formatInline: !0,
    noStyleAndInteraction: !0
  }) : {
    content: null
  }, [g]), v = null;
  if (l) v = (0, a.jsx)(o.Text, {
    className: p.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: m.default.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != g && A) v = (0, a.jsx)(o.Text, {
      className: p.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: m.default.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != g) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, _.renderSingleLineMessage)(g, O, A, i(p.messageContent, T.inlineFormat, T.smallFontSize), {
        iconClass: p.messageContentIcon,
        iconSize: I.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
      });
      v = null != t ? (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: p.messageContent,
        children: t
      }) : (0, a.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: p.messageReplacement,
        children: e
      })
    } else v = (0, a.jsx)(o.Text, {
      className: p.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: m.default.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else v = null;
  return (0, a.jsx)(h.ObscuredDisplayContext.Provider, {
    value: (0, u.default)(R, N),
    children: (0, a.jsx)(o.FocusBlock, {
      className: p.messageFocusBlock,
      children: v
    })
  })
});
var A = g