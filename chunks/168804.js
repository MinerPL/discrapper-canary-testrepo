"use strict";
A.r(t), A.d(t, {
  default: function() {
    return U
  }
}), A("70102"), A("222007");
var a = A("884691"),
  l = A("65597"),
  n = A("819855"),
  r = A("913144"),
  s = A("448993"),
  i = A("282928"),
  o = A("966724"),
  d = A("142852"),
  u = A("793825"),
  c = A("605250"),
  f = A("305961"),
  g = A("572679"),
  C = A("565559"),
  h = A("757515"),
  m = A("49111"),
  p = A("782340");
let T = new c.default("ProductAttachmentManager");
class v {
  addAttachment(e, t) {
    let A = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= A) throw n.AccessibilityAnnouncer.announce(p.default.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
      maxAttachmentsCount: A
    })), Error("Too many attachments");
    e.target = d.UploadTargets.GUILD_PRODUCT_ATTACHMENT;
    let a = new i.CloudUpload(e, this.guildId);
    a.upload(), a.on("error", A => {
      var l;
      A === m.AbortCodes.ENTITY_TOO_LARGE && this.onFileSizeError();
      let r = "number" == typeof A && A > 0 ? -A : -1,
        s = (0, h.describeUploadProgressError)(r),
        i = null === (l = e.file) || void 0 === l ? void 0 : l.name;
      null != i ? n.AccessibilityAnnouncer.announce(p.default.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
        filename: i,
        reason: s
      })) : n.AccessibilityAnnouncer.announce(p.default.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
        reason: s
      })), t(e => ({
        ...e,
        [a.id]: r
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
    if (-1 === t) return !1;
    this.uploads = [...this.uploads];
    let A = this.uploads.splice(t, 1);
    return A[0].cancel(), !0
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
        ...n
      } = e,
      s = this.uploads.some(e => e.status === i.CloudUploadStatus.ERROR);
    if (s) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in n && (t = n.unlinkRole);
    let o = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var t;
        return {
          filename: null === (t = e.item.file) || void 0 === t ? void 0 : t.name,
          id: e.id
        }
      }),
      u = await this.createCloudUploader().uploadFiles(o, {
        ...n,
        price_tier: A,
        create_new_role: a,
        image_name: l,
        unlink_role: t,
        attachments: d.length > 0 ? d : void 0
      }, {
        addFilesTo: "attachments"
      });
    return T.log("Created/updated product:", u), null != u && (this.isEdit ? await r.default.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: u
    }) : await r.default.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: u
    })), u
  }
  constructor({
    guildId: e,
    editSkuId: t,
    onFileSizeError: A
  }) {
    var a;
    this.target = new g.default, this.existingAttachmentIds = new Set, this.uploads = [], this.generateInitialProgresses = () => {
      let e = {};
      for (let t of this.uploads) e[t.id] = 1;
      return e
    }, this.isEdit = null != t;
    let l = null == t ? m.Endpoints.GUILD_PRODUCTS(e) : m.Endpoints.GUILD_PRODUCT_LISTINGS(e, t),
      n = null == t ? "POST" : "PATCH";
    this.createCloudUploader = () => (0, u.createCloudUploader)(l, n), this.guildId = e, this.onFileSizeError = A;
    let r = null === (a = C.default.getGuildProduct(null != t ? t : "")) || void 0 === a ? void 0 : a.attachments;
    null != r && (this.uploads = r.map(t => {
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

function U(e, t) {
  var A;
  let {
    editSkuId: n,
    onFileSizeError: r
  } = t, i = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(e)), [o, d] = a.useState({
    editSkuId: n,
    onFileSizeError: r
  }), u = a.useMemo(() => new v({
    guildId: e,
    ...o
  }), [e, o]), [c, g] = a.useState(u.generateInitialProgresses), [, C] = a.useState(null);
  a.useLayoutEffect(() => {
    g(u.generateInitialProgresses())
  }, [u]);
  let [h, p] = a.useState(), [T, U] = a.useState(), I = a.useCallback(e => {
    u.deleteAttachment(e) && C({})
  }, [u]), E = a.useCallback(e => {
    u.addAttachment(e, g), C({})
  }, [u]), x = a.useCallback(async e => {
    try {
      p(e), U(void 0);
      let t = await u.saveProductWithAttachments(e);
      return null != t && d({
        editSkuId: t.id,
        onFileSizeError: r
      }), C({}), t
    } catch (e) {
      U(e instanceof s.APIError ? e : new s.APIError({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      p(void 0)
    }
  }, [u, r]), N = a.useCallback(() => {
    u.cancelUnusedUploads(), C({})
  }, [u]);
  a.useEffect(() => () => {
    u.cancelUnusedUploads()
  }, [u]);
  let {
    uploads: D
  } = u, L = !D.every(e => u.existingAttachmentIds.has(e.id)) || D.length !== u.existingAttachmentIds.size;
  return {
    addAttachment: E,
    cancelUnusedUploads: N,
    deleteAttachment: I,
    fileUploadProgresses: c,
    uploads: D,
    saveProductWithAttachments: x,
    isSaving: null != h,
    changesSaving: h,
    saveError: T,
    hasUnsavedAttachmentChanges: L,
    canAttachFiles: D.length < u.target.getMaxAttachmentsCount(),
    canAttachArchives: null !== (A = null == i ? void 0 : i.hasFeature(m.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== A && A
  }
}