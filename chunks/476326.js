n.d(t, {
    ZP: function () {
        return h;
    },
    ow: function () {
        return a;
    },
    rG: function () {
        return f;
    }
});
var r,
    i,
    a,
    s,
    o = n(836560),
    l = n(392711),
    u = n.n(l),
    c = n(772848),
    d = n(403182),
    _ = n(861990);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
((r = a || (a = {}))[(r.REACT_NATIVE = 0)] = 'REACT_NATIVE'), (r[(r.WEB = 1)] = 'WEB'), ((i = s || (s = {}))[(i.FILE_ATTACHMENT = 0)] = 'FILE_ATTACHMENT'), (i[(i.IMAGE_PICKER = 1)] = 'IMAGE_PICKER');
class h extends o.EventEmitter {
    cancel() {}
    resetState() {
        return this;
    }
    constructor(e, t) {
        var n, r;
        if ((super(), E(this, 'id', void 0), E(this, 'uniqueId', void 0), E(this, 'filename', void 0), E(this, 'item', void 0), E(this, 'spoiler', void 0), E(this, 'description', void 0), E(this, 'classification', void 0), E(this, 'isImage', void 0), E(this, 'isVideo', void 0), E(this, 'uploadedFilename', void 0), E(this, 'showLargeMessageDialog', void 0), E(this, 'mimeType', void 0), E(this, 'origin', void 0), E(this, 'durationSecs', void 0), E(this, 'waveform', void 0), E(this, 'isThumbnail', void 0), E(this, 'isRemix', void 0), E(this, 'clip', void 0), (this.item = e), 0 === e.platform)) {
            this.id = null !== (n = e.id) && void 0 !== n ? n : e.uri;
            let t = (0, _.hn)({
                uri: e.uri,
                overrideFilename: e.filename,
                overrideType: e.mimeType
            });
            (this.filename = t.filename), (this.isImage = t.isImage), (this.isVideo = t.isVideo), (this.mimeType = t.type), (this.origin = e.origin), (this.durationSecs = e.durationSecs), (this.waveform = e.waveform), (this.isRemix = e.isRemix);
        } else (this.id = null !== (r = e.id) && void 0 !== r ? r : u().uniqueId('upload')), (this.classification = d.f3(e.file)), (this.isImage = 'image' === this.classification), (this.isVideo = 'video' === this.classification), (this.filename = e.file.name), (this.mimeType = e.file.type);
        (this.isThumbnail = e.isThumbnail), (this.clip = e.clip), (this.uniqueId = (0, c.Z)()), (this.showLargeMessageDialog = t), (this.spoiler = !1), (this.description = null);
    }
}
