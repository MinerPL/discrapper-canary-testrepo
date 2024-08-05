n.d(t, {
  e: function() {
return s;
  }
});
var i = n(689938);

function s(e) {
  let {
isVoiceChannel: t,
isHubGuild: n,
isOwnInvite: s,
isGuest: a,
isStage: r,
isStream: l
  } = e;
  if (t) {
if (s) {
  if (l)
    return i.Z.Messages.INVITE_BUTTON_TITLE_INVITER_STREAM;
  if (r)
    return i.Z.Messages.INVITE_BUTTON_TITLE_INVITER_STAGE_CHANNEL;
  else if (a)
    return i.Z.Messages.GUEST_INVITE_EMBED_TITLE_SENDER;
  else
    return i.Z.Messages.INVITE_BUTTON_TITLE_INVITER_VOICE_CHANNEL;
}
if (l)
  return i.Z.Messages.INVITE_BUTTON_TITLE_INVITED_STREAM;
if (r)
  return i.Z.Messages.INVITE_BUTTON_TITLE_INVITED_STAGE_CHANNEL;
else if (a)
  return i.Z.Messages.GUEST_INVITE_EMBED_TITLE_RECEIVER;
else
  return i.Z.Messages.INVITE_BUTTON_TITLE_INVITED_VOICE_CHANNEL;
  }
  return n ? s ? i.Z.Messages.INVITE_BUTTON_TITLE_INVITER_HUB : i.Z.Messages.INVITE_BUTTON_TITLE_INVITED_HUB : s ? i.Z.Messages.INVITE_BUTTON_TITLE_INVITER : i.Z.Messages.INVITE_BUTTON_TITLE_INVITED;
}