import React, { useEffect } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../redux/actions/index';

export default function News() {

    const news = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

    return (
        <div className='news'>
            {news.map(newsElement =>
                <div className="news-element" key={newsElement._id}>
                    <h3>{newsElement.title}</h3>
                    <p>{newsElement.content}</p>
                </div>
            )}
        </div>
    )
}
