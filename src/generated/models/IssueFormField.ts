/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IssueFormFieldType } from './IssueFormFieldType';
import type { IssueFormFieldVisible } from './IssueFormFieldVisible';
/**
 * IssueFormField represents a form field
 */
export type IssueFormField = {
    attributes?: Record<string, any>;
    id?: string;
    type?: IssueFormFieldType;
    validations?: Record<string, any>;
    visible?: Array<IssueFormFieldVisible>;
};

