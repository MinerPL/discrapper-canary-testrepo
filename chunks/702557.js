"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(470079),
  r = n(442837),
  s = n(544891),
  o = n(570140),
  a = n(722086),
  l = n(981631);

function u(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.getNote(e));
  return i.useEffect(() => {
    null == t && _(e)
  }, [t, e]), null != t ? t : {
    loading: !0,
    note: null
  }
}
async function _(e) {
  o.Z.dispatch({
    type: "USER_NOTE_LOAD_START",
    userId: e
  });
  try {
    let {
      body: t
    } = await s.tn.get({
      url: l.ANM.NOTE(e),
      oldFormErrors: !0
    });
    o.Z.dispatch({
      type: "USER_NOTE_LOADED",
      userId: e,
      note: t
    })
  } catch (t) {
    o.Z.dispatch({
      type: "USER_NOTE_LOADED",
      userId: e
    })
  }
}