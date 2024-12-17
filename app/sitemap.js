export default async function sitemap() {
  // Static URLs
  const myUrls = ["", "/ourWork", "/about", "/blog", "/scheduleConsultation"];
  const staticUrls = myUrls.map((url) => ({
    url: `https://boxhouseconsulting.com${url}`,
    lastModified: new Date().toISOString(),
  }));

  // Combine static and dynamic URLs
  return [...staticUrls];
}
