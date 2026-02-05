/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Repository } from './Repository';
import type { User } from './User';
/**
 * Package represents a package
 */
export type Package = {
    created_at?: string;
    creator?: User;
    html_url?: string;
    id?: number;
    name?: string;
    owner?: User;
    repository?: Repository;
    type?: string;
    version?: string;
};

