"use strict";
n.r(t), n.d(t, {
  getHeaderTextForInvite: function() {
    return a
  }
});
var s = n("689938");

function a(e) {
  let {
    isVoiceChannel: t,
    isHubGuild: n,
    isOwnInvite: a,
    isGuest: l,
    isStage: i,
    isStream: r
  } = e;
  if (t) {
    if (a) {
      if (r) return s.default.Messages.INVITE_BUTTON_TITLE_INVITER_STREAM;
      if (i) return s.default.Messages.INVITE_BUTTON_TITLE_INVITER_STAGE_CHANNEL;
      else if (l) return s.default.Messages.GUEST_INVITE_EMBED_TITLE_SENDER;
      else return s.default.Messages.INVITE_BUTTON_TITLE_INVITER_VOICE_CHANNEL
    }
    if (r) return s.default.Messages.INVITE_BUTTON_TITLE_INVITED_STREAM;
    if (i) return s.default.Messages.INVITE_BUTTON_TITLE_INVITED_STAGE_CHANNEL;
    else if (l) return s.default.Messages.GUEST_INVITE_EMBED_TITLE_RECEIVER;
    else return s.default.Messages.INVITE_BUTTON_TITLE_INVITED_VOICE_CHANNEL
  }
  return n ? a ? s.default.Messages.INVITE_BUTTON_TITLE_INVITER_HUB : s.default.Messages.INVITE_BUTTON_TITLE_INVITED_HUB : a ? s.default.Messages.INVITE_BUTTON_TITLE_INVITER : s.default.Messages.INVITE_BUTTON_TITLE_INVITED
}