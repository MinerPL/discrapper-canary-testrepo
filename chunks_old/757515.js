"use strict";
n.r(t), n.d(t, {
  ROLE_FIELD_NAME: function() {
    return s
  },
  describeUploadProgressError: function() {
    return u
  },
  describeProductChangeValidation: function() {
    return o
  },
  computeProductChanges: function() {
    return a
  },
  getGuildProductListingUrl: function() {
    return d
  }
});
var i = n("448993");
n("957255");
var r = n("49111"),
  l = n("782340");
let s = "_role";

function u(e) {
  if (!(e >= 0)) switch (-e) {
    case r.AbortCodes.ENTITY_TOO_LARGE:
      return l.default.Messages.UPLOAD_ERROR_TOO_LARGE;
    case r.AbortCodes.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
      return l.default.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
    case 1:
      return l.default.Messages.ERROR_GENERIC_TITLE;
    default:
      return l.default.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
        code: -e
      })
  }
}

function o(e) {
  let {
    newRoleParams: t
  } = e;
  if (null != t && "" === t.name.trim()) {
    var n, r;
    return n = s, r = l.default.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME, new i.APIError({
      status: 400,
      body: {
        message: "Invalid form body",
        errors: {
          [n]: {
            _errors: [{
              code: "",
              message: r
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
    name: i,
    priceTier: r,
    description: l,
    image: s,
    imageName: u,
    isImageChanged: o,
    newRoleParams: a,
    hasUnsavedAttachmentChanges: d
  } = e, c = {};
  (null == n ? void 0 : n.name) !== i && "" !== i.trim() && (c.name = i), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : "") !== l && (c.description = l), (null == n ? void 0 : n.price_tier) !== r && null != r && (c.priceTier = r), null != a && "" !== a.name.trim() ? c.createNewRole = !0 : null === a && (c.unlinkRole = !0), s.startsWith("data:") && (o || null == n && (Object.keys(c).length > 0 || d)) && (c.image = s, c.imageName = u);
  let f = Object.keys(c).length > 0 || d;
  return {
    changes: c,
    hasUnsavedChanges: f,
    canSaveForDraft: f,
    canSaveForPublished: f,
    canPublishOrUnpublish: !(null == n || f)
  }
}

function d(e, t) {
  return "".concat(location.protocol, "//").concat(location.host).concat(r.Routes.GUILD_PRODUCT(e, t))
}