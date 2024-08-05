l.d(n, {
  Z: function() {
return u;
  }
}), l(47120);
var t = l(735250);
l(470079);
var r = l(442837),
  i = l(481060),
  a = l(699516),
  s = l(689938);

function u(e) {
  let {
user: n,
onAction: u
  } = e, d = n.id, [o, c] = (0, r.Wu)([a.Z], () => {
var e;
return [
  a.Z.isFriend(d),
  null !== (e = a.Z.getNickname(d)) && void 0 !== e ? e : null
];
  }, [d]);
  if (!o)
return null;
  let Z = null == c ? s.Z.Messages.ADD_FRIEND_NICKNAME : s.Z.Messages.CHANGE_FRIEND_NICKNAME;
  return (0, t.jsx)(i.MenuItem, {
id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
label: Z,
action: () => {
  null == u || u(), (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e('25070').then(l.bind(l, 670794));
    return l => (0, t.jsx)(e, {
      user: n,
      nickname: c,
      ...l
    });
  });
}
  });
}