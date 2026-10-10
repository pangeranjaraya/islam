import type { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "com.nurulglobe.app",
  appName: "Nurul Globe",
  webDir: "out",
  server: { androidScheme: "https" },
  plugins: {
    SplashScreen: { launchShowDuration: 1200 }
  }
};
export default config;