    "use strict";
    e.r(t), e.d(t, {
      BANNER_ASPECT_RATIO: function() {
        return T
      },
      EDITING_CONTAINER_WIDTH: function() {
        return f
      },
      GUILD_BANNER_ASPECT_RATIO: function() {
        return I
      },
      GUILD_BANNER_MAX_HEIGHT: function() {
        return E
      },
      GUILD_BANNER_MAX_WIDTH: function() {
        return s
      },
      HOME_HEADER_ASPECT_RATIO: function() {
        return d
      },
      HOME_HEADER_MAX_HEIGHT: function() {
        return p
      },
      HOME_HEADER_MAX_WIDTH: function() {
        return l
      },
      MAX_BANNER_OVERLAY_HEIGHT: function() {
        return N
      },
      MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
        return b
      },
      MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
        return D
      },
      MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
        return y
      },
      MAX_VIDEO_OVERLAY_HEIGHT: function() {
        return P
      },
      MessageTypes: function() {
        return i
      },
      SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
        return R
      },
      SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
        return A
      },
      SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
        return O
      },
      USER_BANNER_MAX_HEIGHT: function() {
        return a
      },
      USER_BANNER_MAX_WIDTH: function() {
        return _
      },
      UploadTypes: function() {
        return u
      },
      VIDEO_BACKGROUND_ASPECT_RATIO: function() {
        return h
      }
    });
    var r, o, u, i, c = e("678916");
    (r = u || (u = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
    let f = 568,
      _ = 2400,
      a = 848,
      s = 2400,
      E = 1350,
      O = 2400,
      A = 960,
      l = 2400,
      p = 600,
      T = 17 / 6,
      I = 16 / 9,
      R = 2.5,
      d = 4,
      N = 568 / (17 / 6),
      b = 568 / (16 / 9),
      y = 227.2,
      D = 142,
      h = c.BACKGROUND_REPLACEMENT_SIZE.width / c.BACKGROUND_REPLACEMENT_SIZE.height,
      P = f / h;
    (o = i || (i = {}))[o.CROP_GIF_START = 0] = "CROP_GIF_START", o[o.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", o[o.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"