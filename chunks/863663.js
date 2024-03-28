"use strict";
n.r(t), n.d(t, {
  ROLE_FIELD_NAME: function() {
    return s
  },
  computeProductChanges: function() {
    return a
  },
  describeProductChangeValidation: function() {
    return u
  },
  describeUploadProgressError: function() {
    return o
  },
  getGuildProductListingUrl: function() {
    return c
  }
});
var r = n("881052");
n("496675");
var i = n("981631"),
  l = n("689938");
let s = "_role";

function o(e) {
  if (!(e >= 0)) switch (-e) {
    case i.AbortCodes.ENTITY_TOO_LARGE:
      return l.default.Messages.UPLOAD_ERROR_TOO_LARGE;
    case i.AbortCodes.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
      return l.default.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
    case 1:
      return l.default.Messages.ERROR_GENERIC_TITLE;
    default:
      return l.default.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
        code: -e
      })
  }
}

function u(e) {
  let {
    newRoleParams: t
  } = e;
  if (null != t && "" === t.name.trim()) {
    var n, i;
    return n = s, i = l.default.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME, new r.APIError({
      status: 400,
      body: {
        message: "Invalid form body",
        errors: {
          [n]: {
            _errors: [{
              code: "",
              message: i
            }]
          }
        }
      }
    })
  }
}

function a(e) {
  var t;
  let {
    guildProductListing: n,
    name: r,
    priceTier: i,
    description: l,
    image: s,
    imageName: o,
    isImageChanged: u,
    newRoleParams: a,
    hasUnsavedAttachmentChanges: c
  } = e, d = {};
  (null == n ? void 0 : n.name) !== r && "" !== r.trim() && (d.name = r), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : "") !== l && (d.description = l), (null == n ? void 0 : n.price_tier) !== i && null != i && (d.priceTier = i), null != a && "" !== a.name.trim() ? d.createNewRole = !0 : null === a && (d.unlinkRole = !0), s.startsWith("data:") && (u || null == n && (Object.keys(d).length > 0 || c)) && (d.image = s, d.imageName = o);
  let f = Object.keys(d).length > 0 || c;
  return {
    changes: d,
    hasUnsavedChanges: f,
    canSaveForDraft: f,
    canSaveForPublished: f,
    canPublishOrUnpublish: !(null == n || f)
  }
}

function c(e, t) {
  return "".concat(location.protocol, "//").concat(location.host).concat(i.Routes.GUILD_PRODUCT(e, t))
}