"use strict";
s.r(t), s.d(t, {
  useGameSettingsTabs: function() {
    return c
  }
});
var a = s("895070"),
  n = s("785511"),
  l = s("194632"),
  i = s("683692"),
  r = s("358085"),
  o = s("168308"),
  d = s("332325"),
  u = s("689938");

function c() {
  var e;
  return (e = (0, o.useShouldShowOverlaySettings)(), [{
    id: d.GameSettingsTab.MY_GAMES,
    title: u.default.Messages.MY_GAMES,
    icon: n.DpadIcon,
    predicate: () => !r.isPlatformEmbedded
  }, {
    id: d.GameSettingsTab.CLIPS,
    title: u.default.Messages.CLIPS,
    icon: a.ClipsIcon
  }, {
    id: d.GameSettingsTab.OVERLAY,
    title: u.default.Messages.SETTINGS_GAMES_OVERLAY,
    icon: i.ScreenSystemRequirementsIcon,
    predicate: () => !e
  }, {
    id: d.GameSettingsTab.ACTIVITY_PRIVACY,
    title: u.default.Messages.ACTIVITY_PRIVACY,
    icon: l.FlashIcon
  }]).filter(e => null == e.predicate || !e.predicate())
}