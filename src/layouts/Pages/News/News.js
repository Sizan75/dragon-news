import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news= useLoaderData()
    return (
        <div>
            <h1>News</h1>
        </div>
    );
};

export default News;