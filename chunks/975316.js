s.d(t, {
    B: function () {
        return h;
    },
    Z: function () {
        return u;
    }
});
var n = s(735250);
s(470079);
var l = s(442837),
    i = s(139387),
    a = s(852860),
    r = s(490655),
    o = s(533947),
    c = s(388610),
    d = s(430824);
function u(e) {
    let { refToScroller: t } = e,
        s = (0, l.e7)([c.Z], () => c.Z.getChannel(), []),
        i = (0, l.e7)([d.Z], () => (null != s ? d.Z.getGuild(s.getGuildId()) : null), [s]),
        { section: a, sectionId: u, webhooks: h, editedWebhook: m, isFetching: g, errors: E } = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
    return null == i || null == s
        ? null
        : (0, n.jsx)(r.Z, {
              guild: i,
              channel: s,
              section: a,
              sectionId: u,
              webhooks: h,
              editedWebhook: m,
              isFetching: g,
              hasChanges: o.Z.hasChanges,
              errors: E,
              refToScroller: t
          });
}
function h() {
    let { channel: e, submitting: t } = (0, l.cj)([c.Z], () => c.Z.getProps()),
        s = (0, l.e7)([o.Z], () => o.Z.editedWebhook),
        r = (0, l.e7)([d.Z], () => (null != e ? d.Z.getGuild(e.getGuildId()) : null), [e]);
    return (0, n.jsx)(a.Z, {
        submitting: t,
        onReset: () => {
            i.Z.init();
        },
        onSave: () => {
            if (null != r) null != s && i.Z.saveWebhook(r.id, s);
        }
    });
}
