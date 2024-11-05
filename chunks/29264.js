t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(668781),
    a = t(378409),
    o = t(976853),
    s = t(626135),
    u = t(358085),
    d = t(960048),
    c = t(998502),
    g = t(36998),
    f = t(981631),
    m = t(388032);
function h(e, n) {
    r.Z.show({
        title: m.intl.string(m.t.j2d6Ki),
        body: e
    }),
        d.Z.captureException(n);
}
function v(e, n, t) {
    if ((0, o.Z)(null == n ? void 0 : n.getChannelId()) || (null == t ? void 0 : t.shouldHideMediaOptions) === !0 || !u.isPlatformEmbedded || null == e || !(0, a.gS)(e)) return null;
    let r = (0, a.s$)(e),
        d = async () => {
            try {
                await c.ZP.saveImage(r), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, { ...(0, g.v)() });
            } catch (e) {
                s.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, g.v)() }), h(m.intl.string(m.t['8Ve/S0']), e);
            }
        },
        v = async () => {
            try {
                await c.ZP.copyImage(r), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, { ...(0, g.v)() });
            } catch (e) {
                h(m.intl.string(m.t.PTPbj4), e), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, g.v)() });
            }
        };
    return [
        c.ZP.canCopyImage() && (0, a.Lz)(e)
            ? (0, i.jsx)(
                  l.MenuItem,
                  {
                      id: 'copy-image',
                      label: m.intl.string(m.t.tvUqWl),
                      action: v
                  },
                  'copy-image'
              )
            : null,
        (0, i.jsx)(
            l.MenuItem,
            {
                id: 'save-image',
                label: m.intl.string(m.t.PeXhgI),
                action: d
            },
            'save-image'
        )
    ];
}
