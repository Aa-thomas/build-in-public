import { getCoins } from '../endpoints';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll.js';
import styles from './Coins.module.css';

const Coins = () => {
	const { items, loading, error, lastItemRef } = useInfiniteScroll(getCoins);

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{items.map((coin) => (
					<li className={styles.coin} key={coin.id}>
						<img src={coin.image} alt={coin.name} width="20" />
						{coin.name} ({coin.symbol.toUpperCase()})
					</li>
				))}
			</ul>
			{loading && <div>Loading...</div>}
			<div className={styles.lastItem} ref={lastItemRef} />
		</div>
	);
};

export default Coins;
