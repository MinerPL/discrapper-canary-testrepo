"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("990547"),
  i = n("481060"),
  r = n("213609"),
  o = n("536442"),
  u = n("39604"),
  d = n("176127"),
  c = n("689938"),
  f = n("341512");

function h(e) {
  let {
    onOpenClips: t,
    lastClipsSession: n,
    closePopout: h
  } = e;
  return (l.useEffect(() => () => {
    (0, u.clearClipsSession)()
  }, []), (0, r.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.HOTSPOT,
    properties: {
      hotspot_location: o.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER
    }
  }), null == n) ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsxs)("div", {
    className: f.recentClipsPopout,
    children: [(0, a.jsx)("div", {
      className: f.thumbnailStackContainer,
      children: (0, a.jsx)(d.default, {})
    }), (0, a.jsx)(i.Heading, {
      className: f.header,
      color: "header-primary",
      variant: "heading-md/extrabold",
      children: c.default.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
        count: n.newClipIds.length
      })
    }), (0, a.jsx)(i.Text, {
      color: "text-normal",
      className: f.__invalid_content,
      variant: "text-sm/medium",
      children: c.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_BODY.format({
        applicationName: n.applicationName
      })
    }), (0, a.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, a.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        onClick: function() {
          (0, o.hideHotspot)(o.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER), h()
        },
        children: c.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_SECONDARY_CTA
      }), (0, a.jsx)(i.Button, {
        color: i.Button.Colors.BRAND,
        onClick: t,
        children: c.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_PRIMARY_CTA
      })]
    })]
  })
}