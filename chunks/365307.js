"use strict";
t.d(s, {
  Z: function() {
    return _
  },
  j: function() {
    return I
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(139387),
  a = t(852860),
  r = t(490655),
  o = t(434404),
  c = t(360606),
  d = t(999382),
  u = t(821864),
  E = t(905753);

function _(e) {
  let {
    refToScroller: s
  } = e, t = (0, i.e7)([d.Z], () => d.Z.getGuild()), {
    section: l,
    sectionId: a,
    integrations: o,
    editedIntegration: u,
    webhooks: E,
    editedWebhook: _,
    isFetching: I,
    errors: T
  } = (0, i.cj)([c.Z], () => ({
    editedIntegration: c.Z.editedIntegration,
    editedWebhook: c.Z.editedWebhook,
    errors: c.Z.getErrors(),
    integrations: c.Z.integrations,
    isFetching: c.Z.isFetching(),
    section: c.Z.getSection(),
    sectionId: c.Z.getSectionId(),
    webhooks: c.Z.webhooks
  }));
  return null == t ? null : (0, n.jsx)(r.Z, {
    guild: t,
    section: l,
    sectionId: a,
    integrations: o,
    webhooks: E,
    editedIntegration: u,
    editedWebhook: _,
    isFetching: I,
    hasChanges: c.Z.hasChanges,
    errors: T,
    refToScroller: s
  })
}

function I() {
  let {
    guild: e,
    submitting: s
  } = (0, i.cj)([d.Z], () => ({
    guild: d.Z.getGuild(),
    submitting: d.Z.isSubmitting()
  }));
  return (0, n.jsx)(a.Z, {
    submitting: s,
    onReset: () => {
      l.Z.init(), u.Ui(), null != e && o.Z.init(e.id)
    },
    onSave: () => {
      if (null != e) {
        if (null != c.Z.editedIntegration) l.Z.saveIntegration(e.id, c.Z.editedIntegration);
        else if (null != c.Z.editedWebhook) l.Z.saveWebhook(e.id, c.Z.editedWebhook);
        else if (null != c.Z.editedCommandId) {
          let s = c.Z.getSectionId(),
            t = E.Z.getEditedApplication();
          if (null == s || null == t) return;
          l.Z.saveApplicationPermissions(s, e.id, Object.values(t))
        }
        d.Z.hasChanges() && o.Z.saveGuild(e.id, {
          features: e.features
        })
      }
    }
  })
}