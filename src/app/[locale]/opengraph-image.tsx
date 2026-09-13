import { ImageResponse } from "next/og";

export const alt = "LebPar paragliding tours through Lebanon — Jounieh Bay and mountain sites";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 64,
          background: "linear-gradient(135deg, #0b3d4a 0%, #1a6b7a 50%, #2a9aad 100%)",
          color: "#f3f7f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#d4c4a8" }}>
          LebPar · Lebanon
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16, maxWidth: 980 }}>
          Paragliding tours through Lebanon
        </div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#e8f2f4" }}>
          1–3 weeks · Coast & mountains · WhatsApp booking
        </div>
      </div>
    ),
    { ...size },
  );
}
