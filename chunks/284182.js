"use strict";
n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250);
n(470079);
var l = n(399606),
  a = n(481060),
  i = n(541716),
  r = n(859235),
  o = n(898463),
  c = n(76451),
  d = n(117530),
  u = n(689938),
  h = n(994346);

function m(e) {
  let {
    parentChannel: t
  } = e, n = (0, l.Wu)([d.Z], () => {
    let e = d.Z.getUploads(t.id, i.I.CREATE_FORUM_POST.drafts.type);
    return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail)
  });
  return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsx)(a.Text, {
      variant: "text-md/semibold",
      color: "text-muted",
      children: u.Z.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE
    }), (0, s.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: u.Z.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION
    }), (0, s.jsx)("div", {
      children: (0, s.jsx)(a.ScrollerThin, {
        className: h.uploadsContainer,
        orientation: "horizontal",
        paddingFix: !1,
        fade: !0,
        children: (0, s.jsxs)("div", {
          className: h.uploads,
          children: [n.map(e => (0, s.jsx)(o.Z, {
            channelId: t.id,
            draftType: i.I.CREATE_FORUM_POST.drafts.type,
            upload: e,
            keyboardModeEnabled: !0,
            hideFileName: !0,
            size: r.q.SMALL
          }, e.id)), (0, s.jsx)(c._, {
            channelId: t.id
          })]
        })
      })
    })]
  })
}