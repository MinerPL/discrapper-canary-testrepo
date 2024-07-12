n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(833858),
  i = n(657305),
  a = n(841784),
  o = n(420660),
  s = n(981631),
  l = n(689938);

function u(e) {
  return {
[s.IIU.STREAMING]: e ? l.Z.Messages.UNFORMATTED_STREAMING : l.Z.Messages.STREAMING,
[s.IIU.LISTENING]: e ? l.Z.Messages.UNFORMATTED_LISTENING_TO : l.Z.Messages.LISTENING_TO,
[s.IIU.WATCHING]: e ? l.Z.Messages.UNFORMATTED_WATCHING : l.Z.Messages.WATCHING,
[s.IIU.COMPETING]: e ? l.Z.Messages.UNFORMATTED_COMPETING : l.Z.Messages.COMPETING
  };
}

function c(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
c = arguments.length > 3 ? arguments[3] : void 0;
  if (null != e && e.type === s.IIU.CUSTOM_STATUS)
return null != e.state ? e.state.trim() : null;
  if (null != t)
return null == e || e.type !== s.IIU.PLAYING ? l.Z.Messages.SHARING_SCREEN : u(n)[s.IIU.STREAMING].format({
  name: e.name
});
  if (c && null != e && e.type === s.IIU.HANG_STATUS)
return (0, r.O8)(e);
  if (null == e || null == e.name)
return null;
  if ((0, o.Z)(e)) {
let t = null != e.details && '' !== e.details ? e.details : e.name;
return u(n)[s.IIU.STREAMING].format({
  name: t
});
  }
  return (0, a.Z)(e) ? (0, i.Z)(e.name) : function(e, t, n) {
let r = u(n);
switch (e) {
  case s.IIU.LISTENING:
  case s.IIU.WATCHING:
  case s.IIU.COMPETING:
    return r[e].format({
      name: t
    });
  case s.IIU.CUSTOM_STATUS:
  case s.IIU.HANG_STATUS:
    return null;
  case s.IIU.PLAYING:
  default:
    return n ? l.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t
    }) : l.Z.Messages.PLAYING_GAME.format({
      game: t
    });
}
  }(e.type, e.name, n);
}

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
r = arguments.length > 3 ? arguments[3] : void 0;
  if (Array.isArray(e)) {
let i = e;
null != t && (i = [
  ...i,
  null
]);
let a = null;
for (let e of i) {
  let i = c(e, t, n, r);
  if (null != i)
    return {
      activity: e,
      activityText: i
    };
  (null == e ? void 0 : e.type) === s.IIU.CUSTOM_STATUS && null != e.emoji && (a = e);
}
return (null == a ? void 0 : a.emoji) != null ? {
  activity: a,
  activityText: null
} : null;
  }
  return c(e, t, n, r);
}