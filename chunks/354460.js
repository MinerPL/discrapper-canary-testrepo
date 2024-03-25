"use strict";
n.r(t), n.d(t, {
  getGuildFeatureFromUploadType: function() {
    return l
  },
  shouldShowPremiumIconForGIFPickerOption: function() {
    return i
  }
});
var a = n("49111"),
  r = n("75015");

function l(e, t) {
  let {
    isGIF: n
  } = t;
  if (e === r.UploadTypes.GUILD_BANNER) return n ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER
}

function i(e) {
  return e === r.UploadTypes.AVATAR || e === r.UploadTypes.BANNER
}