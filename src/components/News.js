import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../redux/actions/index';
import loadingGif from '../images/loading.gif';

export default function News() {
    const [loading, setLoading] = useState(true);
    const news = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    setInterval(() => {
        setLoading(false)
    }, 4000)

    return (
        <div className='news'>
            {loading ? <img src={loadingGif} alt="loading..." /> : null}
            {news.map(newsElement =>
                <div className="news-element" key={newsElement._id}>
                    <h3>{newsElement.title}</h3>
                    <p>{newsElement.content}</p>
                </div>
            )}
        </div>
    )
}
