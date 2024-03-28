"use strict";
s.r(t), s.d(t, {
  GuildSettingsIntegrationsNotice: function() {
    return I
  },
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("139387"),
  i = s("852860"),
  r = s("490655"),
  o = s("434404"),
  d = s("360606"),
  u = s("999382"),
  c = s("821864"),
  E = s("905753");

function _(e) {
  let {
    refToScroller: t
  } = e, s = (0, l.useStateFromStores)([u.default], () => u.default.getGuild()), {
    section: n,
    sectionId: i,
    integrations: o,
    editedIntegration: c,
    webhooks: E,
    editedWebhook: _,
    isFetching: I,
    errors: T
  } = (0, l.useStateFromStoresObject)([d.default], () => ({
    editedIntegration: d.default.editedIntegration,
    editedWebhook: d.default.editedWebhook,
    errors: d.default.getErrors(),
    integrations: d.default.integrations,
    isFetching: d.default.isFetching(),
    section: d.default.getSection(),
    sectionId: d.default.getSectionId(),
    webhooks: d.default.webhooks
  }));
  return null == s ? null : (0, a.jsx)(r.default, {
    guild: s,
    section: n,
    sectionId: i,
    integrations: o,
    webhooks: E,
    editedIntegration: c,
    editedWebhook: _,
    isFetching: I,
    hasChanges: d.default.hasChanges,
    errors: T,
    refToScroller: t
  })
}

function I() {
  let {
    guild: e,
    submitting: t
  } = (0, l.useStateFromStoresObject)([u.default], () => ({
    guild: u.default.getGuild(),
    submitting: u.default.isSubmitting()
  }));
  return (0, a.jsx)(i.default, {
    submitting: t,
    onReset: () => {
      n.default.init(), c.resetPermissions(), null != e && o.default.init(e.id)
    },
    onSave: () => {
      if (null != e) {
        if (null != d.default.editedIntegration) n.default.saveIntegration(e.id, d.default.editedIntegration);
        else if (null != d.default.editedWebhook) n.default.saveWebhook(e.id, d.default.editedWebhook);
        else if (null != d.default.editedCommandId) {
          let t = d.default.getSectionId(),
            s = E.default.getEditedApplication();
          if (null == t || null == s) return;
          n.default.saveApplicationPermissions(t, e.id, Object.values(s))
        }
        u.default.hasChanges() && o.default.saveGuild(e.id, {
          features: e.features
        })
      }
    }
  })
}