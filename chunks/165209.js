"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
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
  d = l("611527"),
  u = l("820305");

function p() {
  let e = (0, r.useApplicationDirectoryHistory)(e => e.guildId);
  return (0, i.jsxs)("div", {
    className: d.container,
    role: "contentinfo",
    children: [(0, i.jsx)("img", {
      className: d.image,
      src: u,
      alt: ""
    }), (0, i.jsxs)("div", {
      className: d.content,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_HEADING
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_BODY
      })]
    }), (0, i.jsx)(a.Button, {
      size: a.Button.Sizes.SMALL,
      onClick: function() {
        s.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "new_to_apps",
          current_page: r.ApplicationDirectoryViews.HOME,
          guild_id: e
        }), (0, n.default)("https://discord.com/blog/how-to-use-discord-apps")
      },
      className: d.button,
      children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_CTA
    })]
  })
}