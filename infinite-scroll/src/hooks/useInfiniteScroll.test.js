const useInfiniteScroll = require('./useInfiniteScroll.js');

describe('useInfiniteScroll', () => {
	test('should fetch items on mount', async () => {
		const fetcher = jest.fn().mockResolvedValueOnce(['item1', 'item2']);
		const result = useInfiniteScroll(fetcher);

		expect(result.loading).toBe(true);
		expect(fetcher).toHaveBeenCalledTimes(1);

		await fetcher();

		expect(result.loading).toBe(false);
		expect(result.items).toEqual(['item1', 'item2']);

		expect(fetcher).toHaveBeenCalledTimes(2);

		expect(result.error).toBe(null);
	});

	test('should fetch items on scroll', async () => {
		const fetcher = jest.fn().mockResolvedValueOnce(['item1', 'item2']);
		const result = useInfiniteScroll(fetcher);

		expect(result.loading).toBe(true);
		expect(fetcher).toHaveBeenCalledTimes(1);

		await fetcher();

		expect(result.loading).toBe(false);
		expect(result.items).toEqual(['item1', 'item2']);

		expect(fetcher).toHaveBeenCalledTimes(2);

		expect(result.error).toBe(null);
	});

	test('should set hasMore to false when there are no more items', async () => {
		const fetcher = jest.fn().mockResolvedValueOnce(['item1', 'item2']);
		const result = useInfiniteScroll(fetcher);

		expect(result.loading).toBe(true);
		expect(fetcher).toHaveBeenCalledTimes(1);

		await fetcher();

		expect(result.loading).toBe(false);
		expect(result.items).toEqual(['item1', 'item2']);

		expect(fetcher).toHaveBeenCalledTimes(2);

		expect(result.error).toBe(null);
	});

	test('should set error when fetcher throws an error', async () => {
		const error = new Error('Error');
		const fetcher = jest.fn().mockRejectedValueOnce(error);
		const result = useInfiniteScroll(fetcher);

		expect(result.loading).toBe(true);
		expect(fetcher).toHaveBeenCalledTimes(1);

		await fetcher();

		expect(result.items).toEqual([]);

		expect(fetcher).toHaveBeenCalledTimes(2);

		expect(result.error).toBe(error);
	});

	test('should not fetch items when there are no more items', async () => {
		const fetcher = jest.fn().mockResolvedValueOnce(['item1', 'item2']);
		const result = useInfiniteScroll(fetcher);

		expect(result.loading).toBe(true);
		expect(fetcher).toHaveBeenCalledTimes(1);

		await fetcher();

		expect(result.loading).toBe(false);
		expect(result.items).toEqual(['item1', 'item2']);

		expect(fetcher).toHaveBeenCalledTimes(2);

		expect(result.error).toBe(null);
	});
});
