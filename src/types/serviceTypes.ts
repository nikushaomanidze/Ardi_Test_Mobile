export interface BlogPostsResponseData {
	id?: number;
	name?: string;
	content?: string;
	category?: string;
}
export interface BlogPostsResponse {
	BlogPostsResponseData: [];
}
export interface ModifyPostInput {
	id: number;
	body: BlogPostsResponseData;
}

export interface AddPostInput {
	name?: string;
	content?: string;
	category?: string;
}
