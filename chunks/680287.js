n.d(t, {
    Z: function () {
        return u;
    }
}), n(653041);
var r = n(544891), i = n(881052), a = n(687294), o = n(476326), s = n(861990), l = n(689938);
class u extends a.Z {
    async uploadFiles(e, t) {
        let {addFilesTo: n} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: l.Z.Messages.ATTACHMENT_PROCESSING }, t, e);
        let r = new AbortController();
        try {
            if (this.files = e, this._aborted)
                return;
            if (this._handleStart(() => r.abort()), !await this.compressAndCheckFileSize())
                return;
            this.setUploadingTextForUI(), await (0, a.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(r.signal, t, n);
        } catch (e) {
            if (this._raiseEndpointErrors)
                throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, t, n) {
        let a;
        let l = [];
        this.files.forEach((e, t) => {
            let n = (0, s.B)(e, t);
            e.item.platform === o.ow.WEB && l.push({ ...n });
        }), a = null != n && null != t ? this._addAttachmentsToPayload(t, n, l) : {
            ...t,
            attachments: l
        };
        let u = {
                url: this._url,
                body: a,
                signal: e
            }, c = 'POST' === this._method ? r.tn.post : r.tn.patch;
        try {
            let e = await c(u);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            var d;
            if (this._raiseEndpointErrors)
                throw new i.Hx(e);
            this._handleError({
                code: null == e ? void 0 : null === (d = e.body) || void 0 === d ? void 0 : d.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', n) {
        super(e, t, n);
    }
}
