"use strict";
A.r(t), A.d(t, {
  default: function() {
    return I
  }
}), A("411104"), A("47120");
var a = A("470079"),
  l = A("399606"),
  s = A("780384"),
  n = A("570140"),
  r = A("881052"),
  i = A("141795"),
  o = A("476326"),
  d = A("983544"),
  u = A("9874"),
  c = A("710845"),
  f = A("430824"),
  g = A("277985"),
  C = A("240864"),
  h = A("863663"),
  m = A("981631"),
  T = A("689938");

function p(e, t, A) {
  return t in e ? Object.defineProperty(e, t, {
    value: A,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = A, e
}
let U = new c.default("ProductAttachmentManager");
class v {
  addAttachment(e, t) {
    let A = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= A) throw s.AccessibilityAnnouncer.announce(T.default.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
      maxAttachmentsCount: A
    })), Error("Too many attachments");
    e.target = d.UploadTargets.GUILD_PRODUCT_ATTACHMENT;
    let a = new i.CloudUpload(e, this.guildId);
    a.upload(), a.on("error", A => {
      var l;
      A === m.AbortCodes.ENTITY_TOO_LARGE && this.onFileSizeError();
      let n = "number" == typeof A && A > 0 ? -A : -1,
        r = (0, h.describeUploadProgressError)(n),
        i = null === (l = e.file) || void 0 === l ? void 0 : l.name;
      null != i ? s.AccessibilityAnnouncer.announce(T.default.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
        filename: i,
        reason: r
      })) : s.AccessibilityAnnouncer.announce(T.default.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
        reason: r
      })), t(e => ({
        ...e,
        [a.id]: n
      }))
    }), a.on("progress", (e, A) => {
      t(t => ({
        ...t,
        [a.id]: e / A
      }))
    }), this.uploads = [...this.uploads, a]
  }
  deleteAttachment(e) {
    let t = this.uploads.findIndex(t => t.id === e);
    return -1 !== t && (this.uploads = [...this.uploads], this.uploads.splice(t, 1)[0].cancel(), !0)
  }
  cancelUnusedUploads() {
    for (let e of this.uploads) e.cancel();
    this.uploads = []
  }
  async saveProductWithAttachments(e) {
    let t, {
      priceTier: A,
      createNewRole: a,
      imageName: l,
      ...s
    } = e;
    if (this.uploads.some(e => e.status === i.CloudUploadStatus.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in s && (t = s.unlinkRole);
    let r = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      o = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var t;
        return {
          filename: null === (t = e.item.file) || void 0 === t ? void 0 : t.name,
          id: e.id
        }
      }),
      d = await this.createCloudUploader().uploadFiles(r, {
        ...s,
        price_tier: A,
        create_new_role: a,
        image_name: l,
        unlink_role: t,
        attachments: o.length > 0 ? o : void 0
      }, {
        addFilesTo: "attachments"
      });
    return U.log("Created/updated product:", d), null != d && (this.isEdit ? await n.default.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: d
    }) : await n.default.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: d
    })), d
  }
  constructor({
    guildId: e,
    editSkuId: t,
    onFileSizeError: A
  }) {
    var a;
    p(this, "guildId", void 0), p(this, "isEdit", void 0), p(this, "target", new g.default), p(this, "createCloudUploader", void 0), p(this, "onFileSizeError", void 0), p(this, "existingAttachmentIds", new Set), p(this, "uploads", []), p(this, "generateInitialProgresses", () => {
      let e = {};
      for (let t of this.uploads) e[t.id] = 1;
      return e
    }), this.isEdit = null != t;
    let l = null == t ? m.Endpoints.GUILD_PRODUCTS(e) : m.Endpoints.GUILD_PRODUCT_LISTINGS(e, t),
      s = null == t ? "POST" : "PATCH";
    this.createCloudUploader = () => (0, u.createCloudUploader)(l, s), this.guildId = e, this.onFileSizeError = A;
    let n = null === (a = C.default.getGuildProduct(null != t ? t : "")) || void 0 === a ? void 0 : a.attachments;
    null != n && (this.uploads = n.map(t => {
      var A;
      this.existingAttachmentIds.add(t.id);
      let a = new i.CloudUpload({
        id: t.id,
        platform: o.UploadPlatform.WEB,
        file: {
          name: t.filename,
          lastModified: 0,
          size: null !== (A = t.size) && void 0 !== A ? A : 0
        }
      }, e);
      return a.status = i.CloudUploadStatus.COMPLETED, a
    }))
  }
}

function I(e, t) {
  var A;
  let {
    editSkuId: s,
    onFileSizeError: n
  } = t, i = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(e)), [o, d] = a.useState({
    editSkuId: s,
    onFileSizeError: n
  }), u = a.useMemo(() => new v({
    guildId: e,
    ...o
  }), [e, o]), [c, g] = a.useState(u.generateInitialProgresses), [, C] = a.useState(null);
  a.useLayoutEffect(() => {
    g(u.generateInitialProgresses())
  }, [u]);
  let [h, T] = a.useState(), [p, U] = a.useState(), I = a.useCallback(e => {
    u.deleteAttachment(e) && C({})
  }, [u]), E = a.useCallback(e => {
    u.addAttachment(e, g), C({})
  }, [u]), x = a.useCallback(async e => {
    try {
      T(e), U(void 0);
      let t = await u.saveProductWithAttachments(e);
      return null != t && d({
        editSkuId: t.id,
        onFileSizeError: n
      }), C({}), t
    } catch (e) {
      U(e instanceof r.APIError ? e : new r.APIError({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      T(void 0)
    }
  }, [u, n]), N = a.useCallback(() => {
    u.cancelUnusedUploads(), C({})
  }, [u]);
  a.useEffect(() => () => {
    u.cancelUnusedUploads()
  }, [u]);
  let {
    uploads: D
  } = u, q = !D.every(e => u.existingAttachmentIds.has(e.id)) || D.length !== u.existingAttachmentIds.size;
  return {
    addAttachment: E,
    cancelUnusedUploads: N,
    deleteAttachment: I,
    fileUploadProgresses: c,
    uploads: D,
    saveProductWithAttachments: x,
    isSaving: null != h,
    changesSaving: h,
    saveError: p,
    hasUnsavedAttachmentChanges: q,
    canAttachFiles: D.length < u.target.getMaxAttachmentsCount(),
    canAttachArchives: null !== (A = null == i ? void 0 : i.hasFeature(m.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== A && A
  }
}