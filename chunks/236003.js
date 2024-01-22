"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("37983");
s("884691");
var n = s("65597"),
  l = s("77078"),
  r = s("850391"),
  i = s("271972"),
  o = s("761354"),
  u = s("1999"),
  d = s("585722"),
  c = s("782340"),
  m = s("909067");

function h(e) {
  let {
    parentChannel: t
  } = e, s = (0, n.useStateFromStoresArray)([d.default], () => {
    let e = d.default.getUploads(t.id, r.ChatInputTypes.CREATE_FORUM_POST.drafts.type);
    return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail)
  });
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-md/semibold",
      color: "text-muted",
      children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(l.ScrollerThin, {
        className: m.uploadsContainer,
        orientation: "horizontal",
        paddingFix: !1,
        fade: !0,
        children: (0, a.jsxs)("div", {
          className: m.uploads,
          children: [s.map(e => (0, a.jsx)(o.default, {
            channelId: t.id,
            draftType: r.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
            upload: e,
            keyboardModeEnabled: !0,
            hideFileName: !0,
            size: i.AttachmentListItemSizes.SMALL
          }, e.id)), (0, a.jsx)(u.ComposerUploadButton, {
            channelId: t.id
          })]
        })
      })
    })]
  })
}