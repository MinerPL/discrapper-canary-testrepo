"use strict";
t.d(s, {
  Nx: function() {
    return c
  },
  lW: function() {
    return d
  },
  tK: function() {
    return i
  }
});
var n, i, l = t(367907),
  a = t(626135),
  r = t(63063),
  o = t(981631);
(n = i || (i = {})).DESCRIPTION = "description", n.CATEGORIES = "categories", n.TAGS = "tags", n.AGREE_TO_RULES = "agree_to_rules";
let c = (e, s, t) => {
    a.default.track(o.rMx.USER_FLOW_TRANSITION, {
      flow_type: o.jXE.DISCOVERY_SETUP_MODAL,
      from_step: e,
      to_step: s,
      ...(0, l.hH)(t)
    })
  },
  d = e => {
    let {
      articleId: s,
      guildId: t,
      modalStep: n = null,
      pageView: i = null
    } = e;
    open(r.Z.getArticleURL(s)), a.default.track(o.rMx.DISCOVERY_SETUP_CTA_CLICKED, {
      cta_name: o.b8q,
      discovery_settings_view: i,
      help_center_article_id: s,
      modal_step: n,
      ...(0, l.hH)(t)
    })
  }