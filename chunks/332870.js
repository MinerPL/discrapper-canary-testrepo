"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(648414),
  a = n(93879),
  l = n(974029),
  u = n(481479),
  _ = n(634648),
  d = n(630641),
  c = n(908434),
  E = n(308570),
  I = n(632184),
  T = n(170039),
  h = n(934458),
  S = n(227356),
  f = n(689938),
  N = n(504649);
t.Z = function(e) {
  let {
    iconType: t,
    children: n
  } = e, r = null;
  switch (t) {
    case "voice":
      r = (0, i.jsx)(I.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.VOICE_CHANNEL
      });
      break;
    case "voice-locked":
      r = (0, i.jsx)(d.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.VOICE_CHANNEL_LOCKED
      });
      break;
    case "stage":
      r = (0, i.jsx)(T.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.STAGE_CHANNEL
      });
      break;
    case "stage-locked":
      r = (0, i.jsx)(d.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.STAGE_CHANNEL_LOCKED
      });
      break;
    case "thread":
      r = (0, i.jsx)(h.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.THREAD
      });
      break;
    case "text":
      r = (0, i.jsx)(a.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.CHANNEL
      });
      break;
    case "forum":
      r = (0, i.jsx)(u.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.FORUM_CHANNEL
      });
      break;
    case "post":
      r = (0, i.jsx)(_.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.FORUM_POST
      });
      break;
    case "home":
    case "guide":
      r = (0, i.jsx)(E.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.SERVER_GUIDE
      });
      break;
    case "browse":
    case "customize":
      r = (0, i.jsx)(o.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.CHANNEL_BROWSER_TITLE
      });
      break;
    case "message":
      r = (0, i.jsx)(l.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
      });
      break;
    case "locked":
      r = (0, i.jsx)(d.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.NO_ACCESS
      });
      break;
    case "media":
      r = (0, i.jsx)(c.Z, {
        className: N.icon,
        "aria-label": f.Z.Messages.MEDIA_CHANNEL
      })
  }
  return (0, i.jsxs)("span", {
    className: s()("channelWithIcon", {
      [N.iconMentionText]: "text" === t
    }),
    children: [(0, i.jsx)(S.Z, {
      children: r
    }), null != n && "" !== n ? (0, i.jsx)("span", {
      className: N.name,
      children: n
    }) : null]
  })
}