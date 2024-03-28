"use strict";
l.r(t), l.d(t, {
  getGuildFeatureFromUploadType: function() {
    return s
  },
  shouldShowPremiumIconForGIFPickerOption: function() {
    return n
  }
});
var a = l("981631"),
  i = l("486324");

function s(e, t) {
  let {
    isGIF: l
  } = t;
  if (e === i.UploadTypes.GUILD_BANNER) return l ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER
}

function n(e) {
  return e === i.UploadTypes.AVATAR || e === i.UploadTypes.BANNER
}