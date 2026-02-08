export default function NotFound() {
  return (
    <section class="flex min-h-screen flex-col items-center justify-center">
      <h1 class="text-6xl font-bold" style={{ color: "var(--text-primary)" }}>
        404
      </h1>
      <p class="mt-4 text-xl" style={{ color: "var(--text-secondary)" }}>
        Page not found
      </p>
      <a
        href="/"
        class="mt-8 rounded-full px-6 py-3 font-medium"
        style={{
          "background-color": "var(--accent)",
          color: "white",
        }}
      >
        Go Home
      </a>
    </section>
  );
}
