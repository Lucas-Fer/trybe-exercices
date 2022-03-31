USE Scientists;
select
  *
from
  Projects;
select
  Name
from
  Projects
order by
  Name desc;
select
  concat(
    'O projeto ',
    Name,
    'precisou de ',
    Hours,
    ' horas para ser concluído.'
  ) as 'Resultado'
from
  Projects;
select
  concat(Name, ' : ', Hours, ' horas.') as 'Resultado'
from
  Projects
order by
  Hours desc
limit
  3;
select
  *
from
  Projects
order by
  Hours desc
limit
  1;
select
  *
from
  Projects
order by
  Hours asc
limit
  1 offset 1;
select
  *
from
  Projects
order by
  Hours asc
limit
  5;