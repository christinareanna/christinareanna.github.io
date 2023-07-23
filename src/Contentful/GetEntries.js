import {client} from "../Contentful/client.js";

export const getPosts = async () => {
    try {
        const entries = await client.getEntries({
            content_type: "blogPost",
        });
        const filteredEntries = entries?.items?.map((data) => {
            const filteredEntry = data?.fields;
            return filteredEntry;
        })
        return filteredEntries;
    } catch (error) {
        console.log(error);
    }
};

export const getSinglePost = async (slug) => {
    try {
        const entries = await client.getEntries({
            "fields.slug": slug,
            content_type: "blogPost",
        });
        return entries;
    } catch (error) {
        console.log(error);
    }
};