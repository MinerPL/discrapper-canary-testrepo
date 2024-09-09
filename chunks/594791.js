t.d(n, {
    Z: function () {
        return u;
    }
});
var o = t(735250);
t(470079);
var r = t(481060),
    a = t(626135),
    i = t(695346),
    c = t(981631),
    l = t(689938);
function u() {
    let e = i.dN.useSetting(),
        n = i.R$.useSetting();
    return e
        ? null
        : (0, o.jsx)(r.MenuCheckboxItem, {
              id: 'preview-markdown-toggle',
              label: l.Z.Messages.PREVIEW_MARKDOWN,
              action: () => {
                  let e = !n;
                  a.default.track(c.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: c.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      i.R$.updateSetting(e);
              },
              checked: n
          });
}
