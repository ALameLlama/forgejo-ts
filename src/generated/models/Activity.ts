/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from './Comment';
import type { Repository } from './Repository';
import type { User } from './User';
export type Activity = {
    act_user?: User;
    act_user_id?: number;
    comment?: Comment;
    comment_id?: number;
    content?: string;
    created?: string;
    id?: number;
    is_private?: boolean;
    /**
     * the type of action
     */
    op_type?: 'create_repo' | 'rename_repo' | 'star_repo' | 'watch_repo' | 'commit_repo' | 'create_issue' | 'create_pull_request' | 'transfer_repo' | 'push_tag' | 'comment_issue' | 'merge_pull_request' | 'close_issue' | 'reopen_issue' | 'close_pull_request' | 'reopen_pull_request' | 'delete_tag' | 'delete_branch' | 'mirror_sync_push' | 'mirror_sync_create' | 'mirror_sync_delete' | 'approve_pull_request' | 'reject_pull_request' | 'comment_pull' | 'publish_release' | 'pull_review_dismissed' | 'pull_request_ready_for_review' | 'auto_merge_pull_request';
    ref_name?: string;
    repo?: Repository;
    repo_id?: number;
    user_id?: number;
};

