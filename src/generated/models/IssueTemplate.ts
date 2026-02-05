/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IssueFormField } from './IssueFormField';
import type { IssueTemplateLabels } from './IssueTemplateLabels';
/**
 * IssueTemplate represents an issue template for a repository
 */
export type IssueTemplate = {
    about?: string;
    body?: Array<IssueFormField>;
    content?: string;
    file_name?: string;
    labels?: IssueTemplateLabels;
    name?: string;
    ref?: string;
    title?: string;
};

