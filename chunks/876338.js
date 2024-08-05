n.d(t, {
  j: function() {
return a;
  }
});
var i = n(406432),
  s = n(981631);

function a(e, t) {
  let {
targetKind: n,
embedIndex: a
  } = t;
  if ('media' === n) {
var r, l;
let t = e;
return (null === (r = e.messageReference) || void 0 === r ? void 0 : r.type) === s.Uvt.FORWARD && (t = null === (l = e.messageSnapshots[0]) || void 0 === l ? void 0 : l.message), {
  onlyAttachmentIds: null == t ? void 0 : t.attachments.filter(e => {
    let {
      filename: t
    } = e;
    return (0, i.CO)(t) || (0, i.NU)(t);
  }).map(e => e.id)
};
  }
  if ('embed' === n && null != a)
return {
  onlyEmbedIndices: [a]
};
}