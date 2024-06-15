// App.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ChampionPool from './components/Champions';
import TraitList from './components/TraitsSidebar';
import Board from './components/Board'; // Assume you have a Board component
import './styles/App.css';
import './styles/Board.css';
import Aatroximg from './asset/tft-champion/TFT11_Aatrox.TFT_Set11.png';
import Ahriimg from './asset/tft-champion/TFT11_Ahri.TFT_Set11.png';
import Amumuimg from './asset/tft-champion/TFT11_Amumu.TFT_Set11.png';
import Annieimg from './asset/tft-champion/TFT11_Annie.TFT_Set11.png';
import Apheliosimg from './asset/tft-champion/TFT11_Aphelios.TFT_Set11.png';
import Asheimg from './asset/tft-champion/TFT11_Ashe.TFT_Set11.png';
import Azirimg from './asset/tft-champion/TFT11_Azir.TFT_Set11.png';
import Aluneimg from './asset/tft-champion/TFT11_Alune.TFT_Set11.png';
import Bardimg from './asset/tft-champion/TFT11_Bard.TFT_Set11.png';
import Caitlynimg from './asset/tft-champion/TFT11_Caitlyn.TFT_Set11.png';
import ChoGathimg from './asset/tft-champion/TFT11_ChoGath.TFT_Set11.png';
import Dariusimg from './asset/tft-champion/TFT11_Darius.TFT_Set11.png';
import Galioimg from './asset/tft-champion/TFT11_Galio.TFT_Set11.png';
import Garenimg from './asset/tft-champion/TFT11_Garen.TFT_Set11.png';
import Gnarimg from './asset/tft-champion/TFT11_Gnar.TFT_Set11.png';
import Hweiimg from './asset/tft-champion/TFT11_Hwei.TFT_Set11.png';
import Illaoiimg from './asset/tft-champion/TFT11_Illaoi.TFT_Set11.png';
import Ireliaimg from './asset/tft-champion/TFT11_Irelia.TFT_Set11.png';
import Jannaimg from './asset/tft-champion/TFT11_Janna.TFT_Set11.png';
import Jaximg from './asset/tft-champion/TFT11_Jax.TFT_Set11.png';
import Kaisaimg from './asset/tft-champion/TFT11_Kaisa.TFT_Set11.png';
import Kaynimg from './asset/tft-champion/TFT11_Kayn.TFT_Set11.png';
import KhaZiximg from './asset/tft-champion/TFT11_KhaZix.TFT_Set11.png';
import Kindredimg from './asset/tft-champion/TFT11_Kindred.TFT_Set11.png';
import Kobukoimg from './asset/tft-champion/TFT11_Kobuko.TFT_Set11.png';
import KogMawimg from './asset/tft-champion/TFT11_KogMaw.TFT_Set11.png';
import LeeSinimg from './asset/tft-champion/TFT11_LeeSin.TFT_Set11.png';
import Lilliaimg from './asset/tft-champion/TFT11_Lillia.TFT_Set11.png';
import Lissandraimg from './asset/tft-champion/TFT11_Lissandra.TFT_Set11.png';
import Luximg from './asset/tft-champion/TFT11_Lux.TFT_Set11.png';
import Malphiteimg from './asset/tft-champion/TFT11_Malphite.TFT_Set11.png';
import Morganaimg from './asset/tft-champion/TFT11_Morgana.TFT_Set11.png';
import Nautilusimg from './asset/tft-champion/TFT11_Nautilus.TFT_Set11.png';
import Neekoimg from './asset/tft-champion/TFT11_Neeko.TFT_Set11.png';
import Ornnimg from './asset/tft-champion/TFT11_Ornn.TFT_Set11.png';
import Qiyanaimg from './asset/tft-champion/TFT11_Qiyana.TFT_Set11.png';
import RekSaiimg from './asset/tft-champion/TFT11_RekSai.TFT_Set11.png';
import Rivenimg from './asset/tft-champion/TFT11_Riven.TFT_Set11.png';
import Sennaimg from './asset/tft-champion/TFT11_Senna.TFT_Set11.png';
import Settimg from './asset/tft-champion/TFT11_Sett.TFT_Set11.png';
import Shenimg from './asset/tft-champion/TFT11_Shen.TFT_Set11.png';
import Sivirimg from './asset/tft-champion/TFT11_Sivir.TFT_Set11.png';
import Sorakaimg from './asset/tft-champion/TFT11_Soraka.TFT_Set11.png';
import Sylasimg from './asset/tft-champion/TFT11_Sylas.TFT_Set11.png';
import Syndraimg from './asset/tft-champion/TFT11_Syndra.TFT_Set11.png';
import TahmKenchimg from './asset/tft-champion/TFT11_TahmKench.TFT_Set11.png';
import Teemoimg from './asset/tft-champion/TFT11_Teemo.TFT_Set11.png';
import Threshimg from './asset/tft-champion/TFT11_Thresh.TFT_Set11.png';
import Tristanaimg from './asset/tft-champion/TFT11_Tristana.TFT_Set11.png';
import Udyrimg from './asset/tft-champion/TFT11_Udyr.TFT_Set11.png';
import Volibearimg from './asset/tft-champion/TFT11_Volibear.TFT_Set11.png';
import WuKongimg from './asset/tft-champion/TFT11_WuKong.TFT_Set11.png';
import XayahRakanimg from './asset/tft-champion/TFT11_XayahRakan.TFT_Set11.png';
import Yasuoimg from './asset/tft-champion/TFT11_Yasuo.TFT_Set11.png';
import Yoneimg from './asset/tft-champion/TFT11_Yone.TFT_Set11.png';
import Yorickimg from './asset/tft-champion/TFT11_Yorick.TFT_Set11.png';
import Zoeimg from './asset/tft-champion/TFT11_Zoe.TFT_Set11.png';
import Zyraimg from './asset/tft-champion/TFT11_Zyra.TFT_Set11.png';


const App = () => {
  const champions = [
    {
      name:'Ahri',
      img:Ahriimg,
      cost : '1',
      traits : 'arcanist'
      
    },
    {
      name: 'Aatrox',
      img: Aatroximg,
      cost : '2',
      traits : 'bruiser'
    },
    {
      name: 'Amumu',
      img: Amumuimg,
      cost : '3',
  
    },
    {
      name: 'Annie',
      img: Annieimg,
      cost : '4',
  
    },
    {
      name: 'Aphelios',
      img: Apheliosimg,
      cost : '3',
  
    },
    {
      name: 'Ashe',
      img: Asheimg,
      cost : '4',
  
    },
    {
      name: 'Azir',
      img: Azirimg,
      cost : '5',
  
    },
    {
      name: 'Alune',
      img: Aluneimg,
      cost : '3',
  
    },
    {
      name: 'Bard',
      img: Bardimg,
      cost : '3',
  
    },
    {
      name: 'Caitlyn',
      img: Caitlynimg,
      cost : '1',
  
    },
    {
      name: 'ChoGath',
      img: ChoGathimg,
      cost : '1',
  
    },
    {
      name: 'Darius',
      img: Dariusimg,
      cost : '1',
  
    },
    {
      name: 'Galio',
      img: Galioimg,
      cost : '4',
  
    },
    {
      name: 'Garen',
      img: Garenimg,
      cost : '1',
  
    },
    {
      name: 'Gnar',
      img: Gnarimg,
      cost : '2',
  
    },
    {
      name: 'Hwei',
      img: Hweiimg,
      cost : '5',
  
    },
    {
      name: 'Illaoi',
      img: Illaoiimg,
      cost : '3',
  
    },
    {
      name: 'Irelia',
      img: Ireliaimg,
      cost : '5',
  
    },
    {
      name: 'Janna',
      img: Jannaimg,
      cost : '2',
  
    },
    {
      name: 'Jax',
      img: Jaximg,
      cost : '1',
  
    },
    {
      name: 'Kaisa',
      img: Kaisaimg,
      cost : '4',
  
    },
    {
      name: 'Kayn',
      img: Kaynimg,
      cost : '4',
  
    },
    {
      name: 'KhaZix',
      img: KhaZiximg,
      cost : '1',
  
    },
    {
      name: 'Kindred',
      img: Kindredimg,
      cost : '2',
  
    },
    {
      name: 'Kobuko',
      img: Kobukoimg,
      cost : '1',
  
    },
    {
      name: 'KogMaw',
      img: KogMawimg,
      cost : '1',
  
    },
    {
      name: 'LeeSin',
      img: LeeSinimg,
      cost : '4',
  
    },
    {
      name: 'Lillia',
      img: Lilliaimg,
      cost : '4',
  
    },
    {
      name: 'Lissandra',
      img: Lissandraimg,
      cost : '5',
  
    },
    {
      name: 'Lux',
      img: Luximg,
      cost : '2',
  
    },
    {
      name: 'Malphite',
      img: Malphiteimg,
      cost : '1',
  
    },
    {
      name: 'Morgana',
      img: Morganaimg,
      cost : '4',
  
    },
    {
      name: 'Nautilus',
      img: Nautilusimg,
      cost : '4',
  
    },
    {
      name: 'Neeko',
      img: Neekoimg,
      cost : '2',
  
    },
    {
      name: 'Ornn',
      img: Ornnimg,
      cost : '4',
  
    },
    {
      name: 'Qiyana',
      img: Qiyanaimg,
      cost : '2',
  
    },
    {
      name: 'RekSai',
      img: RekSaiimg,
      cost : '1',
  
    },
    {
      name: 'Riven',
      img: Rivenimg,
      cost : '2',
  
    },
    {
      name: 'Senna',
      img: Sennaimg,
      cost : '2',
  
    },
    {
      name: 'Sett',
      img: Settimg,
      cost : '5',
  
    },
    {
      name: 'Shen',
      img: Shenimg,
      cost : '2',
  
    },
    {
      name: 'Sivir',
      img: Sivirimg,
      cost : '1',
  
    },
    {
      name: 'Soraka',
      img: Sorakaimg,
      cost : '3',
  
    },
    {
      name: 'Sylas',
      img: Sylasimg,
      cost : '4',
  
    },
    {
      name: 'Syndra',
      img: Syndraimg,
      cost : '4',
  
    },
    {
      name: 'TahmKench',
      img: TahmKenchimg,
      cost : '3',
  
    },
    {
      name: 'Teemo',
      img: Teemoimg,
      cost : '2',
  
    },
    {
      name: 'Thresh',
      img: Threshimg,
      cost : '3',
  
    },
    {
      name: 'Tristana',
      img: Tristanaimg,
      cost : '3',
  
    },
    {
      name: 'Udyr',
      img: Udyrimg,
      cost : '5',
  
    },
    {
      name: 'Volibear',
      img: Volibearimg,
      cost : '3',
  
    },
    {
      name: 'WuKong',
      img: WuKongimg,
      cost : '5',
  
    },
    {
      name: 'XayahRakan',
      img: XayahRakanimg,
      cost : '5',
  
    },
    {
      name: 'Yasuo',
      img: Yasuoimg,
      cost : '1',
  
    },
    {
      name: 'Yone',
      img: Yoneimg,
      cost : '3',
  
    },
    {
      name: 'Yorick',
      img: Yorickimg,
      cost : '2',
  
    },
    {
      name: 'Zoe',
      img: Zoeimg,
      cost : '3',
  
    },
    {
      name: 'Zyra',
      img: Zyraimg,
      cost : '2',
  
    }
   
   // Add other champion names as needed
  ];
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1>TFT Builder</h1>
       
        <Board />
        <ChampionPool champions={champions}/>
      </div>
    </DndProvider>
  );
};

export default App;
