import "./globals.css";
import { AppShell } from "@/components/AppShell";

export const metadata = {
  title: "Nurul Globe",
  description: "Aplikasi Islami modern: Qur'an, Shalat, Qibla, Globe, Doa, Dzikir dan lainnya.",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}