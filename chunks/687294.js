n.d(t, {
  $: function() {
return f;
  },
  Z: function() {
return E;
  }
}), n(724458), n(47120), n(411104);
var r = n(259443),
  i = n(510990),
  a = n(141795),
  o = n(983544),
  s = n(596956),
  l = n(865275),
  u = n(981631),
  c = n(959517),
  d = n(689938);
let _ = new r.Y('CloudUploaderBase.tsx');
class E extends l.Z {
  _fileSize() {
return this.files.reduce((e, t) => {
  var n;
  return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0;
}, 0);
  }
  async compressAndCheckFileSize() {
var e, t;
let n = (0, o.F)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
return this.files.length > n.getMaxAttachmentsCount() ? (_.log('Too many attachments for '.concat(this.id)), this._handleError({
  code: u.evJ.TOO_MANY_ATTACHMENTS
}), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
  code: u.evJ.ENTITY_TOO_LARGE,
  reason: {
    type: c.xi.POSTCOMPRESSION_SUM_TOO_LARGE
  }
}), !1);
  }
  _filesTooLarge() {
return this.files.some(e => e.error === u.evJ.ENTITY_TOO_LARGE);
  }
  setUploadingTextForUI() {
let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : d.Z.Messages.UPLOADING_FILES.format({
    count: this.files.length
  }),
  t = this.files.some(e => e.isImage),
  n = this.files.some(e => e.isVideo),
  r = this._fileSize();
_.log('setUploadingTextForUI - total content: '.concat(r, ' bytes and ').concat(this.files.length, ' attachments for ').concat(this.id)), this._file = {
  ...this._file,
  totalPostCompressionSize: r,
  currentSize: r,
  name: e,
  hasVideo: n,
  hasImage: t,
  attachmentsCount: this.files.length,
  items: this.files
};
  }
  _recomputeProgress() {
let {
  loaded: e,
  total: t
} = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
this._handleProgress(e, t, n);
  }
  _recomputeProgressTotal() {
let e = this._fileSize();
return {
  loaded: this.files.reduce((e, t) => {
    var n;
    return e += null !== (n = t.loaded) && void 0 !== n ? n : 0;
  }, 0),
  total: e
};
  }
  _recomputeProgressByFile() {
let e = {};
return this.files.forEach(t => {
  e[t.id] = (0, s.S)(t.loaded, t.currentSize);
}), e;
  }
  cancel() {
if (_.log('Cancel called for '.concat(this.id)), !this._aborted)
  this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete();
  }
  async cancelItem(e) {
_.log('Cancel called for '.concat(this.id, ' for item ').concat(e));
let t = this.files.find(t => t.id === e);
if (null == t || t.status === a.m.CANCELED)
  return;
let n = this.files.indexOf(t);
this.files = [
  ...this.files.slice(0, n),
  ...this.files.slice(n + 1)
], this._file = {
  ...this._file,
  items: this.files
}, await (0, i.V)(t), t.cancel(), this.emit('cancel-upload-item', this._file), 0 === this.files.length && this.cancel();
  }
  failed() {
return this.files.some(e => e.status === a.m.ERROR);
  }
  _remainingUploadCount() {
let e = this.files;
return e.length - e.filter(e => e.status === a.m.COMPLETED).length;
  }
  clear() {
this.cancel(), this.files = [];
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, r = [], (n = 'files') in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
async function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = arguments.length > 2 ? arguments[2] : void 0,
r = e.map(e => new Promise((r, i) => {
  switch (e.status) {
    case a.m.NOT_STARTED:
      e.upload();
      break;
    case a.m.COMPLETED:
      r('complete');
      break;
    case a.m.ERROR:
      t && e.error !== u.evJ.ENTITY_TOO_LARGE ? e.upload() : i(Error('File failed to upload'));
      break;
    case a.m.CANCELED:
      i(Error('Upload is canceled'));
  }
  e.on('complete', () => {
    r('complete');
  }), e.on('error', () => {
    i(Error('File '.concat(e.id, ' failed to upload')));
  }), e.on('progress', (e, t) => {
    null == n || n(e, t);
  });
}));
  await Promise.all(r);
}