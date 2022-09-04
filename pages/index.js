import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../libs/posts-util';
import Head from 'next/head';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Faizan' Blog</title>
                <meta
                    name='description'
                    content='I post about programming and web development.'
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}


export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
}

export default HomePage;