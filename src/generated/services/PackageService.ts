/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Package } from '../models/Package';
import type { PackageFile } from '../models/PackageFile';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PackageService {
    /**
     * Gets all packages of an owner
     * @returns Package PackageList
     * @throws ApiError
     */
    public static listPackages({
        owner,
        page,
        limit,
        type,
        q,
    }: {
        /**
         * owner of the packages
         */
        owner: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
        /**
         * package type filter
         */
        type?: 'alpine' | 'cargo' | 'chef' | 'composer' | 'conan' | 'conda' | 'container' | 'cran' | 'debian' | 'generic' | 'go' | 'helm' | 'maven' | 'npm' | 'nuget' | 'pub' | 'pypi' | 'rpm' | 'rubygems' | 'swift' | 'vagrant',
        /**
         * name filter
         */
        q?: string,
    }): CancelablePromise<Array<Package>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/packages/{owner}',
            path: {
                'owner': owner,
            },
            query: {
                'page': page,
                'limit': limit,
                'type': type,
                'q': q,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Link a package to a repository
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public static linkPackage({
        owner,
        type,
        name,
        repoName,
    }: {
        /**
         * owner of the package
         */
        owner: string,
        /**
         * type of the package
         */
        type: string,
        /**
         * name of the package
         */
        name: string,
        /**
         * name of the repository to link.
         */
        repoName: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/{owner}/{type}/{name}/-/link/{repo_name}',
            path: {
                'owner': owner,
                'type': type,
                'name': name,
                'repo_name': repoName,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Unlink a package from a repository
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public static unlinkPackage({
        owner,
        type,
        name,
    }: {
        /**
         * owner of the package
         */
        owner: string,
        /**
         * type of the package
         */
        type: string,
        /**
         * name of the package
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/{owner}/{type}/{name}/-/unlink',
            path: {
                'owner': owner,
                'type': type,
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Gets a package
     * @returns Package Package
     * @throws ApiError
     */
    public static getPackage({
        owner,
        type,
        name,
        version,
    }: {
        /**
         * owner of the package
         */
        owner: string,
        /**
         * type of the package
         */
        type: string,
        /**
         * name of the package
         */
        name: string,
        /**
         * version of the package
         */
        version: string,
    }): CancelablePromise<Package> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/packages/{owner}/{type}/{name}/{version}',
            path: {
                'owner': owner,
                'type': type,
                'name': name,
                'version': version,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a package
     * @returns void
     * @throws ApiError
     */
    public static deletePackage({
        owner,
        type,
        name,
        version,
    }: {
        /**
         * owner of the package
         */
        owner: string,
        /**
         * type of the package
         */
        type: string,
        /**
         * name of the package
         */
        name: string,
        /**
         * version of the package
         */
        version: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/packages/{owner}/{type}/{name}/{version}',
            path: {
                'owner': owner,
                'type': type,
                'name': name,
                'version': version,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Gets all files of a package
     * @returns PackageFile PackageFileList
     * @throws ApiError
     */
    public static listPackageFiles({
        owner,
        type,
        name,
        version,
    }: {
        /**
         * owner of the package
         */
        owner: string,
        /**
         * type of the package
         */
        type: string,
        /**
         * name of the package
         */
        name: string,
        /**
         * version of the package
         */
        version: string,
    }): CancelablePromise<Array<PackageFile>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/packages/{owner}/{type}/{name}/{version}/files',
            path: {
                'owner': owner,
                'type': type,
                'name': name,
                'version': version,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
}
