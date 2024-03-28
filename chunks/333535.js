"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("852229"),
  i = n("399606"),
  r = n("481060"),
  o = n("367907"),
  u = n("592125"),
  d = n("682864"),
  c = n("465670"),
  f = n("757698"),
  h = n("934415"),
  m = n("63063"),
  p = n("158222"),
  E = n("410992"),
  C = n("981631"),
  g = n("689938"),
  S = n("126813");

function _(e) {
  let {
    threadId: t
  } = e, n = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(t)), _ = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(null == n ? void 0 : n.parent_id)), T = l.useCallback(() => {
    null != n && null != _ && ((0, o.trackWithMetadata)(C.AnalyticEvents.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, s.copy)((0, h.getChannelLinkToCopy)(n, _)))
  }, [n, _]);
  return (0, a.jsxs)("div", {
    className: S.sharePromptContainer,
    children: [(0, a.jsx)(E.default, {}), (0, a.jsxs)("div", {
      className: S.sharePromptContent,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({
          helpArticleUrl: m.default.getCreatorSupportArticleURL(C.HelpdeskArticles.MEDIA_CHANNEL)
        })
      }), (0, a.jsx)(d.default, {
        size: 4
      }), (0, a.jsxs)(r.Button, {
        className: S.sharePromptCta,
        innerClassName: S.ctaContent,
        onClick: T,
        children: [(0, a.jsx)(f.default, {
          height: "16px",
          width: "16px"
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_CTA
        })]
      })]
    }), (0, a.jsx)(r.Clickable, {
      className: S.closeButton,
      onClick: () => {
        (0, p.dismissMediaPostSharePrompt)(t)
      },
      "aria-label": g.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, a.jsx)(c.default, {
        height: "15px",
        width: "15px"
      })
    })]
  })
}