"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("37983");
n("884691");
var r = n("77078"),
  a = n("599110"),
  l = n("845579"),
  s = n("49111"),
  i = n("782340");

function o() {
  let e = l.UseLegacyChatInput.useSetting(),
    t = l.UseRichChatInput.useSetting();
  return e ? null : (0, u.jsx)(r.MenuCheckboxItem, {
    id: "preview-markdown-toggle",
    label: i.default.Messages.PREVIEW_MARKDOWN,
    action: () => {
      let e = !t;
      a.default.track(s.AnalyticEvents.PREVIEW_MARKDOWN_TOGGLED, {
        enabled: e,
        location: {
          section: s.AnalyticsSections.SETTINGS_CONTEXT_MENU
        }
      }), l.UseRichChatInput.updateSetting(e)
    },
    checked: t
  })
}