"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("780384"),
  i = l("481060"),
  r = l("668781"),
  o = l("308063"),
  d = l("410030"),
  u = l("285952"),
  c = l("63063"),
  f = l("725875"),
  m = l("981631"),
  I = l("689938"),
  T = l("756541"),
  N = l("893916"),
  E = l("408942");

function S(e) {
  let t, {
      guild: l,
      channel: S,
      customWebhooks: g,
      editedWebhook: h,
      selectableWebhookChannels: p,
      refToScroller: _,
      errors: O,
      canNavigate: A
    } = e,
    C = (0, d.default)(),
    [x, R] = a.useState(null),
    [M, v] = a.useState(null);
  if (null != S) t = S;
  else {
    let e = Object.values(p);
    t = e.length > 0 ? e[0] : null
  }
  let L = a.useCallback(async () => {
    if (A() && null !== t) {
      let e = await o.default.create(l.id, t.id).catch(e => {
        let {
          body: t,
          status: l
        } = e;
        return t && t.code === m.AbortCodes.TOO_MANY_WEBHOOKS ? r.default.show({
          title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: I.default.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED
        }) : 429 === l ? r.default.show({
          title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT
        }) : r.default.show({
          title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: I.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
        }), null
      });
      null != e && (v(e.id), R(e))
    }
  }, [A, t, l]);
  a.useEffect(() => {
    0 === g.length && L()
  }, []);
  let j = null !== t;
  return (0, n.jsxs)(i.FormSection, {
    children: [(0, n.jsx)(i.FormText, {
      type: i.FormTextTypes.DESCRIPTION,
      children: I.default.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
        helpdeskArticle: c.default.getArticleURL(m.HelpdeskArticles.WEBHOOKS),
        developersArticle: m.MarketingURLs.API_DOCS_WEBHOOKS
      })
    }), (0, n.jsx)(i.FormDivider, {
      className: T.headerDivider
    }), g.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(i.Button, {
        className: T.createButton,
        size: i.Button.Sizes.SMALL,
        disabled: !j,
        onClick: L,
        children: I.default.Messages.INTEGRATIONS_WEBHOOKS_CREATE
      }), (0, n.jsx)(f.default, {
        webhooks: g,
        editedWebhook: h,
        selectableWebhookChannels: p,
        lastCreatedWebhookId: null == x ? void 0 : x.id,
        errors: O,
        canNavigate: A
      })]
    }) : function(e, t, l) {
      let a = (0, s.isThemeDark)(e) ? N : E;
      return (0, n.jsxs)(u.default, {
        direction: u.default.Direction.VERTICAL,
        align: u.default.Align.CENTER,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: a,
          className: T.emptyStateImage
        }), (0, n.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          children: I.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY
        }), (0, n.jsx)(i.Button, {
          className: T.emptyStateButton,
          disabled: !t,
          onClick: l,
          children: I.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON
        })]
      })
    }(C, j, L)]
  })
}