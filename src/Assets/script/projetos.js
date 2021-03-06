import uPixels_Img from '../imagens/uPixels.jpg'
import blueRidge_Img from '../imagens/blueRidge.jpg'
import todoList_Img from '../imagens/todoList.jpg'
import starbucks_Img from '../imagens/starbucks.jpg'
import portifolio_Img from '../imagens/portifolio.jpg'
import medicenter_Img from '../imagens/medicenter.jpg'

const listaProjetos = [
    {
        titulo: 'UPixels HUB',
        data: '21 de Setembro, 2021',
        imagem_preview: uPixels_Img,
        sobre: 'Projeto desenvolvido junto a equipe da UnitGames, se trata de um “website” que auxilia jogadores de CS:GO, onde tive contato com tecnologias frontend e backend.',
        link_preview: 'https://app.unitgames.com.br/'
    },
    {
        titulo: 'Blue Rigde Coffee',
        data: '11 de Agosto, 2021',
        imagem_preview: blueRidge_Img,
        sobre: 'A ideia inicial deste projeto foi praticar e aprimorar meus conhecimentos das bibliotecas ReactJS e Styled Components.',
        link_github: 'https://github.com/endreumrb/BlueRidge-ReactJS',
        link_preview: 'https://blue-ridge-coffee-endreubenites.netlify.app/'
    },
    {
        titulo: 'Portifólio Pessoal',
        data: '11 de Novembro, 2021',
        imagem_preview: portifolio_Img,
        sobre: 'Portfólio pessoal, onde exibo projetos já realizados e apresento quais foram tecnologias utilizadas.',
        link_github: 'https://github.com/endreumrb/portfolio2v',
        link_preview: 'https://endreubenites.com'
    },
    {
        titulo: 'TodoList',
        data: '16 de Agosto, 2021',
        imagem_preview: todoList_Img,
        sobre: 'Projeto prático consumindo uma API publica (JsonPlaceHolder), utilizano ReactJS e Styled Components.',
        link_github: 'https://github.com/endreumrb/TodoList-ReactJS',
        link_preview: 'https://todolist-endreubenites.netlify.app'
    },
    {
        titulo: 'Starbucks',
        data: '28 de Junho, 2021',
        imagem_preview: starbucks_Img,
        sobre: 'Cópia do antigo “website” utilizado pela empresa Starbucks, feito em HTML e CSS.',
        link_github: 'https://github.com/endreumrb/starbucks-copy',
        link_preview: 'https://starbucks-endreubenites.netlify.app'
    },
    {
        titulo: 'MediCenter',
        data: '09 de Julho, 2021',
        imagem_preview: medicenter_Img,
        sobre: 'Landing page para a empresa fictícia medicenter, feito em HTML e CSS.',
        link_github: 'https://github.com/endreumrb/medicenter',
        link_preview: 'https://medicenter-endreubenites.netlify.app'
    }
];

export default listaProjetos;