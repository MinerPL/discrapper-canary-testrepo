"use strict";
n.d(t, {
  m: function() {
    return i
  },
  n: function() {
    return g
  }
}), n(47120), n(411104);
var i, r, s = n(392711),
  o = n.n(s),
  a = n(261470),
  l = n(544891),
  u = n(710845),
  _ = n(432877),
  d = n(549464),
  c = n(740492),
  E = n(866960),
  I = n(626135),
  T = n(510990),
  h = n(70956),
  S = n(960048),
  f = n(861990),
  N = n(476326),
  A = n(983544),
  m = n(981631);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = new u.Z("CloudUpload.tsx"),
  C = n(224497).Z;
(r = i || (i = {})).NOT_STARTED = "NOT_STARTED", r.STARTED = "STARTED", r.UPLOADING = "UPLOADING", r.ERROR = "ERROR", r.COMPLETED = "COMPLETED", r.CANCELED = "CANCELED";
class p {
  constructor() {
    O(this, "numChunks", void 0), O(this, "totalRequestCount", void 0), O(this, "timing", {}), O(this, "compressAndExtractDisabled", void 0), O(this, "fileAlreadyPrepped", void 0), O(this, "imageCompressionQuality", void 0), O(this, "videoCompressionQuality", void 0), O(this, "convertedMimeType", void 0), O(this, "sourceMediaWidth", void 0), O(this, "sourceMediaHeight", void 0), O(this, "sourceMediaFormat", void 0), O(this, "sourceVideoBitrate", void 0)
  }
}
class g extends N.ZP {
  static fromJson(e) {
    let {
      item: t,
      channelId: n,
      showLargeMessageDialog: i,
      reactNativeFileIndex: r
    } = e, s = new g(t, n, i, r);
    return "COMPLETED" !== s.status && (s.status = "NOT_STARTED"), Object.entries(e).forEach(e => {
      let [t, n] = e;
      if (!t.startsWith("_")) s[t] = n
    }), s
  }
  retryOpts() {
    return this.item.platform === N.ow.REACT_NATIVE ? {
      timeout: 1 * h.Z.Millis.HOUR,
      backoff: new a.Z(.5 * h.Z.Millis.SECOND, 30 * h.Z.Millis.MINUTE),
      retries: 12
    } : {
      timeout: 1 * h.Z.Millis.HOUR,
      retries: 12,
      backoff: new a.Z
    }
  }
  async uploadFileToCloudAsChunks(e) {
    if (null == this.responseUrl || "" === this.responseUrl) throw Error("_uploadFileToCloudAsChunks - responseUrl is not set");
    let {
      contentType: t,
      fileSize: n,
      bufferedFileData: i
    } = await this.prepareChunkUploadItem(), r = Math.ceil(n / e);
    this.uploadAnalytics.numChunks = r, this.uploadAnalytics.totalRequestCount = 0;
    for (let s = 0; s < r; s++) {
      R.info("Uploading chunk ".concat(s + 1, " of ").concat(r, " for file id ").concat(this.id));
      let o = s * e,
        a = Math.min(o + e, n),
        l = await this.getChunk(o, a, i);
      try {
        await this.uploadChunk({
          chunk: l,
          start: o,
          end: a,
          totalSize: n,
          sessionUrl: this.responseUrl,
          contentType: t
        })
      } catch (e) {
        throw R.error("Error uploading chunk ".concat(s + 1, " for file id ").concat(this.id, ": ").concat(e)), e
      }
    }
    R.log("Upload complete for file id ".concat(this.id))
  }
  async prepareChunkUploadItem() {
    let e, t, n;
    if (this.item.platform === N.ow.REACT_NATIVE) {
      let i = this.item;
      if (e = null != i.mimeType && "" !== i.mimeType ? i.mimeType : "application/octet-stream", null == i.size || 0 === i.size || isNaN(i.size)) try {
        t = await (0, f.Fm)(i.uri)
      } catch (e) {
        R.warn("Failed to peek content length for file id ".concat(this.id, ", reading whole file instead: ").concat(e)), t = (n = await (0, f.Lc)(i.uri)).size
      } else t = i.size
    } else e = "application/octet-stream", t = this.item.file.size;
    return {
      contentType: e,
      fileSize: t,
      bufferedFileData: n
    }
  }
  async getChunk(e, t, n) {
    return this.item.platform !== N.ow.REACT_NATIVE ? this.item.file.slice(e, t) : null != n ? n.slice(e, t) : await (0, f.U4)(this.item.uri, e, t)
  }
  async uploadChunk(e) {
    let t = {
      "Content-Type": e.contentType,
      "Content-Range": "bytes ".concat(e.start, "-").concat(e.end - 1, "/").concat(e.totalSize)
    };
    for (let i = 1; i <= 3; i++) {
      var n;
      this.uploadAnalytics.totalRequestCount = (null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 0) + 1, R.log("Attempt ".concat(i, " for file id ").concat(this.id, " : Uploading chunk ").concat(e.start, "-").concat(e.end - 1, " of ").concat(e.totalSize, " bytes"));
      let r = o().throttle(t => {
        let n = e.start + t.loaded;
        this.emit("progress", n, e.totalSize, n - this.loaded), this.loaded = n
      }, 50);
      try {
        if ((await l.tn.put({
            url: e.sessionUrl,
            body: e.chunk,
            headers: t,
            signal: this._abortController.signal,
            onRequestProgress: r,
            ...this.retryOpts()
          })).ok) return
      } catch (t) {
        if (!this.RESUME_INCOMPLETE_CODES.includes(t.status)) throw t;
        if (this.isUnsuccessfulChunkUpload(t, e.end - 1)) {
          R.error("Incomplete chunk upload for file id ".concat(this.id, ": ").concat(t.status));
          continue
        }
        return
      }
    }
    throw Error("Failed to upload chunk")
  }
  isUnsuccessfulChunkUpload(e, t) {
    if (null == e.headers.range || "" === e.headers.range) return !0;
    let n = e.headers.range.match(/bytes=(\d+)-(\d+)/);
    return null !== n && parseInt(n[2], 10) !== t
  }
  uploadFileToCloud() {
    let e, t;
    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
    R.log("Uploading ".concat(this.id)), this.item.platform === N.ow.REACT_NATIVE ? t = null != (e = {
      type: this.item.mimeType,
      uri: this.item.uri,
      name: this.item.filename
    }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
    let n = o().throttle(e => {
        this.emit("progress", e.loaded, e.total, e.loaded - this.loaded), this.loaded = e.loaded
      }, 50),
      i = {
        "Content-Type": t
      };
    return l.tn.put({
      url: this.responseUrl,
      body: e,
      headers: i,
      signal: this._abortController.signal,
      onRequestProgress: n,
      ...this.retryOpts()
    })
  }
  async getSize() {
    var e;
    return null !== (e = this.currentSize) && void 0 !== e ? e : 0
  }
  async trackTime(e, t) {
    let n = performance.now();
    try {
      return await t()
    } finally {
      this.uploadAnalytics.timing[e] = performance.now() - n
    }
  }
  async upload() {
    var e, t, n;
    if ("COMPLETED" === this.status) return;
    this.setStatus("STARTED"), this.startTime = performance.now(), this.trackUploadStart();
    if ("CANCELED" === this.status) {
      this.handleComplete(this.id);
      return
    }
    let i = await C.getUploadPayload(this),
      r = (0, A.F)(this.item.target);
    if (null == i.filename || "" === i.filename || 0 === this.currentSize) {
      R.error("File does not have a filename or size is 0.", JSON.stringify(i)), this.handleError(m.evJ.INVALID_FILE_ASSET);
      return
    }
    if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > r.getMaxFileSize(this.channelId)) {
      this.handleError(m.evJ.ENTITY_TOO_LARGE);
      return
    }
    if (_.ZP.get("upload_fail_50") && .5 > Math.random()) {
      setTimeout(() => {
        this.handleError(500)
      }, 1e3);
      return
    }
    try {
      R.log("Requesting upload url for ".concat(this.id));
      let e = await this.trackTime("getUploadUrlTimeMs", async () => await l.tn.post({
        url: r.getCreateAttachmentURL(this.channelId),
        body: {
          files: [i]
        },
        ...this.retryOpts()
      }));
      this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename)
    } catch (i) {
      let e = null !== (n = null == i ? void 0 : null === (t = i.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : i.status;
      e !== m.evJ.ENTITY_TOO_LARGE && (R.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(i.body), " for ").concat(this.id)), S.Z.captureException(i)), this.handleError(e);
      return
    }
    try {
      let e;
      let t = d.Z.getCurrentConfig({
        location: "CloudUpload"
      }, {
        autoTrackExposure: !0
      });
      e = t.enabled && t.chunkSize > 0 ? await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloudAsChunks(t.chunkSize)) : await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud()), this.trackUploadFinished("COMPLETED"), this.handleComplete(e)
    } catch (e) {
      "CANCELED" === this.status ? this.handleComplete(e) : (R.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
    }
  }
  async reactNativeCompressAndExtractData() {
    var e;
    if (!(0, A.F)(this.item.target).shouldReactNativeCompressUploads) return this.uploadAnalytics.compressAndExtractDisabled = !0, R.log("reactNativeCompressAndExtractData() disabled by upload target"), this;
    if (!0 === this.reactNativeFilePrepped) return this.uploadAnalytics.fileAlreadyPrepped = !0, R.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)), this;
    R.log("Starting compression/conversion for ".concat(this.id));
    let t = await this.trackTime("compressTimeMs", async () => {
      var e;
      return await (0, T.J)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0)
    });
    if (null == t || null == t.file) return this;
    let n = t.uri,
      i = t.file.name,
      r = t.file.type;
    if ((0, N.rG)(t.file) && (this.uploadAnalytics.imageCompressionQuality = t.file.imageCompressionQuality, this.uploadAnalytics.videoCompressionQuality = t.file.videoCompressionQuality, this.uploadAnalytics.convertedMimeType = t.file.type, void 0 !== t.file.videoMetadata && (this.uploadAnalytics.sourceMediaWidth = t.file.videoMetadata.width, this.uploadAnalytics.sourceMediaHeight = t.file.videoMetadata.height, this.uploadAnalytics.sourceMediaFormat = t.file.videoMetadata.format, this.uploadAnalytics.sourceVideoBitrate = t.file.videoMetadata.bitrate)), this.filename = i, null == i || null == n || null == r) throw R.error("Insufficient file data: ".concat({
      filename: i,
      uri: n,
      mimeType: r
    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
      filename: i,
      uri: n,
      mimeType: r
    }));
    let s = null !== (e = t.fileSize) && void 0 !== e ? e : (await (0, f.Lc)(n)).size;
    if (this.postCompressionSize = s, this.currentSize = s, null == s) throw R.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    return R.log("Completed compression and conversion. Output size=".concat(s, " bytes; filename=").concat(i, " for ").concat(this.id)), this.item = {
      ...this.item,
      uri: n,
      filename: i,
      mimeType: r
    }, this.reactNativeFilePrepped = !0, this
  }
  handleError(e) {
    this.setStatus("ERROR"), this.error = e, this.trackUploadFinished("ERROR");
    try {
      this.emit("error", e)
    } catch {}
    this.removeAllListeners()
  }
  handleComplete(e) {
    this.setStatus("COMPLETED"), R.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
  }
  cancel() {
    R.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), this.trackUploadFinished("CANCELED"), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
  }
  resetState() {
    return this.status = "NOT_STARTED", this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this.startTime = void 0, this.uploadAnalytics = new p, this._abortController = new AbortController, super.resetState()
  }
  async delete() {
    if (null == this.uploadedFilename) return;
    let e = (0, A.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
    try {
      await l.tn.del(e)
    } catch {}
  }
  setResponseUrl(e) {
    this.responseUrl = e
  }
  setStatus(e) {
    this.status = e
  }
  setFilename(e) {
    this.filename = e
  }
  setUploadedFilename(e) {
    this.uploadedFilename = e
  }
  trackUploadStart() {
    var e;
    I.default.track(m.rMx.ATTACHMENT_UPLOAD_STARTED, {
      file_size: this.currentSize,
      mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : "unknown",
      video_upload_quality: c.ZP.videoUploadQuality,
      data_saving_mode: c.ZP.dataSavingMode,
      low_quality_image_mode: c.ZP.dataSavingMode,
      channel_id: this.channelId,
      connection_type: E.Z.getType(),
      effective_connection_speed: E.Z.getEffectiveConnectionSpeed(),
      service_provider: E.Z.getServiceProvider()
    })
  }
  trackUploadFinished(e) {
    var t, n, i, r, s;
    let o = null != this.startTime ? performance.now() - this.startTime : -1;
    I.default.track(m.rMx.ATTACHMENT_UPLOAD_FINISHED, {
      duration_ms: o,
      file_size: this.currentSize,
      pre_compression_file_size: this.preCompressionSize,
      final_state: e,
      mime_type: null !== (t = this.mimeType) && void 0 !== t ? t : "unknown",
      num_chunks: this.uploadAnalytics.numChunks,
      num_upload_attempts: null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 1,
      error_code: this.error,
      video_upload_quality: c.ZP.videoUploadQuality,
      data_saving_mode: c.ZP.dataSavingMode,
      low_quality_image_mode: c.ZP.dataSavingMode,
      compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
      get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
      upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
      converted_mime_type: null !== (i = this.uploadAnalytics.convertedMimeType) && void 0 !== i ? i : "unknown",
      image_compression_quality: null !== (r = this.uploadAnalytics.imageCompressionQuality) && void 0 !== r ? r : 0,
      video_compression_quality: null !== (s = this.uploadAnalytics.videoCompressionQuality) && void 0 !== s ? s : "unknown",
      was_converted: this.mimeType !== this.uploadAnalytics.convertedMimeType,
      was_compressed: this.currentSize < this.preCompressionSize,
      source_media_width: this.uploadAnalytics.sourceMediaWidth,
      source_media_height: this.uploadAnalytics.sourceMediaHeight,
      source_media_format: this.uploadAnalytics.sourceMediaFormat,
      source_video_bitrate: this.uploadAnalytics.sourceVideoBitrate,
      channel_id: this.channelId,
      connection_type: E.Z.getType(),
      effective_connection_speed: E.Z.getEffectiveConnectionSpeed(),
      service_provider: E.Z.getServiceProvider()
    })
  }
  constructor(e, t, n, i) {
    var r, s, o, a;
    super(e, n), O(this, "RESUME_INCOMPLETE_CODES", [308]), O(this, "status", "NOT_STARTED"), O(this, "channelId", void 0), O(this, "responseUrl", void 0), O(this, "currentSize", void 0), O(this, "preCompressionSize", void 0), O(this, "postCompressionSize", void 0), O(this, "loaded", 0), O(this, "reactNativeFileIndex", void 0), O(this, "error", void 0), O(this, "reactNativeFilePrepped", !1), O(this, "startTime", void 0), O(this, "uploadAnalytics", new p), O(this, "_abortController", void 0), O(this, "_xhr", void 0), O(this, "_aborted", !1), this.channelId = t, this.preCompressionSize = null !== (o = null === (r = e.file) || void 0 === r ? void 0 : r.size) && void 0 !== o ? o : 0, this.currentSize = null !== (a = null === (s = e.file) || void 0 === s ? void 0 : s.size) && void 0 !== a ? a : 0, this.reactNativeFileIndex = i, this._abortController = new AbortController
  }
}