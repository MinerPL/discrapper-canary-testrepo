n.d(a, {
  Z: function() {
return i;
  }
}), n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var t = n(470079),
  r = n(442837),
  l = n(703558),
  s = n(117530),
  o = n(524100);

function i(e) {
  var a, n;
  let {
channelId: i,
localCreationAnswerId: c,
image: u
  } = e, d = null == u ? void 0 : u.emoji, _ = (null == u ? void 0 : null === (a = u.mediaAttachmentState) || void 0 === a ? void 0 : a.status) === o._.PREPARING, m = (0, r.e7)([s.Z], () => s.Z.getUpload(i, c, l.d.Poll)), [E, A] = t.useState(), [f, C] = t.useState('');
  return t.useEffect(() => {
var e;
if ((null == m ? void 0 : null === (e = m.item) || void 0 === e ? void 0 : e.file) == null)
  return;
let a = URL.createObjectURL(m.item.file);
return A(a), C(m.item.file.name), () => {
  URL.revokeObjectURL(a);
};
  }, [null == m ? void 0 : null === (n = m.item) || void 0 === n ? void 0 : n.file]), {
emoji: d,
isLoadingMedia: _,
hasUpload: null != m,
upload: m,
mediaUrl: E,
mediaFilename: f
  };
}