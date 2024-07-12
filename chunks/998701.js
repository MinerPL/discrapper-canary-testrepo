n.d(t, {
  c: function() {
return i;
  }
});
var r, i, a = n(689938);
(r = i || (i = {}))[r.GENERAL = 0] = 'GENERAL', r[r.NO_FILE = 1] = 'NO_FILE', r[r.PROGRESS = 2] = 'PROGRESS', r[r.UPLOAD = 3] = 'UPLOAD', r[r.READ = 4] = 'READ';
t.Z = class e {
  get displayMessage() {
switch (this.code) {
  case 1:
    return a.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
  case 2:
    return a.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
  case 3:
    return a.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
  case 4:
    return a.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
  default:
    return a.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE;
}
  }
  constructor(e) {
var t, n, r;
t = this, r = void 0, (n = 'code') in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r, this.code = e;
  }
};