import { createClient } from "contentful";
// const contentful = require('contentful');

export const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});