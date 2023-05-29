for(let i = 100;i <= 110; i++)
{
        console.log(i);
	console.log(i % 3);
        console.log(i % 4);

  if( i % 3 === 0)
  {

          console.log("Loopy");
  }
  if( i % 4 === 0)
  {

          console.log("Lighthouse");
  }
  if( i % 3 === 0 && i % 4 === 0)
  {
    console.log("Loopy Lighthouse");
  }
}
