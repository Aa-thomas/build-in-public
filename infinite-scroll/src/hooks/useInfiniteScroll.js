import { useState } from 'react';

export const useInfiniteScroll = (fetcher) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [lastItemRef, setLastItemRef] = useState(null);

	return {
		items: [],
		loading: false,
		error: null,
		lastItemRef: null,
	};
};

// module.exports = {
// 	useInfiniteScroll,
//  };
