export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      {/* Logo */}
      <img src="/wewe.png" alt="$we Token Logo" style={{ width: "120px", borderRadius: "50%" }} />

      <h1 style={{ fontSize: "2rem", marginTop: "10px" }}>Welcome to $we</h1>
      <p style={{ fontSize: "1rem", color: "#555" }}>
        Born from unity and togetherness on Farcaster.
      </p>

      {/* Banner */}
      <div style={{ margin: "20px auto", maxWidth: "500px" }}>
        <img src="/webanner.png" alt="$we Token Banner" style={{ width: "100%", borderRadius: "10px" }} />
      </div>

      <p style={{ fontStyle: "italic", color: "#666" }}>
        "We are building the future of the internet, right here, right now."
      </p>
      <p style={{ fontSize: "0.9rem", color: "#777" }}>- Inspired by Jesse Pollak</p>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://dexscreener.com/base/0xfc36f33535bdc70c1a9fac03297e0b0f2de64b49"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            margin: "10px auto",
            textDecoration: "none",
            borderRadius: "5px",
            maxWidth: "200px",
          }}
        >
          View on Dexscreener
        </a>

        <a
          href="https://example.com/buy-we-token"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            margin: "10px auto",
            textDecoration: "none",
            borderRadius: "5px",
            maxWidth: "200px",
          }}
        >
          Buy $we Token
        </a>
      </div>

      {/* Contract Address */}
      <p style={{ fontSize: "0.8rem", color: "#999", marginTop: "20px" }}>
        Contract Address: 0x06B0AAD2AebDEf99946b6c986e8E00c4fD58f4a5
      </p>
    </div>
  );
}
