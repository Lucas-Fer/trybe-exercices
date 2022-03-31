SELECT
  *
FROM
  PiecesProviders.Provides;
select
  Piece,
  Price
from
  Provides
where
  Provider = 'RBT';
select
  *
from
  Provides
order by
  Price desc
limit
  5;
select
  concat('Empresa ', Provider, ' Preço: ', Price) as 'Resultado'
from
  Provides
order by
  Price desc
limit
  4 offset 2;
select
  *
from
  Provides
where
  Provider = 'HAL'
order by
  Price desc;
select
  count(Piece)
from
  Provides
where
  Piece = '1';