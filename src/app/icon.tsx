import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0f172a",
          borderRadius: 8,
          border: "1.5px solid #22c55e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 800,
          fontSize: 12,
          color: "#22c55e",
          letterSpacing: "-0.5px",
        }}
      >
        OW
      </div>
    ),
    { ...size }
  );
}
