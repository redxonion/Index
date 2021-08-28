import dynamic from 'next/dynamic'

const LayoutDefault = dynamic(() => import ('@/layouts/default'), {
	loading: () => <p>Loading...</p>,
	ssr: true,
	});
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <LayoutDefault>{page}</LayoutDefault>)

  return getLayout(<Component {...pageProps} />)
}