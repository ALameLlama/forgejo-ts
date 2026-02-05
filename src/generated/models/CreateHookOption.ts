/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateHookOptionConfig } from './CreateHookOptionConfig';
/**
 * CreateHookOption options when create a hook
 */
export type CreateHookOption = {
    active?: boolean;
    authorization_header?: string;
    branch_filter?: string;
    config: CreateHookOptionConfig;
    events?: Array<string>;
    type: 'forgejo' | 'dingtalk' | 'discord' | 'gitea' | 'gogs' | 'msteams' | 'slack' | 'telegram' | 'feishu' | 'wechatwork' | 'packagist';
};

