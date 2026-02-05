/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CreateUserOption create user options
 */
export type CreateUserOption = {
    /**
     * For explicitly setting the user creation timestamp. Useful when users are
     * migrated from other systems. When omitted, the user's creation timestamp
     * will be set to "now".
     */
    created_at?: string;
    email: string;
    full_name?: string;
    login_name?: string;
    must_change_password?: boolean;
    password?: string;
    restricted?: boolean;
    send_notify?: boolean;
    source_id?: number;
    username: string;
    visibility?: string;
};

