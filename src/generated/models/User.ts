/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * User represents a user
 */
export type User = {
    /**
     * Is user active
     */
    active?: boolean;
    /**
     * URL to the user's avatar
     */
    avatar_url?: string;
    created?: string;
    /**
     * the user's description
     */
    description?: string;
    email?: string;
    /**
     * user counts
     */
    followers_count?: number;
    following_count?: number;
    /**
     * the user's full name
     */
    full_name?: string;
    /**
     * URL to the user's profile page
     */
    html_url?: string;
    /**
     * the user's id
     */
    id?: number;
    /**
     * Is the user an administrator
     */
    is_admin?: boolean;
    /**
     * User locale
     */
    language?: string;
    last_login?: string;
    /**
     * the user's location
     */
    location?: string;
    /**
     * the user's username
     */
    login?: string;
    /**
     * the user's authentication sign-in name.
     */
    login_name?: string;
    /**
     * Is user login prohibited
     */
    prohibit_login?: boolean;
    /**
     * the user's pronouns
     */
    pronouns?: string;
    /**
     * Is user restricted
     */
    restricted?: boolean;
    /**
     * The ID of the user's Authentication Source
     */
    source_id?: number;
    starred_repos_count?: number;
    /**
     * User visibility level option: public, limited, private
     */
    visibility?: string;
    /**
     * the user's website
     */
    website?: string;
};

