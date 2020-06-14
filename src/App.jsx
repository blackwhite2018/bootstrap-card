import React from 'react';
import shortid from 'shortid';
import Card from './components/Card/Card';

const cards = [
    {
        title: 'Lorem',
        text: 'Lorem ipsam'
    },
    {
        title: 'Lorem',
        text: 'Lorem ipsam dolor',
        img: 'https://avatars.mds.yandex.net/get-pdb/404799/e98ba488-cffa-4b42-8ed2-d6eb0914c01d/s1200?webp=false'
    }
];

const cardIds = cards.reduce((acc, item) => {
    return [...acc, {
        _id: shortid.generate(),
        ...item
    }];
}, []);

const App = () => (
    <div className="container">
        {
            cardIds.map(({_id, title, text, img}) => {
                return (
                    <Card
                        key={ _id }
                        card={ { title, text } }
                    >
                    {
                        img ? <img src={ img } className="card-img-top" alt="..." /> : null
                    }
                    </Card>
                );
            })
        }
    </div>
);

export default App;

