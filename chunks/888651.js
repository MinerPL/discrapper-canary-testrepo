if (n.d(t, {
$: function() {
  return p;
},
Q: function() {
  return h;
}
  }), 12633 == n.j)
  var i = n(582966);
var a = n(895162),
  l = n(749210),
  s = n(430824),
  r = n(496675),
  o = n(979651),
  c = n(938475),
  d = n(981631);
let u = 'DRAGGABLE_USER';

function h(e) {
  return (0, i.G)(u, {
canDrop(e) {
  var t, n;
  let {
    channel: i
  } = e, a = i.getGuildId(), l = null !== (n = null === (t = s.Z.getGuild(a)) || void 0 === t ? void 0 : t.maxVideoChannelUsers) && void 0 !== n ? n : -1, u = c.ZP.countVoiceStatesForChannel(i.id), h = null != a && o.Z.hasVideo(i.id) && l > 0 && u >= l + 1;
  return r.Z.can(d.Plq.MOVE_MEMBERS, i) && r.Z.can(d.Plq.CONNECT, i) && !h;
},
drop(e, t) {
  let {
    channel: n
  } = e, i = o.Z.getVoiceStateForUser(t.getItem().user.id);
  (null == i ? void 0 : i.channelId) !== n.id && l.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id);
}
  }, (e, t) => ({
connectUserDropTarget: e.dropTarget(),
isUserOver: t.isOver() && t.canDrop()
  }))(e);
}

function p(e) {
  return (0, a.E)(u, {
canDrag(e) {
  let {
    user: t,
    canDrag: n
  } = e;
  return null != n && n;
},
beginDrag(e) {
  let {
    user: t
  } = e;
  return {
    user: t
  };
}
  }, e => ({
connectUserDragSource: e.dragSource()
  }))(e);
}