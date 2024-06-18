"use strict";
n.d(t, {
  Z: function() {
    return u
  }
}), n(653041);
var i = n(544891),
  r = n(881052),
  s = n(687294),
  o = n(476326),
  a = n(861990),
  l = n(689938);
class u extends s.Z {
  async uploadFiles(e, t) {
    let {
      addFilesTo: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    super.upload({
      name: l.Z.Messages.ATTACHMENT_PROCESSING
    }, t, e);
    let i = new AbortController;
    try {
      if (this.files = e, this._aborted) return;
      if (this._handleStart(() => i.abort()), !await this.compressAndCheckFileSize()) return;
      this.setUploadingTextForUI(), await (0, s.$)(this.files, !0, this._recomputeProgress.bind(this))
    } catch (e) {
      this._handleException(e)
    }
    try {
      return await this._createMessage(i.signal, t, n)
    } catch (e) {
      if (this._raiseEndpointErrors) throw e;
      this._handleException(e)
    }
  }
  async _createMessage(e, t, n) {
    let s;
    let l = [];
    this.files.forEach((e, t) => {
      let n = (0, a.B)(e, t);
      e.item.platform === o.ow.WEB && l.push({
        ...n
      })
    }), s = null != n && null != t ? this._addAttachmentsToPayload(t, n, l) : {
      ...t,
      attachments: l
    };
    let u = {
        url: this._url,
        body: s,
        signal: e
      },
      _ = "POST" === this._method ? i.tn.post : i.tn.patch;
    try {
      let e = await _(u);
      return this._handleComplete(e.body), e.body
    } catch (e) {
      var d;
      if (this._raiseEndpointErrors) throw new r.Hx(e);
      this._handleError({
        code: null == e ? void 0 : null === (d = e.body) || void 0 === d ? void 0 : d.code,
        body: null == e ? void 0 : e.body
      })
    }
  }
  constructor(e, t = "POST", n) {
    super(e, t, n)
  }
}