"use strict";
var i = n(544891),
  r = n(981631);
t.Z = {
  updateNote(e, t) {
    i.tn.put({
      url: r.ANM.NOTE(e),
      body: {
        note: t
      },
      oldFormErrors: !0
    })
  }
}