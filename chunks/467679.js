"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(208633),
  a = n(981729),
  l = n(481060),
  u = n(674563),
  _ = n(689938),
  d = n(461369);
let c = e => {
  let t, {
      invertColor: n = !1,
      type: r = u.Hb.BOT,
      className: c,
      verified: E,
      hideIcon: I = !1,
      useRemSizes: T = !1,
      children: h = []
    } = e,
    S = null,
    f = _.Z.Messages.VERIFIED_BOT_TOOLTIP;
  switch (r) {
    case u.Hb.SYSTEM_DM:
    case u.Hb.OFFICIAL:
      E = !0, f = _.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP_OFFICIAL, S = _.Z.Messages.SYSTEM_DM_TAG_OFFICIAL;
      break;
    case u.Hb.SERVER:
      S = _.Z.Messages.BOT_TAG_SERVER;
      break;
    case u.Hb.ORIGINAL_POSTER:
      S = _.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
      break;
    case u.Hb.STAFF_ONLY_DM:
      S = _.Z.Messages.STAFF_BADGE_TOOLTIP;
      break;
    case u.Hb.AI:
      E = !0, f = _.Z.Messages.AI_GENERATED_TOOLTIP, S = _.Z.Messages.AI_TAG;
      break;
    case u.Hb.REMIX:
      E = !1, S = _.Z.Messages.REMIXING_TAG;
      break;
    case u.Hb.BOT:
    default:
      S = _.Z.Messages.APP_TAG
  }
  let N = r === u.Hb.ORIGINAL_POSTER,
    A = r === u.Hb.REMIX,
    m = null;
  E && (m = (0, i.jsx)(a.u, {
    text: f,
    align: "center",
    position: "top",
    children: e => (0, i.jsx)(o.k, {
      ...e,
      className: d.botTagVerified,
      color: l.tokens.unsafe_rawColors.WHITE_500
    })
  })), t = r === u.Hb.AI ? d.botTagAI : n ? d.botTagInvert : d.botTagRegular;
  let O = e => (0, i.jsxs)("span", {
    ...e,
    className: s()(c, t, T ? d.rem : d.px, {
      [d.botTagOP]: N,
      [d.botTagRemix]: A
    }),
    children: [I ? null : m, h, (0, i.jsx)("span", {
      className: d.botText,
      children: S
    })]
  });
  switch (r) {
    case u.Hb.REMIX:
      return (0, i.jsx)(a.u, {
        text: _.Z.Messages.REMIXING_DOWNLOAD_APP,
        position: "top",
        children: e => O(e)
      });
    case u.Hb.ORIGINAL_POSTER:
      return (0, i.jsx)(a.u, {
        text: _.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
        position: "top",
        children: e => O(e)
      });
    default:
      return O()
  }
};
c.Types = u.Hb, t.Z = c