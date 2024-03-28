"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var s = a("735250");
a("470079");
var n = a("399606"),
  l = a("481060"),
  r = a("541716"),
  i = a("859235"),
  o = a("898463"),
  d = a("76451"),
  u = a("117530"),
  c = a("689938"),
  m = a("435819");

function h(e) {
  let {
    parentChannel: t
  } = e, a = (0, n.useStateFromStoresArray)([u.default], () => {
    let e = u.default.getUploads(t.id, r.ChatInputTypes.CREATE_FORUM_POST.drafts.type);
    return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail)
  });
  return (0, s.jsxs)("div", {
    className: m.container,
    children: [(0, s.jsx)(l.Text, {
      variant: "text-md/semibold",
      color: "text-muted",
      children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE
    }), (0, s.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION
    }), (0, s.jsx)("div", {
      children: (0, s.jsx)(l.ScrollerThin, {
        className: m.uploadsContainer,
        orientation: "horizontal",
        paddingFix: !1,
        fade: !0,
        children: (0, s.jsxs)("div", {
          className: m.uploads,
          children: [a.map(e => (0, s.jsx)(o.default, {
            channelId: t.id,
            draftType: r.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
            upload: e,
            keyboardModeEnabled: !0,
            hideFileName: !0,
            size: i.AttachmentListItemSizes.SMALL
          }, e.id)), (0, s.jsx)(d.ComposerUploadButton, {
            channelId: t.id
          })]
        })
      })
    })]
  })
}