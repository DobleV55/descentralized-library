import PageLayout from './PageLayout';
import Link from 'next/link';

export default function About({ categories }) {
    return (
        <PageLayout title="about">
            {categories.map((category, index) => (
                <div key={index} className="grid max-w-2xl mx-auto">
                    <h1 className="justify-self-center font-bold text-center">
                        {category.name}
                    </h1>
                    <Link href={category.href}>{category.href}</Link>
                    <img
                        src={category.icons[0].url}
                        alt={`Image for the article ${category.name}`}
                    />
                </div>
            ))}
        </PageLayout>
    );
}

// n requests -> se ejecuta 1 vez en build time (o para refrescar la pagina).
export async function getStaticProps(context) {
    const response = await fetch(
        'https://api.spotify.com/v1/browse/categories',
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ',
            }),
        }
    );

    const data = await response.json();
    const categories = data.categories.items;
    return {
        props: {
            categories,
        },
    };
}

// n requests -> se ejecuta N veces.
// para datos que necesitas MUY live.
// o pq tiene demasiados datos dinamicos.
/* Este metodo se ejecuta en el servidor...
export async function getServerSideProps(context) {
    const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey='
    );
    const { articles } = await response.json();
    return {
        props: {
            articles,
        },
    };
}
*/
