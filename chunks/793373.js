r.d(t, {
  OP: function() {
return a;
  },
  Q0: function() {
return _;
  },
  ix: function() {
return i;
  },
  jt: function() {
return o;
  },
  pq: function() {
return n;
  }
});
let n = 0,
  a = 1,
  o = 2;

function i(e) {
  if (e < 400 && e >= 100)
return {
  code: a
};
  if (e >= 400 && e < 500)
switch (e) {
  case 401:
    return {
      code: o,
        message: 'unauthenticated'
    };
  case 403:
    return {
      code: o,
        message: 'permission_denied'
    };
  case 404:
    return {
      code: o,
        message: 'not_found'
    };
  case 409:
    return {
      code: o,
        message: 'already_exists'
    };
  case 413:
    return {
      code: o,
        message: 'failed_precondition'
    };
  case 429:
    return {
      code: o,
        message: 'resource_exhausted'
    };
  case 499:
    return {
      code: o,
        message: 'cancelled'
    };
  default:
    return {
      code: o,
        message: 'invalid_argument'
    };
}
  if (e >= 500 && e < 600)
switch (e) {
  case 501:
    return {
      code: o,
        message: 'unimplemented'
    };
  case 503:
    return {
      code: o,
        message: 'unavailable'
    };
  case 504:
    return {
      code: o,
        message: 'deadline_exceeded'
    };
  default:
    return {
      code: o,
        message: 'internal_error'
    };
}
  return {
code: o,
message: 'unknown_error'
  };
}

function _(e, t) {
  e.setAttribute('http.response.status_code', t);
  let r = i(t);
  'unknown_error' !== r.message && e.setStatus(r);
}