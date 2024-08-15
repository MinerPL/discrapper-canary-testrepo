n.d(s, {
  $l: function() {
return S;
  },
  RI: function() {
return t;
  },
  Ud: function() {
return a;
  }
});
var o, c, r = n(689938);
let t = 'https://discord.com/community/securing-your-server';
(o = c || (c = {})).DM_SPAM = 'DM_SPAM', o.MESSAGE_SPAM = 'MESSAGE_SPAM', o.MENTION_SPAM = 'MENTION_SPAM', o.SUSPICIOUS_USERS = 'SUSPICIOUS_USERS', o.SETTINGS_SPAM = 'SETTINGS_SPAM';
let a = [
'MESSAGE_SPAM',
'DM_SPAM',
'MENTION_SPAM',
'SUSPICIOUS_USERS',
'SETTINGS_SPAM'
  ],
  S = e => {
switch (e) {
  case 'DM_SPAM':
    return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_DM_SPAM;
  case 'MENTION_SPAM':
    return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_MENTION_SPAM;
  case 'MESSAGE_SPAM':
    return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_MESSAGE_SPAM;
  case 'SETTINGS_SPAM':
    return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_SETTINGS_SPAM;
  case 'SUSPICIOUS_USERS':
    return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_SUSPICIOUS_USERS;
}
return null;
  };