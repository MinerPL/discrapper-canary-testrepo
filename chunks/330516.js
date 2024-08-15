n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(424218),
  i = n(186901),
  a = n(689938);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class o {
  get displayMessage() {
if (null == this.code)
  return a.Z.Messages.NOTICE_DISPATCH_ERROR;
let {
  path: e
} = this.context;
switch (this.code) {
  case i.ff.DISK_LOW:
    let {
      available: t,
        required: n
    } = this.context, s = (0, r.BU)(t, {
      useKibibytes: !0
    }), o = (0, r.BU)(n, {
      useKibibytes: !0
    });
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_DISK_LOW.format({
      required: o,
      available: s
    });
  case i.ff.POST_INSTALL_FAILED:
    let {
      name: l
    } = this.context;
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_FAILED.format({
      name: l
    });
  case i.ff.FILE_NAME_TOO_LONG:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_FILE_NAME_TOO_LONG;
  case i.ff.POST_INSTALL_CANCELLED:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_CANCELLED;
  case i.ff.IO_PERMISSION_DENIED:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_IO_PERMISSION_DENIED;
  case i.ff.NO_MANIFESTS:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_NO_MANIFESTS;
  case i.ff.NOT_ENTITLED:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_NOT_ENTITLED;
  case i.ff.NOT_DIRECTORY:
  case i.ff.DISK_PERMISSION_DENIED:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_UNWRITABLE.format({
      path: e
    });
  case i.ff.INVALID_DRIVE:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_INVALID_DRIVE.format({
      path: e
    });
  case i.ff.APPLICATION_LOCK_FAILED:
    return a.Z.Messages.NOTICE_DISPATCH_APPLICATION_LOCK_FAILED;
  case i.ff.DISK_FULL:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_DISK_FULL;
  case i.ff.API_ERROR:
  case i.ff.MAX_REQUEST_RETRIES_EXCEEDED:
    return a.Z.Messages.NOTICE_DISPATCH_API_ERROR;
  default:
    return a.Z.Messages.NOTICE_DISPATCH_ERROR_WITH_CODE.format({
      code: ''.concat(this.code)
    });
}
  }
  constructor(e) {
s(this, 'raw', void 0), s(this, 'context', void 0), s(this, 'code', void 0), s(this, 'uuid', void 0), s(this, 'applicationId', void 0), s(this, 'branchId', void 0), this.raw = e, null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? this.context = e.context : this.context = {};
  }
}