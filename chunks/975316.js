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
var l = s(442837), a = s(139387), i = s(852860), r = s(490655), o = s(533947), d = s(388610), c = s(430824);
function u(e) {
    let {refToScroller: t} = e, {channel: s} = (0, l.e7)([d.Z], () => d.Z.getProps(), []), a = (0, l.e7)([c.Z], () => null != s ? c.Z.getGuild(s.getGuildId()) : null, [s]), {
            section: i,
            sectionId: u,
            webhooks: h,
            editedWebhook: m,
            isFetching: g,
            errors: E
        } = (0, l.e7)([o.Z], () => o.Z.getProps(), []);
    return null == a || null == s ? null : (0, n.jsx)(r.Z, {
        guild: a,
        channel: s,
        section: i,
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
    let {
            channel: e,
            submitting: t
        } = (0, l.e7)([d.Z], () => d.Z.getProps()), s = (0, l.e7)([c.Z], () => null != e ? c.Z.getGuild(e.getGuildId()) : null, [e]);
    return (0, n.jsx)(i.Z, {
        submitting: t,
        onReset: () => {
            a.Z.init();
        },
        onSave: () => {
            if (null != s)
                null != o.Z.editedWebhook && a.Z.saveWebhook(s.id, o.Z.editedWebhook);
        }
    });
}
