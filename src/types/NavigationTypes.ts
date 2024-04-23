export type RootStackParamList = {
	Blog: undefined;
	BlogDetail: {
		id?: number;
		name?: string;
		content?: string;
		category?: string;
	};
	AddPost: undefined;
	EditPost: {
		id?: number;
		name?: string;
		content?: string;
		category?: string;
	};
};
