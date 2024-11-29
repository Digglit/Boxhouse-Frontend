export default function sitemap() {
  const baseUrl = "https://www.BoxhouseConsulting.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/ourWork`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/scheduleConsultation`,
      lastModified: new Date().toISOString(),
    },
  ];
}
