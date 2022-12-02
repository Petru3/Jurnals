
import CardJurnal from '../../CardJurnal';

function VideoPage(){

    const dataJurnalCultural = [
        {
            id:1,
            link: 'https://drive.google.com/file/d/12nijc2oJaSdZJEo16WGV5RO7m81eCB-C/view?usp=share_link',
            title: 'Spania- O lunga istorie in timp',
            paragraph: 'Spania s-a împărțit în mai multe regate creștine și maure. Apariția populației islamice datează de la invaziile din secolul al VIII-lea, care au fost punctul de plecare al marii culturi spaniole.',
            image: require("../../assets/cultural-btn-1.png")
        },
        {
            id:2,
            link: 'https://drive.google.com/file/d/1Ia922tuJ_AnjMMnwxYsXpxnR1FbLAQ9A/view?usp=share_link',
            title: 'Spania - O mare istorie',
            paragraph: 'Muzeul Guggenheim Bilbao, inaugurat în 1997, are 19 galerii pe trei etaje, cea mai mare având 130 m lungime și 30 m lățime. Muzeul Prado din Madrid, aflat într-o clădire care datează din timpul lui Carol al III-lea, are peste 7.000 de opere de artă.',
            image: require("../../assets/cultural-btn-2.png")
        },
        {
            id:3,
            link: 'https://drive.google.com/file/d/14lpc02WdIVDiQEDvHKUv7WsFplTQ626s/view?usp=share_link',
            title: 'Andaluzia - o regiune frumoasă',
            paragraph: 'Dansul național al Andaluziei este flamenco, iar cel mai cunoscut simbol al său este personajul frumoasei Carmen din opera lui Georges Bizet. Orășelul Ronda, în apropiere de Malaga, este considerat locul de naștere al luptelor cu tauri, iar Francisco Romero din Ronda se bucură încă de faimă ca fiind cel mai mare toreador din toate timpurile.',
            image: require("../../assets/cultural-btn-3.png")
        }
    ]

    const loopOverCards = dataJurnalCultural.map(item => {
        return(
            <CardJurnal
            link={item.link}
            title={item.title}
            paragraph={item.paragraph}
            img={item.image}
            />
        )
    })

    return(
        <div className={"page cultural-page"}>
            <div className="container-background"><p>Cultural Jurnal</p></div>
            <h2>Jurnal Cultural</h2>
            <div className='image'></div>

            <div className='button-action'>
                {loopOverCards}
            </div>
        </div>    
    )
}

export default VideoPage