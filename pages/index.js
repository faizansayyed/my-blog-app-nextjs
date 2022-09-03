import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../libs/posts-util';

function HomePage() {
    return (
        <Fragment>
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