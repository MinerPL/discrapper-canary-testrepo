s.d(t, {
  Z: function() {
return u;
  }
});
var n = s(735250);
s(470079);
var a = s(442837),
  i = s(481060),
  r = s(579806),
  o = s(435064),
  l = s(39604),
  c = s(442334),
  d = s(689938),
  _ = s(885582),
  E = s(249866);

function u() {
  let e = (0, a.e7)([o.Z], () => o.Z.getSettings().storageLocation),
t = async () => {
  let e = await r.Z.fileManager.showOpenDialog({
    properties: [
      'openDirectory',
      'createDirectory'
    ]
  });
  e.length > 0 && l.T1(e[0]);
};
  return (0, n.jsx)(i.FormSection, {
children: (0, n.jsx)(c.O, {
  title: d.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION,
  note: d.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_HELP,
  className: _.formItem,
  children: (0, n.jsx)(i.Clickable, {
    className: E.selectControl,
    'aria-label': d.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_LABEL.format({
      storageLocation: e
    }),
    onClick: t,
    children: (0, n.jsx)(i.TextInput, {
      tabIndex: -1,
      value: e,
      editable: !1,
      'aria-hidden': !0
    })
  })
})
  });
}