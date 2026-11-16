// The configuration of the app, which `mygo dev` and `mygo build` evaluate with
// Bun, of the command running. The development app (`mygo dev`) opens links of a
// scheme of its own, for the installed app to keep mygo-music:// links.
export default ({ command }: { command: string }) => ({
  name: "MyGo Music",
  identifier: "dev.egoist.music",
  slug: "mygo-music",
  version: "0.1.25",
  out: "build",
  urlSchemes: [command === "dev" ? "mygo-music-dev" : "mygo-music"],
  updates: {
    publicKey: "WzJsOGNIuf6mcEqo5ff8jub+NoQQOEk4JXreLPYjgyQ=",
    github: "egoist/mygo-music",
  },
  macos: {
    icon: "icon/AppIcon.icon",
    minimumSystemVersion: "13.0",
    signingIdentity: "Developer ID Application: xinyu zeng (GJE9R5VE87)",
    notarize: { keychainProfile: "notary" },
  },
  linux: {
    comment: "A music player for your files and more",
    categories: ["AudioVideo", "Audio", "Player"],
    // Plugin sign-in opens a WebKitGTK window, and the notification-area
    // icon needs the appindicator library; keep both out of the way of
    // the packages MyGo writes for us.
    depends: {
      deb: ["libayatana-appindicator3-1"],
      rpm: ["libayatana-appindicator-gtk3"],
      arch: ["libsecret", "libayatana-appindicator"],
    },
  },
});
