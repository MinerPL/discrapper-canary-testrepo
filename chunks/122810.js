"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(981631);

function r(e, t) {
  return ((null == e ? void 0 : e.type) !== i.IIU.HANG_STATUS || !!t) && null != e && e.type !== i.IIU.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
}