import getCategoryByKeyword from '../utils/GetCategoryByKeyword';

export async function categoryKeywordApi(keyword) {
	return await getCategoryByKeyword(keyword);
}
