import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: process.env.PROJECT_ID, 
    dataset: process.env.DATASET,
    apiVersion: process.env.API_VERSION,
    token: process.env.SANITY_TOKEN,
    useCdn: false,
});
