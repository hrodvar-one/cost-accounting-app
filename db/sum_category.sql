SELECT category, SUM(price)
FROM buy_list
WHERE date LIKE '2022-03%'
GROUP BY category 