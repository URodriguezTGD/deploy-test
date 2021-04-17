import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID, 
    dataset: process.env.NEXT_PUBLIC_DATASET,
    apiVersion: process.env.API_VERSION,
    token: process.env.SANITY_TOKEN,
    useCdn: false,
});
