import { component$ } from "@builder.io/qwik";

export const CloudflareWebAnalytics = component$(() => {
  if (!import.meta.env.PUBLIC_DATA_CF_BEACON_TOKEN_ID) return null;
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={`{"token": "${
        import.meta.env.PUBLIC_DATA_CF_BEACON_TOKEN_ID
      }"}`}
    ></script>
  );
});
