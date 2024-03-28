"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("735250");
n("470079");
var r = n("481060"),
  a = n("626135"),
  s = n("695346"),
  l = n("981631"),
  i = n("689938");

function o() {
  let e = s.UseLegacyChatInput.useSetting(),
    t = s.UseRichChatInput.useSetting();
  return e ? null : (0, u.jsx)(r.MenuCheckboxItem, {
    id: "preview-markdown-toggle",
    label: i.default.Messages.PREVIEW_MARKDOWN,
    action: () => {
      let e = !t;
      a.default.track(l.AnalyticEvents.PREVIEW_MARKDOWN_TOGGLED, {
        enabled: e,
        location: {
          section: l.AnalyticsSections.SETTINGS_CONTEXT_MENU
        }
      }), s.UseRichChatInput.updateSetting(e)
    },
    checked: t
  })
}