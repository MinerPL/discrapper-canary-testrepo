"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var n = l("735250");
l("470079");
var a = l("780384"),
  s = l("481060"),
  i = l("410030"),
  r = l("285952"),
  o = l("63063"),
  d = l("725875"),
  u = l("981631"),
  c = l("689938"),
  f = l("176670"),
  m = l("893916"),
  I = l("408942");

function T(e) {
  let {
    followedChannelWebhooks: t,
    editedWebhook: l,
    selectableWebhookChannels: T,
    errors: N,
    canNavigate: E
  } = e, S = (0, i.default)();
  return (0, n.jsxs)(s.FormSection, {
    children: [(0, n.jsx)(s.FormText, {
      type: s.FormTextTypes.DESCRIPTION,
      children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format({
        helpdeskArticle: o.default.getArticleURL(u.HelpdeskArticles.CHANNEL_FOLLOWING)
      })
    }), (0, n.jsx)(s.FormDivider, {
      className: f.headerDivider
    }), t.length > 0 ? (0, n.jsx)(d.default, {
      webhooks: t,
      editedWebhook: l,
      selectableWebhookChannels: T,
      errors: N,
      canNavigate: E
    }) : function(e, t) {
      let l = (0, a.isThemeDark)(e) ? m : I;
      return (0, n.jsxs)(r.default, {
        direction: r.default.Direction.VERTICAL,
        align: r.default.Align.CENTER,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: l,
          className: f.emptyStateImage
        }), (0, n.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY
        }), (0, n.jsx)(s.Button, {
          className: f.emptyStateButton,
          onClick: t,
          children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON
        })]
      })
    }(S, () => open(o.default.getArticleURL(u.HelpdeskArticles.CHANNEL_FOLLOWING)))]
  })
}