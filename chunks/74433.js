"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var i = n(833858),
  r = n(657305),
  s = n(841784),
  o = n(420660),
  a = n(981631),
  l = n(689938);

function u(e) {
  return {
    [a.IIU.STREAMING]: e ? l.Z.Messages.UNFORMATTED_STREAMING : l.Z.Messages.STREAMING,
    [a.IIU.LISTENING]: e ? l.Z.Messages.UNFORMATTED_LISTENING_TO : l.Z.Messages.LISTENING_TO,
    [a.IIU.WATCHING]: e ? l.Z.Messages.UNFORMATTED_WATCHING : l.Z.Messages.WATCHING,
    [a.IIU.COMPETING]: e ? l.Z.Messages.UNFORMATTED_COMPETING : l.Z.Messages.COMPETING
  }
}

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    _ = arguments.length > 3 ? arguments[3] : void 0;
  if (null != e && e.type === a.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  if (null != t) return null == e || e.type !== a.IIU.PLAYING ? l.Z.Messages.SHARING_SCREEN : u(n)[a.IIU.STREAMING].format({
    name: e.name
  });
  if (_ && null != e && e.type === a.IIU.HANG_STATUS) return (0, i.O8)(e);
  if (null == e || null == e.name) return null;
  if ((0, o.Z)(e)) {
    let t = null != e.details && "" !== e.details ? e.details : e.name;
    return u(n)[a.IIU.STREAMING].format({
      name: t
    })
  }
  return (0, s.Z)(e) ? (0, r.Z)(e.name) : function(e, t, n) {
    let i = u(n);
    switch (e) {
      case a.IIU.LISTENING:
      case a.IIU.WATCHING:
      case a.IIU.COMPETING:
        return i[e].format({
          name: t
        });
      case a.IIU.CUSTOM_STATUS:
      case a.IIU.HANG_STATUS:
        return null;
      case a.IIU.PLAYING:
      default:
        return n ? l.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
          game: t
        }) : l.Z.Messages.PLAYING_GAME.format({
          game: t
        })
    }
  }(e.type, e.name, n)
}

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  if (Array.isArray(e)) {
    let r = e;
    null != t && (r = [...r, null]);
    let s = null;
    for (let e of r) {
      let r = _(e, t, n, i);
      if (null != r) return {
        activity: e,
        activityText: r
      };
      (null == e ? void 0 : e.type) === a.IIU.CUSTOM_STATUS && null != e.emoji && (s = e)
    }
    return (null == s ? void 0 : s.emoji) != null ? {
      activity: s,
      activityText: null
    } : null
  }
  return _(e, t, n, i)
}