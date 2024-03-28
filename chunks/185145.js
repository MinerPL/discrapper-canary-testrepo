"use strict";
n.r(t), n.d(t, {
  CommunicationDisabledBanner: function() {
    return C
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("545594"),
  r = n("314897"),
  o = n("271383"),
  u = n("373791"),
  d = n("789695"),
  c = n("322937"),
  f = n("134049"),
  h = n("893732"),
  m = n("590433"),
  p = n("689938"),
  E = n("879146");

function C(e) {
  let {
    guild: t,
    disabledUntil: n
  } = e, [C, g] = (0, f.useCommunicationDisabledNoticeStore)(t.id), S = (0, l.useStateFromStores)([o.default, r.default], () => o.default.getMember(t.id, r.default.getId()), [t.id]);
  return (0, c.useCommunicationDisabledCountdownCleanup)(S), (0, a.jsxs)("div", {
    children: [C ? (0, a.jsx)(h.default, {
      onClose: () => g(t.id),
      guildName: t.name
    }) : null, (0, a.jsx)(i.MessageNoticeBanner, {
      bannerIcon: (0, a.jsx)(d.default, {
        className: E.bannerIcon
      }),
      bannerHeader: p.default.Messages.GUILD_COMMUNICATION_DISABLED_NOTICE_HEADER,
      bannerSubtext: p.default.Messages.GUILD_COMMUNICATION_DISABLED_CHAT_NOTICE_DESCRIPTION.format({
        link: m.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
      }),
      containerStyles: E.bannerContainer,
      headerStyles: E.bannerHeader,
      children: (0, a.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: (0, a.jsx)(u.default, {
          deadline: new Date(n),
          showUnits: !0,
          stopAtOneSec: !0
        })
      })
    })]
  })
}