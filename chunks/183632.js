"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("579806"),
  r = s("435064"),
  o = s("39604"),
  d = s("442334"),
  u = s("689938"),
  c = s("893427"),
  S = s("677526");

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