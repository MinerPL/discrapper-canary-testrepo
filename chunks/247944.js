"use strict";
n.r(t), n.d(t, {
  useShouldBlockDMInputForQuarantinedUser: function() {
    return s.default
  }
});
var a = n("735250");
n("470079");
var l = n("545594"),
  s = n("904847"),
  i = n("610674"),
  r = n("689938");
let o = n("848304");
t.default = () => (0, a.jsx)(l.MessageNoticeBanner, {
  bannerIcon: o,
  bannerHeader: r.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING,
  bannerSubtext: r.default.Messages.LIMITED_ACCESS_DM_BAR_SUBTEXT.format({
    appealLink: i.QUARANTINE_APPEAL_LINK
  })
})