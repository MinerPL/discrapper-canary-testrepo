"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("49671"),
  r = s("386045"),
  o = s("803725"),
  d = s("119052"),
  u = s("782340"),
  c = s("824905"),
  S = s("925994");

function E() {
  let e = (0, n.useStateFromStores)([r.default], () => r.default.getSettings().storageLocation),
    t = async () => {
      let e = await i.default.fileManager.showOpenDialog({
        properties: ["openDirectory", "createDirectory"]
      });
      e.length > 0 && o.updateClipsStorageLocation(e[0])
    };
  return (0, a.jsx)(l.FormSection, {
    children: (0, a.jsx)(d.InputItem, {
      title: u.default.Messages.CLIPS_SETTINGS_STORAGE_LOCATION,
      note: u.default.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_HELP,
      className: c.formItem,
      children: (0, a.jsx)(l.Clickable, {
        className: S.selectControl,
        "aria-label": u.default.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_LABEL.format({
          storageLocation: e
        }),
        onClick: t,
        children: (0, a.jsx)(l.TextInput, {
          tabIndex: -1,
          value: e,
          editable: !1,
          "aria-hidden": !0
        })
      })
    })
  })
}