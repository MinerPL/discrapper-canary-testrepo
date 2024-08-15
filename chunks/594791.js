t.d(n, {
  Z: function() {
return s;
  }
});
var o = t(735250);
t(470079);
var r = t(481060),
  a = t(626135),
  c = t(695346),
  i = t(981631),
  l = t(689938);

function s() {
  let e = c.dN.useSetting(),
n = c.R$.useSetting();
  return e ? null : (0, o.jsx)(r.MenuCheckboxItem, {
id: 'preview-markdown-toggle',
label: l.Z.Messages.PREVIEW_MARKDOWN,
action: () => {
  let e = !n;
  a.default.track(i.rMx.PREVIEW_MARKDOWN_TOGGLED, {
    enabled: e,
    location: {
      section: i.jXE.SETTINGS_CONTEXT_MENU
    }
  }), c.R$.updateSetting(e);
},
checked: n
  });
}