"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(424218),
  r = n(186901),
  s = n(689938);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class a {
  get displayMessage() {
    if (null == this.code) return s.Z.Messages.NOTICE_DISPATCH_ERROR;
    let {
      path: e
    } = this.context;
    switch (this.code) {
      case r.ff.DISK_LOW:
        let {
          available: t, required: n
        } = this.context, o = (0, i.BU)(t, {
          useKibibytes: !0
        }), a = (0, i.BU)(n, {
          useKibibytes: !0
        });
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_DISK_LOW.format({
          required: a,
          available: o
        });
      case r.ff.POST_INSTALL_FAILED:
        let {
          name: l
        } = this.context;
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_FAILED.format({
          name: l
        });
      case r.ff.FILE_NAME_TOO_LONG:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_FILE_NAME_TOO_LONG;
      case r.ff.POST_INSTALL_CANCELLED:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_CANCELLED;
      case r.ff.IO_PERMISSION_DENIED:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_IO_PERMISSION_DENIED;
      case r.ff.NO_MANIFESTS:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_NO_MANIFESTS;
      case r.ff.NOT_ENTITLED:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_NOT_ENTITLED;
      case r.ff.NOT_DIRECTORY:
      case r.ff.DISK_PERMISSION_DENIED:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_UNWRITABLE.format({
          path: e
        });
      case r.ff.INVALID_DRIVE:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_INVALID_DRIVE.format({
          path: e
        });
      case r.ff.APPLICATION_LOCK_FAILED:
        return s.Z.Messages.NOTICE_DISPATCH_APPLICATION_LOCK_FAILED;
      case r.ff.DISK_FULL:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_DISK_FULL;
      case r.ff.API_ERROR:
      case r.ff.MAX_REQUEST_RETRIES_EXCEEDED:
        return s.Z.Messages.NOTICE_DISPATCH_API_ERROR;
      default:
        return s.Z.Messages.NOTICE_DISPATCH_ERROR_WITH_CODE.format({
          code: "".concat(this.code)
        })
    }
  }
  constructor(e) {
    o(this, "raw", void 0), o(this, "context", void 0), o(this, "code", void 0), o(this, "uuid", void 0), o(this, "applicationId", void 0), o(this, "branchId", void 0), this.raw = e, null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? this.context = e.context : this.context = {}
  }
}