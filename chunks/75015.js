"use strict";
n.r(t), n.d(t, {
  UploadTypes: function() {
    return s
  },
  EDITING_CONTAINER_WIDTH: function() {
    return o
  },
  USER_BANNER_MAX_WIDTH: function() {
    return u
  },
  USER_BANNER_MAX_HEIGHT: function() {
    return c
  },
  GUILD_BANNER_MAX_WIDTH: function() {
    return d
  },
  GUILD_BANNER_MAX_HEIGHT: function() {
    return E
  },
  SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
    return _
  },
  SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
    return f
  },
  HOME_HEADER_MAX_WIDTH: function() {
    return T
  },
  HOME_HEADER_MAX_HEIGHT: function() {
    return I
  },
  BANNER_ASPECT_RATIO: function() {
    return R
  },
  GUILD_BANNER_ASPECT_RATIO: function() {
    return p
  },
  SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
    return A
  },
  HOME_HEADER_ASPECT_RATIO: function() {
    return C
  },
  MAX_BANNER_OVERLAY_HEIGHT: function() {
    return S
  },
  MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
    return M
  },
  MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
    return N
  },
  MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
    return m
  },
  VIDEO_BACKGROUND_ASPECT_RATIO: function() {
    return P
  },
  MAX_VIDEO_OVERLAY_HEIGHT: function() {
    return h
  },
  MessageTypes: function() {
    return a
  }
});
var r, l, s, a, i = n("917219");
(r = s || (s = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
let o = 568,
  u = 2400,
  c = 848,
  d = 2400,
  E = 1350,
  _ = 2400,
  f = 960,
  T = 2400,
  I = 600,
  R = 17 / 6,
  p = 16 / 9,
  A = 2.5,
  C = 4,
  S = o / R,
  M = o / p,
  N = o / A,
  m = o / C,
  P = i.BACKGROUND_REPLACEMENT_SIZE.width / i.BACKGROUND_REPLACEMENT_SIZE.height,
  h = o / P;
(l = a || (a = {}))[l.CROP_GIF_START = 0] = "CROP_GIF_START", l[l.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", l[l.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"