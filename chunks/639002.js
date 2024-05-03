"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var i = l("735250");
l("470079");
var a = l("481060"),
  n = l("782568"),
  s = l("626135"),
  r = l("132871"),
  c = l("981631"),
  o = l("689938"),
  d = l("769081");

function u(e) {
  let {
    guildId: t
  } = e;
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)("img", {
      className: d.image,
      src: l("731914"),
      alt: ""
    }), (0, i.jsxs)("div", {
      className: d.content,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-md/extrabold",
        children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
      })]
    }), (0, i.jsx)(a.Button, {
      size: a.Button.Sizes.SMALL,
      onClick: function() {
        s.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "submit_music_app",
          current_page: r.ApplicationDirectoryViews.SEARCH,
          guild_id: t
        }), (0, n.default)("https://dis.gd/music-search-page-inclusion")
      },
      color: a.Button.Colors.TRANSPARENT,
      className: d.button,
      children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
    })]
  })
}