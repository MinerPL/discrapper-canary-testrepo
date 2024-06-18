"use strict";
n.d(t, {
  i: function() {
    return o
  }
});
var i = n(544891),
  r = n(881052),
  s = n(981631);
async function o(e, t) {
  try {
    await i.tn.patch({
      url: s.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
      body: t
    })
  } catch (e) {
    throw new r.Hx(e)
  }
}