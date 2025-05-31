import localFont from "next/font/local"

// Self-host Raleway font to avoid Google Fonts timeout issues
export const raleway = localFont({
  src: [
    {
      path: "./raleway/Raleway-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./raleway/Raleway-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./raleway/Raleway-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./raleway/Raleway-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./raleway/Raleway-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-raleway",
})
