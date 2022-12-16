import React, { useState } from 'react';
import './Home.css';

function Home(){

    const [num, setNum ] = useState(0);

    return(
        <>
        
            <h1 className='titulo'> Home</h1>

            <header>
                <p className='exemplo'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit, sapien ultrices condimentum mollis, risus urna dictum augue, vitae aliquet eros ex eget massa. Sed pellentesque tempus hendrerit. Suspendisse eu turpis eget sapien consectetur scelerisque. Vivamus diam dolor, iaculis et condimentum et, rhoncus vel erat. Sed est lacus, rhoncus ac leo quis, pharetra gravida nulla. Sed ac nisl vel nibh semper finibus. Morbi placerat iaculis justo non sagittis. Phasellus finibus, felis eu vestibulum consequat, magna erat consectetur mauris, sollicitudin condimentum arcu sem at libero. Aenean imperdiet mattis condimentum.

                </p>
            </header>
            
            <img src='https://i.imgur.com/V8XOfJk.jpeg' alt='imagem tela inicial' className='img'/>
        

        </>

    )
}

export {Home};

// function Home(){
  //  const [num, setNum] = useState(0);

  //  return (
      //  <>

    //    <h1> Voce clicou {num} vezes</h1>
  //      <button onClick={() => setNum(num + 1)}>
         //   Clique aqui
        //</button>
      //  </>
  //  )
// }
